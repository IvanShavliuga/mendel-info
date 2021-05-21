import Vue from 'vue'
import Vuex from 'vuex'
import elements from './elements.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: 'https://mendel-info.usite.pro/publ/ehlementy/',
    elements: elements.list,
    sellist: null,
    select: null,
    selrow: null,
    searchcount: 0,
    modeview: false, // true => select, false => all
    rows: [
      { count: 2, start: 1, break: 0, offset: 0 },
      { count: 8, start: 3, break: 0, offset: 0 },
      { count: 8, start: 11, break: 0, offset: 0 },
      { count: 18, start: 19, break: 0, offset: 0 },
      { count: 18, start: 37, break: 0, offset: 0 },
      { count: 18, start: 55, break: 57, offset: 14 },
      { count: 18, start: 87, break: 89, offset: 14 },
      { count: 14, start: 57, break: 0, offset: 0 },
      { count: 14, start: 89, break: 0, offset: 0 }
    ]
  },
  mutations: {
    SEL_ELEMENT (state, obj) {
      state.select = state.elements[obj.index]
      state.selrow = obj.row
    },
    SEL_ELEMENTS (state, obj) {
      let count = 0
      for (let i = 0; i < state.elements.length; i++) {
        state.elements[i].select = false
      }
      state.sellist = []
      for (let i = 0; i < state.elements.length; i++) {
        if (obj.type === 'type') {
          if (state.elements[i].type === obj.query) {
            state.elements[i].select = true
            count++
          }
        }
        let flt = ''
        if (obj.type === 'runame') {
          flt = state.elements[i].rusname.toUpperCase()
        }
        if (obj.type === 'short') {
          flt = state.elements[i].shortname.toUpperCase()
        }
        if (obj.type !== 'mass') {
          const qu = obj.query.toUpperCase()
          if (flt.indexOf(qu) > -1) {
            state.elements[i].select = true
            count++
          }
        }
        if (obj.type === 'mass') {
          const me = state.elements[i].mass
          const mq = obj.num
          const cmp = (me > mq) ? (me - mq) : (mq - me)
          if (cmp < 1) {
            console.log('mass: ' + cmp)
            state.elements[i].select = true
            count++
          }
        }
      }
      state.searchcount = count
      state.modeview = true
    },
    RESET_FILTER (state) {
      state.modeview = false
      for (let i = 0; i < state.elements.length; i++) {
        state.elements[i].select = false
      }
    },
    RESET_SELELEM (state) {
      state.select = null
    }
  },
  actions: {
    selElement ({ commit }, obj) {
      commit('SEL_ELEMENT', obj)
    },
    selElements ({ commit }, obj) {
      console.log('action')
      commit('SEL_ELEMENTS', obj)
    },
    resetFilter ({ commit }) {
      commit('RESET_FILTER')
    },
    resetSelelem ({ commit }) {
      commit('RESET_SELELEM')
    }
  },
  getters: {
    elements: state => state.elements,
    sellist: state => state.sellist,
    rows: state => state.rows,
    elementindex: state => (id) => {
      return state.elements.findIndex((el) => {
        return el.index === id
      })
    },
    select: state => state.select,
    selrow: state => state.selrow,
    modeview: state => state.modeview,
    fullurl: state => (url) => state.baseUrl + url
  }
})
