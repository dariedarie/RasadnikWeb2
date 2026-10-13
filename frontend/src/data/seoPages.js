// Centralni SEO podaci - koriste ih React stranice I build skripta (scripts/prerender.mjs).
// Ovaj fajl NE SME imati import-e, jer ga prerender skripta ucitava direktno u Node-u.

export const SITE_URL = 'https://www.plantdgd.ro';
export const SUPPORTED_LANGS = ['ro', 'en', 'de'];
export const DEFAULT_LANG = 'ro';

// URL prefiks za dati jezik ('' za ro, '/en', '/de')
export const getLangPrefix = (lang) => (lang === DEFAULT_LANG ? '' : `/${lang}`);

// Gradi putanju za dati jezik od neutralne putanje (npr. '/products/5', 'en' -> '/en/products/5')
export const buildLocalizedPath = (neutralPath, lang) => {
  const prefix = getLangPrefix(lang);
  if (neutralPath === '/') return prefix || '/';
  return `${prefix}${neutralPath}`;
};

// SEO URL-ovi proizvoda: /products/tuia-smaragd (isti slug na svim jezicima: /en/products/tuia-smaragd)
// VAZNO: postojeci slug se ne menja (vec je indeksiran); stari /products/<id> se 301 preusmerava (vercel.json)
export const productSlugs = {
  1: 'tuia-smaragd',
  2: 'tisa-taxus-baccata',
  3: 'pin-negru-pinus-nigra',
  4: 'tuia-orientala-platycladus-orientalis',
  5: 'molid-albastru-picea-pungens-glauca',
  6: 'ienupar-tarator-juniperus-horizontalis',
  7: 'catalpa-bignonioides',
  8: 'magnolia-grandiflora',
  9: 'laurocerasus-prunus-laurocerasus',
  10: 'photinia-red-robin',
  11: 'pennisetum-alopecuroides',
  12: 'bambus',
  13: 'hortensie-hydrangea',
  14: 'iedera-hedera-helix',
  15: 'lonicera-nitida',
  16: 'heuchera',
  17: 'hibiscus-syriacus',
  18: 'spiree-spiraea',
  19: 'pin-mugo-pe-tulpina',
  20: 'bujor-paeonia',
  21: 'ajuga-reptans',
  22: 'astilbe',
  23: 'carex-morrowii-ice-dance',
  24: 'festuca-glauca',
  25: 'crin-de-zi-hemerocallis',
  26: 'hosta',
  27: 'stanjenel-iris-germanica',
  28: 'kniphofia-uvaria',
  29: 'ophiopogon-japonicus',
  30: 'physostegia-virginiana-alba',
  31: 'sedum-angelina',
  32: 'sedum-hybridum',
  33: 'sedum-rupestre-blue',
  34: 'sedum-watson',
  35: 'sedum-spectabile',
  36: 'stachys-byzantina',
  37: 'maslin-olea-europaea',
  38: 'bonsai',
  39: 'chiparos-leyland',
  40: 'gaura-lindheimeri',
  41: 'iberis-sempervirens',
  42: 'liliac-syringa-vulgaris',
  43: 'lagerstroemia-indica',
  44: 'chiparos-italian-cupressus-sempervirens',
  45: 'cires-japonez-prunus-serrulata',
  46: 'artar-japonez-acer-palmatum',
  47: 'palmier-trachycarpus-fortunei',
  48: 'cycas-revoluta'
};

// Neutralna putanja proizvoda (bez jezickog prefiksa): '/products/tuia-smaragd'
export const productPath = (id) => `/products/${productSlugs[id] || id}`;

// Iz URL parametra (slug ili stari numericki id) vraca id proizvoda
export const productIdFromParam = (param) => {
  const entry = Object.entries(productSlugs).find(([, slug]) => slug === param);
  if (entry) return Number(entry[0]);
  return /^\d+$/.test(param) ? Number(param) : undefined;
};

export const pickLang =(byLang, lang) => byLang[lang] || byLang[(lang || '').slice(0, 2)] || byLang[DEFAULT_LANG];

export const labels = {
  ro: { faqTitle: 'Întrebări frecvente', wholesalePlants: 'Plante en gros', related: 'Produse similare' },
  en: { faqTitle: 'Frequently asked questions', wholesalePlants: 'Wholesale plants', related: 'Similar products' },
  de: { faqTitle: 'Häufige Fragen', wholesalePlants: 'Pflanzen im Großhandel', related: 'Ähnliche Produkte' }
};

