<template>
  <div class="home">
    <app-search/>
    <app-findres/>
    <app-elemtable/>
  </div>
</template>

<script>
import appFindres from '../components/findres.vue'
import appElemtable from '../components/elemtable.vue'
import appSearch from '../components/search.vue'

export default {
  name: 'Home',
  components: {
    appFindres,
    appSearch,
    appElemtable
  },
  methods: {
    resetSel () {
      this.$store.dispatch('resetSelelem')
    }
  }
}
</script>

<style scoped lang="less">
.home {
  min-width: 100%;
  max-width: 100vw;
  margin: 0;
  padding: 0;
}

</style>
