import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🌿 Plant Dgd</h3>
            <p>{t('footer.description')}</p>
            <p style={{marginTop: '12px', fontSize: '0.9rem', opacity: 0.85}}>
              {t('footer.wholesale')} · {t('footer.b2b')}
            </p>
          </div>

          <div className="footer-section">
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              <li><Link to="/" onClick={() => window.scrollTo(0,0)}>{t('nav.home')}</Link></li>
              <li><Link to="/products" onClick={() => window.scrollTo(0,0)}>{t('nav.products')}</Link></li>
              <li><Link to="/about" onClick={() => window.scrollTo(0,0)}>{t('nav.about')}</Link></li>
              <li><Link to="/contact" onClick={() => window.scrollTo(0,0)}>{t('nav.contact')}</Link></li>
              <li><Link to="/gallery" onClick={() => window.scrollTo(0,0)}>{t('nav.gallery')}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('footer.contactInfo')}</h4>
            <ul>
              <li><a href="tel:+381638870837" style={{color: 'inherit', textDecoration: 'none'}}>📞 +381 63 88 70 837</a></li>
              <li><a href="https://wa.me/381638870837" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>💬 WhatsApp</a></li>
              <li><a href="mailto:tilijarasadnik5@gmail.com" style={{color: 'inherit', textDecoration: 'none'}}>📧 tilijarasadnik5@gmail.com</a></li>
              <li>🚚 {t('contact.addressCity')}</li>
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer; 