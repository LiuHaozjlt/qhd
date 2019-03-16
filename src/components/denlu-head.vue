<template>
  <div class="mui-input-warp denluhead-box">
    <div class="denluhead" v-if="!isForget">
      <img src="../image/gb@2x.png">
      <a href class="denlu" @click.prevent="change">{{ isLogin ? "注册" : "登录" }}</a>
    </div>
    <!-- <div v-if="false"> -->
  <span v-if="isForget">找回密码</span>
    <!-- </div> -->
  
  </div>
</template>
<script>
// import zujianvalue from "../html/zujian-value";

export default {
   
    props: {
      isLogin: {
        type: Boolean,
        default: true
      },
      isForget: {
        type: Boolean,
        default: false
      }
    },
  
  methods: {
    change() {
      this.$emit("change", !this.isLogin);
     
      // this.denled = $emit.isLogin
      // this.isLogin = denled
      // if(isLogin == 注册)
      // this.denl = denled
    },
    // zhaoHao(isLogin){
    //   console.log("ok")
    //    this.isLogin = false
    // }
    // changes() {
    //   console.log("触发");
    //   zujianvalue.$emit("on", this.isLogin);
    // }
  }
};
</script>

<style>
.denluhead-box {
  margin-top: 1.25rem;
}
.denluhead-box>span{
  display: flex;
  justify-content: center;
}
.denluhead {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.8125rem;
  align-items: center;
}
.denluhead img {
  display: inline-block;
  width: 0.90625rem;
  height: 0.90625rem;
}
</style>

