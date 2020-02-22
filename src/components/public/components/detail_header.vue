<template>
     <div class="header">
            <img src="@/assets/img/baner@2x.png"/>
            <div class="box box-align-center box-between">
               <div @click='back'>
                    <i class="el-icon-arrow-left"></i>
                    
               </div>
                <div >
                     <i class="el-icon-edit-outline"></i>
                     <i class="el-icon-user"></i>
                </div>
             </div>
             <div class="footer text-center">
                 <span>直播</span>
                 <span>VR全景</span>
                 <span class="is-av">图片</span>
             </div>
             <span>1/90</span>
        </div>
</template>
<script>
    export default {
        methods: {
            back() {
                this.$router.go(-1);
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        color: #fff;
        width: 100%;
        height: 9.533rem;
    }
    
    .header>div {
        padding: 0.58rem;
        box-sizing: border-box;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .header img {
        width: 100%;
        height: 100%;
    }
    
    .header .footer,
    .header>span {
        top: 7.32rem;
        font-size: 0.412rem;
        color: #2C2C3B;
        padding: 0;
    }
    
    .header .footer span,
    .header>span {
        display: inline-block;
        padding: 0.116rem 0.309rem;
        background: #fff;
        line-height: 0.773rem;
        border-radius: 0.386rem;
        margin: 0 0.232rem;
        opacity: 0.84;
    }
    
    .header>span {
        position: absolute;
        right: 0.58rem;
        font-size: 0.412rem;
        background: rgba(0, 0, 0, .6);
        opacity: 0.72;
        color: #fff;
    }
    
    .header .footer .is-av {
        background: #0C66FF;
        color: #fff;
    }
</style>