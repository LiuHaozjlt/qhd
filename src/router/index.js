import Vue from 'vue'
import Router from 'vue-router'
import dlu from '../html/dlu'
import yzsjhm from '../html/yanzenshoujihao.vue'
import ljqy from '../html/liji_qiye.vue'
import jrqy from '../html/jiaruqiye.vue'
import cjqy from '../html/chuangjianqiye.vue'
import tab from '../html/tab.vue'
import map from '../html/map.vue'
import vue_m from '../html/vue_map.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/dlu',
      name: 'dlu',
      component: dlu
    },
    {
      path: '/yzsjhm',
      name: 'yzsjhm',
      component: yzsjhm
    },
    {
      path: '/ljqy',
      name: 'ljqy',
      component: ljqy
    },
    {
      path: '/jrqy',
      name: 'jrqy',
      component: jrqy
    },
    {
      path: '/cjqy',
      name: 'cjqy',
      component: cjqy
    },
    {
      path: '/tab',
      name: 'tab',
      component: tab
    },
    {
      path: '/map',
      name: 'map',
      component: map
    },
    {
      path: '/',
      name: 'vue_m',
      component: vue_m
    }
  ]
})
