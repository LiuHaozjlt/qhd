<template>
<div>
    <div class="shouYe-head-cent">
        <input type="text" placeholder="找房子,  找工作, 找二手车" @focus="$emit('focus')" v-model="inputVal">
    </div>
</div>
</template>

<script>
export default {
  props: {
    type: String
  },
  data () {
    return {
      inputVal: this.type
    }
  },
  watch: {
    type (type) {
      this.inputVal = type
    }
  }
}
</script>

<style>
    .shouYe-head-cent input{
        font-size:.8125rem /* 13/16 */;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(102,102,102,1);
        text-align: center;
    }
</style>
