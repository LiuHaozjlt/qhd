<template>
    <div>
        
        <button @click="openPicker" >底部弹框</button>
        <!-- <div>{{wupindata}}</div> -->
      
        <mt-popup  v-model="popupVisible"  position="bottom" class="popup">
            <div class="list">
                <div v-for="(item,index) in wupindata" :key="index" class="list-item">
                    <span class="list-item-btn">{{item.wupintype}}</span>  
                </div>
            </div>
            <!-- <mt-picker></mt-picker>    -->
        </mt-popup>
      
        <!-- <mt-datetime-picker ref="picker">
            
        </mt-datetime-picker>  -->
    </div>
</template>

<script>

import Vue from 'vue'

import { Popup } from 'mint-ui';

Vue.component(Popup.name,Popup);
// Vue.component( DatetimePicker);

// let povi = popupVisible
export default {
    data(){
        return{
            // pickerValue:pickerValue,
            popupVisible:false,
            pickerValue:"pickerValue",
            // povi:popupVisible,
            // popupVisible:popupVisible,
            wupindata:[]
        }
    },
    methods:{
        openPicker() {
        // this.$refs.picker.open();
           this.popupVisible = true
        },
        // onbotm(){
        // //   this.$refs.picker.open();
        // this.popupVisible = true
       
    },
    mounted(){
        // console.log(this.VueAMap)
         var data = this.mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      "list|9": [
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          // "id|+1": 1,
          // "content|6": "有房的注意,这两个证件抓紧办理",
          "wupintype|1": "iphone",
          // "from|1": "万象",
          // img: this.mock.Random.image("110x72", "#000000", "png"),
        //   menuimg: this.mock.Random.image("41x33", "yellow", "png")
          // "num|1-1000": 1,
          // 'datetime': '@datetime("yyyy-MM-dd A HH:mm:ss")'
          // datetime: '@datetime("yyyy-MM-dd")'
        }
      ]
    });
    // 输出结果
    // console.log(data);
    this.mock.mock("/wupin", data);
    this.axius.get("/wupin").then(p => {
      // console.log(p)
      this.wupindata = p.data.list;
    //   console.log(this.wupindata);
    });

    }
}
</script>

<style scoped>
    .popup {
        width: 100%;
    }
    .list {
        display: flex;
        flex-wrap: wrap;

    }
    .list-item {
        flex: 1 1 33%;
        padding: 10px 15px;
    }
    .list-item-btn {
        border: 1px solid #ccc;
    }
</style>
