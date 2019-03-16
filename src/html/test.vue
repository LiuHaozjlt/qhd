 <template>
      
     <div class="content"> 
         
        <p>
           
            <span @click="showAction=1">地区</span> 
            <span  @click="showAction=2">租金</span>
            <span @click="showAction=3">户型</span>
        </p>
        <div v-if="showAction == 1">
            <!-- //内容1 -->
            <ul class="bigMenu">
                <li v-for="(item,index) in privice" :key="index" @click="checkAction(index)">
                    <span :class="[checkKey == index ? 'checkMenu' : '']">{{item}}</span>
                </li>
            </ul>
            <ul class="secondMenu">
                <li>条件</li>
                <!-- 把条件放这里 -->
                <template  v-if="checkKey > -1">
                    <li v-for="(name,index) in city[checkKey]" :key="index">
                        <span>{{name}}</span>
                    </li>
                </template>
            </ul>
        </div>
        <div v-if="showAction == 2">222222222222</div>
        <div v-if="showAction == 3">333333333333</div>
     </div>
 </template>

 <script>
//   import Vue from 'vue'
//  import VueAMap from 'vue-amap'
import cityData from '@/constant/city'
 export default {
    data(){
        return{
            text:"sssss",
            privice:cityData.privice,
            city:cityData.city,
            showAction:0,
            checkKey:-1,  

        }
    },
    mounted(){
    },
    methods:{
        checkAction(index){
            console.log(index)
            this.checkKey = index
        }
    }
 }
 </script>
 <style>
    li{
        height: 48px;
        line-height: 48px;
    }
    .checkMenu{
        color: red
    }
    .bigMenu{

    }
    .content{
        display: flex;
        justify-content: flex-start;
        align-content: flex-start;       
    }
    ul {
        flex:1;  
    }
 </style>
 
 
 