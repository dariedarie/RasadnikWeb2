import React, { useState, useEffect, useCallback, useRef } from 'react';
import './ImageLightbox.css';

const ImageLightbox = ({ images, initialIndex = 0, onClose, productName }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const containerRef = useRef(null);

  // Minimalni swipe distance (u px)
  const minSwipeDistance = 50;

  const goToPrevious = useCallback(() => {
    if (!isZoomed) {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  }, [images.length, isZoomed]);

  const goToNext = useCallback(() => {
    if (!isZoomed) {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  }, [images.length, isZoomed]);

  // Keyboard navigacija
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'Escape':
          onClose();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Sprecavanje scroll-a na body
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [goToPrevious, goToNext, onClose]);

  // Touch handlers za swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Klik na overlay zatvara lightbox
  const handleOverlayClick = (e) => {
    if (e.target === containerRef.current) {
      onClose();
    }
  };

  // Toggle zoom
  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  if (!images || images.length === 0) return null;

  return (
    <div
      className="lightbox-overlay"
      ref={containerRef}
      onClick={handleOverlayClick}
    >
      {/* Header */}
      <div className="lightbox-header">
        <span className="lightbox-title">{productName}</span>
        <span className="lightbox-counter">
          {currentIndex + 1} / {images.length}
        </span>
        <button className="lightbox-close" onClick={onClose} aria-label="Zatvori">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Main image container */}
      <div
        className="lightbox-content"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Previous button */}
        {images.length > 1 && (
          <button
            className="lightbox-nav lightbox-prev"
            onClick={goToPrevious}
            aria-label="Prethodna slika"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        {/* Image */}
        <div className={`lightbox-image-wrapper ${isZoomed ? 'zoomed' : ''}`}>
          <img
            src={images[currentIndex]}
            alt={`${productName} - slika ${currentIndex + 1}`}
            className="lightbox-image"
            onClick={toggleZoom}
            onError={(e) => {
              e.target.src = '/images/plantDGD2.png';
            }}
          />
        </div>

        {/* Next button */}
        {images.length > 1 && (
          <button
            className="lightbox-nav lightbox-next"
            onClick={goToNext}
            aria-label="Sledeća slika"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="lightbox-thumbnails">
          {images.map((img, index) => (
            <button
              key={index}
              className={`lightbox-thumb ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onError={(e) => {
                  e.target.src = '/images/plantDGD2.png';
                }}
              />
            </button>
          ))}
        </div>
      )}

      {/* Swipe hint za mobile */}
      <div className="lightbox-swipe-hint">
        Prevucite za navigaciju
      </div>
    </div>
  );
};

export default ImageLightbox;
