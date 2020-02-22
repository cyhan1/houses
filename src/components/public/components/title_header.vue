<template>
    <section class="box box-align-center box-between">
        <i class="el-icon-arrow-left" @click='back' v-if='isBack'></i>
        <p>{{title}}</p>
  
    <i class="el-icon-user"></i>
  <!--<i class="el-icon-location-outline"></i>-->

    </section>
    
  
    
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                defalut: '标题',
                required: true

            },
            isBack: {
                type: Boolean,
                default: true,
                //  required: true
            }
        },
        data() {
            return {

            }
        },
        methods: {
            back() {
                this.$router.go(-1);
            }
        }

    }
</script>
<style scoped>
    section {
        height: 1.91rem;
        padding: 0 0.58rem;
        border-bottom: 0.0386rem solid #F2F2F5
    }
    
    p {
        font-size: 0.618rem;
        color: #202020;
        font-weight: bold;
    }
</style>