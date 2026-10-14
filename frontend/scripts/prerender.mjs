// Post-build SEO: za svaku rutu (ro/en/de) pravi build/<ruta>/index.html sa ispravnim
// title/description/canonical/hreflang/Open Graph/JSON-LD i osnovnim HTML sadrzajem u <noscript>
// (za botove koji ne izvrsavaju JavaScript), i generise build/sitemap.xml.
// Pokrece se automatski posle `react-scripts build` (vidi package.json).
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const buildDir = path.join(root, 'build');
const dataDir = path.join(root, 'src', 'data');

// Ucitaj ES module iz src/data (pisane za CRA, bez .mjs ekstenzije) preko privremene kopije
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'plantdgd-seo-'));
for (const name of ['seoPages', 'productsData', 'guides']) {
  const src = fs.readFileSync(path.join(dataDir, `${name}.js`), 'utf8')
    .replace(/from '\.\/(\w+)'/g, "from './$1.mjs'");
  fs.writeFileSync(path.join(tmpDir, `${name}.mjs`), src);
}
const load = (name) => import(pathToFileURL(path.join(tmpDir, `${name}.mjs`)).href);
const seo = await load('seoPages');
const { products, categories } = await load('productsData');
const { guides, guidesIndex, guidePath, guidesForProduct, guidesForCategory, parseInlineLinks, GUIDES_PATH } = await load('guides');
fs.rmSync(tmpDir, { recursive: true, force: true });

const { SITE_URL, SUPPORTED_LANGS, buildLocalizedPath, categoryPages, homeContent, labels, productInCategory,
  getCategoryPageByCategoryId, productMeta, productPath, breadcrumbJsonLd, faqJsonLd, itemListJsonLd, articleJsonLd } = seo;

