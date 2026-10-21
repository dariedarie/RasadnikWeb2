import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { exportPage, categoryPages, pickLang, labels, breadcrumbJsonLd, faqJsonLd } from '../data/seoPages';
import { getLangPrefix, getSeoLinks, SITE_URL } from '../utils/i18nRoutes';
import { mediumSrc, fallbackTo } from '../utils/images';
import './Products.css';

const boxStyle = {
  background: '#fff',
  borderRadius: 18,
  boxShadow: '0 8px 32px rgba(44,62,80,0.08)',
  maxWidth: 1200,
  margin: '0 auto 32px auto',
  padding: 32
};
const h2Style = { color: '#2e7d32', fontWeight: 700, marginBottom: 16, fontSize: '1.6rem' };
const textStyle = { fontSize: '1.05rem', color: '#234d20', lineHeight: 1.7 };

// Stranica o izvozu - cilja pretrage tipa "wholesale plants Europe", "Pflanzen Großhandel Export"
const ExportPage = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const prefix = getLangPrefix(lang);
  const content = pickLang(exportPage.content, lang);
  const path = `${prefix}/${exportPage.slug}`;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const jsonLd = [
    breadcrumbJsonLd([
      { name: t('nav.home'), path: prefix || '/' },
      { name: content.name, path }
    ]),
    faqJsonLd(content.faq)
  ];

  return (
    <>
    <Helmet>
      <title>{content.title}</title>
      <meta name="description" content={content.description} />
      {getSeoLinks(`/${exportPage.slug}`, lang)}
      <meta property="og:title" content={content.title} />
      <meta property="og:description" content={content.description} />
      <meta property="og:image" content={SITE_URL + encodeURI(exportPage.images[0])} />
      <meta property="og:url" content={SITE_URL + path} />
      {jsonLd.map((data, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(data)}</script>
      ))}
    </Helmet>
    <div className="products-page" style={{background: 'linear-gradient(135deg, #e0f2f1 0%, #f9fbe7 100%)', minHeight: '100vh', padding: '32px 16px 48px'}}>
      <nav className="breadcrumb" aria-label="breadcrumb" style={{maxWidth: 1200, margin: '0 auto 16px auto'}}>
        <Link to={prefix || '/'}>{t('nav.home')}</Link>
        <span className="breadcrumb-separator"> / </span>
        <span className="breadcrumb-current">{content.name}</span>
      </nav>

      <section style={boxStyle}>
        <h1 style={{color: '#2e7d32', fontWeight: 700, marginBottom: 16}}>{content.h1}</h1>
        {content.intro.map((p, i) => <p key={i} style={textStyle}>{p}</p>)}
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 16, margin: '20px 0'}}>
          {exportPage.images.map((img, i) => (
            <img key={img} src={mediumSrc(img)} onError={fallbackTo(img)} alt={content.imageAlt[i]} loading={i ? 'lazy' : 'eager'}
              style={{flex: '1 1 320px', maxWidth: '100%', height: 300, objectFit: 'cover', borderRadius: 14}} />
          ))}
        </div>
        <Link to={`${prefix}/contact`} style={{display: 'inline-block', marginTop: 8, padding: '12px 32px', borderRadius: 30, background: '#2e7d32', color: '#fff', textDecoration: 'none', fontWeight: 600}}>
          {t('productDetails.contactUs')}
        </Link>
      </section>

      {content.sections.map(s => (
        <section key={s.h2} style={boxStyle}>
          <h2 style={h2Style}>{s.h2}</h2>
          {s.p && s.p.map((p, i) => <p key={i} style={textStyle}>{p}</p>)}
          {s.ul && <ul style={{...textStyle, paddingLeft: 22, marginBottom: 0}}>{s.ul.map((li, i) => <li key={i}>{li}</li>)}</ul>}
          {s.ol && <ol style={{...textStyle, paddingLeft: 22, marginBottom: 0}}>{s.ol.map((li, i) => <li key={i}>{li}</li>)}</ol>}
        </section>
      ))}

      <section style={boxStyle}>
        <h2 style={h2Style}>{pickLang(labels, lang).faqTitle}</h2>
        {content.faq.map((f, i) => (
          <div key={i} style={{marginBottom: 20}}>
            <h3 style={{fontSize: '1.1rem', fontWeight: 600, color: '#234d20', marginBottom: 6}}>{f.q}</h3>
            <p style={{color: '#234d20', lineHeight: 1.6, marginBottom: 0}}>{f.a}</p>
          </div>
        ))}
      </section>

      <section style={{...boxStyle, padding: '24px 32px'}}>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center'}}>
          <Link to={`${prefix}/products`} style={{padding: '10px 22px', borderRadius: 25, background: '#2e7d32', color: '#fff', fontWeight: 600, textDecoration: 'none'}}>{t('nav.products')}</Link>
          {categoryPages.map(c => (
            <Link key={c.slug} to={`${prefix}/${c.slug}`} style={{padding: '10px 22px', border: '2px solid #2e7d32', borderRadius: 25, color: '#2e7d32', fontWeight: 600, textDecoration: 'none'}}>
              {pickLang(c.content, lang).name}
            </Link>
          ))}
        </div>
      </section>
    </div>
    </>
  );
};

export default ExportPage;
