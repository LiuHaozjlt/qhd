// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import publi_css from './css/dlu.css'
import VueAMap from 'vue-amap'

 
 
 
 

 

 
 


// for (const key in VueAMap) {
//   console.log(VueAMap)
// }
// for (const key in aAmapMarker) {
//    console.log(aAmapMarker)
// }
 
 
//  for (const key in lazyAMapApiLoaderInstance) {
//    console.log(key)
//  }
 
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar',
   'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.Geolocation','AMap.Geocoder','AMap.AmapMarker'],
 
 
},)
 
// VueAMap.initAMapApiLoader()
// key: 'your amap key',
// plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar',
//   'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation', 'AMap.Geocoder'
// ],
// 默认高德 sdk 版本为 1.4.4
// v: '1.4.4'
// 
let AlertOptions = {
  title: '', // 默认标题为 '提示'
  btn: {
    text: '',
    style: {} // 可以通过 style 来修改按钮的样式, 比如说粗细, 颜色
  }
}
let ConfirmOptions = {
  title: '',
  style: {}, // 同时应用在 yes, no 两个按钮上面的样式
  yes: {
    text: '确定',
    style: {}
  },
  no: {
    text: '取消',
    style: {}
  }
}
let duration = {
  durtaion: 200,
  location: 'center|top ' // 如果不传递, 默认在底部, 如果传递, 就必须要有值
}
import { Alert, Confirm, Toast} from 'wc-messagebox'
import 'wc-messagebox/style.css'
Vue.use(Alert, AlertOptions)
Vue.use(Confirm, ConfirmOptions)
Vue.use(Toast, duration)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
 
  components: {
    
  App},
  template: '<App/>'
})
 