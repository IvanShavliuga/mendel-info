<template>
  <form>
    <select v-model="selt" @click="seltype">
      <option
        v-for="(t, k) in types"
        :key="k"
      >
        {{ t }}
      </option>
    </select>
  </form>
</template>
<script>
export default {
  data () {
    return {
      types: [
        'неметалл',
        'инертный газ',
        'щелочный металл',
        'щелочныйземельный металл',
        'полуметалл',
        'переходной металл',
        'галоген',
        'инертный газ',
        'легкий металл',
        'лантанид',
        'актинид'
      ],
      selt: ''
    }
  },
  methods: {
    seltype () {
      console.log('enter search')
      console.log(this.selt)
      this.$store.dispatch('selElements', {
        type: 'type',
        query: this.selt
      })
    }
  }
}
</script>
