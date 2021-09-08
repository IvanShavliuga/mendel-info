<template>
<div class="vieweelement">
  <div class="vieweelement__box" v-if="select">
    <div class="vieweelement__box-header">
      <h2 class="vieweelement__box-short">{{ select.shortname }}</h2>
      <div class="vieweelement__box-block">
        <h3 class="vieweelement__box-index">{{ select.index }}</h3>
        <h4 class="vieweelement__box-rus">{{ select.rusname }} {{ select.lat }}</h4>
      </div>
    </div>
    <h4 class="vieweelement__box-pos">{{ select.pos }}</h4>
    <p class="vieweelement__box-mass">{{ select.mass }}</p>
    <p class="vieweelement__box-oxidation">{{ select.oxidation }}</p>
    <p class="vieweelement__box-type">{{ select.type }}</p>
    <button class="vieweelement__box-btn" @click="btnClick">Открыть</button>
    <!-- <p class="vieweelement__box-position">Период: {{ selrow }}</p> -->
  </div>
  <div class="vieweelement__box" v-else>
    <div class="vieweelement__box-info">
       Свойства атомов химических элементов, а также состав и свойства образуемых ими веществ находятся в периодической зависимости от зарядов атомных ядер. (<b>периодический закон Д.И. Менделеева</b>)
    </div>
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
<style  lang="less">
.vieweelement {
  height: 120px;
  width: 300px;
  margin: auto 20%;
  @media (max-width: 708px) {
    margin: auto 20%;
    width: 250px;
  }
  @media (max-width: 570px) {
    margin: auto 15%;
  }
  @media (max-width: 495px) {
    margin: auto 15%;
    width: 200px;
  }
  @media (max-width: 350px) {
    margin: auto 17%;
  }
  @media (max-width: 300px) {
    margin: auto 20%;
  }
  @media (max-width: 250px) {
    margin: auto 25%;
  }
  &__box {
    /*position: absolute;
    top: -20px;
    left: auto; */
    border: 1px dotted #34a9c0;
    padding: 5px 15px;
    margin: -10px auto 10px auto;
    max-width: 300px;
    height: 190px;
    background: rgba(0, 200, 200, 0.3);
    @media (max-width: 708px) {
      max-width: 250px;
      padding: 5px 15px;
      & > p, & > h3, & > h4 {
        font-size: 14px;
      }
    }
    @media (max-width: 495px) {
      max-width: 200px;
      padding: 5px 5px;
      // font-size: 12px;
      & > p, & > h3, & > h4 {
        font-size: 14px;
        line-height: 15px;
      }
    }
    /* @media (max-width: 800px) {
      left: -40px;
      padding: 5px 25px;
    }
    @media (max-width: 740px) {
      left: -60px;
    }
    @media (max-width: 740px) {
      left: -60px;
      padding: 5px 15px;
      & > p, & > h3, & > h4 {
        font-size: 14px;
        width: 100%;
      }
    } */
    /* @media (max-width: 705px) {
      width: 190px;
    } */
    /* @media (max-width: 687px) {
      left: -50px;
      width: 200px;
      & > p, & > h3, & > h4 {
        font-size: 12px;
        line-height: 15px;
        width: 100%;
      }
    }
    @media (max-width: 530px) {
      left: -55px;
    }
    @media (max-width: 488px) {
      left: -75px;
      width: 160px;
    }
    @media (max-width: 360px) {
      left: -70px;
      width: 160px;
    }
    @media (max-width: 347px) {
      left: -90px;
      width: 160px;
    }
    @media (max-width: 305px) {
      left: -80px;
      width: 160px;
    } */
    &-header {
      display: flex;
      justify-content: space-around;
    }
    &-info {
      text-align: justify;
      font-size: 12px;
    }
    &-block {
      width: 70%;
      height: 70px;
      @media (max-width: 488px) {
        height: 60px;
      }
    }
    &-short {
      font-size: 35px;
      line-height: 35px;
      margin: 0;
      padding: 5px;
      color: red;
    }
    &-index {
      font-size: 16px;
      line-height: 20px;
      margin: 0;
      padding: 0;
      color: blue;
    }
    &-rus {
      font-size: 16px;
      line-height: 20px;
      margin: 0;
      padding: 0;
      color: blue;
    }
    &-pos {
      font-size: 16px;
      font-weight: bold;
      line-height: 20px;
      margin: 0;
      padding: 0;
      color: black;
    }
    &-mass {
      font-size: 16px;
      line-height: 20px;
      margin: 0;
      padding: 0;
      color: black;
    }
    &-oxidation {
      font-size: 16px;
      line-height: 20px;
      margin: 0;
      padding: 0;
      color: black;
    }
    &-type {
      font-size: 16px;
      line-height: 20px;
      margin: 0;
      padding: 0;
      color: black;
    }
    &-position {
      font-size: 16px;
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
