<template>
    <div>
        Hello
        <div class="liji_img"  v-for="(i, index) in Text" :key='index'>
            <div class="liji">
                <div>
                    <img src="" alt="" >
                    <router-link :to="i.path"  >
                    {{i.text1}}
                    </router-link>          
                </div>   
                <div>{{i.text2}}</div>
            </div>
            <img src="" alt="">
        </div>
    </div>   
</template>
<script>
//// 这个文件
export default {
    data(){
        return {
            Text:[
                     {text1:'立即登陆', text2:'已有账号可立即登录并使用', path:'/dlu'},
                     {text1:'加入企业', text2:'已收到邀请码？请加入已有企业', path:'/jrqy'},
                     {text1:'创建企业', text2:' 免费创建新企业',path:'/cjqy'}
                ]                
        }      
    },
    methods:{
        // tiaozhuan:function(){

        // }
    }
}
</script>
 

