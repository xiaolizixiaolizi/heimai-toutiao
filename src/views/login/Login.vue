/* eslint-disable semi */
<!-- 登录视图 -->
<template>
  <div class="login">
    <nav-bar :nav-bar-config="navBarConfig"></nav-bar>
    <!-- 登录表单 -->
    <login-form></login-form>
  </div>
</template>
<script>
import LoginForm from "components/login-comp/LoginForm";
export default {
  name: "Login",
  components: {
    LoginForm,
  },
  data() {
    return {
      navBarConfig: {
        title: "登录", // 中间文本
        isSHowLeftArror: true, // 是否显示左边返回按钮
      },
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.login {
  h2 {
    font-size: 30px;
  }
}
</style>
