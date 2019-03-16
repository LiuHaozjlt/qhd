<template>
    <div>
        <div class="wode-qiye-head">
            企业认证
        </div>

        <div  class="wode-qiye-cent" v-for="(item,index) in twre" :key="index">
            <div class="wode-qiye-cent-c">公司规模</div>
            <div class="wode-qiye-rit">
                <div>请选择</div>
                <img src="" alt="">
            </div>
        </div>

        <div class="tijiao-shenhe">
            提交审核
        </div>
    </div>
</template>

<style>
    .tijiao-shenhe{
        width:100%;
        position:fixed;
        bottom: .4375rem /* 7/16 */;
    }
    .wode-qiye-rit div{
        font-size:.875rem /* 14/16 */;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(153,153,153,1);
        margin-right: .75rem /* 12/16 */;
    }
    .wode-qiye-cent-c{
        font-size:1rem /* 16/16 */;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .wode-qiye-rit{
        display: flex;
        align-items: center;
    }
    .wode-qiye-rit img{
        width:.5625rem /* 9/16 */;
        height: .9375rem /* 15/16 */;
        border:1px solid red;
    }
    .wode-qiye-head{
        text-align: center;
        font-size:1.0625rem /* 17/16 */;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .wode-qiye-cent{
        display:flex;
        justify-content: space-between;
        padding:1.25rem /* 20/16 */ 0 1.25rem /* 20/16 */ 0;
    }
    .tijiao-shenhe{
        height: 2.25rem /* 36/16 */;
        border-radius: 1.125rem /* 18/16 */;
        color:white;
        background-color: #FFB31E;
        line-height: 2.25rem /* 36/16 */;
        text-align: center;
    }
</style>

<script>
export default {
    data(){
        return{
            twre:3
        }
    }
}
</script>


