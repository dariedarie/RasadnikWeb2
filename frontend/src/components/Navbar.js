import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="/images/logo.png" alt="Plant Dgd Logo" style={{height: '40px', width: 'auto', objectFit: 'contain', verticalAlign: 'middle', marginRight: '10px'}} />
          Plant Dgd
        </Link>
        
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            {t('nav.home')}
          </Link>
          <Link to="/products" className="nav-link" onClick={() => setIsOpen(false)}>
            {t('nav.products')}
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
            {t('nav.about')}
          </Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
            {t('nav.contact')}
          </Link>
          <Link to="/gallery" className="nav-link" onClick={() => setIsOpen(false)}>
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