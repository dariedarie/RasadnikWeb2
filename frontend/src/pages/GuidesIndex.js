import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { guides, guidesIndexFor, guideMeta, guideLabelsFor, guidePath, GUIDES_PATH } from '../data/guides';
import { breadcrumbJsonLd, itemListJsonLd, buildLocalizedPath, SITE_URL } from '../data/seoPages';
import { getSeoLinks } from '../utils/i18nRoutes';
import { mediumSrc, fallbackTo } from '../utils/images';

const GuidesIndex = () => {
  const { i18n } = useTranslation();
  const lang = ['ro', 'en', 'de'].includes(i18n.language) ? i18n.language : 'ro';
  const P = (neutral) => buildLocalizedPath(neutral, lang);
  const index = guidesIndexFor(lang);
  const labels = guideLabelsFor(lang);
  const list = guides.map(g => guideMeta(g, lang));

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, []);

  return (
    <>
    <Helmet>
      <title>{index.title}</title>
      <meta name="description" content={index.description} />
      {getSeoLinks(GUIDES_PATH, lang)}
      <meta property="og:title" content={index.title} />
      <meta property="og:description" content={index.description} />
      <meta property="og:url" content={SITE_URL + P(GUIDES_PATH)} />
      <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd([{ name: labels.home, path: P('/') }, { name: labels.guides, path: P(GUIDES_PATH) }]))}</script>
      <script type="application/ld+json">{JSON.stringify(itemListJsonLd(list.map(g => ({ name: g.h1, path: P(guidePath(g.slug)) }))))}</script>
    </Helmet>
    <div style={{ background: 'linear-gradient(135deg, #e0f2f1 0%, #f9fbe7 100%)', minHeight: '100vh', padding: '32px 16px 48px' }}>
      <section style={{ maxWidth: 1100, margin: '0 auto 32px', textAlign: 'center' }}>
        <h1 style={{ color: '#2e7d32', fontWeight: 800, marginBottom: 12 }}>{index.h1}</h1>
        <p style={{ color: '#234d20', fontSize: '1.1rem', maxWidth: 760, margin: '0 auto' }}>{index.intro}</p>
      </section>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
        {list.map(g => (
          <Link key={g.slug} to={P(guidePath(g.slug))} style={{ background: '#fff', borderRadius: 18, overflow: 'hidden', boxShadow: '0 8px 32px rgba(44,62,80,0.08)', textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
            <img src={mediumSrc(g.image)} alt={g.imageAlt} loading="lazy" onError={fallbackTo(g.image)} style={{ width: '100%', height: 190, objectFit: 'cover' }} />
            <div style={{ padding: '18px 20px 22px' }}>
              <h2 style={{ color: '#1b5e20', fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.35, marginBottom: 8 }}>{g.h1}</h2>
              <p style={{ color: '#234d20', fontSize: '0.96rem', lineHeight: 1.55, marginBottom: 0 }}>{g.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default GuidesIndex;
