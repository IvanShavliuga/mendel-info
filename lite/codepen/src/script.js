const store = new Vuex.Store({
  state: {
    baseUrl: 'https://mendel-info.usite.pro/publ/ehlementy/',
    elements: [
    { bgcolor: '#00FF00', type: 'неметалл', link: 'nemetally/vodorod_lat_hydrogenium/11-1-0-39', rusname: 'Водород', mass: '1.00794', oxidation: ' -1, +1', index: 1, shortname: 'H' },
    { bgcolor: '#00FFFF', type: 'инертный газ', link: 'inertnye-gazy/gelij_lat_helium/10-1-0-40', rusname: 'Гелий', mass: '4.002602', oxidation: 'в реакции не вступает', index: 2, shortname: 'He' },
    { bgcolor: '#00FF00', type: 'щелочный металл', link: 'shhelochnye-metally/litij_lat_lithium/4-1-0-51', rusname: 'Литий', mass: '6.941', oxidation: ' +1', index: 3, shortname: 'Li' },
    { bgcolor: '#00FF00', type: 'щелочныйземельный металл', link: 'shhelochnozemelnye-metally/berillij_lat_veryllium/5-1-0-11', rusname: 'Бериллий', mass: '9.012182', oxidation: ' +2', index: 4, shortname: 'Be' },
    { bgcolor: '#00FFFF', type: 'полуметалл', link: 'polumetally/bor_lat_borum/8-1-0-9', rusname: 'Бор', mass: '10.811', oxidation: ' -3, +3', index: 5, shortname: 'B' },
    { bgcolor: '#00FFFF', type: 'неметалл', link: 'nemetally/uglerod_lat_carboneum/11-1-0-16', rusname: 'Углерод', mass: '12.0107', oxidation: ' -4, +2,+4', index: 6, shortname: 'C' },
    { bgcolor: '#00FFFF', type: 'неметалл', link: 'nemetally/azot_lat_nitrogenium/11-1-0-59', rusname: ' Азот', mass: '14.00674', oxidation: ' -3,+1,+2,+3,+4,+5', index: 7, shortname: 'N' },
    { bgcolor: '#00FFFF', type: 'неметалл', link: 'nemetally/kislorod_lat_okhygenium/11-1-0-67', rusname: 'Кислород', mass: '15.9994', oxidation: ' -2,-1,+2', index: 8, shortname: 'O' },
    { bgcolor: '#00FFFF', type: 'галоген', link: 'galogeny/ftor_lat_fluorum/9-1-0-32', rusname: 'Фтор', mass: '18.9984032', oxidation: ' -1', index: 9, shortname: 'F' },
    { bgcolor: '#00FFFF', type: 'инертный газ', link: 'inertnye-gazy/neon_lat_neon/10-1-0-63', rusname: 'Неон', mass: '20.1797', oxidation: 'в реакции не вступает', index: 10, shortname: 'Ne' },
    { bgcolor: '#00FF00', type: 'щелочный металл', link: 'shhelochnye-metally/natrij_lat_natrium/4-1-0-60', rusname: 'Натрий', mass: '22.98970', oxidation: ' +1', index: 11, shortname: 'Na' },
    { bgcolor: '#00FF00', type: 'щелочныйземельный металл', link: 'shhelochnozemelnye-metally/magnij_lat_magnesium/5-1-0-55', rusname: 'Магний', mass: '26.3050', oxidation: ' +2', index: 12, shortname: 'Mg' },
    { bgcolor: '#00FFFF', type: 'легкий металл', link: 'legkie-metally/aljuminij/7-1-0-3', rusname: 'Алюминий', mass: '26.981538', oxidation: ' +3', index: 13, shortname: 'Al' },
    { bgcolor: '#00FFFF', type: 'полуметалл', link: 'polumetally/kremnij_lat_silicium/8-1-0-90', rusname: 'Кремний', mass: '28.0855', oxidation: ' -4, +2,+4', index: 14, shortname: 'Si' },
    { bgcolor: '#00FFFF', type: 'неметалл', link: 'nemetally/fosfor_lat_phosphopus/11-1-0-69', rusname: 'Фосфор', mass: '30.973761', oxidation: ' -3,+1,+3,+4,+5', index: 15, shortname: 'P' },
    { bgcolor: '#00FFFF', type: 'неметалл', link: 'nemetally/sera_lat_sulfur/11-1-0-85', rusname: 'Сера', mass: '32.066', oxidation: ' -2,+2,+4,+6', index: 16, shortname: 'S' },
    { bgcolor: '#00FFFF', type: 'галоген', link: 'galogeny/khlor_lat_shlorum/9-1-0-21', rusname: 'Хлор', mass: '35.4527', oxidation: ' -1, +1,+3,+5,+7', index: 17, shortname: 'Cl' },
    { bgcolor: '#00FFFF', type: 'инертный газ', link: 'inertnye-gazy/argon_lat_argon/10-1-0-5', rusname: 'Аргон', mass: '38.948', oxidation: 'в реакции не вступает', index: 18, shortname: 'Ar' },
    { bgcolor: '#00FF00', type: 'щелочный металл', link: 'shhelochnye-metally/kalij_lat_kalium/4-1-0-48', rusname: 'Калий', mass: '39.09870', oxidation: ' +1', index: 19, shortname: 'K' },
    { bgcolor: '#00FF00', type: 'щелочныйземельный металл', link: 'shhelochnozemelnye-metally/kalcij_lat_calcium/5-1-0-17', rusname: 'Кальций', mass: '40.078', oxidation: ' +2', index: 20, shortname: 'Ca' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//skandij_lat_scandium/6-1-0-87', rusname: 'Скандий', mass: '44.955910', oxidation: ' +3', index: 21, shortname: 'Sc' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//titan_lat_titanium/6-1-0-99', rusname: 'Титан', mass: '47.867', oxidation: ' +3,+4', index: 22, shortname: 'Ti' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//vanadij_lat_vanadium/6-1-0-103', rusname: 'Ванадий', mass: '50.9415', oxidation: ' +2,+3,+4,+5', index: 23, shortname: 'V' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//khrom_lat_chromium/6-1-0-24', rusname: ' Хром', mass: '51.9961', oxidation: ' +2,+3,+4', index: 24, shortname: 'Cr' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//marganec_lat_manganum/6-1-0-56', rusname: 'Марганец', mass: '54.93805', oxidation: ' +2,+3,+4,+6,+7', index: 25, shortname: 'Mn' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//zhelezo_lat_ferrum/6-1-0-33', rusname: ' Железо', mass: '55.845', oxidation: ' +2,+3,+6', index: 26, shortname: 'Fe' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//kobalt_lat_sobaltum/6-1-0-23', rusname: 'Кобальт', mass: '58.93320', oxidation: ' +2,+3', index: 27, shortname: 'Co' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//nikel_lat_nissolum/6-1-0-64', rusname: 'Никель', mass: '58.6934', oxidation: '+2,+3', index: 28, shortname: 'Ni' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//med_lat_cuprum/6-1-0-26', rusname: ' Медь', mass: '63.546', oxidation: ' +1,+2,+3', index: 29, shortname: 'Cu' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//cink_lat_zincum/6-1-0-108', rusname: ' Цинк', mass: '65.39', oxidation: ' +2', index: 30, shortname: 'Zn' },
    { bgcolor: '#00FFFF', type: 'легкий металл', link: 'legkie-metally/gallij_lat_gallium/7-1-0-36', rusname: 'Галлий', mass: '69.723', oxidation: ' +3', index: 31, shortname: 'Ga' },
    { bgcolor: '#00FFFF', type: 'полуметалл', link: 'polumetally/germanij_lat_germanium/8-1-0-38', rusname: 'Германий', mass: '72.61', oxidation: ' +2,+4', index: 32, shortname: 'Ge' },
    { bgcolor: '#00FFFF', type: 'полуметалл', link: 'polumetally/myshjak_lat_arsenicum/8-1-0-6', rusname: ' Мышьяк', mass: '74.92160', oxidation: ' -3,+3,+6', index: 33, shortname: 'As' },
    { bgcolor: '#00FFFF', type: 'неметалл', link: 'nemetally/selen_lat_selenium/11-1-0-88', rusname: ' Селен', mass: '78.96', oxidation: ' -2, +2,+4,+6', index: 34, shortname: 'Se' },
    { bgcolor: '#00FFFF', type: 'галоген', link: 'galogeny/brom_lat_bromum/9-1-0-15', rusname: ' Бром', mass: '79.904', oxidation: ' -1,+1,+3,+5,+7', index: 35, shortname: 'Br' },
    { bgcolor: '#00FFFF', type: 'инертный газ', link: 'inertnye-gazy/kripton_lat_krypton/10-1-0-49', rusname: 'Криптон', mass: '83.80', oxidation: ' +2,+4', index: 36, shortname: 'Kr' },
    { bgcolor: '#00FF00', type: 'щелочный металл', link: 'shhelochnye-metally/rubidij_lat_rubidium/4-1-0-79', rusname: 'Рубидий', mass: '85.4678', oxidation: ' +1', index: 37, shortname: 'Rb' },
    { bgcolor: '#00FF00', type: 'щелочныйземельный металл', link: 'shhelochnozemelnye-metally/stroncij_lat_strontium/5-1-0-93', rusname: ' Стронций', mass: '87.62', oxidation: ' +2', index: 38, shortname: 'Sr' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//ittrij_lat_yttrium/6-1-0-106', rusname: ' Иттрий', mass: '88.90585', oxidation: ' +3', index: 39, shortname: 'Y' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//cirkonij_lat_zirconium/6-1-0-109', rusname: ' Цирконий', mass: '91.224', oxidation: ' +4', index: 40, shortname: 'Zr' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//niobij_lat_niobium/6-1-0-61', rusname: 'Ниобий', mass: '92.90638', oxidation: ' +2,+3,+4,+5', index: 41, shortname: 'Nb' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//molibden_lat_molibdaenum/6-1-0-57', rusname: 'Молибден', mass: '95.94', oxidation: ' +2,+3,+4,+5,+6,+7', index: 42, shortname: 'Mo' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//tekhnecij_lat_technetium/6-1-0-96', rusname: 'Технеций', mass: '97.907', oxidation: ' +2,+4,+6,+7', index: 43, shortname: 'Tc' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//rutenij_lat_ruthenium/6-1-0-84', rusname: ' Рутений', mass: '101.07', oxidation: ' +2,+3,+4,+6,+8', index: 44, shortname: 'Ru' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//rodij_lat_rhodium/6-1-0-82', rusname: ' Родий', mass: '102.90550', oxidation: ' +2,+3,+4,+6', index: 45, shortname: 'Rh' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//palladij_lat_palladium/6-1-0-72', rusname: 'Палладий', mass: '106.07', oxidation: ' +2,+3,+4,+6', index: 46, shortname: 'Pd' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//serebro/6-1-0-2', rusname: ' Серебро', mass: '107.8682', oxidation: ' +1,+2,+3', index: 47, shortname: 'Ag' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//kadmij_lat_cadmium/6-1-0-18', rusname: ' Кадмий', mass: '112.411', oxidation: ' +2', index: 48, shortname: 'Cd' },
    { bgcolor: '#00FFFF', type: 'легкий металл', link: 'legkie-metally/indij_lat_indium/7-1-0-46', rusname: 'Индий', mass: '114.818', oxidation: ' +3', index: 49, shortname: 'In' },
    { bgcolor: '#00FFFF', type: 'легкий металл', link: 'legkie-metally/olovo_lat_stannum/7-1-0-92', rusname: ' Олово', mass: '118.710', oxidation: ' +2,+4', index: 50, shortname: 'Sn' },
    { bgcolor: '#00FFFF', type: 'полуметалл', link: 'polumetally/surma_lat_stibium/8-1-0-86', rusname: ' Сурьма', mass: '121.760', oxidation: ' -3,+3,+5', index: 51, shortname: 'Sb' },
    { bgcolor: '#00FFFF', type: 'полуметалл', link: 'polumetally/tellur_lat_tellurium/8-1-0-97', rusname: 'Теллур', mass: '127.60', oxidation: ' -2,+2,+4,+6', index: 52, shortname: 'Te' },
    { bgcolor: '#00FFFF', type: 'галоген', link: 'galogeny/iod_lat_iodum/9-1-0-45', rusname: ' Иод', mass: '126.90447', oxidation: ' -1, +1,+3,+5,+7', index: 53, shortname: 'I' },
    { bgcolor: '#00FFFF', type: 'инертный газ', link: 'inertnye-gazy/ksenon_lat_xeno/10-1-0-105', rusname: ' Ксенон', mass: '131.29', oxidation: ' +2,+4,+6,+8', index: 54, shortname: 'Xe' },
    { bgcolor: '#00FF00', type: 'щелочный металл', link: 'shhelochnye-metally/francij_lat_francium/4-1-0-35', rusname: ' Цезий', mass: '132.90545', oxidation: ' +1', index: 55, shortname: 'Cs' },
    { bgcolor: '#00FF00', type: 'щелочныйземельный металл', link: 'shhelochnozemelnye-metally/barij_lat_baryum/5-1-0-10', rusname: ' Барий', mass: '137.327', oxidation: ' +2', index: 56, shortname: 'Ba' },
    { bgcolor: '#FFFF00', type: 'лантанид', link: 'lantanoidy//lantan_lat_lanthanum/13-1-0-50', rusname: ' Лантан', mass: '138.9055', oxidation: ' +3', index: 57, shortname: 'La' },

    { bgcolor: '#FF00FF', type: 'лантанид', link: 'lantanoidy//cerij_lat_cerium/13-1-0-19', rusname: ' Церий', mass: '140.116', oxidation: ' +3,+4', index: 58, shortname: 'Ce' },
    { bgcolor: '#FF00FF', type: 'лантанид', link: 'lantanoidy//prazeodim_lat_praseodimium/13-1-0-75', rusname: 'Празеодим', mass: '140.90765', oxidation: '+3,+4', index: 59, shortname: 'Pr' },
    { bgcolor: '#FF00FF', type: 'лантанид', link: 'lantanoidy//neodim_lat_neodimium/13-1-0-62', rusname: ' Неодим', mass: '144.24', oxidation: ' +3', index: 60, shortname: 'Nd' },
    { bgcolor: '#FF00FF', type: 'лантанид', link: 'lantanoidy//prometij_lat_prometium/13-1-0-73', rusname: 'Прометий', mass: '144.912', oxidation: ' +3', index: 61, shortname: 'Pm' },
    { bgcolor: '#FF00FF', type: 'лантанид', link: 'lantanoidy//samarij_lat_samarium/13-1-0-91', rusname: ' Самарий', mass: '150.36', oxidation: ' +2,+3', index: 62, shortname: 'Sm' },
    { bgcolor: '#FF00FF', type: 'лантанид', link: 'lantanoidy//evropij_lat_europium/13-1-0-31', rusname: ' Европий', mass: '151.964', oxidation: ' +3', index: 63, shortname: 'Eu' },
    { bgcolor: '#FF00FF', type: 'лантанид', link: 'lantanoidy//gadolinij_lat_gadolinium/13-1-0-37', rusname: ' Гадолиний', mass: '157.25', oxidation: ' +3', index: 64, shortname: 'Gd' },
    { bgcolor: '#FF00FF', type: 'лантанид', link: 'lantanoidy//terbij_lat_terbium/13-1-0-95', rusname: ' Тербий', mass: '144.24', oxidation: ' +3, +4', index: 65, shortname: 'Tb' },
    { bgcolor: '#FF00FF', type: 'лантанид', link: 'lantanoidy//disprozij_lat_dysprosium/13-1-0-28', rusname: ' Диспрозий', mass: '162.50', oxidation: ' +3,+4', index: 66, shortname: 'Dy' },
    { bgcolor: '#FF00FF', type: 'лантанид', link: 'lantanoidy//golmij_lat_holmium/13-1-0-43', rusname: 'Гольмий', mass: '164.9302', oxidation: ' +3', index: 67, shortname: 'Ho' },
    { bgcolor: '#FF00FF', type: 'лантанид', link: 'lantanoidy//ehrbij_lat_erbium/13-1-0-29', rusname: ' Эрбий', mass: '167.26', oxidation: ' +3', index: 68, shortname: 'Er' },
    { bgcolor: '#FF00FF', type: 'лантанид', link: 'lantanoidy//tulij_lat_thulium/13-1-0-101', rusname: ' Тулий', mass: '168.93421', oxidation: ' +2,+3', index: 69, shortname: 'Tm' },
    { bgcolor: '#FF00FF', type: 'лантанид', link: 'lantanoidy//itterbij_lat_ytterbium/13-1-0-107', rusname: ' Иттербий', mass: '173.04', oxidation: ' +2,+3', index: 70, shortname: 'Yb' },
    { bgcolor: '#FF00FF', type: 'лантанид', link: 'lantanoidy//ljutecij_lat_lutetium/13-31-0-53', rusname: ' Лютеций', mass: '174.967', oxidation: ' +3', index: 71, shortname: 'Lu' },

    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//gafnij_lat_hafnium/6-1-0-41', rusname: ' Гафний', mass: '178.49', oxidation: ' +4', index: 72, shortname: 'Hf' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//tantal_lat_tantalum/6-1-0-94', rusname: ' Тантал', mass: '180.9479', oxidation: ' +2,+3,+4,+5', index: 73, shortname: 'Ta' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//volfram_ili_tangsten-tu-lat-wolframium/6-1-0-104', rusname: 'Вольфрам', mass: '183.84', oxidation: ' -1, +1,+3,+5,+7', index: 74, shortname: 'W' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//renij_lat_rhenium/6-1-0-80', rusname: 'Рений', mass: '186.207', oxidation: ' +2,+3,+4,+6,+7', index: 75, shortname: 'Re' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//osmij_lat_osmium/6-1-0-68', rusname: 'Осмий', mass: '190.23', oxidation: ' +3,+4,+6,+8', index: 76, shortname: 'Os' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//iridij_lat_iridium/6-1-0-47', rusname: ' Иридий', mass: '192.217', oxidation: ' +2,+3,+4,+6', index: 77, shortname: 'Ir' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//platina_lat_platinum/6-1-0-76', rusname: ' Платина', mass: '195.078', oxidation: ' +2,+4,+6', index: 78, shortname: 'Pt' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//zoloto_lat_aurum/6-1-0-8', rusname: ' Золото', mass: '196.96655', oxidation: ' +1,+3', index: 79, shortname: 'Au' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//rtut_lat_hydrargyrum/6-1-0-42', rusname: ' Ртуть', mass: '200.59', oxidation: ' +1,+2', index: 80, shortname: 'Hg' },
    { bgcolor: '#00FFFF', type: 'легкий металл', link: 'legkie-metally/tallij_lat_tallium/7-1-0-100', rusname: ' Таллий', mass: '204.3833', oxidation: ' +1,+3', index: 81, shortname: 'Tl' },
    { bgcolor: '#00FFFF', type: 'легкий металл', link: 'legkie-metally/svinec_lat_plumbum/7-1-0-71', rusname: 'Свинец', mass: '207.2', oxidation: ' +2,+4', index: 82, shortname: 'Pb' },
    { bgcolor: '#00FFFF', type: 'легкий металл', link: 'legkie-metally/vismut_lat_bismuthum/7-1-0-13', rusname: 'Висмут', mass: '208.98038', oxidation: ' -3,+3,+5', index: 83, shortname: 'Bi' },
    { bgcolor: '#00FFFF', type: 'полуметалл', link: 'polumetally/polonij_lat_polonium/8-1-0-74', rusname: ' Полоний', mass: '208.982', oxidation: ' –2, +2, +4,+6', index: 84, shortname: 'Po' },
    { bgcolor: '#00FFFF', type: 'галоген', link: 'galogeny/astat_lat_astatium/9-1-0-7', rusname: ' Астат', mass: '209.987', oxidation: ' –1, +1, +3,+5,+7', index: 85, shortname: 'At' },
    { bgcolor: '#00FFFF', type: 'инертный газ', link: 'inertnye-gazy/radon_lat_radon/10-1-0-83', rusname: ' Радон', mass: '222.017', oxidation: ' +2,+4,+6', index: 86, shortname: 'Rn' },

    { bgcolor: '#00FF00', type: 'щелочный металл', link: 'shhelochnye-metally/francij_lat_francium/4-1-0-35', rusname: ' Франций', mass: '223.019', oxidation: '+1', index: 87, shortname: 'Fr' },
    { bgcolor: '#00FF00', type: 'щелочныйземельный металл', link: 'shhelochnozemelnye-metally/radij_lat_radium/5-1-0-78', rusname: ' Радий', mass: '226.', oxidation: ' +2', index: 88, shortname: 'Ra' },
    { bgcolor: '#FFFF00', type: 'актинид', link: 'aktinoidy/aktinij/12-1-0-1', rusname: ' Актиний', mass: '227.027', oxidation: ' +3', index: 89, shortname: 'Ac' },

    { bgcolor: '#FF00FF', type: 'актинид', link: 'aktinoidy/torij_lat_thorium/12-1-0-98', rusname: ' Торий', mass: '232.0381', oxidation: ' +3,+4', index: 90, shortname: 'Th' },
    { bgcolor: '#FF00FF', type: 'актинид', link: 'aktinoidy/protaktinij_lat_protactinium/12-1-0-70', rusname: ' Протактиний', mass: '231.0359', oxidation: '+2,+3,+4,+6', index: 91, shortname: 'Pa' },
    { bgcolor: '#FF00FF', type: 'актинид', link: 'aktinoidy/uran_lat_uranium/12-1-0-102', rusname: 'Уран', mass: '238.0289', oxidation: ' +3,+4,+5,+6', index: 92, shortname: 'U' },
    { bgcolor: '#FF00FF', type: 'актинид', link: 'aktinoidy/neptunij_lat_neptunium/12-1-0-66', rusname: 'Нептуний', mass: '237.048', oxidation: ' +3,+4,+5,+6,+7', index: 93, shortname: 'Np' },
    { bgcolor: '#FF00FF', type: 'актинид', link: 'aktinoidy/plutonij_lat_plutonium/12-1-0-77', rusname: 'Плутоний', mass: '244.064', oxidation: ' +3,+4,+5,+6,+7', index: 94, shortname: 'Pu' },
    { bgcolor: '#FF00FF', type: 'актинид', link: 'aktinoidy/americij_lat_americium/12-1-0-4', rusname: ' Америций', mass: '243.061', oxidation: ' +2,+3,+4,+5,+6', index: 95, shortname: 'Am' },
    { bgcolor: '#FF00FF', type: 'актинид', link: 'aktinoidy/kjurij_lat_curium/12-1-0-22', rusname: ' Кюрий', mass: '247.07', oxidation: ' +2,+3,+4,+6', index: 96, shortname: 'Cm' },
    { bgcolor: '#FF00FF', type: 'актинид', link: 'aktinoidy/berklij_lat_berkelium/12-1-0-14', rusname: 'Берклий', mass: '247.07', oxidation: ' +2,+3,+4', index: 97, shortname: 'Bk' },
    { bgcolor: '#FF00FF', type: 'актинид', link: 'aktinoidy/kalifornij_lat_californium/12-1-0-20', rusname: ' Калифорний', mass: '251.079', oxidation: ' +2,+3,+4', index: 98, shortname: 'Cf' },
    { bgcolor: '#FF00FF', type: 'актинид', link: 'aktinoidy/ehjnshtejnij_lat_einsteium/12-1-0-30', rusname: ' Эйнштейний', mass: '252.082', oxidation: ' +2,+3', index: 99, shortname: 'Es' },
    { bgcolor: '#FF00FF', type: 'актинид', link: 'aktinoidy/fermij_lat_fermium/12-1-0-34', rusname: ' Фермий', mass: '257.095', oxidation: ' +2,+3', index: 100, shortname: 'Fm' },
    { bgcolor: '#FF00FF', type: 'актинид', link: 'aktinoidy/mendelevij_lat_mendelevium/12-1-0-54', rusname: 'Менелевий', mass: '258.098', oxidation: ' +2,+3', index: 101, shortname: 'Md' },
    { bgcolor: '#FF00FF', type: 'актинид', link: 'aktinoidy/nobelij_lat_nobelium/12-1-0-65', rusname: ' Нобелий', mass: '259.100', oxidation: ' +2,+3', index: 102, shortname: 'No' },
    { bgcolor: '#FF00FF', type: 'актинид', link: 'aktinoidy/lourensij_lat_lowrencium/12-1-0-52', rusname: ' Лоуренций', mass: '260.105', oxidation: ' +3', index: 103, shortname: 'Lr' },

    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//rezerfordij_lat_rutherfordium/1-1-0-81', rusname: 'Резерфордий', mass: 'около 261', oxidation: ' +4', index: 104, shortname: 'Rf' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//dubnij_lat-dubnium/1-1-0-27', rusname: 'Дубний', mass: 'около 262', oxidation: ' +5', index: 105, shortname: 'Db' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//siborgij_lat_siborgium/6-1-0-89', rusname: 'Сиборгий', mass: 'около 263', oxidation: ' +4,+6', index: 106, shortname: 'Sg' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//borij_lat_bohrium/6-1-0-12', rusname: ' Борий', mass: 'около 264', oxidation: ' +2,+3,+4,+5,+6,+7', index: 107, shortname: 'Bh' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//khassij_lat_hassium/6-1-0-44', rusname: 'Хассий', mass: 'около 265', oxidation: ' +2,+3,+4,+5,+6,+7,+8', index: 108, shortname: 'Hs' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//mejtnerij_lat_meitnerium/6-1-0-58', rusname: 'Мейтнерий', mass: 'около 266', oxidation: ' +1,+3,+5', index: 109, shortname: 'Mt' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//darmshtadtij_lat_darmstadtium/6-1-0-115', rusname: 'Дармштадтий', mass: 'около 281', oxidation: ' нет', index: 110, shortname: 'Ds' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//rentge_nij_lat_roentgenium/6-1-0-116', rusname: 'Рентгений', mass: 'около 281', oxidation: ' нет', index: 111, shortname: 'Rg' },
    { bgcolor: '#FFFF00', type: 'переходной металл', link: 'perekhodnye-metally//kopernicij_lat_copernicium/6-1-0-117', rusname: 'Коперниций', mass: '285,177(4)', oxidation: ' нет', index: 112, shortname: 'Cn' },
    { bgcolor: '#00FFFF', type: 'легкий металл', link: 'legkie-metally/nikhonij_lat_nihonium/7-1-0-120', rusname: 'Нихоний', mass: 'около 286', oxidation: '−1, +1, +2, +3, +5', index: 113, shortname: 'Nh' },
    { bgcolor: '#00FFFF', type: 'легкий металл', link: 'legkie-metally/flerovij_lat_flerovium/7-1-0-122', rusname: 'Флеровий', mass: 'около 289', oxidation: '+2, +4', index: 114, shortname: 'Fl' },
    { bgcolor: '#00FFFF', type: 'легкий металл', link: 'legkie-metally/moskovij_lat_moscovium/7-1-0-123', rusname: 'Московий', mass: '289', oxidation: '−3, +1, +3, +5 ', index: 115, shortname: 'Mc' },
    { bgcolor: '#00FFFF', type: 'легкий металл', link: 'legkie-metally/livermo_rij_lat_livermorium/7-1-0-119', rusname: 'Ливерморий', mass: '293', oxidation: '−2, +2, +4, +6 ', index: 116, shortname: 'Lv' },
    { bgcolor: '#00FFFF', type: 'галоген', link: 'galogeny/tennessin_lat_tennessine/9-1-0-121', rusname: 'Теннессин ', mass: ' 294', oxidation: ' -1, +1, +3, +5, +7', index: 117, shortname: 'Ts' },
    { bgcolor: '#00FFFF', type: 'инертный газ', link: 'inertnye-gazy/oganeson_lat_oganesson/10-1-0-118', rusname: 'Оганесон', mass: ' 294', oxidation: ' -1, 0, +1, +2, +4, +6', index: 118, shortname: 'Og' }
  ],
    select: {},
    selrow: null,
    rows: [
      { count: 2, start: 1, break: 0, offset: 0 },
      { count: 8, start: 3, break: 0, offset: 0 },
      { count: 8, start: 11, break: 0, offset: 0 },
      { count: 18, start: 19, break: 0, offset: 0 },
      { count: 18, start: 37, break: 0, offset: 0 },
      { count: 18, start: 55, break: 57, offset: 14 },
      { count: 18, start: 87, break: 89, offset: 14 },
      { count: 14, start: 57, break: 0, offset: 0 },
      { count: 14, start: 89, break: 0, offset: 0 }
    ]
  },
  mutations: {
    SEL_ELEMENT (state, obj) {
      state.select = state.elements[obj.index]
      state.selrow = obj.row
    }
  },
  actions: {
    selElement ({ commit }, obj) {
      commit('SEL_ELEMENT', obj)
    }
  },
  getters: {
    elements: state => state.elements,
    rows: state => state.rows,
    elementindex: state => (id) => {
      return state.elements.findIndex((el) => {
        return el.index === id
      })
    },
    select: state => state.select,
    selrow: state => state.selrow,
    fullurl: state => (url) => state.baseUrl + url
  }
})
Vue.component('app-element', {
  name: 'appElement',
  props: {
    shortName: {
      type: String
    },
    background: {
      type: String
    },
    index: {
      type: Number
    },
    typeElement: {
      type: String
    }
  },
  data () {
    return {
      ind: null
    }
  },
  computed: {
    typecolor () {
      switch (this.typeElement) {
        case 'неметалл': return '#3473d2'
        case 'инертный газ': return '#239e8e'
        case 'щелочный металл': return '#d3a223'
        case 'щелочныйземельный металл': return '#d35223'
        case 'полуметалл': return '#a1a310'
        case 'галоген': return '#914390'
        case 'легкий металл': return '#bb80a0'
        case 'переходной металл': return '#9b9040'
        case 'лантанид': return '#e455d0'
        case 'актинид': return '#849880'
      }
      return '#232323'
    },
    getRowInd () {
      if (this.index <= 2) return 1
      if (this.index > 2 && this.index <= 10) return 2
      if (this.index >= 11 && this.index <= 18) return 3
      if (this.index >= 19 && this.index <= 36) return 4
      if (this.index >= 37 && this.index <= 54) return 5
      if (this.index >= 55 && this.index <= 86) return 6
      if (this.index >= 87 && this.index <= 118) return 7
      return null
    }
  },
  methods: {
    selelem () {
      console.log(this.index)
      this.$store.dispatch('selElement', {
        index: this.index,
        row: this.getRowInd
      })
    },
    clelem () {
      this.ind = this.$store.getters.elementindex(this.index)
    }
  },
  template: `<td
    @mouseover="selelem"
    @click="selelem"
    :bgcolor="typecolor"
    class="element">
    {{ shortName }} {{ ind }}
  </td>`
})
Vue.component('app-rows', {
  props: {
    count: {
      type: Number
    },
    start: {
      type: Number
    },
    elements: {
      type: Array
    },
    jampStart: {
      type: Number
    },
    jampOffset: {
      type: Number
    }
  },
  template: `<tbody>
  <tr v-if="count === 2">
    <app-element
      :index="0"
      :short-name="elements[0].shortname"
      :background="elements[0].bgcolor"
      :type-element="elements[0].type"
    />
    <td :colspan="18-count">
    </td>
    <app-element
      :index="1"
      :short-name="elements[1].shortname"
      :background="elements[1].bgcolor"
      :type-element="elements[1].type"
    />
  </tr>
  <tr v-if="count === 8">
    <app-element
      :index="start - 1"
      :short-name="elements[start - 1].shortname"
      :background="elements[start - 1].bgcolor"
      :type-element="elements[start - 1].type"
    />
    <app-element
      :index="start"
      :short-name="elements[start].shortname"
      :background="elements[start].bgcolor"
      :type-element="elements[start].type"
    />
    <td :colspan="18-count">
    </td>
    <app-element
      v-for="ind in (count - 2)"
      :index="-1 + elements[start + ind].index"
      :key="elements[start + ind].index"
      :short-name="elements[start + ind].shortname"
      :background="elements[start + ind].bgcolor"
      :type-element="elements[start + ind].type"
    />
  </tr>
  <tr v-if="count === 18 && jampStart === 0">
    <app-element
      v-for="ind in count"
      :index="-1 + elements[start + ind - 2].index"
      :key="elements[start + ind - 2].index"
      :short-name="elements[start + ind - 2].shortname"
      :background="elements[start + ind - 2].bgcolor"
      :type-element="elements[start + ind - 2].type"
    />
  </tr>
  <tr v-if="count === 18 && jampStart !== 0">
    <app-element
      v-for="ind in 3"
      :key="elements[start + ind - 2].index"
      :index="-1 + elements[start + ind - 2].index"
      :short-name="elements[start + ind - 2].shortname"
      :background="elements[start + ind - 2].bgcolor"
      :type-element="elements[start + ind - 2].type"
    />
    <app-element
      v-for="ind in 15"
      :index="-1 + elements[start + jampOffset + ind + 1].index"
      :key="elements[start + jampOffset + ind + 1].index"
      :short-name="elements[start + jampOffset + ind + 1].shortname"
      :background="elements[start + jampOffset + ind + 1].bgcolor"
      :type-element="elements[start + jampOffset + ind + 1].type"
    />
  </tr>
  <tr v-if="count === 14">
    <app-element
      v-for="ind in 14"
      :index="-1 + elements[start + ind - 1].index"
      :key="elements[start + ind - 1].index"
      :short-name="elements[start + ind - 1].shortname"
      :background="elements[start + ind - 1].bgcolor"
      :type-element="elements[start + ind - 1].type"
    />
  </tr>
</tbody>`
})
Vue.component('app-elemtable', {
  data () {
    return {
      elements: [],
      rows: [],
      elementindex: 0
    }
  },
  created () {
     this.elements = this.$store.getters.elements
    this.elementindex = this.$store.getters.elementindex
    this.rows = this.$store.getters.rows
  },
  template: `<table class="table" border="0" cellspacing="1px" width="100%">
    <app-rows
      v-for="(r, k) in rows"
      :key="k"
      :count="r.count"
      :start="r.start"
      :jamp-start="r.break"
      :jamp-offset="r.offset"
      :elements="elements"
    />
    <!-- <tbody>
      <tr
        v-for="(el, k) in elements"
        :key="100+k"
      >
      <td>DB: {{ el.index }}</td>
      <td>ARRINDEX: {{ elementindex(el.index) }}</td>
      <td>NAME: {{ el.rusname }}</td>
      <td>SHNAME: {{ el.shortname }}</td>
      </tr>
    </tbody> -->
  </table>`
})
Vue.component('app-viewelement',{
  data() {
    return {
      select: {},
      fullurl: ''
    }
  },
  created () {
    this.select = this.$store.getters.select
    this.fullurl = this.$store.getters.fullurl
  },
  updated () {
    this.select = this.$store.getters.select
    this.fullurl = this.$store.getters.fullurl
  },

  template: `<div class="element">
  <div class="element__box" v-if="select">
    <h2 class="element__box-short">{{ select.shortname }}</h2>
    <h3 class="element__box-index">{{ select.index }}</h3>
    <h4 class="element__box-rus">{{ select.rusname }}</h4>
    <p class="element__box-mass">{{ select.mass }}</p>
    <p class="element__box-oxidation">{{ select.oxidation }}</p>
    <p class="element__box-type">{{ select.type }}</p>
    <p class="element__box-position">Группа: {{ selrow }}</p>
  </div>
</div>`
})
window.onload=function(){
      var app = new Vue({
        store,
        el: '#app',
      });
}