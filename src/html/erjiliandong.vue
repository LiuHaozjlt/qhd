<template>
  <div>
    <el-cascader
      :options="options"
      v-model="selectedOptions"
      @change="handleChange">
    </el-cascader>

  </div>
</template>
<script>

  export default {

    data () {
      return {

        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'daohang',
            label: '导航'
          }]
        },
          {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic'
          }]
        },
          {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        selectedOptions: []
      }
    },
    mounted() {

    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  }
</script>

<style scoped>

</style>
