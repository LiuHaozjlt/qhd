<template>
    <div>
        <div class="dingdan">
            我的订单
        </div>
        <div class="dingdan-warp">
            <div class="hao-chu">
                <div class="dingdan-head">
                    <div>订单号：</div>
                    <div>222222222222</div>
                </div>
                <div class="dingdan-head-rit">
                    <img src="../../image/ssscc.png" alt="">
                    <div>删除</div>
                </div>
            </div>
            <div class="dingdan-cent">
                <div class="dingdan-cent-lf">
                    <div class="dingdan-cent-top">很多</div>
                    <div class="dingdan-cent-bot">和相关</div>

                </div>
                <div class="hengxian"></div>
                <div class="dingdan-cent-rt">
                    <div class="dingdan-cent-top">很多</div>
                    <div class="dingdan-cent-bot">和相关</div>

                </div>
            </div>
        </div>
        
        <div class="jikuaidi">
            寄快递
        </div>
    </div>
</template>

<style>
.jikuaidi{
    font-size:.9375rem /* 15/16 */;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    background-color: #FFB31E;
    border-radius: 1.125rem /* 18/16 */;
    line-height: 2.25rem /* 36/16 */;
    text-align: center;
    position:fixed;
    bottom: .4375rem /* 7/16 */;
    width:100%;

}
.dingdan-warp{
    background-color: aqua;
}
.hao-chu{
    display: flex;
    justify-content: space-between;
    padding-top: .875rem /* 14/16 */;
}
.dingdan-head-rit{
    display: flex;
}
.dingdan-head-rit div{
    font-size:.9375rem /* 15/16 */;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
}
.dingdan-head-rit img{
    width:1.0625rem /* 17/16 */;
    height: 1.0625rem /* 17/16 */;

}
.dingdan-head{
    font-size:.9375rem /* 15/16 */;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
}
.dingdan-head{
    display: flex;
}
.hengxian{
    margin:0 1.875rem /* 30/16 */;
}
 .dingdan-cent-lf,.dingdan-cent-rt{
      
     text-align: center;
     width:45%;
    /* width:100%; */
    
    /* border:1px solid red; */
} 
 
.dingdan-cent-top{
    font-size:13px;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
}
.dingdan-cent-bot{
    /* width:100%; */
    font-size:1.25rem /* 20/16 */;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
}
.dingdan-cent{

    padding-top:2.5625rem /* 41/16 */;
    display:flex;
    align-items: center;
     
     
}
.hengxian{
    width:100%;
    height: 3px;
    background:rgba(153,153,153,1);
}
.dingdan{
    font-size:1.0625rem /* 17/16 */;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
    text-align: center;
}
</style>

