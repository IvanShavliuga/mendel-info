<template>
  <div class="home">
  <table class="home__table">
    <app-rows
      v-for="(r, k) in rows"
      :key="k"
      :count="r.count"
      :start="r.start"
      :jamp-start="r.break"
      :jamp-offset="r.offset"
      :elements="elements"
    />
  </table>
  {{ elementindex(87) }}
  </div>
</template>

<script>
// @ is an alias to /src
import appRows from '../components/Rows.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    appRows
  },
  computed: {
    ...mapGetters(['elements', 'elementindex', 'rows'])
  }
}
</script>
