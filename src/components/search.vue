<template>
  <form class="searchelem" onsubmit="return false">
    <div class="searchelem__block">
      <label class="searchelem__block-label" for="names">Имя элемента</label>
      <span class="searchelem__block-label searchelem__block-combo">
        <select class="searchelem__select" id="names" v-model="nametype">
          <option class="searchelem__select-option" value="short">Символ элемента</option>
          <option class="searc-labelhelem__select-option" value="runame">Русское название</option>
          <option class="searc-labelhelem__select-option" value="lat">Латинское название</option>
        </select>
        <input
          class="searchelem__input"
          v-model="nameelem"
          type="text"
          placeholder="Xe"
          @input="filtername"
        />
      </span>
    </div>
    <div class="searchelem__block">
      <label class="searchelem__block-label" for="mass">Масса</label>
      <span class="searchelem__block-label">
        <input
          class="searchelem__input"
          type="number"
          id="mass"
          v-model="masselem"
          placeholder="1"
          @keypress.space="resetfilter"
          @input="selmass"
        />
      </span>
    </div>
    <div class="searchelem__block">
      <label class="searchelem__block-label" for="mass">Порядковый номер</label>
      <span class="searchelem__block-label">
        <input
          class="searchelem__input"
          type="number"
          id="num"
          v-model="numselem"
          placeholder="1"
          @keypress.space="resetfilter"
          @input="selnum"
        />
      </span>
    </div>
    <div class="searchelem__block">
      <label class="searchelem__block-label">Степени окисления</label>
      <span class="searchelem__block-label">
        <input
          class="searchelem__input"
          type="text"
          id="mass"
          v-model="oxi"
          @keypress.space="resetfilter"
          @input="seloxi"
          placeholder="-1, +2"
        />
      </span>
    </div>
    <div class="searchelem__block">
      <button class="searchelem__button" @click="resetfilter" @keypress.space="resetfilter">Очистить</button>
      <button class="searchelem__button" style="display: none">Списком</button>
    </div>
  </form>
</template>
<style scoped lang="less">
.searchelem {
  padding: 15px;
  width: 90%;
  margin: 0 auto;
  border: 1px solid #45dbab;
  border-radius: 12px;
  background-color: rgba(#457bab ,0.2);
  display: flex;
  justify-content: space-between;
  @media (max-width: 830px) {
    flex-wrap: wrap;
    width: 80vw;
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 70vw;
    margin: 0 auto;
  }
  @media (max-width: 470px) {
    width: 80vw;
  }
  @media (max-width: 370px) {
    width: 90vw;
  }
  @media (max-width: 310px) {
    width: 88vw;
  }
  &__block {
    display: flex;
    flex-direction: column;
    /* @media (max-width: 740px) {
      width: 170px;
      margin: 10px auto;
    }*/
    &:last-child {
      flex-direction: row;
      @media (max-width: 1125px) and (min-width: 800px){
        flex-direction: column;
      }
    }
    @media (max-width: 600px) {
      // width: 80%;
      margin: 0 auto;
      & > * {
        margin: 0 auto;
        font-size: 15px;
      }
    }
    &-label {
      color: #222;
      @media (max-width: 600px) {
        text-align: left;
      }
    }
    &-combo {
      @media (max-width: 830px) {
        display: flex;
        flex-direction: column;
      }
    }
  }
  &__input,
  &__select {
    border: 1px solid #123250;
    color: #222;
    background-color: rgba(#c0c2c5 ,0.3);
    > * {
      background-color: rgba(#c0c2c5 ,0.3)!important;
    }
  }
  &__input {
    padding: 6px 5px;
    width: 150px;
    @media (max-width: 600px) {
      width: 300px;
    }
    @media (max-width: 345px) {
      width: 200px;
    }
    @media (max-width: 240px) {
      width: 180px;
    }
  }
  &__select {
    padding: 5px;
    @media (max-width: 555px) {
      width: 312px;
    }
    @media (max-width: 345px) {
      width: 213px;
    }
    @media (max-width: 240px) {
      width: 190px;
    }
  }
  &__button {
    padding: 10px 15px;
    margin: 5px;
    background-color: #238e9e;
    border-radius: 12px;
    border: none;
    color: white;
    @media (max-width: 800px) {
      margin-top: 15px;
    }
  }
  &__checkpanel {
    display: inline-block;
    margin-top: 7px;
    &-default {
      display: none;
    }
    &-false,
    &-true {
      border: 1px solid gray;
      padding: 5px;
      color: #333;
      font-weight: bold;
    }
    &-true {
      background-color: #ccc;
    }
    &-false {
      background-color: transparent;
    }
  }
}
</style>
<script>
export default {
  data () {
    return {
      types: [
        'все',
        'неметалл',
        'инертный газ',
        'щелочный металл',
        'щелочныйземельный металл',
        'полуметалл',
        'переходной металл',
        'галоген',
        'инертный газ',
        'легкий металл',
        'лантанид',
        'актинид'
      ],
      selt: 'все',
      nameelem: '',
      nametype: 'short',
      masselem: 1,
      numselem: 1,
      oxi: ''
    }
  },
  methods: {
    seltype () {
      if (!this.selt.length) {
        this.resetfilter()
      }
      this.$store.dispatch('selElements', {
        type: 'type',
        query: this.selt
      })
    },
    seloxi () {
      this.$store.dispatch('selElements', {
        type: 'oxi',
        query: this.oxi,
        num: 0
      })
    },
    selmass () {
      this.$store.dispatch('selElements', {
        type: 'mass',
        query: '' + this.masselem,
        num: this.masselem
      })
    },
    selnum () {
      console.log(this.numselem)
      this.$store.dispatch('selElements', {
        type: 'num',
        query: '' + this.numselem,
        num: this.numselem
      })
    },
    filtername () {
      this.selt = 'все'
      if (!this.nameelem.length) {
        this.resetfilter()
      }
      console.log(this.nameelem)
      this.$store.dispatch('selElements', {
        type: this.nametype,
        query: this.nameelem
      })
    },
    resetfilter () {
      this.masselem = null
      this.$store.dispatch('resetFilter')
    }
  }
}
</script>
