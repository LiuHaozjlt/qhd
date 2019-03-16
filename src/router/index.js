import Vue from 'vue'
import Router from 'vue-router'
import dlu from '../html/dlu'
import wlcm from '../html/welcome.vue'
import idx from '../html/index.vue'
import appView from '../App'
// import yzsjhm from '../html/yanzenshoujihao.vue'
// import ljqy from '../html/liji_qiye.vue'
// import jrqy from '../html/jiaruqiye.vue'
// import cjqy from '../html/chuangjianqiye.vue'
// import dropdownmenu from '../components/dropdown-menu'
// import xiaoshou from '../html/xiaoshou/xiaoshou'
// import tab_publc from '../html/xiaoshou_public/tab_publc.vue'
// import tab from '../html/xiaoshou/xiaoshou_comp/tab'
// import tab_b from '../html/xiaoshou/xiaoshou_comp/tab_b'
// import tab_c from '../html/xiaoshou/xiaoshou_comp/tab_c'
import test from '../html/test'

import dizhi from '../html/dizhi.vue'
import liuyan from '../html/liuyan.vue'
// import tishi from '../html/tishi.vue'
// eslint-disable-next-line camelcase
import vue_m from '../html/vue_map.vue'
import dingdan from '../html/wuliu/dingdan'
// import zimuhuadong from '../html/zimuhuadong.vue'
// import index from '../html/index.vue'
import souType from '../html/souType'
// import zhaotype from '../html/zhao-type'
import zhaofangzi from '../html/zhaoFangzi'
import indexcote from '../html/shouye/index-cote'
import wupin from '../components/wuliu-wupin'
import fabuele from '../html/fabu/fabu-ele'
import xinwen from '../html/xinwen/new'
import pinpai from '../html/pinpai/pinpai-ele'
import wodeele from '../html/wode/wode-ele'
import bianji from '../html/wode/bianji'
import nicheng from '../html/wode/nicheng'
import shoucang from '../html/wode/shoucang'
import jubao from '../html/wode/jubao'
import fuwuxieyi from '../html/wuliu/fuwuxieyi'
import jishou from '../html/wuliu/ji-shou'
import xiugaidizhi from '../html/xiugaidizhi'
import xuanzeji from '../html/wuliu/xuanzeji'
import newxiangqin from '../html/xinwen/new-xiangqin'
import fabupeop from '../html/fabu/fabu-peop'
import wodezhid from '../html/wode/wode-zhid'
import wodeguanyu from '../html/wode/wode-guanyu'
import wodeshezhi from '../html/wode/wode-shezhi'
import wodezhanghao from '../html/wode/wode-zhanghao'
import wodexiugai from '../html/wode/wode-xiugai'
import wodeyuyan from '../html/wode/wode-yuyan'
import wodeyijian from '../html/wode/wode-yijian'
import wodejubxq from '../html/wode/wode-jubxq'
import wodejifmix from '../html/wode/wode-jifmix'
import wodejfxq from '../html/wode/wode-jfxq'
import wodeqiye from '../html/wode/wode-qiye'
import apitest from '../html/api-test'

