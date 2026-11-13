// Centralizovani podaci o proizvodima - koriste se na Products i ProductDetails stranicama

export const products = [
  // ==================== ČETINARI (ID: 1-6, 19) ====================
  {
    id: 1,
    name: 'Tuja Smaragd',
    category: 'cetinari',
    categories: ['cetinari', 'ziva-ograda'],
    price: 550,
    showPrice: true,
    image: '/images/tuia-smaragd.jpg',
    images: [
      '/images/tuia-smaragd.jpg',
      '/images/tuia-smaragd-2.jpg',
      '/images/tuia-smaragd-3.jpg'
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
    image: '/images/tisa-taxus-baccata.jpg',
    images: [
      '/images/tisa-taxus-baccata.jpg',
      '/images/tisa-taxus-baccata-2.jpg',
      '/images/tisa-taxus-baccata-3.jpg'
    ],
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
    image: '/images/pin-negru-pinus-nigra.jpg',
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
    image: '/images/tuia-orientala-platycladus-orientalis.jpg',
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
    image: '/images/molid-albastru-picea-pungens-glauca.jpg',
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
    image: '/images/ienupar-tarator-juniperus-horizontalis.jpg',
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
  {
    id: 19,
    name: 'Bor na štapu',
    category: 'cetinari',
    categories: ['cetinari'],
    price: 2500,
    image: '/images/pin-mugo-pe-tulpina.jpg',
    images: [
      '/images/pin-mugo-pe-tulpina.jpg',
      '/images/pin-mugo-pe-tulpina-2.jpg'
    ],
    description: 'Bor na štapu je dekorativni četinar formiran na jednom stablu, idealan za male vrtove i kao akcenat u dvorištu. Elegantan i lak za održavanje.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Veoma otporan na mraz'
    }
  },

  // ==================== LEYLAND (ID: 39) ====================
  {
    id: 39,
    name: 'Chiparos Leyland',
    category: 'cetinari',
    categories: ['cetinari', 'ziva-ograda'],
    price: 0,
    showPrice: false,
    image: '/images/chiparos-leyland.jpg',
    images: [
      '/images/chiparos-leyland.jpg',
      '/images/chiparos-leyland-2.jpg',
      '/images/chiparos-leyland-3.jpg'
    ],
    description: 'Chiparosul Leyland (× Cuprocyparis leylandii) este un conifer sempervirescând cu creștere extrem de rapidă, ideal pentru garduri vii înalte și paravânturi. Tolerează tunsorile repetate și se adaptează la diverse condiții de sol.',
    inStock: true,
    details: {
      height: 'Disponibil în toate înălțimile',
      sunlight: 'Soare până la semiumbră',
      watering: 'Udare moderată',
      soil: 'Diverse tipuri de sol',
      hardiness: 'Rezistent la ger până la -15°C'
    }
  },

  // ==================== LIŠĆARI (ID: 7-8) ====================
  {
    id: 7,
    name: 'Katalpa',
    category: 'liscari',
    categories: ['liscari'],
    price: 4000,
    showPrice: true,
    image: '/images/catalpa-bignonioides.jpg',
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
    image: '/images/magnolia-grandiflora.jpg',
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

  // ==================== ŠIBLJE (ID: 9-18, 20) ====================
  {
    id: 9,
    name: 'Lovor višnja',
    category: 'liscari',
    categories: ['liscari', 'ziva-ograda'],
    price: 360,
    showPrice: true,
    image: '/images/laurocerasus-prunus-laurocerasus.jpg',
    images: [
      '/images/laurocerasus-prunus-laurocerasus.jpg',
      '/images/laurocerasus-prunus-laurocerasus-2.jpg',
      '/images/laurocerasus-prunus-laurocerasus-3.jpg',
      '/images/laurocerasus-prunus-laurocerasus-4.jpg',
      '/images/laurocerasus-prunus-laurocerasus-5.jpg',
      '/images/laurocerasus-prunus-laurocerasus-6.jpg',
      '/images/laurocerasus-prunus-laurocerasus-7.jpg',
      '/images/laurocerasus-prunus-laurocerasus-8.jpg',
      '/images/laurocerasus-prunus-laurocerasus-9.png'
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
    price: 400,
    showPrice: true,
    image: '/images/photinia-red-robin.jpg',
    images: [
      '/images/photinia-red-robin.jpg',
      '/images/photinia-red-robin-2.jpg',
      '/images/photinia-red-robin-3.jpg',
      '/images/photinia-red-robin-4.jpg'
    ],
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
    image: '/images/pennisetum-alopecuroides.jpg',
    images: [
      '/images/pennisetum-alopecuroides.jpg',
      '/images/pennisetum-alopecuroides-2.jpg'
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
    price: 3500,
    showPrice: true,
    image: '/images/bambus.jpg',
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
    image: '/images/hortensie-hydrangea.jpg',
    images: [
      '/images/hortensie-hydrangea.jpg',
      '/images/hortensie-hydrangea-2.jpg'
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
    image: '/images/iedera-hedera-helix.jpg',
    images: [
      '/images/iedera-hedera-helix.jpg',
      '/images/iedera-hedera-helix-2.jpg'
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
    image: '/images/lonicera-nitida.jpg',
    images: [
      '/images/lonicera-nitida.jpg',
      '/images/lonicera-nitida-2.jpg'
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
    image: '/images/heuchera.jpg',
    images: [
      '/images/heuchera.jpg',
      '/images/heuchera-2.jpg',
      '/images/heuchera-3.jpg'
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
    image: '/images/hibiscus-syriacus.jpg',
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
    image: '/images/spiree-spiraea.jpg',
    images: [
      '/images/spiree-spiraea.jpg',
      '/images/spiree-spiraea-2.jpg',
      '/images/spiree-spiraea-3.jpg'
    ],
    description: 'Spirea nudi bogato cvetanje i laku negu. Idealan izbor za dekoraciju dvorišta. Obilno i dekorativno cvetanje, brz rast i gusta forma, veoma laka za održavanje. Otporna i dugovečna biljka.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 20,
    name: 'Božur',
    category: 'siblje',
    categories: ['siblje'],
    price: 1000,
    image: '/images/bujor-paeonia.jpg',
    images: [
      '/images/bujor-paeonia.jpg',
      '/images/bujor-paeonia-2.jpg'
    ],
    description: 'Božur (Paeonia) je raskošna biljka sa krupnim, mirisnim cvetovima. Dugovečna i otporna, idealna za cvetne leje i dekoraciju dvorišta. Cveta u proleće u ružičastim, belim i crvenim nijansama.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },

  // ==================== PERENE (ID: 21-36) ====================
  {
    id: 21,
    name: 'Ajuga reptans',
    category: 'perene',
    categories: ['perene'],
    price: 400,
    image: '/images/ajuga-reptans.jpg',
    description: 'Ajuga reptans je niska pokrovna perena sa plavim cvetićima. Idealna za pokrivanje tla, kamenjare i rubove staza. Brzo se širi i ne zahteva posebnu negu.',
    inStock: true,
    details: {
      height: '10-15 cm',
      sunlight: 'Polusenka do senka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 22,
    name: 'Astilba',
    category: 'perene',
    categories: ['perene'],
    price: 600,
    image: '/images/astilbe.jpg',
    images: [
      '/images/astilbe.jpg',
      '/images/astilbe-2.jpg'
    ],
    description: 'Astilba je elegantna perena sa pernatim cvastovima u roze, crvenim i belim tonovima. Odlična za senkovite delove bašte i vlažna staništa.',
    inStock: true,
    details: {
      height: '40-60 cm',
      sunlight: 'Polusenka do senka',
      watering: 'Redovno zalivanje',
      soil: 'Vlažna, bogata zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 23,
    name: 'Carex morrowi \'Ice Dance\'',
    category: 'perene',
    categories: ['perene'],
    price: 500,
    image: '/images/carex-morrowii-ice-dance.jpg',
    description: 'Carex morrowi \'Ice Dance\' je ukrasna trava sa zelenim listovima obrubljenim belom prugom. Idealna za bordure, kamenjare i sadnju ispod drveća.',
    inStock: true,
    details: {
      height: '25-35 cm',
      sunlight: 'Polusenka do senka',
      watering: 'Umereno zalivanje',
      soil: 'Vlažna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 24,
    name: 'Festuca glauca',
    category: 'perene',
    categories: ['perene'],
    price: 500,
    image: '/images/festuca-glauca.jpg',
    description: 'Festuca glauca (plava trava) je kompaktna ukrasna trava sa atraktivnim plavo-sivim listovima. Savršena za kamenjare, rubove i moderne bašte.',
    inStock: true,
    details: {
      height: '20-30 cm',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Suva, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 25,
    name: 'Hemerocallis',
    category: 'perene',
    categories: ['perene'],
    price: 600,
    image: '/images/crin-de-zi-hemerocallis.jpg',
    description: 'Hemerocallis (Dnevni ljiljan) je zahvalna perena sa prelepim narandžastim i žutim cvetovima. Cveta dugo, laka za održavanje i otporna na razne uslove.',
    inStock: true,
    details: {
      height: '50-80 cm',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 26,
    name: 'Hosta',
    category: 'perene',
    categories: ['perene'],
    price: 600,
    image: '/images/hosta.jpg',
    images: [
      '/images/hosta.jpg',
      '/images/hosta-2.jpg'
    ],
    description: 'Hosta je kraljica senke sa dekorativnim listovima u raznim nijansama zelene. Idealna za senkovite delove bašte, ispod drveća i uz vodene površine.',
    inStock: true,
    details: {
      height: '30-60 cm',
      sunlight: 'Polusenka do senka',
      watering: 'Redovno zalivanje',
      soil: 'Bogata, vlažna zemlja',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 27,
    name: 'Iris (Perunika)',
    category: 'perene',
    categories: ['perene'],
    price: 500,
    image: '/images/stanjenel-iris-germanica.jpg',
    description: 'Iris (Perunika) je elegantna perena sa prelepim belim i ljubičastim cvetovima. Nenametljiva lepota za svaku baštu, cveta u proleće.',
    inStock: true,
    details: {
      height: '40-70 cm',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 28,
    name: 'Kniphofia uvaria',
    category: 'perene',
    categories: ['perene'],
    price: 700,
    image: '/images/kniphofia-uvaria.jpg',
    description: 'Kniphofia uvaria (Baklja) je egzotična perena sa upečatljivim narandžasto-crvenim cvastovima. Privlači poglede i leptire, idealna kao akcenat u bašti.',
    inStock: true,
    details: {
      height: '60-100 cm',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -15°C'
    }
  },
  {
    id: 29,
    name: 'Ophiopogon japonicus',
    category: 'perene',
    categories: ['perene'],
    price: 500,
    image: '/images/ophiopogon-japonicus.jpg',
    description: 'Ophiopogon japonicus je zimzelena ukrasna trava, idealna za bordure i kao pokrivač tla. Niska i gusta, dekorativna tokom cele godine.',
    inStock: true,
    details: {
      height: '15-25 cm',
      sunlight: 'Polusenka do senka',
      watering: 'Umereno zalivanje',
      soil: 'Vlažna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -15°C'
    }
  },
  {
    id: 30,
    name: 'Physostegia alba',
    category: 'perene',
    categories: ['perene'],
    price: 500,
    image: '/images/physostegia-virginiana-alba.jpg',
    images: [
      '/images/physostegia-virginiana-alba.jpg',
      '/images/physostegia-virginiana-alba-2.jpg'
    ],
    description: 'Physostegia alba je perena sa elegantnim belim cvastovima. Bogato cveta tokom leta, laka za održavanje.',
    inStock: true,
    details: {
      height: '60-90 cm',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Vlažna, plodna zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 31,
    name: 'Sedum angelina',
    category: 'perene',
    categories: ['perene'],
    price: 400,
    image: '/images/sedum-angelina.jpg',
    images: [
      '/images/sedum-angelina.jpg',
      '/images/sedum-angelina-2.jpg'
    ],
    description: 'Sedum angelina je sukulentna perena sa zlatno-zelenim listovima koji u jesen postaju narandžasti. Savršena za kamenjare i kao pokrivač tla.',
    inStock: true,
    details: {
      height: '10-15 cm',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Suva, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 32,
    name: 'Sedum hybridum',
    category: 'perene',
    categories: ['perene'],
    price: 400,
    image: '/images/sedum-hybridum.jpg',
    images: [
      '/images/sedum-hybridum.jpg',
      '/images/sedum-hybridum-2.jpg'
    ],
    description: 'Sedum hybridum je gusta pokrovna perena sa jarko zelenim mesnatim listovima. Idealna za kamenjare, zelene krovove i prekrivanje tla.',
    inStock: true,
    details: {
      height: '10-20 cm',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Suva, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 33,
    name: 'Sedum rupestre \'Blue\'',
    category: 'perene',
    categories: ['perene'],
    price: 400,
    image: '/images/sedum-rupestre-blue.jpg',
    description: 'Sedum rupestre \'Blue\' je sukulentna perena sa plavo-sivim iglicama. Niska i otporna, savršena za kamenjare i suve bašte.',
    inStock: true,
    details: {
      height: '10-15 cm',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Suva, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 34,
    name: 'Sedum S. Watson',
    category: 'perene',
    categories: ['perene'],
    price: 400,
    image: '/images/sedum-watson.jpg',
    images: [
      '/images/sedum-watson.jpg',
      '/images/sedum-watson-2.jpg'
    ],
    description: 'Sedum S. Watson je dekorativna sukulentna perena sa roze-zelenim rozetama. Atraktivna boja tokom cele godine, idealna za kamenjare i saksije.',
    inStock: true,
    details: {
      height: '10-15 cm',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Suva, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 35,
    name: 'Sedum spectabile',
    category: 'perene',
    categories: ['perene'],
    price: 500,
    image: '/images/sedum-spectabile.jpg',
    description: 'Sedum spectabile (Debela koka) je robusna perena sa krupnim mesnatim listovima i ružičastim cvastovima. Privlači leptire i pčele, cveta u kasno leto.',
    inStock: true,
    details: {
      height: '30-50 cm',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 36,
    name: 'Stachys lanata',
    category: 'perene',
    categories: ['perene'],
    price: 400,
    image: '/images/stachys-byzantina.jpg',
    images: [
      '/images/stachys-byzantina.jpg',
      '/images/stachys-byzantina-2.jpg'
    ],
    description: 'Stachys lanata (Zečije uši) je perena sa mekanim, srebrno-sivim listovima nalik zečijim ušima. Odlična za kamenjare i kao kontrast tamnijem lišću.',
    inStock: true,
    details: {
      height: '20-30 cm',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Suva, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },

  // ==================== OSTALO (ID: 37-38) ====================
  {
    id: 37,
    name: 'Maslina',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/maslin-olea-europaea.jpg',
    images: [
      '/images/maslin-olea-europaea.jpg',
      '/images/maslin-olea-europaea-2.jpg',
      '/images/maslin-olea-europaea-3.jpg',
      '/images/maslin-olea-europaea-4.jpg',
      '/images/maslin-olea-europaea-5.jpg',
      '/images/maslin-olea-europaea-6.jpg',
      '/images/maslin-olea-europaea-7.jpg'
    ],
    description: 'Maslina (Olea europaea) je zimzeleno mediteransko drvo sa srebrno-zelenim listovima. Dugovečna i dekorativna, idealna za dvorišta, terase i mediteranski stil uređenja.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Dobro drenirana, peskovita zemlja',
      hardiness: 'Otporna na mraz do -10°C'
    }
  },
  {
    id: 38,
    name: 'Bonsai',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/bonsai.jpg',
    description: 'Bonsai je umetnost uzgoja minijaturnog drveća. Elegantan i jedinstven, savršen poklon i ukras za svaki enterijer ili terasu. Zahteva pažljivu negu i oblikovanje.',
    inStock: true,
    details: {
      height: 'Minijaturne forme',
      sunlight: 'Sunce do polusenka',
      watering: 'Redovno zalivanje',
      soil: 'Specijalni supstrat za bonsai',
      hardiness: 'Zavisi od vrste'
    }
  },

  // ==================== NOVE VRSTE (ID: 40-48) ====================
  {
    id: 40,
    name: 'Gaura',
    category: 'perene',
    categories: ['perene'],
    price: 0,
    image: '/images/gaura-lindheimeri.jpg',
    description: 'Gaura (Gaura lindheimeri) je graciozna perena sa vitkim, crvenkastim stabljikama i sitnim cvetovima nalik leptirima. Dugo cveta tokom leta, laka za održavanje i otporna na sušu.',
    inStock: true,
    details: {
      height: '60-90 cm',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 41,
    name: 'Iberis',
    category: 'perene',
    categories: ['perene'],
    price: 0,
    image: '/images/iberis-sempervirens.jpg',
    description: 'Iberis (Iberis sempervirens) je zimzelena pokrovna perena sa obiljem sitnih belih cvetova u proleće. Idealna za kamenjare, ivice staza i pokrivanje tla.',
    inStock: true,
    details: {
      height: '15-25 cm',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 42,
    name: 'Baštenski jorgovan',
    category: 'siblje',
    categories: ['siblje'],
    price: 0,
    image: '/images/liliac-syringa-vulgaris.jpg',
    description: 'Baštenski jorgovan (Syringa vulgaris) je omiljeni cvetni žbun sa mirisnim ljubičastim cvastovima u proleće. Otporan i dugovečan, savršen za dvorišta i žive ograde.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 43,
    name: 'Indijski jorgovan',
    category: 'siblje',
    categories: ['siblje'],
    price: 0,
    image: '/images/lagerstroemia-indica.jpg',
    description: 'Indijski jorgovan (Lagerstroemia indica) je egzotičan žbun sa bujnim, naboranim cvetovima u ružičastim i crvenim tonovima tokom leta. Idealan kao solitera ili akcenat u dvorištu.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -15°C'
    }
  },
  {
    id: 44,
    name: 'Italijanski čempres',
    category: 'cetinari',
    categories: ['cetinari'],
    price: 0,
    image: '/images/chiparos-italian-cupressus-sempervirens.jpg',
    description: 'Italijanski čempres (Cupressus sempervirens) je vitak, stubasti četinar prepoznatljivog mediteranskog izgleda. Savršen kao vertikalni akcenat u alejama i dvorištima.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -15°C'
    }
  },
  {
    id: 45,
    name: 'Japanska trešnja',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/cires-japonez-prunus-serrulata.jpg',
    description: 'Japanska trešnja (Prunus serrulata) je ukrasno drvo poznato po spektakularnom prolećnom cvetanju u ružičastim tonovima. Prava atrakcija za svaki park i dvorište.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 46,
    name: 'Japanski javor',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/artar-japonez-acer-palmatum.jpg',
    description: 'Japanski javor (Acer palmatum) je elegantno ukrasno drvce sa fino izrezanim, crveno-purpurnim lišćem. Idealan akcenat u modernim i japanskim vrtovima.',
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
    id: 47,
    name: 'Palma',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/palmier-trachycarpus-fortunei.jpg',
    description: 'Palma (Trachycarpus fortunei) je otporna zimzelena palma lepezastih listova, jedna od retkih koja podnosi i blaže mrazeve. Donosi mediteranski i egzotičan štih svakom prostoru.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -12°C'
    }
  },
  {
    id: 48,
    name: 'Cikas',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/cycas-revoluta.jpg',
    description: 'Cikas (Cycas revoluta), poznat i kao sago palma, je egzotična biljka sa krutim, perastim listovima i debelim, ljuspastim stablom. Idealna za saksije, terase i mediteranski ambijent.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Malo zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -8°C'
    }
  },
  {
    id: 49,
    name: 'Japanska trešnja Royal Burgundy',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/cires-japonez-royal-burgundy-prunus-serrulata.jpg',
    images: [
      '/images/cires-japonez-royal-burgundy-prunus-serrulata.jpg',
      '/images/cires-japonez-royal-burgundy-prunus-serrulata-2.jpg'
    ],
    description: 'Japanska trešnja \'Royal Burgundy\' (Prunus serrulata) ima tamnoljubičasto lišće tokom cele sezone i krupne, pune ružičaste cvetove u aprilu. Odlična za drvorede, parkove i dvorišta.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 50,
    name: 'Albicija',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/albizia-julibrissin.jpg',
    images: [
      '/images/albizia-julibrissin.jpg',
      '/images/albizia-julibrissin-2.jpg'
    ],
    description: 'Albicija (Albizia julibrissin) je ukrasno drvo sa perastim lišćem i pahuljastim ružičastim cvetovima tokom leta. Kišobranasta krona, idealna za terase, dvorišta i parkove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -15°C'
    }
  },
  {
    id: 51,
    name: 'Albicija višestablo',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/albizia-julibrissin-multitulpina.jpg',
    images: [
      '/images/albizia-julibrissin-multitulpina.jpg',
      '/images/albizia-julibrissin-multitulpina-2.jpg'
    ],
    description: 'Albicija (Albizia julibrissin) u višestabaonoj formi, sa više stabala iz osnove. Dekorativan soliter za terase, ulaze i moderne vrtove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -15°C'
    }
  },
  {
    id: 52,
    name: 'Krupnolisna lipa',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/tei-cu-frunza-mare-tilia-platyphyllos.jpg',
    images: [
      '/images/tei-cu-frunza-mare-tilia-platyphyllos.jpg',
      '/images/tei-cu-frunza-mare-tilia-platyphyllos-2.jpg'
    ],
    description: 'Krupnolisna lipa (Tilia platyphyllos) je veliko drvo za drvorede i parkove, sa mirisnim medonosnim cvetovima u junu.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Plodna, vlažna zemlja',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 53,
    name: 'Sitnolisna lipa',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/tei-pucios-tilia-cordata.jpg',
    images: [
      '/images/tei-pucios-tilia-cordata.jpg',
      '/images/tei-pucios-tilia-cordata-2.jpg'
    ],
    description: 'Sitnolisna lipa (Tilia cordata) je otporno drvo za drvorede, ulice i parkove, dobro podnosi gradske uslove. Medonosna.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 54,
    name: 'Srebrna lipa',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/tei-argintiu-tilia-tomentosa.jpg',
    images: [
      '/images/tei-argintiu-tilia-tomentosa.jpg',
      '/images/tei-argintiu-tilia-tomentosa-2.jpg'
    ],
    description: 'Srebrna lipa (Tilia tomentosa) ima lišće srebrnasto sa naličja i dobro podnosi sušu i vrućinu. Odlična za drvorede i parkove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 55,
    name: 'Beli bor',
    category: 'cetinari',
    categories: ['cetinari'],
    price: 0,
    image: '/images/pin-silvestru-pinus-sylvestris.jpg',
    images: [
      '/images/pin-silvestru-pinus-sylvestris.jpg',
      '/images/pin-silvestru-pinus-sylvestris-2.jpg'
    ],
    description: 'Beli bor (Pinus sylvestris) je otporan četinar sa narandžastom korom u gornjem delu stabla. Podnosi siromašna i peskovita zemljišta.',
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
    id: 56,
    name: 'Crveni hrast',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/stejar-rosu-quercus-rubra.jpg',
    images: [
      '/images/stejar-rosu-quercus-rubra.jpg',
      '/images/stejar-rosu-quercus-rubra-2.jpg'
    ],
    description: 'Crveni hrast (Quercus rubra) je brzorastući hrast sa spektakularnom crvenom jesenjom bojom. Za parkove i drvorede.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Kisela do neutralna zemlja',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 57,
    name: 'Likvidambar',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/liquidambar-styraciflua.jpg',
    images: [
      '/images/liquidambar-styraciflua.jpg',
      '/images/liquidambar-styraciflua-2.jpg'
    ],
    description: 'Likvidambar (Liquidambar styraciflua) je drvo sa zvezdastim lišćem i izuzetnom jesenjom bojom u nijansama crvene, ljubičaste i narandžaste.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Vlažna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 58,
    name: 'Tulipanovo drvo',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/arborele-lalea-liriodendron-tulipifera.jpg',
    images: [
      '/images/arborele-lalea-liriodendron-tulipifera.jpg',
      '/images/arborele-lalea-liriodendron-tulipifera-2.jpg'
    ],
    description: 'Tulipanovo drvo (Liriodendron tulipifera) ima lišće neobičnog oblika, cvetove nalik tulipanima u junu i zlatnu jesenju boju.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Plodna, vlažna zemlja',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 59,
    name: 'Javor Crimson King',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/artar-crimson-king-acer-platanoides.jpg',
    images: [
      '/images/artar-crimson-king-acer-platanoides.jpg',
      '/images/artar-crimson-king-acer-platanoides-2.jpg'
    ],
    description: 'Javor \'Crimson King\' (Acer platanoides) ima tamnocrveno-ljubičasto lišće tokom cele sezone. Okrugla krona, za drvorede i parkove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 60,
    name: 'Magnolija Soulangeana',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/magnolia-soulangeana.jpg',
    images: [
      '/images/magnolia-soulangeana.jpg',
      '/images/magnolia-soulangeana-2.jpg'
    ],
    description: 'Magnolija (Magnolia × soulangeana) cveta u aprilu krupnim belo-ružičastim cvetovima pre listanja. Spektakularan soliter za vrtove i ulaze.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Blago kisela, bogata zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 61,
    name: 'Crvena šljiva',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/prun-rosu-prunus-cerasifera-pissardii.jpg',
    images: [
      '/images/prun-rosu-prunus-cerasifera-pissardii.jpg',
      '/images/prun-rosu-prunus-cerasifera-pissardii-2.jpg'
    ],
    description: 'Ukrasna crvena šljiva (Prunus cerasifera \'Pissardii\') ima tamnocrveno-ljubičasto lišće i ružičaste cvetove rano u proleće. Za drvorede, parkove i dvorišta.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 62,
    name: 'Šimšir',
    category: 'siblje',
    categories: ['siblje', 'ziva-ograda'],
    price: 0,
    image: '/images/cimisir-buxus-sempervirens.jpg',
    images: [
      '/images/cimisir-buxus-sempervirens.jpg',
      '/images/cimisir-buxus-sempervirens-2.jpg'
    ],
    description: 'Šimšir (Buxus sempervirens) je zimzeleni žbun sitnih listova, idealan za niske žive ograde, bordure i oblikovanje u kugle i druge forme.',
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
    id: 63,
    name: 'Crveni javor',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/artar-rosu-acer-rubrum.jpg',
    images: [
      '/images/artar-rosu-acer-rubrum.jpg',
      '/images/artar-rosu-acer-rubrum-2.jpg'
    ],
    description: 'Crveni javor (Acer rubrum) ima crvene cvetove u rano proleće i spektakularnu crvenu jesenju boju. Za drvorede i parkove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Kisela do neutralna zemlja',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 64,
    name: 'Platan',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/platan-platanus-acerifolia.jpg',
    images: [
      '/images/platan-platanus-acerifolia.jpg',
      '/images/platan-platanus-acerifolia-2.jpg'
    ],
    description: 'Platan (Platanus × acerifolia) je klasično drvo za drvorede i bulevare, sa šarenom korom koja se ljušti i krupnim lišćem. Odlično podnosi gradske uslove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 65,
    name: 'Kuglasti bagrem',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/salcam-globular-robinia-umbraculifera.jpg',
    images: [
      '/images/salcam-globular-robinia-umbraculifera.jpg',
      '/images/salcam-globular-robinia-umbraculifera-2.jpg'
    ],
    description: 'Kuglasti bagrem (Robinia pseudoacacia Umbraculifera) ima gustu loptastu krunu na stablu. Idealan za uske ulice, trgove i parkinge, veoma otporan na sušu.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Veoma otporna na mraz'
    }
  },
  {
    id: 66,
    name: 'Breza',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/mesteacan-betula-pendula.jpg',
    images: [
      '/images/mesteacan-betula-pendula.jpg',
      '/images/mesteacan-betula-pendula-2.jpg'
    ],
    description: 'Breza (Betula pendula) ima belu koru, viseće grane i zlatnu jesenju boju. Brzorastuće i veoma otporno drvo za parkove i grupe.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Veoma otporna na mraz'
    }
  },
  {
    id: 67,
    name: 'Pirakanta Red Column',
    category: 'siblje',
    categories: ['siblje', 'ziva-ograda'],
    price: 0,
    image: '/images/pyracantha-red-column.jpg',
    images: [
      '/images/pyracantha-red-column.jpg',
      '/images/pyracantha-red-column-2.jpg'
    ],
    description: 'Pirakanta \'Red Column\' je zimzeleni trnoviti žbun uspravnog rasta, sa belim cvetovima u proleće i crvenim bobicama u jesen i zimu.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 68,
    name: 'Lavanda',
    category: 'perene',
    categories: ['perene'],
    price: 0,
    image: '/images/lavanda-lavandula-angustifolia.jpg',
    images: [
      '/images/lavanda-lavandula-angustifolia.jpg',
      '/images/lavanda-lavandula-angustifolia-2.jpg'
    ],
    description: 'Lavanda (Lavandula angustifolia) je aromatični polužbun sa ljubičastim cvetovima leti. Medonosna, otporna na sušu, za bordure i mediteranske vrtove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Suva, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 69,
    name: 'Potentila',
    category: 'siblje',
    categories: ['siblje'],
    price: 0,
    image: '/images/potentilla-fruticosa.jpg',
    images: [
      '/images/potentilla-fruticosa.jpg',
      '/images/potentilla-fruticosa-2.jpg'
    ],
    description: 'Potentila (Potentilla fruticosa) je kompaktan, veoma otporan žbun koji cveta od juna do jeseni. Za bordure i masovnu sadnju.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 70,
    name: 'Viola',
    category: 'perene',
    categories: ['perene'],
    price: 0,
    image: '/images/viola-panseluta.jpg',
    images: [
      '/images/viola-panseluta.jpg',
      '/images/viola-panseluta-2.jpg'
    ],
    description: 'Viola (maćuhica) je sezonsko cveće za jesenju i prolećnu sadnju, za leje, žardinjere i gradske cvetne aranžmane.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Redovno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -15°C'
    }
  },
  {
    id: 71,
    name: 'Muškatla',
    category: 'perene',
    categories: ['perene'],
    price: 0,
    image: '/images/muscata-pelargonium.jpg',
    images: [
      '/images/muscata-pelargonium.jpg',
      '/images/muscata-pelargonium-2.jpg'
    ],
    description: 'Muškatla (Pelargonium) je klasično letnje cveće za balkone, žardinjere i gradske aranžmane. Cveta od proleća do mraza.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Redovno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Osetljiva na mraz'
    }
  },
  {
    id: 72,
    name: 'Ruža',
    category: 'siblje',
    categories: ['siblje'],
    price: 0,
    image: '/images/trandafir-rosa.jpg',
    images: [
      '/images/trandafir-rosa.jpg',
      '/images/trandafir-rosa-2.jpg'
    ],
    description: 'Baštenske ruže (Rosa sp.) za leje, bordure i parkove, u kontejneru i sa golim korenom.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Redovno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 73,
    name: 'Ruža stablašica',
    category: 'siblje',
    categories: ['siblje'],
    price: 0,
    image: '/images/trandafir-pe-tulpina-rosa.jpg',
    images: [
      '/images/trandafir-pe-tulpina-rosa.jpg',
      '/images/trandafir-pe-tulpina-rosa-2.jpg'
    ],
    description: 'Ruža stablašica je ruža kalemljena na stablo, za akcente uz staze, ulaze i u parkovima.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Redovno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 74,
    name: 'Cvetajući jasen',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/frasin-cu-flori-fraxinus-ornus.jpg',
    images: [
      '/images/frasin-cu-flori-fraxinus-ornus.jpg',
      '/images/frasin-cu-flori-fraxinus-ornus-2.jpg'
    ],
    description: 'Cvetajući jasen (Fraxinus ornus) je drvo srednje veličine sa mirisnim belim cvetovima u maju, otporno na sušu. Za ulice i parkove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 75,
    name: 'Stubasti grab',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/carpen-columnar-carpinus-betulus-fastigiata.jpg',
    images: [
      '/images/carpen-columnar-carpinus-betulus-fastigiata.jpg',
      '/images/carpen-columnar-carpinus-betulus-fastigiata-2.jpg'
    ],
    description: 'Stubasti grab (Carpinus betulus \'Fastigiata\') ima uspravnu, uzanu krunu, idealan za uske ulice i zelene paravane.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Sunce do senka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 76,
    name: 'Javor šećerac',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/artar-argintiu-acer-saccharinum.jpg',
    images: [
      '/images/artar-argintiu-acer-saccharinum.jpg',
      '/images/artar-argintiu-acer-saccharinum-2.jpg'
    ],
    description: 'Javor šećerac (Acer saccharinum) je brzorastuće drvo sa duboko urezanim lišćem srebrnastim sa naličja i žutom jesenjom bojom.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 77,
    name: 'Zelena smrča',
    category: 'cetinari',
    categories: ['cetinari'],
    price: 0,
    image: '/images/molid-picea-abies.jpg',
    images: [
      '/images/molid-picea-abies.jpg',
      '/images/molid-picea-abies-2.jpg'
    ],
    description: 'Zelena smrča (Picea abies) je veliki četinar kupaste krune, za parkove, vetrozaštitne pojaseve i novogodišnje jelke.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Redovno zalivanje',
      soil: 'Kisela do neutralna zemlja',
      hardiness: 'Veoma otporna na mraz'
    }
  },
  {
    id: 78,
    name: 'Judino drvo',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/arborele-iudei-cercis-siliquastrum.jpg',
    images: [
      '/images/arborele-iudei-cercis-siliquastrum.jpg',
      '/images/arborele-iudei-cercis-siliquastrum-2.jpg'
    ],
    description: 'Judino drvo (Cercis siliquastrum) u aprilu cveta ljubičasto-ružičastim cvetovima direktno na granama i stablu, pre listanja.',
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
    id: 79,
    name: 'Javor mleč',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/artar-acer-platanoides.jpg',
    images: [
      '/images/artar-acer-platanoides.jpg',
      '/images/artar-acer-platanoides-2.jpg'
    ],
    description: 'Javor mleč (Acer platanoides) je otporno drvo za drvorede i parkove, sa žutim cvetovima u rano proleće i žuto-narandžastom jesenjom bojom.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 80,
    name: 'Japanska jabuka',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/mar-decorativ-malus-floribunda.jpg',
    images: [
      '/images/mar-decorativ-malus-floribunda.jpg',
      '/images/mar-decorativ-malus-floribunda-2.jpg'
    ],
    description: 'Japanska ukrasna jabuka (Malus floribunda) obilno cveta u aprilu ružičasto-belim cvetovima, a u jesen nosi sitne ukrasne plodove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 81,
    name: 'Kiseli ruj',
    category: 'siblje',
    categories: ['siblje'],
    price: 0,
    image: '/images/otetar-rhus-typhina.jpg',
    images: [
      '/images/otetar-rhus-typhina.jpg',
      '/images/otetar-rhus-typhina-2.jpg'
    ],
    description: 'Kiseli ruj (Rhus typhina) je žbun ili manje drvo sa baršunastim granama i spektakularnom crveno-narandžastom jesenjom bojom.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 82,
    name: 'Kariopteris',
    category: 'siblje',
    categories: ['siblje'],
    price: 0,
    image: '/images/caryopteris-clandonensis.jpg',
    images: [
      '/images/caryopteris-clandonensis.jpg',
      '/images/caryopteris-clandonensis-2.jpg'
    ],
    description: 'Kariopteris (Caryopteris × clandonensis) je nizak žbun sa plavim cvetovima krajem leta, aromatičnim lišćem, privlači pčele.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Suva, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 83,
    name: 'Kerija',
    category: 'siblje',
    categories: ['siblje'],
    price: 0,
    image: '/images/kerria-japonica.jpg',
    images: [
      '/images/kerria-japonica.jpg',
      '/images/kerria-japonica-2.jpg'
    ],
    description: 'Kerija (Kerria japonica) je žbun sa žutim punim cvetovima u aprilu–maju i zelenim granama zimi. Podnosi senku.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Sunce do senka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 84,
    name: 'Forzicija',
    category: 'siblje',
    categories: ['siblje', 'ziva-ograda'],
    price: 0,
    image: '/images/forsythia-intermedia.jpg',
    images: [
      '/images/forsythia-intermedia.jpg',
      '/images/forsythia-intermedia-2.jpg'
    ],
    description: 'Forzicija (Forsythia × intermedia) prva cveta u proleće, žutim cvetovima pre listanja. Za slobodne žive ograde i grupe.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 85,
    name: 'Biserak',
    category: 'siblje',
    categories: ['siblje', 'ziva-ograda'],
    price: 0,
    image: '/images/symphoricarpos-albus.jpg',
    images: [
      '/images/symphoricarpos-albus.jpg',
      '/images/symphoricarpos-albus-2.jpg'
    ],
    description: 'Biserak (Symphoricarpos albus) je otporan žbun sa belim bobicama u jesen i zimu, podnosi senku i siromašna zemljišta.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Sunce do senka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 86,
    name: 'Santolina',
    category: 'perene',
    categories: ['perene'],
    price: 0,
    image: '/images/santolina-chamaecyparissus.jpg',
    images: [
      '/images/santolina-chamaecyparissus.jpg',
      '/images/santolina-chamaecyparissus-2.jpg'
    ],
    description: 'Santolina (Santolina chamaecyparissus) je nizak aromatičan polužbun srebrnastog lišća i žutih cvetova leti. Za bordure i suve vrtove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Suva, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -15°C'
    }
  },
  {
    id: 87,
    name: 'Ariš',
    category: 'cetinari',
    categories: ['cetinari'],
    price: 0,
    image: '/images/larice-larix-decidua.jpg',
    images: [
      '/images/larice-larix-decidua.jpg',
      '/images/larice-larix-decidua-2.jpg'
    ],
    description: 'Ariš (Larix decidua) je listopadni četinar sa svetlozelenim iglicama u proleće i zlatnožutom bojom u jesen.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Veoma otporna na mraz'
    }
  },
  {
    id: 88,
    name: 'Ilex',
    category: 'siblje',
    categories: ['siblje', 'ziva-ograda'],
    price: 0,
    image: '/images/ilex-aquifolium.jpg',
    images: [
      '/images/ilex-aquifolium.jpg',
      '/images/ilex-aquifolium-2.jpg'
    ],
    description: 'Ilex (Ilex aquifolium) je zimzeleni žbun sa sjajnim bodljikavim listovima i crvenim bobicama zimi. Za žive ograde i senovita mesta.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Sunce do senka',
      watering: 'Umereno zalivanje',
      soil: 'Kisela do neutralna zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 89,
    name: 'Himalajski bor',
    category: 'cetinari',
    categories: ['cetinari'],
    price: 0,
    image: '/images/pin-de-himalaya-pinus-wallichiana.jpg',
    images: [
      '/images/pin-de-himalaya-pinus-wallichiana.jpg',
      '/images/pin-de-himalaya-pinus-wallichiana-2.jpg'
    ],
    description: 'Himalajski bor (Pinus wallichiana) ima duge, meke, viseće plavozelene iglice i duge šišarke. Dekorativan soliter za parkove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 90,
    name: 'Bor krivulj (Pinus mugo)',
    category: 'cetinari',
    categories: ['cetinari'],
    price: 0,
    image: '/images/pin-mugo-pinus-mugo.jpg',
    images: [
      '/images/pin-mugo-pinus-mugo.jpg',
      '/images/pin-mugo-pinus-mugo-2.jpg'
    ],
    description: 'Bor krivulj (Pinus mugo) je nizak, žbunast, izuzetno otporan četinar za kamenjare, kosine, krovove i saksije.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Veoma otporna na mraz'
    }
  },
  {
    id: 91,
    name: 'Crni bor Brepo',
    category: 'cetinari',
    categories: ['cetinari'],
    price: 0,
    image: '/images/pin-negru-brepo-pinus-nigra.jpg',
    images: [
      '/images/pin-negru-brepo-pinus-nigra.jpg',
      '/images/pin-negru-brepo-pinus-nigra-2.jpg'
    ],
    description: 'Crni bor \'Brepo\' je patuljasta, loptasta sorta crnog bora sa gustim tamnozelenim iglicama. Za saksije, kamenjare i male vrtove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Veoma otporna na mraz'
    }
  },
  {
    id: 92,
    name: 'Jablan',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/plop-piramidal-populus-nigra-italica.jpg',
    images: [
      '/images/plop-piramidal-populus-nigra-italica.jpg',
      '/images/plop-piramidal-populus-nigra-italica-2.jpg'
    ],
    description: 'Jablan (Populus nigra \'Italica\') je veoma brzorastuće drvo uske, stubaste krune, za vetrozaštitne pojaseve i vertikalne akcente.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Veoma otporna na mraz'
    }
  },
  {
    id: 93,
    name: 'Geranium',
    category: 'perene',
    categories: ['perene'],
    price: 0,
    image: '/images/geranium-pelinarita.jpg',
    images: [
      '/images/geranium-pelinarita.jpg',
      '/images/geranium-pelinarita-2.jpg'
    ],
    description: 'Geranium (višegodišnja zdravčika) je pokrivač tla sa ružičastim, ljubičastim ili plavim cvetovima, podnosi senku i sušu.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Sunce do senka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 94,
    name: 'Imperata Red Baron',
    category: 'perene',
    categories: ['perene'],
    price: 0,
    image: '/images/imperata-cylindrica-red-baron.jpg',
    images: [
      '/images/imperata-cylindrica-red-baron.jpg',
      '/images/imperata-cylindrica-red-baron-2.jpg'
    ],
    description: 'Imperata \'Red Baron\' je ukrasna trava čiji listovi crvene od vrha, sa intenzivno crvenom bojom u jesen. Za bordure i saksije.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Vlažna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },

  // ==================== DRVEĆE IZ PONUDE YOUNGTREES 13.11.2026 (ID: 95-163) ====================
  {
    id: 95,
    name: 'Trozubi javor',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/artar-trilobat-acer-buergerianum.jpg',
    images: [
      '/images/artar-trilobat-acer-buergerianum.jpg',
      '/images/artar-trilobat-acer-buergerianum-2.jpg'
    ],
    description: 'Trozubi javor (Acer buergerianum) je mali do srednji javor sa trokrakim lišćem i narandžasto-crvenom jesenjom bojom. Za ulice, trgove i manja dvorišta.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 96,
    name: 'Klen (Acer campestre)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/jugastru-acer-campestre.jpg',
    images: [
      '/images/jugastru-acer-campestre.jpg',
      '/images/jugastru-acer-campestre-2.jpg'
    ],
    description: 'Klen (Acer campestre) je domaći, veoma otporan javor za drvorede, parkove i žive ograde. Podnosi sušu, krečna zemljišta i gradske uslove; u jesen se boji žuto.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Malo zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 97,
    name: 'Javor Freemanii (Acer × freemanii)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/artar-freeman-acer-freemanii.jpg',
    images: [
      '/images/artar-freeman-acer-freemanii.jpg'
    ],
    description: 'Javor Freemanii (Acer × freemanii) je hibrid crvenog i srebrnog javora: brzo raste, otporan je i ima spektakularnu narandžasto-crvenu jesenju boju. Sorte \'Autumn Blaze\', \'Armstrong\' i \'Celebration\'.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 98,
    name: 'Negundovac Flamingo (Acer negundo \'Flamingo\')',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/artar-negundo-flamingo.jpg',
    images: [
      '/images/artar-negundo-flamingo.jpg',
      '/images/artar-negundo-flamingo-2.jpg'
    ],
    description: 'Negundovac \'Flamingo\' ima šareno lišće belo-zeleno sa ružičastim mladim izdancima u proleće. Malo dekorativno drvo za dvorišta, parkove i kontrastne sadnje.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 99,
    name: 'Javor Pacific Sunset i Norwegian Sunset (Acer truncatum × platanoides)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/artar-pacific-sunset-norwegian-sunset.jpg',
    images: [
      '/images/artar-pacific-sunset-norwegian-sunset.jpg',
      '/images/artar-pacific-sunset-norwegian-sunset-2.jpg'
    ],
    description: 'Hibridi javora \'Pacific Sunset\' (\'Warrenred\') i \'Norwegian Sunset\' (\'Keithsform\') kombinuju otpornost mleča sa narandžasto-crvenom jesenjom bojom. Kompaktna krona, idealni za drvorede.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 100,
    name: 'Gorski javor (Acer pseudoplatanus)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/paltin-de-munte-acer-pseudoplatanus.jpg',
    images: [
      '/images/paltin-de-munte-acer-pseudoplatanus.jpg',
      '/images/paltin-de-munte-acer-pseudoplatanus-2.jpg'
    ],
    description: 'Gorski javor (Acer pseudoplatanus) je krupno, dugovečno drvo široke krune, otporno na vetar i mraz. Za parkove, drvorede i velike zelene površine; sorte \'Atropurpureum\' i \'Bruchem\'.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 101,
    name: 'Ginala javor (Acer tataricum subsp. ginnala)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/artar-ginnala-acer-tataricum.jpg',
    images: [
      '/images/artar-ginnala-acer-tataricum.jpg',
      '/images/artar-ginnala-acer-tataricum-2.jpg'
    ],
    description: 'Ginala javor je mali, veoma otporan javor sa sjajnim lišćem i jarko crvenom jesenjom bojom. Za mala dvorišta, žive ograde i sadnju u grupama.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Malo zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -35°C'
    }
  },
  {
    id: 102,
    name: 'Javor Annae (Acer × zoeschense \'Annae\')',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/artar-acer-zoeschense-annae.jpg',
    images: [
      '/images/artar-acer-zoeschense-annae.jpg',
      '/images/artar-acer-zoeschense-annae-2.jpg'
    ],
    description: 'Javor \'Annae\' ima tamno, crveno-ljubičasto mlado lišće i purpurne izdanke, a kasnije tamnozeleno lišće. Srednje drvo kompaktne krune za parkove i drvorede.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 103,
    name: 'Italijanska jova (Alnus cordata)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/arin-italian-alnus-cordata.jpg',
    images: [
      '/images/arin-italian-alnus-cordata.jpg',
      '/images/arin-italian-alnus-cordata-2.jpg'
    ],
    description: 'Italijanska jova (Alnus cordata) je brzorastuće drvo kupaste krune sa sjajnim srcastim lišćem. Podnosi i suva i vlažna zemljišta – odlična za drvorede i gradske uslove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 104,
    name: 'Crna jova (Alnus glutinosa)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/arin-negru-alnus-glutinosa.jpg',
    images: [
      '/images/arin-negru-alnus-glutinosa.jpg',
      '/images/arin-negru-alnus-glutinosa-2.jpg'
    ],
    description: 'Crna jova (Alnus glutinosa) je domaće drvo vlažnih staništa, idealno za obale reka i jezera i vlažne parkove. Sorte \'Imperialis\' i \'Laciniata\' imaju dekorativno usečeno lišće.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Često zalivanje',
      soil: 'Vlažna, plodna zemlja',
      hardiness: 'Otporna na mraz do -35°C'
    }
  },
  {
    id: 105,
    name: 'Jova Spaethii (Alnus × spaethii)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/arin-alnus-spaethii.jpg',
    images: [
      '/images/arin-alnus-spaethii.jpg',
      '/images/arin-alnus-spaethii-2.jpg'
    ],
    description: 'Jova Spaethii (Alnus × spaethii) je brzorastući hibrid sa krupnim, sjajnim lišćem i ljubičastim mladim izdancima. Veoma otporna na gradske uslove – za drvorede i parkove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 106,
    name: 'Amelanšir na stablu (Amelanchier)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/amelanchier-arbore.jpg',
    images: [
      '/images/amelanchier-arbore.jpg',
      '/images/amelanchier-arbore-2.jpg'
    ],
    description: 'Amelanšir je malo drvo sa belim cvetovima u proleće, jestivim tamnim plodovima leti i narandžasto-crvenom jesenjom bojom. Sorte \'Robin Hill\', \'Snowflakes\' i A. lamarckii, kao visokostablo.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 107,
    name: 'Kineska breza Fascination (Betula albosinensis \'Fascination\')',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/mesteacan-chinezesc-betula-albosinensis-fascination.jpg',
    images: [
      '/images/mesteacan-chinezesc-betula-albosinensis-fascination.jpg',
      '/images/mesteacan-chinezesc-betula-albosinensis-fascination-2.jpg'
    ],
    description: 'Kineska breza \'Fascination\' ima upečatljivu narandžasto-bakarnu koru koja se ljušti, sa ružičastim i krem tonovima. Dekorativni soliter za parkove i vrtove tokom cele godine.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Vlažna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 108,
    name: 'Rečna breza (Betula nigra)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/mesteacan-de-rau-betula-nigra.jpg',
    images: [
      '/images/mesteacan-de-rau-betula-nigra.jpg'
    ],
    description: 'Rečna breza (Betula nigra) ima dekorativnu koru boje cimeta koja se ljušti u slojevima. Podnosi vlažna zemljišta i vrućinu – za parkove, obale i vlažne lokacije.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Često zalivanje',
      soil: 'Vlažna, plodna zemlja',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 109,
    name: 'Maljava breza (Betula pubescens)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/mesteacan-pufos-betula-pubescens.jpg',
    images: [
      '/images/mesteacan-pufos-betula-pubescens.jpg',
      '/images/mesteacan-pufos-betula-pubescens-2.jpg'
    ],
    description: 'Maljava breza (Betula pubescens) je domaća breza bele kore, otporna na hladnoću i vlažna zemljišta. Za parkove, pošumljavanje i prirodne zelene površine.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Redovno zalivanje',
      soil: 'Vlažna, plodna zemlja',
      hardiness: 'Otporna na mraz do -35°C'
    }
  },
  {
    id: 110,
    name: 'Himalajska breza Doorenbos (Betula utilis \'Doorenbos\')',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/mesteacan-himalaya-betula-utilis-doorenbos.jpg',
    images: [
      '/images/mesteacan-himalaya-betula-utilis-doorenbos.jpg',
      '/images/mesteacan-himalaya-betula-utilis-doorenbos-2.jpg'
    ],
    description: 'Himalajska breza \'Doorenbos\' ima najbelju koru od svih breza, upečatljivu tokom cele godine. Jedno od najtraženijih dekorativnih stabala za moderne vrtove i javne prostore.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Redovno zalivanje',
      soil: 'Vlažna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 111,
    name: 'Grab (Carpinus betulus)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/carpen-carpinus-betulus.jpg',
    images: [
      '/images/carpen-carpinus-betulus.jpg',
      '/images/carpen-carpinus-betulus-2.jpg'
    ],
    description: 'Grab (Carpinus betulus) je domaće, veoma otporno drvo guste krune koje odlično podnosi orezivanje. Za drvorede, parkove, zelene zidove i oblikovana stabla; dostupan kao visokostablo i višestruko presađivan.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 112,
    name: 'Japanski grab (Carpinus japonica)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/carpen-japonez-carpinus-japonica.jpg',
    images: [
      '/images/carpen-japonez-carpinus-japonica.jpg',
      '/images/carpen-japonez-carpinus-japonica-2.jpg'
    ],
    description: 'Japanski grab (Carpinus japonica) je malo, elegantno drvo sa izraženo nervaturnim lišćem i dekorativnim plodovima nalik hmelju. Za vrtove, parkove i japanske vrtove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 113,
    name: 'Pitomi kesten (Castanea sativa)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/castan-comestibil-castanea-sativa.jpg',
    images: [
      '/images/castan-comestibil-castanea-sativa.jpg',
      '/images/castan-comestibil-castanea-sativa-2.jpg'
    ],
    description: 'Pitomi kesten (Castanea sativa) je krupno, dugovečno drvo sa sjajnim nazubljenim lišćem i jestivim plodovima. Za parkove, velike vrtove i voćnjake na kiselim zemljištima.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Kisela do neutralna zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 114,
    name: 'Koprivić (Celtis australis, Celtis occidentalis)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/sambovina-celtis.jpg',
    images: [
      '/images/sambovina-celtis.jpg',
      '/images/sambovina-celtis-2.jpg'
    ],
    description: 'Koprivić je veoma otporno drvo za drvorede i trgove: podnosi sušu, vrućinu i zbijena zemljišta. Dostupan južni (C. australis) i američki koprivić (C. occidentalis).',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 115,
    name: 'Kacura (Cercidiphyllum japonicum)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/cercidiphyllum-japonicum.jpg',
    images: [
      '/images/cercidiphyllum-japonicum.jpg',
      '/images/cercidiphyllum-japonicum-2.jpg'
    ],
    description: 'Kacura (Cercidiphyllum japonicum) ima srcolike listove i spektakularnu jesenju boju, a otpalo lišće miriše na karamel i medenjake. Dekorativni soliter za parkove i vrtove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Redovno zalivanje',
      soil: 'Vlažna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 116,
    name: 'Kanadsko Judino drvo (Cercis canadensis)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/cercis-canadensis.jpg',
    images: [
      '/images/cercis-canadensis.jpg',
      '/images/cercis-canadensis-2.jpg'
    ],
    description: 'Kanadsko Judino drvo (Cercis canadensis) u rano proleće cveta ružičasto-ljubičastim cvetovima direktno na granama, pre listanja. Ima srcolike listove i žutu jesenju boju.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 117,
    name: 'Mečja leska (Corylus colurna)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/alun-turcesc-corylus-colurna.jpg',
    images: [
      '/images/alun-turcesc-corylus-colurna.jpg',
      '/images/alun-turcesc-corylus-colurna-2.jpg'
    ],
    description: 'Mečja leska (Corylus colurna) je pravilno, kupasto drvo izuzetno otporno na sušu i gradske uslove. Jedno od najboljih stabala za drvorede, trgove i parkinge.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 118,
    name: 'Ukrasni glog (Crataegus)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/paducel-decorativ-crataegus.jpg',
    images: [
      '/images/paducel-decorativ-crataegus.jpg',
      '/images/paducel-decorativ-crataegus-2.jpg'
    ],
    description: 'Ukrasni glog je malo, veoma otporno drvo sa obilnim cvetanjem u maju i crvenim plodovima u jesen. Sorte \'Paul\'s Scarlet\' (punjeni crveni cvetovi), \'Carrierei\', \'Splendens\' i domaći C. monogyna.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 119,
    name: 'Drvo maramica (Davidia involucrata)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/arborele-batista-davidia-involucrata.jpg',
    images: [
      '/images/arborele-batista-davidia-involucrata.jpg',
      '/images/arborele-batista-davidia-involucrata-2.jpg'
    ],
    description: 'Drvo maramica (Davidia involucrata) u maju razvija upečatljive bele brakteje koje vise sa grana kao maramice. Retko i veoma dekorativno soliterno drvo za parkove i botaničke kolekcije.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Redovno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 120,
    name: 'Bukva (Fagus sylvatica)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/fag-fagus-sylvatica.jpg',
    images: [
      '/images/fag-fagus-sylvatica.jpg',
      '/images/fag-fagus-sylvatica-2.jpg'
    ],
    description: 'Bukva (Fagus sylvatica) je veličanstveno parkovsko drvo glatke sive kore. Pored zelene, dostupne su crvenolisna \'Atropunicea\', stubaste \'Dawyck\' i \'Dawyck Purple\' i žalosna \'Purpurea Pendula\'.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 121,
    name: 'Američki jasen (Fraxinus americana)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/frasin-american-fraxinus-americana.jpg',
    images: [
      '/images/frasin-american-fraxinus-americana.jpg',
      '/images/frasin-american-fraxinus-americana-2.jpg'
    ],
    description: 'Američki jasen (Fraxinus americana) je brzorastuće drvo pravilne krune sa ljubičasto-crvenom jesenjom bojom. Sorte \'Autumn Purple\', \'Autumn Applause\' i \'Skyline\' za drvorede i parkove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 122,
    name: 'Uskolisni jasen Raywood (Fraxinus angustifolia \'Raywood\')',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/frasin-raywood-fraxinus-angustifolia.jpg',
    images: [
      '/images/frasin-raywood-fraxinus-angustifolia.jpg',
      '/images/frasin-raywood-fraxinus-angustifolia-2.jpg'
    ],
    description: 'Jasen \'Raywood\' ima fino, usko lišće i bordo-ljubičastu jesenju boju. Otporan na sušu i vrućinu – za drvorede i parkove u toplijim krajevima.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 123,
    name: 'Beli jasen (Fraxinus excelsior)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/frasin-comun-fraxinus-excelsior.jpg',
    images: [
      '/images/frasin-comun-fraxinus-excelsior.jpg',
      '/images/frasin-comun-fraxinus-excelsior-2.jpg'
    ],
    description: 'Beli jasen (Fraxinus excelsior) je krupno domaće drvo prozračne krune. Sorte \'Altena\' i \'Atlas\' imaju pravilnu krunu za drvorede, a \'Jaspidea\' zlatne grane i žutu jesenju boju.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 124,
    name: 'Pensilvanski jasen Summit (Fraxinus pennsylvanica \'Summit\')',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/frasin-pennsylvanica-summit.jpg',
    images: [
      '/images/frasin-pennsylvanica-summit.jpg',
      '/images/frasin-pennsylvanica-summit-2.jpg'
    ],
    description: 'Jasen \'Summit\' ima pravilnu, uspravnu krunu i zlatno-žutu jesenju boju. Veoma otporan na mraz, sušu i gradske uslove – za drvorede.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -35°C'
    }
  },
  {
    id: 125,
    name: 'Ginko (Ginkgo biloba)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/ginkgo-biloba.jpg',
    images: [
      '/images/ginkgo-biloba.jpg',
      '/images/ginkgo-biloba-2.jpg'
    ],
    description: 'Ginko (Ginkgo biloba) je drevno drvo lepezastog lišća sa zlatno-žutom jesenjom bojom. Izuzetno otporno na zagađenje i gradske uslove – za drvorede, trgove i parkove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 126,
    name: 'Gledičija (Gleditsia triacanthos)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/gladita-gleditsia-triacanthos.jpg',
    images: [
      '/images/gladita-gleditsia-triacanthos.jpg',
      '/images/gladita-gleditsia-triacanthos-2.jpg'
    ],
    description: 'Gledičija (Gleditsia triacanthos) ima fino, perasto lišće koje daje laganu senku. Sorte bez trnja: inermis, \'Rubylace\' sa bordo mladim lišćem i \'Speczam\'. Veoma otporna na sušu i grad.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 127,
    name: 'Crni orah (Juglans nigra)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/nuc-negru-juglans-nigra.jpg',
    images: [
      '/images/nuc-negru-juglans-nigra.jpg',
      '/images/nuc-negru-juglans-nigra-2.jpg'
    ],
    description: 'Crni orah (Juglans nigra) je krupno, brzorastuće drvo sa dugim perastim lišćem i vrednim drvetom. Za parkove, velike površine i plantaže drveta.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 128,
    name: 'Orah (Juglans regia)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/nuc-juglans-regia.jpg',
    images: [
      '/images/nuc-juglans-regia.jpg',
      '/images/nuc-juglans-regia-2.jpg'
    ],
    description: 'Orah (Juglans regia) je krupno, dugovečno drvo široke krune i jestivih plodova. Za voćnjake, dvorišta, parkove i velike zelene površine.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 129,
    name: 'Kelreuterija (Koelreuteria paniculata)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/koelreuteria-paniculata.jpg',
    images: [
      '/images/koelreuteria-paniculata.jpg',
      '/images/koelreuteria-paniculata-2.jpg'
    ],
    description: 'Kelreuterija (Koelreuteria paniculata) leti cveta krupnim žutim cvastima, a zatim razvija dekorativne čaure nalik lampionima. Otporna na sušu i vrućinu – za trgove, ulice i vrtove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 130,
    name: 'Japanski ariš (Larix kaempferi)',
    category: 'cetinari',
    categories: ['cetinari'],
    price: 0,
    image: '/images/larice-japonez-larix-kaempferi.jpg',
    images: [
      '/images/larice-japonez-larix-kaempferi.jpg',
      '/images/larice-japonez-larix-kaempferi-2.jpg'
    ],
    description: 'Japanski ariš (Larix kaempferi) je listopadni četinar plavkasto-zelenih iglica koje u jesen postaju zlatno-narandžaste. Brzo raste – za parkove, pošumljavanje i velike vrtove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Vlažna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -35°C'
    }
  },
  {
    id: 131,
    name: 'Magnolija Kobus (Magnolia kobus)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/magnolia-kobus.jpg',
    images: [
      '/images/magnolia-kobus.jpg',
      '/images/magnolia-kobus-2.jpg'
    ],
    description: 'Magnolija kobus u aprilu obilno cveta belim mirisnim cvetovima pre listanja. Otporna i robusna magnolija za parkove i vrtove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 132,
    name: 'Magnolija Susan (Magnolia \'Susan\')',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/magnolia-susan.jpg',
    images: [
      '/images/magnolia-susan.jpg',
      '/images/magnolia-susan-2.jpg'
    ],
    description: 'Magnolija \'Susan\' cveta kasnije od drugih magnolija, krupnim purpurno-ružičastim cvetovima, pa izbegava kasne mrazeve. Kompaktna, za manje vrtove i dvorišta.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 133,
    name: 'Jabuka – voćna stabla (Malus domestica)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/mar-pom-fructifer-malus-domestica.jpg',
    images: [
      '/images/mar-pom-fructifer-malus-domestica.jpg',
      '/images/mar-pom-fructifer-malus-domestica-2.jpg'
    ],
    description: 'Voćna stabla jabuke na visokom stablu: sorte \'Elstar\', \'Glorie van Holland\' i \'Gravensteiner\'. Za voćnjake, dvorišta, školske i javne vrtove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 134,
    name: 'Metasekvoja (Metasequoia glyptostroboides)',
    category: 'cetinari',
    categories: ['cetinari'],
    price: 0,
    image: '/images/metasequoia-glyptostroboides.jpg',
    images: [
      '/images/metasequoia-glyptostroboides.jpg',
      '/images/metasequoia-glyptostroboides-2.jpg'
    ],
    description: 'Metasekvoja je brzorastući listopadni četinar mekih svetlozelenih iglica koje u jesen postaju bakarno-narandžaste. Podnosi vlažna zemljišta – za parkove i obale.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Redovno zalivanje',
      soil: 'Vlažna, plodna zemlja',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 135,
    name: 'Beli dud (Morus alba)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/dud-alb-morus-alba.jpg',
    images: [
      '/images/dud-alb-morus-alba.jpg',
      '/images/dud-alb-morus-alba-2.jpg'
    ],
    description: 'Beli dud (Morus alba) je otporno drvo široke krune koje daje gustu senku i podnosi sušu i vrućinu. Sorta \'Fruitless\' ne daje plodove – idealna za trgove i parkinge.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 136,
    name: 'Crni grab (Ostrya carpinifolia)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/carpen-negru-ostrya-carpinifolia.jpg',
    images: [
      '/images/carpen-negru-ostrya-carpinifolia.jpg',
      '/images/carpen-negru-ostrya-carpinifolia-2.jpg'
    ],
    description: 'Crni grab (Ostrya carpinifolia) je otporno drvo sa plodovima nalik hmelju i žutom jesenjom bojom. Podnosi sušu i krečna zemljišta – za drvorede i parkove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Malo zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 137,
    name: 'Perzijsko gvozdeno drvo (Parrotia persica)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/parrotia-persica.jpg',
    images: [
      '/images/parrotia-persica.jpg',
      '/images/parrotia-persica-2.jpg'
    ],
    description: 'Parrotia persica ima jednu od najlepših jesenjih boja – žutu, narandžastu i crvenu – i dekorativnu koru koja se ljušti. Sorta \'Vanessa\' ima uspravnu krunu.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 138,
    name: 'Amurski plutnjak (Phellodendron amurense)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/phellodendron-amurense.jpg',
    images: [
      '/images/phellodendron-amurense.jpg',
      '/images/phellodendron-amurense-2.jpg'
    ],
    description: 'Amurski plutnjak ima mekanu, plutastu koru, perasto lišće i žutu jesenju boju. Veoma otporan na mraz, sušu i gradske uslove – za parkove i drvorede.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -35°C'
    }
  },
  {
    id: 139,
    name: 'Kanadska topola Robusta (Populus × canadensis \'Robusta\')',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/plop-canadian-robusta.jpg',
    images: [
      '/images/plop-canadian-robusta.jpg',
      '/images/plop-canadian-robusta-2.jpg'
    ],
    description: 'Topola \'Robusta\' je veoma brzorastuće drvo uspravne krune i bronzanih mladih listova. Za vetrozaštitne pojaseve, drvorede uz puteve i brzo ozelenjavanje.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -35°C'
    }
  },
  {
    id: 140,
    name: 'Jasika (Populus tremula)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/plop-tremurator-populus-tremula.jpg',
    images: [
      '/images/plop-tremurator-populus-tremula.jpg',
      '/images/plop-tremurator-populus-tremula-2.jpg'
    ],
    description: 'Jasika (Populus tremula) je domaća topola čiji okrugli listovi trepere na vetru, sa žutom jesenjom bojom. Sorta \'Erecta\' ima usku, stubastu krunu.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -40°C'
    }
  },
  {
    id: 141,
    name: 'Trešnja (Prunus avium)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/cires-prunus-avium.jpg',
    images: [
      '/images/cires-prunus-avium.jpg',
      '/images/cires-prunus-avium-2.jpg'
    ],
    description: 'Trešnja na visokom stablu: voćne sorte \'Kordia\', \'Lapins\', \'Regina\', \'Stella\', \'Van\', \'Hedelfinger\' i ukrasna \'Plena\' sa punjenim belim cvetovima bez plodova.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 142,
    name: 'Šljiva – voćna stabla (Prunus domestica)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/prun-prunus-domestica.jpg',
    images: [
      '/images/prun-prunus-domestica.jpg',
      '/images/prun-prunus-domestica-2.jpg'
    ],
    description: 'Šljiva na visokom stablu: sorte \'Opal\' (rana, slatka) i \'Victoria\' (krupni crveni plodovi). Za voćnjake, dvorišta i zajedničke vrtove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 143,
    name: 'Sremza (Prunus padus)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/malin-prunus-padus.jpg',
    images: [
      '/images/malin-prunus-padus.jpg',
      '/images/malin-prunus-padus-2.jpg'
    ],
    description: 'Sremza (Prunus padus) u maju cveta dugim, mirisnim belim grozdovima. Otporno domaće drvo za parkove, vlažna staništa i drvorede; sorte \'Watereri\' i \'Tiefurt\'.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Vlažna, plodna zemlja',
      hardiness: 'Otporna na mraz do -35°C'
    }
  },
  {
    id: 144,
    name: 'Virginijska sremza Canada Red (Prunus virginiana \'Canada Red\')',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/prunus-virginiana-canada-red.jpg',
    images: [
      '/images/prunus-virginiana-canada-red.jpg',
      '/images/prunus-virginiana-canada-red-2.jpg'
    ],
    description: 'Sremza \'Canada Red\' ima zeleno mlado lišće koje leti postaje tamno purpurno-crveno, i bele cvetne grozdove u maju. Malo, otporno drvo za ulice i vrtove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -35°C'
    }
  },
  {
    id: 145,
    name: 'Kavkaski krilati orah (Pterocarya fraxinifolia)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/pterocarya-fraxinifolia.jpg',
    images: [
      '/images/pterocarya-fraxinifolia.jpg',
      '/images/pterocarya-fraxinifolia-2.jpg'
    ],
    description: 'Pterocarya fraxinifolia je brzorastuće drvo široke krune sa dugim perastim lišćem i dugim visećim resama plodova. Za velike parkove i obale voda.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Često zalivanje',
      soil: 'Vlažna, plodna zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 146,
    name: 'Kruška – voćna stabla (Pyrus communis)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/par-pyrus-communis.jpg',
    images: [
      '/images/par-pyrus-communis.jpg'
    ],
    description: 'Kruška na visokom stablu: sorte \'Conference\', \'Saint Rémy\', \'Zoete Brederode\' i vrsta P. communis. Za voćnjake, dvorišta i javne vrtove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 147,
    name: 'Ukrasna kruška Chanticleer (Pyrus calleryana \'Chanticleer\')',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/par-decorativ-pyrus-calleryana-chanticleer.jpg',
    images: [
      '/images/par-decorativ-pyrus-calleryana-chanticleer.jpg',
      '/images/par-decorativ-pyrus-calleryana-chanticleer-2.jpg'
    ],
    description: 'Ukrasna kruška \'Chanticleer\' ima usku, pravilnu krunu, obilno belo cvetanje u aprilu i crveno-narandžastu jesenju boju. Jedno od najboljih stabala za uske ulice.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 148,
    name: 'Vrbolisna kruška (Pyrus salicifolia \'Pendula\')',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/par-pyrus-salicifolia-pendula.jpg',
    images: [
      '/images/par-pyrus-salicifolia-pendula.jpg',
      '/images/par-pyrus-salicifolia-pendula-2.jpg'
    ],
    description: 'Vrbolisna kruška \'Pendula\' ima srebrnasto, usko lišće i viseće grane. Elegantno malo drvo na stablu za vrtove, dvorišta i mediteranske sadnje.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 149,
    name: 'Cer (Quercus cerris)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/cer-quercus-cerris.jpg',
    images: [
      '/images/cer-quercus-cerris.jpg',
      '/images/cer-quercus-cerris-2.jpg'
    ],
    description: 'Cer (Quercus cerris) je brzorastući hrast široke krune, veoma otporan na sušu i vrućinu. Za parkove, drvorede i velike zelene površine.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 150,
    name: 'Krupnoplodni hrast (Quercus macrocarpa)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/stejar-quercus-macrocarpa.jpg',
    images: [
      '/images/stejar-quercus-macrocarpa.jpg',
      '/images/stejar-quercus-macrocarpa-2.jpg'
    ],
    description: 'Krupnoplodni hrast (Quercus macrocarpa) je izuzetno otporan hrast krupnog lišća i krupnih žireva sa resastom kapicom. Podnosi sušu, mraz i gradske uslove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -35°C'
    }
  },
  {
    id: 151,
    name: 'Močvarni hrast (Quercus palustris)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/stejar-de-mlastina-quercus-palustris.jpg',
    images: [
      '/images/stejar-de-mlastina-quercus-palustris.jpg',
      '/images/stejar-de-mlastina-quercus-palustris-2.jpg'
    ],
    description: 'Močvarni hrast (Quercus palustris) ima pravilnu kupastu krunu, duboko usečeno lišće i jarko crvenu jesenju boju. Za drvorede i parkove na kiselim do neutralnim zemljištima.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Kisela do neutralna zemlja',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 152,
    name: 'Kitnjak (Quercus petraea)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/gorun-quercus-petraea.jpg',
    images: [
      '/images/gorun-quercus-petraea.jpg',
      '/images/gorun-quercus-petraea-2.jpg'
    ],
    description: 'Kitnjak (Quercus petraea) je domaći, dugovečni hrast otporan na sušu i plitka zemljišta. Za parkove, pošumljavanje i velike zelene površine.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Malo zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 153,
    name: 'Lužnjak (Quercus robur)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/stejar-quercus-robur.jpg',
    images: [
      '/images/stejar-quercus-robur.jpg',
      '/images/stejar-quercus-robur-2.jpg'
    ],
    description: 'Lužnjak (Quercus robur) je simbol dugovečnosti – veličanstveno drvo za parkove i velike prostore. Stubasta sorta \'Fastigiata Koster\' pogodna je za ulice i uske prostore.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -35°C'
    }
  },
  {
    id: 154,
    name: 'Bagrem – ukrasne sorte (Robinia pseudoacacia)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/salcam-robinia-pseudoacacia.jpg',
    images: [
      '/images/salcam-robinia-pseudoacacia.jpg',
      '/images/salcam-robinia-pseudoacacia-2.jpg'
    ],
    description: 'Ukrasne sorte bagrema: \'Frisia\' sa zlatno-žutim lišćem, \'Bessoniana\' i \'Unifoliola\' bez trnja, i \'Nyírségi\'. Veoma otporne na sušu i siromašna zemljišta.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 155,
    name: 'Bela vrba Belders (Salix alba \'Belders\')',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/salcie-alba-salix-alba.jpg',
    images: [
      '/images/salcie-alba-salix-alba.jpg',
      '/images/salcie-alba-salix-alba-2.jpg'
    ],
    description: 'Bela vrba \'Belders\' je brzorastuća vrba uspravne krune i srebrnasto-zelenog lišća. Za obale, vlažne parkove i vetrozaštitne pojaseve.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Često zalivanje',
      soil: 'Vlažna, plodna zemlja',
      hardiness: 'Otporna na mraz do -35°C'
    }
  },
  {
    id: 156,
    name: 'Lovorolisna vrba (Salix pentandra)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/salcie-salix-pentandra.jpg',
    images: [
      '/images/salcie-salix-pentandra.jpg',
      '/images/salcie-salix-pentandra-2.jpg'
    ],
    description: 'Lovorolisna vrba (Salix pentandra) ima sjajno, tamnozeleno lišće nalik lovoru i mirisne žute rese u kasno proleće. Za vlažne parkove i obale.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Često zalivanje',
      soil: 'Vlažna, plodna zemlja',
      hardiness: 'Otporna na mraz do -35°C'
    }
  },
  {
    id: 157,
    name: 'Žalosna vrba (Salix × sepulcralis \'Chrysocoma\')',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/salcie-pletoasa-salix-chrysocoma.jpg',
    images: [
      '/images/salcie-pletoasa-salix-chrysocoma.jpg',
      '/images/salcie-pletoasa-salix-chrysocoma-2.jpg'
    ],
    description: 'Žalosna vrba \'Chrysocoma\' ima duge, zlatno-žute viseće grane do zemlje. Klasično drvo za obale jezera, reka i velike parkove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Često zalivanje',
      soil: 'Vlažna, plodna zemlja',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 158,
    name: 'Japanska sofora (Styphnolobium japonicum)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/salcam-japonez-styphnolobium-japonicum.jpg',
    images: [
      '/images/salcam-japonez-styphnolobium-japonicum.jpg',
      '/images/salcam-japonez-styphnolobium-japonicum-2.jpg'
    ],
    description: 'Japanska sofora (Styphnolobium / Sophora japonica) leti cveta krem-belim cvastima koje privlače pčele. Veoma otporna na sušu, vrućinu i gradske uslove; sorta \'Regent\' ima pravilnu krunu.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 159,
    name: 'Jarebika (Sorbus)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/scorus-sorbus.jpg',
    images: [
      '/images/scorus-sorbus.jpg',
      '/images/scorus-sorbus-2.jpg'
    ],
    description: 'Jarebika je otporno malo drvo sa belim cvetovima u maju i dekorativnim crvenim i narandžastim plodovima u jesen. Sorte S. aucuparia, \'Edulis\', \'Cardinal Royal\', \'Autumn Spire\', \'Dodong\', S. aria \'Magnifica\', S. intermedia i S. incana.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -35°C'
    }
  },
  {
    id: 160,
    name: 'Pčelinje drvo (Tetradium daniellii)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/tetradium-daniellii.jpg',
    images: [
      '/images/tetradium-daniellii.jpg',
      '/images/tetradium-daniellii-2.jpg'
    ],
    description: 'Pčelinje drvo (Tetradium daniellii) cveta u avgustu belim cvastima bogatim nektarom, kada malo drugih biljaka cveta. Malo do srednje drvo za parkove i vrtove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 161,
    name: 'Holandska lipa (Tilia × europaea)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/tei-olandez-tilia-europaea.jpg',
    images: [
      '/images/tei-olandez-tilia-europaea.jpg',
      '/images/tei-olandez-tilia-europaea-2.jpg'
    ],
    description: 'Holandska lipa je klasično drvo za drvorede i parkove, sa mirisnim cvetanjem u junu. Sorte \'Pallida\' i \'Euchlora\' (bez lepljivih vaši, sjajno lišće) i Tilia × flavescens \'Glenleven\'.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 162,
    name: 'Brest (Ulmus)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/ulm-ulmus.jpg',
    images: [
      '/images/ulm-ulmus.jpg',
      '/images/ulm-ulmus-2.jpg'
    ],
    description: 'Brestovi otporni na holandsku bolest bresta: \'Lutèce\', \'Vada\', \'Columella\', \'Clusius\', \'Pioneer\', domaći U. laevis i U. minor, i žalosni \'Camperdownii\' i \'Pendula\'. Za drvorede i parkove.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 163,
    name: 'Zelkova (Zelkova serrata)',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/zelkova-serrata.jpg',
    images: [
      '/images/zelkova-serrata.jpg',
      '/images/zelkova-serrata-2.jpg'
    ],
    description: 'Japanska zelkova (Zelkova serrata) ima elegantnu vazastu krunu i narandžasto-crvenu jesenju boju. Otporna na gradske uslove; sorte \'Green Vase\' i stubasta \'Fastigiata\'.',
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  }
];

export const categories = [
  { id: 'sve', nameKey: 'products.allCategories', name: 'Sve biljke' },
  { id: 'ziva-ograda', nameKey: 'products.zivaOgrada', name: 'Živa ograda' },
  { id: 'cetinari', nameKey: 'products.cetinari', name: 'Četinari' },
  { id: 'liscari', nameKey: 'products.liscari', name: 'Lišćari' },
  { id: 'siblje', nameKey: 'products.siblje', name: 'Šiblje' },
  { id: 'perene', nameKey: 'products.perene', name: 'Perene' }
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
