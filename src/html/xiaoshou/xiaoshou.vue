<template>
<div style="width:100%">
<h2>销售主页</h2>
<textarea style="width:20px;height:200px;font-size:20px">
   s
   s
   s
   s
   s
   s
   s
</textarea>


<router-link    :to="{path:'tab'}">
<button>销售</button>
</router-link>

<button @click="contain()">销售列表</button>  
<!-- <button @click="$store.commit('showLoading')">显示加载框</button> -->
<!-- <button @click="$store.commit('hideLoading')">隐藏加载框</button> -->
<!-- 因为加载时，一般是阻止用户与页面交互的，所以有个浮层遮住页面了，正常的。loading框应该额自动消失 -->
<router-view>
</router-view>


<!-- <tab/>
<tab_b/>
<tab_c/> -->
</div>


</template>

<script>
import lay from "layui-layer";
// import tab from '../html/xiaoshou/xiaoshou_comp/tab'
// import tab_b from '../html/xiaoshou/xiaoshou_comp/tab_b'
// import tab_c from '../html/xiaoshou/xiaoshou_comp/tab_c'
export default {
  methods: {
    contain() {
      // lay.load(1, {
      //   shade: [0.1, "#fff"] //0.1透明度的白色背景    这里 我已经写了 个方法  但是第二个效果的方法不知道怎么写
      // });
     layer.prompt( 
                );

    }
  }
  //  components: {
  //      tab:tab,
  //      tab_b:tab_b,
  //      tab_c:tab_c,
  //   },
};
</script>

