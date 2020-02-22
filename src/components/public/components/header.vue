<template>
     <section class="box1 box box-align-center box-between text-center ">
            <div class="box2 box box-align-center">
                  <img src="@/assets/img/logo@2x.png" alt="logo">
                <div class="text-left">
                    <p >使用某某APP</p>
                    <p>即享个性化直播房源推荐</p>
                </div>
            </div>
           
            <div>
                下载APP
            </div>
        </section>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .box1 {
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 8px 12px 8px rgba(12, 102, 255, 0.04);
        border-radius: 0.39rem;
        padding: 0.618rem;
    }
    
    .box2 .text-left {
        margin-left: 0.618rem;
        /*height: 1.932rem;*/
    }
    
    .box1 img {
        width: 1.932rem;
        height: 1.932rem;
    }
    
    .box2 .text-left p {
        padding: 0;
        margin: 0;
    }
    
    .box2 .text-left p:first-child {
        color: #2C2C3B;
        font-size: 0.618rem;
        line-height: 0.863rem;
    }
    
    .box2 .text-left p:last-child {
        margin-top: 0.103rem;
        line-height: 0.644rem;
    }
    
    .box2+div {
        width: 3.272rem;
        height: 1.24rem;
        background: #0C66FF;
        line-height: 1.24rem;
        color: #FFF;
        font-size: 0.567rem;
    }
</style>