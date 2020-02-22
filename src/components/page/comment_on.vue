<template>
    <!--用户点评-->
    <section class="comment-on view-overflow">
        <h-header :title='"楼盘点评"'></h-header>
        <div>
            <p>您看过该盘吗？</p>
            <h-sign :pageType='2'></h-sign>   
        </div>
        <div class="container">
            <div class="box">
                <p>楼盘价格</p>
                <el-rate v-model="value1"></el-rate>
            </div>
            <div  class="box">
                <p>楼盘地段</p>
                <el-rate v-model="value1"></el-rate>
            </div>
            <div  class="box">
                <p>周边配套</p>
                <el-rate v-model="value1"></el-rate>
            </div>
            <div  class="box">
                <p>交通设施</p>
                <el-rate v-model="value1"></el-rate>
            </div>
            <div  class="box">
                <p>小区环境</p>
                <el-rate v-model="value1"></el-rate>
            </div>
            <p>综合评分：<span style='color:#ED5248'>5.0分</span></p>
            <el-input
  type="textarea"

  rows='4'
  placeholder="亲，您觉得其仕和悦的位置如何，环境怎么样"
  v-model="textarea2">
</el-input>
<el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <div >
      <i class="el-icon-camera-solid"></i>
      <p>  添加照片</p>
  </div>

  
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
        </div>

         <div>
            <p class="look-over">查看《用户点评行为规范》</p>
        <el-button type='primary'>提交</el-button></el-buttom> 
        </div>
       
        <!--<router-link to=''>查看《用户点评行为规范》</router-link>-->
    </section>
</template>
<script>
    import MyTitleHeader from '@/components/public/components/title_header';
    import MySignNav from '@/components/public/components/sign_nav';
    export default {
        components: {
            'h-header': MyTitleHeader,
            'h-sign': MySignNav,
            // 'h-msg': MyMsg,
            // 'h-footer': MyFooter
        },
        data() {
            return {
                value1: 5,
                textarea2: '',
                dialogImageUrl: '',
                dialogVisible: false
            }
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }
</script>
<style scoped>
    @import url(../../assets/css/container.css);
    section {
        background: #F2F2F5;
        height: 100%;
        font-size: 0.618rem;
    }
    
    section>div {
        padding: 0 0.58rem;
    }
    
    .container {
        background: #fff;
        padding: 0.824rem;
        margin: 0 0.578rem;
        border-radius: 0.309rem;
    }
    
    .box {
        margin: 0.618rem 0;
    }
    
    .box:nth-child(1) {
        margin-top: 0;
    }
    
    .el-button {
        width: 100%;
    }
    
    .el-textarea {
        margin: 0.618rem 0;
    }
    
    .look-over {
        margin: 0.412rem 0 0.824rem 0;
        color: #0C66FF;
        font-size: 0.464rem;
    }
</style>