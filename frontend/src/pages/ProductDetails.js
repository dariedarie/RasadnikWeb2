import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products, getProductById, categories } from '../data/productsData';
import { getCategoryPageByCategoryId, pickLang, labels, productInCategory, productMeta, breadcrumbJsonLd, faqJsonLd, productPath, productIdFromParam } from '../data/seoPages';
import { getLangPrefix, buildHreflangUrls, getSeoLinks } from '../utils/i18nRoutes';
import { guidesForProduct, guidePath, guideMeta, guideLabelsFor } from '../data/guides';
import ImageLightbox from '../components/ImageLightbox';
import imageCredits from '../data/imageCredits';
import { thumbSrc, mediumSrc, fallbackTo } from '../utils/images';
import './ProductDetails.css';
import './Products.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const prefix = getLangPrefix(i18n.language);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Prošireni SEO sadržaj (utilizare/plantare/îngrijire/FAQ) - učitava se samo za aktivni jezik
  const [contentByLang, setContentByLang] = useState({});
  const lang = ['ro', 'en', 'de'].includes(i18n.language) ? i18n.language : 'ro';

  // Scroll to top kada se stranica učita
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  useEffect(() => {
    if (contentByLang[lang]) return;
    import(`../data/productContent/${lang}.json`)
      .then(m => setContentByLang(prev => ({ ...prev, [lang]: m.default || m })))
      .catch(() => {});
  }, [lang, contentByLang]);

  const product = getProductById(productIdFromParam(id));
  const extra = product && contentByLang[lang] ? contentByLang[lang][product.id] : null;
  const L = pickLang(labels, lang);

  // Stari URL (/products/1) -> novi SEO URL (/products/tuia-smaragd)
  if (product && /^\d+$/.test(id)) {
    return <Navigate to={`${prefix}${productPath(product.id)}`} replace />;
  }

  // Ako proizvod nije pronađen
  if (!product) {
    return (
      <div className="product-details-page">
        <div className="product-not-found">
          <h2>{t('productDetails.notFound') || 'Proizvod nije pronađen'}</h2>
          <p>{t('productDetails.notFoundDesc') || 'Proizvod koji tražite ne postoji ili je uklonjen.'}</p>
          <Link to={`${prefix}/products`} className="back-to-products-btn">
            {t('productDetails.backToProducts') || 'Nazad na proizvode'}
          </Link>
        </div>
      </div>
    );
  }

  const categoryData = categories.find(c => c.id === product.category);
  const categoryName = categoryData ? t(categoryData.nameKey) : product.category;
  const translatedName = t(`productDescriptions.${product.id}.name`, { defaultValue: product.name });
  const translatedDescription = t(`productDescriptions.${product.id}.description`, { defaultValue: product.description });

  // Kreiraj niz slika - glavna + dodatne ako postoje
  const productImages = product.images && product.images.length > 0
    ? product.images
    : [product.image];

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const pageUrls = buildHreflangUrls(productPath(product.id));
  const canonicalUrl = pageUrls[i18n.language] || pageUrls.ro;
  const meta = productMeta(translatedName, translatedDescription, i18n.language);

  const categoryPage = getCategoryPageByCategoryId(product.category);
  const categoryPageName = categoryPage ? pickLang(categoryPage.content, i18n.language).name : null;
  const breadcrumbs = [
    { name: t('nav.home'), path: prefix || '/' },
    { name: t('nav.products'), path: `${prefix}/products` },
    ...(categoryPage ? [{ name: categoryPageName, path: `${prefix}/${categoryPage.slug}` }] : []),
    { name: translatedName, path: `${prefix}${productPath(product.id)}` }
  ];

  const relatedProducts = products
    .filter(p => p.id !== product.id && productInCategory(p, product.category))
    .slice(0, 4);

  // Namerno BEZ Product schema: Google za Product snippets / Merchant listings traži cenu,
  // a mi je ne objavljujemo ("Preț la cerere") - oznaka bi bila stalno "invalid".

  return (
    <>
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {getSeoLinks(productPath(product.id), i18n.language)}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={`https://www.plantdgd.ro${encodeURI(product.image)}`} />
      <meta property="og:url" content={canonicalUrl} />
      <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd(breadcrumbs))}</script>
      {extra && <script type="application/ld+json">{JSON.stringify(faqJsonLd(extra.faq))}</script>}
    </Helmet>
    <div className="product-details-page">
      {/* Breadcrumb navigacija */}
      <nav className="breadcrumb" aria-label="breadcrumb">
        {breadcrumbs.map((crumb, i) => (
          <React.Fragment key={crumb.path}>
            {i > 0 && <span className="breadcrumb-separator">/</span>}
            {i < breadcrumbs.length - 1
              ? <Link to={crumb.path}>{crumb.name}</Link>
              : <span className="breadcrumb-current">{crumb.name}</span>}
          </React.Fragment>
        ))}
      </nav>

      <div className="product-details-container">
        {/* Leva strana - galerija slika */}
        <div className="product-image-section">
          {/* Glavna slika */}
          <div className="product-main-image" onClick={() => openLightbox(0)}>
            <img
              src={mediumSrc(productImages[0])}
              alt={translatedName}
              width="1000"
              height="750"
              fetchpriority="high"
              onError={fallbackTo(productImages[0])}
            />
            <span className={`stock-indicator ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
              {product.inStock
                ? (t('products.inStock') || 'Na stanju')
                : (t('products.outOfStock') || 'Nema na stanju')
              }
            </span>
            <div className="image-zoom-hint">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
              <span>{t('productDetails.clickToEnlarge') || 'Kliknite za uvećanje'}</span>
            </div>
          </div>

          {/* Thumbnail galerija - prikazuje se samo ako ima vise slika */}
          {productImages.length > 1 && (
            <div className="product-thumbnails">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  className={`thumbnail-btn ${index === 0 ? 'active' : ''}`}
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={thumbSrc(img)}
                    alt={`${translatedName} - ${index + 1}`}
                    loading="lazy"
                    onError={fallbackTo(img)}
                  />
                </button>
              ))}
            </div>
          )}

          {/* Info o broju slika */}
          {productImages.length > 1 && (
            <p className="gallery-hint">
              {productImages.length} {t('productDetails.photos') || 'fotografija'} - {t('productDetails.clickToView') || 'kliknite za pregled'}
            </p>
          )}

          {/* Autori slika sa Wikimedia Commons (zahtev licence CC BY / CC BY-SA) */}
          {productImages.some(img => imageCredits[img]) && (
            <p style={{fontSize: '0.75rem', color: '#78909c', marginTop: 8, lineHeight: 1.5}}>
              Foto:{' '}
              {productImages.filter(img => imageCredits[img]).map((img, i) => {
                const c = imageCredits[img];
                return (
                  <React.Fragment key={img}>
                    {i > 0 && '; '}
                    <a href={c.source} target="_blank" rel="noopener noreferrer nofollow" style={{color: 'inherit'}}>{c.author}</a>
                    {' ('}
                    {c.licenseUrl
                      ? <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer nofollow" style={{color: 'inherit'}}>{c.license}</a>
                      : c.license}
                    {')'}
                  </React.Fragment>
                );
              })}
              {' / Wikimedia Commons'}
            </p>
          )}
        </div>

        {/* Desna strana - informacije */}
        <div className="product-info-section">
          {categoryPage ? (
            <Link to={`${prefix}/${categoryPage.slug}`} className="product-category-badge" style={{textDecoration: 'none'}}>
              {categoryName}
            </Link>
          ) : (
            <div className="product-category-badge">{categoryName}</div>
          )}

          <h1 className="product-title">
            {translatedName}
          </h1>

          <div className="product-description">
            <p>{translatedDescription}</p>
          </div>

          <div className="product-price-section price-on-request-section">
            <span className="product-price-value">{t('products.priceOnRequest')}</span>
          </div>

          {/* Detalji o biljci */}
          {product.details && (
            <div className="product-specifications">
              <h3>{t('productDetails.specifications') || 'Karakteristike'}</h3>
              <div className="specs-grid">
                {product.details.height && (
                  <div className="spec-item">
                    <span className="spec-icon">📏</span>
                    <div className="spec-content">
                      <span className="spec-label">{t('productDetails.height') || 'Visina'}</span>
                      <span className="spec-value">{t(`productDescriptions.${product.id}.details.height`, { defaultValue: product.details.height })}</span>
                    </div>
                  </div>
                )}
                {product.details.sunlight && (
                  <div className="spec-item">
                    <span className="spec-icon">☀️</span>
                    <div className="spec-content">
                      <span className="spec-label">{t('productDetails.sunlight') || 'Svetlost'}</span>
                      <span className="spec-value">{t(`productDescriptions.${product.id}.details.sunlight`, { defaultValue: product.details.sunlight })}</span>
                    </div>
                  </div>
                )}
                {product.details.watering && (
                  <div className="spec-item">
                    <span className="spec-icon">💧</span>
                    <div className="spec-content">
                      <span className="spec-label">{t('productDetails.watering') || 'Zalivanje'}</span>
                      <span className="spec-value">{t(`productDescriptions.${product.id}.details.watering`, { defaultValue: product.details.watering })}</span>
                    </div>
                  </div>
                )}
                {product.details.soil && (
                  <div className="spec-item">
                    <span className="spec-icon">🌱</span>
                    <div className="spec-content">
                      <span className="spec-label">{t('productDetails.soil') || 'Zemljište'}</span>
                      <span className="spec-value">{t(`productDescriptions.${product.id}.details.soil`, { defaultValue: product.details.soil })}</span>
                    </div>
                  </div>
                )}
                {product.details.hardiness && (
                  <div className="spec-item">
                    <span className="spec-icon">❄️</span>
                    <div className="spec-content">
                      <span className="spec-label">{t('productDetails.hardiness') || 'Otpornost'}</span>
                      <span className="spec-value">{t(`productDescriptions.${product.id}.details.hardiness`, { defaultValue: product.details.hardiness })}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Akcije */}
          <div className="product-actions">
            <Link to={`${prefix}/contact`} className="contact-btn">
              {t('productDetails.contactUs') || 'Kontaktirajte nas za narudžbinu'}
            </Link>
          </div>

          {/* Nazad dugme */}
          <button onClick={() => navigate(-1)} className="back-btn">
            ← {t('productDetails.back') || 'Nazad'}
          </button>
        </div>
      </div>

      {/* Prošireni sadržaj o biljci */}
      {extra && (
        <section className="product-guide" style={{maxWidth: 1200, margin: '48px auto 0', padding: '32px', background: '#fff', borderRadius: 18, boxShadow: '0 8px 32px rgba(44,62,80,0.08)'}}>
          {['uses', 'planting', 'care'].map(key => (
            <div key={key} style={{marginBottom: 24}}>
              <h2 style={{color: '#2e7d32', fontWeight: 700, fontSize: '1.4rem', marginBottom: 10}}>{L[key]}</h2>
              <p style={{color: '#234d20', lineHeight: 1.7, fontSize: '1.02rem', marginBottom: 0}}>{extra[key]}</p>
            </div>
          ))}
          <h2 style={{color: '#2e7d32', fontWeight: 700, fontSize: '1.4rem', marginBottom: 14}}>{L.faqTitle}</h2>
          {extra.faq.map((f, i) => (
            <div key={i} style={{marginBottom: 16}}>
              <h3 style={{fontSize: '1.08rem', fontWeight: 600, color: '#234d20', marginBottom: 4}}>{f.q}</h3>
              <p style={{color: '#234d20', lineHeight: 1.6, marginBottom: 0}}>{f.a}</p>
            </div>
          ))}
        </section>
      )}

      {/* Vodiči za ovu biljku */}
      {guidesForProduct(product.id).length > 0 && (
        <section style={{maxWidth: 1200, margin: '32px auto 0', padding: '0 16px'}}>
          <h2 style={{color: '#2e7d32', fontWeight: 700, marginBottom: 12, fontSize: '1.3rem'}}>{guideLabelsFor(lang).useful}</h2>
          <ul style={{paddingLeft: 20, lineHeight: 1.9, marginBottom: 0}}>
            {guidesForProduct(product.id).slice(0, 4).map(g => (
              <li key={g.slug}><Link to={`${prefix}${guidePath(g.slug)}`} style={{color: '#2e7d32', fontWeight: 600}}>{guideMeta(g, lang).h1}</Link></li>
            ))}
          </ul>
        </section>
      )}

      {/* Povezani proizvodi - interno linkovanje */}
      {relatedProducts.length > 0 && (
        <section style={{maxWidth: 1200, margin: '48px auto 0', padding: '0 16px'}}>
          <h2 style={{color: '#2e7d32', fontWeight: 700, marginBottom: 24, fontSize: '1.5rem'}}>
            {categoryPage
              ? <Link to={`${prefix}/${categoryPage.slug}`} style={{color: 'inherit'}}>{categoryPageName}</Link>
              : pickLang(labels, i18n.language).related}
          </h2>
          <div className="products-grid-compact">
            {relatedProducts.map(p => {
              const pName = t(`productDescriptions.${p.id}.name`, { defaultValue: p.name });
              return (
                <Link key={p.id} to={`${prefix}${productPath(p.id)}`} className="product-card-compact">
                  <div className="product-image-compact">
                    <img src={thumbSrc(p.image)} alt={pName} loading="lazy" onError={fallbackTo(p.image)} />
                  </div>
                  <div className="product-info-compact">
                    <h3>{pName}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={productImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          productName={translatedName}
        />
      )}
    </div>
    </>
  );
};

export default ProductDetails;
