<template>
<div>
<router-link      :to="{path:'tab_b'}">
<button  >tab</button>
</router-link>

<tab_publc/>


</div>
</template>
<script>
// import tab_publc from '../html/xiaoshou_public/tab_publc.vue'
import tab_publc from '../html/../../xiaoshou_public/tab_publc'
export default {
  data() {
    return {};
  },

  components: {
    tab_publc: tab_publc
  },

  // component('tab_publc', {})

  // component:{
  //   tab_publc
  // },
  created() {},
  methods: {},
  mounted() {}
};
</script>
