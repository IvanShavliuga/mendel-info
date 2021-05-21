<template>
  <form class="searchelem" onsubmit="return false">
    <div class="searchelem__block">
      <label class="searchelem__block-label" for="typeelem">Тип элемента</label>
      <select  class="searchelem__select" id="typeelem" v-model="selt" @click="seltype">
        <option
          v-for="(t, k) in types"
          :key="k"
          class="searchelem__select-option"
        >
          {{ t }}
        </option>
      </select>
    </div>
    <div class="searchelem__block">
      <label class="searchelem__block-label" for="names">Имя элемента</label>
      <span class="searchelem__block-label">
        <select class="searchelem__select" id="names" v-model="nametype">
          <option class="searchelem__select-option" value="short">Символ элемента</option>
          <option class="searc-labelhelem__select-option" value="runame">Русское название</option>
          <option class="searchelem__select-option" value="latname">Латинское название</option>
        </select>
        <input
          class="searchelem__input"
          v-model="nameelem"
          type="text"
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
          @keypress.space="resetfilter"
          @input="selmass"
        />
      </span>
    </div>
    <div class="searchelem__block">
      <label class="searchelem__block-label">Степени окисления</label>
      <span class="searchelem__block-label">
        <div
          v-for="(c, k) in oxi"
          :key="k"
          class="searchelem__checkpanel"
        >
          <input
            v-model="c.check"
            :id="'oxi'+k"
            type="checkbox"
            class="searchelem__checkpanel-default"
          />
          <label
            v-if="c.check"
            :for="'oxi'+k"
            class="searchelem__checkpanel-true"
          >
            {{ c.val }}
          </label>
          <label
            v-else
            :for="'oxi'+k"
            class="searchelem__checkpanel-false"
          >
            {{ c.val }}
          </label>
        </div>
      </span>
    </div>
  </form>
</template>
<style scoped lang="less">
.searchelem {
  margin: 15px;
  padding: 15px;
  border: 1px solid #45dbab;
  border-radius: 12px;
  background-color: rgba(#457bab ,0.5);
  display: flex;
  justify-content: space-between;
  &__block {
    display: flex;
    flex-direction: column;
    &-label {
      color: #222;
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
  }
  &__select {
    padding: 5px;
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
      masselem: 0,
      oxi: [
        { val: '-8', check: false },
        { val: '-7', check: false },
        { val: '-6', check: false },
        { val: '-5', check: false },
        { val: '-4', check: false },
        { val: '-3', check: false },
        { val: '-2', check: false },
        { val: '-1', check: false },
        { val: ' 0', check: false },
        { val: '+1', check: false },
        { val: '+2', check: false },
        { val: '+3', check: false },
        { val: '+4', check: false },
        { val: '+5', check: false },
        { val: '+6', check: false },
        { val: '+7', check: false },
        { val: '+8', check: false }
      ]
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
    keyeve (e) {
      console.log(e)
    },
    selmass (e) {
      if (e.inputType === 'deleteContentBackward') {
        this.resetfilter()
      }
      this.$store.dispatch('selElements', {
        type: 'mass',
        query: '' + this.masselem,
        num: this.masselem
      })
    },
    filtername () {
      this.selt = 'все'
      if (!this.nameelem.length) {
        this.resetfilter()
      }
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
