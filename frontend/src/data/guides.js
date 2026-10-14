// Vodiči (ghiduri) za peisagiști, primării și clienți en gros, na ro/en/de:
//   /ghiduri/<slug>, /en/ghiduri/<slug>, /de/ghiduri/<slug> (isti slug na svim jezicima)
// Tekst članaka je u guidesContent.<lang>.json (učitava se samo na stranici članka).
// Ovaj fajl NE SME imati import-e (koristi ga i scripts/prerender.mjs).
//
// products / categories: gde se članak prikazuje kao "Ghiduri utile" (stranice proizvoda i kategorija)

export const GUIDES_PATH = '/ghiduri';
export const GUIDE_LANGS = ['ro', 'en', 'de'];

const pick = (byLang, lang) => byLang[lang] || byLang.ro;

export const guideLabels = {
  ro: {
    nav: 'Ghiduri', home: 'Acasă', guides: 'Ghiduri', faq: 'Întrebări frecvente', useful: 'Ghiduri utile',
    productsTitle: 'Plante din acest ghid, disponibile en gros', other: 'Alte ghiduri', all: 'Toate ghidurile',
    ctaTitle: 'Aveți un proiect? Cereți o ofertă en gros',
    ctaText: 'Trimiteți-ne lista de plante și cantitățile, iar noi vă răspundem cu o ofertă personalizată. Livrăm în toată România.',
    ctaButton: 'Cere ofertă', locale: 'ro-RO',
    calc: {
      length: 'Lungimea gardului (m)', plant: 'Plantă', rows: 'Rânduri', single: 'Rând simplu', double: 'Rând dublu (zig-zag)',
      result: 'Necesar estimat', plants: 'plante', perMetre: 'plante pe metru liniar', twoRows: ', pe două rânduri',
      hint: 'Valoarea mai mare se recomandă pentru plante mici sau dacă doriți un gard compact mai repede.',
      view: 'Vezi', quote: 'Cere ofertă pentru'
    }
  },
  en: {
    nav: 'Guides', home: 'Home', guides: 'Guides', faq: 'Frequently asked questions', useful: 'Useful guides',
    productsTitle: 'Plants from this guide, available wholesale', other: 'More guides', all: 'All guides',
    ctaTitle: 'Have a project? Request a wholesale quote',
    ctaText: 'Send us your plant list and quantities and we will reply with a tailored quote. We deliver throughout Romania and Europe.',
    ctaButton: 'Request a quote', locale: 'en-GB',
    calc: {
      length: 'Hedge length (m)', plant: 'Plant', rows: 'Rows', single: 'Single row', double: 'Double row (staggered)',
      result: 'Estimated quantity', plants: 'plants', perMetre: 'plants per linear metre', twoRows: ', in two rows',
      hint: 'Use the higher value for small plants or if you want a dense hedge sooner.',
      view: 'View', quote: 'Request a quote for'
    }
  },
  de: {
    nav: 'Ratgeber', home: 'Startseite', guides: 'Ratgeber', faq: 'Häufige Fragen', useful: 'Nützliche Ratgeber',
    productsTitle: 'Pflanzen aus diesem Ratgeber, im Großhandel erhältlich', other: 'Weitere Ratgeber', all: 'Alle Ratgeber',
    ctaTitle: 'Haben Sie ein Projekt? Fordern Sie ein Großhandelsangebot an',
    ctaText: 'Senden Sie uns Ihre Pflanzenliste und Mengen, wir antworten mit einem individuellen Angebot. Lieferung in ganz Rumänien und Europa.',
    ctaButton: 'Angebot anfordern', locale: 'de-DE',
    calc: {
      length: 'Heckenlänge (m)', plant: 'Pflanze', rows: 'Reihen', single: 'Einreihig', double: 'Zweireihig (versetzt)',
      result: 'Geschätzter Bedarf', plants: 'Pflanzen', perMetre: 'Pflanzen pro laufendem Meter', twoRows: ', zweireihig',
      hint: 'Der höhere Wert empfiehlt sich für kleine Pflanzen oder wenn die Hecke schneller dicht sein soll.',
      view: 'Ansehen', quote: 'Angebot anfordern für'
    }
  }
};

