<template>
    <div>
        <div>
            <div class="fabu-head">
                发布
            </div>
            <div class="biaoti-cent">
                <div class="shiwu-bl">
                    *标题
                </div>
                <div class="biaoti-ipt">
                    <input type="text" placeholder="请输入不超过40个字的标题" class="shiwu">
                </div>
            </div>

            <div class="biaoti-cent">
                <div class="shiwu-bl">
                    *描述
                </div>
                <div class="biaoti-ipt">
                    <input type="text" placeholder="您可以对发布的内容进行详细的描述少时" class="shiwu">
                </div>
            </div>
            <div class="biaoti-cent">
                <div class="shiwu-bl">
                     默认第一张为封面图 (<div class="zero">{{addList.length}}</div>/<div class="fivetn">15</div>)
                </div>
                <div class="jia">
                    <div v-for="item of addList" :key="item">
                        <div class="fenm-ico">
                            <img src="" alt="">
                          <div class="fs-ico">x</div>
                        </div>

                    </div>

                    <div class="jia-img"><img src="../../image/xjh.png" alt="" @click="addPic">这是jiahao</div>
                </div>
            </div>
            <div class="di-xuan">
                <div class="shiwu-bl">
                    *地址
                </div>
                <div class="xuanze-di">
                    <div class="shiwu">选择地址</div>
                    <div><img src="" alt=""></div>
                </div>
            </div>
            <div class="weixin">
                <div class="shiwu-bl">
                    微信：
                </div>
                <div class="biaoti-ipt">
                    <input type="text" placeholder="输入你的微信好" class="shiwu">
                </div>
            </div>

            <div class="youxiang">
                <div class="shiwu-bl">
                    邮箱：
                </div>
                <div class="biaoti-ipt">
                    <input type="text" placeholder="输入你的邮箱" class="shiwu">
                </div>
            </div>

            <div class="youxiang wo-fen">
                <div>
                    <div class="wo-swc">
                        <div class="shiwu-bl xufanyi">
                        我需要翻译
                        </div>
                        <div class="biaoti-ipt">
                        <div   class="shiwu">翻译将消耗你5积分</div>
                        </div>
                    </div>

                </div>

                 <mt-switch></mt-switch>
            </div>
            <div class="shisan">*为必填项</div>
             <div class="qued-fab shiwu"   @click="tbox(v)">确定发布</div>

        </div>

    </div>
</template>

<script>

import Vue from 'vue'
import {Switch} from 'mint-ui'
import { Popup } from 'mint-ui'
Vue.component(Switch.name, Switch)
Vue.component(Popup.name, Popup)
export default {
  data () {
    return {
      popupVisible: false,
      addList: []
    }
  },
  methods: {
    addPic () {
      this.addList.push('img')
    },
    tbox () {
      this.popupVisible = true
    },
    hidePop () {
      this.popupVisible = false
    }
  }

}
</script>

<style>

    .fs-ico{
        top: -5px;
        left: 52px;
        width:1.0625rem /* 17/16 */;
        height: 1.0625rem /* 17/16 */;
        border-radius: 50%;
        background-color:red;
        color:white;
        text-align: center;
        line-height: 1.0625rem;
        position: absolute;

    }
     .fenm-ico{
         display:flex;
         position:relative;
     }
    .fenm-ico img{
        width:4.0625rem /* 65/16 */;
        height: 4.0625rem /* 65/16 */;
        border-radius: .5rem /* 8/16 */;
        border:1px solid red;
    }
    .qued-fab{
        margin-top:2.8125rem /* 45/16 */;
        color:white!important;
        background-color: #FFB31E;
        height: 2.25rem /* 36/16 */;
        border-radius: 1.125rem /* 18/16 */;
        text-align: center;
        line-height: 2.25rem /* 36/16 */;
    }
    .shisan{
        font-size:.8125rem /* 13/16 */;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(235,94,94,1);
    }
    .wo-swc{
        display:flex;
    }
    .wo-fen{
        display:flex;
        justify-content: space-between;
    }
    .xufanyi{
        padding-right: 1.5rem /* 24/16 */;
    }
    .youxiang{
        display:flex;
    }
    .weixin{
        display:flex;
        /* height: 2.875rem /* 46/16 */;
        /* line-height: 2.875rem; */

        border:1px solid red;
    }
    .di-xuan{
        border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .xuanze-di{
        display:flex;
        align-items: center;
    }
    .xuanze-di div:nth-child(2) img{
        margin-left: 1rem /* 16/16 */;
        width:.5625rem /* 9/16 */;
        height: 1rem /* 16/16 */;
        border:1px solid red;
    }
    .jia{
        position: relative;

        margin-bottom: 1rem /* 16/16 */;
    }
    .jia-img img{
        width:4.0625rem /* 65/16 */;
        height: 4.0625rem /* 65/16 */;
        border-radius: .5rem /* 8/16 */;
        background-color: #FFF6E2;
        /* line-height: 4.0625rem /* 65/16 */
    }
    .zero,.fivetn{
        display: inline;
    }
    .biaoti-cent{
        background-color: #FFE9BF;
    }
    .biaoti-ipt input{
        height: 0;
        border:0;
        padding-left: 0;
        padding-bottom: 2.3125rem /* 37/16 */;
    }
    .fabu-head{
        height: 2.75rem /* 44/16 */;
        line-height: 2.75rem /* 44/16 */;
        text-align: center;
        font-size:1.0625rem /* 17/16 */;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .shiwu{
        font-size:.9375rem /* 15/16 */;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(195,195,195,1);
    }
      .shiwu-bl{
        padding-top:.9375rem /* 15/16 */;
        font-size:.9375rem /* 15/16 */;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:#333333;
        padding-bottom: 1.9375rem /* 31/16 */;
    }
    .mint-switch-input:checked + .mint-switch-core{
        border:0!important;
    }
    .mint-switch-core{
        border:static;
        background-color: #FFE9BF!important;
    }
    .mint-switch-core::after{
        background-color: #9C9C9C!important;
    }
    /* .mint-switch-core::before{
        background-color: yellow!important;
    } */
</style>
