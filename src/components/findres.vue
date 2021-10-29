<template>
<table v-if="sellist!==null&&(sellist.length>0&&sellist.length<118)" class="results" border="0" cellspacing="1px" width="100%">
<tr  class="results__row" bgcolor="#dedede"><td class="results__col-header" colspan="12" bgcolor="#dedede">Результаты поиска</td></tr>
<tr  class="results__row" bgcolor="#dedede"><td class="results__col-header" colspan="12" bgcolor="#dedede">Всего результатов: {{sellist.length}}</td></tr>
<tr  class="results__row" bgcolor="#dedede">
<td class="results__col-header" bgcolor="#dedede" colspan="2">Номер</td>
<td class="results__col-header" bgcolor="#dedede">Символ</td>
<td class="results__col-header" bgcolor="#dedede" colspan="2">Название</td>
<td class="results__col-header" bgcolor="#dedede">Тип элемента</td>
<td class="results__col-header" bgcolor="#dedede">Положение</td>
<td class="results__col-header" bgcolor="#dedede">Электро-<br>отрицательность</td>
<td class="results__col-header" bgcolor="#dedede">Атомная масса</td>
<td class="results__col-header" bgcolor="#dedede">Степени<br>Окисления</td>
<td class="results__col-header" bgcolor="#dedede">Конфигурация</td></tr>
<tr v-for="(rs, key) in pagList" :key="key" :bgcolor="typecolor(rs.type)">
  <td class="results__col-indfind" bgcolor="#dedede">{{startPage*10+key+1}}</td>
  <td class="results__col">{{rs.index}}</td>
  <td class="results__col">{{rs.shortname}}</td>
 <td class="results__col"><a :href="fullurl(rs.link)" target="__blank">{{rs.rusname}}</a></td>
<td class="results__col">{{rs.lat}}</td>
 <td class="results__col">{{rs.type}}</td>
<td class="results__col">{{rs.pos}}</td>
<td class="results__col">{{rs.electronegativity}}</td>
<td class="results__col">{{rs.mass}}</td>
<td class="results__col">{{rs.oxidation}}</td>
<td class="results__col"><span v-html="rs.config"></span></td>
</tr>
<tr  class="results__row" bgcolor="#dedede"><td align="center" class="results__col-header" colspan="12" bgcolor="#dedede">
<span @click="prev">назад</span> | Страница: {{startPage+1}} из {{endPage}} | <span @click="next">вперед</span></td></tr>
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
        case 'щелочный металл': return '#d3a223'
        case 'щелочныйземельный металл': return '#d35223'
        case 'полуметалл': return '#a1a310'
        case 'галоген': return '#914390'
        case 'легкий металл': return '#bb80a0'
        case 'переходной металл': return '#9b9040'
        case 'лантанид': return '#e455d0'
        case 'актинид': return '#245870'
      }
      return '#232323'
    },
    prev () {
      if (this.startPage) this.startPage--
    },
    next () {
      if (this.startPage < this.endPage - 1) this.startPage++
    }
  }
}
</script>
<style scoped lang="less">
.results {
  &__col {
    color: white;
    height: 25px;
    &-indfind,
    &-header {
      color: black;
      font-weight: bold;
      span {
        cursor: pointer;
        color: blue;
      }
    }
    a {
      color: white;
      &:visited {
        color: silver;
      }
    }
  }
}
</style>
