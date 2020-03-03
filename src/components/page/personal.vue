<template>
  <div>
    <div class="header">
      <div class="box box-align-center box-between">
        <div @click="back">
          <i class="el-icon-arrow-left" style="color:#2c2c3b"></i>
        </div>
        <div>
          <i class="el-icon-edit-outline" style="color:#2c2c3b"></i>
          <i class="el-icon-user" style="color:#2c2c3b"></i>
        </div>
      </div>
      <div class="avator">
        <el-avatar :size="80" src="https://empty" @error="errorHandler">
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
        </el-avatar>
        <div class="name">
          <span class="user">用户昵称</span>
          <span class="profile" @click="editePersonal">查看并编辑个人资料</span>
        </div>
      </div>
    </div>
    <div class="container">
      <section class="nav-btn box box-align-center text-center">
        <div class="box-flex" @click="personalData">
          <img src="@/assets/img/subscrib@2x.png" alt />
          <p>我的关注</p>
        </div>
        <div class="box-flex" @click="personalData">
          <img src="@/assets/img/history@2x.png" alt />
          <p>浏览记录</p>
        </div>
        <div class="box-flex" @click="personalData">
          <img src="@/assets/img/vipsupport@2x.png" alt />
          <p>专属顾问</p>
        </div>

        <div class="box-flex" @click="personalData">
          <img src="@/assets/img/comput2@2x.png" alt />

          <p>浏览记录</p>
        </div>
      </section>
      <div style="margin:20px 0;"></div>
      <el-row class="nav-btn text-center">
        <el-col :span="6">
          <div @click="personalService">
            <img src="@/assets/img/comment@2x.png" alt />
            <p>我的点评</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div @click="personalService">
            <img src="@/assets/img/ask@2x.png" alt />
            <p>楼盘问答</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div @click="personalService">
            <img src="@/assets/img/ask2@2x.png" alt />
            <p>小区问答</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div @click="personalService">
            <img src="@/assets/img/answer@2x.png" alt />
            <p>问卷调查</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div @click="personalService">
            <img src="@/assets/img/answer2@2x.png" alt />
            <p>官方在线客服</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<script>
    export default {
        methods: {
            back() {
                this.$router.go(-1);
            },
            editePersonal() {
                this.$message('此功能暂未开放〜');
            },
            personalData() {
                this.$message('此功能暂未开放〜');
            },
            personalService() {
                this.$message('此功能暂未开放〜');
            }
        }
    };
</script>

<style scoped>
    /* header */
    
    .header {
        position: relative;
        color: #fff;
        width: 100%;
        height: 9.533rem;
        background-color: #e6f2ff;
    }
    
    .header>div {
        padding: 0.58rem;
        box-sizing: border-box;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .header .avator {
        position: relative;
        top: 30%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    
    .header .avator .name {
        display: flex;
        text-align: left;
        flex-direction: column;
        margin-left: 20px;
    }
    
    .user {
        font-size: 28px;
        color: #2c2c3b;
        font-weight: 500;
    }
    
    .profile {
        font-size: 18px;
        color: #9e9ea6;
        font-weight: 400;
    }
    /* nav-btn */
    
    .nav-btn {
        /* height: 3.865rem; */
        border-radius: 0.309rem;
        background: #fff;
        box-shadow: 0px 8px 12px 8px rgba(12, 102, 255, 0.04);
        transform: translateY(-0.824rem);
        position: relative;
        z-index: 2;
        padding: 0.747rem 0.58rem;
        box-sizing: border-box;
    }
    
    .nav-btn img {
        display: block;
        width: 1.2rem;
        height: 1.237rem;
        margin: 0 auto;
    }
    
    .nav-btn p {
        color: #2c2c3b;
        font-size: 0.515rem;
        margin-top: 0.412rem;
    }
    /* container */
    
    .container {
        padding: 0 0.578rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-size: 0.618rem;
        color: #2c2c3b;
    }
    
    .el-col {
        margin-bottom: 20px;
    }
    
    .el-col:last-child {
        margin-bottom: 0;
    }
</style>