var gulp = require('gulp')
var replace = require('gulp-replace')
var concat = require('gulp-concat');
const fs = require("fs");
var rename = require("gulp-rename");
var convertEncoding = require('gulp-convert-encoding');


const list = [
    {
      // 1: H Водород
      melting: -259.14,
      bolling: -252.87,
      select: false,
      bgcolor: '#00FF00',
      type: 'неметалл',
      link: 'nemetally/vodorod_lat_hydrogenium/11-1-0-39',
      rusname: 'Водород',
      mass: 1.00794,
      oxidation: ' -1, +1',
      index: 1,
      shortname: 'H',
      lat: 'hydrogenium',
      pos: ' 1-й период, группа - IA (1)',
      electronegativity: 2.1
    },
    {
      // 2: He Гелий
      melting: -272.2,
      bolling: -268.93,
      select: false,
      bgcolor: '#00FFFF',
      type: 'инертный газ',
      link: 'inertnye-gazy/gelij_lat_helium/10-1-0-40',
      rusname: 'Гелий',
      mass: 4.002602,
      oxidation: 'not',
      index: 2,
      shortname: 'He',
      lat: 'helium',
      pos: ' 1-й период, группа - VIIIA (18)',
      electronegativity: 5.5
    },
    {
      // 3: Li Литий
      melting: 180.54,
      bolling: 1347,
      select: false,
      bgcolor: '#00FF00',
      type: 'щелочный металл',
      link: 'shhelochnye-metally/litij_lat_lithium/4-1-0-51',
      rusname: 'Литий',
      mass: 6.941,
      oxidation: ' +1',
      index: 3,
      shortname: 'Li',
      lat: 'lithium',
      pos: ' 2-й период, группа - IA (1)',
      electronegativity: 2.1
    },
    {
      // 4: Be Бериллий
      melting: 1278,
      bolling: 2970,
      select: false,
      bgcolor: '#00FF00',
      type: 'щелочныйземельный металл',
      link: 'shhelochnozemelnye-metally/berillij_lat_veryllium/5-1-0-11',
      rusname: 'Бериллий',
      mass: 9.012182,
      oxidation: ' +2',
      index: 4,
      shortname: 'Be',
      lat: 'veryllium',
      pos: ' 2-й период, группа - IIA (2)',
      electronegativity: 1.4
    },
    {
      // 5: B Бор
      melting: 2210,
      bolling: 2600,
      select: false,
      bgcolor: '#00FFFF',
      type: 'полуметалл',
      link: 'polumetally/bor_lat_borum/8-1-0-9',
      rusname: 'Бор',
      mass: 10.811,
      oxidation: ' -3, +3',
      index: 5,
      shortname: 'B',
      lat: 'borum',
      pos: ' 2-й период, группа - IIIA (13)',
      electronegativity: 2
    },
    {
      // 6: C Углерод
      melting: 3550,
      bolling: 4827,
      select: false,
      bgcolor: '#00FFFF',
      type: 'неметалл',
      link: 'nemetally/uglerod_lat_carboneum/11-1-0-16',
      rusname: 'Углерод',
      mass: 12.0107,
      oxidation: ' -4, +2,+4',
      index: 6,
      shortname: 'C',
      lat: 'carboneum',
      pos: ' 2-й период, группа - IVA (14)',
      electronegativity: 2.5
    },
    {
      // 7: N  Азот
      melting: -209.86,
      bolling: -195.8,
      select: false,
      bgcolor: '#00FFFF',
      type: 'неметалл',
      link: 'nemetally/azot_lat_nitrogenium/11-1-0-59',
      rusname: ' Азот',
      mass: 14.00674,
      oxidation: ' -3,+1,+2,+3,+4,+5',
      index: 7,
      shortname: 'N',
      lat: 'nitrogenium',
      pos: ' 2-й период, группа - VA (15)',
      electronegativity: 3
    },
    {
      // 8: O Кислород
      melting: -218.4,
      bolling: -182.96,
      select: false,
      bgcolor: '#00FFFF',
      type: 'неметалл',
      link: 'nemetally/kislorod_lat_okhygenium/11-1-0-67',
      rusname: 'Кислород',
      mass: 15.9994,
      oxidation: ' -2,-1,+2',
      index: 8,
      shortname: 'O',
      lat: 'okhygenium',
      pos: ' 2-й период, группа - VIA (16)',
      electronegativity: 3.5
    },
    {
      // 9: F Фтор
      melting: -216.62,
      bolling: -188.11,
      select: false,
      bgcolor: '#00FFFF',
      type: 'галоген',
      link: 'galogeny/ftor_lat_fluorum/9-1-0-32',
      rusname: 'Фтор',
      mass: 18.9984032,
      oxidation: ' -1',
      index: 9,
      shortname: 'F',
      lat: 'fluorum',
      pos: ' 2-й период, группа - VIIA (1)',
      electronegativity: 4.1
    },
    {
      // 10: Ne Неон
      melting: -248.7,
      bolling: -246.05,
      select: false,
      bgcolor: '#00FFFF',
      type: 'инертный газ',
      link: 'inertnye-gazy/neon_lat_neon/10-1-0-63',
      rusname: 'Неон',
      mass: 20.1797,
      oxidation: 'not',
      index: 10,
      shortname: 'Ne',
      lat: 'neon',
      pos: ' 1-й период, группа - VIIIA (18)',
      electronegativity: 4.8
    },
    {
      // 11: Na Натрий
      melting: 97.86,
      bolling: 883.15,
      select: false,
      bgcolor: '#00FF00',
      type: 'щелочный металл',
      link: 'shhelochnye-metally/natrij_lat_natrium/4-1-0-60',
      rusname: 'Натрий',
      mass: 22.9897,
      oxidation: ' +1',
      index: 11,
      shortname: 'Na',
      lat: 'natrium',
      pos: ' 1-й период, группа - IA (1)',
      electronegativity: 1
    },
    {
      // 12: Mg Магний
      melting: 648.8,
      bolling: 1107,
      select: false,
      bgcolor: '#00FF00',
      type: 'щелочныйземельный металл',
      link: 'shhelochnozemelnye-metally/magnij_lat_magnesium/5-1-0-55',
      rusname: 'Магний',
      mass: 26.305,
      oxidation: ' +2',
      index: 12,
      shortname: 'Mg',
      lat: 'magnesium',
      pos: ' 3-й период, группа - IIA (2)',
      electronegativity: 1.2
    },
    {
      // 13: Al Алюминий
      melting: 660.37,
      bolling: 2467,
      select: false,
      bgcolor: '#00FFFF',
      type: 'легкий металл',
      link: 'legkie-metally/aljuminij/7-1-0-3',
      rusname: 'Алюминий',
      mass: 26.981538,
      oxidation: ' +3',
      index: 13,
      shortname: 'Al',
      lat: 'none',
      pos: ' 3-й период, группа - IIIA (13)',
      electronegativity: 1.4
    },
    {
      // 14: Si Кремний
      melting: 1412,
      bolling: 2355,
      select: false,
      bgcolor: '#00FFFF',
      type: 'полуметалл',
      link: 'polumetally/kremnij_lat_silicium/8-1-0-90',
      rusname: 'Кремний',
      mass: 28.0855,
      oxidation: ' -4, +2,+4',
      index: 14,
      shortname: 'Si',
      lat: 'silicium',
      pos: ' 3-й период, группа - IVA (14)',
      electronegativity: 1.7
    },
    {
      // 15: P Фосфор
      melting: 44.14,
      bolling: 280,
      select: false,
      bgcolor: '#00FFFF',
      type: 'неметалл',
      link: 'nemetally/fosfor_lat_phosphopus/11-1-0-69',
      rusname: 'Фосфор',
      mass: 30.973761,
      oxidation: ' -3,+1,+3,+4,+5',
      index: 15,
      shortname: 'P',
      lat: 'phosphopus',
      pos: ' 3-й период, группа - VA (2)',
      electronegativity: 2.1
    },
    {
      // 16: S Сера
      melting: 112.8,
      bolling: 444.674,
      select: false,
      bgcolor: '#00FFFF',
      type: 'неметалл',
      link: 'nemetally/sera_lat_sulfur/11-1-0-85',
      rusname: 'Сера',
      mass: 32.066,
      oxidation: ' -2,+2,+4,+6',
      index: 16,
      shortname: 'S',
      lat: 'sulfur',
      pos: ' 3-й период, группа - VIA (16)',
      electronegativity: 2
    },
    {
      // 17: Cl Хлор
      melting: -100.98,
      bolling: -34.6,
      select: false,
      bgcolor: '#00FFFF',
      type: 'галоген',
      link: 'galogeny/khlor_lat_shlorum/9-1-0-21',
      rusname: 'Хлор',
      mass: 35.4527,
      oxidation: ' -1, +1,+3,+5,+7',
      index: 17,
      shortname: 'Cl',
      lat: 'shlorum',
      pos: ' 3-й период, группа - VIIA (17)',
      electronegativity: 3.16
    },
    {
      // 18: Ar Аргон
      melting: -189.2,
      bolling: -185.7,
      select: false,
      bgcolor: '#00FFFF',
      type: 'инертный газ',
      link: 'inertnye-gazy/argon_lat_argon/10-1-0-5',
      rusname: 'Аргон',
      mass: 38.948,
      oxidation: 'not',
      index: 18,
      shortname: 'Ar',
      lat: 'argon',
      pos: ' 3-й период, группа - VIIIA (18)',
      electronegativity: 3.2
    },
    {
      // 19: K Калий
      melting: 63.65,
      bolling: 774,
      select: false,
      bgcolor: '#00FF00',
      type: 'щелочный металл',
      link: 'shhelochnye-metally/kalij_lat_kalium/4-1-0-48',
      rusname: 'Калий',
      mass: 39.0987,
      oxidation: ' +1',
      index: 19,
      shortname: 'K',
      lat: 'kalium',
      pos: ' 4-й период, группа - IA (1)',
      electronegativity: 0.9
    },
    {
      // 20: Ca Кальций
      melting: 839,
      bolling: 1487,
      select: false,
      bgcolor: '#00FF00',
      type: 'щелочныйземельный металл',
      link: 'shhelochnozemelnye-metally/kalcij_lat_calcium/5-1-0-17',
      rusname: 'Кальций',
      mass: 40.078,
      oxidation: ' +2',
      index: 20,
      shortname: 'Ca',
      lat: 'calcium',
      pos: ' 4-й период, группа - IIA (2)',
      electronegativity: 1.2
    },
    {
      // 21: Sc Скандий
      melting: 1541,
      bolling: 2831,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/skandij_lat_scandium/6-1-0-87',
      rusname: 'Скандий',
      mass: 44.95591,
      oxidation: ' +3',
      index: 21,
      shortname: 'Sc',
      lat: 'scandium',
      pos: ' 4-й период, группа - IIIB (3)',
      electronegativity: 1.2
    },
    {
      // 22: Ti Титан
      melting: 1670,
      bolling: 3287,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/titan_lat_titanium/6-1-0-99',
      rusname: 'Титан',
      mass: 47.867,
      oxidation: ' +3,+4',
      index: 22,
      shortname: 'Ti',
      lat: 'titanium',
      pos: ' 4-й период, группа - IVB (4)',
      electronegativity: 1
    },
    {
      // 23: V Ванадий
      melting: 1890,
      bolling: 3380,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/vanadij_lat_vanadium/6-1-0-103',
      rusname: 'Ванадий',
      mass: 50.9415,
      oxidation: ' +2,+3,+4,+5',
      index: 23,
      shortname: 'V',
      lat: 'vanadium',
      pos: ' 4-й период, группа - VВ (5)',
      electronegativity: 1.6
    },
    {
      // 24: Cr  Хром
      melting: 1857,
      bolling: 2672,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/khrom_lat_chromium/6-1-0-24',
      rusname: ' Хром',
      mass: 51.9961,
      oxidation: ' +2,+3,+4',
      index: 24,
      shortname: 'Cr',
      lat: 'chromium',
      pos: ' 4-й период, группа - VIB (6)',
      electronegativity: 1.66
    },
    {
      // 25: Mn Марганец
      melting: 1244,
      bolling: 1962,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/marganec_lat_manganum/6-1-0-56',
      rusname: 'Марганец',
      mass: 54.93805,
      oxidation: ' +2,+3,+4,+6,+7',
      index: 25,
      shortname: 'Mn',
      lat: 'manganum',
      pos: ' 4-й период, группа - VIIВ (7)',
      electronegativity: 1.5
    },
    {
      // 26: Fe  Железо
      melting: 1535,
      bolling: 2750,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/zhelezo_lat_ferrum/6-1-0-33',
      rusname: ' Железо',
      mass: 55.845,
      oxidation: ' +2,+3,+6',
      index: 26,
      shortname: 'Fe',
      lat: 'ferrum',
      pos: ' 4-й период, группа - VIIIВ (8)',
      electronegativity: 1.8
    },
    {
      // 27: Co Кобальт
      melting: 1495,
      bolling: 2870,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/kobalt_lat_sobaltum/6-1-0-23',
      rusname: 'Кобальт',
      mass: 58.9332,
      oxidation: ' +2,+3',
      index: 27,
      shortname: 'Co',
      lat: 'sobaltum',
      pos: ' 4-й период, группа - VIIIВ (9).',
      electronegativity: 1.88
    },
    {
      // 28: Ni Никель
      melting: 1453,
      bolling: 2732,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/nikel_lat_nissolum/6-1-0-64',
      rusname: 'Никель',
      mass: 58.6934,
      oxidation: '+2,+3',
      index: 28,
      shortname: 'Ni',
      lat: 'nissolum',
      pos: ' 4-й период, группа - VIIIВ (10).',
      electronegativity: 0
    },
    {
      // 29: Cu  Медь
      melting: 1083.4,
      bolling: 2567,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/med_lat_cuprum/6-1-0-26',
      rusname: ' Медь',
      mass: 63.546,
      oxidation: ' +1,+2,+3',
      index: 29,
      shortname: 'Cu',
      lat: 'cuprum',
      pos: ' 4-й период, группа - IВ (11).',
      electronegativity: 1.9
    },
    {
      // 30: Zn  Цинк
      melting: 419.88,
      bolling: 907,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/cink_lat_zincum/6-1-0-108',
      rusname: ' Цинк',
      mass: 65.39,
      oxidation: ' +2',
      index: 30,
      shortname: 'Zn',
      lat: 'zincum',
      pos: ' 5-й период, группа - (4).',
      electronegativity: 1.66
    },
    {
      // 31: Ga Галлий
      melting: 29.78,
      bolling: 2403,
      select: false,
      bgcolor: '#00FFFF',
      type: 'легкий металл',
      link: 'legkie-metally/gallij_lat_gallium/7-1-0-36',
      rusname: 'Галлий',
      mass: 69.723,
      oxidation: ' +3',
      index: 31,
      shortname: 'Ga',
      lat: 'gallium',
      pos: ' 4-й период, группа - IIIA (13).',
      electronegativity: 1.6
    },
    {
      // 32: Ge Германий
      melting: 937.4,
      bolling: 2830,
      select: false,
      bgcolor: '#00FFFF',
      type: 'полуметалл',
      link: 'polumetally/germanij_lat_germanium/8-1-0-38',
      rusname: 'Германий',
      mass: 72.61,
      oxidation: ' +2,+4',
      index: 32,
      shortname: 'Ge',
      lat: 'germanium',
      pos: ' 4-й период, группа - IVA (14).'
    },
    {
      // 33: As  Мышьяк
      melting: 817,
      bolling: 615,
      select: false,
      bgcolor: '#00FFFF',
      type: 'полуметалл',
      link: 'polumetally/myshjak_lat_arsenicum/8-1-0-6',
      rusname: ' Мышьяк',
      mass: 74.9216,
      oxidation: ' -3,+3,+6',
      index: 33,
      shortname: 'As',
      lat: 'arsenicum',
      pos: ' 4-й период, группа - VА (15).',
      electronegativity: 2.1
    },
    {
      // 34: Se  Селен
      melting: 217,
      bolling: 684.9,
      select: false,
      bgcolor: '#00FFFF',
      type: 'неметалл',
      link: 'nemetally/selen_lat_selenium/11-1-0-88',
      rusname: ' Селен',
      mass: 78.96,
      oxidation: ' -2, +2,+4,+6',
      index: 34,
      shortname: 'Se',
      lat: 'selenium',
      pos: ' 4-й период, группа - VIA (16).',
      electronegativity: 2.4
    },
    {
      // 35: Br  Бром
      melting: -7.25,
      bolling: 58.78,
      select: false,
      bgcolor: '#00FFFF',
      type: 'галоген',
      link: 'galogeny/brom_lat_bromum/9-1-0-15',
      rusname: ' Бром',
      mass: 79.904,
      oxidation: ' -1,+1,+3,+5,+7',
      index: 35,
      shortname: 'Br',
      lat: 'bromum',
      pos: ' 4-й период, группа - VIIА ().',
      electronegativity: 2.8
    },
    {
      // 36: Kr Криптон
      melting: -156.6,
      bolling: -152.3,
      select: false,
      bgcolor: '#00FFFF',
      type: 'инертный газ',
      link: 'inertnye-gazy/kripton_lat_krypton/10-1-0-49',
      rusname: 'Криптон',
      mass: 83.8,
      oxidation: ' +2,+4',
      index: 36,
      shortname: 'Kr',
      lat: 'krypton',
      pos: ' 4-й период, группа - VIA (16).',
      electronegativity: 2.94
    },
    {
      // 37: Rb Рубидий
      melting: 38.89,
      bolling: 687.2,
      select: false,
      bgcolor: '#00FF00',
      type: 'щелочный металл',
      link: 'shhelochnye-metally/rubidij_lat_rubidium/4-1-0-79',
      rusname: 'Рубидий',
      mass: 85.4678,
      oxidation: ' +1',
      index: 37,
      shortname: 'Rb',
      lat: 'rubidium',
      pos: ' 5-й период, группа - IA(1).',
      electronegativity: 0.8
    },
    {
      // 38: Sr  Стронций
      melting: 769,
      bolling: 1384,
      select: false,
      bgcolor: '#00FF00',
      type: 'щелочныйземельный металл',
      link: 'shhelochnozemelnye-metally/stroncij_lat_strontium/5-1-0-93',
      rusname: ' Стронций',
      mass: 87.62,
      oxidation: ' +2',
      index: 38,
      shortname: 'Sr',
      lat: 'strontium',
      pos: ' 5-й период, группа - IIА (2).',
      electronegativity: 1
    },
    {
      // 39: Y  Иттрий
      melting: 1522,
      bolling: 3337,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/ittrij_lat_yttrium/6-1-0-106',
      rusname: ' Иттрий',
      mass: 88.90585,
      oxidation: ' +3',
      index: 39,
      shortname: 'Y',
      lat: 'yttrium',
      pos: ' 5-й период, группа -IIIB (3).',
      electronegativity: 1.11
    },
    {
      // 40: Zr  Цирконий
      melting: 1852,
      bolling: 4377,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/cirkonij_lat_zirconium/6-1-0-109',
      rusname: ' Цирконий',
      mass: 91.224,
      oxidation: ' +4',
      index: 40,
      shortname: 'Zr',
      lat: 'zirconium',
      pos: ' 5-й период, группа -IVB (4).',
      electronegativity: 1.4
    },
    {
      // 41: Nb Ниобий
      melting: 2468,
      bolling: 4742,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/niobij_lat_niobium/6-1-0-61',
      rusname: 'Ниобий',
      mass: 92.90638,
      oxidation: ' +2,+3,+4,+5',
      index: 41,
      shortname: 'Nb',
      lat: 'niobium',
      pos: ' 5-й период, группа - VВ(5).',
      electronegativity: 1.6
    },
    {
      // 42: Mo Молибден
      melting: 2617,
      bolling: 4612,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/molibden_lat_molibdaenum/6-1-0-57',
      rusname: 'Молибден',
      mass: 95.94,
      oxidation: ' +2,+3,+4,+5,+6,+7',
      index: 42,
      shortname: 'Mo',
      lat: 'molibdaenum',
      pos: ' 5-й период, группа - (6).',
      electronegativity: 1.8
    },
    {
      // 43: Tc Технеций
      melting: 2172,
      bolling: 4877,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/tekhnecij_lat_technetium/6-1-0-96',
      rusname: 'Технеций',
      mass: 97.907,
      oxidation: ' +2,+4,+6,+7',
      index: 43,
      shortname: 'Tc',
      lat: 'technetium',
      pos: ' 5-й период, группа - VIIB (7)',
      electronegativity: 1.9
    },
    {
      // 44: Ru  Рутений
      melting: 2310,
      bolling: 3900,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/rutenij_lat_ruthenium/6-1-0-84',
      rusname: ' Рутений',
      mass: 101.07,
      oxidation: ' +2,+3,+4,+6,+8',
      index: 44,
      shortname: 'Ru',
      lat: 'ruthenium',
      pos: ' 5-й период, группа - VIIIB (8).',
      electronegativity: 1.42
    },
    {
      // 45: Rh  Родий
      melting: 1966,
      bolling: 3727,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/rodij_lat_rhodium/6-1-0-82',
      rusname: ' Родий',
      mass: 102.9055,
      oxidation: ' +2,+3,+4,+6',
      index: 45,
      shortname: 'Rh',
      lat: 'rhodium',
      pos: ' 5-й период, группа - VIIIВ(9).',
      electronegativity: 2.28
    },
    {
      // 46: Pd Палладий
      melting: 1552,
      bolling: 3140,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/palladij_lat_palladium/6-1-0-72',
      rusname: 'Палладий',
      mass: 106.07,
      oxidation: ' +2,+3,+4,+6',
      index: 46,
      shortname: 'Pd',
      lat: 'palladium',
      pos: ' 5-й период, группа - VIIIB(10).',
      electronegativity: 1.35
    },
    {
      // 47: Ag  Серебро
      melting: 961.93,
      bolling: 2212,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/serebro/6-1-0-2',
      rusname: ' Серебро',
      mass: 107.8682,
      oxidation: ' +1,+2,+3',
      index: 47,
      shortname: 'Ag',
      lat: 'none',
      pos: ' 5-й период, группа - IB(11).',
      electronegativity: 1.93
    },
    {
      // 48: Cd  Кадмий
      melting: 320.9,
      bolling: 765,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/kadmij_lat_cadmium/6-1-0-18',
      rusname: ' Кадмий',
      mass: 112.411,
      oxidation: ' +2',
      index: 48,
      shortname: 'Cd',
      lat: 'cadmium',
      pos: ' 5-й период, группа - IIВ(12).',
      electronegativity: 1.69
    },
    {
      // 49: In Индий
      melting: 156.78,
      bolling: 2080,
      select: false,
      bgcolor: '#00FFFF',
      type: 'легкий металл',
      link: 'legkie-metally/indij_lat_indium/7-1-0-46',
      rusname: 'Индий',
      mass: 114.818,
      oxidation: ' +3',
      index: 49,
      shortname: 'In',
      lat: 'indium',
      pos: ' 5-й период, группа - IIIA(13).',
      electronegativity: 1.78
    },
    {
      // 50: Sn  Олово
      melting: 231.88,
      bolling: 2270,
      select: false,
      bgcolor: '#00FFFF',
      type: 'легкий металл',
      link: 'legkie-metally/olovo_lat_stannum/7-1-0-92',
      rusname: ' Олово',
      mass: 118.71,
      oxidation: ' +2,+4',
      index: 50,
      shortname: 'Sn',
      lat: 'stannum',
      pos: ' 5-й период, группа - IVА(14).',
      electronegativity: 1.96
    },
    {
      // 51: Sb  Сурьма
      melting: 630.5,
      bolling: 1750,
      select: false,
      bgcolor: '#00FFFF',
      type: 'полуметалл',
      link: 'polumetally/surma_lat_stibium/8-1-0-86',
      rusname: ' Сурьма',
      mass: 121.76,
      oxidation: ' -3,+3,+5',
      index: 51,
      shortname: 'Sb',
      lat: 'stibium',
      pos: ' 5-й период, группа - VА(15).',
      electronegativity: 1.9
    },
    {
      // 52: Te Теллур
      melting: 449.5,
      bolling: 989.8,
      select: false,
      bgcolor: '#00FFFF',
      type: 'полуметалл',
      link: 'polumetally/tellur_lat_tellurium/8-1-0-97',
      rusname: 'Теллур',
      mass: 127.6,
      oxidation: ' -2,+2,+4,+6',
      index: 52,
      shortname: 'Te',
      lat: 'tellurium',
      pos: ' 5-й период, группа - VIA(16).',
      electronegativity: 2.1
    },
    {
      // 53: I  Иод
      melting: 113.5,
      bolling: 184.35,
      select: false,
      bgcolor: '#00FFFF',
      type: 'галоген',
      link: 'galogeny/iod_lat_iodum/9-1-0-45',
      rusname: ' Иод',
      mass: 126.90447,
      oxidation: ' -1, +1,+3,+5,+7',
      index: 53,
      shortname: 'I',
      lat: 'iodum',
      pos: ' 5-й период, группа - VIIА(17).',
      electronegativity: 2.66
    },
    {
      // 54: Xe  Ксенон
      melting: -111.9,
      bolling: -107.1,
      select: false,
      bgcolor: '#00FFFF',
      type: 'инертный газ',
      link: 'inertnye-gazy/ksenon_lat_xeno/10-1-0-105',
      rusname: ' Ксенон',
      mass: 131.29,
      oxidation: ' +2,+4,+6,+8',
      index: 54,
      shortname: 'Xe',
      lat: 'xeno',
      pos: ' 5-й период, группа - VIIIA(18).',
      electronegativity: 2.6
    },
    {
      // 55: Cs  Цезий
      melting: 28.5,
      bolling: 678.4,
      select: false,
      bgcolor: '#00FF00',
      type: 'щелочный металл',
      link: 'shhelochnye-metally/cezij_lat_cesium/4-1-0-25',
      rusname: ' Цезий',
      mass: 132.90545,
      oxidation: ' +1',
      index: 55,
      shortname: 'Cs',
      lat: 'francium',
      pos: ' 6-й период, группа - IA (1).',
      electronegativity: 0.7
    },
    {
      // 56: Ba  Барий
      melting: 725,
      bolling: 1640,
      select: false,
      bgcolor: '#00FF00',
      type: 'щелочныйземельный металл',
      link: 'shhelochnozemelnye-metally/barij_lat_baryum/5-1-0-10',
      rusname: ' Барий',
      mass: 137.327,
      oxidation: ' +2',
      index: 56,
      shortname: 'Ba',
      lat: 'baryum',
      pos: ' 6-й период, группа - IIA(1).',
      electronegativity: 0.9
    },
    {
      // 57: La  Лантан
      melting: 920,
      bolling: 3454,
      select: false,
      bgcolor: '#FFFF00',
      type: 'лантанид',
      link: 'lantanoidy/lantan_lat_lanthanum/13-1-0-50',
      rusname: ' Лантан',
      mass: 138.9055,
      oxidation: ' +3',
      index: 57,
      shortname: 'La',
      lat: 'lanthanum',
      pos: ' 6-й период, группа - IIIВ(3).',
      electronegativity: 1.1
    },
    {
      // 58: Ce  Церий
      melting: 798,
      bolling: 3426,
      select: false,
      bgcolor: '#FF00FF',
      type: 'лантанид',
      link: 'lantanoidy/cerij_lat_cerium/13-1-0-19',
      rusname: ' Церий',
      mass: 140.116,
      oxidation: ' +3,+4',
      index: 58,
      shortname: 'Ce',
      lat: 'cerium',
      pos: ' 6-й период, группа - IIIB(3).',
      electronegativity: 1.12
    },
    {
      // 59: Pr Празеодим
      melting: 931,
      bolling: 3512,
      select: false,
      bgcolor: '#FF00FF',
      type: 'лантанид',
      link: 'lantanoidy/prazeodim_lat_praseodimium/13-1-0-75',
      rusname: 'Празеодим',
      mass: 140.90765,
      oxidation: '+3,+4',
      index: 59,
      shortname: 'Pr',
      lat: 'praseodimium',
      pos: ' 6-й период, группа - IIIB(3).',
      electronegativity: 1.07
    },
    {
      // 60: Nd  Неодим
      melting: 1021,
      bolling: 3068,
      select: false,
      bgcolor: '#FF00FF',
      type: 'лантанид',
      link: 'lantanoidy/neodim_lat_neodimium/13-1-0-62',
      rusname: ' Неодим',
      mass: 144.24,
      oxidation: ' +3',
      index: 60,
      shortname: 'Nd',
      lat: 'neodimium',
      pos: ' 6-й период, группа - IIIB(3).',
      electronegativity: 1.07
    },
    {
      // 61: Pm Прометий
      melting: 1168,
      bolling: 2460,
      select: false,
      bgcolor: '#FF00FF',
      type: 'лантанид',
      link: 'lantanoidy/prometij_lat_prometium/13-1-0-73',
      rusname: 'Прометий',
      mass: 144.912,
      oxidation: ' +3',
      index: 61,
      shortname: 'Pm',
      lat: 'prometium',
      pos: ' 6-й период, группа - IIIB(3).',
      electronegativity: 1.07
    },
    {
      // 62: Sm  Самарий
      melting: 1077,
      bolling: 1791,
      select: false,
      bgcolor: '#FF00FF',
      type: 'лантанид',
      link: 'lantanoidy/samarij_lat_samarium/13-1-0-91',
      rusname: ' Самарий',
      mass: 150.36,
      oxidation: ' +2,+3',
      index: 62,
      shortname: 'Sm',
      lat: 'samarium',
      pos: ' 6-й период, группа - IIIB(3).',
      electronegativity: 1.07
    },
    {
      // 63: Eu  Европий
      melting: 822,
      bolling: 1597,
      select: false,
      bgcolor: '#FF00FF',
      type: 'лантанид',
      link: 'lantanoidy/evropij_lat_europium/13-1-0-31',
      rusname: ' Европий',
      mass: 151.964,
      oxidation: ' +3',
      index: 63,
      shortname: 'Eu',
      lat: 'europium',
      pos: ' 6-й период, группа - IIIB(3).',
      electronegativity: 1
    },
    {
      // 64: Gd  Гадолиний
      melting: 1312,
      bolling: 3250,
      select: false,
      bgcolor: '#FF00FF',
      type: 'лантанид',
      link: 'lantanoidy/gadolinij_lat_gadolinium/13-1-0-37',
      rusname: ' Гадолиний',
      mass: 157.25,
      oxidation: ' +3',
      index: 64,
      shortname: 'Gd',
      lat: 'gadolinium',
      pos: ' 6-й период, группа - IIIB(3).',
      electronegativity: 1.1
    },
    {
      // 65: Tb  Тербий
      melting: 1356,
      bolling: 3123,
      select: false,
      bgcolor: '#FF00FF',
      type: 'лантанид',
      link: 'lantanoidy/terbij_lat_terbium/13-1-0-95',
      rusname: ' Тербий',
      mass: 144.24,
      oxidation: ' +3, +4',
      index: 65,
      shortname: 'Tb',
      lat: 'terbium',
      pos: ' 6-й период, группа - IIIB(3).',
      electronegativity: 1.1
    },
    {
      // 66: Dy  Диспрозий
      melting: 1409,
      bolling: 2562,
      select: false,
      bgcolor: '#FF00FF',
      type: 'лантанид',
      link: 'lantanoidy/disprozij_lat_dysprosium/13-1-0-28',
      rusname: ' Диспрозий',
      mass: 162.5,
      oxidation: ' +3,+4',
      index: 66,
      shortname: 'Dy',
      lat: 'dysprosium',
      pos: ' 6-й период, группа - IIIB(3).',
      electronegativity: 1.1
    },
    {
      // 67: Ho Гольмий
      melting: 1474,
      bolling: 2695,
      select: false,
      bgcolor: '#FF00FF',
      type: 'лантанид',
      link: 'lantanoidy/golmij_lat_holmium/13-1-0-43',
      rusname: 'Гольмий',
      mass: 164.9302,
      oxidation: ' +3',
      index: 67,
      shortname: 'Ho',
      lat: 'holmium',
      pos: ' 6-й период, группа - IIIB(3).',
      electronegativity: 1.1
    },
    {
      // 68: Er  Эрбий
      melting: 1529,
      bolling: 2863,
      select: false,
      bgcolor: '#FF00FF',
      type: 'лантанид',
      link: 'lantanoidy/ehrbij_lat_erbium/13-1-0-29',
      rusname: ' Эрбий',
      mass: 167.26,
      oxidation: ' +3',
      index: 68,
      shortname: 'Er',
      lat: 'erbium',
      pos: ' 6-й период, группа - IIIB(3).',
      electronegativity: 1.11
    },
    {
      // 69: Tm  Тулий
      melting: 1545,
      bolling: 1947,
      select: false,
      bgcolor: '#FF00FF',
      type: 'лантанид',
      link: 'lantanoidy/tulij_lat_thulium/13-1-0-101',
      rusname: ' Тулий',
      mass: 168.93421,
      oxidation: ' +2,+3',
      index: 69,
      shortname: 'Tm',
      lat: 'thulium',
      pos: ' 6-й период, группа - IIIB(3).',
      electronegativity: 1.1
    },
    {
      // 70: Yb  Иттербий
      melting: 819,
      bolling: 1193,
      select: false,
      bgcolor: '#FF00FF',
      type: 'лантанид',
      link: 'lantanoidy/itterbij_lat_ytterbium/13-1-0-107',
      rusname: ' Иттербий',
      mass: 173.04,
      oxidation: ' +2,+3',
      index: 70,
      shortname: 'Yb',
      lat: 'ytterbium',
      pos: ' 6-й период, группа - IIIB(3).',
      electronegativity: 1.06
    },
    {
      // 71: Lu  Лютеций
      melting: 1663,
      bolling: 3302,
      select: false,
      bgcolor: '#FF00FF',
      type: 'лантанид',
      link: 'lantanoidy/ljutecij_lat_lutetium/13-31-0-53',
      rusname: ' Лютеций',
      mass: 174.967,
      oxidation: ' +3',
      index: 71,
      shortname: 'Lu',
      lat: 'lutetium',
      pos: ' 6-й период, группа - IIIB(3).',
      electronegativity: 1.14
    },
    {
      // 72: Hf  Гафний
      melting: 2227,
      bolling: 4602,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/gafnij_lat_hafnium/6-1-0-41',
      rusname: ' Гафний',
      mass: 178.49,
      oxidation: ' +4',
      index: 72,
      shortname: 'Hf',
      lat: 'hafnium',
      pos: ' 6-й период, группа - IVB(4).',
      electronegativity: 1.6
    },
    {
      // 73: Ta  Тантал
      melting: 2996,
      bolling: 5425,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/tantal_lat_tantalum/6-1-0-94',
      rusname: ' Тантал',
      mass: 180.9479,
      oxidation: ' +2,+3,+4,+5',
      index: 73,
      shortname: 'Ta',
      lat: 'tantalum',
      pos: ' 6-й период, группа - (5).',
      electronegativity: 1.5
    },
    {
      // 74: W Вольфрам
      melting: 3410,
      bolling: 5660,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/volfram_ili_tangsten-tu-lat-wolframium/6-1-0-104',
      rusname: 'Вольфрам',
      mass: 183.84,
      oxidation: ' -1, +1,+3,+5,+7',
      index: 74,
      shortname: 'W',
      lat: 'none',
      pos: ' 6-й период, группа - VIВ (6).',
      electronegativity: 1.7
    },
    {
      // 75: Re Рений
      melting: 3180,
      bolling: 5627,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/renij_lat_rhenium/6-1-0-80',
      rusname: 'Рений',
      mass: 186.207,
      oxidation: ' +2,+3,+4,+6,+7',
      index: 75,
      shortname: 'Re',
      lat: 'rhenium',
      pos: ' 6-й период, группа - VIIB(7).',
      electronegativity: 1.9
    },
    {
      // 76: Os Осмий
      melting: 3045,
      bolling: 5027,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/osmij_lat_osmium/6-1-0-68',
      rusname: 'Осмий',
      mass: 190.23,
      oxidation: ' +3,+4,+6,+8',
      index: 76,
      shortname: 'Os',
      lat: 'osmium',
      pos: ' 6-й период, группа - VIIIB(8).',
      electronegativity: 2.1
    },
    {
      // 77: Ir  Иридий
      melting: 2410,
      bolling: 4130,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/iridij_lat_iridium/6-1-0-47',
      rusname: ' Иридий',
      mass: 192.217,
      oxidation: ' +2,+3,+4,+6',
      index: 77,
      shortname: 'Ir',
      lat: 'iridium',
      pos: ' 6-й период, группа - VIIIB(9).',
      electronegativity: 2.2
    },
    {
      // 78: Pt  Платина
      melting: 1773.5,
      bolling: 3830,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/platina_lat_platinum/6-1-0-76',
      rusname: ' Платина',
      mass: 195.078,
      oxidation: ' +2,+4,+6',
      index: 78,
      shortname: 'Pt',
      lat: 'platinum',
      pos: ' 6-й период, группа - VIIIB(10).',
      electronegativity: 2.2
    },
    {
      // 79: Au  Золото
      melting: 1064.43,
      bolling: 2807,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/zoloto_lat_aurum/6-1-0-8',
      rusname: ' Золото',
      mass: 196.96655,
      oxidation: ' +1,+3',
      index: 79,
      shortname: 'Au',
      lat: 'aurum',
      pos: ' 6-й период, группа - IВ(11).',
      electronegativity: 2.4
    },
    {
      // 80: Hg  Ртуть
      melting: -38.86,
      bolling: 356.6,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/rtut_lat_hydrargyrum/6-1-0-42',
      rusname: ' Ртуть',
      mass: 200.59,
      oxidation: ' +1,+2',
      index: 80,
      shortname: 'Hg',
      lat: 'hydrargyrum',
      pos: ' 6-й период, группа - IIВ(12).',
      electronegativity: 1.9
    },
    {
      // 81: Tl  Таллий
      melting: 303.5,
      bolling: 1457,
      select: false,
      bgcolor: '#00FFFF',
      type: 'легкий металл',
      link: 'legkie-metally/tallij_lat_tallium/7-1-0-100',
      rusname: ' Таллий',
      mass: 204.3833,
      oxidation: ' +1,+3',
      index: 81,
      shortname: 'Tl',
      lat: 'tallium',
      pos: ' 6-й период, группа - IIIA(13).',
      electronegativity: 1.8
    },
    {
      // 82: Pb Свинец
      melting: 327.5,
      bolling: 1740,
      select: false,
      bgcolor: '#00FFFF',
      type: 'легкий металл',
      link: 'legkie-metally/svinec_lat_plumbum/7-1-0-71',
      rusname: 'Свинец',
      mass: 207.2,
      oxidation: ' +2,+4',
      index: 82,
      shortname: 'Pb',
      lat: 'plumbum',
      pos: ' 6-й период, группа - IVA(14).',
      electronegativity: 1.55
    },
    {
      // 83: Bi Висмут
      melting: 271.3,
      bolling: 1563,
      select: false,
      bgcolor: '#00FFFF',
      type: 'легкий металл',
      link: 'legkie-metally/vismut_lat_bismuthum/7-1-0-13',
      rusname: 'Висмут',
      mass: 208.98038,
      oxidation: ' -3,+3,+5',
      index: 83,
      shortname: 'Bi',
      lat: 'bismuthum',
      pos: ' 6-й период, группа - VA(15).',
      electronegativity: 1.9
    },
    {
      // 84: Po  Полоний
      melting: 254,
      bolling: 962,
      select: false,
      bgcolor: '#00FFFF',
      type: 'полуметалл',
      link: 'polumetally/polonij_lat_polonium/8-1-0-74',
      rusname: ' Полоний',
      mass: 208.982,
      oxidation: ' –2, +2, +4,+6',
      index: 84,
      shortname: 'Po',
      lat: 'polonium',
      pos: ' 6-й период, группа - VIA(16).',
      electronegativity: 1.76
    },
    {
      // 85: At  Астат
      melting: 302,
      bolling: 337,
      select: false,
      bgcolor: '#00FFFF',
      type: 'галоген',
      link: 'galogeny/astat_lat_astatium/9-1-0-7',
      rusname: ' Астат',
      mass: 209.987,
      oxidation: ' –1, +1, +3,+5,+7',
      index: 85,
      shortname: 'At',
      lat: 'astatium',
      pos: ' 6-й период, группа - VIIА(17).',
      electronegativity: 2.1
    },
    {
      // 86: Rn  Радон
      melting: -71,
      bolling: -61.8,
      select: false,
      bgcolor: '#00FFFF',
      type: 'инертный газ',
      link: 'inertnye-gazy/radon_lat_radon/10-1-0-83',
      rusname: ' Радон',
      mass: 222.017,
      oxidation: ' +2,+4,+6',
      index: 86,
      shortname: 'Rn',
      lat: 'radon',
      pos: ' 6-й период, группа - VIIIA(18).',
      electronegativity: 2.06
    },
    {
      // 87: Fr  Франций
      melting: 27,
      bolling: 677,
      select: false,
      bgcolor: '#00FF00',
      type: 'щелочный металл',
      link: 'shhelochnye-metally/francij_lat_francium/4-1-0-35',
      rusname: ' Франций',
      mass: 223.019,
      oxidation: '+1',
      index: 87,
      shortname: 'Fr',
      lat: 'francium',
      pos: ' 7-й период, группа - IА(1).',
      electronegativity: 0.86
    },
    {
      // 88: Ra  Радий
      melting: 970,
      bolling: 1140,
      select: false,
      bgcolor: '#00FF00',
      type: 'щелочныйземельный металл',
      link: 'shhelochnozemelnye-metally/radij_lat_radium/5-1-0-78',
      rusname: ' Радий',
      mass: 226,
      oxidation: ' +2',
      index: 88,
      shortname: 'Ra',
      lat: 'radium',
      pos: ' 7-й период, группа -IIA (2).',
      electronegativity: 0.97
    },
    {
      // 89: Ac  Актиний
      melting: 1050,
      bolling: 3250,
      select: false,
      bgcolor: '#FFFF00',
      type: 'актинид',
      link: 'aktinoidy/aktinij/12-1-0-1',
      rusname: ' Актиний',
      mass: 227.027,
      oxidation: ' +3',
      index: 89,
      shortname: 'Ac',
      lat: 'none',
      pos: ' 7-й период, группа - IIIB (3)',
      electronegativity: 1
    },
    {
      // 90: Th  Торий
      melting: 1750,
      bolling: 3800,
      select: false,
      bgcolor: '#FF00FF',
      type: 'актинид',
      link: 'aktinoidy/torij_lat_thorium/12-1-0-98',
      rusname: ' Торий',
      mass: 232.0381,
      oxidation: ' +3,+4',
      index: 90,
      shortname: 'Th',
      lat: 'thorium',
      pos: ' 7-й период, группа - IIIB(3).',
      electronegativity: 1.15
    },
    {
      // 91: Pa  Протактиний
      melting: 1572,
      bolling: 4230,
      select: false,
      bgcolor: '#FF00FF',
      type: 'актинид',
      link: 'aktinoidy/protaktinij_lat_protactinium/12-1-0-70',
      rusname: ' Протактиний',
      mass: 231.0359,
      oxidation: '+2,+3,+4,+6',
      index: 91,
      shortname: 'Pa',
      lat: 'protactinium',
      pos: ' 7-й период, группа - IIIB(3).',
      electronegativity: 1.14
    },
    {
      // 92: U Уран
      melting: 1132,
      bolling: 3818,
      select: false,
      bgcolor: '#FF00FF',
      type: 'актинид',
      link: 'aktinoidy/uran_lat_uranium/12-1-0-102',
      rusname: 'Уран',
      mass: 238.0289,
      oxidation: ' +3,+4,+5,+6',
      index: 92,
      shortname: 'U',
      lat: 'uranium',
      pos: ' 7-й период, группа -IIIB (3).',
      electronegativity: 1.22
    },
    {
      // 93: Np Нептуний
      melting: 639,
      bolling: 3902,
      select: false,
      bgcolor: '#FF00FF',
      type: 'актинид',
      link: 'aktinoidy/neptunij_lat_neptunium/12-1-0-66',
      rusname: 'Нептуний',
      mass: 237.048,
      oxidation: ' +3,+4,+5,+6,+7',
      index: 93,
      shortname: 'Np',
      lat: 'neptunium',
      pos: ' 7-й период, группа - IIIB(3).',
      electronegativity: 1.22
    },
    {
      // 94: Pu Плутоний
      melting: 641,
      bolling: 3340,
      select: false,
      bgcolor: '#FF00FF',
      type: 'актинид',
      link: 'aktinoidy/plutonij_lat_plutonium/12-1-0-77',
      rusname: 'Плутоний',
      mass: 244.064,
      oxidation: ' +3,+4,+5,+6,+7',
      index: 94,
      shortname: 'Pu',
      lat: 'plutonium',
      pos: ' 7-й период, группа - IIIB(3).',
      electronegativity: 1.22
    },
    {
      // 95: Am  Америций
      melting: 996,
      bolling: 2607,
      select: false,
      bgcolor: '#FF00FF',
      type: 'актинид',
      link: 'aktinoidy/americij_lat_americium/12-1-0-4',
      rusname: ' Америций',
      mass: 243.061,
      oxidation: ' +2,+3,+4,+5,+6',
      index: 95,
      shortname: 'Am',
      lat: 'americium',
      pos: ' 7-й период, группа - IIIB(3).',
      electronegativity: 1.2
    },
    {
      // 96: Cm  Кюрий
      melting: 1340,
      bolling: 3110,
      select: false,
      bgcolor: '#FF00FF',
      type: 'актинид',
      link: 'aktinoidy/kjurij_lat_curium/12-1-0-22',
      rusname: ' Кюрий',
      mass: 247.07,
      oxidation: ' +2,+3,+4,+6',
      index: 96,
      shortname: 'Cm',
      lat: 'curium',
      pos: ' 7-й период, группа - IIIB(3).',
      electronegativity: 1.2
    },
    {
      // 97: Bk Берклий
      melting: 1050,
      bolling: 2630,
      select: false,
      bgcolor: '#FF00FF',
      type: 'актинид',
      link: 'aktinoidy/berklij_lat_berkelium/12-1-0-14',
      rusname: 'Берклий',
      mass: 247.07,
      oxidation: ' +2,+3,+4',
      index: 97,
      shortname: 'Bk',
      lat: 'berkelium',
      pos: ' 7-й период, группа - IIIB(3).',
      electronegativity: 1.2
    },
    {
      // 98: Cf  Калифорний
      melting: 900,
      bolling: 1227,
      select: false,
      bgcolor: '#FF00FF',
      type: 'актинид',
      link: 'aktinoidy/kalifornij_lat_californium/12-1-0-20',
      rusname: ' Калифорний',
      mass: 251.079,
      oxidation: ' +2,+3,+4',
      index: 98,
      shortname: 'Cf',
      lat: 'californium',
      pos: ' 7-й период, группа - IIIB(3).',
      electronegativity: 1.11
    },
    {
      // 99: Es  Эйнштейний
      melting: 860,
      bolling: null,
      select: false,
      bgcolor: '#FF00FF',
      type: 'актинид',
      link: 'aktinoidy/ehjnshtejnij_lat_einsteium/12-1-0-30',
      rusname: ' Эйнштейний',
      mass: 252.082,
      oxidation: ' +2,+3',
      index: 99,
      shortname: 'Es',
      lat: 'einsteium',
      pos: ' 7-й период,группа - IIIB(3).',
      electronegativity: 1.2
    },
    {
      // 100: Fm  Фермий
      melting: null,
      bolling: null,
      select: false,
      bgcolor: '#FF00FF',
      type: 'актинид',
      link: 'aktinoidy/fermij_lat_fermium/12-1-0-34',
      rusname: ' Фермий',
      mass: 257.095,
      oxidation: ' +2,+3',
      index: 100,
      shortname: 'Fm',
      lat: 'fermium',
      pos: ' 7-7-й период, группа - IIIB(3).',
      electronegativity: 1.2
    },
    {
      // 101: Md Менелевий
      melting: null,
      bolling: null,
      select: false,
      bgcolor: '#FF00FF',
      type: 'актинид',
      link: 'aktinoidy/mendelevij_lat_mendelevium/12-1-0-54',
      rusname: 'Менелевий',
      mass: 258.098,
      oxidation: ' +2,+3',
      index: 101,
      shortname: 'Md',
      lat: 'mendelevium',
      pos: ' 7-й период, группа - IIIB(3).',
      electronegativity: 1.2
    },
    {
      // 102: No  Нобелий
      melting: null,
      bolling: null,
      select: false,
      bgcolor: '#FF00FF',
      type: 'актинид',
      link: 'aktinoidy/nobelij_lat_nobelium/12-1-0-65',
      rusname: ' Нобелий',
      mass: 259.1,
      oxidation: ' +2,+3',
      index: 102,
      shortname: 'No',
      lat: 'nobelium',
      pos: ' 7-7-й период, группа - IIIB(3).',
      electronegativity: 1.2
    },
    {
      // 103: Lr  Лоуренций
      melting: null,
      bolling: null,
      select: false,
      bgcolor: '#FF00FF',
      type: 'актинид',
      link: 'aktinoidy/lourensij_lat_lowrencium/12-1-0-52',
      rusname: ' Лоуренций',
      mass: 260.105,
      oxidation: ' +3',
      index: 103,
      shortname: 'Lr',
      lat: 'lowrencium',
      pos: ' 7-й период, группа - IIIB(3).',
      electronegativity: 1.2
    },
    {
      // 104: Rf Резерфордий
      melting: null,
      bolling: null,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/rezerfordij_lat_rutherfordium/1-1-0-81',
      rusname: 'Резерфордий',
      mass: 261,
      oxidation: ' +4',
      index: 104,
      shortname: 'Rf',
      lat: 'rutherfordium',
      pos: ' 7-й период, группа - IVB (4)'
    },
    {
      // 105: Db Дубний
      melting: null,
      bolling: null,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/dubnij_lat-dubnium/1-1-0-27',
      rusname: 'Дубний',
      mass: 262,
      oxidation: ' +5',
      index: 105,
      shortname: 'Db',
      lat: 'none',
      pos: ' 7-й период, группа - VB (5)'
    },
    {
      // 106: Sg Сиборгий
      melting: null,
      bolling: null,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/siborgij_lat_siborgium/6-1-0-89',
      rusname: 'Сиборгий',
      mass: 263,
      oxidation: ' +4,+6',
      index: 106,
      shortname: 'Sg',
      lat: 'siborgium',
      pos: ' 7-й период, группа - VIB (6)'
    },
    {
      // 107: Bh  Борий
      melting: null,
      bolling: null,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/borij_lat_bohrium/6-1-0-12',
      rusname: ' Борий',
      mass: 264,
      oxidation: ' +2,+3,+4,+5,+6,+7',
      index: 107,
      shortname: 'Bh',
      lat: 'bohrium',
      pos: ' 7-й период, группа - VIIB (7)'
    },
    {
      // 108: Hs Хассий
      melting: null,
      bolling: null,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/khassij_lat_hassium/6-1-0-44',
      rusname: 'Хассий',
      mass: 265,
      oxidation: ' +2,+3,+4,+5,+6,+7,+8',
      index: 108,
      shortname: 'Hs',
      lat: 'hassium',
      pos: ' 7-й период, группа - VIIIB (8)'
    },
    {
      // 109: Mt Мейтнерий
      melting: null,
      bolling: null,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/mejtnerij_lat_meitnerium/6-1-0-58',
      rusname: 'Мейтнерий',
      mass: 266,
      oxidation: ' +1,+3,+5',
      index: 109,
      shortname: 'Mt',
      lat: 'meitnerium',
      pos: ' 7-й период, группа - VIIIB (9)'
    },
    {
      // 110: Ds Дармштадтий
      melting: null,
      bolling: null,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/darmshtadtij_lat_darmstadtium/6-1-0-115',
      rusname: 'Дармштадтий',
      mass: 281,
      oxidation: ' нет',
      index: 110,
      shortname: 'Ds',
      lat: 'darmstadtium',
      pos: ' 7-й период, группа - VIIIB (10)'
    },
    {
      // 111: Rg Рентгений
      melting: null,
      bolling: null,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/rentge_nij_lat_roentgenium/6-1-0-116',
      rusname: 'Рентгений',
      mass: 281,
      oxidation: ' нет',
      index: 111,
      shortname: 'Rg',
      lat: 'roentgenium',
      pos: ' 7-й период, группа - IB (11)'
    },
    {
      // 112: Cn Коперниций
      melting: null,
      bolling: null,
      select: false,
      bgcolor: '#FFFF00',
      type: 'переходной металл',
      link: 'perekhodnye-metally/kopernicij_lat_copernicium/6-1-0-117',
      rusname: 'Коперниций',
      mass: 285.177,
      oxidation: ' нет',
      index: 112,
      shortname: 'Cn',
      lat: 'copernicium',
      pos: ' 7-й период, группа - IIB (12)'
    },
    {
      // 113: Nh Нихоний
      melting: null,
      bolling: null,
      select: false,
      bgcolor: '#00FFFF',
      type: 'легкий металл',
      link: 'legkie-metally/nikhonij_lat_nihonium/7-1-0-120',
      rusname: 'Нихоний',
      mass: 286,
      oxidation: '−1, +1, +2, +3, +5',
      index: 113,
      shortname: 'Nh',
      lat: 'nihonium',
      pos: ' 7-й период, группа - IIIA (13)'
    },
    {
      // 114: Fl Флеровий
      melting: null,
      bolling: null,
      select: false,
      bgcolor: '#00FFFF',
      type: 'легкий металл',
      link: 'legkie-metally/flerovij_lat_flerovium/7-1-0-122',
      rusname: 'Флеровий',
      mass: 289,
      oxidation: '+2, +4',
      index: 114,
      shortname: 'Fl',
      lat: 'flerovium',
      pos: ' 7-й период, группа - IVA (14)'
    },
    {
      // 115: Mc Московий
      melting: null,
      bolling: null,
      select: false,
      bgcolor: '#00FFFF',
      type: 'легкий металл',
      link: 'legkie-metally/moskovij_lat_moscovium/7-1-0-123',
      rusname: 'Московий',
      mass: 289,
      oxidation: '−3, +1, +3, +5 ',
      index: 115,
      shortname: 'Mc',
      lat: 'moscovium',
      pos: ' 7-й период, группа - VA (15)'
    },
    {
      // 116: Lv Ливерморий
      melting: null,
      bolling: null,
      select: false,
      bgcolor: '#00FFFF',
      type: 'легкий металл',
      link: 'legkie-metally/livermo_rij_lat_livermorium/7-1-0-119',
      rusname: 'Ливерморий',
      mass: 293,
      oxidation: '−2, +2, +4, +6 ',
      index: 116,
      shortname: 'Lv',
      lat: 'livermorium',
      pos: ' 7-й период, группа - VA (15)'
    },
    {
      // 117: Ts Теннессин
      melting: null,
      bolling: null,
      select: false,
      bgcolor: '#00FFFF',
      type: 'галоген',
      link: 'galogeny/tennessin_lat_tennessine/9-1-0-121',
      rusname: 'Теннессин ',
      mass: 294,
      oxidation: ' -1, +1, +3, +5, +7',
      index: 117,
      shortname: 'Ts',
      lat: 'tennessine',
      pos: ' 7-й период, группа - VIIA (17)'
    },
    {
      // 118: Og Оганесон
      melting: null,
      bolling: null,
      select: false,
      bgcolor: '#00FFFF',
      type: 'инертный газ',
      link: 'inertnye-gazy/oganeson_lat_oganesson/10-1-0-118',
      rusname: 'Оганесон',
      mass: 294,
      oxidation: ' -1, 0, +1, +2, +4, +6',
      index: 118,
      shortname: 'Og',
      lat: 'oganesson',
      pos: ' 7-й период, группа - VIIIA (15)'
    }
  ]



