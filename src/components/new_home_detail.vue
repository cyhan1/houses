<template>
    <section>
        <!--新房详情-->
        <h-header></h-header>
        <div class="h-container">
            
        
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
            <div class="msg text-left">
                <p>住宅:<span>14800</span>元/m² <span>均</span></p>
                <p>洋房: <span>16800</span>元/m² <span>均</span></p>
                <div >
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
            <div class="score">
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
            <p style='color:#CCCCD1;font-size:0.464rem;margin-top:0.618rem'>查看更多</p>
        </div>

        <div class="container">
            <div class="box box-align-center box-between ">
                <div  style="font-weight: 600">
                    <p>主力户型（语音讲房）</p>
                </div>
                <div style="font-size:0.412rem">
                    <p>查看更多<i class="el-icon-arrow-right"></i></p>
                </div>
            </div>
            <div class="box box-align-center box-wrap">
                <div class="house-type ">
                    <img src="@/assets/img/baner@2x.png" alt="">
                    <div class="box box-start" style='margin: 0.309rem 0 0 0'>
                        <div>3室2厅2卫</div>
                        <div class="sign"><span class="active">在售</span><span>环绕江景</span></div>
                    </div>
                    <div style="font-size: 0.464rem;color:#878791">
                        <p style="margin: 0.206rem 0">建面:<span style="color:#2C2C3B">142㎡&nbsp;朝向西南</span></p>
                        <p>参考价格:<span style="color:#ED5248">3366万</span></p>
                    </div>
                    
                </div>
                <div class="house-type ">
                    <img src="@/assets/img/baner@2x.png" alt="">
                    <div class="box box-start" style='margin: 0.309rem 0 0 0'>
                        <div>3室2厅2卫</div>
                        <div class="sign"><span class="active">在售</span><span>环绕江景</span></div>
                    </div>
                    <div style="font-size: 0.464rem;color:#878791">
                        <p style="margin: 0.206rem 0">建面:<span style="color:#2C2C3B">142㎡&nbsp;朝向西南</span></p>
                        <p>参考价格:<span style="color:#ED5248">3366万</span></p>
                    </div>
                    
                </div>
                <div class="house-type ">
                    <img src="@/assets/img/baner@2x.png" alt="">
                    <div class="box box-start" style='margin: 0.309rem 0 0 0'>
                        <div>3室2厅2卫</div>
                        <div class="sign"><span class="active">在售</span><span>环绕江景</span></div>
                    </div>
                    <div style="font-size: 0.464rem;color:#878791">
                        <p style="margin: 0.206rem 0">建面:<span style="color:#2C2C3B">142㎡&nbsp;朝向西南</span></p>
                        <p>参考价格:<span style="color:#ED5248">3366万</span></p>
                    </div>
                    
                </div>
                <div class="house-type ">
                    <img src="@/assets/img/baner@2x.png" alt="">
                    <div class="box box-start" style='margin: 0.309rem 0 0 0'>
                        <div>3室2厅2卫</div>
                        <div class="sign"><span class="active">在售</span><span>环绕江景</span></div>
                    </div>
                    <div style="font-size: 0.464rem;color:#878791">
                        <p style="margin: 0.206rem 0">建面:<span style="color:#2C2C3B">142㎡&nbsp;朝向西南</span></p>
                        <p>参考价格:<span style="color:#ED5248">3366万</span></p>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="container">
            <div class="box box-align-center box-between ">
                <div  style="font-weight: 600">
                    <p>最新动态</p>
                </div>
                <div style="font-size:0.412rem">
                    <p>查看更多<i class="el-icon-arrow-right"></i></p>
                </div>
            </div>
            <div style='margin-top:0.618rem;padding: 0.155rem 0'>
                <p style="margin:0.155rem 0;color:#4C93DA;font-size:0.464rem;">2021年06月30日</p>
                <p style="margin:0.155rem  0;"><span style="display: inline-block;border:1px solid #0C66FF;width:0.309rem;height: 0.309rem;border-radius: 50%;"></span>在售</p>
                <p style="margin:0.155rem 0" class="textview-overflow two">【在售信息】宏发浣花溪在售高层G1#、G2#、G5#，户型面积为55平、62平、68平、83平，均价11000元……</p>
                
            </div>
             <div style='margin-top:0.618rem;padding: 0.155rem 0'>
                <p style="margin:0.155rem 0;color:#4C93DA;font-size:0.464rem;">2021年06月30日</p>
                <p style="margin:0.155rem 0"><span style="display: inline-block;border:1px solid #0C66FF;width:0.309rem;height: 0.309rem;border-radius: 50%;"></span>在售</p>
                <p style="margin:0.155rem 0" class="textview-overflow two">【在售信息】宏发浣花溪在售高层G1#、G2#、G5#，户型面积为55平、62平、68平、83平，均价11000元……</p>
                
            </div>
            
        </div>
        <div class="container">
           <div  style="font-weight: 600">
                    <p>位置以及周边配套</p>
            </div>
             <p style='color:#2C2C3B'><span style='color: #878791 '>地址：</span>沈河区方家栏路（方家栏公园旁）</p>
             <div class="box box-between box-align-center signdiv">
                 <div class="active">
                     交通(37)
                 </div>
                 <div>
                    教育(19)
                 </div>
                 <div>
                     医院(19)
                 </div>
                 <div>
                     银行(19)
                 </div>
             </div>
             <div class="map">
                 地图
             </div>
             <div>
                 <p style="color:#2C2C3B;font-size:0.515rem;margin:0.219rem 0">上步工业区 
                     <span style="font-size:0.412rem;color:#9E9EA6">(m371路; m558路)</span>
                    </p>
                     <p style="color:#2C2C3B;font-size:0.515rem;margin:0.219rem 0">上步工业区 
                     <span style="font-size:0.412rem;color:#9E9EA6">(m371路; m558路)</span>
                    </p>
                     <p style="color:#2C2C3B;font-size:0.515rem;margin:0.219rem 0">上步工业区 
                     <span style="font-size:0.412rem;color:#9E9EA6">(m371路; m558路)</span>
                    </p>
             </div>
             
        </div>
        <div class="container">
            <div class="box box-align-center box-between ">
                <div  style="font-weight: 600">
                    <p>用户点评<span style="color:#9E9EA6;font-size:0.464rem">（179）</span></p>
                </div>
                <div style="font-size:0.412rem">
                    <p>查看更多<i class="el-icon-arrow-right"></i></p>
                </div>
            </div>
            <div class="user-say">
                <div class="box box-between" style="align-items:flex-end">
                    <div class="box">
                        <img src="@/assets/img/user@2x.png" alt="">
                        <div>
                            <p style='font-weight: 600'>用户昵称</p>
                            <el-rate
                                v-model="value1"
                                disabled
                                show-score
                                text-color="#ff9900"
                                :show-score='false'
                               >
                                </el-rate>

                        </div>
                    </div>
                    <div>
                        11月21号
                    </div>
                    
                </div>
                <p class="textview-overflow three">地段不错，楼下就是地铁，装修标准这周边也找不出来第二家啦！今天刚买了一个80多平的，家里人从外地都来看了，看的都还不错！期待涨价....</p>
            </div>
            
            <div class="user-say">
                <div class="box box-between" style="align-items:flex-end">
                    <div class="box">
                        <img src="@/assets/img/user@2x.png" alt="">
                        <div>
                            <p style='font-weight: 600'>用户昵称</p>
                            <el-rate
                                v-model="value1"
                                disabled
                                show-score
                                text-color="#ff9900"
                                :show-score='false'
                               >
                                </el-rate>

                        </div>
                    </div>
                    <div>
                        11月21号
                    </div>
                    
                </div>
                <p class="textview-overflow three">地段不错，楼下就是地铁，装修标准这周边也找不出来第二家啦！今天刚买了一个80多平的，家里人从外地都来看了，看的都还不错！期待涨价....</p>
            </div>
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
                <div class="options-item">
                       <p style="line-height: 0.876rem;"><span class="text-center">问</span>#其仕和悦#是高端楼盘项目吗？</p> 
                       <p style="padding-left:0.618rem;color:#9E9EA6;margin:0.309rem 0;font-size: 0.515rem;line-height: 0.721rem;">(共有8人回答)</p>
                    
                </div>
                 <div class="options-item">
                       <p style="line-height: 0.876rem;"><span class="text-center">问</span>#其仕和悦#是高端楼盘项目吗？</p> 
                       <p style="padding-left:0.618rem;color:#9E9EA6;margin:0.309rem 0;font-size: 0.515rem;line-height: 0.721rem;">(共有8人回答)</p>
                    
                </div>
                 <div class="options-item">
                       <p style="line-height: 0.876rem;"><span class="text-center">问</span>#其仕和悦#是高端楼盘项目吗？</p> 
                       <p style="padding-left:0.618rem;color:#9E9EA6;margin:0.309rem 0;font-size: 0.515rem;line-height: 0.721rem;">(共有8人回答)</p>
                    
                </div>
            </div>
             <el-button type="primary">我要提问</el-button>
        </div>
        <div class="container-footer text-center box box-align-center">
            <div>
               <i class="el-icon-s-finance"></i>分享
            </div>
            <div>
                <p>线上看房</p>
                <p style="font-size: 0.412rem">直播看房更方便</p>
            </div>
            <div>
                <p>
