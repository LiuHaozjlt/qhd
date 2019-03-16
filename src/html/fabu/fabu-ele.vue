<template>
    <div>
        发布首页
        {{indexData}}
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    computed:{
        ...mapGetters(['indexData'])
    },
}
</script>

