<template>
  <table class="table" cellspacing="1px" width="100%">
    <app-rows
      v-for="(r, k) in rows"
      :key="k"
      :count="r.count"
      :start="r.start"
      :jamp-start="r.break"
      :jamp-offset="r.offset"
      :elements="elements"
      :mode-view="modeview"
    />
  </table>
</template>
<script>
import appRows from '../components/Rows.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    appRows
  },
  computed: {
    ...mapGetters(['elements', 'elementindex', 'rows', 'modeview'])
  }
}
</script>
<style scoped lang="less">
.table {
  min-width: 100%;
  max-width: 100vw;
  margin: 0;
  border: none;
  border-collapse: collapse;
}
</style>