export const guidesIndexByLang = {
  ro: {
    title: 'Ghiduri pentru Gard Viu, Conifere și Spații Verzi | PlantDGD',
    description: 'Ghiduri practice pentru peisagiști, primării și grădinari: câte tuia pe metru, cele mai bune plante pentru gard viu, plantare, plante rezistente la secetă și arbori pentru aliniamente.',
    h1: 'Ghiduri pentru peisagiști și spații verzi',
    intro: 'Informații practice despre alegerea, plantarea și întreținerea plantelor ornamentale, scrise pentru proiecte reale: garduri vii, spații verzi publice, ansambluri rezidențiale și grădini.'
  },
  en: {
    title: 'Guides to Hedges, Conifers and Green Spaces | PlantDGD',
    description: 'Practical guides for landscapers, municipalities and gardeners: how many thuja per metre, the best hedge plants, planting, drought-tolerant plants and street trees.',
    h1: 'Guides for landscapers and green spaces',
    intro: 'Practical information on choosing, planting and maintaining ornamental plants, written for real projects: hedges, public green spaces, residential developments and gardens.'
  },
  de: {
    title: 'Ratgeber zu Hecken, Koniferen und Grünflächen | PlantDGD',
    description: 'Praktische Ratgeber für Landschaftsgärtner, Gemeinden und Gärtner: wie viele Thujen pro Meter, die besten Heckenpflanzen, Pflanzung, trockenheitsverträgliche Pflanzen und Straßenbäume.',
    h1: 'Ratgeber für Landschaftsgärtner und Grünflächen',
    intro: 'Praktische Informationen zur Auswahl, Pflanzung und Pflege von Zierpflanzen, geschrieben für echte Projekte: Hecken, öffentliche Grünflächen, Wohnanlagen und Gärten.'
  }
};