// Landing stranice po kategorijama - ciljaju glavne kljucne reci ("gard viu en gros" itd.)
// URL je isti slug na svim jezicima: /gard-viu-en-gros, /en/gard-viu-en-gros, /de/gard-viu-en-gros
export const categoryPages = [
  {
    slug: 'gard-viu-en-gros',
    categoryId: 'ziva-ograda',
    image: '/images/tujavelika.jpeg',
    content: {
      ro: {
        name: 'Gard viu en gros',
        h1: 'Plante pentru gard viu en gros',
        title: 'Gard Viu En Gros – Tuia, Laurocerasus, Photinia | PlantDGD',
        description: 'Plante pentru gard viu en gros: tuia Smaragd, laurocerasus, Photinia Red Robin, chiparos Leyland, tisă. Cantități mari pentru peisagiști și dezvoltatori. Livrare în toată România.',
        intro: [
          'PlantDGD furnizează plante pentru gard viu en gros pentru peisagiști, dezvoltatori imobiliari, centre de grădinărit și primării din toată România. Livrăm cantități mari, din loturi uniforme ca înălțime și densitate, astfel încât gardul viu să arate omogen încă de la plantare.',
          'Cele mai cerute specii pentru garduri vii sunt tuia Smaragd (Thuja occidentalis), cu formă columnară îngustă și culoare verde tot anul, laurocerasul (Prunus laurocerasus), cu frunze lucioase și creștere densă, Photinia Red Robin, apreciată pentru lăstarii roșii, chiparosul Leyland, ideal pentru paravânturi înalte, și tisa (Taxus baccata), potrivită pentru garduri vii tunse și zone umbrite.',
          'Pentru fiecare proiect vă recomandăm specia potrivită în funcție de expunere, sol și înălțimea dorită și vă trimitem o ofertă de preț pentru cantitatea exactă de care aveți nevoie.'
        ],
        faq: [
          { q: 'Câte plante de tuia sunt necesare pe metru liniar de gard viu?', a: 'Pentru tuia Smaragd se plantează de regulă 2–3 plante pe metru liniar, în funcție de înălțimea plantelor și de cât de repede doriți un gard viu compact.' },
          { q: 'Care este cea mai bună plantă pentru gard viu cu creștere rapidă?', a: 'Chiparosul Leyland are cea mai rapidă creștere, urmat de laurocerasus și Photinia Red Robin. Tuia Smaragd crește mai lent, dar necesită mai puține tunderi și își păstrează forma îngustă.' },
          { q: 'Când se plantează gardul viu?', a: 'Plantele în ghiveci (container) se pot planta aproape tot anul, cu excepția perioadelor de îngheț și a zilelor foarte călduroase. Primăvara și toamna sunt perioadele optime de plantare.' }
        ]
      },
      en: {
        name: 'Wholesale hedge plants',
        h1: 'Wholesale hedge plants',
        title: 'Wholesale Hedge Plants – Thuja, Cherry Laurel, Photinia | PlantDGD',
        description: 'Wholesale hedge plants: Thuja Smaragd, cherry laurel, Photinia Red Robin, Leyland cypress, yew. Large quantities for landscapers and developers. Delivery across Romania and Europe.',
        intro: [
          'PlantDGD supplies wholesale hedge plants to landscapers, property developers, garden centres and municipalities across Romania and Europe. We deliver large quantities from batches that are uniform in height and density, so the hedge looks even from the day it is planted.',
          'The most requested hedge species are Thuja Smaragd, with a narrow columnar shape and green colour all year round, cherry laurel (Prunus laurocerasus) with glossy leaves and dense growth, Photinia Red Robin with its red young shoots, Leyland cypress for tall windbreaks, and yew (Taxus baccata) for clipped hedges and shaded areas.',
          'We recommend the right species for each project based on exposure, soil and desired height, and send you a quote for the exact quantity you need.'
        ],
        faq: [
          { q: 'How many thuja plants are needed per metre of hedge?', a: 'For Thuja Smaragd, 2–3 plants per linear metre are usually planted, depending on plant height and how quickly you want a dense hedge.' },
          { q: 'Which hedge plant grows fastest?', a: 'Leyland cypress grows fastest, followed by cherry laurel and Photinia Red Robin. Thuja Smaragd grows more slowly but needs less trimming and keeps its narrow shape.' },
          { q: 'When should a hedge be planted?', a: 'Container plants can be planted almost all year round, except during frost and very hot days. Spring and autumn are the best planting seasons.' }
        ]
      },
      de: {
        name: 'Heckenpflanzen im Großhandel',
        h1: 'Heckenpflanzen im Großhandel',
        title: 'Heckenpflanzen Großhandel – Thuja, Kirschlorbeer, Photinia | PlantDGD',
        description: 'Heckenpflanzen im Großhandel: Thuja Smaragd, Kirschlorbeer, Photinia Red Robin, Leylandzypresse, Eibe. Große Mengen für Landschaftsgärtner. Lieferung in Rumänien und Europa.',
        intro: [
          'PlantDGD liefert Heckenpflanzen im Großhandel an Landschaftsgärtner, Bauträger, Gartencenter und Gemeinden in Rumänien und Europa. Wir liefern große Mengen aus Partien mit einheitlicher Höhe und Dichte, damit die Hecke vom ersten Tag an gleichmäßig wirkt.',
          'Die gefragtesten Heckenpflanzen sind Thuja Smaragd mit schmaler Säulenform und ganzjährig grüner Farbe, Kirschlorbeer (Prunus laurocerasus) mit glänzendem Laub und dichtem Wuchs, Photinia Red Robin mit roten Austrieben, Leylandzypresse für hohe Windschutzhecken sowie Eibe (Taxus baccata) für Formhecken und schattige Lagen.',
          'Wir empfehlen für jedes Projekt die passende Art je nach Lage, Boden und gewünschter Höhe und senden Ihnen ein Angebot für genau die benötigte Menge.'
        ],
        faq: [
          { q: 'Wie viele Thujen braucht man pro Meter Hecke?', a: 'Bei Thuja Smaragd pflanzt man in der Regel 2–3 Pflanzen pro laufendem Meter, abhängig von der Pflanzenhöhe und wie schnell die Hecke dicht werden soll.' },
          { q: 'Welche Heckenpflanze wächst am schnellsten?', a: 'Die Leylandzypresse wächst am schnellsten, gefolgt von Kirschlorbeer und Photinia Red Robin. Thuja Smaragd wächst langsamer, braucht aber weniger Schnitt.' },
          { q: 'Wann pflanzt man eine Hecke?', a: 'Containerpflanzen können fast das ganze Jahr gepflanzt werden, außer bei Frost und großer Hitze. Frühling und Herbst sind ideal.' }
        ]
      }
    }
  },
  {
    slug: 'conifere-en-gros',
    categoryId: 'cetinari',
    image: '/images/leylandii.jpeg',
    content: {
      ro: {
        name: 'Conifere en gros',
        h1: 'Conifere en gros',
        title: 'Conifere En Gros – Tuia, Pin, Molid, Tisă | PlantDGD',
        description: 'Conifere en gros pentru peisagistică: tuia Smaragd, tuia orientală, pin negru, molid albastru, tisă, ienupăr, chiparos Leyland și italian. Prețuri angro și livrare în toată România.',
        intro: [
          'Coniferele sunt baza oricărui proiect peisagistic: rămân verzi tot anul, sunt rezistente și necesită puțină întreținere. PlantDGD livrează conifere en gros pentru amenajarea parcurilor, ansamblurilor rezidențiale, spațiilor comerciale și grădinilor private.',
          'În oferta noastră găsiți tuia Smaragd și tuia orientală pentru garduri vii, pin negru (Pinus nigra) și molid albastru (Picea pungens \'Glauca\') ca arbori solitari, chiparos italian (Cupressus sempervirens) pentru aliniamente în stil mediteranean, pin mugo pe tulpină pentru accente decorative, tisă (Taxus baccata) pentru forme tunse și ienupăr târâtor (Juniperus horizontalis) pentru acoperirea solului, a taluzurilor și a grădinilor cu pietre.',
          'Plantele sunt selecționate pe loturi, cu înălțimi uniforme, și sunt pregătite pentru transport astfel încât să ajungă în stare perfectă la destinație.'
        ],
        faq: [
          { q: 'Ce conifere sunt potrivite pentru garduri vii?', a: 'Tuia Smaragd, tuia orientală, chiparosul Leyland și tisa sunt cele mai folosite conifere pentru garduri vii. Alegerea depinde de înălțimea dorită, de expunere și de bugetul proiectului.' },
          { q: 'Ce conifere rezistă la secetă?', a: 'Pinul negru și ienupărul târâtor tolerează bine seceta și solurile sărace, de aceea sunt potrivite pentru spații publice și taluzuri cu întreținere redusă.' },
          { q: 'Livrați conifere în cantități mari?', a: 'Da. Livrăm conifere en gros în toată România, cu transport adaptat plantelor vii. Cantitatea minimă diferă în funcție de specie și dimensiune – cereți o ofertă.' }
        ]
      },
      en: {
        name: 'Wholesale conifers',
        h1: 'Wholesale conifers',
        title: 'Wholesale Conifers – Thuja, Pine, Spruce, Yew | PlantDGD',
        description: 'Wholesale conifers for landscaping: Thuja Smaragd, oriental thuja, black pine, blue spruce, yew, juniper, Leyland and Italian cypress. Wholesale prices, delivery across Romania.',
        intro: [
          'Conifers are the backbone of every landscaping project: they stay green all year, are hardy and need little maintenance. PlantDGD supplies wholesale conifers for parks, residential developments, commercial areas and private gardens.',
          'Our range includes Thuja Smaragd and oriental thuja for hedges, black pine (Pinus nigra) and blue spruce (Picea pungens \'Glauca\') as solitary trees, Italian cypress (Cupressus sempervirens) for Mediterranean-style rows, mugo pine on stem for decorative accents, yew (Taxus baccata) for topiary and creeping juniper (Juniperus horizontalis) as ground cover for slopes and rock gardens.',
          'Plants are selected in batches of uniform height and prepared for transport so they arrive in perfect condition.'
        ],
        faq: [
          { q: 'Which conifers are suitable for hedges?', a: 'Thuja Smaragd, oriental thuja, Leyland cypress and yew are the most used conifers for hedges. The choice depends on desired height, exposure and budget.' },
          { q: 'Which conifers tolerate drought?', a: 'Black pine and creeping juniper tolerate drought and poor soils well, which makes them ideal for low-maintenance public areas and slopes.' },
          { q: 'Do you deliver conifers in large quantities?', a: 'Yes. We deliver wholesale conifers throughout Romania and Europe with transport suited to live plants. Minimum quantities depend on species and size – ask for a quote.' }
        ]
      },
      de: {
        name: 'Koniferen im Großhandel',
        h1: 'Koniferen im Großhandel',
        title: 'Koniferen Großhandel – Thuja, Kiefer, Fichte, Eibe | PlantDGD',
        description: 'Koniferen im Großhandel: Thuja Smaragd, Schwarzkiefer, Blaufichte, Eibe, Wacholder, Leyland- und Säulenzypresse. Großhandelspreise, Lieferung in Rumänien und Europa.',
        intro: [
          'Koniferen sind das Grundgerüst jedes Landschaftsprojekts: ganzjährig grün, robust und pflegeleicht. PlantDGD liefert Koniferen im Großhandel für Parks, Wohnanlagen, Gewerbeflächen und Privatgärten.',
          'Unser Sortiment umfasst Thuja Smaragd und Morgenländischen Lebensbaum für Hecken, Schwarzkiefer (Pinus nigra) und Blaufichte (Picea pungens \'Glauca\') als Solitärbäume, Säulenzypresse (Cupressus sempervirens) für mediterrane Reihen, Bergkiefer auf Stamm als Blickfang, Eibe (Taxus baccata) für Formschnitt und Kriechwacholder (Juniperus horizontalis) als Bodendecker für Böschungen und Steingärten.',
          'Die Pflanzen werden in Partien mit einheitlicher Höhe ausgewählt und transportgerecht vorbereitet.'
        ],
        faq: [
          { q: 'Welche Koniferen eignen sich für Hecken?', a: 'Thuja Smaragd, Morgenländischer Lebensbaum, Leylandzypresse und Eibe sind die gängigsten Heckenkoniferen.' },
          { q: 'Welche Koniferen vertragen Trockenheit?', a: 'Schwarzkiefer und Kriechwacholder vertragen Trockenheit und magere Böden gut.' },
          { q: 'Liefern Sie Koniferen in großen Mengen?', a: 'Ja, wir liefern Koniferen im Großhandel in ganz Rumänien und Europa. Mindestmengen hängen von Art und Größe ab – fragen Sie ein Angebot an.' }
        ]
      }
    }
  },
  {
    slug: 'arbori-ornamentali-en-gros',
    categoryId: 'liscari',
    image: '/images/katalpa.jpg',
    content: {
      ro: {
        name: 'Arbori ornamentali en gros',
        h1: 'Arbori ornamentali en gros',
        title: 'Arbori Ornamentali En Gros – Catalpa, Arțar Japonez, Magnolia | PlantDGD',
        description: 'Arbori ornamentali en gros: catalpa, magnolia grandiflora, arțar japonez, cireș japonez, măslin, palmier, laurocerasus, Photinia Red Robin. Pentru parcuri, aliniamente și proiecte peisagistice.',
        intro: [
          'Arborii ornamentali dau structură și umbră oricărui spațiu verde. PlantDGD furnizează arbori ornamentali en gros pentru parcuri, aliniamente stradale, curți de școli, ansambluri rezidențiale și grădini private.',
          'Catalpa (Catalpa bignonioides) este un arbore de umbră cu frunze mari și flori albe vara, potrivit pentru bulevarde și spații publice. Magnolia grandiflora rămâne verde și iarna și are flori mari, parfumate. Arțarul japonez (Acer palmatum) și cireșul japonez (Prunus serrulata) sunt accente decorative spectaculoase, iar măslinul și palmierul aduc un aer mediteranean teraselor și curților interioare. Laurocerasul și Photinia Red Robin creează rapid perdele verzi dense.',
          'Vă ajutăm să alegeți speciile potrivite pentru clima și solul din zona proiectului și organizăm transportul plantelor până la locația dvs.'
        ],
        faq: [
          { q: 'Ce arbori ornamentali sunt potriviți pentru aliniamente stradale?', a: 'Catalpa este des folosită pentru bulevarde și parcuri datorită coroanei largi și a toleranței la condițiile urbane. Pentru alte specii, cereți-ne o recomandare pentru proiectul dvs.' },
          { q: 'Măslinul rezistă iarna în România?', a: 'Măslinul rezistă la temperaturi de până la aproximativ -10°C. În zonele cu ierni aspre se recomandă cultivarea în ghiveci mare și protecția pe timpul iernii.' },
          { q: 'Livrați arbori până la locația proiectului?', a: 'Da, organizăm transportul plantelor până la locația proiectului, oriunde în România.' }
        ]
      },
      en: {
        name: 'Wholesale ornamental trees',
        h1: 'Wholesale ornamental trees',
        title: 'Wholesale Ornamental Trees – Catalpa, Japanese Maple, Magnolia | PlantDGD',
        description: 'Wholesale ornamental trees: catalpa, Magnolia grandiflora, Japanese maple, Japanese cherry, olive, palm, cherry laurel, Photinia. For parks, avenues and landscaping projects.',
        intro: [
          'Ornamental trees give structure and shade to every green space. PlantDGD supplies wholesale ornamental trees for parks, avenues, school yards, residential developments and private gardens.',
          'Catalpa (Catalpa bignonioides) is a shade tree with large leaves and white summer flowers, ideal for boulevards and public spaces. Magnolia grandiflora stays green in winter and has large fragrant flowers. Japanese maple (Acer palmatum) and Japanese cherry (Prunus serrulata) are striking focal points, while olive trees and palms bring a Mediterranean feel to terraces and courtyards. Cherry laurel and Photinia Red Robin quickly create dense green screens.',
          'We help you choose species suited to the climate and soil of your project and arrange transport to your site.'
        ],
        faq: [
          { q: 'Which ornamental trees suit street plantings?', a: 'Catalpa is widely used for boulevards and parks thanks to its broad crown and tolerance of urban conditions.' },
          { q: 'Can olive trees survive Romanian winters?', a: 'Olive trees tolerate temperatures down to about -10°C. In regions with harsh winters, large containers and winter protection are recommended.' },
          { q: 'Do you deliver trees to the project site?', a: 'Yes, we arrange transport of plants to your project site anywhere in Romania.' }
        ]
      },
      de: {
        name: 'Zierbäume im Großhandel',
        h1: 'Zierbäume im Großhandel',
        title: 'Zierbäume Großhandel – Trompetenbaum, Fächerahorn, Magnolie | PlantDGD',
        description: 'Zierbäume im Großhandel: Trompetenbaum, Magnolia grandiflora, Fächerahorn, Japanische Kirsche, Olivenbaum, Palme, Kirschlorbeer. Für Parks, Alleen und Landschaftsprojekte.',
        intro: [
          'Zierbäume geben jeder Grünfläche Struktur und Schatten. PlantDGD liefert Zierbäume im Großhandel für Parks, Alleen, Schulhöfe, Wohnanlagen und Privatgärten.',
          'Der Trompetenbaum (Catalpa bignonioides) ist ein Schattenbaum mit großen Blättern und weißen Sommerblüten. Magnolia grandiflora bleibt im Winter grün und hat große, duftende Blüten. Fächerahorn (Acer palmatum) und Japanische Kirsche (Prunus serrulata) sind attraktive Blickfänge, Olivenbaum und Palme bringen mediterranes Flair auf Terrassen. Kirschlorbeer und Photinia Red Robin bilden schnell dichten Sichtschutz.',
          'Wir helfen Ihnen bei der Auswahl passender Arten und organisieren den Transport bis zu Ihrem Projektstandort.'
        ],
        faq: [
          { q: 'Welche Zierbäume eignen sich für Straßenpflanzungen?', a: 'Der Trompetenbaum wird dank seiner breiten Krone und Stadtklimatoleranz häufig für Alleen und Parks verwendet.' },
          { q: 'Übersteht der Olivenbaum rumänische Winter?', a: 'Olivenbäume vertragen Temperaturen bis etwa -10°C. In Regionen mit strengen Wintern empfehlen sich große Kübel und Winterschutz.' },
          { q: 'Liefern Sie bis zur Baustelle?', a: 'Ja, wir organisieren den Transport bis zu Ihrem Projektstandort in ganz Rumänien.' }
        ]
      }
    }
  },
  {
    slug: 'arbusti-ornamentali-en-gros',
    categoryId: 'siblje',
    image: '/images/hortenzija.jpeg',
    content: {
      ro: {
        name: 'Arbuști ornamentali en gros',
        h1: 'Arbuști ornamentali en gros',
        title: 'Arbuști Ornamentali En Gros – Hortensie, Liliac, Spiree | PlantDGD',
        description: 'Arbuști ornamentali en gros: hortensie, liliac, lagerstroemia, hibiscus de grădină, spiree, Lonicera nitida, bujor, heuchera, iederă. Prețuri angro pentru peisagiști și centre de grădinărit.',
        intro: [
          'Arbuștii ornamentali completează amenajările peisagistice cu flori, culoare și textură. PlantDGD livrează arbuști ornamentali en gros pentru peisagiști, centre de grădinărit și proiecte rezidențiale sau publice.',
          'Hortensia, liliacul (Syringa vulgaris), lagerstroemia și hibiscusul de grădină (Hibiscus syriacus) înfloresc abundent, spireea este rezistentă și ușor de întreținut, Lonicera nitida formează borduri și garduri vii joase, iar bujorul este una dintre cele mai apreciate flori de grădină. Heuchera și iedera (Hedera helix) sunt soluții excelente pentru zonele umbrite, iar iarba-vulpii (Pennisetum alopecuroides) aduce mișcare și textură în grădinile moderne.',
          'Combinați arbuștii cu conifere și plante perene pentru amenajări decorative tot anul – vă ajutăm cu recomandări pentru fiecare proiect.'
        ],
        faq: [
          { q: 'Ce arbuști ornamentali sunt potriviți pentru zone umbrite?', a: 'Heuchera, iedera (Hedera helix) și hortensia se dezvoltă bine la semiumbră. Pentru umbră deasă recomandăm iedera și plante perene precum hosta.' },
          { q: 'Ce arbuști pot folosi pentru borduri joase?', a: 'Lonicera nitida și spireea sunt ideale pentru borduri și garduri vii joase, deoarece suportă bine tunderea și au creștere compactă.' },
          { q: 'Vindeți arbuști și către centre de grădinărit?', a: 'Da, colaborăm cu centre de grădinărit și magazine de profil din România, cu prețuri angro pentru comenzi recurente.' }
        ]
      },
      en: {
        name: 'Wholesale ornamental shrubs',
        h1: 'Wholesale ornamental shrubs',
        title: 'Wholesale Ornamental Shrubs – Hydrangea, Lilac, Spiraea | PlantDGD',
        description: 'Wholesale ornamental shrubs: hydrangea, lilac, crape myrtle, rose of Sharon, spiraea, Lonicera nitida, peony, heuchera, ivy. Wholesale prices for landscapers and garden centres.',
        intro: [
          'Ornamental shrubs add flowers, colour and texture to landscaping projects. PlantDGD supplies wholesale ornamental shrubs to landscapers, garden centres and residential or public projects.',
          'Hydrangea, lilac (Syringa vulgaris), crape myrtle (Lagerstroemia) and rose of Sharon (Hibiscus syriacus) flower abundantly, spiraea is hardy and easy to maintain, Lonicera nitida forms low borders and hedges, and peony is one of the most loved garden flowers. Heuchera and ivy (Hedera helix) are excellent for shaded areas, while fountain grass (Pennisetum alopecuroides) adds movement to modern gardens.',
          'Combine shrubs with conifers and perennials for year-round interest – we are happy to advise on every project.'
        ],
        faq: [
          { q: 'Which shrubs suit shaded areas?', a: 'Heuchera, ivy and hydrangea do well in partial shade. For deep shade we recommend ivy and perennials such as hosta.' },
          { q: 'Which shrubs work for low borders?', a: 'Lonicera nitida and spiraea are ideal for low borders and hedges as they tolerate trimming and grow compactly.' },
          { q: 'Do you supply garden centres?', a: 'Yes, we work with garden centres and specialist shops, with wholesale prices for recurring orders.' }
        ]
      },
      de: {
        name: 'Ziersträucher im Großhandel',
        h1: 'Ziersträucher im Großhandel',
        title: 'Ziersträucher Großhandel – Hortensie, Flieder, Spiraea | PlantDGD',
        description: 'Ziersträucher im Großhandel: Hortensie, Flieder, Kreppmyrte, Garteneibisch, Spiraea, Lonicera nitida, Pfingstrose, Heuchera, Efeu. Großhandelspreise für Landschaftsgärtner.',
        intro: [
          'Ziersträucher bringen Blüten, Farbe und Struktur in jede Grünanlage. PlantDGD liefert Ziersträucher im Großhandel an Landschaftsgärtner, Gartencenter sowie Wohn- und öffentliche Projekte.',
          'Hortensie, Flieder (Syringa vulgaris), Kreppmyrte (Lagerstroemia) und Garteneibisch (Hibiscus syriacus) blühen üppig, Spiraea ist robust und pflegeleicht, Lonicera nitida eignet sich für niedrige Einfassungen und die Pfingstrose gehört zu den beliebtesten Gartenblumen. Heuchera und Efeu (Hedera helix) sind ideal für schattige Bereiche, Lampenputzergras (Pennisetum alopecuroides) bringt Bewegung in moderne Gärten.',
          'Kombinieren Sie Sträucher mit Koniferen und Stauden – wir beraten Sie gerne.'
        ],
        faq: [
          { q: 'Welche Sträucher eignen sich für Schatten?', a: 'Heuchera, Efeu und Hortensie gedeihen im Halbschatten. Für tiefen Schatten empfehlen wir Efeu und Stauden wie Hosta.' },
          { q: 'Welche Sträucher eignen sich für niedrige Einfassungen?', a: 'Lonicera nitida und Spiraea sind schnittverträglich und wachsen kompakt.' },
          { q: 'Beliefern Sie Gartencenter?', a: 'Ja, wir arbeiten mit Gartencentern zusammen – mit Großhandelspreisen für wiederkehrende Bestellungen.' }
        ]
      }
    }
  },
  {
    slug: 'plante-perene-en-gros',
    categoryId: 'perene',
    image: '/images/Hosta mix. perena za senku.jpg',
    content: {
      ro: {
        name: 'Plante perene en gros',
        h1: 'Plante perene en gros',
        title: 'Plante Perene En Gros – Sedum, Hosta, Astilbe | PlantDGD',
        description: 'Plante perene en gros: sedum, hosta, astilbe, crin de zi, iris, gaura, iberis, Festuca glauca, Carex, ajuga. Pentru peisagiști și centre de grădinărit din România.',
        intro: [
          'Plantele perene revin în fiecare an și reduc costurile de întreținere ale unei amenajări. PlantDGD oferă plante perene en gros pentru rabate, grădini cu pietre, acoperiri verzi, spații publice și grădini private.',
          'Pentru zone însorite și uscate recomandăm speciile de sedum (iarbă grasă), păiușul albastru (Festuca glauca), urechea mielului (Stachys byzantina), torța de foc (Kniphofia uvaria) și gaura. Pentru semiumbră și umbră sunt potrivite hosta, astilbe, ajuga și Ophiopogon japonicus. Crinul de zi (Hemerocallis), stânjenelul (Iris germanica) și iberisul sunt specii robuste, cu înflorire bogată.',
          'Livrăm perenele în cantități mari, pregătite pentru plantare, cu transport în toată România.'
        ],
        faq: [
          { q: 'Ce plante perene sunt potrivite pentru acoperirea solului?', a: 'Sedum, ajuga (Ajuga reptans), iberis și Ophiopogon japonicus acoperă rapid solul și reduc apariția buruienilor.' },
          { q: 'Ce plante perene rezistă la secetă?', a: 'Speciile de sedum, Festuca glauca, Stachys byzantina și Kniphofia uvaria tolerează bine seceta și sunt potrivite pentru amenajări cu întreținere redusă.' },
          { q: 'Care este cantitatea minimă de comandă pentru plante perene?', a: 'Cantitatea minimă diferă în funcție de specie. Trimiteți-ne lista de plante și cantitățile dorite, iar noi vă răspundem cu o ofertă personalizată.' }
        ]
      },
      en: {
        name: 'Wholesale perennials',
        h1: 'Wholesale perennial plants',
        title: 'Wholesale Perennials – Sedum, Hosta, Astilbe | PlantDGD',
        description: 'Wholesale perennial plants: sedum, hosta, astilbe, daylily, iris, gaura, iberis, Festuca glauca, Carex, ajuga. For landscapers and garden centres.',
        intro: [
          'Perennials come back every year and reduce maintenance costs. PlantDGD offers wholesale perennials for borders, rock gardens, green roofs, public spaces and private gardens.',
          'For sunny, dry areas we recommend sedum, blue fescue (Festuca glauca), lamb\'s ear (Stachys byzantina), red hot poker (Kniphofia uvaria) and gaura. For partial and full shade, hosta, astilbe, ajuga and Ophiopogon japonicus are ideal. Daylily (Hemerocallis), bearded iris (Iris germanica) and iberis are robust, free-flowering species.',
          'We deliver perennials in large quantities, ready for planting, throughout Romania.'
        ],
        faq: [
          { q: 'Which perennials work as ground cover?', a: 'Sedum, ajuga, iberis and Ophiopogon japonicus cover the ground quickly and suppress weeds.' },
          { q: 'Which perennials are drought tolerant?', a: 'Sedum, Festuca glauca, Stachys byzantina and Kniphofia uvaria tolerate drought well.' },
          { q: 'What is the minimum order for perennials?', a: 'It depends on the species. Send us your plant list and quantities and we will reply with a tailored quote.' }
        ]
      },
      de: {
        name: 'Stauden im Großhandel',
        h1: 'Stauden im Großhandel',
        title: 'Stauden Großhandel – Sedum, Hosta, Astilbe | PlantDGD',
        description: 'Stauden im Großhandel: Sedum, Hosta, Astilbe, Taglilie, Iris, Gaura, Schleifenblume, Blauschwingel, Segge, Günsel. Für Landschaftsgärtner und Gartencenter.',
        intro: [
          'Stauden kommen jedes Jahr wieder und senken die Pflegekosten. PlantDGD bietet Stauden im Großhandel für Beete, Steingärten, Dachbegrünungen, öffentliche Flächen und Privatgärten.',
          'Für sonnige, trockene Lagen empfehlen wir Sedum, Blauschwingel (Festuca glauca), Woll-Ziest (Stachys byzantina), Fackellilie (Kniphofia uvaria) und Gaura. Für Halbschatten und Schatten eignen sich Hosta, Astilbe, Günsel und Ophiopogon japonicus. Taglilie (Hemerocallis), Bart-Iris (Iris germanica) und Schleifenblume (Iberis) sind robust und blühfreudig.',
          'Wir liefern Stauden in großen Mengen, pflanzfertig, in ganz Rumänien.'
        ],
        faq: [
          { q: 'Welche Stauden eignen sich als Bodendecker?', a: 'Sedum, Günsel (Ajuga reptans), Schleifenblume und Ophiopogon japonicus decken den Boden schnell ab.' },
          { q: 'Welche Stauden sind trockenheitsverträglich?', a: 'Sedum, Festuca glauca, Stachys byzantina und Kniphofia uvaria vertragen Trockenheit gut.' },
          { q: 'Gibt es eine Mindestbestellmenge?', a: 'Das hängt von der Art ab. Senden Sie uns Ihre Pflanzenliste und wir erstellen ein individuelles Angebot.' }
        ]
      }
    }
  }
];

