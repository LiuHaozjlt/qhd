<template>
<div>
<router-link      :to="{path:'tab_c'}">
<button >tab_b</button>
</router-link>
<tab_publc/>
</div>
</template>

<script>
// import tab_publc from '../html/xiaoshou_public/tab_publc.vue'
import tab_publc from "../html/../../xiaoshou_public/tab_publc";
export default {
  components: {
    tab_publc: tab_publc
  }
};
</script>

