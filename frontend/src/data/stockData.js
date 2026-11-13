// Sorte i dimenzije drveća na stanju (izvor: Stock youngtrees 13-11-2026.xlsx) - tabela na stranici proizvoda.
// Ovaj fajl NE SME imati import-e, jer ga prerender skripta ucitava direktno u Node-u.
// Kod dimenzije: '6-8 HO' = obim stabla 6-8 cm (meri se na 1 m od tla), visokostablo; '175/200' = visina u cm;
// GEV = razgranato od osnove (heister); ST225 = visina stabla 225 cm; 3xv = 3x presađivano; 2J = 2 godine;
// KR2 = kruna 2 godine; H250 = visina 250 cm. Kolicine se namerno NE prikazuju (menjaju se).

export const STOCK_DATE = '2026-11-13';

export const stockLabels = {
  ro: { title: 'Soiuri și dimensiuni disponibile', cultivar: 'Soi', sizes: 'Dimensiuni',
    note: 'Circumferința tulpinii (circ.) se măsoară la 1 m de la sol; înălțimea este în cm. Cantitățile și prețurile se confirmă în oferta personalizată.' },
  en: { title: 'Available cultivars and sizes', cultivar: 'Cultivar', sizes: 'Sizes',
    note: 'Girth is the trunk circumference measured 1 m above the ground; heights are in cm. Quantities and prices are confirmed in your personalised quote.' },
  de: { title: 'Verfügbare Sorten und Größen', cultivar: 'Sorte', sizes: 'Größen',
    note: 'StU = Stammumfang in 1 m Höhe; Höhenangaben in cm. Mengen und Preise bestätigen wir in Ihrem individuellen Angebot.' }
};

const sizeWords = {
  ro: { girth: 'circ.', height: 'înălțime', HO: 'tulpină înaltă', GEV: 'ramificat de la bază', ST: n => `tulpină ${n} cm`,
    J: n => (n === '1' ? '1 an' : `${n} ani`), xv: n => `transplantat de ${n} ori`, KR: n => `coroană de ${n} ani`, H: n => `înălțime ${n} cm` },
  en: { girth: 'girth', height: 'height', HO: 'standard', GEV: 'feathered', ST: n => `clear stem ${n} cm`,
    J: n => (n === '1' ? '1 yr' : `${n} yrs`), xv: n => `${n}× transplanted`, KR: n => `${n}-yr crown`, H: n => `height ${n} cm` },
  de: { girth: 'StU', height: 'Höhe', HO: 'Hochstamm', GEV: 'Heister', ST: n => `Stammhöhe ${n} cm`,
    J: n => `${n}-jährig`, xv: n => `${n}× verpflanzt`, KR: n => `Krone ${n}-jährig`, H: n => `Höhe ${n} cm` }
};

// '8-10 ST225 3xv' -> 'circ. 8–10 cm, tulpină 225 cm, transplantat de 3 ori'
export const formatSize = (code, lang) => {
  const w = sizeWords[lang] || sizeWords.ro;
  const [main, ...tokens] = code.split(' ');
  const range = main.replace(/[-/]/, '–');
  const parts = [main.includes('/') ? `${w.height} ${range} cm` : `${w.girth} ${range} cm`];
  for (const tok of tokens) {
    let m;
    if (tok === 'HO' || tok === 'GEV') parts.push(w[tok]);
    else if ((m = tok.match(/^ST(\d+)$/))) parts.push(w.ST(m[1]));
    else if ((m = tok.match(/^KR(\d)$/))) parts.push(w.KR(m[1]));
    else if ((m = tok.match(/^(\d)J$/))) parts.push(w.J(m[1]));
    else if ((m = tok.match(/^(\d)xv$/))) parts.push(w.xv(m[1]));
    else if ((m = tok.match(/^H(\d+)$/))) parts.push(w.H(m[1]));
    else parts.push(tok);
  }
  return parts.join(', ');
};

