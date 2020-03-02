<template>
    <section class="container text-center">
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
         <div class="msg text-left">
            <p>住宅:<span>14800</span>元/m² <span>均</span></p>
            <p>洋房: <span>16800</span>元/m² <span>均</span></p>
            <div>
                <div class="box box-align-center ">
                    <p class="box-flex">户型: <span>3/4室</span></p>
                    <p class="box-flex">建面: <span>128~456m²</span></p>
                </div>
                <div class="box box-align-center">
                    <p class="box-flex">开盘: <span>2019.12.12</span></p>
                    <p class="box-flex">品牌: <span>其仕集团</span></p>
                </div>
                <div class="box box-align-center box-between">
                    <p>地址: <span>沈河区方家栏路（方家栏公园旁）</span></p>
                    <i class="el-icon-location"></i>
                </div>
             </div>  
         </div>


         <div class="score" v-show='detailType!=2'>
             <div class="box box-align-center box-between">
                <p>楼盘整体评分</p>
                <i class="el-icon-arrow-right"></i>
             </div>
             <div class="box">
                <p class="text-center num">4.6</p>
                <div class="">
                <div class="box star box-align-center box-end">
                    <div >
                        <i class="el-icon-star-on"></i>
                        <i class="el-icon-star-on"></i>
                        <i class="el-icon-star-on"></i>
                        <i class="el-icon-star-on"></i>
                        <i class="el-icon-star-on"></i>
                    </div>
                    <el-progress :percentage="50" :stroke-width="4" color='#FFC522' :show-text="false"></el-progress>
                 </div>
                 <div class="box star box-align-center box-end">
                     <div >
                        <i class="el-icon-star-on"></i>
                        <i class="el-icon-star-on"></i>
                        <i class="el-icon-star-on"></i>
                        <i class="el-icon-star-on"></i>
                              
                     </div>
                     <el-progress :percentage="50" :stroke-width="4" color='#FFC522' :show-text="false"></el-progress>
                 </div>
                 <div class="box star box-align-center box-end">
                     <div >
                        <i class="el-icon-star-on"></i>
                        <i class="el-icon-star-on"></i>
                        <i class="el-icon-star-on"></i>
                              
                     </div>
                     <el-progress :percentage="50" :stroke-width="4" color='#FFC522' :show-text="false"></el-progress>
                 </div>
                 <div class="box star box-align-center box-end">
                     <div >
                        <i class="el-icon-star-on"></i>
                        <i class="el-icon-star-on"></i>
                              
                     </div>
                     <el-progress :percentage="50" :stroke-width="4" color='#FFC522' :show-text="false"></el-progress>
                 </div>
                <div class="box star box-align-center box-end">
                    <div >
                        <i class="el-icon-star-on"></i>
                              
                    </div>
                    <el-progress :percentage="50" :stroke-width="4" color='#FFC522' :show-text="false"></el-progress>
                </div>
            </div>
        </div>
        <div class="text-right" style="color:#9E9EA6;font-size: 0.309rem">
                    2534人评分
        </div>

    </div>
     <el-button type="primary" v-show='detailType==2'>首付预算</el-button>
    <p style='color:#CCCCD1;font-size:0.464rem;margin-top:0.618rem' class="text-center">查看更多</p>
</section>
  
</template>
<script>
    export default {
        props: {
            detailType: {
                type: Number,
                default: 1, //1新房详情，2二手房详情，3是户型详情
            }
        },
        mounted() {

        }
    }
</script>
<style scoped>
    @import url(../../../assets/css/detail-container.css);
    .title p:first-child {
        font-weight: 600;
        margin-bottom: 0.39rem;
    }
    
    .title p:last-child {
        font-size: 0.438rem;
    }
    
    .btn img {
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
    
    .msg {
        margin: 0.618rem 0;
        color: #878791;
    }
    
    .msg>p span:first-child {
        color: #ED5248;
    }
    
    .msg>p span:last-child {
        color: #CCCCD1;
        font-size: 0.464rem;
        border: 1px solid #CCCCD1;
        display: inline-block;
        padding: 1px;
    }
    
    .msg>p,
    .msg .box {
        margin: 0.155rem 0;
    }
    
    .msg .box span {
        color: #2C2C3B;
    }
    
    .score {
        background: rgba(242, 242, 245, 1);
        border-radius: 0.309rem;
        padding: 0.309rem 0.824rem;
    }
    
    .score>div:nth-child(2) {
        margin: 0.257rem;
    }
    
    .num {
        width: 2.28rem;
        height: 2.164rem;
        line-height: 2.164rem;
        color: #2C2C3B;
        font-size: 1.546rem;
        /*margin-right: 1.03rem;*/
        margin-right: 0.5rem;
    }
    
    .star {
        font-size: 0.206rem;
        color: #CCCCD1;
    }
    
    .el-progress {
        width: 5.5rem;
        margin-left: 0.15rem;
    }
    
    .house-type:nth-child(2n+1) {
        margin-right: 0.309rem;
    }
    
    .house-type:nth-child(2n) {
        margin-left: 0.309rem;
    }
    
    .el-button {
        width: 100%;
    }
</style>