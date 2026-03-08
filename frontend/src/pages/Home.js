import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
    <Helmet>
      <title>Plant DGD – Angro de Plante Ornamentale | Vânzare En Gros România</title>
      <meta name="description" content="Plant DGD - furnizor de plante ornamentale en gros în România. Tuia, conifere, arbuști, garduri vii, arbori ornamentali angro. Prețuri competitive pentru peisagiști și centre de grădinărit. Livrare în toată România." />
      <link rel="canonical" href="https://plantdgd.ro/" />
    </Helmet>
    <div className="home">
      {/* Hero sekcija */}
      <section className="hero" style={{
        backgroundImage: 'url(/images/hero-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        minHeight: '350px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.45)',
          zIndex: 1
        }} />
        <div className="container" style={{position: 'relative', zIndex: 2, textAlign: 'center', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18, padding: '48px 0 56px 0'}}>
          <h1 style={{fontSize: '3.2rem', fontWeight: 700, letterSpacing: 1, marginBottom: 18, textShadow: '0 2px 12px rgba(0,0,0,0.18)'}}>{t('home.title')}</h1>
          <p style={{fontWeight: 500, fontSize: '1.3rem', marginBottom: 32, opacity: 0.95, maxWidth: 600}}>{t('home.subtitle')}</p>
          <a href="/products" className="btn-primary" style={{
            marginTop: 12,
            padding: '18px 48px',
            fontSize: '1.35rem',
            fontWeight: 700,
            borderRadius: 30,
            boxShadow: '0 6px 24px rgba(44,62,80,0.18)',
            background: '#2e7d32',
            color: '#fff',
            letterSpacing: 1,
            transition: 'background 0.2s, transform 0.2s',
            border: 'none',
            display: 'inline-block',
            textDecoration: 'none',
          }}
          onMouseOver={e => {e.currentTarget.style.background='#60ad5e'; e.currentTarget.style.transform='scale(1.04)';}}
          onMouseOut={e => {e.currentTarget.style.background='#2e7d32'; e.currentTarget.style.transform='none';}}
          >
            {t('home.viewProducts')}
          </a>
        </div>
      </section>
      {/* Zašto izabrati nas */}
      <section className="section" style={{background: 'linear-gradient(135deg, #e0f2f1 0%, #f9fbe7 100%)', marginTop: 0}}>
        <div className="container" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 48}}>
          <div style={{textAlign: 'center', flex: '1 1 220px', minWidth: 180}}>
            <div style={{fontSize: 44, marginBottom: 12}}>🏆</div>
            <h3 style={{color: '#2e7d32', fontWeight: 700, marginBottom: 8}}>{t('home.provenQuality')}</h3>
            <p style={{color: '#234d20'}}>{t('home.provenQualityDesc')}</p>
          </div>
          <div style={{textAlign: 'center', flex: '1 1 220px', minWidth: 180}}>
            <div style={{fontSize: 44, marginBottom: 12}}>🚚</div>
            <h3 style={{color: '#2e7d32', fontWeight: 700, marginBottom: 8}}>{t('home.fastDelivery')}</h3>
            <p style={{color: '#234d20'}}>{t('home.fastDeliveryDesc')}</p>
          </div>
          <div style={{textAlign: 'center', flex: '1 1 220px', minWidth: 180}}>
            <div style={{fontSize: 44, marginBottom: 12}}>🤝</div>
            <h3 style={{color: '#2e7d32', fontWeight: 700, marginBottom: 8}}>{t('home.wholesalePartner')}</h3>
            <p style={{color: '#234d20'}}>{t('home.wholesalePartnerDesc')}</p>
          </div>
        </div>
      </section>

      {/* Popularni proizvodi - Premium dizajn */}
      <section className="section bg-light" style={{overflow: 'hidden'}}>
        <div className="container">
          <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: 48}}>{t('home.popularProducts')}</h2>
          
          {/* Asimetrični grid sa featured karticom */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 32,
            maxWidth: 1400,
            margin: '0 auto'
          }}>
            
            {/* Featured kartica - Tuja (veća i istaknuta) */}
            <Link 
              to="/products/1"
              onMouseEnter={() => setHoveredCard('tuja')}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                gridColumn: window.innerWidth > 768 ? 'span 2' : 'span 1',
                position: 'relative',
                borderRadius: 24,
                overflow: 'hidden',
                boxShadow: hoveredCard === 'tuja' ? '0 20px 60px rgba(46, 125, 50, 0.3)' : '0 8px 32px rgba(44,62,80,0.12)',
                transform: hoveredCard === 'tuja' ? 'translateY(-8px)' : 'translateY(0)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none',
                cursor: 'pointer',
                height: window.innerWidth > 768 ? '450px' : '380px',
                background: '#fff'
              }}
            >
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden'
              }}>
                <img 
                  src="/images/tujavelika.jpeg" 
                  alt="Tuja Smaragd" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: hoveredCard === 'tuja' ? 'scale(1.08)' : 'scale(1)',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    filter: hoveredCard === 'tuja' ? 'brightness(1.05)' : 'brightness(1)'
                  }}
                />
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '60%',
                  background: 'linear-gradient(to top, rgba(46, 125, 50, 0.95) 0%, rgba(46, 125, 50, 0.7) 40%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: 32,
                  color: 'white'
                }}>
                  <span style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                    opacity: 0.9,
                    marginBottom: 8
                  }}>{t('home.badgeFeatured')}</span>
                  <h3 style={{
                    fontSize: window.innerWidth > 768 ? '2.2rem' : '1.8rem',
                    fontWeight: 800,
                    marginBottom: 12,
                    textShadow: '0 2px 8px rgba(0,0,0,0.2)'
                  }}>{t('home.tuja')}</h3>
                  <p style={{
                    fontSize: '1.05rem',
                    opacity: 0.95,
                    lineHeight: 1.6,
                    marginBottom: 16
                  }}>{t('home.tujaDesc')}</p>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: '1rem',
                    fontWeight: 600,
                    opacity: hoveredCard === 'tuja' ? 1 : 0.8,
                    transition: 'opacity 0.3s'
                  }}>
                    <span>{t('home.viewDetails')}</span>
                    <span style={{
                      transform: hoveredCard === 'tuja' ? 'translateX(4px)' : 'translateX(0)',
                      transition: 'transform 0.3s'
                    }}>→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Katalpa kartica */}
            <Link
              to="/products/7"
              onMouseEnter={() => setHoveredCard('katalpa')}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                position: 'relative',
                borderRadius: 24,
                overflow: 'hidden',
                boxShadow: hoveredCard === 'katalpa' ? '0 16px 48px rgba(46, 125, 50, 0.25)' : '0 8px 32px rgba(44,62,80,0.12)',
                transform: hoveredCard === 'katalpa' ? 'translateY(-8px)' : 'translateY(0)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none',
                cursor: 'pointer',
                height: '380px',
                background: '#fff'
              }}
            >
              <div style={{
                position: 'relative',
                width: '100%',
                height: '70%',
                overflow: 'hidden'
              }}>
                <img 
                  src="/images/katalpa.jpg" 
                  alt="Katalpa" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: hoveredCard === 'katalpa' ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
                {/* Badge */}
                <div style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  background: 'rgba(255, 255, 255, 0.95)',
                  padding: '8px 16px',
                  borderRadius: 999,
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#2e7d32',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}>
                  {t('home.badgeInStock')}
                </div>
              </div>
              <div style={{
                padding: 24,
                height: '30%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#2e7d32',
                  marginBottom: 8
                }}>{t('home.katalpa')}</h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#234d20',
                  opacity: 0.85,
                  lineHeight: 1.5
                }}>{t('home.katalpaDesc')}</p>
              </div>
            </Link>

            {/* Lovor višnja kartica */}
            <Link
              to="/products/9"
              onMouseEnter={() => setHoveredCard('lovor')}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                position: 'relative',
                borderRadius: 24,
                overflow: 'hidden',
                boxShadow: hoveredCard === 'lovor' ? '0 16px 48px rgba(46, 125, 50, 0.25)' : '0 8px 32px rgba(44,62,80,0.12)',
                transform: hoveredCard === 'lovor' ? 'translateY(-8px)' : 'translateY(0)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none',
                cursor: 'pointer',
                height: '380px',
                background: '#fff'
              }}
            >
              <div style={{
                position: 'relative',
                width: '100%',
                height: '70%',
                overflow: 'hidden'
              }}>
                <img 
                  src="/images/lovorvisnja.jpeg" 
                  alt="Lovor višnja" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: hoveredCard === 'lovor' ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
                {/* Badge */}
                <div style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  background: 'rgba(255, 255, 255, 0.95)',
                  padding: '8px 16px',
                  borderRadius: 999,
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#2e7d32',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}>
                  {t('home.badgeInStock')}
                </div>
              </div>
              <div style={{
                padding: 24,
                height: '30%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#2e7d32',
                  marginBottom: 8
                }}>{t('home.lovor')}</h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#234d20',
                  opacity: 0.85,
                  lineHeight: 1.5
                }}>{t('home.lovorDesc')}</p>
              </div>
            </Link>

            {/* Fotinija Red Robin kartica */}
            <Link
              to="/products/10"
              onMouseEnter={() => setHoveredCard('fotinija')}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                position: 'relative',
                borderRadius: 24,
                overflow: 'hidden',
                boxShadow: hoveredCard === 'fotinija' ? '0 16px 48px rgba(46, 125, 50, 0.25)' : '0 8px 32px rgba(44,62,80,0.12)',
                transform: hoveredCard === 'fotinija' ? 'translateY(-8px)' : 'translateY(0)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none',
                cursor: 'pointer',
                height: '380px',
                background: '#fff'
              }}
            >
              <div style={{
                position: 'relative',
                width: '100%',
                height: '70%',
                overflow: 'hidden'
              }}>
                <img
                  src="/images/WhatsApp Image 2025-12-30 at 14.15.33.jpeg"
                  alt="Fotinija Red Robin"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: hoveredCard === 'fotinija' ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
                {/* Badge */}
                <div style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  background: 'rgba(255, 255, 255, 0.95)',
                  padding: '8px 16px',
                  borderRadius: 999,
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#2e7d32',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}>
                  {t('home.badgeInStock')}
                </div>
              </div>
              <div style={{
                padding: 24,
                height: '30%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#2e7d32',
                  marginBottom: 8
                }}>{t('home.fotinija')}</h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#234d20',
                  opacity: 0.85,
                  lineHeight: 1.5
                }}>{t('home.fotinijaDesc')}</p>
              </div>
            </Link>

            {/* Bambus kartica */}
            <Link
              to="/products/12"
              onMouseEnter={() => setHoveredCard('bambus')}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                position: 'relative',
                borderRadius: 24,
                overflow: 'hidden',
                boxShadow: hoveredCard === 'bambus' ? '0 16px 48px rgba(46, 125, 50, 0.25)' : '0 8px 32px rgba(44,62,80,0.12)',
                transform: hoveredCard === 'bambus' ? 'translateY(-8px)' : 'translateY(0)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none',
                cursor: 'pointer',
                height: '380px',
                background: '#fff'
              }}
            >
              <div style={{
                position: 'relative',
                width: '100%',
                height: '70%',
                overflow: 'hidden'
              }}>
                <img
                  src="/images/bambus.jpeg"
                  alt="Bambus"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: hoveredCard === 'bambus' ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
                {/* Badge */}
                <div style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  background: 'rgba(255, 255, 255, 0.95)',
                  padding: '8px 16px',
                  borderRadius: 999,
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#2e7d32',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}>
                  {t('home.badgeInStock')}
                </div>
              </div>
              <div style={{
                padding: 24,
                height: '30%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#2e7d32',
                  marginBottom: 8
                }}>{t('home.bambus')}</h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#234d20',
                  opacity: 0.85,
                  lineHeight: 1.5
                }}>{t('home.bambusDesc')}</p>
              </div>
            </Link>

          </div>

          {/* View all button */}
          <div style={{textAlign: 'center', marginTop: 48}}>
            <Link 
              to="/products"
              style={{
                display: 'inline-block',
                padding: '16px 48px',
                background: 'linear-gradient(135deg, #2e7d32 0%, #60ad5e 100%)',
                color: 'white',
                borderRadius: 999,
                fontSize: '1.1rem',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(46, 125, 50, 0.25)',
                transition: 'all 0.3s',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(46, 125, 50, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(46, 125, 50, 0.25)';
              }}
            >
              {t('home.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA sekcija */}
      <section className="section cta-section">
        <div className="container">
          <h2>{t('home.ctaTitle')}</h2>
          <p>{t('home.ctaSubtitle')}</p>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
