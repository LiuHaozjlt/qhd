<template>
    <div>
        <div class="container">
           加入企业 {{daojisiCount0}}
            
        </div>   
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
 
        }
    },
    computed:{
        ...mapState(['daojisiCount0'])
    }
}
</script>

<style>
    .container  {
        text-align: center;
    }
</style>
