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
  "/images/prun-rosu-prunus-cerasifera-pissardii.jpg": {
    "author": "Rasbak",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Prunus_cerasifera_Nigra_tree.jpg"
  },
  "/images/prun-rosu-prunus-cerasifera-pissardii-2.jpg": {
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
  },
  "/images/pyracantha-red-column.jpg": {
    "author": "Rept0n1x",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Bromborough_-_DSC03493.JPG"
  },
  "/images/pyracantha-red-column-2.jpg": {
    "author": "Diaz de vivar gustavo",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:PIRACANTHA_O_ESPINO_DE_FUEGO_EN_EL_ECOSISTEMA_DEL_PARQUE_EVA_HAJDUK.jpg"
  },
  "/images/lavanda-lavandula-angustifolia.jpg": {
    "author": "Andrey Butko",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Lavandula_angustifolia_in_Sedovo_1.jpg"
  },
  "/images/lavanda-lavandula-angustifolia-2.jpg": {
    "author": "Isiwal",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Vanessa_cardui_on_Lavandula_angustifolia-2459.jpg"
  },
  "/images/potentilla-fruticosa.jpg": {
    "author": "Didier Descouens",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:(MHNT)_Dasiphora_fruticosa_ssp._Goldstar_-_Les_Martels,_Giroussens_Tarn.jpg"
  },
  "/images/potentilla-fruticosa-2.jpg": {
    "author": "Didier Descouens",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:(MHNT)_Dasiphora_fruticosa_ssp._floribunda_-_blossom.jpg"
  },
  "/images/viola-panseluta.jpg": {
    "author": "Екатерина Борисова",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9_%D0%9D%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4._%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0%D1%8F_%D1%83%D0%BB%D0%B8%D1%86%D0%B0,_%D0%B0%D0%BD%D1%8E%D1%82%D0%B8%D0%BD%D1%8B_%D0%B3%D0%BB%D0%B0%D0%B7%D0%BA%D0%B8_02.jpg"
  },
  "/images/viola-panseluta-2.jpg": {
    "author": "Екатерина Борисова",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82._%D0%90%D0%BD%D1%8E%D1%82%D0%B8%D0%BD%D1%8B_%D0%B3%D0%BB%D0%B0%D0%B7%D0%BA%D0%B8_%D0%BD%D0%B0_%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%D0%B5_%D0%9C%D1%83%D1%81%D1%82%D0%B0%D0%BA%D0%B8%D0%BB%D0%BB%D0%B8%D0%BA_01.jpg"
  },
  "/images/muscata-pelargonium.jpg": {
    "author": "Petro Stelte",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Pelargonium-Sitia-Crete-7.jpg"
  },
  "/images/muscata-pelargonium-2.jpg": {
    "author": "Petar Milošević",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Pelargonium_zonale_(Geraniaceae).jpg"
  },
  "/images/trandafir-rosa.jpg": {
    "author": "Photo by David J. Stang",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Rosa_floribunda_Hot_Cocoa_2zz.jpg"
  },
  "/images/trandafir-rosa-2.jpg": {
    "author": "Photo by David J. Stang",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Rosa_floribunda_Angel_Face_1zz.jpg"
  },
  "/images/trandafir-pe-tulpina-rosa.jpg": {
    "author": "Dguendel",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Zweibr%C3%BCcken,_Europas_Rosengarten,_Hochstammrose.jpg"
  },
  "/images/trandafir-pe-tulpina-rosa-2.jpg": {
    "author": "Helge Klaus Rieder",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Rosengarten-A-11-d-AugustaLuise.jpg"
  },
  "/images/frasin-cu-flori-fraxinus-ornus.jpg": {
    "author": "Jean-Pol GRANDMONT",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Fraxinus_ornus_JPG2.jpg"
  },
  "/images/frasin-cu-flori-fraxinus-ornus-2.jpg": {
    "author": "Krzysztof Ziarnek, Kenraiz",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Fraxinus_ornus_kz07.jpg"
  },
  "/images/carpen-columnar-carpinus-betulus-fastigiata.jpg": {
    "author": "Paulitzer",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Carpinus_betulus_%27Fastigiata%27_Poundbury_20_P1310846.jpg"
  },
  "/images/carpen-columnar-carpinus-betulus-fastigiata-2.jpg": {
    "author": "Paulitzer",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Carpinus_betulus_%27Fastigiata%27_Dublin_P1310089.jpg"
  },
  "/images/artar-argintiu-acer-saccharinum.jpg": {
    "author": "Herman, D.E. et al. 1996. North Dakota tree handbook. USDA NRCS ND State Soil Co",
    "license": "Public domain",
    "licenseUrl": "",
    "source": "https://commons.wikimedia.org/wiki/File:Acer_saccharinum_tree.jpg"
  },
  "/images/artar-argintiu-acer-saccharinum-2.jpg": {
    "author": "Crusier",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Acer_saccharinum_young_leaves.JPG"
  },
  "/images/molid-picea-abies.jpg": {
    "author": "Ivar Leidus",
    "license": "CC BY-SA 3.0 ee",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/ee/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Kuusk_Keila-Paldiski_rdt_%C3%A4%C3%A4res.jpg"
  },
  "/images/molid-picea-abies-2.jpg": {
    "author": "Ivar Leidus",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Picea_abies_young_female_cone_-_Keila.jpg"
  },
  "/images/arborele-iudei-cercis-siliquastrum.jpg": {
    "author": "Didier Descouens",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:(MHNT)_Cercis_siliquastrum_in_bloom.jpg"
  },
  "/images/arborele-iudei-cercis-siliquastrum-2.jpg": {
    "author": "Didier Descouens",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Cercis_siliquastrum_MHNT.jpg"
  },
  "/images/artar-acer-platanoides.jpg": {
    "author": "Crusier",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Acer_platanoides_Marki_2.JPG"
  },
  "/images/artar-acer-platanoides-2.jpg": {
    "author": "Robert Flogaus-Faust",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Acer_platanoides_2_RF.jpg"
  },
  "/images/mar-decorativ-malus-floribunda.jpg": {
    "author": "Photo by David J. Stang",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Malus_floribunda_3zz.jpg"
  },
  "/images/mar-decorativ-malus-floribunda-2.jpg": {
    "author": "Star Mississippi",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Malus_floribunda,_mid_April_2023.jpg"
  },
  "/images/otetar-rhus-typhina.jpg": {
    "author": "Crusier",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Rhus_typhina_Marki.JPG"
  },
  "/images/otetar-rhus-typhina-2.jpg": {
    "author": "Cbaile19",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Rhus_typhina,_2021-11-03,_Mount_Washington.jpg"
  },
  "/images/caryopteris-clandonensis.jpg": {
    "author": "NasserHalaweh",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Lamiaceae_Caryopteris_%C3%97_clandonensis_%27Blue_Balloon%27.jpg"
  },
  "/images/caryopteris-clandonensis-2.jpg": {
    "author": "Gmihail",
    "license": "CC BY-SA 3.0 rs",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/rs/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Caryopteris_%C3%97_clandonensis_inflorescence.jpg"
  },
  "/images/kerria-japonica.jpg": {
    "author": "Photo by David J. Stang",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Kerria_japonica_Pleniflora_7zz.jpg"
  },
  "/images/kerria-japonica-2.jpg": {
    "author": "Photo by David J. Stang",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Kerria_japonica_Pleniflora_6zz.jpg"
  },
  "/images/forsythia-intermedia.jpg": {
    "author": "Cbaile19",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Forsythia,_2020-11-29,_Banksville.jpg"
  },
  "/images/forsythia-intermedia-2.jpg": {
    "author": "Uoaei1",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Forsythia_x_intermedia_01.JPG"
  },
  "/images/symphoricarpos-albus.jpg": {
    "author": "Didier Descouens",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:(MHNT)_Symphoricarpos_albus_-_Fruits_and_foliage_-_Les_Martels,_Giroussens_Tarn.jpg"
  },
  "/images/symphoricarpos-albus-2.jpg": {
    "author": "H. Zell",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Symphoricarpos_albus_003.JPG"
  },
  "/images/santolina-chamaecyparissus.jpg": {
    "author": "TeKappa",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Santolina_chamaecyparissus,_macro.jpg"
  },
  "/images/santolina-chamaecyparissus-2.jpg": {
    "author": "Krzysztof Ziarnek, Kenraiz",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Santolina_chamaecyparissus_kz04.jpg"
  },
  "/images/larice-larix-decidua.jpg": {
    "author": "Dominicus Johannes Bergsma",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:L%27A_de_Bran,_(1798_m)_Val_d%27Anniviers._Europese_larix_(Larix_decidua)_01.JPG"
  },
  "/images/larice-larix-decidua-2.jpg": {
    "author": "Uoaei1",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Larix_decidua_G%C3%B6riacher_Alm_20221027.jpg"
  },
  "/images/ilex-aquifolium.jpg": {
    "author": "Jebulon",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Ilex_aquifolium_L._JdP.jpg"
  },
  "/images/ilex-aquifolium-2.jpg": {
    "author": "Luis Miguel Bugallo Sánchez",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Ilex_aquifolium._R%C3%BAa_da_Fervenza,_Santiago_de_Compostela._Galiza.jpg"
  },
  "/images/pin-de-himalaya-pinus-wallichiana.jpg": {
    "author": "Krzysztof Ziarnek, Kenraiz",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Pinus_wallichiana_kz01.jpg"
  },
  "/images/pin-de-himalaya-pinus-wallichiana-2.jpg": {
    "author": "Robin Abraham from Mumbai, India",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Pinus_wallichiana_cone.jpg"
  },
  "/images/pin-mugo-pinus-mugo.jpg": {
    "author": "USDA-NRCS PLANTS Database / Herman, D.E. et al. 1996. North Dakota tree handbook",
    "license": "Public domain",
    "licenseUrl": "",
    "source": "https://commons.wikimedia.org/wiki/File:Pinus_mugo_plant.jpg"
  },
  "/images/pin-mugo-pinus-mugo-2.jpg": {
    "author": "Chris.urs-o",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Pinus_mugo,_near_Alp_Astras,_South_of_S-charl,_Lower_Engadin,_Switzerland.jpg"
  },
  "/images/pin-negru-brepo-pinus-nigra.jpg": {
    "author": "Timo Newton-Syms from Helsinki, Finland and Chalfont St Giles, Bucks, UK",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Pine_Needles_(5902273583).jpg"
  },
  "/images/pin-negru-brepo-pinus-nigra-2.jpg": {
    "author": "xlibber",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Needles_(7279983706).jpg"
  },
  "/images/plop-piramidal-populus-nigra-italica.jpg": {
    "author": "WeeJeeVee",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:20191026_Populus_nigra_Italica_Rotterdam_02.jpg"
  },
  "/images/plop-piramidal-populus-nigra-italica-2.jpg": {
    "author": "WeeJeeVee",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:20191026_Populus_nigra_Italica_Rotterdam_01.jpg"
  },
  "/images/geranium-pelinarita.jpg": {
    "author": "GT1976",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:2018-05-13_(129)_Geranium_macrorrhizum_(Rock_Crane%27s-bill)_at_Bichlh%C3%A4usl_in_Frankenfels,_Austria.jpg"
  },
  "/images/geranium-pelinarita-2.jpg": {
    "author": "Dominicus Johannes Bergsma",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Geranium_macrorrhizum_01.JPG"
  },
  "/images/imperata-cylindrica-red-baron.jpg": {
    "author": "Photo by David J. Stang",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Imperata_cylindrica_Red_Baron_4zz.jpg"
  },
  "/images/imperata-cylindrica-red-baron-2.jpg": {
    "author": "Wouter Hagens",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Imperata_cylindrica_%27Red_Baron%27_Kruidtuin_Leuven.jpg"
  }
};

export default imageCredits;
