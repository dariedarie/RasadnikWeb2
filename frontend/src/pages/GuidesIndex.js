import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { guides, guidesIndex, guidePath, GUIDES_PATH } from '../data/guides';
import { breadcrumbJsonLd, itemListJsonLd, SITE_URL } from '../data/seoPages';
import { mediumSrc, fallbackTo } from '../utils/images';

const GuidesIndex = () => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, []);
  const url = SITE_URL + GUIDES_PATH;

  return (
    <>
    <Helmet>
      <title>{guidesIndex.title}</title>
      <meta name="description" content={guidesIndex.description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={guidesIndex.title} />
      <meta property="og:description" content={guidesIndex.description} />
      <meta property="og:url" content={url} />
      <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd([{ name: 'Acasă', path: '/' }, { name: 'Ghiduri', path: GUIDES_PATH }]))}</script>
      <script type="application/ld+json">{JSON.stringify(itemListJsonLd(guides.map(g => ({ name: g.h1, path: guidePath(g.slug) }))))}</script>
    </Helmet>
    <div style={{ background: 'linear-gradient(135deg, #e0f2f1 0%, #f9fbe7 100%)', minHeight: '100vh', padding: '32px 16px 48px' }}>
      <section style={{ maxWidth: 1100, margin: '0 auto 32px', textAlign: 'center' }}>
        <h1 style={{ color: '#2e7d32', fontWeight: 800, marginBottom: 12 }}>{guidesIndex.h1}</h1>
        <p style={{ color: '#234d20', fontSize: '1.1rem', maxWidth: 760, margin: '0 auto' }}>{guidesIndex.intro}</p>
      </section>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
        {guides.map(g => (
          <Link key={g.slug} to={guidePath(g.slug)} style={{ background: '#fff', borderRadius: 18, overflow: 'hidden', boxShadow: '0 8px 32px rgba(44,62,80,0.08)', textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
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
