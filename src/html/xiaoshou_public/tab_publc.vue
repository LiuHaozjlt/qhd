<template>
<div>
<div class="tab">
<div class="tab_nav" v-for="(item,index) in nav" :key="index"  @click="change_div(index)">            
{{item.cname}}            
</div>       
</div>   
<div class="box1"    v-if='0==idx' >1</div>
<div class="box2"      v-if='1==idx'  >2</div>
<div class="box3"     v-if='2==idx'  >3</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      fl: false,
      tr: true,
      nav: "",
      idx: ""
    };
  },
  created() {},
  methods: {
    change_div(s) {
      this.idx = s;
    },
    async gt() {
      let data = await this.$store.dispatch("getData");
      
        this.nav =  $watch().data;
      
      
    }
  },
  mounted() {
    this.gt();
  }
};
</script>
<style>
.tab {
  display: flex;
}
.tab_nav {
  flex: 3;
  padding: 0;
  line-height: 16px;
  border: 1px solid red;
  text-align: center;
}
.box1,
.box2,
.box3 {
  width: 100%;
  background: red;
  height: 300px;
  line-height: 300px;
  text-align: center;
  position: absolute;
}
.rig_conta {
  width: 10px;
  height: 500px;
  border: 2px solid black;
  position: fixed;
  right: 0;
  z-index: 9999;
}
@media screen and (max-width: 700px) {
  .tab_nav {
    border: 2px solid black;
  }
}
</style>




