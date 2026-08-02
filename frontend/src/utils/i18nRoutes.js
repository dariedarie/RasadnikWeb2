// Centralizovana logika za rute po jeziku (ro = bez prefiksa, en = /en, de = /de)

export const SUPPORTED_LANGS = ['ro', 'en', 'de'];
export const DEFAULT_LANG = 'ro';
export const SITE_URL = 'https://plantdgd.ro';

// URL prefiks za dati jezik ('' za ro, '/en', '/de')
export function getLangPrefix(lang) {
  return lang === DEFAULT_LANG ? '' : `/${lang}`;
}

// Rastavlja trenutni pathname na { lang, path } gde je path "neutralna" putanja bez prefiksa jezika
export function parseLocalizedPath(pathname) {
  for (const lang of SUPPORTED_LANGS) {
    if (lang === DEFAULT_LANG) continue;
    const prefix = `/${lang}`;
    if (pathname === prefix) {
      return { lang, path: '/' };
    }
    if (pathname.startsWith(`${prefix}/`)) {
      return { lang, path: pathname.slice(prefix.length) };
    }
  }
  return { lang: DEFAULT_LANG, path: pathname || '/' };
}

// Gradi putanju za dati jezik od neutralne putanje (npr. '/products/5', 'en' -> '/en/products/5')
export function buildLocalizedPath(neutralPath, lang) {
  const prefix = getLangPrefix(lang);
  if (neutralPath === '/') return prefix || '/';
  return `${prefix}${neutralPath}`;
}

// Apsolutni URL-ovi za sve jezike, za upotrebu u canonical/hreflang tagovima
export function buildHreflangUrls(neutralPath) {
  return {
    ro: `${SITE_URL}${buildLocalizedPath(neutralPath, 'ro')}`,
    en: `${SITE_URL}${buildLocalizedPath(neutralPath, 'en')}`,
    de: `${SITE_URL}${buildLocalizedPath(neutralPath, 'de')}`
  };
}

// Vraća niz <link> elemenata (canonical + hreflang alternates) spreman za ubacivanje u <Helmet>
export function getSeoLinks(neutralPath, currentLang) {
  const urls = buildHreflangUrls(neutralPath);
  const canonical = urls[currentLang] || urls[DEFAULT_LANG];
  return [
    <link key="canonical" rel="canonical" href={canonical} />,
    <link key="alt-ro" rel="alternate" hrefLang="ro" href={urls.ro} />,
    <link key="alt-en" rel="alternate" hrefLang="en" href={urls.en} />,
    <link key="alt-de" rel="alternate" hrefLang="de" href={urls.de} />,
    <link key="alt-xd" rel="alternate" hrefLang="x-default" href={urls.ro} />
  ];
}
