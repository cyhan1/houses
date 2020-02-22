<template>
    <section>
            <img src="@/assets/img/baner@2x.png" alt="">
            <div class="msg">
                <p class="title">其仕和悦四期 <span>16000元/m²</span></p>
                <div class="box box-align-center">
                    <p class="box-flex">建面: 102~142㎡</p>
                    <p  class="box-flex">户型: 3/4居</p>
                </div>
                <p class="map"><i class="el-icon-location"></i><span>沈河区方家栏路</span></p>
            </div>
    </section>
</template>
<script>
    export default {}
</script>
<style scoped>
    section {
        width: 8.076rem;
        display: inline-block;
        margin: 0.463rem 0;
        margin-right: 0.824rem;
    }
    
    img {
        width: 100%;
        height: 6.184rem;
        border-radius: 0.463rem;
    }
    
    .msg {
        padding: 0 0.412rem;
    }
    
    .title,
    .box,
    .map {
        margin: 0.155rem 0;
    }
    
    .title {
        font-size: 0.618rem;
    }
    
    .title span {
        font-size: 0.567rem;
        color: #ED5248;
    }
    
    .box-flex {
        font-size: 0.463rem;
    }
    
    .map {
        font-size: 0.438rem;
        color: #9E9EA6;
    }
</style>