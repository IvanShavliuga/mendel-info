<template>
  <div class="home">
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

export default {
  name: 'Home',
  components: {
    appViewelement,
    appElemtable
  }
}
</script>

<style scoped lang="less">
.home {
  &__table {
    display: flex;
  }
}
</style>
