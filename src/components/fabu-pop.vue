<template>
       <mt-popup style="border:2px solid red"
                v-model="popFlag"
                position='bottom'
                popup-transition="popup-fade">
                <!-- <span @click="hidePop"> -->
            <div class="popBottom">
                <slot></slot>
                <p @click="cancel">取消</p>
            </div>

                     <!-- </span> -->
            </mt-popup>

</template>

<script>
export default {
  props: ['popupVisible'],
  data () {
    return {
      popFlag: false
    }
  },
  watch: {
    popFlag (val) {
      if (val !== this.popupVisible) {
        this.$emit('closepop', val)
      }
    },
    popupVisible (val) {
      if (val !== this.popFlag) {
        this.popFlag = val
      }
    }
  },
  methods: {
    cancel () {
      this.$emit('closepop', false)
    }
  }
}
</script>
