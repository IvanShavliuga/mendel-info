<template>
  <form class="searchelem" onsubmit="return false">
    <div class="searchelem__block">
      <label class="searchelem__block-label" for="names">Имя элемента</label>
      <span class="searchelem__block-label searchelem__block-combo">
        <select class="searchelem__select" id="names" v-model="nametype">
          <option class="searc-labelhelem__select-option" value="short">Символ элемента</option>
          <option class="searc-labelhelem__select-option" value="runame">Русское название</option>
          <option class="searc-labelhelem__select-option" value="lat">Латинское название</option>
          <option class="searc-labelhelem__select-option" value="type">Тип элемента</option>
          <option class="searc-labelhelem__select-option" value="mass">Масса</option>
          <option class="searc-labelhelem__select-option" value="oxi">Степень окисления</option>
          <option class="searc-labelhelem__select-option" value="num">Номер элемента</option>
        </select>
        <select
          v-if="nametype==='type'"
          class="searchelem__select"
          id="types"
          @click="searchfn"
          v-model="seltype">
          <option
            v-for="(t,k) in types"
            class="searc-labelhelem__select-option"
            :value="t"
            :key="k">
            {{ t }}
          </option>
        </select>
        <input
          v-else
          class="searchelem__input"
          v-model="querystr"
          type="text"
          placeholder="Что ищем?"
        />
      </span>
    </div>
    <div class="searchelem__block">
      <button class="searchelem__button" @click="searchfn" @keypress.enter="searchfn">Найти</button>
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
    width: 500px;
    @media (max-width: 555px) {
      width: 288px;
    }
  }
  &__select {
    padding: 5px;
    &:last-child {
      width: 500px;
    }
    @media (max-width: 555px) {
      width: 300px;
      &:last-child {
        width: 300px;
      }
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
      seltype: '',
      querystr: '',
      nametype: 'short'
    }
  },
  methods: {
    searchfn () {
      switch (this.nametype) {
        case 'lat':
        case 'runame':
        case 'short':
          this.$store.dispatch('selElements', {
            type: this.nametype,
            query: this.querystr
          })
          break
        case 'type':
          this.$store.dispatch('selElements', {
            type: 'type',
            query: this.querystr
          })
          break
        case 'mass':
          this.$store.dispatch('selElements', {
            type: 'mass',
            query: '' + this.querystr,
            num: this.querystr
          })
          break
        case 'oxi':
          this.$store.dispatch('selElements', {
            type: 'oxi',
            query: this.querystr,
            num: 0
          })
          break
        case 'num':
          this.$store.dispatch('selElements', {
            type: 'num',
            query: '' + this.querystr,
            num: this.querystr
          })
          break
      }
    },
    resetfilter () {
      this.masselem = null
      this.$store.dispatch('resetFilter')
    }
  }
}
</script>
