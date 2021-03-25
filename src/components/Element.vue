<template>
  <td
    @mouseover="selelem"
    @click="clelem"
    :bgcolor="typecolor"
    class="element">
    {{ shortName }} {{ ind }}
  </td>
</template>

<script>
export default {
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.element {
  height: 21px;
  width: 5%;
  padding: 5px 2px;
  opacity: 0.8;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
}
a {
  color: #42b983;
}
</style>
