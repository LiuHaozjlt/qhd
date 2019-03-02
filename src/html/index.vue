<template>
  <div>mock</div>
</template>

<script>
export default {
  data() {},
  methods: {
    tuijianmesage() {
      var mrdm = this.mock.Random;
    //   console.log(mrdm)
    //   var ig = mrdm.image("200x100");
    //   console.log(ig);
    // for(let i=0;i<5;i++){
        // var ig = mrdm.image("200x100");
    // }
    // console.log(ig)
       var imageList = this.mock.mock("/idx", {
        "image|10": [{ image: () => mrdm.image() }]
    
      });
      console.log(imageList)
    }
  },
  mounted() {
    this.tuijianmesage();
  }
};
</script>

