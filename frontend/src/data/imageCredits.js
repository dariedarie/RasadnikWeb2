// Autori slika preuzetih sa Wikimedia Commons (slobodne licence) - prikazuju se ispod slike proizvoda.
// Licence CC BY / CC BY-SA zahtevaju navođenje autora, licence i izvora.
// Ključ je putanja slike kao u productsData.js.
const imageCredits = {
  "/images/cires-japonez-royal-burgundy-prunus-serrulata.jpg": {
    "author": "Krzysztof Ziarnek, Kenraiz",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Prunus_serrulata_%27Royal_Burgundy%27_kz4.jpg"
  },
  "/images/cires-japonez-royal-burgundy-prunus-serrulata-2.jpg": {
    "author": "Krzysztof Ziarnek, Kenraiz",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Prunus_serrulata_%27Royal_Burgundy%27_kz2.jpg"
  },
  "/images/albizia-julibrissin.jpg": {
    "author": "Cmapm",
    "license": "Public domain",
    "licenseUrl": "",
    "source": "https://commons.wikimedia.org/wiki/File:Albizzia_julibrissin_in_Sevastopol_1.jpg"
  },
  "/images/albizia-julibrissin-2.jpg": {
    "author": "Taylo33p",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Albizia_julibrissin_flower.jpg"
  },
  "/images/albizia-julibrissin-multitulpina.jpg": {
    "author": "Luis Miguel Bugallo Sánchez",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:2026_Albizia_julibrissin_no_Campus_Sur_da_USC._Santiago_de_Compostela._Galiza.jpg"
  },
  "/images/albizia-julibrissin-multitulpina-2.jpg": {
    "author": "Gmihail",
    "license": "CC BY-SA 3.0 rs",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/rs/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Albizia_pionirski_park.JPG"
  },
  "/images/tei-cu-frunza-mare-tilia-platyphyllos.jpg": {
    "author": "Barbara Arand",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:2_Linden_am_Spritzenhaus,_Sommerlinde_(Tilia_platyphyllos),_Rustenfelde,_Verwaltungsgemeinschaft_Hanstein-Rusteberg.jpg"
  },
  "/images/tei-cu-frunza-mare-tilia-platyphyllos-2.jpg": {
    "author": "Barbara Arand",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Angerlinde_vor_der_Kirche,_Sommerlinde_(Tilia_platyphyllos),_Dietzenrode_im_Eichsfeld.jpg"
  },
  "/images/tei-pucios-tilia-cordata.jpg": {
    "author": "Юрий Д.К.",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Efremov_-_2025_-_Tilia_cordata_tree_01.jpg"
  },
  "/images/tei-pucios-tilia-cordata-2.jpg": {
    "author": "Friedrich Haag",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:009_2015_05_06_Winterlinde_(Wiki_Loves_Earth_2015).jpg"
  },
  "/images/tei-argintiu-tilia-tomentosa.jpg": {
    "author": "Jean-Pol GRANDMONT",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Tilia_tomentosa_1JPG.jpg"
  },
  "/images/tei-argintiu-tilia-tomentosa-2.jpg": {
    "author": "Agnieszka Kwiecień, Nova",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Tilia_tomentosa_Lipa_srebrzysta_2024-05-10_04.jpg"
  },
  "/images/pin-silvestru-pinus-sylvestris.jpg": {
    "author": "Dominicus Johannes Bergsma",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Wandeling_over_het_Hulshorsterzand-Hulshorsterheide_14.jpg"
  },
  "/images/pin-silvestru-pinus-sylvestris-2.jpg": {
    "author": "Agnes Monkelbaan",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Delleboersterheide,_natuurgebied_van_het_It_Fryske_Gea._25-12-2019._(actm.)_10.jpg"
  },
  "/images/stejar-rosu-quercus-rubra.jpg": {
    "author": "Peter Cooper Jr.",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Red_oak_changing_color,_Field_Loop_Trail,_Plimpton_Community_Forest,_2025-10-18.jpg"
  },
  "/images/stejar-rosu-quercus-rubra-2.jpg": {
    "author": "Dietmar Rabich",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:D%C3%BClmen,_Wildpark,_Br%C3%BCcke_am_Herzteich_--_2022_--_4642.jpg"
  },
  "/images/liquidambar-styraciflua.jpg": {
    "author": "SAplants",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Liquidambar_styraciflua_50D_5326.jpg"
  },
  "/images/liquidambar-styraciflua-2.jpg": {
    "author": "Calistemon",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Liquidambar_styraciflua_in_Golden_Valley_Tree_Park,_May_2022_02.jpg"
  },
  "/images/arborele-lalea-liriodendron-tulipifera.jpg": {
    "author": "Jean-Pol GRANDMONT",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Liriodendron_tulipifera_JPG5a.jpg"
  },
  "/images/arborele-lalea-liriodendron-tulipifera-2.jpg": {
    "author": "High Contrast",
    "license": "CC BY 3.0 de",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/de/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Tulip_tree_(Liriodendron_tulipifera)_in_Munich_(3).jpg"
  },
  "/images/artar-crimson-king-acer-platanoides.jpg": {
    "author": "Speifensender",
    "license": "Public domain",
    "licenseUrl": "",
    "source": "https://commons.wikimedia.org/wiki/File:Acer_platanoides_cultivar_-_20100523-01.jpg"
  },
  "/images/artar-crimson-king-acer-platanoides-2.jpg": {
    "author": "Gmihail",
    "license": "CC BY-SA 3.0 rs",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/rs/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Acer_platanoides_%27Crimson_King%27_nursery_stock.jpg"
  },
  "/images/magnolia-soulangeana.jpg": {
    "author": "Piotr Kuczynski",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/",
    "source": "https://commons.wikimedia.org/wiki/File:Magnolia_x_soulangeana_2_(Piotr_Kuczynski).jpg"
  },
  "/images/magnolia-soulangeana-2.jpg": {
    "author": "James F.",
    "license": "CC BY 1.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/1.0",
    "source": "https://commons.wikimedia.org/wiki/File:Magnolia_%C3%97_soulangeana_blossom.jpg"
  },
  "/images/prun-rosu-prunus-cerasifera-nigra.jpg": {
    "author": "Rasbak",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Prunus_cerasifera_Nigra_tree.jpg"
  },
  "/images/prun-rosu-prunus-cerasifera-nigra-2.jpg": {
    "author": "Rasbak",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Prunus_cerasifera_%27Nigra%27_watersprouts_(01).jpg"
  },
  "/images/cimisir-buxus-sempervirens.jpg": {
    "author": "Burkhard Mücke",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Buxus_sempervirens,_Buchskugeln.jpg"
  },
  "/images/cimisir-buxus-sempervirens-2.jpg": {
    "author": "Juan de Vojníkov",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Vrtbovsk%C3%A1_zahrada,_buxus_prvn%C3%ADho_parteru.JPG"
  },
  "/images/artar-rosu-acer-rubrum.jpg": {
    "author": "Willow",
    "license": "CC BY 2.5",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.5",
    "source": "https://commons.wikimedia.org/wiki/File:Acer_rubrum_001.jpg"
  },
  "/images/artar-rosu-acer-rubrum-2.jpg": {
    "author": "Lambique",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Red_maple_(Acer_rubrum)_Broad_View.jpg"
  },
  "/images/platan-platanus-acerifolia.jpg": {
    "author": "Arnoldius",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Herne_Allee_platanus_%C3%97_hispanica.jpg"
  },
  "/images/platan-platanus-acerifolia-2.jpg": {
    "author": "Fanghong",
    "license": "CC BY 2.5",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.5",
    "source": "https://commons.wikimedia.org/wiki/File:Platanus_acerifolia_leaves_(2).jpg"
  },
  "/images/salcam-globular-robinia-umbraculifera.jpg": {
    "author": "P.poschadel",
    "license": "CC BY-SA 2.0 fr",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/fr/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Vineuil-Saint-Firmin_(60),_rond-point_de_la_place_Joyalle.jpg"
  },
  "/images/salcam-globular-robinia-umbraculifera-2.jpg": {
    "author": "Athantor",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Podlaskie_-_Suprasl_-_Kopna_Gora_-_Arboretum_-_Robinia_pseudoacacia_%27Umbraculifera%27_-_plant.JPG"
  },
  "/images/mesteacan-betula-pendula.jpg": {
    "author": "Юрий Д.К.",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Efremov_-_2025_-_Betula_pendula_at_Kurgan.jpg"
  },
  "/images/mesteacan-betula-pendula-2.jpg": {
    "author": "W.carter",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Part_of_birch_trunk_in_Norrkila.jpg"
  }
};

export default imageCredits;
