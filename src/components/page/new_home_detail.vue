<template>
    <section>
        <!--新房详情-->
        <h-header></h-header>
        <div class="h-container">
            
        <h-detail></h-detail>

        <div class="container">
            <div class="box box-align-center box-between ">
                <div  style="font-weight: 600">
                    <p>主力户型（语音讲房）</p>
                </div>
                <div style="font-size:0.412rem" @click='go_to_all'>
                    <p>查看更多<i class="el-icon-arrow-right"></i></p>
                </div>
            </div>


            <div class="box box-align-center box-wrap">
                    <!--主力户型-->
                    
                <h-type v-for='(items,inx) in type ' :item='items' :key='inx'></h-type>
                

            </div>
        </div>
        <div class="container">
            <div class="box box-align-center box-between ">
                <div  style="font-weight: 600">
                    <p>最新动态</p>
                </div>
                <div style="font-size:0.412rem" @click='go_to_dynamic'>
                    <p>查看更多<i class="el-icon-arrow-right"></i></p>
                </div>
            </div>
            <h-msg></h-msg>
            <h-msg></h-msg>

        </div>
        <!--地图-->
        <h-map></h-map>

       
        
        <div class="container">
            <div class="box box-align-center box-between ">
                <div  style="font-weight: 600">
                    <p>用户点评<span style="color:#9E9EA6;font-size:0.464rem">（179）</span></p>
                </div>
                <div style="font-size:0.412rem" @click='go_to_comment'>
                    <p>查看更多<i class="el-icon-arrow-right"></i></p>
                </div>
            </div>
            <h-feedback></h-feedback>
            <h-feedback></h-feedback>
            <h-feedback></h-feedback>
            <el-button type="primary">我要点评</el-button>

        </div>
        <div class="container">
             <div class="box box-align-center box-between ">
                <div  style="font-weight: 600">
                    <p>买房问大家<span style="color:#9E9EA6;font-size:0.464rem">（179）</span></p>
                </div>
                <div style="font-size:0.412rem">
                    <p>查看更多<i class="el-icon-arrow-right"></i></p>
                </div>
            </div>
            <div class="options">
                <h-question></h-question>
                <h-question></h-question>
                <h-question></h-question>
                
            </div>
             <el-button type="primary">我要提问</el-button>
        </div>
      
        123
        </div>
        <h-footer></h-footer>
    </section>
        
 
</template>
<script>
    import MyHeader from '@/components/public/components/detail_header';
    import MySignNav from '@/components/public/components/sign_nav';
    import MyMsg from '@/components/public/components/dynamic_msg';
    import MyHomeTye from '@/components/public/components/house_type_nut';
    import MyFooter from '@/components/public/components/detail_footer';
    import MyDetail from '@/components/public/components/detail_msg';
    import MyMap from '@/components/public/components/detail_map';
    import MyFeedback from '@/components/public/components/detail_feedback';
    import MyQuestion from '@/components/public/components/buy_question';
    export default {
        name: 'new_home_detail',
        components: {
            "h-header": MyHeader,
            'h-sign': MySignNav,
            'h-msg': MyMsg,
            'h-type': MyHomeTye,
            'h-footer': MyFooter,
            'h-detail': MyDetail,
            'h-map': MyMap,
            'h-feedback': MyFeedback,
            'h-question': MyQuestion
        },
        data() {
            return {
                value1: 5,
                value: 3.7,

                type: [{
                    url: '271581231610pic_hd28.png',
                    layout: '3室2厅2卫',
                    area: '142',
                    direction: '朝向西南',
                    price: '3366',
                    sign: [{
                        name: '在售',
                        statu: 2
                    }, {
                        name: '亲子乐园',
                        statu: 0
                    }, {
                        name: '贴心物业',
                        statu: 0
                    }, {
                        name: '地铁沿线',
                        statu: 0
                    }, ],
                }, {
                    url: '271581231610pic_hd29.png',
                    layout: '3室2厅2卫',
                    area: '142',
                    direction: '朝向西南',
                    price: '3366',
                    sign: [{
                        name: '在售',
                        statu: 2
                    }, {
                        name: '亲子乐园',
                        statu: 0
                    }, {
                        name: '贴心物业',
                        statu: 0
                    }, {
                        name: '地铁沿线',
                        statu: 0
                    }, ],
                }, {
                    url: '271581231610pic_hd30.png',
                    layout: '3室2厅2卫',
                    area: '142',
                    direction: '朝向西南',
                    price: '3366',
                    sign: [{
                        name: '在售',
                        statu: 2
                    }, {
                        name: '亲子乐园',
                        statu: 0
                    }, {
                        name: '贴心物业',
                        statu: 0
                    }, {
                        name: '地铁沿线',
                        statu: 0
                    }, ],
                }, {
                    url: '271581231610pic_hd31.png',
                    layout: '3室2厅2卫',
                    area: '142',
                    direction: '朝向西南',
                    price: '3366',
                    sign: [{
                        name: '在售',
                        statu: 2
                    }, {
                        name: '亲子乐园',
                        statu: 0
                    }, {
                        name: '贴心物业',
                        statu: 0
                    }, {
                        name: '地铁沿线',
                        statu: 0
                    }, ],
                }]
            }
        },
        methods: {
            go_to_dynamic() {
                this.$router.push('/dynamic')
            },
            go_to_comment() {
                this.$router.push('/comment_on')
            },
            go_to_all() {
                this.$router.push('/house_type_all')
            }
        }

    }
</script>
<style scoped>
    .el-button {
        width: 100%;
    }
    /**/
    
    section {
        box-sizing: border-box;
        width: 100%;
        background: #F2F2F5;
        font-size: 0.618rem;
        font-family: PingFangSC-Regular, PingFang SC;
    }
    
    .h-container {
        margin: 0 0.58rem;
    }
    /**/
    
    .container {
        /*height: 15.768rem;*/
        background: #FFF;
        box-shadow: 0px 8px 12px 8px rgba(12, 102, 255, 0.02);
        border-radius: 0.309rem;
        transform: translateY(-0.824rem);
        /*border: 1px solid red;*/
        padding: 0.618rem;
        margin-bottom: 0.618rem;
    }
    
    .house-type:nth-child(2n+1) {
        margin-right: 0.309rem;
    }
    
    .house-type:nth-child(2n) {
        margin-left: 0.309rem;
    }
    /**/
    
    .signdiv div {
        padding: 0.232rem 0.515rem;
        background: #F2F2F5;
        color: #9E9EA6;
        font-size: 0.464rem;
        border-radius: 0.206rem;
    }
    
    .signdiv .active {
        background: #0C66FF;
        color: #fff;
    }
    
    .textview-overflow.three,
    .textview-overflow.two {
        color: #878791;
    }
</style>