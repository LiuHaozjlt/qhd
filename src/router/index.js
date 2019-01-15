import Vue from 'vue'
import Router from 'vue-router'
import dlu from '../html/dlu'
import yzsjhm from '../html/yanzenshoujihao.vue'
import ljqy from '../html/liji_qiye.vue'
import jrqy from '../html/jiaruqiye.vue'
import cjqy from '../html/chuangjianqiye.vue'
 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dlu',
      name: 'dlu',
      component: dlu
      
    },
    {
      path: '/',
      name: 'yzsjhm',
      component: yzsjhm
    },
    {
      path: '/ljqy',
      name: 'ljqy',
      component: ljqy
    },
    {
      path: '/jrqy', // ok?en 
      name: 'jrqy',
      component: jrqy
    },
    {
      path: '/cjqy',
      name: 'cjqy',
      component: cjqy
    },
     
  ]
})
