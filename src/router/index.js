import Vue from 'vue'
import Router from 'vue-router'
import dlu from '../html/dlu'
import wlcm from '../html/welcome.vue'
import idx from '../html/index.vue'
import yzsjhm from '../html/yanzenshoujihao.vue'
import ljqy from '../html/liji_qiye.vue'
import jrqy from '../html/jiaruqiye.vue'
import cjqy from '../html/chuangjianqiye.vue'
// import  dropdownmenu from '../html/dropdown-menu.vue'
// import xiaoshou from '../html/xiaoshou/xiaoshou'
// import tab_publc from '../html/xiaoshou_public/tab_publc.vue'
// import tab from '../html/xiaoshou/xiaoshou_comp/tab'
// import tab_b from '../html/xiaoshou/xiaoshou_comp/tab_b'
// import tab_c from '../html/xiaoshou/xiaoshou_comp/tab_c'
import test from '../html/test'
import erjiliandong from '../html/erjiliandong.vue'
import dizhi from '../html/dizhi.vue'
import liuyan from '../html/liuyan.vue'
import tishi from '../html/tishi.vue'
import vue_m from '../html/vue_map.vue'
import zimuhuadong from '../html/zimuhuadong.vue'
// import map_text from "AmapText"
Vue.use(Router)
export default new Router({
  routes: [
    // {
    //   path:'/dropdownmenu',
    //   name:'dropdownmenu',
    //   component:dropdownmenu
    // },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/erjiliandong',
      name: 'erjiliandong',
      component: erjiliandong
    },
    {
      path: '/dizhi',
      name: 'dizhi',
      component: dizhi
    },
    {
      path: '/liuyan',
      name: 'liuyan',
      component: liuyan
    },
    {
      path: '/tishi',
      name: 'tishi',
      component: tishi
    },
    {
      path: '/idx',
      name: 'idx',
      component: idx
    },
    {
      path: '/wlcm',
      name: 'wlcm',
      component: wlcm
    },
    {
      path: '/',
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
    // {
    //   path: '/xiaoshou',
    //   name: 'xiaoshou',
    //   component: xiaoshou,
    //   children: [{
    //       path: '/tab',
    //       name: 'tab',
    //       component: tab
    //     },
    //     {
    //       path: '/tab_b',
    //       name: 'tab_b',
    //       component: tab_b
    //     },
    //     {
    //       path: '/tab_c',
    //       name: 'tab_c',
    //       component: tab_c
    //     },
    //     {
    //       path: '/tab_publc',
    //       name: 'tab_publc',
    //       component: tab_publc
    //     }
    //   ]

    // },

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
