<template>
  <div>
    <el-container>
      <el-main>
        <div>
          <div class="header">
            <i class="el-icon-close"></i>
            <span>注册</span>
          </div>
        </div>
        <div class="main">
          <div class="login-form">
            <div class="title">
              <div class="mobile-title">手机快捷登录</div>
              <div class="mobile-notice">未注册做的手机号将自动创建某某账号，我们会保护好您的个人隐私，经纪人不会看到您的手机号</div>
            </div>

            <ValidationObserver v-slot="{ invalid }">
              <form @submit.prevent="onSubmit">
                <ValidationProvider name="手机号" rules="required|digits:11" v-slot="{ errors }">
                  <el-input v-model="mobile" type="text" placeholder="请输入手机号"></el-input>
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
                <div style="margin:10px 0;"></div>
                <ValidationProvider name="验证码" rules="required|digits:4" v-slot="{ errors }">
                  <el-input v-model="smscode" type="text" placeholder="请输入验证码" />
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>

                <br />
                <button type="submit" :disabled="invalid">登录</button>
              </form>
            </ValidationObserver>

            <div class="notices">
              注册/登录即代表同意
              <el-link href="#" target="_blank" :underline="true">《某某隐私政策》</el-link>及
              <el-link href="#" target="_blank" :underline="true">《某某用户使用协议》</el-link>
            </div>
          </div>

          <div class="other-form">
            <el-divider>其他登录方式</el-divider>
            <div style="height:20px;"></div>
            <div class="form-icon">
              <div class="icon" @click="otherLogin">
                <img
                  src="@/assets/img/login_signup_personal/wechat-icon.png"
                  width="30"
                  height="25"
                />
              </div>
              <div class="icon" @click="otherLogin">
                <img src="@/assets/img/login_signup_personal/qq-icon@2x.png" width="26" height="28" />
              </div>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
    import {
        ValidationProvider,
        ValidationObserver,
        extend,
        localize
    } from "vee-validate";
    import zh_CN from "vee-validate/dist/locale/zh_CN.json";
    import {
        digits,
        required
    } from "vee-validate/dist/rules";

    localize("zh-CN", zh_CN);
    extend("digits", {...digits
    });
    extend("required", {...required
    });
    export default {
        components: {
            ValidationProvider,
            ValidationObserver
        },
        data: () => ({
            mobile: "",
            smscode: ""
        }),
        methods: {
            onSubmit() {
                console.log('submited');
            },
            handleCodeClick() {
                console.log("smscode");
            },
            otherLogin() {
                this.$message("此功能暂未开放〜");
            }
        }
    };
</script>

<style lang="css">
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 11px;
        border-bottom: 1px solid #f2f2f5;
        font-size: 16px;
    }
    
    .main {
        padding: 24px 24px;
    }
    
    .login-form {
        margin-bottom: 120px;
    }
    
    .title {
        text-align: left;
        margin-bottom: 40px;
    }
    
    .mobile-title {
        font-size: 30px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 00;
        color: rgba(74, 78, 95, 1);
        line-height: 50px;
    }
    
    .mobile-notice {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        color: rgba(135, 135, 145, 1);
    }
    
    form button {
        font-size: 16px;
        width: 100%;
        padding: 12px;
        border-radius: 4px;
        border: unset;
        background-color: #0C66FF;
        color: white;
    }
    
    form button:disabled {
        background-color: #A7C8FF;
    }
    
    form .el-input+span {
        display: block;
        font-size: 12px;
        color: red;
    }
    
    .notices {
        text-align: left;
        font-size: 12px;
        color: #9e9ea6;
        padding: 5px 0;
    }
    
    .notices .el-link {
        font-size: 12px;
        color: #9e9ea6;
        text-decoration: underline;
    }
    
    .other-form .el-divider__text {
        color: #9e9ea6;
    }
    
    .form-icon {
        display: flex;
        justify-content: space-around;
    }
    
    .form-icon .icon {
        height: 50px;
        width: 50px;
        background-color: #f2f2f5;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>