<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  background: rgba(170, 170, 170, 0.4);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100vh;
}
body {
  background: rgba(200, 200, 200, 0.2);
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
