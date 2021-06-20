<template>
<div class="element">
  <div class="element__box" v-if="select">
    <h2 class="element__box-short">{{ select.shortname }}</h2>
    <h3 class="element__box-index">{{ select.index }}</h3>
    <h4 class="element__box-rus">{{ select.rusname }} {{ select.lat }}</h4>
    <h4 class="element__box-pos">{{ select.pos }}</h4>
    <p class="element__box-mass">{{ select.mass }}</p>
    <p class="element__box-oxidation">{{ select.oxidation }}</p>
    <p class="element__box-type">{{ select.type }}</p>
    <button class="element__box-btn" @click="btnClick">Открыть</button>
    <!-- <p class="element__box-position">Период: {{ selrow }}</p> -->
  </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['select', 'fullurl', 'selrow'])
  },
  methods: {
    btnClick () {
      window.open('https://mendel-info.usite.pro/publ/ehlementy/' + this.select.link)
    }
  }
}
</script>
<style scope lang="less">
.element {
  margin-left: 40px;
  text-align: left;
  margin: 10px auto;
  &__box {
    border: 1px dotted #34a9c0;
    padding: 5px 35px;
    position: relative;
    width: 250px;
    height: 230px;
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
    &-pos {
      font-size: 18px;
      font-weight: bold;
      line-height: 20px;
      margin: 0;
      padding: 0;
      color: black;
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
    &-type {
      font-size: 18px;
      line-height: 20px;
      margin: 0;
      padding: 0;
      color: black;
    }
    &-position {
      font-size: 18px;
      line-height: 20px;
      margin: 0;
      padding: 0;
      color: black;
    }
    &-btn {
      padding: 10px 15px;
      margin: auto;
      background-color: #238e9e;
      border-radius: 12px;
      border: none;
      color: white;
    }
  }
}
</style>