/* var files = ['in/SVG-emojis/001-grinning.svg',
'in/SVG-emojis/002-smiling.svg',
'in/SVG-emojis/003-tongue.svg',
'in/SVG-emojis/004-unamused.svg',
'in/SVG-emojis/005-nerd.svg',
'in/SVG-emojis/006-drooling.svg',
'in/SVG-emojis/007-kiss.svg',
'in/SVG-emojis/008-mouthless.svg',
'in/SVG-emojis/009-joy.svg',
'in/SVG-emojis/010-halo.svg',
'in/SVG-emojis/011-winking.svg',
'in/SVG-emojis/012-smirking.svg',
'in/SVG-emojis/013-sleeping.svg',
'in/SVG-emojis/014-woozy.svg',
'in/SVG-emojis/015-astonished.svg',
'in/SVG-emojis/016-upside down.svg',
'in/SVG-emojis/017-horns.svg',
'in/SVG-emojis/018-vomiting.svg',
'in/SVG-emojis/019-grinning.svg',
'in/SVG-emojis/020-winking.svg',
'in/SVG-emojis/021-kissing.svg',
'in/SVG-emojis/022-rolling.svg',
'in/SVG-emojis/023-no expression.svg',
'in/SVG-emojis/024-flushed.svg',
'in/SVG-emojis/025-emojis.svg',
'in/SVG-emojis/026-angry.svg',
'in/SVG-emojis/027-grimacing.svg',
'in/SVG-emojis/028-sleepy.svg',
'in/SVG-emojis/029-squit.svg',
'in/SVG-emojis/030-hearts.svg',
'in/SVG-emojis/031-worry.svg',
'in/SVG-emojis/032-in love.svg',
'in/SVG-emojis/033-moustache.svg',
'in/SVG-emojis/034-crying.svg',
'in/SVG-emojis/035-sad.svg',
'in/SVG-emojis/036-pirate.svg',
'in/SVG-emojis/037-sad.svg',
'in/SVG-emojis/038-cowardly.svg',
'in/SVG-emojis/039-monocle.svg',
'in/SVG-emojis/040-smile.svg',
'in/SVG-emojis/041-angry.svg',
'in/SVG-emojis/042-muted.svg',
'in/SVG-emojis/043-pensive.svg',
'in/SVG-emojis/044-displeased.svg',
'in/SVG-emojis/045-party.svg',
'in/SVG-emojis/046-neutral.svg',
'in/SVG-emojis/047-stars.svg',
'in/SVG-emojis/048-nausea.svg',
'in/SVG-emojis/049-dead.svg',
'in/SVG-emojis/050-tired.svg',]
let flist=[];
gulp.task('filelist', function () {
	let flist=[]
	gulp.src("in/files.txt")
	  .pipe(replace(/(.*?).svg/g,function(match) {
	  	 let arr = match.split('/');
	  	 flist.push(arr[4]+"/"+arr[5]+"/"+arr[6]);
	  	 return "'"+arr[4]+"/"+arr[5]+"/"+arr[6]+"'," 
	  }))
	  .pipe(gulp.dest('out/source-list/'));
})

gulp.task('repsvgvue', function () {
  gulp.src(files)
    .pipe(replace(/<!--(.*?)-->/, '<!--success replace-->'))
    .pipe(replace(/<?xml(.*?)?>/, '<!--vue component-->'))
    .pipe(replace(/<!DOCTYPE(.*?)>/, '<!--icons-->'))
    .pipe(replace(/version=(.*?) id=(.*?) xmlns=(.*?) xmlns:xlink=(.*?) x=(.*?) y=(.*?)/, ''))
    .pipe(replace(/<!DOCTYPE(.*?)>/, '<!--icons-->'))
    .pipe(replace('xml:space="preserve"', ''))
    .pipe(replace('"0px"', ''))
    .pipe(replace('enable-background', 'data-background'))
    .pipe(replace(/viewBox=(.*?)/, function (m) {
      let arr =  m.split("=");
      return 'data-'+arr[0]+'='+arr[1];    
    }))
    .pipe(replace('svg', 'template'))
    .pipe(rename(function (path) {
      let arr = path.basename.split('-');
      path.dirname += "/vue";
      path.basename = "Icon-"+arr[1];
      path.extname = ".vue";
    }))
    .pipe(gulp.dest('out/'))
})
gulp.task("rensvgvue", function () {
  let out=[];
  for(let i=0; i<files.length; i++) {
    let arr = files[i].split('in/');
    let res = 'out/'+arr[1];
    out.push(res);   
  }
  gulp.src(out)
    .pipe(rename(function (path) {
    path.dirname += "/vue";
    path.basename = "Icon"+path.basename;
    path.extname = ".vue";
  }))
  .pipe(gulp.dest("out"))
})
gulp.task('componentlist', function () {
  gulp.src('in/component/componentList.txt')
    .pipe(replace(/(.*?).vue/g, function (match) {
      console.log("enter")
      console.log(match)
      const arr = match.split('/')
      const fname = arr[2].split('.')
      const res = 'import ' + fname[0] + " from 'vue/Icon-'"+ arr[2] + "'"
      return res
    }))
    .pipe(rename(function (path) {
      path.basename = "component-import";
      path.extname = ".txt";
    }))
    .pipe(gulp.dest('out/component/'))
  gulp.src('in/component/componentList.txt')
    .pipe(replace(/(.*?).vue/g, function (match) {
      console.log(match)
      const arr = match.split('/')
      const fname = arr[2].split('.')
      const res =  fname[0] + ','
      return res
    }))
    .pipe(rename(function (path) {
      path.basename = "component-list";
      path.extname = ".txt";
    }))
    .pipe(gulp.dest('out/component/'))
  gulp.src('in/component/componentList.txt')
    .pipe(replace(/(.*?).vue/g, function (match) {
      console.log(match)
      const arr = match.split('/')
      const fname = arr[2].split('.')
      const res = '<icon-base class="icons__image" icon-name="' + fname[0] + '" width="64" height="64" icon-color="#5434ad"><' + fname[0] + '/></icon-base>"'
      return res
    }))
    .pipe(rename(function (path) {
      path.basename = "component-template";
      path.extname = ".txt";
    }))
    .pipe(gulp.dest('out/component/'))
})
gulp.task("componentconcat", function(){
  gulp.src(['in/component/starthtml.txt',
            'out/component/component-template.txt',
            'in/component/endhtml.txt',
            'in/component/startjs.txt',
            'out/component/component-import.txt',
            'in/component/compstart.txt',
            'out/component/component-list.txt',
            'in/component/compend.txt',
            'in/component/endjs.txt'
          ])
    .pipe(concat('IconList.vue'))
    .pipe(gulp.dest('out/result/'));
})

gulp.task("encoding", function() {
  gulp.src('in/mendel/*.html",') 
        .pipe(convertEncoding({from:"windows-1251",to: 'utf-8'}))
        .pipe(replace('<META content=Иванов И.С. name=author>', '<META content="Иванов (Шавлюга) И.С. iv2" name=author><META charset=UTF-8>'))
        .pipe(gulp.dest('in/mendel/encoding/'));
});
*/

