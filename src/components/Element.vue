<template>
  <td
    @mouseover="selelem"
    @click="clelem"
    :bgcolor="background"
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
    }
  },
  data () {
    return {
      ind: null
    }
  },
  methods: {
    selelem () {
      console.log(this.index)
      this.$store.dispatch('selElement', this.index)
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
  opacity: 0.6;
}
a {
  color: #42b983;
}
</style>