// id proizvoda -> [[sorta, [kodovi dimenzija]]]
export const productStock ={
  7: [
    ["Catalpa bignonioides", ["12-14 HO", "14-16 HO"]],
    ["Catalpa bignonioides 'Nana'", ["14-16", "16-18 ST220 3xv", "18-20 ST225 3xv", "20-25 ST225 3xv"]]
  ],
  45: [
    ["Prunus serrula", ["6-8 HO", "8-10 HO"]],
    ["Prunus × yedoensis", ["6-8 HO", "175/200"]],
    ["Prunus 'Accolade'", ["175/200", "200/250 GEV"]],
    ["Prunus 'Spire'", ["175/200", "200/250 GEV"]],
    ["Prunus 'Umineko'", ["6-8 HO", "175/200 GEV", "200/250 GEV", "200/250 GEV 2J"]],
    ["Prunus sargentii 'Rancho'", ["175/200", "200/250"]],
    ["Prunus serrulata 'Amanogawa'", ["6-8 HO", "175/200", "200/250 GEV"]],
    ["Prunus serrulata 'Fugenzo'", ["6-8 HO", "8-10 HO", "10-12 HO", "175/200 GEV", "200/250 GEV"]],
    ["Prunus serrulata 'Kanzan'", ["6-8 HO", "6-8 ST225", "8-10 HO", "12-14 ST225", "175/200"]],
    ["Prunus serrulata 'Shirotae'", ["6-8 HO", "8-10 HO", "10-12 HO"]],
    ["Prunus serrulata 'Shōgetsu'", ["6-8 HO"]],
    ["Prunus serrulata 'Sunset Boulevard'", ["175/200 GEV"]],
    ["Prunus serrulata 'Taihaku'", ["6-8 HO", "8-10 HO", "10-12 HO"]],
    ["Prunus subhirtella 'Autumnalis Rosea'", ["8-10 HO", "10-12 HO", "12-14 HO"]]
  ],
  50: [
    ["Albizia julibrissin", ["6-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "200/250"]],
    ["Albizia julibrissin 'Ombrella'", ["6-8 HO", "8-10 HO", "10-12 HO", "200/250"]]
  ],
  52: [
    ["Tilia platyphyllos", ["6-8 HO", "8-10 HO", "10-12 HO"]],
    ["Tilia platyphyllos 'Rubra'", ["10-12 HO", "175/200"]],
    ["Tilia platyphyllos 'Örebro'", ["6-8 HO", "10-12 HO", "200/250"]]
  ],
  53: [
    ["Tilia cordata", ["8-10 HO", "10-12 HO", "12-14 3xv", "14-16 3xv"]],
    ["Tilia cordata 'Greenspire'", ["6-8 HO", "8-10 HO", "10-12 HO", "175/200", "200/250"]],
    ["Tilia cordata 'Rancho'", ["8-10 HO", "175/200", "200/250 GEV"]],
    ["Tilia cordata 'Winter Orange'", ["6-8 HO", "175/200", "200/250 2J"]]
  ],
  54: [
    ["Tilia tomentosa", ["10-12 HO"]],
    ["Tilia tomentosa 'Brabant'", ["6-8 HO", "8-10 HO", "10-12 HO", "175/200"]]
  ],
  56: [
    ["Quercus rubra", ["6-8 HO"]]
  ],
  57: [
    ["Liquidambar styraciflua", ["6-8 HO", "8-10 HO", "10-12 HO", "10-12 HO GEV", "12-14 HO", "175/200", "200/250", "200/250 2J"]],
    ["Liquidambar styraciflua 'Lane Roberts'", ["8-10 HO", "10-12 HO", "12-14 HO"]],
    ["Liquidambar styraciflua 'Worplesdon'", ["6-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "12-14 HO GEV", "14-16 HO GEV", "175/200", "200/250"]]
  ],
  58: [
    ["Liriodendron tulipifera", ["6-8 HO", "8-10 HO", "8-10 HO GEV", "10-12 HO", "12-14 HO", "14-16 HO", "18-20 3xv", "175/200", "200/250 GEV"]],
    ["Liriodendron tulipifera 'Aureomarginatum'", ["6-8 HO", "8-10 HO", "10-12 HO"]]
  ],
  60: [
    ["Magnolia × soulangeana 'Heaven Scent'", ["6-8 GEV", "8-10 HO GEV", "10-12 HO GEV", "12-14 HO GEV"]]
  ],
  61: [
    ["Prunus cerasifera 'Nigra'", ["6-8 GEV", "175/200 GEV", "200/250 GEV"]]
  ],
  63: [
    ["Acer rubrum", ["8-10 HO"]],
    ["Acer rubrum 'Autumn Flame'", ["6-8 HO", "8-10 HO", "200/250"]],
    ["Acer rubrum 'Brandywine'", ["6-8 HO", "7-8 HO"]],
    ["Acer rubrum 'October Glory'", ["6-8 HO", "7-8", "200/250"]],
    ["Acer rubrum 'Red Pointe'", ["8-10 HO", "10-12 HO", "200/250"]],
    ["Acer rubrum 'Red Sunset'", ["6-8 HO", "7-8 HO", "8-10 HO", "200/250"]],
    ["Acer rubrum 'Scanlon'", ["6-8 HO", "7-8 HO", "8-10 HO", "200/250"]],
    ["Acer rubrum 'Summer Red'", ["6-8 HO", "8-10 HO", "10-12 HO"]],
    ["Acer rubrum 'Sun Valley'", ["6-8 HO", "7-8 HO", "8-10 HO"]]
  ],
  64: [
    ["Platanus × hispanica (× acerifolia)", ["6-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "14-16 HO", "200/250 2J"]],
    ["Platanus × hispanica 'Alphen's Globe'", ["8-10 ST220", "8-10 ST225", "10-12 ST225", "12-14 ST220", "12-14 ST225"]]
  ],
  65: [
    ["Robinia pseudoacacia 'Umbraculifera'", ["6-8 ST225", "8-10 ST225", "10-12 ST225", "12-14 ST225"]]
  ],
  66: [
    ["Betula pendula", ["6-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "14-16 HO", "175/200", "200/250"]],
    ["Betula 'Royal Frost'", ["6-8 GEV", "8-10 HO GEV", "200/250 GEV"]],
    ["Betula pendula 'Fastigiata'", ["7-8 HO", "8-10 HO GEV"]],
    ["Betula pendula 'Laciniata'", ["10-12 HO"]],
    ["Betula pendula 'Purpurea'", ["6-8 HO", "8-10 HO"]],
    ["Betula pendula 'Youngii'", ["6-8 GEV", "8-10 HO GEV"]],
    ["Betula pendula 'Zwitsers Glorie'", ["10-12 HO", "175/200"]]
  ],
  74: [
    ["Fraxinus ornus 'Louisa Lady'", ["6-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "200/250"]],
    ["Fraxinus ornus 'Paus Johannes-Paulus II'", ["175/200"]]
  ],
  75: [
    ["Carpinus betulus 'A. Beeckman'", ["6-8 HO", "8-10 HO", "10-12 HO", "200/250"]],
    ["Carpinus betulus 'Fastigiata'", ["6-8 GEV", "6-8 HO", "8-10 HO", "8-10 HO GEV", "10-12 HO", "10-12 HO GEV", "12-14 HO", "200/250"]],
    ["Carpinus betulus 'Frans Fontaine'", ["6-8 GEV", "6-8 HO", "8-10 HO", "8-10 HO GEV", "200/250"]],
    ["Carpinus betulus 'Lucas'", ["6-8 GEV", "6-8 HO", "8-10 HO", "8-10 HO GEV", "10-12 HO", "10-12 HO GEV", "12-14 HO", "12-14 HO GEV", "14-16 HO", "200/250"]]
  ],
  76: [
    ["Acer saccharinum", ["6-8 HO", "7-8 HO", "8-10 HO", "10-12 HO", "175/200"]],
    ["Acer saccharinum 'Born's Gracious'", ["10-12 HO"]],
    ["Acer saccharinum 'Elegant'", ["6-8 HO", "8-10 HO", "10-12 HO"]],
    ["Acer saccharinum 'Laciniatum Wieri'", ["8-10 HO", "10-12 HO", "12-14 HO"]],
    ["Acer saccharinum 'Pyramidale'", ["6-8 HO", "8-10 HO", "10-12 HO", "12-14 HO"]]
  ],
  78: [
    ["Cercis siliquastrum", ["8-10 HO", "175/200 GEV", "200/250 GEV"]]
  ],
  79: [
    ["Acer platanoides", ["6-8 HO", "7-8 HO", "8-10 HO", "10-12 HO", "175/200", "200/250"]],
    ["Acer platanoides 'Cleveland'", ["6-8 GEV", "6-8 HO", "7-8 HO", "200/250"]],
    ["Acer platanoides 'Columnare'", ["6-8 HO", "7-8 HO", "8-10 HO", "10-12 HO", "175/200", "200/250", "200/250 GEV", "200/250 GEV 2J"]],
    ["Acer platanoides 'Deborah'", ["6-8 HO", "8-10 HO", "10-12 HO"]],
    ["Acer platanoides 'Drummondii'", ["6-8 HO", "7-8 HO", "8-10 HO", "175/200", "200/250"]],
    ["Acer platanoides 'Emerald Queen'", ["6-8 HO", "7-8 HO", "8-10 HO", "8-10 HO GEV", "10-12 HO", "175/200"]],
    ["Acer platanoides 'Fairview'", ["6-8 HO", "8-10 HO", "8-10 HO GEV", "10-12 HO", "175/200"]],
    ["Acer platanoides 'Farlake's Green'", ["6-8 GEV", "6-8 HO", "7-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "175/200", "200/250 GEV"]],
    ["Acer platanoides 'Globosum'", ["6-8 ST180", "6-8 ST200", "6-8 ST225", "6-8 ST250", "7-8 HO", "8-10 ST200", "8-10 ST220", "8-10 ST225", "8-10 ST250", "10-12 ST225", "10-12 ST250"]],
    ["Acer platanoides 'Peterse Grüne'", ["8-10 HO"]],
    ["Acer platanoides 'Princeton Gold'", ["6-8 HO", "8-10 HO", "200/250"]],
    ["Acer platanoides 'Royal Red'", ["6-8 HO", "8-10 HO", "150/175", "175/200", "200/250"]]
  ],
  80: [
    ["Malus 'Braendkjaer'", ["6-8 HO", "8-10 HO", "10-12 HO"]],
    ["Malus 'Butterball'", ["8-10 HO"]],
    ["Malus 'Evereste'", ["6-8 HO", "8-10 HO", "10-12 HO", "175/200", "200/250"]],
    ["Malus 'John Downie'", ["8-10 HO", "175/200", "200/250"]],
    ["Malus 'Mokum'", ["6-8 HO", "12-14 HO", "175/200", "200/250 GEV 2J"]],
    ["Malus 'Red Sentinel'", ["6-8 HO", "8-10 HO", "175/200"]],
    ["Malus 'Scarlet'", ["6-8 HO", "200/250"]],
    ["Malus 'Veitch's Scarlet'", ["6-8 HO", "8-10 HO"]]
  ],
  95: [
    ["Acer buergerianum", ["6-8 HO", "7-8", "8-10 HO"]]
  ],
  96: [
    ["Acer campestre", ["6-8 HO", "8-10 HO", "10-12 HO", "200/250"]],
    ["Acer campestre 'Elegant'", ["7-8", "200/250"]],
    ["Acer campestre 'Elsrijk'", ["6-8 HO", "175/200 GEV", "200/250"]],
    ["Acer campestre 'Green Column'", ["6-8 HO", "10-12 HO GEV"]],
    ["Acer campestre 'Huibers Elegant'", ["6-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "200/250 GEV"]],
    ["Acer campestre 'Lienco'", ["6-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "200/250"]],
    ["Acer campestre 'Marjolein'", ["200/250 GEV"]],
    ["Acer campestre 'Pasqualli'", ["200/250 GEV"]],
    ["Acer campestre 'Red Shine'", ["6-8 HO"]]
  ],
  97: [
    ["Acer × freemanii 'Armstrong'", ["6-8 HO", "7-8", "7-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "175/200", "200/250"]],
    ["Acer × freemanii 'Autumn Blaze'", ["6-8 HO", "7-8", "8-10 HO", "10-12 HO", "175/200", "200/250"]],
    ["Acer × freemanii 'Celebration' ('Celzam')", ["6-8 HO", "7-8 HO", "8-10 HO", "10-12 HO"]]
  ],
  98: [
    ["Acer negundo 'Flamingo'", ["8-10 HO", "10-12 HO", "200/250"]]
  ],
  99: [
    ["Acer truncatum × platanoides 'Norwegian Sunset' ('Keithsform')", ["6-8 HO", "7-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "200/250"]],
    ["Acer truncatum × platanoides 'Pacific Sunset' ('Warrenred')", ["6-8 HO", "8-10 HO", "10-12 HO", "12-14 HO"]]
  ],
  100: [
    ["Acer pseudoplatanus", ["6-8 HO", "7-8 HO", "200/250"]],
    ["Acer pseudoplatanus 'Atropurpureum'", ["6-8 GEV", "8-10 HO", "175/200", "200/250"]],
    ["Acer pseudoplatanus 'Bruchem'", ["6-8 GEV", "8-10 HO", "175/200", "200/250"]]
  ],
  101: [
    ["Acer tataricum subsp. ginnala", ["175/200", "200/250"]]
  ],
  102: [
    ["Acer × zoeschense 'Annae'", ["6-8 HO"]]
  ],
  103: [
    ["Alnus cordata", ["6-8 GEV"]]
  ],
  104: [
    ["Alnus glutinosa", ["6-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "14-16 HO"]],
    ["Alnus glutinosa 'Imperialis'", ["6-8 HO", "8-10 HO", "10-12 HO"]],
    ["Alnus glutinosa 'Laciniata'", ["12-14 HO"]]
  ],
  105: [
    ["Alnus × spaethii", ["6-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "14-16 HO", "200/250"]]
  ],
  106: [
    ["Amelanchier lamarckii", ["8-10 HO"]],
    ["Amelanchier arborea 'Robin Hill'", ["6-8 HO", "10-12 HO", "12-14 HO"]],
    ["Amelanchier laevis 'Snowflakes'", ["6-8 HO"]]
  ],
  107: [
    ["Betula albosinensis 'Fascination'", ["6-8 HO", "7-8 HO", "8-10 HO", "10-12 HO", "175/200"]]
  ],
  108: [
    ["Betula nigra", ["6-8 HO", "7-8 HO", "8-10 HO", "10-12 HO", "175/200", "200/250"]]
  ],
  109: [
    ["Betula pubescens", ["6-8 HO", "10-12 HO", "12-14 HO", "14-16 HO"]]
  ],
  110: [
    ["Betula utilis 'Doorenbos'", ["6-8 GEV", "6-8 HO", "8-10 HO", "8-10 HO GEV", "10-12 HO", "12-14 HO", "14-16 HO", "175/200 GEV", "200/250"]]
  ],
  111: [
    ["Carpinus betulus", ["6-8 GEV", "6-8 HO", "7-8 HO", "8-10 HO", "10-12 HO", "12-14 3xv", "12-14 HO", "14-16 3xv", "14-16 HO", "16-18 3xv", "18-20 3xv", "200/250"]]
  ],
  112: [
    ["Carpinus japonica", ["175/200"]]
  ],
  113: [
    ["Castanea sativa", ["6-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "14-16 3xv", "14-16 HO"]]
  ],
  114: [
    ["Celtis australis", ["175/200"]],
    ["Celtis occidentalis", ["175/200", "200/250"]]
  ],
  115: [
    ["Cercidiphyllum japonicum", ["200/250 GEV"]]
  ],
  116: [
    ["Cercis canadensis", ["6-8 HO", "8-10 HO", "175/200", "200/250"]]
  ],
  117: [
    ["Corylus colurna", ["6-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "175/200"]]
  ],
  118: [
    ["Crataegus monogyna", ["6-8 HO"]],
    ["Crataegus laevigata 'Paul's Scarlet'", ["8-10 HO", "10-12 HO"]],
    ["Crataegus persimilis 'Splendens'", ["6-8 HO", "8-10 HO", "200/250"]],
    ["Crataegus × lavalleei 'Carrierei'", ["6-8 HO"]]
  ],
  119: [
    ["Davidia involucrata", ["6-8 HO"]]
  ],
  120: [
    ["Fagus sylvatica", ["6-8 GEV", "6-8 HO", "8-10 HO", "8-10 HO GEV", "10-12 HO GEV"]],
    ["Fagus sylvatica 'Atropunicea'", ["6-8 GEV", "7-8 HO", "8-10 HO GEV"]],
    ["Fagus sylvatica 'Dawyck Purple'", ["6-8 GEV", "8-10 HO GEV"]],
    ["Fagus sylvatica 'Dawyck'", ["8-10 HO GEV"]],
    ["Fagus sylvatica 'Purpurea Pendula'", ["6-8 GEV", "8-10 HO GEV"]]
  ],
  121: [
    ["Fraxinus americana 'Autumn Applause'", ["6-8 HO", "8-10 HO"]],
    ["Fraxinus americana 'Autumn Purple'", ["6-8 HO", "8-10 HO", "200/250"]],
    ["Fraxinus americana 'Skyline'", ["8-10 HO", "200/250"]]
  ],
  122: [
    ["Fraxinus angustifolia 'Raywood'", ["7-8 HO", "12-14 HO", "175/200", "200/250"]]
  ],
  123: [
    ["Fraxinus excelsior", ["10-12 HO"]],
    ["Fraxinus excelsior 'Altena'", ["6-8 HO", "8-10 HO"]],
    ["Fraxinus excelsior 'Atlas'", ["6-8 HO", "175/200", "200/250"]],
    ["Fraxinus excelsior 'Jaspidea'", ["175/200", "200/250"]]
  ],
  124: [
    ["Fraxinus pennsylvanica 'Summit'", ["6-8 HO", "175/200", "200/250"]]
  ],
  125: [
    ["Ginkgo biloba", ["6-8 HO", "8-10 HO"]]
  ],
  126: [
    ["Gleditsia triacanthos f. inermis", ["175/200", "200/250"]],
    ["Gleditsia triacanthos 'Rubylace'", ["6-8 HO", "8-10 HO"]],
    ["Gleditsia triacanthos 'Speczam'", ["10-12 HO"]]
  ],
  127: [
    ["Juglans nigra", ["10-12 HO", "12-14 HO", "175/200", "200/250"]]
  ],
  128: [
    ["Juglans regia", ["6-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "200/250"]]
  ],
  129: [
    ["Koelreuteria paniculata", ["8-10 HO"]]
  ],
  130: [
    ["Larix kaempferi", ["6-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "175/200", "200/250"]]
  ],
  131: [
    ["Magnolia kobus", ["6-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "14-16 HO"]]
  ],
  132: [
    ["Magnolia 'Susan'", ["6-8 GEV", "8-10 HO GEV", "10-12 HO GEV", "12-14 HO GEV"]]
  ],
  133: [
    ["Malus domestica 'Elstar'", ["6-8 HO", "8-10 HO"]],
    ["Malus domestica 'Glorie van Holland'", ["6-8 HO", "7-8 HO"]],
    ["Malus domestica 'Gravensteiner'", ["6-8 HO", "8-10 HO"]]
  ],
  134: [
    ["Metasequoia glyptostroboides", ["6-8 GEV", "8-10 HO", "175/200", "200/250"]]
  ],
  135: [
    ["Morus alba", ["14-16 HO", "175/200", "200/250"]],
    ["Morus alba 'Fruitless'", ["8-10 ST220"]]
  ],
  136: [
    ["Ostrya carpinifolia", ["6-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "175/200", "200/250"]]
  ],
  137: [
    ["Parrotia persica", ["6-8 GEV", "6-8 HO", "8-10 HO", "8-10 HO GEV", "10-12 HO", "10-12 HO GEV", "200/250"]],
    ["Parrotia persica 'Vanessa'", ["6-8 GEV", "8-10 HO"]]
  ],
  138: [
    ["Phellodendron amurense", ["8-10 HO", "10-12 HO", "12-14 HO", "175/200", "200/250"]]
  ],
  139: [
    ["Populus × canadensis 'Robusta'", ["8-10 HO"]]
  ],
  140: [
    ["Populus tremula", ["6-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "200/250"]],
    ["Populus tremula 'Erecta'", ["175/200", "200/250"]]
  ],
  141: [
    ["Prunus avium 'Hedelfinger Riesenkirsche'", ["8-10 HO"]],
    ["Prunus avium 'Kordia'", ["6-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "14-16 HO"]],
    ["Prunus avium 'Lapins'", ["6-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "14-16 HO"]],
    ["Prunus avium 'Plena'", ["8-10 HO", "14-16 HO", "200/250", "200/250 GEV"]],
    ["Prunus avium 'Regina'", ["8-10 HO", "10-12 HO", "12-14 HO", "14-16 HO"]],
    ["Prunus avium 'Stella'", ["8-10 HO", "10-12 HO"]],
    ["Prunus avium 'Van'", ["8-10 HO", "10-12 HO"]]
  ],
  142: [
    ["Prunus domestica 'Opal'", ["6-8 HO", "8-10 HO", "10-12 HO"]],
    ["Prunus domestica 'Victoria'", ["6-8 HO", "8-10 HO"]]
  ],
  143: [
    ["Prunus padus", ["6-8 HO", "10-12 HO", "175/200", "200/250"]],
    ["Prunus padus 'Tiefurt'", ["6-8 HO", "10-12 HO", "12-14 3xv", "12-14 HO", "14-16 3xv"]],
    ["Prunus padus 'Watereri'", ["8-10 HO", "10-12 HO", "12-14 HO", "14-16 3xv", "175/200"]]
  ],
  144: [
    ["Prunus virginiana 'Canada Red'", ["8-10 HO"]]
  ],
  145: [
    ["Pterocarya fraxinifolia", ["6-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "14-16 HO", "175/200", "200/250"]]
  ],
  146: [
    ["Pyrus communis", ["6-8 HO", "8-10 HO"]],
    ["Pyrus communis 'Conference'", ["6-8 HO", "7-8 HO", "8-10 HO", "10-12 HO"]],
    ["Pyrus communis 'Saint Rémy'", ["6-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "200/250"]],
    ["Pyrus communis 'Zoete Brederode'", ["6-8 HO", "8-10 HO", "10-12 HO"]]
  ],
  147: [
    ["Pyrus calleryana 'Chanticleer'", ["6-8 HO", "7-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "14-16 2xv", "14-16 HO", "175/200"]]
  ],
  148: [
    ["Pyrus salicifolia 'Pendula'", ["6-8 GEV", "6-8 ST180", "6-8 ST200", "6-8 ST225", "8-10 ST200", "8-10 ST225", "8-10 ST225 KR2", "10-12 ST225 KR2", "12-14 ST225", "200/250 GEV 2J"]]
  ],
  149: [
    ["Quercus cerris", ["6-8 HO", "7-8 HO", "10-12 HO", "12-14 HO", "200/250"]]
  ],
  150: [
    ["Quercus macrocarpa", ["6-8 HO"]]
  ],
  151: [
    ["Quercus palustris", ["6-8 HO"]]
  ],
  152: [
    ["Quercus petraea", ["10-12 HO"]]
  ],
  153: [
    ["Quercus robur", ["8-10 HO", "10-12 HO", "200/250"]],
    ["Quercus robur 'Fastigiata Koster'", ["6-8 HO", "8-10 HO", "10-12 HO", "200/250"]]
  ],
  154: [
    ["Robinia pseudoacacia 'Bessoniana'", ["6-8 HO", "10-12 HO", "14-16 HO"]],
    ["Robinia pseudoacacia 'Frisia'", ["6-8 HO", "8-10 HO", "10-12 HO"]],
    ["Robinia pseudoacacia 'Nyírségi'", ["10-12 HO", "12-14 HO", "14-16 HO"]],
    ["Robinia pseudoacacia 'Unifoliola'", ["8-10 HO", "10-12 HO", "12-14 HO", "14-16 HO"]]
  ],
  155: [
    ["Salix alba 'Belders'", ["6-8 HO", "12-14 HO", "14-16 HO"]]
  ],
  156: [
    ["Salix pentandra", ["6-8 GEV", "6-8 HO", "175/200", "200/250"]]
  ],
  157: [
    ["Salix × sepulcralis 'Chrysocoma'", ["6-8 HO 1J H250", "8-10 HO", "10-12 HO", "12-14 HO", "175/200 1J"]]
  ],
  158: [
    ["Styphnolobium japonicum (Sophora japonica)", ["6-8 HO", "7-8 HO", "10-12 HO", "12-14 HO", "175/200", "200/250"]],
    ["Styphnolobium japonicum 'Regent' (Sophora)", ["8-10 HO"]]
  ],
  159: [
    ["Sorbus aucuparia", ["6-8 HO", "7-8 HO", "8-10 HO", "12-14 3xv", "14-16 3xv"]],
    ["Sorbus incana", ["6-8 HO"]],
    ["Sorbus aria 'Magnifica'", ["6-8 HO"]],
    ["Sorbus aucuparia 'Autumn Spire'", ["6-8 HO"]],
    ["Sorbus aucuparia 'Cardinal Royal'", ["6-8 HO"]],
    ["Sorbus aucuparia 'Edulis'", ["6-8 HO", "7-8 HO", "8-10 HO"]],
    ["Sorbus commixta 'Dodong'", ["6-8 HO", "10-12 HO", "12-14 HO", "200/250"]],
    ["Sorbus intermedia 'Brouwers'", ["6-8 HO"]]
  ],
  160: [
    ["Tetradium daniellii", ["6-8 HO", "10-12 HO", "12-14 HO", "175/200", "200/250"]]
  ],
  161: [
    ["Tilia × europaea 'Euchlora'", ["6-8 HO", "8-10 HO", "10-12 HO", "175/200", "200/250"]],
    ["Tilia × europaea 'Pallida'", ["6-8 HO", "7-8 HO", "8-10 HO", "175/200", "200/250", "200/250 2J"]],
    ["Tilia × flavescens 'Glenleven'", ["6-8 HO", "8-10 HO", "175/200", "200/250"]]
  ],
  162: [
    ["Ulmus laevis", ["6-8 HO", "8-10 HO", "10-12 HO", "12-14 HO", "14-16 HO"]],
    ["Ulmus minor", ["6-8 HO"]],
    ["Ulmus 'Clusius'", ["10-12 HO"]],
    ["Ulmus 'Columella'", ["6-8 GEV", "8-10 HO", "10-12 HO", "175/200"]],
    ["Ulmus 'Lutèce'", ["10-12 HO", "12-14 HO", "14-16 3xv", "16-18 3xv", "18-20 3xv"]],
    ["Ulmus 'Vada'", ["6-8 HO", "8-10 HO"]],
    ["Ulmus glabra 'Camperdownii'", ["8-10 ST225", "10-12 ST225"]],
    ["Ulmus glabra 'Pendula'", ["12-14 ST225"]],
    ["Ulmus × hollandica 'Pioneer'", ["8-10 HO", "10-12 HO"]]
  ],
  163: [
    ["Zelkova serrata", ["6-8 GEV", "6-8 HO", "8-10 HO", "8-10 HO GEV", "10-12 HO", "12-14 HO", "175/200", "200/250", "200/250 2J"]],
    ["Zelkova serrata 'Fastigiata'", ["10-12 HO", "12-14 3xv", "14-16 2xv", "16-18 3xv", "18-20 3xv"]],
    ["Zelkova serrata 'Green Vase'", ["6-8 HO", "10-12 HO", "200/250"]]
  ]
};
