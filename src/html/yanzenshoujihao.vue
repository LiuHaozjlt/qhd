<template>
    <div class="yanzenma">
        <div   class="shouji_tianxiec_con" v-for='(item, index ) in text' :key="index">
            <div class="shouji_tianxie">
              <span>{{item.num}}</span>
              <input type="text" :placeholder="item.tianxie">
            </div>
            <div     @click="test"    v-if="index==2" href="">{{getCodeButtonText}}</div>
            <div   v-if="index==1" href="">{{item.huoquma}}</div>
        </div>
    </div>
</template>

<script>
// import mj from './../main.js'
// import mi from '../src/mui'
// import mcss from '../mui/css/mui.css'
// import Vue from 'vue'
// import {Alert,wxAlert} from '../../node_modules/wc-messagebox'
// import tc from '../../node_modules/wc-messagebox/style.css'
// Vue.use(Alert, {
//   component: wxAlert
// });
let options = {
  title: "这里是标题", // 默认标题为 '提示'
  btn: {
    text: "",
    style: {} // 可以通过 style 来修改按钮的样式, 比如说粗细, 颜色
  }
};
export default {
  data() {
    return {
      text: [
        { num: "手机号", tianxie: "请填写手机号" },
        { num: "图片验证码", tianxie: "请填写图片", huoquma: "获取图片码" },
        { num: "手机号验证码", tianxie: "请填写验证码" }
      ],
      getCodeButtonText: "获取验证码",
      daojisiCount: 10
    };
  },
  methods: {
    daojisi() {
      // console.log("dddddd");
      //   setTimeout(() => {
      //     this.daojisiCount--;
      //     this.getCodeButtonText = this.daojisiCount + "秒";
      //     console.log(this.getCodeButtonText);
      //     if (this.daojisiCount <= 0) return;
      //     else this.daojisi();
      //   }, 1000);
    },
    getCode() {
      this.daojisi();
    },
    test: function() {
      this.$confirm()
        .then(() => {
          this.$router.push("/jrqy");
        })
        .catch(() => {
          this.$router.push("/dlu");
        });
      // this.$Alert('这里是内容')a
      //   let s = $alert();
      //   console.log(s);
    }
  }
  // created() {
  //   console.log('2222222');
  //   // this.$Confirm('aaaaaaa', options)
  //   this.$confirm()
  // }
};
</script>
 <style scoped>
</style>
