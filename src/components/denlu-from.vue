<template>
  <div class="denlu-frm">
    <form class="mui-input-group">
      <div class="mui-input-warp">
          <div class="mui-input-row">
          
            <img src="../image/wo@2x.png" alt="">
            <dropdown></dropdown>
            <input type="text" class="mui-input-clear denlu" placeholder="手机号">
          </div>
      </div>
      <div class="mui-input-warp">
          <div class="mui-input-row" v-if='isPasswordLogin'>
            <img src="../image/suo@2x.png" alt="">
            <input type="password" class="mui-input-password denlu" placeholder="请输入密码">
          </div>
           <div class="mui-input-row" v-else> 
            <img src="../image/suo@2x.png" alt="">
            <input type="password" class="mui-input-password denlu" placeholder="请输入验证码">
            <span v-if="!isSending" @click="send">获取验证码</span>
            <span v-else class="timer">{{timeCount}} s</span>
          </div>
      </div>
      <div class="mui-input-warp">
          <denlubtn></denlubtn>
      </div>
      <div class="mui-input-warp">
      <div class="mui-button-row">
        <div  class="dx-yanzhen" @click="changeLoginType">{{ isPasswordLogin ? "短信验证" : "密码验证"}}</div> 
        <div   class="wj-mima">忘记密码</div>
      </div>
      </div>
    </form>
    <div class="mui-input-warp">

   
     <qitafangshi></qitafangshi>
      </div>
  </div>
</template>

<script>
import dropdown from "@/components/dropdown-menu";
import denlubtn from "@/components/denlu-btn";
import qitafangshi from "@/components/qita-fangshi";
import { setInterval, clearInterval } from 'timers';
export default {
  data(){
    return{
      isSending: false,
      timeCount: 56,
      isPasswordLogin: true
    }
  },
  components: {
    dropdown,
    denlubtn,
    qitafangshi
  },
  methods:{
    changeLoginType(){
       this.isPasswordLogin = !this.isPasswordLogin;
    },
    send() {
      this.isSending = true;
      let timer = setInterval(() => {
        if(this.timer === 0) {
          clearInterval(timer);
          this.isSending = false;
          this.timeCount = 56;
        } else {
          this.timeCount --;
        }
      }, 1000);
    }
  }
};
</script>

<style>
.dx-yanzhen,
.wj-mima {
  font-size: 0.8125rem;
  font-family: PingFang-SC-Regular;
  font-weight: 200;
  color: rgba(153, 153, 153, 1);
}
.el-dropdown-menu li {
  width: 100px;
  text-align: center;

  
}

.mui-input-warp {
  padding: 0 10%;
  /* display: flex;
  justify-content: center */
}
.mui-input-row {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
}
.mui-input-row img {
  display: block;
  width: 1.25rem;
  height: 1.25rem;
}
.mui-input-group .mui-input-row {
  /* margin: 0 0.3rem; */
}
.mui-button-row {
  /* padding-bottom:9.125rem; */
  height: 0!important;
  display: flex;
  justify-content: space-between;
}
.mui-input-group .mui-input-row:after {
  width: 0;
  /* width: 90%; */
}
.mui-input-group:before {
    position: static;
    right: static;
    bottom: static;
    left: static;
    height: static;
    content: static;
    -webkit-transform: static;
    transform: static;
    background-color: static;
}
.mui-input-group:after {
    position: static;
    right: static;
    bottom: static;
    left: static;
    height: static;
    content: static;
    -webkit-transform: static;
    transform: static;
    background-color: static;
}
/* .timer {
  coloyangshi wo lai  hai you zui hou yig wnt 
} */
</style>

