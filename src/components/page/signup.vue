<template>
  <div>
    <el-container>
      <el-main>
        <div>
          <div class="header">
            <i class="el-icon-close"></i>
            <span>登录</span>
          </div>
        </div>
        <div class="main">
          <div class="login-form">
            <div class="title">
              <div class="mobile-title">注册</div>
              <div class="mobile-notice">我们会保护好您的个人隐私，经纪人不会看到您的手机号</div>
            </div>

            <ValidationObserver v-slot="{ invalid }">
              <form @submit.prevent="onSubmit">
                <ValidationProvider name="手机号" rules="required|digits:11" v-slot="{ errors }">
                  <el-input v-model="mobile" type="text" placeholder="请输入手机号"></el-input>
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
                <div style="margin:10px 0;"></div>
                <ValidationProvider name="密码" rules="required|alpha_num|min:8" v-slot="{ errors }">
                  <el-input v-model="password" type="text" placeholder="请输入密码"></el-input>
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
                <div style="margin:10px 0;"></div>
                <ValidationProvider name="验证码" rules="required|digits:4" v-slot="{ errors }">
                  <el-input v-model="smscode" type="text" placeholder="请输入验证码" />
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>

                <br />
                <button type="primary" :disabled="invalid">注册</button>
              </form>
            </ValidationObserver>

            <div class="notices">
              注册/登录即代表同意
              <el-link href="#" target="_blank" :underline="true">《某某隐私政策》</el-link>及
              <el-link href="#" target="_blank" :underline="true">《某某用户使用协议》</el-link>
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
import { required, digits, alpha_num, min } from "vee-validate/dist/rules";

localize("zh_CN", zh_CN);
extend("required", {...required});
extend("digits", { ...digits });
extend("alpha_num", { ...alpha_num });
extend("min", min);
export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    mobile: "",
    smscode: "",
    password: ""
  }),
  methods: {
    onSubmit() {
      console.log('submited');
    },
    handleCodeClick() {
      console.log("smscode");
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
form .el-input + span {
  display: block;
  color: red;
  font-size: 12px;
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
</style>