<template>
     <div class="amap-wrapper">
      <el-amap class="amap-box"  >
       <el-amap-marker :events='events'  ></el-amap-marker>
      </el-amap>
    
    </div>
</template>
<script>
 
 
 

module.exports = {
  data() {
    return {
     events:{
       
        click(){ 
          var mk = VueAMap.AMap()
          console.log(mk)
        } 
     }
    };
  },
  created() {
      
  },
  methods: {
    
  },
  mounted: function() {
    
    // this.aAmapMarker
  }
};
</script>
<style scoped>
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
</style>
