<!-- 我的尚未登录 -->
<template>
  <div>
    <!-- 尚未登录的头部 -->
    <head-no-login></head-no-login>
    <!-- 收藏和历史制作 -->
    <shou-cang></shou-cang>
    <!-- 消息通知 和 小志同学子组件 -->
    <notification></notification>
  </div>
</template>
<script>
import HeadNoLogin from "components/wode-comp/HeadNoLogin";
import ShouCang from "components/wode-comp/ShouCang";
import Notification from "components/wode-comp/Notification";
export default {
  name: "WoDeNoLogin",
  components: {
    HeadNoLogin,
    ShouCang,
    Notification,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
</style>