export const getCategoryPageByCategoryId = (categoryId) => categoryPages.find(c => c.categoryId === categoryId);
export const productInCategory = (product, categoryId) => (product.categories || [product.category]).includes(categoryId);

// Tekstualni SEO sadrzaj i FAQ za pocetnu stranu (vidljiv na stranici + FAQPage schema)
export const homeContent = {
  ro: {
    introTitle: 'Pepinieră angro pentru plante ornamentale',
    intro: [
      'PlantDGD este furnizor de plante ornamentale en gros în România, cu sediul în Timișoara. Lucrăm cu clienți business: firme de peisagistică, centre de grădinărit, primării, dezvoltatori imobiliari și antreprenori de spații verzi.',
      'În catalogul nostru găsiți conifere, plante pentru gard viu, arbori și arbuști ornamentali și plante perene, disponibile în cantități mari și la prețuri angro. Livrăm în toată România și în Europa, cu transport adaptat plantelor vii.'
    ],
    categoriesTitle: 'Categorii de plante en gros',
    faq: [
      { q: 'Ce cantitate minimă pot comanda?', a: 'PlantDGD vinde en gros, iar cantitățile minime variază în funcție de specie și dimensiune. Contactați-ne cu lista de plante dorită pentru o ofertă exactă.' },
      { q: 'Livrați în toată România?', a: 'Da, livrăm plante ornamentale en gros în toată România, precum și în Europa, cu vehicule adaptate care asigură transportul plantelor în condiții optime.' },
      { q: 'Ce tipuri de plante oferiți en gros?', a: 'Oferim conifere (tuia, pin, molid, tisă, ienupăr), plante pentru gard viu (tuia Smaragd, laurocerasus, Photinia, chiparos Leyland), arbori și arbuști ornamentali și plante perene.' },
      { q: 'Cum pot solicita o ofertă de preț?', a: 'Trimiteți-ne lista de plante, cantitățile și locația de livrare prin formularul de contact, telefonic la +40 729 048 545 sau pe WhatsApp, iar noi vă răspundem cu o ofertă personalizată.' }
    ]
  },
  en: {
    introTitle: 'Wholesale nursery for ornamental plants',
    intro: [
      'PlantDGD is a wholesale supplier of ornamental plants in Romania, based in Timișoara. We work with business customers: landscaping companies, garden centres, municipalities, property developers and green-space contractors.',
      'Our catalogue includes conifers, hedge plants, ornamental trees and shrubs and perennials, available in large quantities at wholesale prices. We deliver throughout Romania and Europe with transport suited to live plants.'
    ],
    categoriesTitle: 'Wholesale plant categories',
    faq: [
      { q: 'What is the minimum order quantity?', a: 'PlantDGD sells wholesale and minimum quantities depend on species and size. Send us your plant list for an exact quote.' },
      { q: 'Do you deliver throughout Romania?', a: 'Yes, we deliver wholesale ornamental plants throughout Romania and Europe with vehicles suited to live plants.' },
      { q: 'Which plants do you offer wholesale?', a: 'Conifers (thuja, pine, spruce, yew, juniper), hedge plants (Thuja Smaragd, cherry laurel, Photinia, Leyland cypress), ornamental trees and shrubs, and perennials.' },
      { q: 'How can I request a quote?', a: 'Send us your plant list, quantities and delivery location via the contact form, by phone at +40 729 048 545 or on WhatsApp, and we will reply with a tailored quote.' }
    ]
  },
  de: {
    introTitle: 'Großhandelsbaumschule für Zierpflanzen',
    intro: [
      'PlantDGD ist ein Großhändler für Zierpflanzen in Rumänien mit Sitz in Timișoara. Wir arbeiten mit Geschäftskunden: Landschaftsgärtnern, Gartencentern, Gemeinden, Bauträgern und Grünflächenunternehmen.',
      'Unser Katalog umfasst Koniferen, Heckenpflanzen, Zierbäume und -sträucher sowie Stauden in großen Mengen zu Großhandelspreisen. Wir liefern in ganz Rumänien und Europa.'
    ],
    categoriesTitle: 'Pflanzenkategorien im Großhandel',
    faq: [
      { q: 'Gibt es eine Mindestbestellmenge?', a: 'PlantDGD verkauft im Großhandel; Mindestmengen hängen von Art und Größe ab. Senden Sie uns Ihre Pflanzenliste für ein genaues Angebot.' },
      { q: 'Liefern Sie in ganz Rumänien?', a: 'Ja, wir liefern Zierpflanzen im Großhandel in ganz Rumänien und Europa mit pflanzengerechten Fahrzeugen.' },
      { q: 'Welche Pflanzen bieten Sie an?', a: 'Koniferen (Thuja, Kiefer, Fichte, Eibe, Wacholder), Heckenpflanzen (Thuja Smaragd, Kirschlorbeer, Photinia, Leylandzypresse), Zierbäume, Ziersträucher und Stauden.' },
      { q: 'Wie fordere ich ein Angebot an?', a: 'Senden Sie uns Pflanzenliste, Mengen und Lieferort über das Kontaktformular, telefonisch unter +40 729 048 545 oder per WhatsApp.' }
    ]
  }
};

// Meta podaci za stranicu proizvoda (isti u React-u i u prerender skripti)
const productSuffix = {
  ro: { title: 'En Gros', desc: 'Vânzare en gros, livrare în toată România.' },
  en: { title: 'Wholesale', desc: 'Wholesale supply, delivery across Romania and Europe.' },
  de: { title: 'Großhandel', desc: 'Großhandel, Lieferung in ganz Rumänien und Europa.' }
};

export const productMeta = (name, description, lang) => {
  const s = pickLang(productSuffix, lang);
  const desc = `${description.replace(/­/g, '')} ${s.desc}`;
  return {
    title: `${name} ${s.title} | PlantDGD`,
    description: desc.length > 160 ? desc.slice(0, 157).replace(/\s+\S*$/, '') + '…' : desc
  };
};

// JSON-LD helperi; putanje su vec lokalizovane (npr. '/en/products/5')
export const breadcrumbJsonLd = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: SITE_URL + item.path
  }))
});

export const faqJsonLd = (faq) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a }
  }))
});

export const itemListJsonLd = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    url: SITE_URL + item.path
  }))
});
