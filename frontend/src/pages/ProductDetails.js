import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getProductById, getCategoryName } from '../data/productsData';
import ImageLightbox from '../components/ImageLightbox';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Scroll to top kada se stranica učita
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const product = getProductById(id);

  // Ako proizvod nije pronađen
  if (!product) {
    return (
      <div className="product-details-page">
        <div className="product-not-found">
          <h2>{t('productDetails.notFound') || 'Proizvod nije pronađen'}</h2>
          <p>{t('productDetails.notFoundDesc') || 'Proizvod koji tražite ne postoji ili je uklonjen.'}</p>
          <Link to="/products" className="back-to-products-btn">
            {t('productDetails.backToProducts') || 'Nazad na proizvode'}
          </Link>
        </div>
      </div>
    );
  }

  const categoryName = getCategoryName(product.category);

  // Kreiraj niz slika - glavna + dodatne ako postoje
  const productImages = product.images && product.images.length > 0
    ? product.images
    : [product.image];

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="product-details-page">
      {/* Breadcrumb navigacija */}
      <nav className="breadcrumb">
        <Link to="/">{t('nav.home') || 'Početna'}</Link>
        <span className="breadcrumb-separator">/</span>
        <Link to="/products">{t('nav.products') || 'Proizvodi'}</Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">{product.name}</span>
      </nav>

      <div className="product-details-container">
        {/* Leva strana - galerija slika */}
        <div className="product-image-section">
          {/* Glavna slika */}
          <div className="product-main-image" onClick={() => openLightbox(0)}>
            <img
              src={productImages[0]}
              alt={product.name}
              onError={(e) => {
                e.target.src = '/images/logo.png';
              }}
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
                    src={img}
                    alt={`${product.name} - ${index + 1}`}
                    onError={(e) => {
                      e.target.src = '/images/logo.png';
                    }}
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
        </div>

        {/* Desna strana - informacije */}
        <div className="product-info-section">
          <div className="product-category-badge">
            {categoryName}
          </div>

          <h1 className="product-title">
            {t(`productDescriptions.${product.id}.name`) || product.name}
          </h1>

          <div className="product-description">
            <p>{t(`productDescriptions.${product.id}.description`) || product.description}</p>
          </div>

          {product.showPrice && (
            <div className="product-price-section">
              <span className="product-price-label">Cena od</span>
              <span className="product-price-value">{product.price.toLocaleString()} RSD</span>
            </div>
          )}

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
                      <span className="spec-value">{product.details.height}</span>
                    </div>
                  </div>
                )}
                {product.details.sunlight && (
                  <div className="spec-item">
                    <span className="spec-icon">☀️</span>
                    <div className="spec-content">
                      <span className="spec-label">{t('productDetails.sunlight') || 'Svetlost'}</span>
                      <span className="spec-value">{product.details.sunlight}</span>
                    </div>
                  </div>
                )}
                {product.details.watering && (
                  <div className="spec-item">
                    <span className="spec-icon">💧</span>
                    <div className="spec-content">
                      <span className="spec-label">{t('productDetails.watering') || 'Zalivanje'}</span>
                      <span className="spec-value">{product.details.watering}</span>
                    </div>
                  </div>
                )}
                {product.details.soil && (
                  <div className="spec-item">
                    <span className="spec-icon">🌱</span>
                    <div className="spec-content">
                      <span className="spec-label">{t('productDetails.soil') || 'Zemljište'}</span>
                      <span className="spec-value">{product.details.soil}</span>
                    </div>
                  </div>
                )}
                {product.details.hardiness && (
                  <div className="spec-item">
                    <span className="spec-icon">❄️</span>
                    <div className="spec-content">
                      <span className="spec-label">{t('productDetails.hardiness') || 'Otpornost'}</span>
                      <span className="spec-value">{product.details.hardiness}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Akcije */}
          <div className="product-actions">
            <Link to="/contact" className="contact-btn">
              {t('productDetails.contactUs') || 'Kontaktirajte nas za narudžbinu'}
            </Link>
          </div>

          {/* Nazad dugme */}
          <button onClick={() => navigate(-1)} className="back-btn">
            ← {t('productDetails.back') || 'Nazad'}
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={productImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          productName={product.name}
        />
      )}
    </div>
  );
};

export default ProductDetails;
