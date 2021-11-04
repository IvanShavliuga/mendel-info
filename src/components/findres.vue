<template>
<table class="results" border="0" cellspacing="1px" width="100%">
<caption class="results__capiton">Нажмите на элемент, чтобы узнать подробно об элементе, или воспользуйтесь поиском выше.</caption>
<tbody  v-if="sellist!==null&&(sellist.length>0&&sellist.length<118)">
<tr  class="results__row" ><td class="results__col-header" colspan="14" >Результаты поиска</td></tr>
<tr  class="results__row" ><td class="results__col-header" colspan="14" >Всего результатов: {{sellist.length}}</td></tr>
<tr  class="results__row" >
<td class="results__col-header results__col-props index" ><div>№<br>Символ</div></td>
<td class="results__col-header results__col-props name" ><div>Название</div></td>
<td class="results__col-header results__col-props type" ><div>Тип<br>элемента</div></td>
<td class="results__col-header results__col-props pos" ><div>Положение<br>(Период,<br>группа)</div></td>
<td class="results__col-header results__col-props negative" ><div>Электро<br>отрицатель<br>ность</div></td>
<td class="results__col-header results__col-props mass" ><div>Атомная<br> масса</div></td>
<td class="results__col-header results__col-props oxi" ><div>Степени<br>Окисления</div></td>
<!-- <td class="results__col-header results__col-props config" ><div>Конфигурация</div></td> -->
<td class="results__col-header results__col-props temperature" ><div>t<sub>плав</sub><br>t<sub>кип</sub></div></td>
</tr>
<tr v-for="(rs, key) in pagList" :key="key" :bgcolor="typecolor(rs.type)">
  <td class="results__col valcell index">{{rs.index}}<br>{{rs.shortname}}</td>
 <td class="results__col valcell name"><a :href="fullurl(rs.link)" target="__blank">{{rs.rusname}}<br>{{rs.lat}}</a></td>
 <td class="results__col valcell type"><span v-html="displayType(rs.type)"></span></td>
<td class="results__col valcell pos">{{rs.pos}}</td>
<td class="results__col valcell negative">{{rs.electronegativity}}</td>
<td class="results__col valcell mass">{{rs.mass.toFixed(3)}}</td>
<td class="results__col valcell oxi">{{rs.oxidation}}</td>
<!-- <td class="results__col valcell config"><span v-html="rs.config"></span></td> -->
<td class="results__col valcell temperature">{{rs.melting}}<br>{{rs.bolling}}</td>
</tr>
<tr v-if="endPage>1" class="results__row" ><td align="center" class="results__col-header" colspan="14" >
<span @click="prev">назад</span> | Страница: {{startPage+1}} из {{endPage}} | <span @click="next">вперед</span></td></tr>
</tbody>
</table>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      startPage: 0
    }
  },
  computed: {
    ...mapGetters(['sellist', 'fullurl']),
    endPage () {
      return ~~(this.sellist.length / 10 + 1)
    },
    pagList () {
      const pagelem = []
      const maxelem = (this.startPage < this.endPage) ? ((this.startPage + 1) * 10) : (this.sellist.length)
      for (let i = this.startPage * 10; i < maxelem; i++) if (this.sellist[i] !== undefined) pagelem.push(this.sellist[i])
      return pagelem
    }
  },
  watch: {
    sellist () {
      if (this.sellist === null) return
      if (this.startPage > this.endPage) this.startPage = 0
    }
  },
  methods: {
    typecolor (typeElement) {
      switch (typeElement) {
        case 'неметалл': return '#3473d2'
        case 'инертный газ': return '#239e8e'
        case 'щелочный металл': return '#ddaf23'
        case 'щелочныйземельный металл': return '#bb4069'
        case 'полуметалл': return '#cfc609'
        case 'галоген': return '#914390'
        case 'легкий металл': return '#d35223'
        case 'переходной металл': return '#9b9040'
        case 'лантанид': return '#245870'
        case 'актинид': return '#a455d0'
      }
      return '#232323'
    },
    prev () {
      if (this.startPage) this.startPage--
    },
    next () {
      if (this.startPage < this.endPage - 1) this.startPage++
    },
    displayType (p) {
      return p.split(' ').join('<br>')
    }
  }
}
</script>
<style scoped lang="less">
.results {
  margin: 15px 0;
  border-collapse: collapse;
  &__caption {
    font-size: 14px;
    @media (max-width: 1070px) {
      font-size: 12px;
    }
    @media (max-width: 720px) {
      font-size: 10px;
    }
  }
  &__col {
    color: white;
    height: 25px;
    font-size: 14px;
    padding: 3px 1px;
    &-indfind,
    &-header {
      color: black;
      font-weight: bold;
      font-size: 14px;
      span {
        cursor: pointer;
        color: blue;
      }
      @media (max-width: 560px) {
        font-size: 10px;
      }
    }
    a {
      color: white;
      &:visited {
        color: silver;
      }
    }
    &-props {
      text-transform: uppercase;
      background-color: #dedede;
    }
    @media (max-width: 1070px) {
      /* font-size: 12px; */
      &-header {
        font-size: 12px;
        font-weight: normal;
      }
    }
    @media (max-width: 890px) {
      &-props {
        word-break: break-all;
      }
      word-break: break-all;
    }
    @media (max-width: 720px) {
      &-props {
        font-size: 10px;
      }
    }
    @media (max-width: 400px) {
      &-props {
        font-size: 8px;
        // writing-mode: vertical-rl;
      }
    }
  }
}
.index {
  width: 45px;
  @media (max-width: 540px) {
    width: 20px;
  }
}
.temperature {
  width: 60px;
  @media (max-width: 540px) {
    width: 40px;
  }
}
.type {
  width: 300px;
  @media (max-width: 900px) {
    width: 150px;
  }
  @media (max-width: 700px) {
    width: 100px;
  }
  @media (max-width: 580px) {
    width: 80px;
  }
  @media (max-width: 340px) {
    width: 50px;
  }
}
.pos {
  width: 80px;
  @media (max-width: 700px) {
    width: 70px;
  }
  @media (max-width: 540px) {
    width: 50px;
  }
  @media (max-width: 340px) {
    width: 40px;
  }
}

.negative,
.mass {
  width: 85px;
}
.negative {
  @media (max-width: 700px) {
    width: 70px;
  }
  @media (max-width: 540px) {
    width: 50px;
  }
  @media (max-width: 430px) {
    width: 40px;
  }
  @media (max-width: 370px) {
    width: 30px;
  }
}
.mass {
  @media (max-width: 980px) {
    width: 70px;
  }
  @media (max-width: 700px) {
    width: 50px;
  }
  @media (max-width: 430px) {
    width: 40px;
  }
}
.oxi {
  width: 80px;
  @media (max-width: 700px) {
    width: 70px;
  }
  @media (max-width: 540px) {
    width: 40px;
  }
  @media (max-width: 370px) {
    width: 30px;
  }
}
.valcell {
  @media (max-width: 720px) {
    font-size: 12px;
  }
  @media (max-width: 550px) {
    font-size: 10px;
  }
}
</style>
