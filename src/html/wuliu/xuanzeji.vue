<template>
    <div>
        <div>
            <div class="xuanzeren">选择寄件人</div>
            <div class="xuanze-top xuanze-top-ft">
                <div>何倩</div>
                <div>111111111111</div>

            </div>
         
            <div class="xuanze-top-ft">广东省深圳市南山区前海路南山残联前海明珠B栋1211</div>
            <div class="xuanze-bot">
                <div class="xuanze-top-bot">
                    <img src="../../image/choose_N.png" alt="">
                    <div class="xuanze-top-ft">设为默认</div>
                </div>
                <div class="bj-sc">
                    <div class="xuanze-bot-rit">
                        <img src="../../image/bj.png" alt="">
                        <div class="bianji-shanchu">编辑</div>
                    </div>
                    <div class="xuanze-bot-rit">
                        <img src="../../image/ssscc.png" alt="">
                        <div class="bianji-shanchu">删除</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="tianjia">
            添加新地址
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.tianjia{
    width:100%;
    bottom: .4375rem /* 7/16 */;
    position: fixed;
    text-align: center;
    line-height: 2.25rem /* 36/16 */;
    border-radius: 1.125rem /* 18/16 */;
    background-color: #FFB31E;
    font-size:.9375rem /* 15/16 */;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
}
.xuanzeren{
    line-height:2.75rem /* 44/16 */;
    height: 2.75rem /* 44/16 */;
    text-align: center;
    font-size:1.0625rem /* 17/16 */;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
}
.bianji-shanchu{
    padding-left: .4375rem /* 7/16 */;
}
.xuanze-bot{
    margin-top:1.5625rem /* 25/16 */;
    border-top: 1px solid #E1E1E1;
    justify-content: space-between;
    display: flex;
    height: 2.5rem /* 40/16 */;
    /* border:1px solid red; */
    align-items: center;
}
.bj-sc{
    display: flex;
}
.bj-sc div:nth-child(1){
    margin-right: 1.4375rem /* 23/16 */;
}
.bianji-shanchu{
    font-size:.9375rem /* 15/16 */;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
}
.xuanze-bot-rit{
    display: flex;
    align-items: center;
}
.xuanze-bot-rit img{
    width:1.0625rem /* 17/16 */;
    height: 1.0625rem /* 17/16 */;
}
.xuanze-top-bot div{
    padding-left:.625rem /* 10/16 */;
}
.xuanze-top-bot{
    display: flex;
}
.xuanze-top-bot img{
    width:1.1875rem /* 19/16 */;
    height: 1.1875rem /* 19/16 */;
}
.xuanze-top-ft{
    font-size:.9375rem /* 15/16 */;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1); 
}
.xuanze-top{
    display: flex;
    justify-content: space-between;
    /* border:1px solid red; */
    padding-top:1rem /* 16/16 */;
    padding-bottom: 1rem /* 16/16 */;
    
}
</style>


