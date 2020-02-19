<template>
    <section>
        <h-header></h-header>
        <div class="container">
            <div class="box box-align-center box-between">
                <div class="text-left title">
                    <p>其仕和悦</p> 
                    <p>低密度住宅底商</p>
                </div>
                <div class="box">
                    <div class="btn ">
                        <div class="text-center">
                            <img src="@/assets/img/star-not@2x.png" alt="">
                        </div>
                        
                        <p>关注</p>
                    </div>
                    <div class="btn">
                        <div class="text-center">
                            <img src="@/assets/img/star-not@2x.png" alt="">
                        </div>
                        <p>房贷</p>
                    </div>
                </div>
               
            </div>
            <div class="sign text-left">
                <span class="active">在售 </span>
                <span>品牌房企</span>
                <span>成熟商圈</span>
                <span>双地铁</span>
            </div>
        </div>
    </section>
        
 
</template>
<script>
    import MyHeader from '@/components/public/components/detail_header';
    export default {
        components: {
            "h-header": MyHeader
        }

    }
</script>
<style scoped>
    section {
        box-sizing: border-box;
        width: 100%;
        background: #F2F2F5;
        font-size: 0.618rem;
    }
    
    .container {
        margin: 0 0.58rem;
        height: 15.768rem;
        background: #FFF;
        box-shadow: 0px 8px 12px 8px rgba(12, 102, 255, 0.02);
        border-radius: 0.309rem;
        transform: translateY(-0.824rem);
        border: 1px solid red;
        padding: 0.618rem;
    }
    
    .title p:first-child {
        font-weight: 600;
        margin-bottom: 0.39rem;
    }
    
    .title p:last-child {
        font-size: 0.438rem;
    }
    
    .container img {
        width: 0.361rem;
        height: 0.36rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    .btn {
        font-size: 0.412rem;
    }
    
    .btn:last-child {
        margin: 0 0.67rem;
    }
    
    .btn div {
        width: 0.721rem;
        height: 0.721rem;
        border-radius: 50%;
        border: 1px solid rgba(158, 158, 166, 1);
        background: #ccc;
        position: relative;
        margin: 0 auto;
        margin-bottom: 0.195rem;
    }
    
    .sign {
        font-size: 0;
    }
    
    .sign span {
        font-size: 0.438rem;
        display: inline-block;
        color: #9E9EA6;
        background: #F2F2F5;
        padding: 0.052rem 0.154rem;
        margin: 0 0.232rem;
    }
    
    .sign span:first-child {
        margin: 0;
        margin-right: 0.155rem;
    }
    
    .sign .active {
        background: rgba(12, 102, 255, 0.23);
        color: #0C66FF;
    }
</style>