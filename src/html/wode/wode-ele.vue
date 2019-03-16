<template>
    <div>

        <div class="wode-head-contn">
            <div class="wode-head-contn-lef">
                   <img src="../../image/图层 1.png" alt="">

            </div>
              <!-- <div class="wode-head-in-rit">
                            <img src="../../image/shezhi.png" alt="">
                    </div>            -->

             <div class="wode-head" @click="tobianji">
                    <div class="wode-head-in-warp">
                        <div class="wode-head-in">
                        <img src="" alt="">
                        <div>你好</div>
                        </div>
                    </div>



                    <div class="wode-head-rit">
                         <img src="" alt="">
                    </div>
            </div>
        </div>
        <div class="wode-cent-cont">
            <div class="wode-in">
                <div class="wode-in-in"><img src="../../image/wdjf.png" alt=""></div>
                <div class="shisi">我的积分</div>
            </div>

            <div class="wode-in">
                <div class="wode-in-in"><img src="../../image/wdfb.png" alt=""></div>
                <div class="shisi">我的发布</div>
            </div>

            <div class="wode-in">
                <div class="wode-in-in"><img src="../../image/wdsc.png" alt=""></div>
               <div class="shisi">我的收藏</div>
            </div>
            <div class="wode-in">
                <div class="wode-in-in"><img src="../../image/jbzx.png" alt=""></div>
                <div class="shisi">我的举报</div>
            </div>
        </div>

        <div class="wode-cent-bot-cont">
            <div class="wode-cent-bot">
                <div class="wode-cent-bot-ic">
                    <img src="../../image/tongzhi.png" alt="">
                </div>
                <div class="shiliu">通知</div>
            </div>
            <div class="wode-cent-bot-rit">
                <div class="wode-red"></div>
                <div class="wode-head-rit">
                    <img src="" alt="">
                </div>

            </div>
        </div>
        <div class="wode-cent">
            <div class="wode-ct-ic">
                <div class="wode-cent-bot-ic">
                <img src="../../image/qiehuan.png" alt="">
                </div>

                <div class="shiliu">切换成商家</div>
            </div>

            <div class="wode-head-rit">
                <img src="" alt="">
            </div>
            <!-- <img src="../../image/ruzhu.png" alt="">   入住品牌商家 -->
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {
    // console.log('created')
  },
  methods: {
    tobianji () {
      this.$router.push({path: '/bianji'})
    }
  }
}
</script>

<style>
    .wode-ct-ic{
        display:flex;
    }
    .wode-cent div:nth-child(2){
        margin-left: .8125rem /* 13/16 */;
    }
    .wode-cent-bot-rit{
        display: flex;

    }
    .wode-red{
        width:1.125rem /* 18/16 */;
        height: 1.125rem /* 18/16 */;
        background-color:#FF7461;
        border-radius: 50%;
        margin-right: .6875rem /* 11/16 */;

    }
    .wode-cent-bot-cont{

        display:flex;
        align-items: center;
        justify-content: space-between;
    }
    .wode-cent-bot{
        display: flex;
    }
    .wode-cent-bot div:nth-child(2){
        margin-left: .8125rem /* 13/16 */;
    }
    .wode-cent-bot-ic img{
        width:1.6875rem /* 27/16 */;
        height: 1.5rem /* 24/16 */;
    }
    .shiliu{
        font-size:1rem /* 16/16 */;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .shisi{
        font-size:.875rem /* 14/16 */;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .wode-cent-cont{
        display:flex;
        justify-content: space-between;
        text-align: center;
        border:1px solid red;
        border-radius: .625rem /* 10/16 */;
    }
    .wode-in-in img{
        width:2.3125rem /* 37/16 */;
        height: 2.3125rem /* 37/16 */;
    }
    .wode-head-contn{
        position: relative;
        margin-bottom:1.875rem /* 30/16 */;
    }
    .wode-head{
        justify-content: space-between;
        background-color: white;
        width: 100%;
        border:1px solid black;
        position:absolute;
        top:3.9375rem /* 63/16 */;
        height: 6.1875rem /* 99/16 */;
        border-radius: .625rem /* 10/16 */;
        display:flex;
        align-items: center;
    }
    .wode-head div{
        display: inline-flex;

    }
    .wode-head-in-rit img{
        width:1.4375rem /* 23/16 */;
        height: 1.4375rem /* 23/16 */;
        background-color: aqua;
    }
   .wode-head-contn-lef img{
        width:100%;
        height: 8.25rem /* 132/16 */;
        border:1px solid red;
    }
    .wode-head-in{
        display:flex;
        align-items: center;
    }
    .wode-head-in img{
        width:4.125rem /* 66/16 */;
        height: 4.125rem /* 66/16 */;
        border:.0625rem /* 1/16 */ solid red;
    }
    .wode-head-in div{
        padding-left: .8125rem /* 13/16 */;
    }
    .wode-cent{
        border-top: 1px solid #E1E1E1;
        border-bottom:1px solid #E1E1E1;
        justify-content: space-between;
        padding:1.25rem /* 20/16 */ 0 1.25rem /* 20/16 */ 0;
        display: flex;
        align-items: center;
    }
    .wode-head-rit img{
        width:.5625rem /* 9/16 */;
        height: 1rem /* 16/16 */;
        border:1px solid red;

    }
</style>
