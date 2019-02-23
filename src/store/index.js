import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import mock from 'mockjs'
import axios from 'axios'

export default new Vuex.Store({
    state: {
      showLoading: false
    },
    getters: {
      showLoading(state){
        return state.showLoading;
      }
    },
    mutations: {
      showLoading(state){
        state.showLoading = true;
        setTimeout(()=>state.showLoading=false, 3000); // 3秒后自动调用隐藏loading的方法 ok 任何页面，使用this.$store.commit('showLoading')来呼出loading， hideLoading同理。 ok 
      },
      hideLoading(state){
        state.showLoading = false;
      }
    },
    actions: {
        getData() {
            var mrdm = mock.Random;
            var data = mock.mock("/da", {
              "name|3": [{ cname: () => mrdm.cname() }]
            });
            return axios
              .get("/da")
              .then(data => {
                let dt = data.data.name;
                return dt;
              })
              .catch(e => {
                console.log("rp");
              });
        }
    }
})