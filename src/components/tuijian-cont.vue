<template>
    <div>
     <!-- {{indexdata}} -->
     <template  v-for="(item, index) in indexdata">
        <div class="shouYe-cent" :key="index" v-if="showNum == 0  || (showNum > index)">
            <div class="shouYe-cent-left">
                <div>
                    <img :src="item.img">
                </div>
            </div>
            <div class="shouYe-cent-rigt">
                <div class="rigt-wenzi shouYe-rigt-top">{{item.content}}</div>
                <div class="rigt-wenzi wanxiang" style="text-align:right">{{item.from}}</div>
                <div class="shouYe-rigt-bot">
                    <div
                    class="rigt-wenzi"
                    style="display:inline;width: 2.6875rem /* 43/16 */;background-color:#FFC74D;text-align:center"
                    >{{item.type}}</div>
                    <div class="rigt-wenzi" style="display:inline">
                        <img :src="item.imgi" alt>
                        {{item.num}}
                    </div>
                    <div class="rigt-wenzi" style="display:inline" :class="[typeId==1?'red':'']">{{item.datetime}}</div>
                </div>
            </div>
        </div>
          </template>
    </div>
</template>

<script>
import { mapGetters} from 'vuex'
export default {
  data () {
    return {
      // indexdata:[]
    }
  },
  props: {
    typeId: {
      type: Number,
      default: 0
    },
    showNum: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapGetters({
      'indexdata': 'indexData'
    }

    )

  },
  methods: {
    init () {
      let self = this
      var data = this.mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|10': [
          {
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            'content|6': ' 办理',
            'type|1': '租房',
            'from|1': '万象',
            img: this.mock.Random.image('110x72', '#000000', 'png'),
            imgi: this.mock.Random.image('16x11', 'yellow', 'png'),
            'num|1-1000': 1,
            // 'datetime': '@datetime("yyyy-MM-dd A HH:mm:ss")'
            datetime: '@datetime("yyyy-MM-dd")'
          }
        ]
      })
      // // 输出结果
      // // console.log(data)
      this.mock.mock('/test', data)
      this.axius.get('/test').then(p => {
        // console.log(p)

        self.$store.commit('saveIndexData', p.data.list)
      })
    }
  },
  // mounted(){

  //     this.indexdata = this.$store.state.getters.indexdata
  // }
  mounted () {
    let dis = this.$store.dispatch('getData')
    if (this.indexdata.length == 0) {
      this.init()
    }
    // this.indexdata = this.$store.dispatch('indexdata')
  }
}
</script>
<style>
    .red{
        color: red;
    }
</style>
