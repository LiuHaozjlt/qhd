<template>
    <div class="wode-zhanghao-warp">
        <div class="wode-zhanghao-head">账号信息</div>
        <div class="wode-zhanghao" v-for="(item,index) in four" :key="index">
            <div class="zhanghao">账号:  12345678910</div>
            <div class="huanb">换帮
                <img src="" alt="">
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            four : 4
        }
    }
}
</script>

<style>
    .wode-zhanghao-warp{
        background-color: #F5F5F5;
        height: 100%;
    }
    .huanb img{
        width:.5625rem /* 9/16 */;
        height: 1rem /* 16/16 */;
        border:1px solid red;
        margin-left:1.375rem /* 22/16 */;
    }
    .wode-zhanghao{
        display: flex;
        justify-content: space-between;
        padding:1.25rem /* 20/16 */  0 1.25rem /* 20/16 */ 0;
    }
    .huanb{
        align-items: center;
        display: flex;
        font-size:.875rem /* 14/16 */;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(153,153,153,1)
    }
    .zhanghao{
        font-size:1rem /* 16/16 */;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
    }
    .wode-zhanghao-head{
        text-align: center;
        font-size:1.0625rem /* 17/16 */;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(51,51,51,1);
    }
</style>


