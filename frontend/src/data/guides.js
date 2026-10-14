// Vodiči (ghiduri) za peisagiști, primării și clienți en gros - samo na rumunskom (/ghiduri/<slug>).
// Tekst članaka je u guidesContent.json (učitava se samo na stranici članka).
// Ovaj fajl NE SME imati import-e (koristi ga i scripts/prerender.mjs).
//
// products / categories: gde se članak prikazuje kao "Ghiduri utile" (stranice proizvoda i kategorija)

export const GUIDES_PATH = '/ghiduri';

export const guidesIndex = {
  title: 'Ghiduri pentru Gard Viu, Conifere și Spații Verzi | PlantDGD',
  description: 'Ghiduri practice pentru peisagiști, primării și grădinari: câte tuia pe metru, cele mai bune plante pentru gard viu, plantare, plante rezistente la secetă și arbori pentru aliniamente.',
  h1: 'Ghiduri pentru peisagiști și spații verzi',
  intro: 'Informații practice despre alegerea, plantarea și întreținerea plantelor ornamentale, scrise pentru proiecte reale: garduri vii, spații verzi publice, ansambluri rezidențiale și grădini.'
};

export const guides = [
  {
    slug: 'cate-tuia-pe-metru-liniar',
    title: 'Câte Tuia pe Metru Liniar? Calculator și Ghid pentru Gard Viu | PlantDGD',
    description: 'Câte plante de tuia se plantează pe metru liniar de gard viu: distanțe pentru tuia Smaragd, laurocerasus, Photinia și Leyland, calculator de plante și sfaturi de plantare.',
    h1: 'Câte tuia pe metru liniar? Calculator și ghid pentru gard viu',
    excerpt: 'Distanța de plantare corectă pentru tuia și alte plante de gard viu, cu un calculator care vă arată câte plante vă trebuie pentru lungimea gardului.',
    image: '/images/tuia-smaragd.jpg',
    imageAlt: 'Gard viu din tuia Smaragd',
    date: '2026-10-14',
    products: [1, 4, 9, 10, 39, 2],
    categories: ['ziva-ograda', 'cetinari']
  },
  {
    slug: 'cele-mai-bune-plante-pentru-gard-viu',
    title: 'Cele Mai Bune Plante pentru Gard Viu – Comparație Completă | PlantDGD',
    description: 'Comparație între tuia Smaragd, laurocerasus, Photinia Red Robin, chiparos Leyland, tisă și Lonicera nitida: creștere, înălțime, umbră, secetă și plante pe metru.',
    h1: 'Cele mai bune plante pentru gard viu: comparație pentru proiecte',
    excerpt: 'Tuia, laurocerasus, Photinia, Leyland, tisă sau Lonicera? Un tabel comparativ și recomandări în funcție de spațiu, umbră, buget și întreținere.',
    image: '/images/projekti2.jpeg',
    imageAlt: 'Gard viu din Photinia Red Robin și laurocerasus într-un ansamblu rezidențial',
    date: '2026-10-14',
    products: [1, 9, 10, 39, 2, 15],
    categories: ['ziva-ograda']
  },
  {
    slug: 'gard-viu-cu-crestere-rapida',
    title: 'Gard Viu cu Creștere Rapidă – Top Plante pentru Intimitate | PlantDGD',
    description: 'Cele mai rapide plante pentru gard viu: chiparos Leyland, laurocerasus, Photinia, bambus și liliac. Cât cresc pe an, câte plante pe metru și ce întreținere necesită.',
    h1: 'Gard viu cu creștere rapidă: ce plante alegeți',
    excerpt: 'Aveți nevoie de intimitate repede? Plantele de gard viu cu cea mai rapidă creștere, cât cresc pe an și ce compromisuri implică.',
    image: '/images/blog-lejlandi.webp',
    imageAlt: 'Gard viu înalt din chiparos Leyland',
    date: '2026-10-14',
    products: [39, 9, 10, 12, 42],
    categories: ['ziva-ograda']
  },
  {
    slug: 'cand-se-planteaza-tuia-si-coniferele',
    title: 'Când Se Plantează Tuia și Coniferele? Calendar de Plantare | PlantDGD',
    description: 'Când se plantează tuia, coniferele, arbuștii și perenele: perioadele optime pentru plante cu balot și în container, plantarea de toamnă și de primăvară.',
    h1: 'Când se plantează tuia și coniferele? Calendar de plantare',
    excerpt: 'Perioadele optime de plantare pentru conifere, arbuști, arbori și perene, cu diferențele dintre plantele cu balot și cele în container.',
    image: '/images/tujavelika_stara.jpeg',
    imageAlt: 'Rând de tuia Smaragd crescute în câmp, înainte de plantare',
    date: '2026-10-14',
    products: [1, 5, 3, 2, 44],
    categories: ['cetinari']
  },
  {
    slug: 'plante-cu-balot-sau-in-container',
    title: 'Plante cu Balot sau în Container? Ce Alegeți pentru Proiect | PlantDGD',
    description: 'Diferențele dintre plantele cu balot de pământ și cele în container (ghiveci): cost, perioadă de plantare, prindere, transport și când merită fiecare variantă.',
    h1: 'Plante cu balot sau în container: ce alegeți pentru proiect',
    excerpt: 'Cost, perioada de plantare, rata de prindere și transport: cum alegeți între plantele cu balot și cele în container pentru un proiect.',
    image: '/images/plantdgd-arbori-ornamentali-cu-balot-transport.jpg',
    imageAlt: 'Arbori ornamentali cu balot în camion, pregătiți pentru transport',
    date: '2026-10-14',
    products: [7, 45, 1, 39, 5],
    categories: ['liscari', 'cetinari']
  },
  {
    slug: 'plante-rezistente-la-seceta-spatii-verzi',
    title: 'Plante Rezistente la Secetă pentru Spații Verzi Publice | PlantDGD',
    description: 'Plante rezistente la secetă pentru primării, sensuri giratorii și spații publice: conifere, arbuști, ierburi ornamentale și perene cu întreținere redusă.',
    h1: 'Plante rezistente la secetă pentru spații verzi publice',
    excerpt: 'Conifere, ierburi ornamentale și perene care rezistă la secetă și căldură, pentru sensuri giratorii, scuaruri și spații publice cu întreținere redusă.',
    image: '/images/ienupar-tarator-juniperus-horizontalis.jpg',
    imageAlt: 'Ienupăr târâtor pentru acoperirea solului în spații verzi',
    date: '2026-10-14',
    products: [6, 3, 4, 11, 24, 25, 31, 35, 36, 40],
    categories: ['perene', 'siblje']
  },
  {
    slug: 'arbori-pentru-aliniamente-stradale',
    title: 'Arbori pentru Aliniamente Stradale – Ghid pentru Primării | PlantDGD',
    description: 'Cum alegeți arborii pentru aliniamente stradale și parcuri: catalpa, cireș japonez, pin negru și alte specii, distanțe de plantare, dimensiuni și întreținere.',
    h1: 'Arbori pentru aliniamente stradale: ghid pentru primării și proiectanți',
    excerpt: 'Ce arbori se potrivesc pe străzi, bulevarde și în parcuri, la ce distanță se plantează și ce trebuie verificat înainte de comandă.',
    image: '/images/catalpa-bignonioides.jpg',
    imageAlt: 'Catalpa, arbore de umbră pentru aliniamente stradale',
    date: '2026-10-14',
    products: [7, 45, 3, 44, 47],
    categories: ['liscari']
  },
  {
    slug: 'plante-pentru-acoperisuri-verzi',
    title: 'Plante pentru Acoperișuri Verzi – Sedum și Alte Specii | PlantDGD',
    description: 'Ce plante se folosesc pe acoperișurile verzi extensive: sedum (iarbă grasă), Festuca glauca și alte perene rezistente la secetă. Densitate de plantare și întreținere.',
    h1: 'Plante pentru acoperișuri verzi: sedum și alte specii rezistente',
    excerpt: 'Speciile de sedum și perenele potrivite pentru acoperișuri verzi extensive, câte plante pe metru pătrat și cum se întrețin.',
    image: '/images/sedum-angelina.jpg',
    imageAlt: 'Sedum Angelina, plantă pentru acoperișuri verzi',
    date: '2026-10-14',
    products: [31, 32, 33, 34, 24, 41],
    categories: ['perene']
  },
  {
    slug: 'laurocerasus-sau-tuia',
    title: 'Laurocerasus sau Tuia pentru Gard Viu? Avantaje și Dezavantaje | PlantDGD',
    description: 'Laurocerasus sau tuia Smaragd pentru gard viu: comparație la creștere, umbră, spațiu ocupat, întreținere și aspect, plus când se potrivește fiecare.',
    h1: 'Laurocerasus sau tuia pentru gard viu?',
    excerpt: 'Două dintre cele mai cerute plante de gard viu, comparate: creștere, umbră, lățime, întreținere și situațiile în care alegeți una sau alta.',
    image: '/images/laurocerasus-prunus-laurocerasus.jpg',
    imageAlt: 'Gard viu din laurocerasus (Prunus laurocerasus)',
    date: '2026-10-14',
    products: [9, 1, 10],
    categories: ['ziva-ograda']
  }
];

