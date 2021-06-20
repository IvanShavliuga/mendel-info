<template>
  <div class="home">
    <app-search/>
    <div class="home__table">
      <app-elemtable/>
      <app-viewelement/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import appElemtable from '../components/elemtable.vue'
import appViewelement from '../components/viewelement.vue'
import appSearch from '../components/search.vue'

export default {
  name: 'Home',
  components: {
    appSearch,
    appViewelement,
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
  &__table {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    margin: 20px 5px;
  }
}

</style>
