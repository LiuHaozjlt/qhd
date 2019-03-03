<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
       <img :src="selected.icon" alt="">
      <!-- <el-icon-picture></el-icon-picture> -->
      <!-- {{text}} -->
     
        +
         <div class="shuzi"  >
 {{selected.text}}
      </div>
     
      <i class="el-icon--right" v-if="tr">
        <img src="../image/jtt.png" alt="">
      </i>
      <i class="el-icon--right" v-if="fl"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <!-- <span class="el-icon-picture"></span> -->
      <el-dropdown-item v-for="item in list" :key="item.text"  class="" command="a" @click.native="select(item)">
        <img :src="item.icon" alt="">
         <span>+{{ item.text }}</span>
        </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<style>
.el-dropdown {
  width: 54%;
  left: .9375rem;
}
.el-dropdown img {
  vertical-align: middle;
  display: inline-block;
  width: 1.3125rem;
  height: 0.875rem;
}
.shuzi {
  width: 28%;

  /* width:.01375rem; */
  display: inline-block;
}
.el-dropdown-menu__item {
  padding: 0;
}
.el-dropdown-menu li {
  /* display: block; */
  display: flex;
    justify-content:baseline;
    align-items: center;
}
.el-dropdown-menu__item img {
  width: 2.15625rem;
  height: 1.40625rem;
  display: inline-block;
}
.el-dropdown-menu__item span {
  font-size: 1.5625rem;
  color: #999999;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-icon-picture {
  position: relative;
  right: -2px;
  /* font-size: 15px; */
  margin-left: -2px;
}
.el-icon--right {
  margin-left: -4px;
}
.el-icon--right img {
  width: 0.5rem;
  height: 0.25rem;
  display: inline-block;
}
</style>

<script>
import IMG86 from "../image/zgg.png"
import IMG020 from "../image/lww.png"

export default {
  data() {
    return {
      fl: false,
      tr: true,
      list: [
        { icon: IMG86, text: "86" },
        { icon: IMG020, text: "020" },
      ],
      selected: null
    };
  },
  methods: {
    // arrowup() {
    //   // this.fl = true;
    //   // this.tr = false;
    // },
    select(item) {
      this.selected = item;
    },
  },
  created() {
    this.selected = this.list[0]
  }
};
</script>