export const getGuideBySlug = (slug) => guides.find(g => g.slug === slug);
export const guidePath = (slug) => `${GUIDES_PATH}/${slug}`;
export const guidesForProduct = (id) => guides.filter(g => g.products.includes(Number(id)));
export const guidesForCategory = (categoryId) => guides.filter(g => g.categories.includes(categoryId));

// Jednostavni linkovi u tekstu: "vezi [tuia Smaragd](/products/tuia-smaragd)" -> delovi teksta i linkova
export const parseInlineLinks = (text) => {
  const parts = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push({ text: text.slice(last, m.index) });
    parts.push({ text: m[1], href: m[2] });
    last = re.lastIndex;
  }
  if (last < text.length) parts.push({ text: text.slice(last) });
  return parts;
};

// Kalkulator gard viu: plante pe metru liniar (rând simplu) - min/max
export const hedgeSpecies = [
  { id: 1, name: 'Tuia Smaragd', min: 2, max: 3 },
  { id: 4, name: 'Tuia orientală', min: 2, max: 3 },
  { id: 9, name: 'Laurocerasus', min: 2, max: 3 },
  { id: 10, name: 'Photinia Red Robin', min: 2, max: 3 },
  { id: 39, name: 'Chiparos Leyland', min: 1.5, max: 2 },
  { id: 2, name: 'Tisă (Taxus baccata)', min: 3, max: 4 },
  { id: 15, name: 'Lonicera nitida', min: 3, max: 4 }
];
