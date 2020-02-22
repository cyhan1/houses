<template>
    <!--二手房详情-->
    <section>
        <h-header></h-header>
        <div class="c-box">
            <h-msg :detailType="2"></h-msg>
            <h-map></h-map>
            <div class="container "  >
                <h-title :title='"同小区房源"' :isSecond="true" :isShow='false' :isBold='true'></h-title>
                <div class="box box-align-center">
                    <h-type></h-type>
                     <h-type></h-type>
                </div>
                <el-button type="primary">同售小区11套</el-button>
            </div>
            <div  class="container ">
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

        </div>
        <h-footer></h-footer>
    </section>

</template>
<script>
    import MyHeader from '@/components/public/components/detail_header';
    import MyMsg from '@/components/public/components/detail_msg';
    import MyMap from '@/components/public/components/detail_map';
    import MyOptionTitle from '@/components/public/components/option_title';
    import MyHomeTye from '@/components/public/components/house_type_nut';
    import MyFooter from '@/components/public/components/detail_footer';
    import MyFeedback from '@/components/public/components/detail_feedback';
    export default {
        name: 'second_house_detail',
        components: {
            "h-header": MyHeader,
            'h-title': MyOptionTitle,
            'h-msg': MyMsg,
            'h-map': MyMap,
            'h-type': MyHomeTye,
            'h-footer': MyFooter,
            'h-feedback': MyFeedback
        },
    }
</script>
<style scoped>
    @import url(../../assets/css/detail-container.css);
    section {
        box-sizing: border-box;
        width: 100%;
        background: #F2F2F5;
        font-size: 0.618rem;
        font-family: PingFangSC-Regular, PingFang SC;
        margin-bottom: 2rem;
    }
    
    .c-box {
        padding: 0 0.618rem;
    }
    
    .el-button {
        width: 100%;
        margin: 0.618rem 0;
    }
    
    .house-type:nth-child(2n+1) {
        margin-right: 0.309rem;
    }
    
    .house-type:nth-child(2n) {
        margin-left: 0.309rem;
    }
</style>