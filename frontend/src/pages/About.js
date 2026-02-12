import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  return (
    <>
    <Helmet>
      <title>O nama – Rasadnik Tilija | 30+ godina iskustva</title>
      <meta name="description" content="Rasadnik Tilija je porodična firma iz Kovina sa više od 30 godina iskustva u prodaji ukrasnog bilja i sadnica. Kvalitet, pouzdanost i prirodnost." />
      <link rel="canonical" href="https://rasadniktilija.rs/about" />
    </Helmet>
    <div className="about-page" style={{background: 'linear-gradient(135deg, #e0f2f1 0%, #f9fbe7 100%)', minHeight: '100vh'}}>
      <section className="hero-small">
        <div className="container">
          <h1>{t('about.title')}</h1>
          <p>{t('about.subtitle')}</p>
        </div>
      </section>

      <section className="section" style={{
        background: '#fff', 
        borderRadius: 18, 
        boxShadow: '0 8px 32px rgba(44,62,80,0.08)', 
        maxWidth: 1000, 
        margin: '0 auto 48px auto',
        padding: '48px 40px',
        border: '1px solid rgba(46, 125, 50, 0.1)'
      }}>
        <div className="container" style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 56, justifyContent: 'center'}}>
          <div className="about-image" style={{
            flex: '1 1 280px', 
            minWidth: 240, 
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}>
            <img 
              src="/images/logoeraser.png" 
              alt="Logo Rasadnik Tilija" 
              style={{
                maxWidth: '280px', 
                width: '100%', 
                height: 'auto',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </div>
          <div className="about-text" style={{
            flex: '2 1 380px', 
            minWidth: 280, 
            textAlign: 'center',
            padding: '0 20px'
          }}>
            <h2 style={{color: '#2e7d32', fontWeight: 700, marginBottom: 24, fontSize: '2rem'}}>{t('about.ourStory')}</h2>
            <p style={{fontSize: '1.15rem', color: '#234d20', marginBottom: 18, lineHeight: 1.8}}>
              {t('about.story1')}
            </p>
            <p style={{fontSize: '1.15rem', color: '#234d20', lineHeight: 1.8}}>
              {t('about.story2')}
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">{t('about.ourValues')}</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>{t('about.natural')}</h3>
              <p>{t('about.naturalDesc')}</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">💚</div>
              <h3>{t('about.quality')}</h3>
              <p>{t('about.qualityDesc')}</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>{t('about.reliability')}</h3>
              <p>{t('about.reliabilityDesc')}</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>{t('about.sustainability')}</h3>
              <p>{t('about.sustainabilityDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">{t('about.ourNumbers')}</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">{t('about.yearsExperience')}</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">1000+</div>
              <div className="stat-label">{t('about.satisfiedCustomers')}</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">{t('about.plantTypes')}</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">24h</div>
              <div className="stat-label">{t('about.deliveryTime')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;