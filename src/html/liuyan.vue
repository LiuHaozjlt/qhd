<template>

  <div>

    <mt-button size="large" @click="popup4">下侧弹出Popup</mt-button >
    <mt-popup
      v-model="popupVisible4"
      position="bottom"
      class="mint-popup-4">
       <div class="header" @click="popupVisible4=false">我是向下图标</div>
       <div class="body">
         <br>
         <br>
         <br>
         我是图片</div>
       <mt-button class="bottom" @click="sendEvent" size="large" type="primary">发送</mt-button>
    </mt-popup>
  </div>

</template>
<script>

  export default {
    name: 'Picker',
    data () {
      return {
        popupVisible4:false

      }
    },
    mounted() {

    },
    methods: {
      sendEvent(){
        this.popupVisible4 = false
      },
      popup4 () {
        this.popupVisible4 = true
      }
    }
  }
</script>

<style scoped>
  .header{
    text-align: center;
  }
  .body{
    text-align: center;
  }
  .mint-popup-4{
    width:100%;
    height:60%;
  }
  .bottom{
    position: fixed;
    bottom: 0;
  }
</style>
