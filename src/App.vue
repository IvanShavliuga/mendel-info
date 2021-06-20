<template>
  <div id="app">
    <app-home/>
  </div>
</template>
<script>
import appHome from './views/Home.vue'

export default {
  name: 'Home',
  components: {
    appHome
  }
}
</script>
<style lang="less">
#app {
  background: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100vh;
}
body {
  background: white;
  height: 100vh;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
