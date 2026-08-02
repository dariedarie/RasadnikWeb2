import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';
import { SUPPORTED_LANGS, getLangPrefix } from './utils/i18nRoutes';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://rasadnikweb2.onrender.com';

// Sinhronizuje i18n jezik, <html lang> i localStorage sa jezikom koji odgovara trenutnoj ruti
function LanguageWrapper({ lang, children }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
  }, [lang, i18n]);

  return children;
}

const PAGES = [
  { path: '', Component: Home },
  { path: '/products', Component: Products },
  { path: '/products/:id', Component: ProductDetails },
  { path: '/about', Component: About },
  { path: '/contact', Component: Contact },
  { path: '/gallery', Component: Gallery }
];

function App() {
  useEffect(() => {
    const keepAlive = () => {
      fetch(`${BACKEND_URL}/health`).catch(() => {});
    };
    keepAlive();
    const interval = setInterval(keepAlive, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              {SUPPORTED_LANGS.flatMap((lang) =>
                PAGES.map(({ path, Component }) => {
                  const fullPath = `${getLangPrefix(lang)}${path}` || '/';
                  return (
                    <Route
                      key={`${lang}${path}`}
                      path={fullPath}
                      element={
                        <LanguageWrapper lang={lang}>
                          <Component />
                        </LanguageWrapper>
                      }
                    />
                  );
                })
              )}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
