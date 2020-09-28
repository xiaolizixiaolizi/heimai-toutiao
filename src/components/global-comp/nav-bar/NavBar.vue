<!--头部导航栏全局组件  -->
<template>
  <van-nav-bar
    :title="defaultNavBarConfig.title"
    :left-text="defaultNavBarConfig.leftText"
    :right-text="defaultNavBarConfig.rightText"
    :left-arrow="defaultNavBarConfig.isSHowLeftArror"
    :fixed="defaultNavBarConfig.fixed"
    placeholder
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <template #right>
      <slot name="right">
        <span class="right-text">{{ defaultNavBarConfig.rightText }}</span>
      </slot>
    </template>
  </van-nav-bar>
</template>
<script>
export default {
  name: "NavBar",
  props: {
    navBarConfig: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      defaultNavBarConfig: {
        title: "登录", //中间文本
        leftText: "", //	左侧文案
        rightText: "", //右侧文案
        isSHowLeftArror: true, //是否显示左边返回按钮
        fixed: true, //是否固定在顶部
      },
    };
  },
  methods: {
    initDefaultNavBarConfig() {
      this.defaultNavBarConfig = {
        ...this.defaultNavBarConfig,
        ...this.navBarConfig,
      };
    },
    onClickLeft() {
      if (
        this.defaultNavBarConfig.leftText ||
        this.defaultNavBarConfig.isSHowLeftArror
      ) {
        this.$router.back(); //从哪里来的回到哪里去
      }
    },
    onClickRight() {
      if (!this.defaultNavBarConfig.rightText) return;
      this.$toast("按钮");
    },
  },
  created() {
    this.initDefaultNavBarConfig();
  },
};
</script>


<style lang="less" scoped>
.van-nav-bar__placeholder {
  height: 100px !important;
  /deep/ .van-nav-bar {
    background: @nav-bar;
    height: 100px;
  }
  /deep/ .right-text {
    color: #fff;
  }
  /deep/ .van-nav-bar .van-icon {
    color: #fff;
  }
  /deep/ .van-nav-bar__title {
    color: #fff;
    font-size: 32px;
  }
}
</style>
