import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import ImageLightbox from '../components/ImageLightbox';
import { getSeoLinks } from '../utils/i18nRoutes';
import './Gallery.css';

// Opisni alt tekst za slike koje ga imaju (Google Images); ostale dobijaju generički
const galleryAlt = {
  '/images/plantdgd-conifere-cu-balot-pregatite-pentru-livrare.jpg': {
    ro: 'Conifere cu balot pregătite pentru livrare en gros – PlantDGD',
    en: 'Balled conifers ready for wholesale delivery – PlantDGD',
    de: 'Koniferen mit Ballen, bereit zur Großhandelslieferung – PlantDGD'
  },
  '/images/plantdgd-incarcare-conifere-camion-livrare-en-gros.jpg': {
    ro: 'Încărcarea coniferelor în camion pentru livrare en gros – PlantDGD',
    en: 'Loading conifers onto a truck for wholesale delivery – PlantDGD',
    de: 'Verladung von Koniferen in den LKW zur Großhandelslieferung – PlantDGD'
  },
  '/images/plantdgd-arbori-ornamentali-cu-balot-transport.jpg': {
    ro: 'Arbori ornamentali cu balot în camion, pregătiți pentru transport – PlantDGD',
    en: 'Balled ornamental trees loaded on a truck for transport – PlantDGD',
    de: 'Zierbäume mit Ballen im LKW, bereit für den Transport – PlantDGD'
  }
};

const galleryImages = [
  '/images/plantdgd-conifere-cu-balot-pregatite-pentru-livrare.jpg',
  '/images/plantdgd-incarcare-conifere-camion-livrare-en-gros.jpg',
  '/images/plantdgd-arbori-ornamentali-cu-balot-transport.jpg',
  '/images/IMG_4670.jpeg',
  '/images/IMG_4686.jpeg',
  '/images/IMG_5210.jpeg',
  '/images/72052.jpeg',
  '/images/72299.jpeg',
  '/images/77219.jpeg',
  '/images/486679551_18465391054068689_5399905233392503403_n.jpg',
  '/images/588721729_18509882257068689_6717567260362003079_n.jpg',
];

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
    <Helmet>
      <title>{t('seo.galleryTitle')}</title>
      <meta name="description" content={t('seo.galleryDescription')} />
      {getSeoLinks('/gallery', i18n.language)}
    </Helmet>
    <div className="gallery-page">
      <section className="gallery-section">
        <h1 className="gallery-title">{t('gallery.title')}</h1>
        <p className="gallery-subtitle">{t('gallery.subtitle')}</p>

        <div className="gallery-info">
          {galleryImages.length} {t('gallery.photos') || 'fotografija'}
        </div>

        <div className="gallery-grid">
          {galleryImages.map((src, idx) => (
            <div
              key={idx}
              className="gallery-item"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={src}
                alt={galleryAlt[src]?.[i18n.language] || galleryAlt[src]?.ro || `${t('gallery.title')} ${idx + 1}`}
                loading="lazy"
                onError={(e) => {
                  e.target.src = '/images/plantDGD2.png';
                }}
              />
              <div className="gallery-item-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={galleryImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          productName={t('gallery.title')}
        />
      )}
    </div>
    </>
  );
};

export default Gallery;
