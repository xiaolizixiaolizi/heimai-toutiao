<!--  -->
<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="user.mobile"
      name="mobile"
      type="tel"
      placeholder="请输入手机号"
      clearable
      center
      icon-prefix="wonder"
      left-icon="shouji"
      :rules="userLoginRule.user"
    />
    <van-field
      v-model="user.code"
      name="code"
      placeholder="请输入验证码"
      clearable
      center
      icon-prefix="wonder"
      left-icon="yanzhengma"
      :rules="userLoginRule.code"
    >
      <template #button>
        <van-button
          v-if="isShowSendSmsBtn"
          size="small"
          round
          color="#ededed"
          native-type="button"
          @click.prevent="sendSms"
          >获取验证码</van-button
        >
        <van-count-down
          v-else
          :time="time"
          format="ss s"
          @finish="handleFinish"
        />
      </template>
    </van-field>
    <div class="login-btn">
      <van-button block type="info" native-type="submit">登录</van-button>
    </div>
  </van-form>
</template>
<script>
import validate from "@/mixin/validate";
import { mapMutations } from "vuex";
export default {
  name: "LoginForm",
  mixins: [validate],
  data() {
    return {
      user: {
        mobile: "",
        code: "246810",
      },
      userLoginRule: {}, //通过混入注入数据
      isShowSendSmsBtn: true, //默认显示发送按钮
      time: 60 * 1000, //60s倒计时
    };
  },
  methods: {
    ...mapMutations({
      setUserToken: "setUserToken",
    }),
    /************************************网络请求**************************************** */
    async _getSms() {
      const data = await this.$api.getSms(this.user.mobile).catch((err) => {
        console.log(err);
      });
      if (!data) return; //下面是正确相应
      console.log(data);
    },
    async _login() {
      const data = await this.$api.login(this.user).catch((err) => {
        //注册失败失败处理
        this.$toast({
          type: "fail",
          message: "注册失败",
        });
      });
      if (!data) return;
      // 处理登录响应数据
      this.$toast({
        type: "success",
        message: "注册成功",
        duration: 1000,
      });
      this.handleLoginSussess(data);
    },

    /************************************逻辑处理**************************************** */
    // 点击获取验证码 显示倒计时逻辑

    // 发送验证码
    sendSms() {
      if (this.user.mobile && this.phoneValidator(this.user.mobile)) {
        // 隐藏发送按钮
        this.isShowSendSmsBtn = false;
        // 发送验证码请求
        this._getSms();
      } else {
        this.$notify({
          type: "danger",
          message: "手机号码为空或者格式不正确",
        });
      }
    },
    //验证码倒计时位0的时候处理逻辑
    handleFinish() {
      this.isShowSendSmsBtn = true;
    },
    //  onsubmit函数只会在数据校验完全通过情况下才会触发。但凡有一个字段没有验证通过，这个函数也不会出发
    onSubmit() {
      this._login();
    },
    handleLoginSussess({ data }) {
      this.setUserToken({ userToken: data });
      // 跳转到我的页面
      this.$router.push({ name: "wode" });
    },
  },
  created() {},
};
</script>
<style lang="less" scoped>
.van-form {
  .van-cell {
    padding: 0.26667rem 0.42667rem;
  }
  .van-field {
    /deep/ .van-field__left-icon {
      margin-right: 40px;
    }
    .van-button {
      padding: 0 0.21333rem;
      /deep/ .van-button__text {
        color: #666;
        font-size: 22px;
      }
    }
  }
  .login-btn {
    margin: 50px 30px;
    .van-button {
      background-color: #6db4fb;
      border: none;
      border-radius: 10px;
      /deep/ .van-button__text {
        font-size: 30px;
      }
    }
  }
}
</style>