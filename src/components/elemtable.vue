<template>
  <table class="table" border="0" cellspacing="1px" width="100%">
    <app-rows
      v-for="(r, k) in rows"
      :key="k"
      :count="r.count"
      :start="r.start"
      :jamp-start="r.break"
      :jamp-offset="r.offset"
      :elements="elements"
    />
    <!-- <tbody>
      <tr
        v-for="(el, k) in elements"
        :key="100+k"
      >
      <td>DB: {{ el.index }}</td>
      <td>ARRINDEX: {{ elementindex(el.index) }}</td>
      <td>NAME: {{ el.rusname }}</td>
      <td>SHNAME: {{ el.shortname }}</td>
      </tr>
    </tbody> -->
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
    ...mapGetters(['elements', 'elementindex', 'rows'])
  }
}
</script>
<style scoped lang="less">
.table {
  width: 100%;
}
</style>
