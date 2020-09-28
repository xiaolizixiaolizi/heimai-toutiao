<!-- 我的页面 二级页面 -->
<template>
  <div class="wode">
    <!--我的登录头部信息 -->
    <head-login></head-login>
    <!-- 收藏和历史制作 -->
    <shou-cang></shou-cang>
    <!-- 消息通知 和 小志同学子组件 -->
    <notification></notification>
    <!-- 退出登录 -->
    <van-button type="primary" block class="login-out" @click="logout"
      >退出登录</van-button
    >
  </div>
</template>
<script>
import HeadLogin from "components/wode-comp/HeadLogin";
import ShouCang from "components/wode-comp/ShouCang";
import Notification from "components/wode-comp/Notification";
import { mapMutations } from "vuex";
export default {
  name: "WoDe",
  components: {
    HeadLogin,
    ShouCang,
    Notification,
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations({ setUserToken: "setUserToken" }),
    // 提示是否要退出登录，是清除sessionusertoken storeusertoken
    async logout() {
      const res = await this.$dialog
        .confirm({
          title: "确定要退出吗？",
          message: "",
        })
        .catch((err) => {});
      if (!res) return;
      this.setUserToken({ userToken: { refresh_token: "", token: "" } });
      this._removeItem("store");
      this.$router.push({ name: "WoDeNoLogin" });
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.wode {
  .login-out {
    margin-top: 10px;
    font-size: 30px;
    font-family: "Microsoft YaHei";
    color: rgb(216, 98, 98);
    background: #fff;
    height: 106px;
    letter-spacing: 2px;
  }
}
</style>