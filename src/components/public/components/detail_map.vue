<template>
<section class="container">
           <!--<div  style="font-weight: 600">
                    <p>位置以及周边配套</p>
            </div>-->
            <h-title :isShow="false" :title='"位置以及周边配套"' :isBold="true"></h-title>
             <p style='color:#2C2C3B;margin: 0.618rem 0;'><span style='color: #878791 '>地址：</span>沈河区方家栏路（方家栏公园旁）</p>

             <h-sign></h-sign>
             <div class="map" >
                 这里放地图
             </div>
             <div>
                 <p style="color:#2C2C3B;font-size:0.515rem;margin:0.438rem 0">上步工业区 
                     <span style="font-size:0.412rem;color:#9E9EA6">(m371路; m558路)</span>
                    </p>
                     <p style="color:#2C2C3B;font-size:0.515rem;margin:0.438rem 0">上步工业区 
                     <span style="font-size:0.412rem;color:#9E9EA6">(m371路; m558路)</span>
                    </p>
                     <p style="color:#2C2C3B;font-size:0.515rem;margin:0.438rem 0">上步工业区 
                     <span style="font-size:0.412rem;color:#9E9EA6">(m371路; m558路)</span>
                    </p>
             </div>
             
        </section>
            
        
</template>
<script>
    import MyOptionTitle from '@/components/public/components/option_title';
    import MySignNav from '@/components/public/components/sign_nav';
    export default {
        components: {
            'h-title': MyOptionTitle,
            'h-sign': MySignNav
        }
    }
</script>
<style scoped>
    @import url(../../../assets/css/detail-container.css);
    .map {
        width: 100%;
        height: 6.99rem;
        margin: 0.618rem 0;
        border: 1px solid red;
    }
</style>