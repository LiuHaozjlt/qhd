<template>
<div>
    <div class="header">
        <span @click='actions'>标签</span>
        {{pageName}}
    </div>
</div>
</template>

<script>
export default {
  name: 'headerPage',
  props: {
    pageName: {
      type: String,
      default: ''
    }
  },
  methods: {
    actions () {
      this.$emit('goWherer')
    }
  }
}
</script>

<style>

</style>
