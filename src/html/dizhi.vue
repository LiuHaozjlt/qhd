<template>

<div>

  <mt-button size="large" @click="popup4">下侧弹出Popup</mt-button >
  <mt-popup
    v-model="popupVisible4"
    position="bottom"
    class="mint-popup-4">
    <mt-picker :slots="addressSlots" @change="onAddressChange"
               :visible-item-count="5"></mt-picker>
  </mt-popup>
</div>

</template>
<script>
 import address from './areajson.js'
 let slot1Values = address.map(p=>p.label)
 let slot2Values = address[0].children.map(p=>p.label)
 export default {
    name: 'Picker',
    data () {
      return {
        popupVisible4:false,
        addressSlots: [
          {
            flex: 1,
            values: slot1Values,
            className: 'slot1',
            textAlign: 'center'
          },
          {
            divider: true,
            content: '-',
            className: 'slot2'
          },
          {
            flex: 1,
            values: slot2Values,
            className: 'slot3',
            textAlign: 'center'
          }
          ,
          {
            divider: true,
            content: '-',
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
    mounted() {

    },
    methods: {
      popup4 () {
        this.popupVisible4 = true;
      },
      onAddressChange(picker, values) {
        console.log(values)
        let thirdChildren=null
        let secondObj= address.find(p=>p.label==values[0])
        let secondValue= secondObj.children.map(p=>{
          if(p.label == values[1]){
            thirdChildren=p.children
          }
          return p.label
        })
        if(thirdChildren){
          thirdChildren=thirdChildren.map(p=>p.label)
        }else{
          thirdChildren=[]
        }
        picker.setSlotValues(1, secondValue)
        picker.setSlotValues(2, thirdChildren)
      }
    }
  }
</script>

<style scoped>
  .mint-popup-4{
    width:100%
  }
</style>
