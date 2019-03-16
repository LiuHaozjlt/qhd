
<template>
  <div class="amap-wrapper ssssssssssssssssssss">
    <el-amap :events="events" class="amap-box aaaaaaaaaaaaaaaaaaa" :center="center" :plugin="plugin" >
      <el-amap-marker></el-amap-marker>
      <!-- <el-amap-text class="ttttttttttttt"></el-amap-text> -->
       <!-- <el-amap-text></el-amap-text>     -->
     </el-amap>
     <div class="weizhi">
       当前的位置是：<div class="dangqiang">{{address}}</div>
     </div>
     <div class="toolbar">
        <span v-if="loaded">
        location: lng = {{ lng }} lat = {{ lat }}
        </span>
        <span v-else>正在定位</span>
    </div>
  </div>
</template>
<script>
// import VueAMap from 'vue-amap'
// import { AMapManager,AmapText } from 'vue-amap'
// let amapManager = new AMapManager();
export default {
  data () {
    let self = this

    return {
      lng: 0,
      lat: 0,
      loaded: false,
      center: [121.59996, 31.197646],
      address: '',
      events: {
        click: (e) => {
          let { lng, lat } = e.lnglat
          self.lng = lng
          self.lat = lat
          // 这里通过高德 SDK 完成。
          self.getGeocoder([lng, lat])
        }
      },
      plugin: [{
        pName: 'Geolocation',
        events: {
          init (o) {
            // o 是高德地图定位插件实例
            o.getCurrentPosition((status, result) => {
              if (result && result.position) {
                self.lng = result.position.lng
                self.lat = result.position.lat
                self.center = [self.lng, self.lat]
                self.loaded = true
                self.$nextTick()
              }
            })
          }
        }
      }]
    }
    // draggable: true,
    // center: [112.93886, 28.22778],
    // markerPos: [112.93886, 28.22778],
    // lastMarkerPos: [112.93886, 28.22778],
    // texts: [
    //   {
    //     offset: [0, 0],
    //     center: [112.93886, 28.22778],
    //     position: [112.93886, 28.22778],
    //     text: "hello world",
    //     events: {
    //       fn:()=>{
    //         console.log('ok')
    //       },
    // click: () => {
    //   alert("click text");
    // },
    // dragend: e => {
    //   console.log("---event---: dragend");
    //   this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
    // }
  },
  created () {},
  methods: {
    getGeocoder (val) {
      let self = this
      AMap.service('AMap.Geocoder', function () {
        var geocoder = new AMap.Geocoder({
          radius: 1000,
          extensions: 'all',
          city: '010'
        })
        geocoder.getAddress(val, function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
            console.log(result)
            self.address = result.regeocode.formattedAddress
          }
        })
      })
    }
  },
  mounted: function () {
    // this.fn()
    // console.log("mounted");
  }
}
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
.biaozhu {
  width: 143px;
  height: 20px;
  border: 2px solid red;
  position: absolute;
  top: 4px;
  left: 29px;
}
</style>
