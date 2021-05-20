<template>
  <form onsubmit="return false">
    <select v-model="selt" @click="seltype">
      <option
        v-for="(t, k) in types"
        :key="k"
      >
        {{ t }}
      </option>
    </select>
    <input v-model="nameelem" type="text" @keypress="filtername"/>
  </form>
</template>
<script>
export default {
  data () {
    return {
      types: [
        'все',
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
      selt: '',
      nameelem: ''
    }
  },
  methods: {
    seltype () {
      this.$store.dispatch('selElements', {
        type: 'type',
        query: this.selt
      })
    },
    filtername () {
      this.selt = 'все'
      this.$store.dispatch('selElements', {
        type: 'runame',
        query: this.nameelem
      })
    },
    resetfilter () {
      this.$store.dispatch('resetFilter')
    }
  }
}
</script>
