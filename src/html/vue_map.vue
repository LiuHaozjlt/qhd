
<template>
  <div class="amap-wrapper">
    <el-amap  class="amap-box" :center='  center'   >

    <el-amap-marker :position="markerPos"     :events="events"    :draggable="draggable" > </el-amap-marker>
      <el-amap-text
      v-for="(text,index) in texts"
      :offset='text.offset'
      :text="text.text"
      :position="text.position"
      :events='text.events'
      :key="index"
      ></el-amap-text>

     </el-amap>

  </div>
</template>
<script>
// import { AMapManager } from 'vue-amap'
// let amapManager = new AMapManager();
export default {
  data() {
    return {
      events: {
        click: () => {
          alert("click text");
        },
        dragstart: e => {
          this.lastMarkerPos = [e.lnglat.lng, e.lnglat.lat]
        },
        dragging: e => {
          var diffLng = e.lnglat.lng - this.lastMarkerPos[0]
          var diffLat = e.lnglat.lat - this.lastMarkerPos[1]
          this.texts.forEach(text => {
            text.position = [text.position[0] + diffLng, text.position[1] + diffLat]
          })
          this.lastMarkerPos = [e.lnglat.lng, e.lnglat.lat]
        }
      },
      draggable: true,

      center: [112.93886, 28.22778],
      markerPos: [112.93886, 28.22778],
      lastMarkerPos: [112.93886, 28.22778],

      texts: [
        {
          offset: [0, 0],

          center: [112.93886, 28.22778],
          position: [112.93886, 28.22778],
          text: "hello world",

          events: {
            fn:()=>{
              console.log('ok')
            },
            // click: () => {
            //   alert("click text");
            // },
            // dragend: e => {
            //   console.log("---event---: dragend");
            //   this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
            // }
          }
        }
      ]
    };
  },
  created() {},

  methods: {},
  mounted: function() {
    // this.fn()
    // console.log("mounted");
  }
};
</script>
<style>
.amap-box {
  height: 30px;
}
.a {
  width: 20px;
  height: 20px;
  background: red;
  position: absolute;
  bottom: 75px;
  text-align: center;
}
.b {
  margin-left: 45px;
}
.el-vue-amap-container,
.el-vue-amap-container .el-vue-amap {
  height: 100vh;
}
.curre_site {
  width: 140px;
  height: 20px;
  font-size: 14px;
  position: absolute;
  bottom: 200px;
}
</style>

<style type="text/css">
.biaozhu {
  width: 143px;
  height: 20px;
  border: 2px solid red;
  position: absolute;
  top: 4px;
  left: 29px;
}
</style>





