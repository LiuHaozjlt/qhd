
<template>
  <div class="amap-wrapper">
    <el-amap  class="amap-box">
      <el-amap-marker></el-amap-marker>
     </el-amap> 
  </div>
</template>
<script>
 
// import { AMapManager } from 'vue-amap'
// let amapManager = new AMapManager();
export default {
  data() {
    return {
     
    };
  },
  created() {},
  methods: {
    fn() {
      // var amp =  VueAMap.AmapText;
      // console.log(amp)
    }
  },
  mounted: function() {
    // this.fn()
    console.log('mounted');
  }
};
</script>
<style>
.amap-box{
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
	.biaozhu{
		width: 143px;height: 20px;border: 2px solid red;position: absolute;top: 4px;left: 29px;
	}
</style>

 

 