import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products } from '../data/productsData';
import { categoryPages, pickLang, labels, productInCategory, productPath, breadcrumbJsonLd, faqJsonLd, itemListJsonLd } from '../data/seoPages';
import { getLangPrefix, getSeoLinks, SITE_URL } from '../utils/i18nRoutes';
import './Products.css';
import { guidesForCategory, guidePath, guideMeta, guideLabelsFor } from '../data/guides';
import { thumbSrc, mediumSrc, fallbackTo } from '../utils/images';

const boxStyle = {
  background: '#fff',
  borderRadius: 18,
  boxShadow: '0 8px 32px rgba(44,62,80,0.08)',
  maxWidth: 1200,
  margin: '0 auto 32px auto',
  padding: 32
};

// Landing stranica za kategoriju - cilja kljucne reci tipa "gard viu en gros"
const CategoryPage = ({ page }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const prefix = getLangPrefix(lang);
  const content = pickLang(page.content, lang);
  const path = `${prefix}/${page.slug}`;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [page.slug]);

  const categoryProducts = products.filter(p => productInCategory(p, page.categoryId));
  const productName = (p) => t(`productDescriptions.${p.id}.name`, { defaultValue: p.name });

  const jsonLd = [
    breadcrumbJsonLd([
      { name: t('nav.home'), path: prefix || '/' },
      { name: t('nav.products'), path: `${prefix}/products` },
      { name: content.name, path }
    ]),
    itemListJsonLd(categoryProducts.map(p => ({ name: productName(p), path: `${prefix}${productPath(p.id)}` }))),
    faqJsonLd(content.faq)
  ];

  return (
    <>
    <Helmet>
      <title>{content.title}</title>
      <meta name="description" content={content.description} />
      {getSeoLinks(`/${page.slug}`, lang)}
      <meta property="og:title" content={content.title} />
      <meta property="og:description" content={content.description} />
      <meta property="og:image" content={SITE_URL + encodeURI(page.image)} />
      <meta property="og:url" content={SITE_URL + path} />
      {jsonLd.map((data, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(data)}</script>
      ))}
    </Helmet>
    <div className="products-page" style={{background: 'linear-gradient(135deg, #e0f2f1 0%, #f9fbe7 100%)', minHeight: '100vh', padding: '32px 16px 48px'}}>
      <nav className="breadcrumb" aria-label="breadcrumb" style={{maxWidth: 1200, margin: '0 auto 16px auto'}}>
        <Link to={prefix || '/'}>{t('nav.home')}</Link>
        <span className="breadcrumb-separator"> / </span>
        <Link to={`${prefix}/products`}>{t('nav.products')}</Link>
        <span className="breadcrumb-separator"> / </span>
        <span className="breadcrumb-current">{content.name}</span>
      </nav>

      <section style={boxStyle}>
        <h1 style={{color: '#2e7d32', fontWeight: 700, marginBottom: 16}}>{content.h1}</h1>
        {content.intro.map((p, i) => (
          <p key={i} style={{fontSize: '1.05rem', color: '#234d20', lineHeight: 1.7}}>{p}</p>
        ))}
        <Link to={`${prefix}/contact`} style={{display: 'inline-block', marginTop: 8, padding: '12px 32px', borderRadius: 30, background: '#2e7d32', color: '#fff', textDecoration: 'none', fontWeight: 600}}>
          {t('productDetails.contactUs')}
        </Link>
      </section>

      <section style={boxStyle}>
        <div className="products-grid-compact">
          {categoryProducts.map(p => (
            <Link key={p.id} to={`${prefix}${productPath(p.id)}`} className="product-card-compact">
              <div className="product-image-compact">
                <img src={thumbSrc(p.image)} alt={productName(p)} loading="lazy" onError={fallbackTo(p.image)} />
                <span className={`stock-badge ${p.inStock ? 'in-stock' : 'out-of-stock'}`}>
                  {p.inStock ? t('products.inStock') : t('products.outOfStock')}
                </span>
              </div>
              <div className="product-info-compact">
                <h3>{productName(p)}</h3>
                <p>{t(`productDescriptions.${p.id}.description`, { defaultValue: p.description })}</p>
                <div className="product-price-badge price-on-request">{t('products.priceOnRequest')}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={boxStyle}>
        <h2 style={{color: '#2e7d32', fontWeight: 700, marginBottom: 20, fontSize: '1.6rem'}}>{pickLang(labels, lang).faqTitle}</h2>
        {content.faq.map((f, i) => (
          <div key={i} style={{marginBottom: 20}}>
            <h3 style={{fontSize: '1.1rem', fontWeight: 600, color: '#234d20', marginBottom: 6}}>{f.q}</h3>
            <p style={{color: '#234d20', lineHeight: 1.6, marginBottom: 0}}>{f.a}</p>
          </div>
        ))}
      </section>

      {/* Vodiči za ovu kategoriju */}
      {guidesForCategory(page.categoryId).length > 0 && (
        <section style={boxStyle}>
          <h2 style={{color: '#2e7d32', fontWeight: 700, marginBottom: 12, fontSize: '1.4rem'}}>{guideLabelsFor(lang).useful}</h2>
          <ul style={{paddingLeft: 20, lineHeight: 1.9, marginBottom: 0}}>
            {guidesForCategory(page.categoryId).map(g => (
              <li key={g.slug}><Link to={`${prefix}${guidePath(g.slug)}`} style={{color: '#2e7d32', fontWeight: 600}}>{guideMeta(g, lang).h1}</Link></li>
            ))}
          </ul>
        </section>
      )}

      <section style={{...boxStyle, padding: '24px 32px'}}>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center'}}>
          {categoryPages.filter(c => c.slug !== page.slug).map(c => (
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

export default CategoryPage;
