<template>
<div class="element">
  <div class="element__box" v-if="select">
    <h2 class="element__box-short">{{ select.shortname }}</h2>
    <h3 class="element__box-index">{{ select.index }}</h3>
    <h4 class="element__box-rus">{{ select.rusname }}</h4>
    <p class="element__box-mass">{{ select.mass }}</p>
    <p class="element__box-oxidation">{{ select.oxidation }}</p>
  </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['select', 'fullurl'])
  }
}
</script>
<style scope lang="less">
.element {
  margin-left: 40px;
  text-align: left;
  &__box {
    border: 1px dotted #34a9c0;
    padding: 5px 35px;
    position: relative;
    width: 250px;
    height: 150px;
    background: rgba(0, 200, 200, 0.2);
    &-short {
      font-size: 35px;
      line-height: 35px;
      margin: 0;
      padding: 0;
      color: red;
    }
    &-index {
      font-size: 18px;
      line-height: 20px;
      margin: 0;
      padding: 0;
      color: blue;
    }
    &-rus {
      font-size: 18px;
      line-height: 20px;
      margin: 0;
      padding: 0;
      color: blue;
    }
    &-mass {
      font-size: 18px;
      line-height: 20px;
      margin: 0;
      padding: 0;
      color: black;
    }
    &-oxidation {
      font-size: 18px;
      line-height: 20px;
      margin: 0;
      padding: 0;
      color: black;
    }
  }
}
</style>
