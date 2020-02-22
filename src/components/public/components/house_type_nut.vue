<template>
    <div class="house-type">
        <img src="@/assets/img/house-type.jpeg" alt="">
        <div class="box box-start" style='margin: 0.309rem 0 0 0'>
            <div>3室2厅2卫</div>
            <div class="sign"><span class="active">在售</span><span>环绕江景</span></div>
        </div>
        <div style="font-size: 0.464rem;color:#878791">
            <p style="margin: 0.206rem 0">建面:<span style="color:#2C2C3B">142㎡&nbsp;朝向西南</span></p>
            <p>参考价格:<span style="color:#ED5248">3366万</span></p>
        </div>       
        
    </div>
    
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .house-type {
        width: 6.493rem;
        margin-top: 0.618rem;
        /*margin: 0.618rem;*/
    }
    
    .house-type img {
        width: 6.493rem;
        height: 4.638rem;
    }
    
    .box-start P:first-child {
        color: #2C2C3B
    }
    
    .box-start span {
        font-size: 0.438rem;
        display: inline-block;
        color: #9E9EA6;
        background: #F2F2F5;
        padding: 0.052rem 0.154rem;
    }
    
    .box-start .active {
        background: rgba(12, 102, 255, 0.23);
        color: #0C66FF;
    }
</style>