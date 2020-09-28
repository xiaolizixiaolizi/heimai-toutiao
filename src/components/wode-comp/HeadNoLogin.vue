<!-- 登录头部展示子组件 -->
<template>
  <div class="top-top-container">
    <div @click="goLogin">
      <van-image fit="contain" lazy-load :src="titleInfo.img" />
      <p class="info">{{ titleInfo.info }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeadLogin",
  data() {
    return {
      titleInfo: {
        img: require("assets/img/wode/nologin-touxiang.png"),
        info: "登录/注册",
      },
    };
  },
  methods: {
    goLogin() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>
<style lang="less" scoped>
.top-top-container {
  height: 253px;
  padding-top: 147px;
  background: url("~assets/img/wode/bg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  .van-image {
    width: 130px;
    height: 130px;
  }
  .info {
    font-size: 28px;
    font-family: "Microsoft YaHei";
    color: rgb(255, 255, 255);
    line-height: 1;
    padding-top: 14px;
  }
}
</style>