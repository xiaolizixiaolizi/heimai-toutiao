<!-- 首页 -->
<template>
  <div class="home">
    <!-- 头部搜索框 -->
    <van-nav-bar :fixed="true" placeholder>
      <template #title>
        <van-button icon="search" type="primary">搜索</van-button>
      </template>
    </van-nav-bar>
    <!--头部tabbar切换卡组件  -->
    <home-tab></home-tab>
  </div>
</template>
<script>
import HomeTab from "components/home-comp/HomeTab";
export default {
  name: "Home",
  components: {
    HomeTab,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.van-nav-bar__placeholder {
  height: 100px !important;
  /deep/ .van-nav-bar {
    background: @nav-bar;
    height: 100px;
  }
  /deep/ .van-nav-bar__title {
    max-width: 100%;
  }
  .van-button {
    background-color: rgba(255, 255, 255, 0.2);
    width: 555px;
    height: 64px;
    border-radius: 30px;
  }
  /deep/ .van-nav-bar .van-icon {
    font-size: 33px;
    color: #fff;
  }
  /deep/ .van-button__text {
    font-size: 28px;
    font-family: "Microsoft YaHei";
    color: rgb(255, 255, 255);
    line-height: 1.2;
  }
}
</style>