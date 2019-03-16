<template>
    <div>{{isLogin ? "登录" : "注册"}}</div>  
</template>

<script>
import  zujianvalue from '../html/zujian-value'
export default {
  props: {
    isLogin: {
      type: Boolean,
      default: true
    }
  },
  data(){
    return{
      denled:"登录"
    }
  },
  mounted() {
      zujianvalue.$on('on', (isLogin) => {
         this.isLogin
        //  console.log(this.isLogin)
       })
     }
}
</script>

<style scoped>
div {
  /* margin-top: 1.875rem;
  margin-bottom:1.25rem; */
  margin-top: 8%;
  margin-bottom: 3%;
  height: 2.1875rem;
  line-height: 2.1875rem;
  text-align: center;
  background: rgba(255, 199, 77, 1);
  /* width:250px; */
  border-radius: 0.90625rem;
  font-size: 1.03125rem;
  font-family: PingFang-SC-Regular;
  font-weight: 200;
  color: rgba(255, 255, 255, 1);
}
</style>

