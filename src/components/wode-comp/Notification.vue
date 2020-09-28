<!-- 消息通知 和 小志同学子组件  -->
<template>
  <van-cell-group class="notification">
    <van-cell center title="消息通知" is-link />
    <van-cell center title="小智同学" is-link />
  </van-cell-group>
</template>
<script>
export default {
  name: "Notification",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.notification {
  margin-top: 10px;
  padding: 0 30px;
  .van-cell {
    line-height: 100px;
    font-size: 30px;
    font-family: "Microsoft YaHei";
    color: rgb(51, 51, 51);
    border-bottom: 1px solid #edeff3;
  }
}
</style>