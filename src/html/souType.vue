<template>
<div>
    <div class="shouye-sech-head">
        <img src="../image/zuojiantou.png" alt="">
        <div class="shouye-sech">选择搜索类别</div>
    </div>
    <div class="sou-cent">
        <div class="sou-cent-top">
            <router-link :to="'/zhaoFangzi?type=' + item.soutype" v-for="(item,index) in soudata" :key="index" class="item" :class="{active: index === activeIndex}"
                @click="activeIndex = index">
                <div class="item-inner">
                    {{item.soutype}}
                </div>
            </router-link>
        </div>

        <!-- <div class="sou-cent-top">
            <div v-for="(item,index) in soudata.slice(4)" :key="index" :class="{active: index === activeIndex}"
            @click="activeIndex = index">
                <div>
                    {{item.soutype}}
                </div>
            </div>
        </div> -->
    </div>
</div>

</template>

<script>
export default {
  data () {
    return {
      fs: false,
      soudata: [],
      sige: '',
      none: 'display:none',
      activeIndex: 0
    }
  },
  mounted () {
    var data = this.mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|8': [
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          // "id|+1": 1,
          // "content|6": "有房的注意,这两个证件抓紧办理",
          'soutype|1': '租房'
          // "from|1": "万象",
          // img: this.mock.Random.image("110x72", "#000000", "png"),
        //   menuimg: this.mock.Random.image("41x33", "yellow", "png")
          // "num|1-1000": 1,
          // 'datetime': '@datetime("yyyy-MM-dd A HH:mm:ss")'
          // datetime: '@datetime("yyyy-MM-dd")'
        }
      ]
    })
    // 输出结果
    // console.log(data);
    this.mock.mock('/sou', data)
    this.axius.get('/sou').then(p => {
      // console.log(p)
      this.soudata = p.data.list
    //   console.log(this.soudata);
    })
  }
}
</script>
<style>
    .item-inner{
        font-size:.875rem /* 14/16 */;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(51,51,51,1);
        padding-bottom: 1rem /* 16/16 */;
    }
    .shouye-sech-head{
        display:flex;
        align-items: center;
        padding:1rem /* 16/16 */  0 1rem /* 16/16 */ 0;
    }
    .shouye-sech-head img{
        width:.5rem /* 8/16 */;
        height: .9375rem /* 15/16 */;
        margin-right: 1.3125rem /* 21/16 */;
    }
    .shouye-sech{
        font-size:.9375rem /* 15/16 */;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .sou-cent-top{
        padding-top:3.1875rem /* 51/16 */;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
    .sou-cent-top .item {
        width: 25%;
        border-bottom: 2px solid transparent;
    }
    .sou-cent-top .item-inner {
        text-align: center;
    }
    .sou-cent-top>.active {
        border-bottom: 2px solid yellow;
    }
</style>
