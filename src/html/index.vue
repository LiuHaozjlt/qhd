<template>
  <div class="frame">
    <router-view></router-view> 
     <div class="circle"></div>
    <div class="shouYe-nav-warp">   
      <div class='shouYe-nav' v-for="(item, index) in navdata" :key="index">
        <img src="item.icon" alt="" style="width:20px;height:20px;background-color:red;">
        <router-link  :to="item.to">
          <div :class="[pathName==item.to?'checkRoute':'nav-ft'] " >{{item.label}}</div>
        </router-link>
      </div>
    </div> 
  </div>
</template>
 
<script>

 
export default {
  data() {
    return {     
      navdata:[
        {name: 'home', label:'首页',icon: '', to: '/index/'}, 
        {name: 'news',label:'新闻' ,icon: '', to: '/index/xinwen'},   
        {name: 'putout',label:'发布', icon: '../image/fabu_s.png', to: '/index/fabuele'},
        {name: 'brand', label:'品牌',icon: '', to: '/index/pinpai'},
        {name: 'mine',label:'我的', icon: '', to: '/index/wodeele'},
      ],
      pathName:''
    };
  },
  watch:{
    '$route':'checkRouter'
  },
  components:{
    
  },
  methods:{
    checkRouter(val){
      this.pathName = val.path
    }
  },
  mounted() {
    //  var data = this.mock.mock({
    //   // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    //   "list|5": [
    //     {
    //       // 属性 id 是一个自增数，起始值为 1，每次增 1
    //       // "id|+1": 1,
    //       // "content|6": "有房的注意,这两个证件抓紧办理",
    //       "navtype|1": "首页",
    //       // "from|1": "万象",
    //       // img: this.mock.Random.image("110x72", "#000000", "png"),
    //       navimg: this.mock.Random.image("21x20", "yellow", "png")
    //       // "num|1-1000": 1,
    //       // 'datetime': '@datetime("yyyy-MM-dd A HH:mm:ss")'
    //       // datetime: '@datetime("yyyy-MM-dd")'
    //     }
    //   ]
    // });
    // // 输出结果
    // // console.log(data);
    // this.mock.mock("/nav", data);
    // this.axius.get("/nav").then(p => {
    //   // console.log(p)
    //   this.navdata = p.data.list;
    //   // console.log(this.navdata);
    // });
  },

  
};
</script>
<style scoped>
.circle{
    width: 3rem;
    height: 3rem;
    border: 1px solid #ddd;
    border-radius: 50%;
    position: fixed;
    bottom: 0.4rem;
    left: 50%;
    margin-left: -1.5rem;
    z-index: 0;
}
.checkRoute{
  font-size:.625rem /* 10/16 */;
  font-family:PingFang-SC-Medium;
  font-weight:500;
  color:rgba(168,168,168,1);
}
.nav-ft{
  font-size:.625rem /* 10/16 */;
  font-family:PingFang-SC-Medium;
  font-weight:500;
  color:rgba(168,168,168,1);
}
.frame {
  padding-bottom: 60px;
}

.shouYe-head-top{
  position: relative;
}
.shouYe-head-top img{
  height: 7.4375rem /* 119/16 */;
  width:100%;
}
.shouYe-head img{
  width:100%;
  height: 7.4375rem /* 119/16 */;
}
.shouYe-head-cent{
   /* position: relative; */
}
.shouYe-head-cent input{
  top: 100px;
  position: absolute;
  border:1px solid red;
  text-align: center;
  /* margin-bottom: 20px; */
  left:5%;
  width:90%!important;

}
.shouYe-cent-top-box{
  margin-top: 2.5rem /* 40/16 */;
}
.shouYe-cent-top-warp{
  position: fixed;
  bottom: 0;
  width: 100%;
  /* margin-top: 1.5625rem /* 25/16 */ /* 12/16 */
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  justify-content: space-between;
}
.shouYe-cent-top {
  /* width: 25%; */ 
    /* border: 1px solid red; */
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column wrap;
    flex-flow: column wrap;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.shouYe-cent-top-cont {
  width: 25%;
}
.shouYe-cent-top-warp {
}
.shouYe-cent {
  display: flex;
  /* border: 1px solid red; */
  /* margin-top: 1.25rem; 20/16 */
}
.shouYe-cent-left {
  margin-right: 0.625rem; /* 10/16 */
}
.shouYe-cent-left img {
  display: inline-block;
}
.shouYe-rigt-top {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.shouYe-cent-rigt {
  line-height: 1.125rem /* 18/16 */
}
.shouYe-cent-rigt > span {
  display: inline-block;
}

.shouYe-cent-rigt > span:nth-child(2) {
  width: 100%;
  text-align: right;
}
.shouYe-rigt-bot {
  display: flex;
  justify-content: space-between;
}
.rigt-wenzi {
  font-size: 0.8125rem /* 13/16 */ /* 13/16 */;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}
.shouYe-nav-warp{
  width:100%;
  position:fixed;
  bottom:0;
  display: flex;
  justify-content: space-between;
  text-align: center;
  background-color: #F8F8F8;
}
.checkRoute{
  color:#333333 !important
}

</style>


