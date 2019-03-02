<template>
  <div>
    <div class="test">测试</div>
    <denluhead></denluhead>
    <!-- <div class="denlu-logo"> -->
    <denlulogo></denlulogo>
    <denlufrm></denlufrm>
    <!-- </div> -->
    
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
  <!-- <span>账号</span>-->
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
import denluhead from "@/components/denlu-head";
import denlulogo from "@/components/denlu-logo";
import denlubtn from "@/components/denlu-btn";
import denlufrm from "@/components/denlu-from";
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
    denlubtn,
    denlufrm,
     
  },
  // created() {
  //   this.setvalue();
  // },
  methods: {
    setvalue() {
      console.log("222");
      this.$router.push({ path: "/yzsjhm" });
    }
  },
  mounted() {
    console.log("mui");
    // this.mui.alert('mui')
  }
};
</script>
<style>
.test {
  /* width: 7.5rem; */
  height: 3rem;
  background: green;
  line-height: 3rem;
  font-size: 1rem;
  color: #fff;
  text-align: center;
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


