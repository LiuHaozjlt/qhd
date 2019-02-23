<template>
    <div class="filter" v-if="isShow">
        <div class="filter-rel">
            <div class="loading-wrap">
                <div class="loading-circle"></div>
                <div class="loading-text">
                    正在加载
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        computed: {
            isShow(){
                return this.$store.getters.showLoading;
            }
        }
    }
</script>

<style scoped>
    .filter, .filter-rel {
        width: 100%;
        height: 100%;
    }
    .filter {
        position: absolute;
        top: 0;
        left: 0;
        background: none;
    }
    .filter-rel {
        position: relative;
    }
    .loading-wrap, .loading-rel {
        width: 160px;
        height: 160px;
    }
    .loading-wrap {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto auto;
        background: rgba(0,0,0,0.4);
        border-radius: 25px;
    }
    .loading-rel {
        position: relative;
    }
    .loading-circle {
        position: absolute;
        top: 40px;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 40px;
        height: 40px;
        background: url(./image/loading-1.gif);
        background-size: contain;
    }
    .loading-text {
        position: absolute;
        bottom: 10px;
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 20px;
        color: #fff;
        text-align: center;
    }
</style>