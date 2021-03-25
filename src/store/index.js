import Vue from 'vue'
import Vuex from 'vuex'
import elements from './elements.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: 'https://mendel-info.usite.pro/publ/ehlementy/',
    elements: elements.list,
    select: {},
    selrow: null,
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
    }
  },
  actions: {
    selElement ({ commit }, obj) {
      commit('SEL_ELEMENT', obj)
    }
  },
  getters: {
    elements: state => state.elements,
    rows: state => state.rows,
    elementindex: state => (id) => {
      return state.elements.findIndex((el) => {
        return el.index === id
      })
    },
    select: state => state.select,
    selrow: state => state.selrow,
    fullurl: state => (url) => state.baseUrl + url
  }
})
