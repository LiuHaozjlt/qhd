<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link" @click="arrowup()">
      <span class="el-icon-picture"></span>
      <!-- <el-icon-picture></el-icon-picture> -->
      <!-- {{text}} -->
      {{text}}
      <i class="el-icon-arrow-down el-icon--right" v-if="tr"></i>
      <i class="el-icon-arrow-up el-icon--right" v-if="fl"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <!-- <span class="el-icon-picture"></span> -->
      <el-dropdown-item  class="el-icon-picture" command="a" @click.native="ntsix()">{{nt}}</el-dropdown-item>
      <el-dropdown-item class="el-icon-picture" command="b" @click.native="ztwo()">{{z}}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<style>
.el-dropdown-menu__item{
    padding: 0;
}
.el-dropdown-menu li{
  display:block
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-icon-picture{
      position: relative;
    right: -2px;
    /* font-size: 15px; */
    margin-left: -2px;
}
.el-icon--right{
  margin-left:-4px;
}
</style>

<script>

export default {
  data() {
    return {
      z: "+020",
      nt: "+86",
      text: "+86",
      fl: false,
      tr: true
    };
  },
  methods: {
    arrowup() {
      this.fl = true;
      this.tr = false;
    },
    ntsix(nt) {
      // console.log('ok')
      this.text = this.nt;
    },
    ztwo(z) {
      // console.log('ok')
      this.text = this.z;
    }
  }
};
</script>