const files = [
"in/short/Ac.html",
"in/short/Ag.html",
"in/short/Al.html",
"in/short/Am.html",
"in/short/Ar.html",
"in/short/As.html",
"in/short/At.html",
"in/short/Au.html",
"in/short/B.html",
"in/short/Ba.html",
"in/short/Be.html",
"in/short/Bh.html",
"in/short/Bi.html",
"in/short/Bk.html",
"in/short/Br.html",
"in/short/C.html",
"in/short/Ca.html",
"in/short/Cd.html",
"in/short/Ce.html",
"in/short/Cf.html",
"in/short/Cl.html",
"in/short/Cm.html",
"in/short/Cn.html",
"in/short/Co.html",
"in/short/Cr.html",
"in/short/Cs.html",
"in/short/Cu.html",
"in/short/Db.html",
"in/short/Ds.html",
"in/short/Dy.html",
"in/short/Er.html",
"in/short/Es.html",
"in/short/Eu.html",
"in/short/F.html",
"in/short/Fe.html",
"in/short/Fl.html",
"in/short/Fm.html",
"in/short/Fr.html",
"in/short/Ga.html",
"in/short/Gd.html",
"in/short/Ge.html",
"in/short/H.html",
"in/short/He.html",
"in/short/Hf.html",
"in/short/Hg.html",
"in/short/Ho.html",
"in/short/Hs.html",
"in/short/I.html",
"in/short/In.html",
"in/short/Ir.html",
"in/short/K.html",
"in/short/Kr.html",
"in/short/La.html",
"in/short/Li.html",
"in/short/Lr.html",
"in/short/Lu.html",
"in/short/Lv.html",
"in/short/Mc.html",
"in/short/Md.html",
"in/short/Mg.html",
"in/short/Mn.html",
"in/short/Mo.html",
"in/short/Mt.html",
"in/short/N.html",
"in/short/Na.html",
"in/short/Nb.html",
"in/short/Nd.html",
"in/short/Ne.html",
"in/short/Nh.html",
"in/short/Ni.html",
"in/short/No.html",
"in/short/Np.html",
"in/short/O.html",
"in/short/Og.html",
"in/short/Os.html",
"in/short/P.html",
"in/short/Pa.html",
"in/short/Pb.html",
"in/short/Pd.html",
"in/short/Pm.html",
"in/short/Po.html",
"in/short/Pr.html",
"in/short/Pt.html",
"in/short/Pu.html",
"in/short/Ra.html",
"in/short/Rb.html",
"in/short/Re.html",
"in/short/Rf.html",
"in/short/Rg.html",
"in/short/Rh.html",
"in/short/Rn.html",
"in/short/Ru.html",
"in/short/S.html",
"in/short/Sb.html",
"in/short/Sc.html",
"in/short/Se.html",
"in/short/Sg.html",
"in/short/Si.html",
"in/short/Sm.html",
"in/short/Sn.html",
"in/short/Sr.html",
"in/short/Ta.html",
"in/short/Tb.html",
"in/short/Tc.html",
"in/short/Te.html",
"in/short/Th.html",
"in/short/Ti.html",
"in/short/Tl.html",
"in/short/Tm.html",
"in/short/Ts.html",
"in/short/U.html",
"in/short/V.html",
"in/short/W.html",
"in/short/Xe.html",
"in/short/Y.html",
"in/short/Yb.html",
"in/short/Zn.html",
"in/short/Zr.html",
]
gulp.task("getelect", function () {
  let out=[];
  for(let i=0; i<files.length; i++) {
    let arr = files[i].split('in/');
    let res = 'out/'+arr[1];
    gulp.src(files[i])
      .pipe(replace(/Электроотрицательность(.*?)<br>/g, function (match) {
        const postag = match.indexOf('Электроотрицательность')
        const posstartval = match.indexOf(':',postag)  
        const posendtag = match.indexOf('<br>',postag)  
        let val = match.slice(posstartval+1, posendtag-1).trim()
        if(val.indexOf('</I>',0)>-1||val.indexOf('</i>',0)>-1) val = val.slice(4,8).trim()
        if(val[1] === ',') val = val.split(',').join('.')
        let shortname = files[i].slice(9,11)
        if(shortname[1] === '.') shortname = shortname.split('.').join('')
        const idelem = list.findIndex((el)=>el.shortname === shortname)
        list[idelem].electronegativity = +val
        console.log(match)
let txt = 'export default {\nlist:[\n'
    for(el of list) {
      txt+='{\n'
      txt+='// '+el.index+': '+el.shortname+' '+el.rusname+'\n'
      for(prop in el) {
         if(typeof el[prop] === 'string') txt +=''+prop+':"'+el[prop]+'",\n'
         else txt +=''+prop+':'+el[prop]+',\n'
      }
      txt+='},\n'
    }
    txt+=']\n}'
    fs.writeFile('elements-res.js',txt,(err) => {
       if (err) {
        console.error(err)
        return
      }})
      }))
    .pipe(gulp.dest("out/short/"))
    
  }
})

