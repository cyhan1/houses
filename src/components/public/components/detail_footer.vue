<template>
<div class="container-footer text-center box box-align-center">
            <div>
               <i class="el-icon-s-finance"></i>分享
            </div>
            <div>
                <p>线上看房</p>
                <p style="font-size: 0.412rem">直播看房更方便</p>
            </div>
            <div>
                <p>
致电售楼处 </p>
                <p style="font-size: 0.412rem">
保护你的真实号码</p>
            </div>
        </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .container-footer {
        /*display: -ms-grid;
        display: grid;
        grid-template-columns: 1fr 2fr 2fr;*/
        height: 1.907rem;
        width: 100%;
        /*transform: translateY( -0.824rem);*/
        position: fixed;
        bottom: 0;
        left: 0;
        font-size: 0.618rem;
    }
    
    .container-footer div:nth-child(1) {
        background: #fff;
        width: 20%;
        height: 100%;
        line-height: 1.907rem;
    }
    
    .container-footer div:nth-child(2) {
        background: #36BF86;
        font-size: 0.567rem;
        color: #fff;
        width: 40%;
        height: 100%;
        padding: 0.25rem 0;
        box-sizing: border-box;
    }
    
    .container-footer div:nth-child(3) {
        background: #0C66FF;
        font-size: 0.567rem;
        color: #fff;
        width: 40%;
        height: 100%;
        padding: 0.25rem 0;
        box-sizing: border-box;
    }
</style>