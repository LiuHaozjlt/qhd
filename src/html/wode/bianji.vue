<template>
    <div>
        <!-- <div   class="bianji-head wodeft"  >

        </div> -->

        <header-page :pageName="pageName" @goWherer='goBack'></header-page>
        <div>
           <div class="bianji-top">
                <div>头像</div>
                <!-- <div class="bianji-top"> -->
                <div class="bianji-top-rit">
                    <div class="bianji-cet">
                        <img src="" alt="">
                    </div>
                    <div class="bianji-you">
                        <img src="" alt="">
                    </div>
                </div>
            </div>
            <!-- </div> -->
        </div>
        <router-link :to="{name: 'nicheng'}" tag="div">
            <div class="bianji-nc-warp">
                <div class="shiliu nic">昵称</div>
                <div class="bianji-rit-warp">
                    <div class="tiannic shiliu">{{msg}}</div>
                    <div class="bianji-you">
                        <img src="" alt="">
                    </div>
                </div>
            </div>
        </router-link>
        <div class="bianji-head-botm" @click="popupVisible=true">
            <div class="shiliu">性别</div>
            <div class="shiliu">{{sex}}</div>
              <div class="bianji-you">
                        <img src="" alt="">
                    </div>
        </div>
        <fabupop :popupVisible='popupVisible' @closepop="closepop">
            <div >

                <p  @click="changSex('男')">男</p>
                <p  @click="changSex('女')">女</p>
            </div>
        </fabupop>
        <!-- <mt-popup
            v-model="popupVisible"
            position="bottom">
            <div class="popBottom">
                <p  @click="changSex('男')">男</p>
                <p  @click="changSex('女')">女</p>
                <p @click="popupVisible=false">取消</p>
            </div>

        </mt-popup> -->
    </div>
</template>
<script>
import fabupop from '../../components/fabu-pop'
import headerPage from '../../components/header'
export default {
  data () {
    return {
      pageName: '编辑个人资料',
      msg: '填写昵称',
      sex: '男',
      popupVisible: false
    }
  },
  methods: {
    closepop (flg) {
      this.popupVisible = flg
    },
    changSex (val) {
      this.sex = val
      this.popupVisible = false
    },
    goBack () {
      this.$router.go(-1)
    }

  },
  mounted () {
    // console.log('bus')
    this.bus.$on('send', (msg) => {
      this.msg = this.ipttext
    })
  },
  components: {
    headerPage,
    fabupop
  }
}
</script>

<style>
.bianji-cet{
    padding-right: .9375rem /* 15/16 */;
}
.tiannic{
    color:#B0B0B0!important;
    padding-right: .9375rem /* 15/16 */;
}
.bianji-nc-warp{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.bianji-rit-warp{
    display:flex;
}
.bianji-top-rit{
    display:flex;
    align-items: center;
}
.bianji-top{
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.bianji-you img{
    width:.375rem /* 6/16 */;
    height: 1.1875rem /* 19/16 */;
    border:1px solid red;
}
.bianji-cet img{
    width:3rem /* 48/16 */;
    height: 3rem /* 48/16 */;
    border-radius: 50%;
    border:2px solid red;
}
.nic{
    padding:1.25rem /* 20/16 */  0  1.25rem /* 20/16 */ 0;
}
.bianji-head-botm div:nth-child(2){
    color:#B0B0B0;
    position: absolute;
    right: .9375rem /* 15/16 */;
}
.wodeft{
font-size:1.125rem /* 18/16 */;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(33,33,33,1);
}
.shiliu{
    font-size:1rem /* 16/16 */;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
}
.bianji-head{
    text-align: center;
}
.bianji-head-botm{
    padding:1.25rem /* 20/16 */  0  1.25rem /* 20/16 */ 0;
    display: flex;
    justify-content: space-between;
}
.popBottom{
    width: 100vw;
    background-color: #fff;
    text-align: center;
}
p{
    height: 40px;
    line-height: 40px;
}
</style>
