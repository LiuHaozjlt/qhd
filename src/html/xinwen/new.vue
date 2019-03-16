<template>
    <div style="background-color:#F5F5F5;height:100%;">
        <div style="position: relative;">
            <mt-swipe :auto="4000" @change="handleChange">
                <mt-swipe-item v-for="item of swiperList" :key="item">{{item}}</mt-swipe-item>
            </mt-swipe>
            <div style="position: absolute;right: 10px;bottom: 10px;border-radius: 10rem;background: rgba(0,0,0,.5);">
                {{curSwiper}}/{{swiperList.length}}
            </div>
        </div>
    

        <div style="background-color:white;margin-bottom:7px" @click="xinxiangqin">
             <div>
                <div class="new-cent">
                印尼海啸死亡人数升至429人超过1400人受伤                             
                </div>
                <div class="new-cent-botm">
                    <!-- <div class="new-cent-bot"> -->
                        <div class="new-cent-lef new-cent-lef-rit">
                            <img src="" alt="">
                            <div style="display:inline-block">1.1万</div> 
                        </div>
                    <!-- </div> -->
                    <div class="new-cent-rit">
                        官方
                    </div> 
                </div>           
            </div>
        </div>

          <div style="background-color:white;margin-bottom:7px">
             <div>
                <div class="new-cent new-cent-cent">
                印尼海啸死亡人数升至429人超过1400人受伤                             
                </div>
                <div class="new-cent-botm">
                    <!-- <div class="new-cent-bot"> -->
                        <div class="new-cent-lef new-cent-lef-rit">
                            <img src="" alt="">
                            <div style="display:inline-block">1.1万</div> 
                        </div>
                    <!-- </div> -->
                    <div class="new-cent-rit">
                        官方
                    </div> 
                </div>    
                  <div class="new-bot-head">
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="" style="margin-right:0px">
                </div>       
            </div>
        </div>
        <!-- <div style="background-color:white">  
                <div class="new-cent new-cent-cent">
                    印尼海啸死亡人数升至429人超过1400人受伤                             
                </div>
                <div class="new-cent-bot">
                    <div class="new-cent-lef new-cent-lef-rit">
                        <img src="" alt="">
                        <div style="display:inline-block">1.1万</div> 
                    </div>
                </div>
                <div class="new-cent-rit">
                    官方
                </div>
            
                <div class="new-bot-head">
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="" style="margin-right:0px">
                </div>
        </div>   -->
      
     
    
    </div>
</template>

<script>
export default {
    data(){
        return {
            swiperList: [1,2,3,4,5],
            curSwiper: 1,
        }
    },
    methods:{
        handleChange(index){
            console.log(index)
            this.curSwiper = index+1;
        },
        xinxiangqin(){
             this.$router.push({path:"/newxiangqin"})
        }
    }
}
</script>


<style>
    .new-cent{
        padding-top:.8125rem /* 13/16 */;
    }
    .new-cent-cent{
        padding-top:.9375rem /* 15/16 */;
        font-size:16px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(51,51,51,1);
         
    }
    .new-cent-botm{
        justify-content: space-between;
        display:flex;
        align-items: center;
        padding:.8125rem /* 13/16 */ 0 .8125rem /* 13/16 */ 0;
    }
    .mint-swipe{
        height: 30%;
        text-align: center;
    }
    .new-cent-bot{
        display:flex;
        justify-content: space-between;
        align-items: center;
        line-height: 0px;
        padding-top: .75rem /* 12/16 */;           
    }
    .new-cent-lef{
        /* line-height: 0;
        padding-top:.8125rem /* 13/16 */ 
        display: flex;
        align-items: center;
    }
     .new-bot-head{
         display: flex;
         padding-bottom: .9375rem /* 15/16 */;
         
         /* justify-content: space-between; */
        
        
     }
    .new-bot-head img{
       
        height:5.375rem /* 86/16 */;
        display:inline-block;
         flex: 1
         /* flex:1 1 auto; */
        
    }
    .new-bot-head img{
        margin-right: .4375rem /* 7/16 */
    }
    .new-bot-head img:nth-child(3){
        /* margin-right: 0; */
    }
    /* .new-bot-head img:nth-child(2){
        margin:0 .4375rem /* 7/16;
    } */
</style>

