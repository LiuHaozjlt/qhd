  <template>
  <div>
  <div class="tab">
  <div class="tab_nav"    v-for="(item,index ) in nav" :key="index"  @click="div_chan(index)">            
  {{item.text}}            
  </div>       
  </div>   
  <div class="box1" v-if="num === 0">1</div>
  <div class="box2" v-if="num === 1">2</div>
  <div class="box3" v-if="num === 2">3</div>
  </div>
  </template>
  <script>
export default {
  data() {
    return {
      num: 0,
      nav: [{ text: "水果" }, { text: "篮球" }, { text: "汽车" }]
    };
  },
  methods: {
    div_chan(val) {
      console.log(val);
      this.num = val;
    }
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
.box1 {
  z-index: 1;
}
.box2 {
  z-index: 2;
}
.box3 {
  z-index: 3;
}
@media screen and (max-width: 700px) {
  .tab_nav {
    border: 2px solid black;
  }
}
</style>


