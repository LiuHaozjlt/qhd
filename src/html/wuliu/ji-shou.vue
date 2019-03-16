<template>
    <div>
        <div class="ji-shou-head">         
            <div class="ji-shou-head-lef">
                 <img src="" alt="">
                 <div>我的订单</div>
            </div>
            <div class="ji-shou-head-cent">
                <img src="../../image/wl.png" alt="">
            </div>           
        </div>
        <div class="ji-cent-top">
            <div class="ji-shou-ji">
                <img src="../../image/jijian.png" alt="">
            </div>  
            <div class="ji-cent-cent">
                <div class="name-cent">
                <div class="ji-name name-numb">谢谢</div>
                <div class="ji-numb">11111111111</div>
                </div>      
                <div class="ji-cent">湖南省 长沙市 荔枝湾 侨中中路223-227号 光电园七号楼209</div>
            </div>    
            <div class="ji-rit">
                <img src="" alt="">
            </div>
        </div>
        <div class="ji-cent-top">
            <div class="ji-shou-ji">
                <img src="../../image/jijian.png" alt="">
            </div>  
            <div class="ji-cent-cent">
                <div class="name-cent">
                <div class="ji-name name-numb">谢谢</div>
                <div class="ji-numb">11111111111</div>
                </div>      
                <div class="ji-cent">湖南省 长沙市 荔枝湾 侨中中路223-227号 光电园七号楼209</div>
            </div>    
            <div class="ji-rit">
                <img src="" alt="">
            </div>
        </div>
        <div class="qiwang">
            <div class="ji-cent-bot-lef">期望上门收货时间：</div>
            <div class="ji-cent-bot-rit">
                 <div>今天</div>
                <div class="jtian">
                    <img src="" alt="">
                </div>
            </div>
           
        </div>

        <div class="qiwang">
            <div class="ji-cent-bot-lef">物品类型：</div>
            <div class="ji-cent-bot-rit">
                 <div>生活用品</div>
                <div class="jtian">
                    <img src="" alt="">
                </div>
            </div>
           
        </div>

        
        <div class="qiwang">
            <div class="ji-cent-bot-lef">估计重量：</div>
            <div class="ji-cent-bot-rit">
                 <div class="jia">
                     <img src="../../image/xjh.png" alt="">
                </div>
                <div class="jtian zhonliang">
                     1kg
                </div>
                 <div class="jian">
                     <img src="../../image/xjjh.png" alt="">
                </div>
            </div>
           
        </div>

        <div class="beizhu">
            备注：
            <input  type="text"  class="beizhu-text" placeholder="快点来少时诵诗书所所所" />
               
            
            <div class="jishu">
                <div>3/5</div>
            </div>
        </div>
        <div class="tiaokuan">
           提交表示同意<div>《老挝咨询物流服务条款》</div>          
        </div>

        <div class="tijiao">
            提交
        </div>
      
    </div>
</template>

<style>
    .tijiao{
        font-size:.9375rem /* 15/16 */;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        margin-top:1.875rem /* 30/16 */;
      
        background-color: #FFB31E;
        height: 2.25rem /* 36/16 */;
        border-radius: 1.125rem /* 18/16 */;
        text-align: center;
        line-height: 2.25rem;
    }
    .tiaokuan div{
        color:#FFC74D;
    }
    .tiaokuan{
        display: flex;
        font-size:.75rem /* 12/16 */;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .jishu{
        text-align: right;
        font-size:.9375rem /* 15/16 */;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(255,179,30,1);
    }
    .beizhu-text{
        font-size:15px;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(153,153,153,1);
    }
    .beizhu{
        font-size:.9375rem /* 15/16 */;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .zhonliang{
        margin:0 .9375rem /* 15/16 */;
        height: 1.6875rem /* 27/16 */;
        background-color: #FFC74D;
        color:white;
        line-height: 1.6875rem;

       

    }
    .jia img{
        width:.8125rem /* 13/16 */;
        height: .8125rem /* 13/16 */;
    }
    .jian img{
        width:.8125rem /* 13/16 */;
        /* height: .125rem /* 2/16 */; 
    }
    .ji-cent-bot-lef{
        font-size:.9375rem /* 15/16 */;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(51,51,51,1);

      
    }
    .ji-cent-bot-rit div:nth-child(1){
        font-size:15px;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(153,153,153,1);
    }
    .jtian img{
        width:.5625rem /* 9/16 */;
        height: 1rem /* 16/16 */;
        border:1px solid red;
        margin-left: .8125rem /* 13/16 */;
    }
    .qiwang{
        display:flex;
        justify-content: space-between;

    }
    
    .ji-cent-bot-rit{
        display: flex;
        align-items: center;
    }
    .ji-cent-top{
        display:flex;
        justify-content: space-between;
        align-items: center;
        height: 4.6875rem /* 75/16 */;
    }
    .ji-rit img{
        width:.5625rem /* 9/16 */;
        height: 1rem /* 16/16 */;
        border:.0625rem /* 1/16 */ solid red;
    }
    .ji-shou-head{
        position: relative;
    }
    .ji-shou-head-cent{
        height: 6.25rem /* 100/16 */;
        /* border:2px solid black; */
        position:absolute;
        top:0;
    }
    .ji-shou-head-cent img{
        width:100%;
        height: 6.25rem /* 100/16 */;
    }
    .ji-shou-head-lef{
        height: 6.25rem /* 100/16 */;
        /* border: 2px solid red; */
        z-index: 9;
        position: relative;    
        display:flex;
        justify-content: space-between;
        /* background-color:aqua; */
        align-items: center;          
    }
    .ji-shou-head-lef div{
        font-size:1.125rem /* 18/16 */;
        font-family:PingFang-SC-Heavy;
        font-weight:800;
        color:rgba(255,255,255,1);
    }
    .ji-shou-head-lef img{
        width:1.375rem /* 22/16 */;
        height:.9375rem /* 15/16 */;
        border:1px solid red;
    }

    .ji-shou-ji img{
        width:2.375rem /* 38/16 */;
        height: 2.375rem /* 38/16 */;
    }
    .ji-numb{
        padding-left: .3125rem /* 5/16 */;
    }
    .ji-cent{
        font-size:.75rem /* 12/16 */;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(153,153,153,1);
        /* padding-top: .4375rem /* 7/16 */; 
    }
    .name-numb{
        font-size:.9375rem /* 15/16 */;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .ji-name{
        /* line-height: 0; */
    }
    .name-cent{
        display: flex;
    }
</style>

