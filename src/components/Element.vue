<template>
  <td
    @click="selelem"
    :bgcolor="selcolor"
    :style="'color:'+expcolor"
    class="element">
    {{ shortName }}
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
    },
    selectElement: {
      type: Boolean
    },
    modeView: {
      type: Boolean
    }
  },
  computed: {
    typecolor () {
      switch (this.typeElement) {
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
    selcolor () {
      if (this.modeView) {
        if (this.selectElement) {
          return this.typecolor
        } else {
          return '#c9c9c9'
        }
      } else {
        return this.typecolor
      }
    },
    expcolor () {
      if (this.modeView) {
        if (!this.selectElement) {
          return this.typecolor
        } else {
          return '#fff'
        }
      } else {
        return '#fff'
      }
    }
  },
  methods: {
    selelem () {
      this.$store.dispatch('selElement', {
        index: this.index,
        row: this.getRowInd
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.element {
  height: 21px;
  width: 26px;
  padding: 5px 2px;
  opacity: 0.8;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  opacity: 0.8;
  border: none;
}
a {
  color: #42b983;
}
@media (max-width: 820px) {
  .element {
    font-size: 16px;
  }
}
@media (max-width: 488px) {
  .element {
    max-width: 20px;
    font-size: 14px;
    border: none;
  }
}
@media (max-width: 400px) {
  .element {
    max-width: 14px;
    font-size: 12px;
    height: 18px;
    padding: 2px;
  }
}

@media (max-width: 330px) {
  .element {
    max-width: 10px;
    font-size: 10px;
    padding: 0;
  }
}
</style>
