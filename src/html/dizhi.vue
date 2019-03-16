<template>

<div>
  <div class="xinzhen-head">
          新增地址
  </div>
  <div>
    <div class="dizhi-cent">
      <div class="dizhi-ziliao">姓名</div>
      <input  class="dizhi-ipt" type="text" placeholder="请输入真实姓名">
    </div>
   <div class="dizhi-cent">
      <div class="dizhi-ziliao">联系方式</div>
      <input class="dizhi-ipt" type="text" placeholder="联系方式">
    </div>
     <div class="suozai dizhi-cent">
      <div class="dizhi-ziliao">所在地区</div>
      <input class="dizhi-ipt" type="text" placeholder="所在地区" v-model="address">
      <img src="" alt="" @click="popup4">
    </div>
     <div class="dizhi-cent">
      <div class="dizhi-ziliao">详细地址</div>
      <input class="dizhi-ipt" type="text" placeholder="详细地址">
    </div>
  </div>
  <!-- <mt-button size="large" @click="popup4">下侧弹出Popup</mt-button> -->
  <mt-popup
    v-model="popupVisible4"
    position="bottom"
    class="mint-popup-4">
    <div class="que-qu">
      <div @click="popup4">取消</div>
      <div @click="finish">确定</div>
    </div>

    <mt-picker  :slots="addressSlots" @change="onAddressChange"
               :visible-item-count="5" class="pik"></mt-picker>
  </mt-popup>
  <div class="peisong">*部分地区暂不支持配送</div>
  <div class="save">
    保存
  </div>
</div>

</template>
<script>
import address from './areajson.js'
// import { constants } from 'http2'
let slot1Values = address.map(p => p.label)
let slot2Values = address[0].children.map(p => p.label)
export default {
  name: 'Picker',
  data () {
    return {
      popupVisible4: false,
      address: '',
      piackervalue: '',
      addressSlots: [
        {
          flex: 1,
          values: slot1Values,
          className: 'slot1',
          textAlign: 'center'
        },
        {
          divider: true,
          // content: '-',
          className: 'slot2'
        },
        {
          flex: 1,
          values: slot2Values,
          className: 'slot3',
          textAlign: 'center'
        },
        {
          divider: true,
          // content: '-',
          className: 'slot4'
        },
        {
          flex: 1,
          values: [],
          className: 'slot5',
          textAlign: 'center'
        }
      ]
    }
  },
  mounted () {

  },
  methods: {
    popup4 () {
      this.popupVisible4 = !this.popupVisible4
    },
    finish () {
      this.address = this.piackervalue.reduce((res, item) => {
        return res + (item || '')
      }, '')
      this.popupVisible4 = false
    },
    onAddressChange (picker, values) {
      this.piackervalue = values
      let thirdChildren = null
      let secondObj = address.find(p => p.label == values[0])
      let secondValue = secondObj.children.map(p => {
        if (p.label == values[1]) {
          thirdChildren = p.children
        }
        return p.label
      })
      if (thirdChildren) {
        thirdChildren = thirdChildren.map(p => p.label)
      } else {
        thirdChildren = []
      }
      picker.setSlotValues(1, secondValue)
      picker.setSlotValues(2, thirdChildren)
    }
  }
}
</script>

<style scoped>
  .que-qu{
    display: flex;
    height: 2.8125rem /* 45/16 */;
    line-height: 2.8125rem /* 45/16 */;
    justify-content: space-between;
    border-bottom:1px solid #E1E1E1;
    padding:0 10%;
    font-size:.9375rem /* 15/16 */;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(153,153,153,1);
  }
  .save{
    text-align: center;
    vertical-align: middle;
    border-radius: 1.125rem /* 18/16 */;
    height: 2.25rem /* 36/16 */;
    line-height: 2.25rem /* 36/16 */;
    background-color: #FFB31E;
    font-size:.9375rem /* 15/16 */;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    position:fixed;
    bottom: .4375rem /* 7/16 */;
    width:100%;
  }
  .peisong{
    margin-top: .9375rem /* 15/16 */;
    font-size:.75rem /* 12/16 */;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(240,25,25,1);
    line-height:20px;
  }
  .dizhi-cent{
    display:flex;
    height: 3.4375rem /* 55/16 */;
    border:1px solid red;
    align-items: center;
    height:3.4375rem ;
  }
  .dizhi-ipt{
    margin-bottom: 0!important;
    text-align: left;
    font-size:15px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(195,195,195,1);
  }
  .dizhi-ziliao{
    width:25%;
    font-size:.9375rem /* 15/16 */;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
  }
  .suozai{
    display: flex;
  }
  .suozai img{
    width:.5625rem /* 9/16 */;
    height: 1rem /* 16/16 */;
    border:1px solid red;
  }
  .xinzhen-head{
    text-align: center;
    font-size:1.0625rem /* 17/16 */;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
  }
  .mint-popup-4{
    width:100%
  }
  .slot2{
    display:none;
  }
</style>
