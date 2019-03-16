import Vue from 'vue'
import Vuex from 'vuex'
import mock from 'mockjs'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLoading: false,
    indexData: []
  },
  getters: {
    showLoading (state) {
      return state.showLoading
    },
    indexData (state) {
      //  debugger
      return state.indexData
    }
  },
  mutations: {
    showLoading (state) {
      state.showLoading = true
      setTimeout(() => { state.showLoading = false }, 3000)
    },
    hideLoading (state) {
      state.showLoading = false
    },
    saveIndexData (state, data) {
      state.indexData = data
    }
  },
  actions: {
    getData () {
      var mrdm = mock.Random
      var data = mock.mock('/da', {
        'name|3': [{ cname: () => mrdm.cname() }]
      })
      return axios
        .get('/da')
        .then(data => {
          let dt = data.data.name
          return dt
        })
        .catch(e => {
          console.log('rp')
        })
    }
  }
})
