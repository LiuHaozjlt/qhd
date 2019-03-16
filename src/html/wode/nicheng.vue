<template>
    <div>

        <div class="nicheng-head-cont">
            <!-- <div class="bianji-head wodeft"  >
                昵称
            </div> -->
            <header-page :pageName="ipttext" @goWherer='goWherer'></header-page>
            <!-- <div class="nicheng-head">{{}}</div> -->
            <!-- <input type="text" placeholder="请输入昵称" v-model="ipttext"> -->
        </div>
        <div class="zhichi-cont">
            <div class="zhichi shisan">
                支持<div class="six">6</div>位字符以内的中英文、数字
            </div>
        </div>
        <div class="bianji-save" @click="savenic">保存</div>
    </div>
</template>

<script>
import headerPage from '../../components/header'
export default {

  data () {
    return {
      ipttext: '昵称'
    }
  },
  methods: {
    savenic (v) {
      this.$router.push({path: '/bianji'})
      return this.ipttext
    },
    goWherer () {
    //   console.log('123123123')
      this.$router.push({
        path: '/bianji'
      })
    }
  },
  components: {headerPage}

}
</script>

<style>
    .zhichi-cont{
        text-align: center;
    }
    .zhichi{
        display: flex;
    }
    .bianji-head{
        text-align: center;
    }
    .bianji-save{
        line-height: 2.25rem /* 36/16 */;
        height: 2.25rem /* 36/16 */;
        background-color: #FFB31E;
        color:white;
        border-radius: 1.125rem /* 18/16 */;
        text-align: center;
    }
    .six{
        color:#FFC74D;
    }
    .shisan{
        font-size:.8125rem /* 13/16 */;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(153,153,153,1);
    }
</style>