致电售楼处 </p>
                <p style="font-size: 0.412rem">
保护你的真实号码</p>
            </div>
        </div>
        123
        </div>
    </section>
        
 
</template>
<script>
    import MyHeader from '@/components/public/components/detail_header';
    export default {
        name: 'new_home_detail',
        components: {
            "h-header": MyHeader
        },
        data() {
            return {
                value1: 5,
                value: 3.7
            }
        }

    }
</script>
<style scoped>
    .user-say {
        padding: 0.68rem 0.824rem;
        background: #F2F2F5;
        font-size: 0.515rem;
        margin-bottom: 0.618rem;
    }
    
    .el-button {
        width: 100%;
    }
    
    .user-say img {
        width: 1.185rem;
        height: 1.185rem;
        display: block;
        border-radius: 50%;
        border: 1px solid #0C66FF;
    }
    
    .options {
        color: #2C2C3B;
        /*padding-top: 0.618rem;*/
        /*margin: 0.309rem 0;*/
    }
    
    .options-item {
        margin-top: 0.618rem;
    }
    
    .options-item span {
        display: inline-block;
        background: #ED5248;
        color: #fff;
        height: 0.618rem;
        width: 0.618rem;
        line-height: 0.618rem;
        font-size: 0.412rem;
        border-radius: 0.103rem;
    }
    
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
    
    .sign span,
    .box-start span {
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
    
    .sign .active,
    .box-start .active {
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
        width: 6rem;
        margin-left: 0.15rem;
    }
    
    .house-type {
        width: 6.493rem;
        margin-top: 0.618rem;
    }
    
    .house-type img {
        width: 6.493rem;
        height: 4.638rem;
    }
    
    .house-type:nth-child(2n+1) {
        margin-right: 0.309rem;
    }
    
    .house-type:nth-child(2n) {
        margin-left: 0.309rem;
    }
    
    .box-start P:first-child {
        color: #2C2C3B
    }
    
    .box-start span {
        margin: 0
    }
    
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
    
    .map {
        width: 100%;
        height: 6.99rem;
        margin: 0.219rem 0;
    }
    
    .container-footer {
        /*display: -ms-grid;
        display: grid;
        grid-template-columns: 1fr 2fr 2fr;*/
        height: 1.907rem;
        width: 100%;
        /*transform: translateY( -0.824rem);*/
        position: fixed;
        bottom: 0;
        left: 0;
    }
    
    .container-footer div:nth-child(1) {
        background: #fff;
        width: 20%;
        height: 100%;
        line-height: 1.907rem;
    }
    
    .container-footer div:nth-child(2) {
        background: #36BF86;
        font-size: 0.567rem;
        color: #fff;
        width: 40%;
        height: 100%;
        padding: 0.25rem 0;
        box-sizing: border-box;
    }
    
    .container-footer div:nth-child(3) {
        background: #0C66FF;
        font-size: 0.567rem;
        color: #fff;
        width: 40%;
        height: 100%;
        padding: 0.25rem 0;
        box-sizing: border-box;
    }
    
    .textview-overflow.three,
    .textview-overflow.two {
        color: #878791;
    }
</style>