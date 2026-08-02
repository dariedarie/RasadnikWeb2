import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationRO from './locales/ro.json';
import translationEN from './locales/en.json';
import translationDE from './locales/de.json';

const resources = {
  ro: {
    translation: translationRO
  },
  en: {
    translation: translationEN
  },
  de: {
    translation: translationDE
  }
};

// Jezik se isključivo određuje iz URL putanje (/en/..., /de/..., inače ro) —
// ne iz localStorage-a, jer svaka ruta ima tačno određen jezik i mora ostati
// deterministička (nezavisna od prethodno posećenog jezika) i za korisnike i za crawlere.
const getInitialLanguage = () => {
  const path = window.location.pathname;
  if (path === '/en' || path.startsWith('/en/')) return 'en';
  if (path === '/de' || path.startsWith('/de/')) return 'de';
  return 'ro';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: 'ro',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
