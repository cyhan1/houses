<template>
<!--户型详情-->
<section>
     <h-header></h-header>
     <div class="c-box">
         <h-detil></h-detil>
         <div class="box  box-align-center box-option">
            <div>首付预算</div>
            <div> 专车免费接送</div>
         </div>
         <div class='container'>
             <div class="box box-align-center box-between ">
                <div  style="font-weight: 600">
                    <p>用户点评<span style="color:#9E9EA6;font-size:0.464rem">（179）</span></p>
                </div>
                <div style="font-size:0.412rem" >
                    <p>查看更多<i class="el-icon-arrow-right"></i></p>
                </div>
            </div>
            <div>
                <h-feedback></h-feedback>
                <h-feedback></h-feedback>
                <h-feedback></h-feedback>
            </div>
             <el-button type="primary">我要点评</el-button>
         </div>

         <div class="container">
            <div class="box box-align-center box-between ">
                <div  style="font-weight: 600">
                    <p>买房问大家<span style="color:#9E9EA6;font-size:0.464rem">（179）</span></p>
                </div>
                <div style="font-size:0.412rem" >
                    <p>查看更多<i class="el-icon-arrow-right"></i></p>
                </div>
            </div>
            <div>
                <h-question></h-question>
                <h-question></h-question>
                <h-question></h-question>
            </div>
            <el-button type="primary">我要提问</el-button>
         </div>
         <div class="container">
             <h-title :title='"其它户型"'></h-title>
             <div class="box box-align-center box-wrap">
                 <h-type></h-type>
                 <h-type></h-type>
                 <h-type></h-type>
                 <h-type></h-type>
             </div>
         </div>
     </div>
     <h-footer></h-footer>
</section>
</template>
<script>
    import MyHeader from '@/components/public/components/detail_header';
    import MyDetail from '@/components/public/components/detail_msg';
    import MyOptionTitle from '@/components/public/components/option_title';
    import MyFeedback from '@/components/public/components/detail_feedback';
    import MyQuestion from '@/components/public/components/buy_question';
    import MyHomeTye from '@/components/public/components/house_type_nut';
    import MyFooter from '@/components/public/components/detail_footer';
    export default {
        components: {
            'h-header': MyHeader,
            'h-detil': MyDetail,
            'h-title': MyOptionTitle,
            'h-feedback': MyFeedback,
            'h-question': MyQuestion,
            'h-type': MyHomeTye,
            'h-footer': MyFooter,

        }

    }
</script>
<style scoped>
    @import url(../../assets/css/detail-container.css);
    section {
        /*二手房详情一样*/
        box-sizing: border-box;
        width: 100%;
        background: #F2F2F5;
        font-size: 0.618rem;
        font-family: PingFangSC-Regular, PingFang SC;
        margin-bottom: 2rem;
    }
    
    .c-box {
        padding: 0 0.5rem;
    }
    
    .box-option {
        transform: translateY(-0.824rem);
        margin: 0.618rem 0;
    }
    
    .box-option div {
        height: 2.834rem;
        width: 100%;
        background: #fff;
        border-radius: 0.309rem;
    }
    
    .box-option div:nth-child(1) {
        margin-right: 0.618rem;
    }
    /**/
    
    .house-type:nth-child(2n+1) {
        margin-right: 0.309rem;
    }
    
    .house-type:nth-child(2n) {
        margin-left: 0.309rem;
    }
</style>