<template>
  <td :bgcolor="background" class="element">
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.element {
  height: 21px;
  width: 5%;
}
a {
  color: #42b983;
}
</style>
