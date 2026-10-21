import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getLangPrefix, parseLocalizedPath, buildLocalizedPath, SUPPORTED_LANGS } from '../utils/i18nRoutes';
import { categoryPages, pickLang, labels } from '../data/seoPages';
import { GUIDES_PATH, guideLabelsFor } from '../data/guides';
import './Footer.css';

const LANG_NAMES = { ro: 'Română', en: 'English', de: 'Deutsch' };

const Footer = () => {
  const { t, i18n } = useTranslation();
  const prefix = getLangPrefix(i18n.language);
  const { path } = parseLocalizedPath(useLocation().pathname);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🌿 PlantDGD S.R.L.</h3>
            <p>{t('footer.description')}</p>
            <p style={{marginTop: '12px', fontSize: '0.9rem', opacity: 0.85}}>
              {t('footer.wholesale')} · {t('footer.b2b')}
            </p>
          </div>

          <div className="footer-section">
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              <li><Link to={prefix || '/'} onClick={() => window.scrollTo(0,0)}>{t('nav.home')}</Link></li>
              <li><Link to={`${prefix}/products`} onClick={() => window.scrollTo(0,0)}>{t('nav.products')}</Link></li>
              <li><Link to={`${prefix}/about`} onClick={() => window.scrollTo(0,0)}>{t('nav.about')}</Link></li>
              <li><Link to={`${prefix}/contact`} onClick={() => window.scrollTo(0,0)}>{t('nav.contact')}</Link></li>
              <li><Link to={`${prefix}/gallery`} onClick={() => window.scrollTo(0,0)}>{t('nav.gallery')}</Link></li>
              <li><Link to={`${prefix}${GUIDES_PATH}`} onClick={() => window.scrollTo(0,0)}>{guideLabelsFor(i18n.language).nav}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{pickLang(labels, i18n.language).wholesalePlants}</h4>
            <ul>
              {categoryPages.map(c => (
                <li key={c.slug}><Link to={`${prefix}/${c.slug}`} onClick={() => window.scrollTo(0,0)}>{pickLang(c.content, i18n.language).name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('footer.contactInfo')}</h4>
            <ul>
              <li>📍 {t('contact.address')}, {t('contact.addressCity')}</li>
              <li><a href="tel:+40729048545" style={{color: 'inherit', textDecoration: 'none'}}>📞 +40 729 048 545</a></li>
              <li><a href="https://wa.me/381638870837" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>💬 WhatsApp</a></li>
              <li><a href="mailto:office@plantdgd.ro" style={{color: 'inherit', textDecoration: 'none'}}>📧 office@plantdgd.ro</a></li>
              <li>
                <a href="https://www.instagram.com/plantdgd/" target="_blank" rel="noopener noreferrer" aria-label="PlantDGD pe Instagram" style={{color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4.5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  Instagram @plantdgd
                </a>
              </li>
            </ul>
          </div>

        </div>
        {/* Pravi linkovi ka istoj stranici na drugim jezicima - Google preko njih otkriva /en i /de verzije */}
        <nav className="footer-bottom footer-langs" aria-label="Language">
          {SUPPORTED_LANGS.map((l, i) => (
            <React.Fragment key={l}>
              {i > 0 && ' · '}
              <Link to={buildLocalizedPath(path, l)} hrefLang={l} lang={l} aria-current={l === i18n.language ? 'page' : undefined} onClick={() => window.scrollTo(0,0)}>{LANG_NAMES[l]}</Link>
            </React.Fragment>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer; 