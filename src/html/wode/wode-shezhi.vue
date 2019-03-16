<template>
    <div class="wode-shezhi">
        <div class="wode-shezhi-head">
            设置
        </div>
         <div  class="shezhi-cent"  v-for="(item,index) in four" :key="index">
            <div>账号信息</div>
            <img src="" alt="">
        </div>
        <div class="tuichudl">
            退出登录
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            four :  4
        }
    }
}
</script>



<style>
    .tuichudl{
        height: 2.25rem /* 36/16 */;
        border-radius: 1.125rem /* 18/16 */;
        color:white;
        background-color: #FFCF61;
        line-height: 2.25rem /* 36/16 */;
        text-align: center;
        margin-top: 4.625rem /* 74/16 */;
    }
    .shezhi-cent-top{
        border-top-left-radius: .5rem /* 8/16 */!important;
        border-top-right-radius: .5rem /* 8/16 */!important;
    }
    
    .wode-shezhi{
        background-color: #F5F5F5;
        height: 100%;
    }
    .shezhi-cent{
        display:flex;
        justify-content: space-between;
        padding:1.25rem /* 20/16 */ 0 1.25rem /* 20/16 */ 0;
        border:1px solid red;
       
    }
    .shezhi-cent img{
        width:.5625rem /* 9/16 */;
        height: 1rem /* 16/16 */;
        border:1px solid red;
    }
    .wode-shezhi-head{
        text-align: center;
        font-size:1.125rem /* 18/16 */;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(33,33,33,1);
        padding:1.25rem /* 20/16 */  0  1.25rem /* 20/16 */ 0;
        background-color: #FFCF61;
        margin-bottom:.9375rem /* 15/16 */;
    }
</style>

