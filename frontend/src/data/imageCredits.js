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
  },
  "/images/artar-trilobat-acer-buergerianum.jpg": {
    "author": "Hurricanefan24",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Morris_Arboretum_Acer_buergerianum.JPG"
  },
  "/images/artar-trilobat-acer-buergerianum-2.jpg": {
    "author": "Gmihail at Serbian Wikipedia",
    "license": "CC BY-SA 3.0 rs",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/rs/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Acer_buergerianum_leaves_and_fruits.jpg"
  },
  "/images/jugastru-acer-campestre.jpg": {
    "author": "Galloramenu",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Acer_campestre_in_Appennino2.jpg"
  },
  "/images/jugastru-acer-campestre-2.jpg": {
    "author": "Robert Flogaus-Faust",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Acer_campestre_RF.jpg"
  },
  "/images/artar-freeman-acer-freemanii.jpg": {
    "author": "Deinocheirus",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Autumn_Blaze_Maple_in_Toronto.jpg"
  },
  "/images/artar-negundo-flamingo.jpg": {
    "author": "Krzysztof Ziarnek, Kenraiz",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Acer_negundo_%27Flamingo%27_kz03.jpg"
  },
  "/images/artar-negundo-flamingo-2.jpg": {
    "author": "Krzysztof Ziarnek, Kenraiz",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Acer_negundo_%27Flamingo%27_kz01.jpg"
  },
  "/images/artar-pacific-sunset-norwegian-sunset.jpg": {
    "author": "Photo (c)2006 Derek Ramsey (Ram-Man)",
    "license": "CC BY-SA 2.5",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5",
    "source": "https://commons.wikimedia.org/wiki/File:Purpleblow_Maple_Acer_truncatum_Tree_2448px.jpg"
  },
  "/images/artar-pacific-sunset-norwegian-sunset-2.jpg": {
    "author": "Photo (c)2006 Derek Ramsey (Ram-Man)",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Acer_truncatum_Leaf.jpg"
  },
  "/images/paltin-de-munte-acer-pseudoplatanus.jpg": {
    "author": "The Brook",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Acer_pseudoplatanus_from_bernese_Jura.jpg"
  },
  "/images/paltin-de-munte-acer-pseudoplatanus-2.jpg": {
    "author": "Willow",
    "license": "CC BY 2.5",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.5",
    "source": "https://commons.wikimedia.org/wiki/File:Acer_pseudoplatanus_005.jpg"
  },
  "/images/artar-ginnala-acer-tataricum.jpg": {
    "author": "Jebulon",
    "license": "Public domain",
    "licenseUrl": "",
    "source": "https://commons.wikimedia.org/wiki/File:Acer_tataricum_ginnala_PfP.jpg"
  },
  "/images/artar-ginnala-acer-tataricum-2.jpg": {
    "author": "AnRo0002",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:20141031Acer_ginnala_2.jpg"
  },
  "/images/artar-acer-zoeschense-annae.jpg": {
    "author": "Hinrich7",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Acer_x_zoeschense.jpg"
  },
  "/images/artar-acer-zoeschense-annae-2.jpg": {
    "author": "Me",
    "license": "CC BY 2.5",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.5",
    "source": "https://commons.wikimedia.org/wiki/File:Acer_zoeschense_%27annae%27_R0019897.JPG"
  },
  "/images/arin-italian-alnus-cordata.jpg": {
    "author": "Franz Xaver",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Alnus_cordata.jpg"
  },
  "/images/arin-italian-alnus-cordata-2.jpg": {
    "author": "AnemoneProjectors (talk)",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Italian_Alder_(Alnus_cordata),_cultivated,_Hertfordshire_(25621878754).jpg"
  },
  "/images/arin-negru-alnus-glutinosa.jpg": {
    "author": "Crusier",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Alnus_glutinosa_Z%C4%85bki.JPG"
  },
  "/images/arin-negru-alnus-glutinosa-2.jpg": {
    "author": "Jean-Pol GRANDMONT",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Alnus_glutinosa_%27Imperialis%27.jpg"
  },
  "/images/arin-alnus-spaethii.jpg": {
    "author": "Andre Hosper",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Alnus_%C3%97_spaethii_95886120.jpg"
  },
  "/images/arin-alnus-spaethii-2.jpg": {
    "author": "Sten",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Alnus-spaethii-habitus.jpg"
  },
  "/images/amelanchier-arbore.jpg": {
    "author": "Agnieszka Kwiecień, Nova",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Amelanchier_lamarckii_%C5%9Awido%C5%9Bliwa_Lamarcka_2017-04-09_01.jpg"
  },
  "/images/amelanchier-arbore-2.jpg": {
    "author": "Agnieszka Kwiecień, Nova",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Amelanchier_lamarckii_%C5%9Awido%C5%9Bliwa_Lamarcka_2019-05-05_01.jpg"
  },
  "/images/mesteacan-chinezesc-betula-albosinensis-fascination.jpg": {
    "author": "Sten Porse",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/",
    "source": "https://commons.wikimedia.org/wiki/File:Betula-albosinensis-habit.JPG"
  },
  "/images/mesteacan-chinezesc-betula-albosinensis-fascination-2.jpg": {
    "author": "Sten Porse",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Betula-albosinensis-bark.jpg"
  },
  "/images/mesteacan-de-rau-betula-nigra.jpg": {
    "author": "Greg Hume",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:RiverBirchBark01.JPG"
  },
  "/images/mesteacan-pufos-betula-pubescens.jpg": {
    "author": "Willow",
    "license": "CC BY 2.5",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.5",
    "source": "https://commons.wikimedia.org/wiki/File:Betula_pubescens_-_Burgwald_002.jpg"
  },
  "/images/mesteacan-pufos-betula-pubescens-2.jpg": {
    "author": "Agnieszka Kwiecień, Nova",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Betula_pubescens_var._pubescens_2023-05-05_02.jpg"
  },
  "/images/mesteacan-himalaya-betula-utilis-doorenbos.jpg": {
    "author": "Photo by David J. Stang",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Betula_utilis_var._jacquemontii_0zz.jpg"
  },
  "/images/mesteacan-himalaya-betula-utilis-doorenbos-2.jpg": {
    "author": "Salicyna",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Betula_utilis_var._jacquemontii_2018-11-07_4330.jpg"
  },
  "/images/carpen-carpinus-betulus.jpg": {
    "author": "Willow",
    "license": "CC BY 2.5",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.5",
    "source": "https://commons.wikimedia.org/wiki/File:Carpinus_betulus_-_Hunsr%C3%BCck_001.jpg"
  },
  "/images/carpen-carpinus-betulus-2.jpg": {
    "author": "A.Savin",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Botanischer_Garten_Berlin-Dahlem_10-2014_photo24_Carpinus_betulus.jpg"
  },
  "/images/carpen-japonez-carpinus-japonica.jpg": {
    "author": "Σ64",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Carpinus_japonica_04.jpg"
  },
  "/images/carpen-japonez-carpinus-japonica-2.jpg": {
    "author": "KATHERINE WAGNER-REISS",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Carpinus_japonica%E2%80%94tree.jpg"
  },
  "/images/castan-comestibil-castanea-sativa.jpg": {
    "author": "Zeynel Cebeci",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Castanea_sativa_-_Anatolian_sweet_chestnut_04.jpg"
  },
  "/images/castan-comestibil-castanea-sativa-2.jpg": {
    "author": "Georg Slickers",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Castanea_sativa_20050703_433.jpg"
  },
  "/images/sambovina-celtis.jpg": {
    "author": "Chhe (talk)",
    "license": "Public domain",
    "licenseUrl": "",
    "source": "https://commons.wikimedia.org/wiki/File:Celtis_occidentalis_20090606.jpg"
  },
  "/images/sambovina-celtis-2.jpg": {
    "author": "Agnieszka Kwiecień, Nova",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Celtis_occidentalis_Wi%C4%85zowiec_zachodni_2021-10-02_13.jpg"
  },
  "/images/cercidiphyllum-japonicum.jpg": {
    "author": "そらみみ",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Cercidiphyllum_japonicum_in_autumn_20161014.jpg"
  },
  "/images/cercidiphyllum-japonicum-2.jpg": {
    "author": "Nucatum amygdalarum",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Cercidiphyllum_japonicum_2019_09_21_Kumpula_0310.jpg"
  },
  "/images/cercis-canadensis.jpg": {
    "author": "Greg Hume",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:RedbudOhio02.jpg"
  },
  "/images/cercis-canadensis-2.jpg": {
    "author": "Cbaile19",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Cercis_canadensis,_Bird_Park,_2026-04-07.jpg"
  },
  "/images/alun-turcesc-corylus-colurna.jpg": {
    "author": "Orjen, Pavle Cikovac",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Corylus_colurna_subadriatic_dinaric_mountains_Orjen.JPG"
  },
  "/images/alun-turcesc-corylus-colurna-2.jpg": {
    "author": "Martinus KE",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Corylus_colurna_WOR_-_2021-07-23_-_037a.jpg"
  },
  "/images/paducel-decorativ-crataegus.jpg": {
    "author": "Hans-Martin Scheibner",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Rotdorn_(Crataegus_laevigata_%27Paul%27s_Scarlet%27)-hms(1).jpg"
  },
  "/images/paducel-decorativ-crataegus-2.jpg": {
    "author": "Rüdiger Stehn from Kiel, Deutschland",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Rotdorn_(Crataegus_laevigata_%E2%80%9APaul%E2%80%99s_Scarlet)_(02)_(27204344212).jpg"
  },
  "/images/arborele-batista-davidia-involucrata.jpg": {
    "author": "Myrabella",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Davidia_involucrata_flowering_branch.jpg"
  },
  "/images/arborele-batista-davidia-involucrata-2.jpg": {
    "author": "Krzysztof Ziarnek, Kenraiz",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Davidia_involucrata_kz04.jpg"
  },
  "/images/fag-fagus-sylvatica.jpg": {
    "author": "Jean-Pol GRANDMONT",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Fagus_sylvatica_%27Atropunicea%27_-_Mariemont_1.jpg"
  },
  "/images/fag-fagus-sylvatica-2.jpg": {
    "author": "Rémih",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Fagus_sylvatica_%27Atropunicea%27_@_D%C3%A9sert_de_Retz_13.jpg"
  },
  "/images/frasin-american-fraxinus-americana.jpg": {
    "author": "Richard Webb, Bugwood.org, USA",
    "license": "CC BY 3.0 us",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/us/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Fraxinus_americana_fall.jpg"
  },
  "/images/frasin-american-fraxinus-americana-2.jpg": {
    "author": "Willow",
    "license": "CC BY 2.5",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.5",
    "source": "https://commons.wikimedia.org/wiki/File:Fraxinus_americana_002.jpg"
  },
  "/images/frasin-raywood-fraxinus-angustifolia.jpg": {
    "author": "Chris.urs-o",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Villette.Park.4119.JPG"
  },
  "/images/frasin-raywood-fraxinus-angustifolia-2.jpg": {
    "author": "No machine-readable author provided. MPF assumed (based on copyright claims).",
    "license": "CC BY 2.5",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.5",
    "source": "https://commons.wikimedia.org/wiki/File:Fraxinus_angustifolia_foliage.jpg"
  },
  "/images/frasin-comun-fraxinus-excelsior.jpg": {
    "author": "No machine-readable author provided. MPF assumed (based on copyright claims).",
    "license": "CC BY 2.5",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.5",
    "source": "https://commons.wikimedia.org/wiki/File:Fraxinus_excelsior.jpg"
  },
  "/images/frasin-comun-fraxinus-excelsior-2.jpg": {
    "author": "Dominicus Johannes Bergsma",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Groep_essen_(Fraxinus_excelsior)_aan_fietspad_om_Langweerderwielen_(Langwarder_Wielen)._Oostkant_03.jpg"
  },
  "/images/frasin-pennsylvanica-summit.jpg": {
    "author": "Matt Lavin",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Fraxinus_pennsylvanica_-_green_ash_-_52249776273.jpg"
  },
  "/images/frasin-pennsylvanica-summit-2.jpg": {
    "author": "Jerzy Opioła",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/",
    "source": "https://commons.wikimedia.org/wiki/File:Fraxinus_pensylvanica_a1.jpg"
  },
  "/images/ginkgo-biloba.jpg": {
    "author": "Benjamin Ceci",
    "license": "Public domain",
    "licenseUrl": "",
    "source": "https://commons.wikimedia.org/wiki/File:A_golden_Ginkgo_biloba_in_autumn.jpg"
  },
  "/images/ginkgo-biloba-2.jpg": {
    "author": "Flocci Nivis",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Ginkgo_biloba_Staden_Autumn.jpg"
  },
  "/images/gladita-gleditsia-triacanthos.jpg": {
    "author": "Kevmin",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Gleditsia_triacanthos_Maryhill_Museum_01.jpg"
  },
  "/images/gladita-gleditsia-triacanthos-2.jpg": {
    "author": "Plant Image Library from Boston, USA",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Gleditsia_triacanthos_(Honeylocust)_(38246396371).jpg"
  },
  "/images/nuc-negru-juglans-nigra.jpg": {
    "author": "Adrian S Pye",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Juglandaceae_Juglans_nigra_-_black_walnut_tree_-_geograph.org.uk_-_5551544.jpg"
  },
  "/images/nuc-negru-juglans-nigra-2.jpg": {
    "author": "Berthold Werner",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Juglans_nigra_BW_2024-04-09_17-44-42_Stack.jpg"
  },
  "/images/nuc-juglans-regia.jpg": {
    "author": "Thesupermat",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Noyer_centenaire_en_automne.JPG"
  },
  "/images/nuc-juglans-regia-2.jpg": {
    "author": "Ввласенко",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Blooming_walnut_(Juglans_regia).jpg"
  },
  "/images/koelreuteria-paniculata.jpg": {
    "author": "Beko",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Koelreuteria_paniculata_flowers_in_Yerevan_02.jpg"
  },
  "/images/koelreuteria-paniculata-2.jpg": {
    "author": "Wouter Hagens",
    "license": "Public domain",
    "licenseUrl": "",
    "source": "https://commons.wikimedia.org/wiki/File:Koelreuteria_paniculata_E.jpg"
  },
  "/images/larice-japonez-larix-kaempferi.jpg": {
    "author": "Alpsdake",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Larix_kaempferi_(Mount_Toyoguchi).jpg"
  },
  "/images/larice-japonez-larix-kaempferi-2.jpg": {
    "author": "Tanaka Juuyoh",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Larix_kaempferi_Oze_NP.jpg"
  },
  "/images/magnolia-kobus.jpg": {
    "author": "Bruce Marlin",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Magnolia_kobus_borealis.jpg"
  },
  "/images/magnolia-kobus-2.jpg": {
    "author": "Susanne Nilsson",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Alnarp_(Sweden)_-_Magnolia_(26572825280).jpg"
  },
  "/images/magnolia-susan.jpg": {
    "author": "Photo by and (c)2016 Derek Ramsey (Ram-Man)",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Hybrid_Magnolia_Magnolia_%27Susan%27_Flower.JPG"
  },
  "/images/magnolia-susan-2.jpg": {
    "author": "--SB_Johnny",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Magnolia_Susan_001.JPG"
  },
  "/images/mar-pom-fructifer-malus-domestica.jpg": {
    "author": "Helge Klaus Rieder",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Elstar_Freilichtmuseum_Roscheider_Hof_Ganzer_Baum_H2.jpg"
  },
  "/images/mar-pom-fructifer-malus-domestica-2.jpg": {
    "author": "Helge Klaus Rieder",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Elstar_Freilichtmuseum_Roscheider_Hof_Bl%C3%BCte_H6.jpg"
  },
  "/images/metasequoia-glyptostroboides.jpg": {
    "author": "Calistemon",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Metasequoia_glyptostroboides_in_Golden_Valley_Tree_Park,_May_2022_01.jpg"
  },
  "/images/metasequoia-glyptostroboides-2.jpg": {
    "author": "Alpsdake",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Metasequoia_glyptostroboides_Autumn_leaf_color.jpg"
  },
  "/images/dud-alb-morus-alba.jpg": {
    "author": "Sciencia58",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Morus_alba_%27Macrophylla%27_Tree_in_spring.jpg"
  },
  "/images/dud-alb-morus-alba-2.jpg": {
    "author": "Emőke Dénes",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Rosales_-_Morus_alba_-_3.jpg"
  },
  "/images/carpen-negru-ostrya-carpinifolia.jpg": {
    "author": "Robert Flogaus-Faust",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Ostrya_carpinifolia_RF.jpg"
  },
  "/images/carpen-negru-ostrya-carpinifolia-2.jpg": {
    "author": "Robert Flogaus-Faust",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Ostrya_carpinifolia_2_RF.jpg"
  },
  "/images/parrotia-persica.jpg": {
    "author": "Jean-Pol GRANDMONT",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:0_Parrotia_persica_-_Parc_de_Mariemont_(1).JPG"
  },
  "/images/parrotia-persica-2.jpg": {
    "author": "A.Savin",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Botanischer_Garten_Berlin-Dahlem_10-2014_photo13_Parrotia_persica.jpg"
  },
  "/images/phellodendron-amurense.jpg": {
    "author": "Agnieszka Kwiecień, Nova",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Phellodendron_amurense_Korkowiec_amurski_2019-05-24_03.jpg"
  },
  "/images/phellodendron-amurense-2.jpg": {
    "author": "Agnieszka Kwiecień, Nova",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Phellodendron_amurense_Korkowiec_amurski_2022-10-11_02.jpg"
  },
  "/images/plop-canadian-robusta.jpg": {
    "author": "WeeJeeVee",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:20170825Populus_x_canadensis_%27Robusta%27_Wageningen_14b.jpg"
  },
  "/images/plop-canadian-robusta-2.jpg": {
    "author": "WeeJeeVee",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:20170825Populus_x_canadensis_%27Robusta%27_Wageningen_32b.jpg"
  },
  "/images/plop-tremurator-populus-tremula.jpg": {
    "author": "Šarūnas Šimkus",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/",
    "source": "https://commons.wikimedia.org/wiki/File:PopulusTremula001.JPG"
  },
  "/images/plop-tremurator-populus-tremula-2.jpg": {
    "author": "W.carter",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Red_aspen_leaves_by_Myrstigen_1.jpg"
  },
  "/images/cires-prunus-avium.jpg": {
    "author": "H. Zell",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Prunus_avium_-_Hohenwettersbach_01.jpg"
  },
  "/images/cires-prunus-avium-2.jpg": {
    "author": "MPF",
    "license": "CC BY 2.5",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.5",
    "source": "https://commons.wikimedia.org/wiki/File:Prunus_avium_fruit.jpg"
  },
  "/images/prun-prunus-domestica.jpg": {
    "author": "Rasbak",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Prunus_domestica_Reine_Victoria.jpg"
  },
  "/images/prun-prunus-domestica-2.jpg": {
    "author": "Rasbak",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/",
    "source": "https://commons.wikimedia.org/wiki/File:Pruimenbloesem_Reine_Victoria_(Prunus_domestica).jpg"
  },
  "/images/malin-prunus-padus.jpg": {
    "author": "Ввласенко",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Prunus_padus_in_April.jpg"
  },
  "/images/malin-prunus-padus-2.jpg": {
    "author": "Steinsplitter",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Gew%C3%B6hnliche_Traubenkirsche_-_Prunus_padus_2.jpg"
  },
  "/images/prunus-virginiana-canada-red.jpg": {
    "author": "Cossey25",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Canadian_Chokecherry_Prunus_virginiana_%27Canada_Red%27_habit_spring.jpg"
  },
  "/images/prunus-virginiana-canada-red-2.jpg": {
    "author": "Cossey25",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Canadian_Chokecherry_Prunus_virginiana_%27Canada_Red%27_leaves_fall_03.jpg"
  },
  "/images/pterocarya-fraxinifolia.jpg": {
    "author": "Jean-Pol GRANDMONT",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:0_Pterocarya_fraxinifolia_-_La_Hulpe_(1).JPG"
  },
  "/images/pterocarya-fraxinifolia-2.jpg": {
    "author": "Dandarmkd",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Pterocarya_fraxinifolia_-_%D0%91%D0%BE%D1%82%D0%B0%D0%BD%D0%B8%D1%87%D0%BA%D0%B0_%D0%B3%D1%80%D0%B0%D0%B4%D0%B8%D0%BD%D0%B0_%D0%A1%D0%BA%D0%BE%D0%BF%D1%98%D0%B5_02.jpg"
  },
  "/images/par-pyrus-communis.jpg": {
    "author": "Mleprince",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Pyrus_communis_%27Conferences%27_from_Savoie.jpg"
  },
  "/images/par-decorativ-pyrus-calleryana-chanticleer.jpg": {
    "author": "Magnus Manske",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Pyrus_calleryana_%27Chanticleer%27_(Rosaceae)_tree.jpg"
  },
  "/images/par-decorativ-pyrus-calleryana-chanticleer-2.jpg": {
    "author": "Lothar Spurzem",
    "license": "CC BY-SA 2.0 de",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/de/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Zierbirne_%3D_Pyrus_calleryana_Chanticleer_(2020-03-22_Sp).JPG"
  },
  "/images/par-pyrus-salicifolia-pendula.jpg": {
    "author": "Averater",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Pyrus_salicifolia_%27Pendula%27_03.jpg"
  },
  "/images/par-pyrus-salicifolia-pendula-2.jpg": {
    "author": "Wouter Hagens",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Pyrus_salicifolia_pendula_B.jpg"
  },
  "/images/cer-quercus-cerris.jpg": {
    "author": "Christo Tzontchev",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:-Quercus_cerris_in_Begle%C5%BE_(Q106632121)_4.jpg"
  },
  "/images/cer-quercus-cerris-2.jpg": {
    "author": "Marija Gajić",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Quercus_cerris_(4).JPG"
  },
  "/images/stejar-quercus-macrocarpa.jpg": {
    "author": "Heath Cajandig",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Big_Tree_with_spring_picnic.jpg"
  },
  "/images/stejar-quercus-macrocarpa-2.jpg": {
    "author": "Chris Light",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Burr_Oak_(Quercus_macrocarpa)_P9190054.jpg"
  },
  "/images/stejar-de-mlastina-quercus-palustris.jpg": {
    "author": "Gmihail at Serbian Wikipedia",
    "license": "CC BY-SA 3.0 rs",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/rs/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Quercus_palustris_autumn_color,_Pionirski_park,_Belgrade.jpg"
  },
  "/images/stejar-de-mlastina-quercus-palustris-2.jpg": {
    "author": "Krzysztof Golik",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Quercus_palustris_in_Aveyron_(14).jpg"
  },
  "/images/gorun-quercus-petraea.jpg": {
    "author": "Poli Kasovska",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Quercus_petraea_in_Kosti_Q106523984_5.jpg"
  },
  "/images/gorun-quercus-petraea-2.jpg": {
    "author": "E Wusk",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Quercus_petraea_twigs_with_immature_acorns.jpg"
  },
  "/images/stejar-quercus-robur.jpg": {
    "author": "Cephas",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Quercus_robur_%E2%80%98Fastigiata%E2%80%99_JRVdH_02.jpg"
  },
  "/images/stejar-quercus-robur-2.jpg": {
    "author": "Аимаина хикари",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Quercus_robur_%27Fastigiata%27_Syrets2.JPG"
  },
  "/images/salcam-robinia-pseudoacacia.jpg": {
    "author": "Colin",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Robinia_pseudoacacia_%27Frisia%27.jpg"
  },
  "/images/salcam-robinia-pseudoacacia-2.jpg": {
    "author": "Wouter Hagens",
    "license": "Public domain",
    "licenseUrl": "",
    "source": "https://commons.wikimedia.org/wiki/File:Robinia_pseudoacacia_B.jpg"
  },
  "/images/salcie-alba-salix-alba.jpg": {
    "author": "Hans-Jürgen Neubert",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Salix_alba_4_seasons_Summer_(001).jpg"
  },
  "/images/salcie-alba-salix-alba-2.jpg": {
    "author": "MPF",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/",
    "source": "https://commons.wikimedia.org/wiki/File:Salix_alba_leaves.jpg"
  },
  "/images/salcie-salix-pentandra.jpg": {
    "author": "Krzysztof Ziarnek, Kenraiz",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Salix_pentandra_kz04.jpg"
  },
  "/images/salcie-salix-pentandra-2.jpg": {
    "author": "Krzysztof Ziarnek, Kenraiz",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Salix_pentandra_kz05.jpg"
  },
  "/images/salcie-pletoasa-salix-chrysocoma.jpg": {
    "author": "Sciencia58",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Salix_%C3%97_sepulcralis_%27Chrysocoma%27_1.jpg"
  },
  "/images/salcie-pletoasa-salix-chrysocoma-2.jpg": {
    "author": "AgainErick",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Salix_x_sepulcralis_(Chrysocoma)_-_Treurwilg_uit_1949_-_Statensingel_-_Blijdorp_-_Noord_-_Rotterdam_-_bijzondere_bomencollectie_-_2024_-_pic1_-_spring.jpg"
  },
  "/images/salcam-japonez-styphnolobium-japonicum.jpg": {
    "author": "Jean-Pol GRANDMONT",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Sophora_japonica_JPG2Aa.jpg"
  },
  "/images/salcam-japonez-styphnolobium-japonicum-2.jpg": {
    "author": "Agnieszka Kwiecień, Nova",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Styphnolobium_japonicum_Pere%C5%82kowiec_japo%C5%84ski_2018-09-02_01.jpg"
  },
  "/images/scorus-sorbus.jpg": {
    "author": "George Chernilevsky",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Sorbus_aucuparia_2022_G1.jpg"
  },
  "/images/scorus-sorbus-2.jpg": {
    "author": "Rosser1954",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Rowan_(Sorbus_aucuparia)_laden_with_berries,_Auchinleck,_Scotland.jpg"
  },
  "/images/tetradium-daniellii.jpg": {
    "author": "Krzysztof Ziarnek, Kenraiz",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Tetradium_daniellii_kz1.jpg"
  },
  "/images/tetradium-daniellii-2.jpg": {
    "author": "Krzysztof Ziarnek, Kenraiz",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Tetradium_daniellii_kz2.jpg"
  },
  "/images/tei-olandez-tilia-europaea.jpg": {
    "author": "Ptelea",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Common_limes,_avenue.jpg"
  },
  "/images/tei-olandez-tilia-europaea-2.jpg": {
    "author": "Hans Muller",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Zwarte_linde_(Tilia_x_europaea_%27Pallida%27)_-_Ingenhouszstraat,_Majoor_Bosshardtplantsoen,_Utrecht_-_13_juni_2022.jpg"
  },
  "/images/ulm-ulmus.jpg": {
    "author": "Christian Fischer",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:UlmusLaevis1%2B2.jpg"
  },
  "/images/ulm-ulmus-2.jpg": {
    "author": "Ronnie Nijboer",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:RN_Ulmus_Columella_(koninginneweg_amsterdam).jpg"
  },
  "/images/zelkova-serrata.jpg": {
    "author": "Calistemon",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Zelkova_serrata_in_Golden_Valley_Tree_Park,_May_2022_01.jpg"
  },
  "/images/zelkova-serrata-2.jpg": {
    "author": "Luck097",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Zelkova_serrata_Autumn.jpg"
  }
};

export default imageCredits;