// Provera: svaki proizvod mora imati slug (seoPages.productSlugs) i 301 preusmerenje sa starog URL-a (vercel.json)
const vercelRedirects = new Set(JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8')).redirects.map(r => r.source));
for (const p of products) {
  if (!seo.productSlugs[p.id]) throw new Error(`prerender: proizvod ${p.id} nema slug u seoPages.js -> productSlugs`);
  for (const prefix of ['', '/en', '/de']) {
    if (!vercelRedirects.has(`${prefix}/products/${p.id}`)) throw new Error(`prerender: vercel.json nema redirect za ${prefix}/products/${p.id}`);
  }
}

// Upozorenje: slike proizvoda bez WebP verzija (sajt radi, ali sporije) -> python scripts/optimize_images.py
const missingVariants = [...new Set(products.flatMap(p => [p.image, ...(p.images || [])]))]
  .filter(img => !fs.existsSync(path.join(root, 'public', img.replace(/^\/images\//, '/images/thumbs/').replace(/\.\w+$/, '.webp'))));
if (missingVariants.length) {
  console.warn(`prerender: UPOZORENJE - ${missingVariants.length} slika bez WebP verzija, pokrenite: python scripts/optimize_images.py`);
}

const locales = Object.fromEntries(SUPPORTED_LANGS.map(lang => [
  lang, JSON.parse(fs.readFileSync(path.join(root, 'src', 'locales', `${lang}.json`), 'utf8'))
]));
// Prošireni sadržaj proizvoda (utilizare/plantare/îngrijire/FAQ), isti kao u ProductDetails.js
const productContent = Object.fromEntries(SUPPORTED_LANGS.map(lang => [
  lang, JSON.parse(fs.readFileSync(path.join(dataDir, 'productContent', `${lang}.json`), 'utf8'))
]));

// Vodiči (samo ro): tekst članaka, mora postojati za svaki vodič iz guides.js
const guidesContent = JSON.parse(fs.readFileSync(path.join(dataDir, 'guidesContent.json'), 'utf8'));
for (const g of guides) {
  if (!guidesContent[g.slug]) throw new Error(`prerender: vodič ${g.slug} nema tekst u src/data/guidesContent.json`);
}

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const absUrl = (p) => (p.startsWith('http') ? p : SITE_URL + encodeURI(p));
const DEFAULT_IMAGE = '/images/plantDGD2.png';

// ---------- Rute: neutralna putanja + generator sadrzaja po jeziku ----------
const pages = [];

pages.push({
  path: '/',
  build: (L, loc, P) => ({
    title: loc.seo.homeTitle, description: loc.seo.homeDescription,
    jsonLd: [faqJsonLd(homeContent[L].faq)],
    body: `<h1>${esc(loc.home.title)}</h1><p>${esc(loc.home.subtitle)}</p>
<h2>${esc(homeContent[L].introTitle)}</h2>${homeContent[L].intro.map(p => `<p>${esc(p)}</p>`).join('')}
<h2>${esc(homeContent[L].categoriesTitle)}</h2><ul>${categoryPages.map(c => `<li><a href="${P(`/${c.slug}`)}">${esc(c.content[L].name)}</a></li>`).join('')}</ul>
<h2>${esc(labels[L].faqTitle)}</h2>${homeContent[L].faq.map(f => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('')}`
  })
});

pages.push({
  path: '/products',
  build: (L, loc, P) => ({
    title: loc.seo.productsTitle, description: loc.seo.productsDescription, jsonLd: [],
    body: `<h1>${esc(loc.products.title)}</h1><p>${esc(loc.products.subtitle)}</p>${productLinks(products, L, P)}`
  })
});

for (const page of categoryPages) {
  const list = products.filter(p => productInCategory(p, page.categoryId));
  pages.push({
    path: `/${page.slug}`, image: page.image,
    build: (L, loc, P) => {
      const c = page.content[L];
      return {
        title: c.title, description: c.description,
        jsonLd: [
          breadcrumbJsonLd([{ name: loc.nav.home, path: P('/') }, { name: loc.nav.products, path: P('/products') }, { name: c.name, path: P(`/${page.slug}`) }]),
          itemListJsonLd(list.map(p => ({ name: pName(p, L), path: P(productPath(p.id)) }))),
          faqJsonLd(c.faq)
        ],
        body: `<h1>${esc(c.h1)}</h1>${c.intro.map(p => `<p>${esc(p)}</p>`).join('')}${productLinks(list, L, P)}
<h2>${esc(labels[L].faqTitle)}</h2>${c.faq.map(f => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('')}${L === 'ro' ? guideLinks(guidesForCategory(page.categoryId)) : ''}`
      };
    }
  });
}

for (const p of products) {
  pages.push({
    path: productPath(p.id), image: p.image,
    images: p.images && p.images.length ? p.images : [p.image],
    build: (L, loc, P) => {
      const name = pName(p, L);
      const desc = loc.productDescriptions?.[p.id]?.description || p.description;
      const meta = productMeta(name, desc, L);
      const cat = categories.find(c => c.id === p.category);
      const categoryName = cat ? get(loc, cat.nameKey) || p.category : p.category;
      const catPage = getCategoryPageByCategoryId(p.category);
      const url = SITE_URL + P(productPath(p.id));
      // Isti Product schema kao u ProductDetails.js
      const productSchema = {
        '@context': 'https://schema.org', '@type': 'Product', name, description: desc,
        image: `${SITE_URL}${p.image}`, sku: String(p.id), category: categoryName,
        brand: { '@type': 'Brand', name: 'PlantDGD' }, url,
        offers: {
          '@type': 'Offer', url,
          availability: p.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
          seller: { '@type': 'Organization', name: 'PlantDGD' }
        }
      };
      const crumbs = [
        { name: loc.nav.home, path: P('/') },
        { name: loc.nav.products, path: P('/products') },
        ...(catPage ? [{ name: catPage.content[L].name, path: P(`/${catPage.slug}`) }] : []),
        { name, path: P(productPath(p.id)) }
      ];
      const specs = Object.entries(p.details || {}).map(([k, v]) =>
        `<li>${esc(loc.productDetails[k] || k)}: ${esc(loc.productDescriptions?.[p.id]?.details?.[k] || v)}</li>`).join('');
      const related = products.filter(o => o.id !== p.id && productInCategory(o, p.category)).slice(0, 4);
      const extra = productContent[L][p.id];
      if (!extra) throw new Error(`prerender: proizvod ${p.id} nema tekst u src/data/productContent/${L}.json`);
      const extraHtml = ['uses', 'planting', 'care'].map(k => `<h2>${esc(labels[L][k])}</h2><p>${esc(extra[k])}</p>`).join('') +
        `<h2>${esc(labels[L].faqTitle)}</h2>${extra.faq.map(f => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('')}`;
      return {
        ...meta, jsonLd: [productSchema, breadcrumbJsonLd(crumbs), faqJsonLd(extra.faq)],
        body: `<h1>${esc(name)}</h1><img src="${encodeURI(p.image)}" alt="${esc(name)}"><p>${esc(desc)}</p>
<p>${esc(loc.products.priceOnRequest || '')} – <a href="${P('/contact')}">${esc(loc.productDetails.contactUs)}</a></p>
${specs ? `<h2>${esc(loc.productDetails.specifications)}</h2><ul>${specs}</ul>` : ''}
${extraHtml}
${catPage ? `<p><a href="${P(`/${catPage.slug}`)}">${esc(catPage.content[L].name)}</a></p>` : ''}${productLinks(related, L, P)}${L === 'ro' ? guideLinks(guidesForProduct(p.id)) : ''}`
      };
    }
  });
}

pages.push({
  path: '/about',
  build: (L, loc) => ({
    title: loc.seo.aboutTitle, description: loc.seo.aboutDescription, jsonLd: [],
    body: `<h1>${esc(loc.about.title)}</h1><p>${esc(loc.about.subtitle)}</p><p>${esc(loc.about.story1)}</p><p>${esc(loc.about.story2)}</p>`
  })
});
pages.push({
  path: '/contact',
  build: (L, loc) => ({
    title: loc.seo.contactTitle, description: loc.seo.contactDescription, jsonLd: [],
    body: `<h1>${esc(loc.contact.title)}</h1><p>${esc(loc.contact.subtitle)}</p><p>${esc(loc.contact.locationDesc || '')}</p>`
  })
});
pages.push({
  path: '/gallery',
  build: (L, loc) => ({
    title: loc.seo.galleryTitle, description: loc.seo.galleryDescription, jsonLd: [],
    body: `<h1>${esc(loc.gallery.title)}</h1><p>${esc(loc.gallery.subtitle)}</p>`
  })
});

// ---------- Vodiči (/ghiduri) - samo na rumunskom ----------
pages.push({
  path: GUIDES_PATH, langs: ['ro'],
  build: () => ({
    title: guidesIndex.title, description: guidesIndex.description,
    jsonLd: [
      breadcrumbJsonLd([{ name: 'Acasă', path: '/' }, { name: 'Ghiduri', path: GUIDES_PATH }]),
      itemListJsonLd(guides.map(g => ({ name: g.h1, path: guidePath(g.slug) })))
    ],
    body: `<h1>${esc(guidesIndex.h1)}</h1><p>${esc(guidesIndex.intro)}</p><ul>${guides.map(g => `<li><a href="${guidePath(g.slug)}">${esc(g.h1)}</a> – ${esc(g.excerpt)}</li>`).join('')}</ul>`
  })
});
for (const g of guides) {
  const blocks = guidesContent[g.slug];
  const faq = blocks.find(b => b[0] === 'faq');
  const guideProducts = g.products.map(id => products.find(p => p.id === id)).filter(Boolean);
  pages.push({
    path: guidePath(g.slug), langs: ['ro'], image: g.image, images: [g.image],
    build: (L, loc, P) => ({
      title: g.title, description: g.description,
      jsonLd: [
        articleJsonLd(g, SITE_URL + guidePath(g.slug)),
        breadcrumbJsonLd([{ name: 'Acasă', path: '/' }, { name: 'Ghiduri', path: GUIDES_PATH }, { name: g.h1, path: guidePath(g.slug) }]),
        ...(faq ? [faqJsonLd(faq[1])] : [])
      ],
      body: `<h1>${esc(g.h1)}</h1><img src="${encodeURI(g.image)}" alt="${esc(g.imageAlt)}">${blocks.map(blockHtml).join('')}<h2>Plante din acest ghid</h2>${productLinks(guideProducts, L, P)}`
    })
  });
}

function inline(text) {
  return parseInlineLinks(text).map(part => (part.href ? `<a href="${esc(part.href)}">${esc(part.text)}</a>` : esc(part.text))).join('');
}
function blockHtml([type, data]) {
  switch (type) {
    case 'h2': return `<h2>${esc(data)}</h2>`;
    case 'p': return `<p>${inline(data)}</p>`;
    case 'ul': return `<ul>${data.map(i => `<li>${inline(i)}</li>`).join('')}</ul>`;
    case 'table': return `<table><thead><tr>${data.head.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${data.rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
    case 'img': return `<img src="${encodeURI(data.src)}" alt="${esc(data.alt)}">`;
    case 'faq': return `<h2>Întrebări frecvente</h2>${data.map(f => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('')}`;
    default: return '';
  }
}
function guideLinks(list) {
  return list.length ? `<h2>Ghiduri utile</h2><ul>${list.map(g => `<li><a href="${guidePath(g.slug)}">${esc(g.h1)}</a></li>`).join('')}</ul>` : '';
}

function get(obj, key) { return key.split('.').reduce((o, k) => (o ? o[k] : undefined), obj); }
function pName(p, L) { return locales[L].productDescriptions?.[p.id]?.name || p.name; }
function productLinks(list, L, P) {
  return `<ul>${list.map(p => `<li><a href="${P(productPath(p.id))}">${esc(pName(p, L))}</a></li>`).join('')}</ul>`;
}

// ---------- Generisanje HTML-a ----------
const template = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');

const setTag = (html, matcher, newTag) => {
  const re = new RegExp(`<meta[^>]*${matcher}[^>]*>`);
  if (!re.test(html)) throw new Error(`prerender: tag nije pronadjen u index.html: ${matcher}`);
  return html.replace(re, newTag);
};

const hreflangLinks = (neutralPath, lang, langs = SUPPORTED_LANGS) => {
  if (langs.length === 1) return `<link rel="canonical" href="${SITE_URL + buildLocalizedPath(neutralPath, lang)}" data-rh="true"/>`;
  const urls = Object.fromEntries(SUPPORTED_LANGS.map(l => [l, SITE_URL + buildLocalizedPath(neutralPath, l)]));
  return `<link rel="canonical" href="${urls[lang]}" data-rh="true"/>` +
    SUPPORTED_LANGS.map(l => `<link rel="alternate" hreflang="${l}" href="${urls[l]}" data-rh="true"/>`).join('') +
    `<link rel="alternate" hreflang="x-default" href="${urls.ro}" data-rh="true"/>`;
};

const navHtml = (L, loc, P) => `<nav><a href="${P('/')}">${esc(loc.nav.home)}</a> | <a href="${P('/products')}">${esc(loc.nav.products)}</a> | ${
  categoryPages.map(c => `<a href="${P(`/${c.slug}`)}">${esc(c.content[L].name)}</a>`).join(' | ')
} | <a href="${P('/about')}">${esc(loc.nav.about)}</a> | <a href="${P('/contact')}">${esc(loc.nav.contact)}</a> | <a href="${P('/gallery')}">${esc(loc.nav.gallery)}</a>${L === 'ro' ? ` | <a href="${GUIDES_PATH}">Ghiduri</a>` : ''}</nav>`;

let count = 0;
for (const page of pages) {
  for (const L of page.langs || SUPPORTED_LANGS) {
    const loc = locales[L];
    const P = (neutral) => buildLocalizedPath(neutral, L);
    const r = page.build(L, loc, P);
    const localPath = P(page.path);
    const url = SITE_URL + localPath;
    const image = absUrl(page.image || DEFAULT_IMAGE);

    let html = template
      .replace(/<html lang="[^"]*"/, `<html lang="${L}"`)
      .replace(/<title>[^<]*<\/title>/, `<title>${esc(r.title)}</title>`);
    html = setTag(html, 'name="description"', `<meta name="description" content="${esc(r.description)}" data-rh="true"/>`);
    html = setTag(html, 'property="og:url"', `<meta property="og:url" content="${url}" data-rh="true"/>`);
    html = setTag(html, 'property="og:title"', `<meta property="og:title" content="${esc(r.title)}" data-rh="true"/>`);
    html = setTag(html, 'property="og:description"', `<meta property="og:description" content="${esc(r.description)}" data-rh="true"/>`);
    html = setTag(html, 'property="og:image"', `<meta property="og:image" content="${image}" data-rh="true"/>`);
    html = setTag(html, 'name="twitter:title"', `<meta name="twitter:title" content="${esc(r.title)}" data-rh="true"/>`);
    html = setTag(html, 'name="twitter:description"', `<meta name="twitter:description" content="${esc(r.description)}" data-rh="true"/>`);
    html = setTag(html, 'name="twitter:image"', `<meta name="twitter:image" content="${image}" data-rh="true"/>`);
    const ld = r.jsonLd.map(d => `<script type="application/ld+json" data-rh="true">${JSON.stringify(d).replace(/</g, '\\u003c')}</script>`).join('');
    html = html.replace('</head>', `${hreflangLinks(page.path, L, page.langs)}${ld}</head>`);
    if (!html.includes('<div id="root"></div>')) throw new Error('prerender: <div id="root"></div> nije pronadjen');
    const footer = `<footer><p>PlantDGD S.R.L. – ${esc(loc.contact.address)}, ${esc(loc.contact.addressCity)} – Tel: +40 729 048 545 – office@plantdgd.ro</p></footer>`;
    // Sadrzaj u <noscript> vide samo botovi bez JavaScript-a; posetioci ga ne vide (nema "blica" pre React-a)
    html = html.replace('<div id="root"></div>', `<noscript>${navHtml(L, loc, P)}<main>${r.body}</main>${footer}</noscript><div id="root"></div>`);

    const out = localPath === '/' ? path.join(buildDir, 'index.html') : path.join(buildDir, localPath, 'index.html');
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html);
    count++;
  }
}

// ---------- sitemap.xml (hreflang alternative + slike proizvoda) ----------
const today = new Date().toISOString().slice(0, 10);
const priority = (p) => (p === '/' ? '1.0' : p.startsWith(GUIDES_PATH) ? '0.7' : p === '/products' || categoryPages.some(c => `/${c.slug}` === p) ? '0.9' : p.startsWith('/products/') ? '0.7' : '0.6');
const xmlEsc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const entries = [];
for (const page of pages) {
  const langs = page.langs || SUPPORTED_LANGS;
  const alternates = langs.length === 1 ? '    <!-- doar ro -->' : SUPPORTED_LANGS.map(l =>
    `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}${buildLocalizedPath(page.path, l)}" />`).join('\n') +
    `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${buildLocalizedPath(page.path, 'ro')}" />`;
  const images = (page.images || []).map(img => `\n    <image:image><image:loc>${xmlEsc(absUrl(img))}</image:loc></image:image>`).join('');
  for (const L of langs) {
    entries.push(`  <url>
    <loc>${SITE_URL}${buildLocalizedPath(page.path, L)}</loc>
    <lastmod>${today}</lastmod>
    <priority>${priority(page.path)}</priority>
${alternates}${L === 'ro' ? images : ''}
  </url>`);
  }
}
fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.join('\n')}
</urlset>
`);

console.log(`prerender: ${count} stranica + sitemap.xml (${entries.length} URL-ova) generisano`);