export const guides = [
  {
    slug: 'cate-tuia-pe-metru-liniar',
    image: '/images/tuia-smaragd.jpg',
    date: '2026-10-14',
    products: [1, 4, 9, 10, 39, 2],
    categories: ['ziva-ograda', 'cetinari'],
    meta: {
      ro: {
        title: 'Câte Tuia pe Metru Liniar? Calculator și Ghid pentru Gard Viu | PlantDGD',
        description: 'Câte plante de tuia se plantează pe metru liniar de gard viu: distanțe pentru tuia Smaragd, laurocerasus, Photinia și Leyland, calculator de plante și sfaturi de plantare.',
        h1: 'Câte tuia pe metru liniar? Calculator și ghid pentru gard viu',
        excerpt: 'Distanța de plantare corectă pentru tuia și alte plante de gard viu, cu un calculator care vă arată câte plante vă trebuie pentru lungimea gardului.',
        imageAlt: 'Gard viu din tuia Smaragd'
      },
      en: {
        title: 'How Many Thuja per Metre? Hedge Calculator and Planting Guide | PlantDGD',
        description: 'How many thuja plants per linear metre of hedge: spacing for Thuja Smaragd, cherry laurel, Photinia and Leyland cypress, a plant calculator and planting tips.',
        h1: 'How many thuja per metre? Hedge calculator and planting guide',
        excerpt: 'The right planting distance for thuja and other hedge plants, with a calculator showing how many plants you need for your hedge length.',
        imageAlt: 'Thuja Smaragd hedge'
      },
      de: {
        title: 'Wie viele Thujen pro Meter? Heckenrechner und Pflanzratgeber | PlantDGD',
        description: 'Wie viele Thujen pro laufendem Meter Hecke: Pflanzabstände für Thuja Smaragd, Kirschlorbeer, Photinia und Leylandzypresse, Pflanzenrechner und Pflanztipps.',
        h1: 'Wie viele Thujen pro Meter? Heckenrechner und Pflanzratgeber',
        excerpt: 'Der richtige Pflanzabstand für Thuja und andere Heckenpflanzen – mit einem Rechner, der zeigt, wie viele Pflanzen Sie für Ihre Heckenlänge brauchen.',
        imageAlt: 'Hecke aus Thuja Smaragd'
      }
    }
  },
  {
    slug: 'cele-mai-bune-plante-pentru-gard-viu',
    image: '/images/projekti2.jpeg',
    date: '2026-10-14',
    products: [1, 9, 10, 39, 2, 15],
    categories: ['ziva-ograda'],
    meta: {
      ro: {
        title: 'Cele Mai Bune Plante pentru Gard Viu – Comparație Completă | PlantDGD',
        description: 'Comparație între tuia Smaragd, laurocerasus, Photinia Red Robin, chiparos Leyland, tisă și Lonicera nitida: creștere, înălțime, umbră, secetă și plante pe metru.',
        h1: 'Cele mai bune plante pentru gard viu: comparație pentru proiecte',
        excerpt: 'Tuia, laurocerasus, Photinia, Leyland, tisă sau Lonicera? Un tabel comparativ și recomandări în funcție de spațiu, umbră, buget și întreținere.',
        imageAlt: 'Gard viu din Photinia Red Robin și laurocerasus într-un ansamblu rezidențial'
      },
      en: {
        title: 'The Best Hedge Plants – A Complete Comparison | PlantDGD',
        description: 'Thuja Smaragd, cherry laurel, Photinia Red Robin, Leyland cypress, yew and Lonicera nitida compared: growth, height, shade, drought and plants per metre.',
        h1: 'The best hedge plants: a comparison for projects',
        excerpt: 'Thuja, cherry laurel, Photinia, Leyland, yew or Lonicera? A comparison table and recommendations based on space, shade, budget and maintenance.',
        imageAlt: 'Photinia Red Robin and cherry laurel hedge in a residential development'
      },
      de: {
        title: 'Die besten Heckenpflanzen – ein kompletter Vergleich | PlantDGD',
        description: 'Thuja Smaragd, Kirschlorbeer, Photinia Red Robin, Leylandzypresse, Eibe und Lonicera nitida im Vergleich: Wuchs, Höhe, Schatten, Trockenheit und Pflanzen pro Meter.',
        h1: 'Die besten Heckenpflanzen: ein Vergleich für Projekte',
        excerpt: 'Thuja, Kirschlorbeer, Photinia, Leyland, Eibe oder Lonicera? Eine Vergleichstabelle und Empfehlungen nach Platz, Schatten, Budget und Pflege.',
        imageAlt: 'Hecke aus Photinia Red Robin und Kirschlorbeer in einer Wohnanlage'
      }
    }
  },
  {
    slug: 'gard-viu-cu-crestere-rapida',
    image: '/images/blog-lejlandi.webp',
    date: '2026-10-14',
    products: [39, 9, 10, 12, 42],
    categories: ['ziva-ograda'],
    meta: {
      ro: {
        title: 'Gard Viu cu Creștere Rapidă – Top Plante pentru Intimitate | PlantDGD',
        description: 'Cele mai rapide plante pentru gard viu: chiparos Leyland, laurocerasus, Photinia, bambus și liliac. Cât cresc pe an, câte plante pe metru și ce întreținere necesită.',
        h1: 'Gard viu cu creștere rapidă: ce plante alegeți',
        excerpt: 'Aveți nevoie de intimitate repede? Plantele de gard viu cu cea mai rapidă creștere, cât cresc pe an și ce compromisuri implică.',
        imageAlt: 'Gard viu înalt din chiparos Leyland'
      },
      en: {
        title: 'Fast-Growing Hedges – Top Plants for Privacy | PlantDGD',
        description: 'The fastest hedge plants: Leyland cypress, cherry laurel, Photinia, bamboo and lilac. How much they grow per year, plants per metre and the maintenance they need.',
        h1: 'Fast-growing hedges: which plants to choose',
        excerpt: 'Need privacy quickly? The fastest-growing hedge plants, how much they grow per year and the trade-offs involved.',
        imageAlt: 'Tall Leyland cypress hedge'
      },
      de: {
        title: 'Schnellwachsende Hecken – die besten Pflanzen für Sichtschutz | PlantDGD',
        description: 'Die schnellsten Heckenpflanzen: Leylandzypresse, Kirschlorbeer, Photinia, Bambus und Flieder. Jährlicher Zuwachs, Pflanzen pro Meter und Pflegeaufwand.',
        h1: 'Schnellwachsende Hecken: welche Pflanzen wählen',
        excerpt: 'Sie brauchen schnell Sichtschutz? Die am schnellsten wachsenden Heckenpflanzen, ihr jährlicher Zuwachs und die Kompromisse.',
        imageAlt: 'Hohe Hecke aus Leylandzypressen'
      }
    }
  },
  {
    slug: 'cand-se-planteaza-tuia-si-coniferele',
    image: '/images/tujavelika_stara.jpeg',
    date: '2026-10-14',
    products: [1, 5, 3, 2, 44],
    categories: ['cetinari'],
    meta: {
      ro: {
        title: 'Când Se Plantează Tuia și Coniferele? Calendar de Plantare | PlantDGD',
        description: 'Când se plantează tuia, coniferele, arbuștii și perenele: perioadele optime pentru plante cu balot și în container, plantarea de toamnă și de primăvară.',
        h1: 'Când se plantează tuia și coniferele? Calendar de plantare',
        excerpt: 'Perioadele optime de plantare pentru conifere, arbuști, arbori și perene, cu diferențele dintre plantele cu balot și cele în container.',
        imageAlt: 'Rând de tuia Smaragd crescute în câmp, înainte de plantare'
      },
      en: {
        title: 'When to Plant Thuja and Conifers? Planting Calendar | PlantDGD',
        description: 'When to plant thuja, conifers, shrubs and perennials: the best times for balled and container plants, autumn and spring planting.',
        h1: 'When to plant thuja and conifers? A planting calendar',
        excerpt: 'The best planting times for conifers, shrubs, trees and perennials, and the differences between balled and container plants.',
        imageAlt: 'Row of field-grown Thuja Smaragd before planting'
      },
      de: {
        title: 'Wann pflanzt man Thuja und Koniferen? Pflanzkalender | PlantDGD',
        description: 'Wann pflanzt man Thuja, Koniferen, Sträucher und Stauden: die besten Zeiten für Ballen- und Containerpflanzen, Herbst- und Frühjahrspflanzung.',
        h1: 'Wann pflanzt man Thuja und Koniferen? Ein Pflanzkalender',
        excerpt: 'Die besten Pflanzzeiten für Koniferen, Sträucher, Bäume und Stauden – und die Unterschiede zwischen Ballen- und Containerware.',
        imageAlt: 'Reihe von Thuja Smaragd im Freiland vor der Pflanzung'
      }
    }
  },
  {
    slug: 'plante-cu-balot-sau-in-container',
    image: '/images/plantdgd-arbori-ornamentali-cu-balot-transport.jpg',
    date: '2026-10-14',
    products: [7, 45, 1, 39, 5],
    categories: ['liscari', 'cetinari'],
    meta: {
      ro: {
        title: 'Plante cu Balot sau în Container? Ce Alegeți pentru Proiect | PlantDGD',
        description: 'Diferențele dintre plantele cu balot de pământ și cele în container (ghiveci): cost, perioadă de plantare, prindere, transport și când merită fiecare variantă.',
        h1: 'Plante cu balot sau în container: ce alegeți pentru proiect',
        excerpt: 'Cost, perioada de plantare, rata de prindere și transport: cum alegeți între plantele cu balot și cele în container pentru un proiect.',
        imageAlt: 'Arbori ornamentali cu balot în camion, pregătiți pentru transport'
      },
      en: {
        title: 'Balled or Container Plants? What to Choose for Your Project | PlantDGD',
        description: 'The differences between root-balled and container-grown plants: cost, planting season, establishment, transport and when each option makes sense.',
        h1: 'Balled or container plants: what to choose for your project',
        excerpt: 'Cost, planting season, establishment rate and transport: how to choose between balled and container plants for a project.',
        imageAlt: 'Balled ornamental trees loaded on a truck for transport'
      },
      de: {
        title: 'Ballenware oder Containerware? Was passt zu Ihrem Projekt | PlantDGD',
        description: 'Die Unterschiede zwischen Ballen- und Containerpflanzen: Kosten, Pflanzzeit, Anwachsen, Transport und wann sich welche Variante lohnt.',
        h1: 'Ballenware oder Containerware: was passt zu Ihrem Projekt',
        excerpt: 'Kosten, Pflanzzeit, Anwachsrate und Transport: wie Sie zwischen Ballen- und Containerpflanzen für ein Projekt wählen.',
        imageAlt: 'Zierbäume mit Ballen im LKW, bereit für den Transport'
      }
    }
  },
  {
    slug: 'plante-rezistente-la-seceta-spatii-verzi',
    image: '/images/ienupar-tarator-juniperus-horizontalis.jpg',
    date: '2026-10-14',
    products: [6, 3, 4, 11, 24, 25, 31, 35, 36, 40],
    categories: ['perene', 'siblje'],
    meta: {
      ro: {
        title: 'Plante Rezistente la Secetă pentru Spații Verzi Publice | PlantDGD',
        description: 'Plante rezistente la secetă pentru primării, sensuri giratorii și spații publice: conifere, arbuști, ierburi ornamentale și perene cu întreținere redusă.',
        h1: 'Plante rezistente la secetă pentru spații verzi publice',
        excerpt: 'Conifere, ierburi ornamentale și perene care rezistă la secetă și căldură, pentru sensuri giratorii, scuaruri și spații publice cu întreținere redusă.',
        imageAlt: 'Ienupăr târâtor pentru acoperirea solului în spații verzi'
      },
      en: {
        title: 'Drought-Tolerant Plants for Public Green Spaces | PlantDGD',
        description: 'Drought-tolerant plants for municipalities, roundabouts and public spaces: conifers, shrubs, ornamental grasses and low-maintenance perennials.',
        h1: 'Drought-tolerant plants for public green spaces',
        excerpt: 'Conifers, ornamental grasses and perennials that withstand drought and heat, for roundabouts, squares and low-maintenance public spaces.',
        imageAlt: 'Creeping juniper as ground cover in a green space'
      },
      de: {
        title: 'Trockenheitsverträgliche Pflanzen für öffentliche Grünflächen | PlantDGD',
        description: 'Trockenheitsverträgliche Pflanzen für Gemeinden, Kreisverkehre und öffentliche Flächen: Koniferen, Sträucher, Ziergräser und pflegeleichte Stauden.',
        h1: 'Trockenheitsverträgliche Pflanzen für öffentliche Grünflächen',
        excerpt: 'Koniferen, Ziergräser und Stauden, die Trockenheit und Hitze vertragen – für Kreisverkehre, Plätze und pflegeleichte öffentliche Flächen.',
        imageAlt: 'Kriechwacholder als Bodendecker in einer Grünfläche'
      }
    }
  },
  {
    slug: 'arbori-pentru-aliniamente-stradale',
    image: '/images/catalpa-bignonioides.jpg',
    date: '2026-10-14',
    products: [7, 45, 3, 44, 47],
    categories: ['liscari'],
    meta: {
      ro: {
        title: 'Arbori pentru Aliniamente Stradale – Ghid pentru Primării | PlantDGD',
        description: 'Cum alegeți arborii pentru aliniamente stradale și parcuri: catalpa, cireș japonez, pin negru și alte specii, distanțe de plantare, dimensiuni și întreținere.',
        h1: 'Arbori pentru aliniamente stradale: ghid pentru primării și proiectanți',
        excerpt: 'Ce arbori se potrivesc pe străzi, bulevarde și în parcuri, la ce distanță se plantează și ce trebuie verificat înainte de comandă.',
        imageAlt: 'Catalpa, arbore de umbră pentru aliniamente stradale'
      },
      en: {
        title: 'Street Trees – A Guide for Municipalities and Designers | PlantDGD',
        description: 'How to choose trees for streets and parks: catalpa, Japanese cherry, black pine and other species, planting distances, sizes and maintenance.',
        h1: 'Street trees: a guide for municipalities and designers',
        excerpt: 'Which trees suit streets, boulevards and parks, how far apart to plant them and what to check before ordering.',
        imageAlt: 'Catalpa, a shade tree for street plantings'
      },
      de: {
        title: 'Straßenbäume – ein Ratgeber für Gemeinden und Planer | PlantDGD',
        description: 'Wie man Bäume für Straßen und Parks auswählt: Trompetenbaum, Japanische Blütenkirsche, Schwarzkiefer und weitere Arten, Pflanzabstände, Größen und Pflege.',
        h1: 'Straßenbäume: ein Ratgeber für Gemeinden und Planer',
        excerpt: 'Welche Bäume sich für Straßen, Boulevards und Parks eignen, in welchem Abstand man pflanzt und was vor der Bestellung zu prüfen ist.',
        imageAlt: 'Trompetenbaum, ein Schattenbaum für Straßenpflanzungen'
      }
    }
  },
  {
    slug: 'plante-pentru-acoperisuri-verzi',
    image: '/images/sedum-angelina.jpg',
    date: '2026-10-14',
    products: [31, 32, 33, 34, 24, 41],
    categories: ['perene'],
    meta: {
      ro: {
        title: 'Plante pentru Acoperișuri Verzi – Sedum și Alte Specii | PlantDGD',
        description: 'Ce plante se folosesc pe acoperișurile verzi extensive: sedum (iarbă grasă), Festuca glauca și alte perene rezistente la secetă. Densitate de plantare și întreținere.',
        h1: 'Plante pentru acoperișuri verzi: sedum și alte specii rezistente',
        excerpt: 'Speciile de sedum și perenele potrivite pentru acoperișuri verzi extensive, câte plante pe metru pătrat și cum se întrețin.',
        imageAlt: 'Sedum Angelina, plantă pentru acoperișuri verzi'
      },
      en: {
        title: 'Plants for Green Roofs – Sedum and Other Species | PlantDGD',
        description: 'Which plants are used on extensive green roofs: sedum, Festuca glauca and other drought-tolerant perennials. Planting density and maintenance.',
        h1: 'Plants for green roofs: sedum and other hardy species',
        excerpt: 'The sedum species and perennials suited to extensive green roofs, how many plants per square metre and how to maintain them.',
        imageAlt: 'Sedum Angelina, a plant for green roofs'
      },
      de: {
        title: 'Pflanzen für Dachbegrünung – Sedum und weitere Arten | PlantDGD',
        description: 'Welche Pflanzen für extensive Dachbegrünungen verwendet werden: Sedum, Festuca glauca und weitere trockenheitsverträgliche Stauden. Pflanzdichte und Pflege.',
        h1: 'Pflanzen für Dachbegrünung: Sedum und weitere robuste Arten',
        excerpt: 'Die Sedum-Arten und Stauden für extensive Dachbegrünungen, wie viele Pflanzen pro Quadratmeter und wie man sie pflegt.',
        imageAlt: 'Sedum Angelina, eine Pflanze für Dachbegrünungen'
      }
    }
  },
  {
    slug: 'laurocerasus-sau-tuia',
    image: '/images/laurocerasus-prunus-laurocerasus.jpg',
    date: '2026-10-14',
    products: [9, 1, 10],
    categories: ['ziva-ograda'],
    meta: {
      ro: {
        title: 'Laurocerasus sau Tuia pentru Gard Viu? Avantaje și Dezavantaje | PlantDGD',
        description: 'Laurocerasus sau tuia Smaragd pentru gard viu: comparație la creștere, umbră, spațiu ocupat, întreținere și aspect, plus când se potrivește fiecare.',
        h1: 'Laurocerasus sau tuia pentru gard viu?',
        excerpt: 'Două dintre cele mai cerute plante de gard viu, comparate: creștere, umbră, lățime, întreținere și situațiile în care alegeți una sau alta.',
        imageAlt: 'Gard viu din laurocerasus (Prunus laurocerasus)'
      },
      en: {
        title: 'Cherry Laurel or Thuja for a Hedge? Pros and Cons | PlantDGD',
        description: 'Cherry laurel or Thuja Smaragd for a hedge: compared on growth, shade, width, maintenance and appearance, and when each one fits best.',
        h1: 'Cherry laurel or thuja for a hedge?',
        excerpt: 'Two of the most requested hedge plants compared: growth, shade, width, maintenance and when to choose one or the other.',
        imageAlt: 'Cherry laurel (Prunus laurocerasus) hedge'
      },
      de: {
        title: 'Kirschlorbeer oder Thuja als Hecke? Vor- und Nachteile | PlantDGD',
        description: 'Kirschlorbeer oder Thuja Smaragd als Hecke: Vergleich von Wuchs, Schatten, Breite, Pflege und Optik – und wann welche Pflanze passt.',
        h1: 'Kirschlorbeer oder Thuja als Hecke?',
        excerpt: 'Zwei der gefragtesten Heckenpflanzen im Vergleich: Wuchs, Schatten, Breite, Pflege und wann man welche wählt.',
        imageAlt: 'Hecke aus Kirschlorbeer (Prunus laurocerasus)'
      }
    }
  }
];

