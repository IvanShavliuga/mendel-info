<template>
  <div id="app">
    <app-home/>
  </div>
</template>
<script>
import appHome from './views/Home.vue'
import Axios from 'axios'
export default {
  name: 'Home',
  components: {
    appHome
  },
  data () {
    return {
      getDataTest: null
    }
  },
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100vh;
  width: 100%;
  margin: 0;
}
body {
  background-color: white;
  height: 100vh;
  width: 100%;
  margin: 0;
}
</style>
