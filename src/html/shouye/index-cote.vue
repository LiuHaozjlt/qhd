<template>
  <div>
    <div @click="fresh" style="font-size：15px">刷新</div>
    <div class="shouYe-box">
      <div class="shouYe-head-top">
        <img src="../../image/图层 776@2x.png" alt>
      </div>
      <zhaoipt @focus="inipt"></zhaoipt>

      <div class>
        <div class="index-menu-warp">
          <div class="index-menu" v-for="(item,i) in menudata" :key="i">
            <div>
              <img :src="item.menuimg" alt style="width:20px;height:20px">
            </div>
            <div>{{item.menutype}}</div>
          </div>
        </div>
      </div>
      <div class="tong-new-warp">
        <div class="tong-new">同城<br>新闻</div>
        <div class="gundong">
         <van-swipe :autoplay="3000" style="width:80%;height: 100%"  vertical>
          <template v-for="(item,index) in indexdata">
            <van-swipe-item :key="index" v-if="index < 4">{{item.content}}</van-swipe-item>
          </template>
        </van-swipe>
         </div>
        <img src="" alt="">
      </div>

      <div class="tuiJian">推荐</div>
      <tuijiancont></tuijiancont>
     </div>
  </div>
</template>
<script>
import zhaoipt from '../../components/zhao-ipt'
import tuijiancont from '../../components/tuijian-cont'
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
Vue.use(Swipe).use(SwipeItem)
export default {
  data () {
    return {
      indexdata: [],
      menudata: []
    }
  },
  components: {
    zhaoipt,
    tuijiancont
  },
  methods: {
    fresh () {
      var data = this.mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|8': [
          {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            'content|6': '数据改了~~~~~~~~~~~~~~~',
            'menutype|1': '租房',
            // "from|1": "万象",
            // img: this.mock.Random.image("110x72", "#000000", "png"),
            menuimg: this.mock.Random.image('41x33', 'yellow', 'png')
          // "num|1-1000": 1,
          // 'datetime': '@datetime("yyyy-MM-dd A HH:mm:ss")'
          // datetime: '@datetime("yyyy-MM-dd")'
          }
        ]
      })
      // 输出结果
      // console.log(data);
      this.mock.mock('/menu', data)
      this.axius.get('/menu').then(p => {
      // console.log(p)
        // this.menudata = p.data.list
        this.indexdata = p.data.list
      // console.log(this.menudata);
      })
      // this.indexdata = this.menudata
    },
    inipt () {
      this.$router.push('/souType')
    }
  },
  mounted () {
    let self = this
    var data = this.mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|10': [
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          'id|+1': 1,
          'content|6': '有房的注意,这两个证件抓紧办理',
          'type|1': '租房',
          'from|1': '万象',
          img: this.mock.Random.image('110x72', '#000000', 'png'),
          imgi: this.mock.Random.image('16x11', 'yellow', 'png'),
          'num|1-1000': 1,
          // 'datetime': '@datetime("yyyy-MM-dd A HH:mm:ss")'
          datetime: '@datetime("yyyy-MM-dd")'
        }
      ]
    })
    // // 输出结果
    // // console.log(data)
    this.mock.mock('/test', data)
    this.axius.get('/test').then(p => {
      // console.log(p)

      self.indexdata = p.data.list
      self.$store.commit('saveIndexData', self.indexdata)
    })

    var data = this.mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|8': [
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          // "id|+1": 1,
          // "content|6": "有房的注意,这两个证件抓紧办理",
          'menutype|1': '租房',
          // "from|1": "万象",
          // img: this.mock.Random.image("110x72", "#000000", "png"),
          menuimg: this.mock.Random.image('41x33', 'yellow', 'png')
          // "num|1-1000": 1,
          // 'datetime': '@datetime("yyyy-MM-dd A HH:mm:ss")'
          // datetime: '@datetime("yyyy-MM-dd")'
        }
      ]
    })
    // 输出结果
    // console.log(data);
    this.mock.mock('/menu', data)
    this.axius.get('/menu').then(p => {
      // console.log(p)
      this.menudata = p.data.list
      // console.log(this.menudata);
    })
  }
}
</script>

<style>
.van-swipe-item {
  /* border:2px solid yellow; */
  font-size: 0.8125rem /* 13/16 */ /* 26/16 */;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  padding: 0;
  line-height:2 /* 2/16 */;
  overflow: hidden;
  text-overflow: ellipsis;

  /* height: 1.25rem 20/16 !important; */
}
.van-swipe {
   text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  /* height: 2.5rem 40/16; */
  /* border:2px solid red; */
}
.mint-swipe-indicators {
  display: none;
}
.wanxiang {
  padding-top: 0.5rem /* 8/16 */;
  padding-bottom: 0.5rem /* 8/16 */;
}
.tuiJian {
  margin-top: 0.8125rem /* 13/16 */;
  font-size: 1rem /* 16/16 */;
  font-family: PingFang-SC-Heavy;
  font-weight: 800;
  color: rgba(51, 51, 51, 1);
}
.tong-new-warp {
  display: flex;
  align-items: center;
  background: rgba(255, 199, 77, 1);
}
.tong-new-warp img {
  width: 0.375rem /* 6/16 */;
  height: 0.6875rem /* 11/16 */;
  border: 1px solid red;
}
.tong-new {
  font-size: 1.0625rem /* 17/16 */;
  font-family: FZCTHJW--GB1-0;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  flex: 0 0 auto;
  padding-right: .75rem /* 12/16 */;
}
.gundong {
  height:3.125rem /* 50/16 */;
  width: 100%;
  overflow: hidden;
  /* border:1px solid red; */
}
.van-swipe__indicators,.van-swipe__indicators--vertical{
  display: none!important;
}
.index-menu-warp {
  display: flex;
  flex-flow: wrap;
}
.index-menu {
  width: 25%;
  margin-top: 2.625rem /* 42/16 */;
  text-align: center;
  font-size: 0.75rem /* 12/16 */;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}
.shouYe-head-top {
  position: relative;
}
.shouYe-head-top img {
  height: 7.4375rem /* 119/16 */;
  width: 100%;
}
.shouYe-head img {
  width: 100%;
  height: 7.4375rem /* 119/16 */;
}
.shouYe-head-cent {
  /* position: relative; */
}
.shouYe-head-cent input {
  box-shadow: 0px 0px 12px 0px rgba(132, 132, 132, 0.1);
  top: 100px;
  position: absolute;
  text-align: center;
  /* margin-bottom: 20px; */
  /* left: 5%;
  width: 90% !important; */
}
.shouYe-cent-top-box {
  height: 100%;
  margin-top: 2.5rem /* 40/16 */;
}
.shouYe-cent-top-warp {
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
  border-bottom: 1px solid #ededed;
  /* border: 1px solid red; */
  padding: 1.25rem 0;
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
  line-height: 0.875rem /* 14/16 */;
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
.rigt-wenzi img {
  margin-right: 0.1875rem /* 3/16 */;
}
.shouYe-nav-warp {
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  text-align: center;
  background-color: #f8f8f8;
}
.checkRoute {
  color: red !important;
}
</style>
