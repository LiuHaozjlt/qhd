<template>
  <div class="login">
    <div class="login-box">
    <!-- <div class="test">测试</div> -->
      <denluhead :is-login="isLogin" :is-forget="isForget" @change="changeLogin"></denluhead>
      <denlulogo></denlulogo>
      <denlufrm :is-login="isLogin" @forget="isForget = true"></denlufrm>
      <denluxuanxiang v-if="isLogin"></denluxuanxiang>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import denluhead from '@/components/denlu-head'
import denlulogo from '@/components/denlu-logo'
import denlufrm from '@/components/denlu-from'
import denluxuanxiang from '@/components/denlu-xuanxiang'
// import dropdown from '@/components/dropdown-menu';
export default {
  data () {
    return {
      // num: ["user", "pass"]
      isLogin: true,
      isForget: false
    }
  },
  components: {
    denluhead,
    denlulogo,
    denluxuanxiang,
    denlufrm
  },
  created () {
    Toast({
      message: '提示',
      position: 'bottom'
      // duration: -1
    })
  },
  methods: {
    // setvalue() {
    //   console.log("222");
    //   this.$router.push({ path: "/yzsjhm" });
    // },
    changeLogin (val) {
      this.isLogin = val
    }
  }
  // mounted() {
  //   console.log("mui");
  //   // this.mui.alert('mui')
  // }
}
</script>
<style>
.mint-toast {
  width: 7.8125rem;
  border-radius: 0.625rem;
  height: 0.625rem;
}
.mint-toast-text {
  height: 0.625rem;
  line-height: 0.625rem;
  font-size: 0.6875rem;
  font-family: PingFang-SC-Regular;
  font-weight: 200;
  color: rgba(255, 255, 255, 1);
}
.login {
  /* -top: 1.25rem; */
}
.login-box {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  /* padding-top: 1.25rem; */
}

.dlu a {
  font-size: 15px;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
}

.zhanghao_mima > div > div > input {
  width: 100%;
  display: block;
  text-align: center;
}
/* .zhanghao_mima > div > select {
  height: 50px;
  outline: none;
}
.zhanghao_mima > div > select > option {
  outline: none;
} */
</style>
