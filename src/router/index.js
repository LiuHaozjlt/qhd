import Vue from 'vue'
import Router from 'vue-router'
import dlu from '../html/dlu'
import yzsjhm from '../html/yanzenshoujihao.vue'
import ljqy from '../html/liji_qiye.vue'
import jrqy from '../html/jiaruqiye.vue'
import cjqy from '../html/chuangjianqiye.vue'

import xiaoshou from '../html/xiaoshou/xiaoshou'
import tab_publc from '../html/xiaoshou_public/tab_publc.vue'
import tab from '../html/xiaoshou/xiaoshou_comp/tab'
import tab_b from '../html/xiaoshou/xiaoshou_comp/tab_b'
import tab_c from '../html/xiaoshou/xiaoshou_comp/tab_c'

import vue_m from '../html/vue_map.vue'
import zimuhuadong from '../html/zimuhuadong.vue'
// import map_text from "AmapText"
Vue.use(Router)
export default new Router({
  routes: [{
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
      path: '/',
      name: 'xiaoshou',
      component: xiaoshou,
      children: [
        {
          path: '/tab',
          name: 'tab',
          component: tab
        },
        {
          path: '/tab_b',
          name: 'tab_b',
          component: tab_b
        },
        {
          path: '/tab_c',
          name: 'tab_c',
          component: tab_c
        },
        {
          path: '/tab_publc',
          name: 'tab_publc',
          component: tab_publc
        }
      ]

    },

    {
      path: '/vue_m',
      name: 'vue_m',
      component: vue_m
    },
    {
      path: '/zimuhuadong',
      name: 'zimuhuadong',
      component: zimuhuadong
    }
  ]
})