// import map_text from "AmapText"
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/apitest',
      name: 'apitest',
      component: apitest
    },
    {
      path: '/wodeqiye',
      name: 'wodeqiye',
      component: wodeqiye
    },
    {
      path: '/wodejfxq',
      name: 'wodejfxq',
      component: wodejfxq
    },
    {
      path: '/wodejifmix',
      name: 'wodejifmix',
      component: wodejifmix
    },
    {
      path: '/wodejubxq',
      name: 'wodejubxq',
      component: wodejubxq
    },
    {
      path: '/wodeyijian',
      name: 'wodeyijian',
      component: wodeyijian
    },
    {
      path: '/wodeyuyan',
      name: 'wodeyuyan',
      component: wodeyuyan
    },
    {
      path: '/wodexiugai',
      name: 'wodexiugai',
      component: wodexiugai
    },
    {
      path: '/wodezhanghao',
      name: 'wodezhanghao',
      component: wodezhanghao
    },
    {
      path: '/wodeshezhi',
      name: 'wodeshezhi',
      component: wodeshezhi
    },
    {
      path: '/wodeguanyu',
      name: 'wodeguanyu',
      component: wodeguanyu
    },
    {
      path: '/wodeguanyu',
      name: 'wodeguanyu',
      component: wodeguanyu
    },
    {
      path: '/wodezhid',
      name: 'wodezhid',
      component: wodezhid
    },
    {
      path: '/fabupeop',
      name: 'fabupeop',
      component: fabupeop
    },
    {
      path: '/newxiangqin',
      name: 'newxiangqin',
      component: newxiangqin
    },

    {
      path: '/xuanzeji',
      name: 'xuanzeji',
      component: xuanzeji

    },
    {
      path: '/dingdan',
      name: 'dingdan',
      component: dingdan
    },
    {
      path: '/jishou',
      name: 'jishou',
      component: jishou
    },
    {
      path: '/fuwuxieyi',
      name: 'fuwuxieyi',
      component: fuwuxieyi
    },
    {
      path: '/jubao',
      name: 'jubao',
      component: jubao
    },
    {
      path: '/shoucang',
      name: 'shoucang',
      component: shoucang
    },
    {
      path: '/nicheng',
      name: 'nicheng',
      component: nicheng
    },
    {
      path: '/bianji',
      name: 'bianji',
      component: bianji
    },
    {
      path: '/',
      component: appView,
      children: [{
        path: '',
        redirect: '/index'
      },
      {
        path: 'index',
        name: 'index',
        component: idx,
        children: [{
          path: 'indexcote',
          name: 'indexcote',
          component: indexcote
        },
        {
          path: 'pinpai',
          name: 'pinpai',
          component: pinpai
        },
        {
          path: 'fabuele',
          name: 'fabuele',
          component: fabuele
        },
        {
          path: 'wupin',
          name: 'wupin',
          component: wupin
        },
        {
          path: 'wodeele',
          name: 'wodeele',
          component: wodeele
        },
        {
          path: 'xinwen',
          name: 'xinwen',
          component: xinwen
        },
        {
          path: '',
          component: indexcote
          // component: /index
          //  redirect: '/index/indexcote'
        }
        ]
      }
      ]
    },

    // {
    //   path: '/wupin',
    //   name: 'wupin',
    //   component: wupin
    // },
    // {
    //   path: '/wodeele',
    //   name: 'wodeele',
    //   component: wodeele
    // },
    {
      path: '/zhaofangzi',
      name: 'zhaofangzi',
      component: zhaofangzi
    },
    // {
    //   path: '/xinwen',
    //   name: 'xinwen',
    //   component: xinwen
    // },
    // {
    //   path: '/zhaotype',
    //   name: 'zhaotype',
    //   component: zhaotype
    // },
    {
      path: '/souType',
      name: 'souType',
      component: souType
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/xiugaidizhi',
      name: 'xiugaidizhi',
      component: xiugaidizhi
    },
    {
      path: '/dizhi',
      name: 'dizhi',
      component: dizhi
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
    // {
    //   path: '/tishi',
    //   name: 'tishi',
    //   component: tishi
    // },
    // {
    //   path: '/idx',
    //   name: 'idx',
    //   component: idx
    // }
    {
      path: '/wlcm',
      name: 'wlcm',
      component: wlcm
    },
    {
      path: '/dlu',
      name: 'dlu',
      component: dlu
    },
    // {
    //   path: '/yzsjhm',
    //   name: 'yzsjhm',
    //   component: yzsjhm
    // },
    // {
    //   path: '/ljqy',
    //   name: 'ljqy',
    //   component: ljqy
    // },
    // {
    //   path: '/jrqy',
    //   name: 'jrqy',
    //   component: jrqy
    // },
    // {
    //   path: '/cjqy',
    //   name: 'cjqy',
    //   component: cjqy
    // },
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
    }
    // {
    //   path: '/zimuhuadong',
    //   name: 'zimuhuadong',
    //   component: zimuhuadong
    // }
  ]
})
