<template>
    <div>
        <div class="shoucang-head">
            {{}}
            <div class="shoucang-head-quxiao" @click="goJuBao">取消</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {}
    },
    methods:{
        goJuBao(){
            this.$router.push({
                path:'/jubao'
            })
        }
    }
}
</script>
