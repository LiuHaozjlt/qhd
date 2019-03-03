// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import publi_css from './css/dlu.css'
import VueAMap from 'vue-amap'
import mock from 'mockjs'
import axius from 'axios'
import mint from 'mint-ui'
import eleui from 'element-ui'
import eleuicss from '../node_modules/element-ui/lib/theme-chalk/index.css'
import eleuiconp from '../node_modules/element-ui/lib/index.js'
import  '../src/js/mui.js'
import '../src/fonts/mui.ttf'
import '../src/css/mui.css'
// //引入css
import 'mint-ui/lib/style.css'
import '../src/css/publ-styl.css'


// console.log(axius)
// console.log(mock)
// let amapManager = new AMapManager();
// console.log(amapManager)

Vue.use(eleuiconp)
Vue.use(eleuicss)
Vue.use(eleui)
Vue.use(VueAMap)
Vue.use(mint)
Vue.prototype.mint = mint
Vue.prototype.axius = axius
Vue.prototype.VueAMap = VueAMap
Vue.prototype.mock = mock
VueAMap.initAMapApiLoader({  
  key:"c757e07cf2be665408ef5fb8c0dc4912",
  plugin:  ['AMap.Autocomplete',  'AMap.PlaceSearch',  'AMap.Scale',  'AMap.OverView',  'AMap.ToolBar',    'AMap.MapType',
   'AMap.PolyEditor',  'AMap.CircleEditor', 'AMap.Geolocation', 'AMap.Geocoder'  ],
  v: '1.4.4'
}, )

// let AlertOptions = {
//   title: '', // 默认标题为 '提示'
//   btn: {
//     text: '',
//     style: {} // 可以通过 style 来修改按钮的样式, 比如说粗细, 颜色
//   }
// }
// let ConfirmOptions = {
//   title: '',
//   style: {}, // 同时应用在 yes, no 两个按钮上面的样式
//   yes: {
//     text: '确定',
//     style: {}
//   },
//   no: {
//     text: '取消',
//     style: {}
//   }
// }
// let duration = {
//   durtaion: 200,
//   location: 'center|top ' // 如果不传递, 默认在底部, 如果传递, 就必须要有值
// }
// import {
//   Alert,
//   Confirm,
//   Toast
// } from 'wc-messagebox'
// import 'wc-messagebox/style.css'
// Vue.use(Alert, AlertOptions)
// Vue.use(Confirm, ConfirmOptions)
// Vue.use(Toast, duration)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
  },
  template: '<App/>'
})
