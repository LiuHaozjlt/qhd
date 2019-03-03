<template>
  <div class="login">
    <div class="login-box">
    <!-- <div class="test">测试</div> -->
      <denluhead></denluhead>

      <denlulogo></denlulogo>

      <denlufrm></denlufrm>
      <denlufangshi></denlufangshi>

    </div> 
  </div>
  <!-- <div class="denlu-head">
    <img src="" alt="">
    <a href>注册</a>
  </div>-->
  <!-- <div class="logo"> -->
  <!-- <div class="logo-title">
          <div>登录</div>
          <div>注册</div>
  </div>-->
  <!-- </div> -->
  <!-- <div class="zhanghao_mima">
        <div>
  <!<span>账号</span>-->
  <!-- <select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
  </select>-->
  <!-- <div>
            <input type="text" placeholder="请填写手机号码">
          </div>
        </div>
  <div>-->
  <!-- <span>密码</span> -->
  <!-- <input type="text" placeholder="输入密码">
        </div>
      </div>
      <div class="denglu">登录</div>
      <router-link to="/yzsjhm">
        <div class="yanzhenma" @click="setvalue()">使用验证码登录</div>
  </router-link>-->
</template>

<script>
import { Toast } from "mint-ui";
import denluhead from "@/components/denlu-head";
import denlulogo from "@/components/denlu-logo";

import denlufrm from "@/components/denlu-from";
import denlufangshi from "@/components/denlu-fangshi";

// import dropdown from '@/components/dropdown-menu';
export default {
  data() {
    return {
      // num: ["user", "pass"]
    };
  },
  components: {
    denluhead,
    denlulogo,
    denlufangshi,
    denlufrm
  },
  created() {
    Toast({
      message: "提示",

      position: "bottom",
      // duration: -1
    });
  }
  // methods: {
  //   setvalue() {
  //     console.log("222");
  //     this.$router.push({ path: "/yzsjhm" });
  //   }
  // },
  // mounted() {
  //   console.log("mui");
  //   // this.mui.alert('mui')
  // }
};
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


