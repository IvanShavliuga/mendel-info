<template>
  <section>
    <iframe :src="'/pages/' + this.select.shortname+'.html'"></iframe>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    link: {
      type: String
    }
  },
  computed: {
    ...mapGetters(['select'])
  }
}
</script>
