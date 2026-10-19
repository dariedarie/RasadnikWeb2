// Prijavljuje sve URL-ove iz live sitemap.xml pretrazivacima preko IndexNow protokola
// (Bing, Yandex, Seznam, Naver...). Google ne podrzava IndexNow - za njega je dovoljan
// sitemap poslat u Google Search Console.
// Pokrece se automatski iz GitHub Action-a posle svakog uspesnog Vercel deploy-a,
// a moze i rucno: node scripts/indexnow.mjs
const SITE_URL = 'https://www.plantdgd.ro';
const KEY = '8c1ecc1c03fa90dc98f07bd5b4a7bf11'; // isti kao public/<KEY>.txt

// sitemap.xml je indeks (sitemap-ro/en/de.xml) - skupi URL-ove iz svih pod-sitemap-ova
const getLocs = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} nije dostupan: HTTP ${res.status}`);
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  return xml.includes('<sitemapindex') ? (await Promise.all(locs.map(getLocs))).flat() : locs;
};
const urls = await getLocs(`${SITE_URL}/sitemap.xml`);
if (urls.length === 0) throw new Error('sitemap.xml nema URL-ova');

const submit = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: new URL(SITE_URL).host,
    key: KEY,
    keyLocation: `${SITE_URL}/${KEY}.txt`,
    urlList: urls
  })
});

// 200 = prihvaceno, 202 = prihvaceno (kljuc se jos proverava)
console.log(`IndexNow: poslato ${urls.length} URL-ova, odgovor HTTP ${submit.status}`);
if (![200, 202].includes(submit.status)) {
  console.error(await submit.text());
  process.exit(1);
}
