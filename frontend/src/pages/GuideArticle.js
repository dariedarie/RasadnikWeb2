import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products } from '../data/productsData';
import { guides, getGuideBySlug, guidePath, guideMeta, guideLabelsFor, parseInlineLinks, GUIDES_PATH } from '../data/guides';
import { productPath, buildLocalizedPath, breadcrumbJsonLd, faqJsonLd, articleJsonLd, SITE_URL } from '../data/seoPages';
import { getSeoLinks } from '../utils/i18nRoutes';
import { thumbSrc, mediumSrc, fallbackTo } from '../utils/images';
import HedgeCalculator from '../components/HedgeCalculator';
import './Products.css';

const textColor = '#234d20';
const h2Style = { color: '#2e7d32', fontWeight: 700, fontSize: '1.45rem', margin: '32px 0 12px' };

// Tekst sa linkovima u formatu [tekst](/putanja); putanja dobija prefiks jezika
const RichText = ({ text, lang }) => parseInlineLinks(text).map((part, i) =>
  part.href
    ? <Link key={i} to={buildLocalizedPath(part.href, lang)} style={{ color: '#2e7d32', fontWeight: 600 }}>{part.text}</Link>
    : <React.Fragment key={i}>{part.text}</React.Fragment>
);

const Block = ({ block, lang, labels }) => {
  const [type, data] = block;
  switch (type) {
    case 'h2':
      return <h2 style={h2Style}>{data}</h2>;
    case 'p':
      return <p style={{ color: textColor, lineHeight: 1.75, fontSize: '1.05rem' }}><RichText text={data} lang={lang} /></p>;
    case 'ul':
      return (
        <ul style={{ color: textColor, lineHeight: 1.7, fontSize: '1.05rem', paddingLeft: 22 }}>
          {data.map((item, i) => <li key={i} style={{ marginBottom: 6 }}><RichText text={item} lang={lang} /></li>)}
        </ul>
      );
    case 'table':
      return (
        <div style={{ overflowX: 'auto', margin: '12px 0 20px' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: 480, fontSize: '0.98rem', color: textColor }}>
            <thead>
              <tr>{data.head.map((h, i) => <th key={i} style={{ background: '#2e7d32', color: '#fff', padding: '10px 12px', textAlign: 'left' }}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {data.rows.map((row, r) => (
                <tr key={r} style={{ background: r % 2 ? '#f9fbe7' : '#fff' }}>
                  {row.map((cell, c) => <td key={c} style={{ padding: '9px 12px', borderBottom: '1px solid #e0e0e0', fontWeight: c === 0 ? 600 : 400 }}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'img':
      return (
        <figure style={{ margin: '20px 0' }}>
          <img src={data.src} alt={data.alt} loading="lazy" style={{ width: '100%', maxHeight: 480, objectFit: 'cover', borderRadius: 14 }} />
          <figcaption style={{ color: '#558b2f', fontSize: '0.9rem', marginTop: 6 }}>{data.alt}</figcaption>
        </figure>
      );
    case 'calculator':
      return <HedgeCalculator lang={lang} />;
    case 'faq':
      return (
        <section>
          <h2 style={h2Style}>{labels.faq}</h2>
          {data.map((f, i) => (
            <div key={i} style={{ marginBottom: 16 }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: textColor, marginBottom: 4 }}>{f.q}</h3>
              <p style={{ color: textColor, lineHeight: 1.6, marginBottom: 0 }}>{f.a}</p>
            </div>
          ))}
        </section>
      );
    default:
      return null;
  }
};

const GuideArticle = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const lang = ['ro', 'en', 'de'].includes(i18n.language) ? i18n.language : 'ro';
  const P = (neutral) => buildLocalizedPath(neutral, lang);
  const base = getGuideBySlug(slug);
  const [contentByLang, setContentByLang] = useState({});

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, [slug]);

  useEffect(() => {
    if (contentByLang[lang]) return;
    import(`../data/guidesContent.${lang}.json`)
      .then(m => setContentByLang(prev => ({ ...prev, [lang]: m.default || m })))
      .catch(() => {});
  }, [lang, contentByLang]);

  if (!base) return <Navigate to={P(GUIDES_PATH)} replace />;

  const guide = guideMeta(base, lang);
  const labels = guideLabelsFor(lang);
  const blocks = contentByLang[lang] ? contentByLang[lang][guide.slug] : null;
  const faqBlock = blocks ? blocks.find(b => b[0] === 'faq') : null;
  const path = P(guidePath(guide.slug));
  const url = SITE_URL + path;
  const crumbs = [
    { name: labels.home, path: P('/') },
    { name: labels.guides, path: P(GUIDES_PATH) },
    { name: guide.h1, path }
  ];
  const relatedProducts = guide.products.map(id => products.find(p => p.id === id)).filter(Boolean).slice(0, 4);
  const otherGuides = guides.filter(g => g.slug !== guide.slug).slice(0, 3).map(g => guideMeta(g, lang));
  const productName = (p) => t(`productDescriptions.${p.id}.name`, { defaultValue: p.name });

  return (
    <>
    <Helmet>
      <title>{guide.title}</title>
      <meta name="description" content={guide.description} />
      {getSeoLinks(guidePath(guide.slug), lang)}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={guide.title} />
      <meta property="og:description" content={guide.description} />
      <meta property="og:image" content={SITE_URL + encodeURI(guide.image)} />
      <meta property="og:url" content={url} />
      <script type="application/ld+json">{JSON.stringify(articleJsonLd(guide, url, lang))}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd(crumbs))}</script>
      {faqBlock && <script type="application/ld+json">{JSON.stringify(faqJsonLd(faqBlock[1]))}</script>}
    </Helmet>
    <div style={{ background: 'linear-gradient(135deg, #e0f2f1 0%, #f9fbe7 100%)', minHeight: '100vh', padding: '32px 16px 48px' }}>
      <article style={{ maxWidth: 860, margin: '0 auto', background: '#fff', borderRadius: 18, boxShadow: '0 8px 32px rgba(44,62,80,0.08)', padding: 'clamp(20px, 4vw, 44px)' }}>
        <nav className="breadcrumb" aria-label="breadcrumb" style={{ marginBottom: 16 }}>
          <Link to={P('/')}>{labels.home}</Link>
          <span className="breadcrumb-separator"> / </span>
          <Link to={P(GUIDES_PATH)}>{labels.guides}</Link>
        </nav>
        <h1 style={{ color: '#1b5e20', fontWeight: 800, fontSize: 'clamp(1.6rem, 4vw, 2.3rem)', lineHeight: 1.25, marginBottom: 10 }}>{guide.h1}</h1>
        <p style={{ color: '#558b2f', fontSize: '0.92rem', marginBottom: 20 }}>
          PlantDGD · <time dateTime={guide.date}>{new Date(guide.date).toLocaleDateString(labels.locale, { day: 'numeric', month: 'long', year: 'numeric' })}</time>
        </p>
        <img src={mediumSrc(guide.image)} alt={guide.imageAlt} fetchpriority="high" onError={fallbackTo(guide.image)}
          style={{ width: '100%', maxHeight: 460, objectFit: 'cover', borderRadius: 14, marginBottom: 20 }} />

        {blocks ? blocks.map((b, i) => <Block key={i} block={b} lang={lang} labels={labels} />) : <p style={{ color: textColor }}>{guide.excerpt}</p>}

        {relatedProducts.length > 0 && (
          <section style={{ marginTop: 40 }}>
            <h2 style={{ ...h2Style, margin: '0 0 16px' }}>{labels.productsTitle}</h2>
            <div className="products-grid-compact">
              {relatedProducts.map(p => (
                <Link key={p.id} to={P(productPath(p.id))} className="product-card-compact">
                  <div className="product-image-compact">
                    <img src={thumbSrc(p.image)} alt={productName(p)} loading="lazy" onError={fallbackTo(p.image)} />
                  </div>
                  <div className="product-info-compact"><h3>{productName(p)}</h3></div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section style={{ marginTop: 40, padding: 24, background: '#2e7d32', borderRadius: 14, color: '#fff' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 8, color: '#fff' }}>{labels.ctaTitle}</h2>
          <p style={{ marginBottom: 14, opacity: 0.95 }}>{labels.ctaText}</p>
          <Link to={P('/contact')} style={{ display: 'inline-block', background: '#fff', color: '#2e7d32', padding: '10px 26px', borderRadius: 25, fontWeight: 700, textDecoration: 'none' }}>{labels.ctaButton}</Link>
        </section>

        <section style={{ marginTop: 40 }}>
          <h2 style={{ ...h2Style, fontSize: '1.3rem', margin: '0 0 12px' }}>{labels.other}</h2>
          <ul style={{ paddingLeft: 20, lineHeight: 1.9 }}>
            {otherGuides.map(g => <li key={g.slug}><Link to={P(guidePath(g.slug))} style={{ color: '#2e7d32', fontWeight: 600 }}>{g.h1}</Link></li>)}
            <li><Link to={P(GUIDES_PATH)} style={{ color: '#2e7d32', fontWeight: 600 }}>{labels.all}</Link></li>
          </ul>
        </section>
      </article>
    </div>
    </>
  );
};

export default GuideArticle;
