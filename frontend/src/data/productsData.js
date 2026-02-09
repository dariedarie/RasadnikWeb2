// Centralizovani podaci o proizvodima - koriste se na Products i ProductDetails stranicama

export const products = [
  // ==================== ČETINARI (ID: 1-6) ====================
  {
    id: 1,
    name: 'Tuja Smaragd',
    category: 'cetinari',
    categories: ['cetinari', 'ziva-ograda'],
    price: 800,
    image: '/images/tujavelika.jpeg',
    images: [
      '/images/tujavelika.jpeg',
      '/images/tujasmaragd.jpg'
    ],
    description: 'Tuja Smaragd je zimzeleni četinar, savršen za žive ograde i dekoraciju dvorišta. Otporna, laka za održavanje i brzo raste.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 2,
    name: 'Tisa',
    category: 'cetinari',
    categories: ['cetinari', 'ziva-ograda'],
    price: 2000,
    image: '/images/tisa.jpeg',
    description: 'Tisa (Taxus) je dugovečan četinar, odličan za formiranje oblika i žive ograde. Sporo raste, ali je izuzetno dekorativna.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Senka do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 3,
    name: 'Crni bor',
    category: 'cetinari',
    categories: ['cetinari'],
    price: 1500,
    image: '/images/WhatsApp Image 2025-12-30 at 20.53.06.jpeg',
    description: 'Crni bor je lepo zimzeleno drvo sa karakterističnim tamno zelenim iglicama. Otporan i lepo se uklapa u različite pejzaže.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Peskovita do glinena',
      hardiness: 'Veoma otporan na mraz'
    }
  },
  {
    id: 4,
    name: 'Thuja Orientalis',
    category: 'cetinari',
    categories: ['cetinari', 'ziva-ograda'],
    price: 900,
    image: '/images/WhatsApp Image 2026-01-03 at 19.53.27.jpeg',
    description: 'Thuja Orientalis je zimzeleni četinar, idealan za žive ograde i ukrašavanje dvorišta. Kompaktan i otporan.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 5,
    name: 'Plava smrča',
    category: 'cetinari',
    categories: ['cetinari'],
    price: 1800,
    image: '/images/WhatsApp Image 2026-01-04 at 19.50.56.jpeg',
    description: 'Plava smrča je prelepo zimzeleno drvo sa karakterističnim plavo-sivim iglicama. Odlična za dekorativne svrhe.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Blago kisela zemlja',
      hardiness: 'Veoma otporna na mraz'
    }
  },
  {
    id: 6,
    name: 'Juniperus Horizontalis',
    category: 'cetinari',
    categories: ['cetinari'],
    price: 1200,
    image: '/images/juniperushorizontalis.jpeg',
    description: 'Juniperus horizontalis (polegli klek) je savršen pokrivač tla. Nizak i gust rast, idealan za prekrivanje tla, kamenjare i kosine. Zimzelen i dekorativan tokom cele godine, otporan na mraz i sušu, minimalno održavanje.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Veoma otporan na mraz i sušu'
    }
  },

  // ==================== LIŠĆARI (ID: 7-8) ====================
  {
    id: 7,
    name: 'Katalpa',
    category: 'liscari',
    categories: ['liscari'],
    price: 1500,
    image: '/images/katalpa.jpg',
    description: 'Katalpa je ukrasno drvo sa velikim listovima i prelepim belim cvetovima. Pravi hlad i daje posebnu lepotu svakom dvorištu.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Redovno zalivanje',
      soil: 'Plodna, vlažna zemlja',
      hardiness: 'Otporna na mraz do -15°C'
    }
  },
  {
    id: 8,
    name: 'Magnolija Grandiflora',
    category: 'liscari',
    categories: ['liscari'],
    price: 2500,
    image: '/images/WhatsApp Image 2026-01-03 at 19.52.34.jpeg',
    description: 'Magnolija Grandiflora je prelepo zimzeleno drvo sa velikim belim cvetovima i lepim mirisom. Prava ukrasnost svakog dvorišta.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Sunce do polusenka',
      watering: 'Redovno zalivanje',
      soil: 'Blago kisela, bogata zemlja',
      hardiness: 'Otporna na mraz do -12°C'
    }
  },

  // ==================== ŠIBLJE (ID: 9-18) ====================
  {
    id: 9,
    name: 'Lovor višnja',
    category: 'liscari',
    categories: ['liscari', 'ziva-ograda'],
    price: 1200,
    image: '/images/lovorvisnja.jpeg',
    images: [
      '/images/lovorvisnja.jpeg',
      '/images/IMG_5327.jpeg'
    ],
    description: 'Lovor višnja je zimzeleni žbun, idealan za guste, elegantne žive ograde. Otporna na mraz i gradske uslove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Sunce do senka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 10,
    name: 'Fotinija Red Robin',
    category: 'liscari',
    categories: ['liscari', 'ziva-ograda'],
    price: 1400,
    image: '/images/WhatsApp Image 2025-12-30 at 14.15.33.jpeg',
    description: 'Fotinija Red Robin je zimzeleni žbun sa atraktivnim crvenim mladim izbojcima. Idealna za dekoraciju i formiranje žive ograde.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -15°C'
    }
  },
  {
    id: 11,
    name: 'Pennisetum alopecuroides',
    category: 'siblje',
    categories: ['siblje'],
    price: 1000,
    image: '/images/Pennisetum1.jpeg',
    images: [
      '/images/Pennisetum1.jpeg',
      '/images/Pennisetum2.jpeg'
    ],
    description: 'Pennisetum alopecuroides je dekorativna trajnica sa prelepim cvastovima. Idealna za pejzažne dizajne i ukrašavanje dvorišta.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 12,
    name: 'Bambus',
    category: 'liscari',
    categories: ['liscari'],
    price: 1600,
    image: '/images/bambus.jpeg',
    description: 'Bambus je brzorastuća trava koja stvara prirodnu živu ogradu i daje egzotični pejzaž. Idealna za modernije dizajne.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Sunce do polusenka',
      watering: 'Redovno zalivanje',
      soil: 'Bogata, vlažna zemlja',
      hardiness: 'Zavisi od vrste, do -15°C'
    }
  },
  {
    id: 13,
    name: 'Hortenzija',
    category: 'siblje',
    categories: ['siblje'],
    price: 1300,
    image: '/images/hortenzija.jpeg',
    images: [
      '/images/hortenzija.jpeg',
      '/images/WhatsApp Image 2026-01-04 at 19.51.44.jpeg'
    ],
    description: 'Hortenzija je prelep cvetni žbun sa velikim kuglastim cvetovima u različitim bojama. Idealna za ukrašavanje bašta i dvorišta.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Polusenka',
      watering: 'Često zalivanje',
      soil: 'Kisela do neutralna zemlja',
      hardiness: 'Otporna na mraz do -15°C'
    }
  },
  {
    id: 14,
    name: 'Bršljan (Hedera helix)',
    category: 'siblje',
    categories: ['siblje'],
    price: 800,
    image: '/images/puzavice1.jpeg',
    images: [
      '/images/puzavice1.jpeg',
      '/images/puzavice2.jpeg'
    ],
    description: 'Bršljan (Hedera helix) je zimzelena puzavica, idealna za prekrivanje ograda i zidova. Dekorativna cele godine, brz i gust rast, otporna i laka za održavanje. Odlično podnosi senku i polusenku.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Senka do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 15,
    name: 'Lonicera Nitida',
    category: 'siblje',
    categories: ['siblje'],
    price: 900,
    image: '/images/lonicerantida1.jpeg',
    images: [
      '/images/lonicerantida1.jpeg',
      '/images/lonicerantida2.jpeg'
    ],
    description: 'Lonicera nitida je gusta i moderna zelena ograda. Savršen izbor za niske žive ograde i oblikovanje prostora. Gusta i kompaktna forma, brz rast i lako održavanje, odlično podnosi orezivanje. Poluzimzelena i dekorativna tokom cele godine.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -15°C'
    }
  },
  {
    id: 16,
    name: 'Heuchera',
    category: 'siblje',
    categories: ['siblje'],
    price: 700,
    image: '/images/heuchera1.jpeg',
    images: [
      '/images/heuchera1.jpeg',
      '/images/heuchera2.jpeg'
    ],
    description: 'Heuchera (Koralna zvona) donosi boju i eleganciju tokom cele godine. Idealan izbor za dekorativne bašte. Dekorativni listovi u raznim bojama, niska i kompaktna biljka, otporna i laka za održavanje.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Bogata, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 17,
    name: 'Hibiskus',
    category: 'siblje',
    categories: ['siblje'],
    price: 1500,
    image: '/images/hibiskus.jpeg',
    description: 'Hibiskus je egzotična lepota za svaki prostor. Savršen izbor za dvorišta, terase i dekorativne bašte. Krupni i atraktivni cvetovi, dugo i bogato cvetanje, brz rast i laka nega. Pogodan za sadnju u bašti i u saksijama.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Redovno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -10°C'
    }
  },
  {
    id: 18,
    name: 'Spirea',
    category: 'siblje',
    categories: ['siblje'],
    price: 1000,
    image: '/images/spirea.jpeg',
    description: 'Spirea nudi bogato cvetanje i laku negu. Idealan izbor za dekoraciju dvorišta. Obilno i dekorativno cvetanje, brz rast i gusta forma, veoma laka za održavanje. Otporna i dugovečna biljka.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  }
];

export const categories = [
  { id: 'sve', nameKey: 'products.allCategories', name: 'Sve biljke' },
  { id: 'cetinari', nameKey: 'products.cetinari', name: 'Četinari' },
  { id: 'liscari', nameKey: 'products.liscari', name: 'Lišćari' },
  { id: 'siblje', nameKey: 'products.siblje', name: 'Šiblje' },
  { id: 'ziva-ograda', nameKey: 'products.zivaOgrada', name: 'Živa ograda' }
];

// Helper funkcija za pronalaženje proizvoda po ID-u
export const getProductById = (id) => {
  return products.find(p => p.id === parseInt(id));
};

// Helper funkcija za dobijanje naziva kategorije
export const getCategoryName = (categoryId) => {
  const category = categories.find(c => c.id === categoryId);
  return category ? category.name : categoryId;
};
