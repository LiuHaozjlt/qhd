<template>
    <div>
         <div  @click="change(item.id)" class="wode-zhid" v-for="(item,index) in five" :key="index">
            <div>1天</div>
            <div>{{item.score}}积分</div>
             <div class="zhid-yuan" >
                <div class="zhid-yuan-in" v-if="item.id !== checkId"></div>
                <img src="../../image/a.png" alt=""  v-else>
            </div>
        </div>
        <tujian :typeId="type" :showNum='showNum'></tujian>
    </div>
</template>

<script>
import tujian from '../../components/tuijian-cont'
export default {
  data () {
    return {
      type: 1,
      showNum: 2,
      five: [
        {
          score: 10,
          id: 1
        },
        {
          score: 20,
          id: 2
        }, {
          score: 30,
          id: 3
        }
      ],
      checkId: 0,
      yuan: true,
      circ: false
    }
  },
  methods: {
    yuanin () {
      this.yuan = false
      this.circ = true
    },
    circl () {
      this.circ = false
      this.yuan = true
    },
    change (id) {
      this.checkId = id
    }

  },
  components: {
    tujian
  }
}
</script>

<style>
    .zhid-yuan-in{

        border-radius: 50%;
        border:1px solid red;
        width:1.5rem /* 24/16 */;
        height: 1.5rem /* 24/16 */;
    }
    .zhid-yuan{

    }
    .zhid-yuan img{

       width:1.5rem /* 24/16 */;
       height: 1.5rem /* 24/16 */;
    }
    .wode-zhid{
        justify-content: space-between;

        display:flex;
        border:1px solid red;
        height:1.5rem /* 24/16 */;
        margin-bottom: 1rem;
    }
</style>
