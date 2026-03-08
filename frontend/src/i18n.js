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

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'ro',
    fallbackLng: 'ro',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
