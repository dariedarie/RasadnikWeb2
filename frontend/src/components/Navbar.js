import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { getLangPrefix } from '../utils/i18nRoutes';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const prefix = getLangPrefix(i18n.language);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to={prefix || '/'} className="navbar-brand">
          <img src="/images/logo.png" alt="PlantDGD Logo" style={{height: '40px', width: 'auto', objectFit: 'contain', verticalAlign: 'middle', marginRight: '10px'}} />
          PlantDGD
        </Link>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link to={prefix || '/'} className="nav-link" onClick={() => setIsOpen(false)}>
            {t('nav.home')}
          </Link>
          <Link to={`${prefix}/products`} className="nav-link" onClick={() => setIsOpen(false)}>
            {t('nav.products')}
          </Link>
          <Link to={`${prefix}/about`} className="nav-link" onClick={() => setIsOpen(false)}>
            {t('nav.about')}
          </Link>
          <Link to={`${prefix}/contact`} className="nav-link" onClick={() => setIsOpen(false)}>
            {t('nav.contact')}
          </Link>
          <Link to={`${prefix}/gallery`} className="nav-link" onClick={() => setIsOpen(false)}>
            {t('nav.gallery')}
          </Link>
          <LanguageSwitcher />
        </div>
        
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 