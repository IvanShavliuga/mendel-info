<template>
<section>
  <button @click="getpage">open</button>
</section>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['select', 'fullurl'])
  },
  methods: {
    getpage () {
      fetch(this.fullurl(this.select.link))
        .then((response) => {
          console.log('get page')
          console.log(response)
        })
    }
  }
}
</script>
