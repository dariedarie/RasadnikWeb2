import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products } from '../data/productsData';
import { guides, getGuideBySlug, guidePath, parseInlineLinks, GUIDES_PATH } from '../data/guides';
import { productPath, breadcrumbJsonLd, faqJsonLd, articleJsonLd, SITE_URL } from '../data/seoPages';
import { thumbSrc, mediumSrc, fallbackTo } from '../utils/images';
import HedgeCalculator from '../components/HedgeCalculator';
import './Products.css';

const textColor = '#234d20';

// Tekst sa linkovima u formatu [tekst](/putanja)
const RichText = ({ text }) => parseInlineLinks(text).map((part, i) =>
  part.href
    ? <Link key={i} to={part.href} style={{ color: '#2e7d32', fontWeight: 600 }}>{part.text}</Link>
    : <React.Fragment key={i}>{part.text}</React.Fragment>
);

const Block = ({ block }) => {
  const [type, data] = block;
  switch (type) {
    case 'h2':
      return <h2 style={{ color: '#2e7d32', fontWeight: 700, fontSize: '1.45rem', margin: '32px 0 12px' }}>{data}</h2>;
    case 'p':
      return <p style={{ color: textColor, lineHeight: 1.75, fontSize: '1.05rem' }}><RichText text={data} /></p>;
    case 'ul':
      return (
        <ul style={{ color: textColor, lineHeight: 1.7, fontSize: '1.05rem', paddingLeft: 22 }}>
          {data.map((item, i) => <li key={i} style={{ marginBottom: 6 }}><RichText text={item} /></li>)}
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
      return <HedgeCalculator />;
    case 'faq':
      return (
        <section>
          <h2 style={{ color: '#2e7d32', fontWeight: 700, fontSize: '1.45rem', margin: '32px 0 12px' }}>Întrebări frecvente</h2>
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
  const { t } = useTranslation();
  const guide = getGuideBySlug(slug);
  const [content, setContent] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    import('../data/guidesContent.json').then(m => setContent(m.default || m)).catch(() => {});
  }, [slug]);

  if (!guide) return <Navigate to={GUIDES_PATH} replace />;

  const blocks = content ? content[guide.slug] : null;
  const faqBlock = blocks ? blocks.find(b => b[0] === 'faq') : null;
  const url = SITE_URL + guidePath(guide.slug);
  const crumbs = [
    { name: 'Acasă', path: '/' },
    { name: 'Ghiduri', path: GUIDES_PATH },
    { name: guide.h1, path: guidePath(guide.slug) }
  ];
  const relatedProducts = guide.products.map(id => products.find(p => p.id === id)).filter(Boolean).slice(0, 4);
  const otherGuides = guides.filter(g => g.slug !== guide.slug).slice(0, 3);
  const productName = (p) => t(`productDescriptions.${p.id}.name`, { defaultValue: p.name });

  return (
    <>
    <Helmet>
      <title>{guide.title}</title>
      <meta name="description" content={guide.description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={guide.title} />
      <meta property="og:description" content={guide.description} />
      <meta property="og:image" content={SITE_URL + guide.image} />
      <meta property="og:url" content={url} />
      <script type="application/ld+json">{JSON.stringify(articleJsonLd(guide, url))}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd(crumbs))}</script>
      {faqBlock && <script type="application/ld+json">{JSON.stringify(faqJsonLd(faqBlock[1]))}</script>}
    </Helmet>
    <div style={{ background: 'linear-gradient(135deg, #e0f2f1 0%, #f9fbe7 100%)', minHeight: '100vh', padding: '32px 16px 48px' }}>
      <article style={{ maxWidth: 860, margin: '0 auto', background: '#fff', borderRadius: 18, boxShadow: '0 8px 32px rgba(44,62,80,0.08)', padding: 'clamp(20px, 4vw, 44px)' }}>
        <nav className="breadcrumb" aria-label="breadcrumb" style={{ marginBottom: 16 }}>
          <Link to="/">Acasă</Link>
          <span className="breadcrumb-separator"> / </span>
          <Link to={GUIDES_PATH}>Ghiduri</Link>
        </nav>
        <h1 style={{ color: '#1b5e20', fontWeight: 800, fontSize: 'clamp(1.6rem, 4vw, 2.3rem)', lineHeight: 1.25, marginBottom: 10 }}>{guide.h1}</h1>
        <p style={{ color: '#558b2f', fontSize: '0.92rem', marginBottom: 20 }}>
          PlantDGD · <time dateTime={guide.date}>{new Date(guide.date).toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
        </p>
        <img src={mediumSrc(guide.image)} alt={guide.imageAlt} fetchpriority="high" onError={fallbackTo(guide.image)}
          style={{ width: '100%', maxHeight: 460, objectFit: 'cover', borderRadius: 14, marginBottom: 20 }} />

        {blocks ? blocks.map((b, i) => <Block key={i} block={b} />) : <p style={{ color: textColor }}>{guide.excerpt}</p>}

        {relatedProducts.length > 0 && (
          <section style={{ marginTop: 40 }}>
            <h2 style={{ color: '#2e7d32', fontWeight: 700, fontSize: '1.45rem', marginBottom: 16 }}>Plante din acest ghid, disponibile en gros</h2>
            <div className="products-grid-compact">
              {relatedProducts.map(p => (
                <Link key={p.id} to={productPath(p.id)} className="product-card-compact">
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
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 8, color: '#fff' }}>Aveți un proiect? Cereți o ofertă en gros</h2>
          <p style={{ marginBottom: 14, opacity: 0.95 }}>Trimiteți-ne lista de plante și cantitățile, iar noi vă răspundem cu o ofertă personalizată. Livrăm în toată România.</p>
          <Link to="/contact" style={{ display: 'inline-block', background: '#fff', color: '#2e7d32', padding: '10px 26px', borderRadius: 25, fontWeight: 700, textDecoration: 'none' }}>Cere ofertă</Link>
        </section>

        <section style={{ marginTop: 40 }}>
          <h2 style={{ color: '#2e7d32', fontWeight: 700, fontSize: '1.3rem', marginBottom: 12 }}>Alte ghiduri</h2>
          <ul style={{ paddingLeft: 20, lineHeight: 1.9 }}>
            {otherGuides.map(g => <li key={g.slug}><Link to={guidePath(g.slug)} style={{ color: '#2e7d32', fontWeight: 600 }}>{g.h1}</Link></li>)}
            <li><Link to={GUIDES_PATH} style={{ color: '#2e7d32', fontWeight: 600 }}>Toate ghidurile</Link></li>
          </ul>
        </section>
      </article>
    </div>
    </>
  );
};

export default GuideArticle;
