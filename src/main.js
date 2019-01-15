// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
// import wc from '../node_modules/wc-messagebox'
// import wx from 'wc-messagebox'
import wm from 'wc-messagebox'
// import tc from '../'
Vue.use(wm)
for (const key in wm) {
  console.log(wm)
}
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>'
})