gulp.task("getconfig", function () {
  let out=[];
  for(let i=0; i<files.length; i++) {
    let arr = files[i].split('in/');
    let res = 'out/'+arr[1];
    gulp.src(files[i])
      .pipe(replace(/Электронная конфигурация(.*?)<br>/g, function (match) {
        const postag = match.indexOf('Электронная конфигурация')
        const posstartval = match.indexOf(':',postag)  
        const posendtag = match.indexOf('<br>',postag)  
        let val = match.slice(posstartval+1, posendtag).trim()
        let shortname = files[i].slice(9,11)
        if(shortname[1] === '.') shortname = shortname.split('.').join('')
        const idelem = list.findIndex((el)=>el.shortname === shortname)
        if(val.indexOf('</I>',0)>-1||val.indexOf('</i>',0)>-1) val = val.slice(4)
        let tempconf = val.split('\n').join('').trim()
        let stlink = val.indexOf('[',0) 
        let endlink = val.indexOf(']',0)
        let link=val.slice(stlink, endlink+1)
        if(link.length > 4) {
          let cut = link.slice(val.indexOf('">',0), val.indexOf('</',0))
          if(cut[0] === '"' || cut[1] === '"') cut = cut.split('"').join('')
          if(cut[0] === '>' || cut[1] === '>') cut = cut.split('>').join('[')
          if(cut[cut.length-1] === '<') cut = cut.split('<').join(']')
          if(cut[cut.length-1] !== ']') cut = cut.trim() + ']'
          console.log(cut)
          const rep = val.indexOf(']',0)
          if (rep>-1) {
             tempconf = cut +  tempconf.slice(rep)
          }
        }else {
           console.log(link)
        }
        console.log('tempconf: '+tempconf)
        list[idelem].config = tempconf
let txt = 'export default {\nlist:[\n'
    for(el of list) {
      txt+='{\n'
      txt+='// '+el.index+': '+el.shortname+' '+el.rusname+'\n'
      for(prop in el) {
         if(typeof el[prop] === 'string') txt +=''+prop+':"'+el[prop]+'",\n'
         else txt +=''+prop+':'+el[prop]+',\n'
      }
      txt+='},\n'
    }
    txt+=']\n}'
    fs.writeFile('elements-res.js',txt,(err) => {
       if (err) {
        console.error(err)
        return
      }})
      }))
    .pipe(gulp.dest("out/short/"))
    
  }
})
gulp.task("concat", function(){
  gulp.src(files)
    .pipe(concat('out/full-elements.html'))
    .pipe(gulp.dest('out/result/'));
})
gulp.task('reptest', function () {
  gulp.src('in/full-elements.html')
    .pipe(replace('H1 align=center>', '<h1>'))
    .pipe(gulp.dest('out/'))
})
