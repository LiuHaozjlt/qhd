<template>
<div>
<input type="text" v-model="inpt_val" @input="clik_val">
<div class="list">
<span v-if='fl'>{{ename_}}</span>

</div>
<!-- <div class="rig_conta">少时诵诗书所所所所所所所所所所所所所所所所所所所所所所所所所所所</div> -->
</div>

</template>
<script>
export default {
  data() {
    return {
      fl: false,
      inpt_val: "",
      val: "",
      ename_: "",
      enam_: "",
      ena_: "",
      en_: ""
    };
  },
  methods: {
    clik_val() {
      if (this.inpt_val) {
        this.fl = true;
      } else {
        this.fl = false;
        console.log(this.fl);
      }
    },
    value() {
      var mrdm = this.mock.Random;
      var data = this.mock.mock("/da", {
        "name|10": [{ cname: () => mrdm.cname() }]
      });
      var self = this;
      var s = self.axius
        .get("/da")
        .then(function(data) {
          let dt = data.data.name;

          dt.forEach(element => {
            var ename = element.cname;
            self.ename_ = ename;
          });
        })
        .catch(function() {
          console.log("rp");
        });
    }
  },
  mounted() {
    this.value();
  }
};
</script>

<style scoped>
.list {
  width: 100px;
  height: 500px;
  border: 2px solid red;
}
.list span {
  display: block;
}
input {
  width: 200px;
  height: 20px;
  border: 2px solid red;
}
.rig_conta {
  width: 10px;
  height: 500px;
  border: 2px solid black;
  position: fixed;
  right: 0;
  z-index: 9999;
}
</style>


