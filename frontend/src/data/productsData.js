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
  {
    id: 19,
    name: 'Bor na štapu',
    category: 'cetinari',
    categories: ['cetinari'],
    price: 2500,
    image: '/images/Bor na štapu cetinar.jpg',
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

  // ==================== LIŠĆARI (ID: 7-8) ====================
  {
    id: 7,
    name: 'Katalpa',
    category: 'liscari',
    categories: ['liscari'],
    price: 4000,
    showPrice: true,
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

  // ==================== ŠIBLJE (ID: 9-18, 20) ====================
  {
    id: 9,
    name: 'Lovor višnja',
    category: 'liscari',
    categories: ['liscari', 'ziva-ograda'],
    price: 360,
    showPrice: true,
    image: '/images/lovorvisnja.jpeg',
    images: [
      '/images/lovorvisnja.jpeg',
      '/images/IMG_5327.jpeg',
      '/images/lovor1.jpeg',
      '/images/lovor2.jpeg',
      '/images/lovor3.jpeg',
      '/images/lovor4.jpeg'
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
    price: 3500,
    showPrice: true,
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
      '/images/heuchera2.jpeg',
      '/images/heuchera3.jpg'
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
    image: '/images/Spirea japonica \'Little Princes\' - ukrasno šiblje.jpg',
    images: [
      '/images/Spirea japonica \'Little Princes\' - ukrasno šiblje.jpg',
      '/images/spirea.jpeg',
      '/images/Spirea japonica.jpg'
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
    image: '/images/Božur (Paeonia) 1 siblje.jpg',
    images: [
      '/images/Božur (Paeonia) 1 siblje.jpg',
      '/images/Božur (Paeonia) 2 siblje.jpg'
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
    image: '/images/Ajuga reptans perena.jpg',
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
    image: '/images/Astilba isto.jpg',
    images: [
      '/images/Astilba isto.jpg',
      '/images/Astilba sp. perena.jpg'
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
    image: '/images/Carex morrowi \'Ice Dance\' -perena.jpg',
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
    image: '/images/Festuca glauca- plava trava.jpg',
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
    image: '/images/Hemerocalis sp. (narandžasti i žuti cvet).jpg',
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
    image: '/images/Hosta mix. perena za senku.jpg',
    images: [
      '/images/Hosta mix. perena za senku.jpg',
      '/images/Hosta mix isto.jpg'
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
    image: '/images/Iris - perunika (beli i ljubičasti cvet) perena.jpg',
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
    image: '/images/Kniphophia uvaria, narandžasti cvet, perena.jpg',
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
    image: '/images/Ophiopogon japonicus ukrasna trava.jpg',
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
    image: '/images/Physostegia alba - perena.jpg',
    images: [
      '/images/Physostegia alba - perena.jpg',
      '/images/Physostegia alba.jpg'
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
    image: '/images/Sedum angelina isto.jpg',
    images: [
      '/images/Sedum angelina isto.jpg',
      '/images/Sedum angelina perena.jpg'
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
    image: '/images/Isto sedum hybridum samo pojedinačna slika.jpg',
    images: [
      '/images/Isto sedum hybridum samo pojedinačna slika.jpg',
      '/images/Sedum hybridum - perena.jpg'
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
    image: '/images/sedum rupestre \'blue\' perena.jpg',
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
    image: '/images/Sedum S. Watson perena.jpg',
    images: [
      '/images/Sedum S. Watson perena.jpg',
      '/images/Sedum S. Watson isto.jpg'
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
    image: '/images/Sedum spectabile - debela koka.jpg',
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
    image: '/images/zekineusi.jpg',
    images: [
      '/images/zekineusi.jpg',
      '/images/Stachys lanata - zekine uši.jpg'
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
    image: '/images/maslina1.jpeg',
    images: [
      '/images/maslina1.jpeg',
      '/images/maslina2.jpeg',
      '/images/maslina3.jpeg',
      '/images/maslina5.jpeg'
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
    image: '/images/Bonsai.jpeg',
    description: 'Bonsai je umetnost uzgoja minijaturnog drveća. Elegantan i jedinstven, savršen poklon i ukras za svaki enterijer ili terasu. Zahteva pažljivu negu i oblikovanje.',
    inStock: true,
    details: {
      height: 'Minijaturne forme',
      sunlight: 'Sunce do polusenka',
      watering: 'Redovno zalivanje',
      soil: 'Specijalni supstrat za bonsai',
      hardiness: 'Zavisi od vrste'
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
