<template>
    <section>
        

    <div class="box list-item">
        <div class="img">
            <img src="@/assets/img//baner.png" alt="">
            <img src="@/assets/img/play@2x.png" alt="" class="play">
        </div>
        <div>
            <div class="box box-between title">
                <p>其仕和悦</p>
                <p>16000元/m² <span>均</span></p>
            </div>
            <div class="text-left star">
                <span>4.6</span>
                <img src="@/assets/img/star.png" alt="">
                 <img src="@/assets/img/star.png" alt="">
                  <img src="@/assets/img/star.png" alt="">
                   <img src="@/assets/img/star.png" alt="">
                    <img src="@/assets/img/star.png" alt="">
            </div>
            <p class="text-left">沈河区方家栏路/建面 102~142㎡</p>
            <div class="text-left house-sign">
                <span class="span-red">必看好房</span>
                <span class='span-blue'>在售</span>
                <span>品牌房企</span>
                <span>成熟商圈</span>
                <span>双地铁</span>
            </div>
            
        </div>
        
    </div>
    <footer class="footer box box-align-center">
        <div class=" box box-align-center">
             <img src="@/assets/img/sign@2x.png" alt="">
        </div>
       <span>楼盘亮点|楼盘亮点</span>
        
    </footer>
        </section>
</template>
<script>
    export default {}
</script>
<style scoped>
    p {
        margin: 0;
    }
    
    section {
        font-size: 0.438rem;
        font-family: PingFangSC-Medium, PingFang SC;
        padding-bottom: 0.824rem;
        border-bottom: 1px solid #F2F2F5;
        margin-top: 0.824rem;
    }
    
    .img {
        width: 4.64rem;
        height: 3.478rem;
        position: relative;
    }
    
    .img img {
        width: 100%;
        height: 100%;
    }
    
    .img .play {
        position: absolute;
        left: 0.258rem;
        bottom: 0.232rem;
        width: 0.773rem;
        height: 0.77rem;
    }
    
    .img+div {
        width: 9.584rem;
        margin-left: 0.618rem;
    }
    
    .title {
        font-size: 0.618rem;
    }
    
    .title p:last-child {
        font-size: 0.567rem;
        color: #ED5248;
        font-weight: 500;
    }
    
    .title p:last-child span {
        display: inline-block;
        border: 1px disabled #CCCCD1;
        color: #CCCCD1;
        font-size: 0.464rem;
    }
    
    .star {
        margin: 0.348rem 0;
    }
    
    .star img {
        width: 0.36rem;
        height: 0.36rem;
    }
    
    .star span {
        margin-right: 0.309rem;
    }
    
    .star+p {
        margin-bottom: 0.206rem;
    }
    
    .star+p,
    .housee-sign {
        line-height: 0.618rem;
    }
    
    .house-sign span {
        display: inline-block;
        /*font-size: 0.438rem;*/
        background: #F2F2F5;
        color: #9E9EA6;
        padding: 0 0.154rem
    }
    
    .house-sign .span-red {
        background: #ED5248;
        color: #fff;
    }
    
    .house-sign .span-blue {
        color: #fff;
        background: #00A3FF
    }
    
    footer {
        margin: 0.747rem 0.206rem 0.129rem;
    }
    
    footer div {
        width: 0.515rem;
        height: 0.515rem;
        border-radius: 50%;
        background: #ED5248;
        margin-right: 0.206rem
    }
    
    footer div img {
        width: 0.36rem;
        height: 0.36rem;
        margin: 0 auto;
    }
    
    footer>span {
        background: rgba(255, 197, 34, 0.07);
    }
</style>