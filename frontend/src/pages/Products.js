import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products } from '../data/productsData';
import './Products.css';

const SCROLL_POSITION_KEY = 'products_scroll_position';
const PRODUCTS_STATE_KEY = 'products_state';

const Products = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const ITEMS_PER_PAGE = 12;
  const scrollRestoredRef = useRef(false);

  // Inicijalizuj stanje iz URL parametara
  const initialCategory = searchParams.get('category') || 'sve';
  const initialSearch = searchParams.get('search') || '';
  const initialCount = parseInt(searchParams.get('count')) || ITEMS_PER_PAGE;

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [visibleCount, setVisibleCount] = useState(initialCount);

  // Sinhronizuj URL sa stanjem
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategory !== 'sve') params.set('category', selectedCategory);
    if (searchTerm) params.set('search', searchTerm);
    if (visibleCount > ITEMS_PER_PAGE) params.set('count', visibleCount.toString());
    setSearchParams(params, { replace: true });
  }, [selectedCategory, searchTerm, visibleCount, setSearchParams]);

  // Scroll to top pri prvom učitavanju stranice (osim ako dolazimo sa ProductDetails)
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem(SCROLL_POSITION_KEY);
    
    // Ako nema sačuvane scroll pozicije, to znači da dolazimo sa druge stranice (npr. Home)
    // Pa trebamo skrolovati na vrh
    if (!savedScrollPosition) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, []); // Samo na mount

  // Resetuj paginaciju kada se promeni kategorija ili pretraga (ali ne pri inicijalnom ucitavanju)
  const [isInitialMount, setIsInitialMount] = useState(true);
  useEffect(() => {
    if (isInitialMount) {
      setIsInitialMount(false);
      return;
    }
    // Resetuj scroll restoration kada se promeni kategorija ili pretraga
    scrollRestoredRef.current = false;
    sessionStorage.removeItem(SCROLL_POSITION_KEY);
    sessionStorage.removeItem(PRODUCTS_STATE_KEY);
    setVisibleCount(ITEMS_PER_PAGE);
    // Skroluj na vrh kada se menjaju filteri
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedCategory, searchTerm]);

  const categories = [
    { id: 'sve', name: t('products.allCategories') },
    { id: 'ziva-ograda', name: t('products.zivaOgrada') },
    { id: 'cetinari', name: t('products.cetinari') },
    { id: 'liscari', name: t('products.liscari') },
    { id: 'siblje', name: t('products.siblje') },
    { id: 'perene', name: t('products.perene') }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory =
      selectedCategory === 'sve' ||
      (product.categories && product.categories.includes(selectedCategory)) ||
      product.category === selectedCategory;
    const term = searchTerm.trim().toLowerCase();
    if (!term) return matchesCategory;

    const inName = product.name.toLowerCase().startsWith(term);
    return matchesCategory && inName;
  });

  // Paginacija
  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMoreProducts = visibleCount < filteredProducts.length;

  const loadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE);
  };

  // Čuvaj scroll poziciju kada korisnik klikne na proizvod
  const handleProductClick = (productId) => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    sessionStorage.setItem(SCROLL_POSITION_KEY, scrollPosition.toString());
    
    // Čuvaj trenutno stanje (visibleCount, category, search)
    const state = {
      visibleCount,
      category: selectedCategory,
      search: searchTerm,
      timestamp: Date.now()
    };
    sessionStorage.setItem(PRODUCTS_STATE_KEY, JSON.stringify(state));
  };

  // Vrati scroll poziciju kada se vrati sa ProductDetails
  useEffect(() => {
    // Proveri da li dolazimo sa ProductDetails stranice (back navigation)
    const savedScrollPosition = sessionStorage.getItem(SCROLL_POSITION_KEY);
    const savedState = sessionStorage.getItem(PRODUCTS_STATE_KEY);
    
    // Proveri da li je URL isti kao što je bio sačuvan (indikator da se vraćamo nazad)
    const currentUrl = `${selectedCategory}|${searchTerm}|${visibleCount}`;
    
    if (savedScrollPosition && savedState && !scrollRestoredRef.current) {
      try {
        const state = JSON.parse(savedState);
        const savedUrl = `${state.category}|${state.search}|${state.visibleCount}`;
        const scrollPos = parseInt(savedScrollPosition, 10);
        
        // Restoruj scroll samo ako su URL parametri isti (što znači da se vraćamo na istu poziciju)
        if (savedUrl === currentUrl && scrollPos > 0) {
          // Restoruj scroll poziciju nakon kratkog delay-a da se DOM učita
          const restoreScroll = () => {
            // Dodatno čekanje da se svi proizvodi renderuju
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            // Restoruj samo ako trenutna pozicija nije već na vrhu (da ne prebrišemo postojeću poziciju)
            if (currentScroll === 0 || Math.abs(currentScroll - scrollPos) > 50) {
              window.scrollTo({ top: scrollPos, behavior: 'auto' });
              scrollRestoredRef.current = true;
              
              // Obriši sačuvane podatke nakon restorovanja
              setTimeout(() => {
                sessionStorage.removeItem(SCROLL_POSITION_KEY);
                sessionStorage.removeItem(PRODUCTS_STATE_KEY);
                scrollRestoredRef.current = false;
              }, 500);
            }
          };
          
          // Koristimo višestruke delay-e za sigurno restorovanje
          // Prvo čekamo da se komponenta renderuje
          requestAnimationFrame(() => {
            setTimeout(() => {
              requestAnimationFrame(restoreScroll);
            }, 100);
          });
        } else {
          // Ako URL parametri nisu isti, obriši sačuvane podatke
          sessionStorage.removeItem(SCROLL_POSITION_KEY);
          sessionStorage.removeItem(PRODUCTS_STATE_KEY);
        }
      } catch (e) {
        console.error('Error restoring scroll position:', e);
        sessionStorage.removeItem(SCROLL_POSITION_KEY);
        sessionStorage.removeItem(PRODUCTS_STATE_KEY);
      }
    }

    // Cleanup: obriši scroll position ako je stariji od 5 minuta
    const cleanupOldScrollData = () => {
      try {
        const savedState = sessionStorage.getItem(PRODUCTS_STATE_KEY);
        if (savedState) {
          const state = JSON.parse(savedState);
          const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;
          if (state.timestamp && state.timestamp < fiveMinutesAgo) {
            sessionStorage.removeItem(SCROLL_POSITION_KEY);
            sessionStorage.removeItem(PRODUCTS_STATE_KEY);
            scrollRestoredRef.current = false;
          }
        }
      } catch (e) {
        // Ignore cleanup errors
      }
    };
    cleanupOldScrollData();
  }, [location.key, visibleCount, selectedCategory, searchTerm]);

  return (
    <div className="products-page" style={{background: 'linear-gradient(135deg, #e0f2f1 0%, #f9fbe7 100%)', minHeight: '100vh', paddingTop: '32px', paddingBottom: '48px'}}>
      <section className="section" style={{background: 'linear-gradient(135deg, #f9fbe7 0%, #e0f2f1 100%)', borderRadius: 18, boxShadow: '0 8px 32px rgba(44,62,80,0.08)', maxWidth: 900, margin: '0 auto 32px auto', padding: 32}}>
        <h1 style={{color: '#2e7d32', fontWeight: 700, textAlign: 'center', marginBottom: 12}}>{t('products.title')}</h1>
        <p style={{fontSize: '1.15rem', color: '#234d20', textAlign: 'center', marginBottom: 0}}>
          {t('products.subtitle')}
        </p>
      </section>

      {/* Filter kategorije + pretraga */}
      <section className="section" style={{background: '#fff', borderRadius: 18, boxShadow: '0 8px 32px rgba(44,62,80,0.08)', maxWidth: 1200, margin: '0 auto 32px auto', padding: '24px 32px'}}>
        <div className="filters" style={{rowGap: '16px'}}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
              style={{
                padding: '12px 28px',
                border: `2px solid ${selectedCategory === category.id ? '#2e7d32' : '#2e7d32'}`,
                background: selectedCategory === category.id ? '#2e7d32' : '#fff',
                color: selectedCategory === category.id ? '#fff' : '#2e7d32',
                borderRadius: 25,
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontWeight: 600,
                fontSize: '1.1rem'
              }}
              onMouseOver={e => {
                if (selectedCategory !== category.id) {
                  e.currentTarget.style.background = '#e0f2f1';
                }
              }}
              onMouseOut={e => {
                if (selectedCategory !== category.id) {
                  e.currentTarget.style.background = '#fff';
                }
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div style={{marginTop: 24, display: 'flex', justifyContent: 'center'}}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t('products.searchPlaceholder')}
            style={{
              width: '100%',
              maxWidth: 420,
              padding: '10px 16px',
              borderRadius: 999,
              border: '1.5px solid #c8e6c9',
              fontSize: '1rem',
              outline: 'none',
              boxShadow: '0 2px 8px rgba(44,62,80,0.06)'
            }}
          />
        </div>
      </section>

      {/* Prikaz proizvoda */}
      <section className="section" style={{background: '#fff', borderRadius: 18, boxShadow: '0 8px 32px rgba(44,62,80,0.08)', maxWidth: 1200, margin: '0 auto', padding: '32px'}}>

        {filteredProducts.length > 0 ? (
          <>
            <div className="products-grid-compact">
              {visibleProducts.map(product => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="product-card-compact"
                  onClick={() => handleProductClick(product.id)}
                >
                  <div className="product-image-compact">
                    <img
                      src={product.image}
                      alt={product.name}
                      onError={(e) => {
                        e.target.src = '/images/logo.png';
                      }}
                    />
                    <span className={`stock-badge ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                      {product.inStock ? t('products.inStock') : t('products.outOfStock')}
                    </span>
                  </div>
                  <div className="product-info-compact">
                    <h3>{t(`productDescriptions.${product.id}.name`) || product.name}</h3>
                    <p>{t(`productDescriptions.${product.id}.description`) || product.description}</p>
                    {product.showPrice && (
                      <div className="product-price-badge">
                        od {product.price.toLocaleString()} RSD
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More dugme */}
            {hasMoreProducts && (
              <div className="load-more-container">
                <button onClick={loadMore} className="load-more-btn">
                  {t('products.loadMore') || 'Učitaj još'} ({filteredProducts.length - visibleCount} {t('products.remaining') || 'preostalo'})
                </button>
              </div>
            )}

          </>
        ) : (
          <div style={{textAlign: 'center', padding: '60px 20px', color: '#234d20'}}>
            <p style={{fontSize: '1.2rem', marginBottom: '12px'}}>{t('products.noPlantsInCategory')}</p>
            <button
              onClick={() => setSelectedCategory('sve')}
              style={{
                padding: '12px 32px',
                background: '#2e7d32',
                color: '#fff',
                border: 'none',
                borderRadius: 25,
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 600,
                marginTop: '12px'
              }}
            >
              {t('products.viewAll')}
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Products;
