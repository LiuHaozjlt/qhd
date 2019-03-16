<template>
    <div>
        <div class="shouye-souc-head">
            <img src="../image/zufangzi.png" alt="">
        </div>

        <zhaoipt  :type="type"></zhaoipt>

        <div>
            <!-- {{indexData}} -->
        </div>

        <div class="shouye-sec-guj">
            <div>
                <div>"两房一厅"</div>下共有<div>3</div>条搜索信息
            </div>

        </div>
        <div class="shouye-cent-girl">
            <div class="shouye-kong-con">这里也是空空如此</div>
            <div class="shouye-no">
                <img src="../image/kong.png" alt="">
            </div>
        </div>


    </div>
</template>

<script>

import zhaoipt from '../components/zhao-ipt.vue'
import {mapGetters} from 'vuex'
export default {
  components: {
    zhaoipt

  },
  computed: {
    type () {
      return this.$route.query.type || '';
    },
    ...mapGetters([
      'indexData'
    ])
  }
}
</script>

<style>
    .shouye-cent-girl{
        text-align: center;
        padding-top:10%;
    }
    .shouye-kong-con{
        font-size:.9375rem /* 15/16 */;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(153,153,153,1);
    }
    .shouye-no{
        padding-top:5%;
    }
    .shouye-no img{
        height: 5.8125rem /* 93/16 */;

    }
    .shouye-sec-guj div{
        display:flex;
        font-size:.6875rem /* 11/16 */;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(153,153,153,1);
    }
    .shouYe-head-cent{

    }
    .shouye-souc-head{
        position: relative;
    }
    .shouye-souc-head img{
        height: 6.25rem /* 100/16 */;
    }
</style>
