<template>
    <div class="dlu">
        <div>
          <div class="logo">
             <img     src="" alt="">       
          </div>  
            <div class="zhanghao_mima">
                <div>
                  <span>账号</span> 
                  <input   type="text" placeholder="请填写手机号码">
                </div>
                <div>
                  <span>密码</span>
                  <input   type="text" placeholder="输入密码">
                </div>         
             </div>
            <div class="denglu">登录</div>
            <router-link to="/yzsjhm">
              <div class="yanzhenma" @click="setvalue()">使用验证码登录</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      // num: ["user", "pass"]
    };
  },
  // created() {
  //   this.setvalue();
  // },
  methods: {
    setvalue() {
      console.log("222")
        this.$router.push({path:'/yzsjhm'})
    }
  }
};
</script>
<style>

</style>