export const getGuideBySlug = (slug) => guides.find(g => g.slug === slug);
export const guidePath = (slug) => `${GUIDES_PATH}/${slug}`;
export const guideMeta = (guide, lang) => ({ ...guide, ...pick(guide.meta, lang) });
export const guideLabelsFor = (lang) => pick(guideLabels, lang);
export const guidesIndexFor = (lang) => pick(guidesIndexByLang, lang);
export const guidesForProduct = (id) => guides.filter(g => g.products.includes(Number(id)));
export const guidesForCategory = (categoryId) => guides.filter(g => g.categories.includes(categoryId));

// Jednostavni linkovi u tekstu: "vezi [tuia Smaragd](/products/tuia-smaragd)" -> delovi teksta i linkova.
// Putanje su neutralne (bez jezika); komponenta/prerender dodaju /en ili /de.
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
  { id: 1, name: { ro: 'Tuia Smaragd', en: 'Thuja Smaragd', de: 'Thuja Smaragd' }, min: 2, max: 3 },
  { id: 4, name: { ro: 'Tuia orientală', en: 'Oriental thuja', de: 'Morgenländischer Lebensbaum' }, min: 2, max: 3 },
  { id: 9, name: { ro: 'Laurocerasus', en: 'Cherry laurel', de: 'Kirschlorbeer' }, min: 2, max: 3 },
  { id: 10, name: { ro: 'Photinia Red Robin', en: 'Photinia Red Robin', de: 'Photinia Red Robin' }, min: 2, max: 3 },
  { id: 39, name: { ro: 'Chiparos Leyland', en: 'Leyland cypress', de: 'Leylandzypresse' }, min: 1.5, max: 2 },
  { id: 2, name: { ro: 'Tisă (Taxus baccata)', en: 'Yew (Taxus baccata)', de: 'Eibe (Taxus baccata)' }, min: 3, max: 4 },
  { id: 15, name: { ro: 'Lonicera nitida', en: 'Lonicera nitida', de: 'Lonicera nitida' }, min: 3, max: 4 }
];
