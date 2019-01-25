<template>
     <div class="amap-wrapper">
      <el-amap class="amap-box"         :center="center" :events="events"></el-amap>
    </div>
</template>
<script>
 let amapManager = new VueAMap.AMapManager();
 
export default {
  data() {
    let self = this;
    return {
      center: [121.59996, 31.197646],
        events: {
            init(o) {
              let marker = new AMap.Marker({
                position: [121.59996, 31.197646]
              });

              marker.setMap(o);
            }
          }
  
    };
  },
  methods: {
    
   
  },
  mounted: function() {
   
  }
};
</script>
<style scoped>
.el-vue-amap-container,
.el-vue-amap-container .el-vue-amap {
  height: 100vh;
}
</style>
