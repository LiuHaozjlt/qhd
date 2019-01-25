<template>
    <div>
        <div class="container">
           加入企业  
        </div>   
    </div>
</template>

<script>
import s from "./jiaruqiye";
import { mapState } from "vuex";
for (const key in mapState) {
  console.log(key);
}
export default {
  data() {
    return {};
  }
  // computed:{
  //     ...mapState(['daojisiCount0'])
  // }
};
</script>

<style>
.container {
  text-align: center;
}
</style>
