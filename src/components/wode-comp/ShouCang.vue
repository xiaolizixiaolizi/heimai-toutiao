<!-- 收藏和登录子组件，这个是否登录都显示一摸一样 -->
<template>
  <van-grid :column-num="2" class="shoucang">
    <div class="line"></div>
    <van-grid-item
      v-for="item in shoucangData"
      :key="item.text"
      icon-prefix="wonder"
      :icon="item.icon"
      :text="item.text"
    />
  </van-grid>
</template>
<script>
export default {
  name: "ShouCang",
  data() {
    return {
      shoucangData: [
        { icon: "shoucang", text: "收藏" },
        { icon: "lishi", text: "历史" },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.shoucang {
  position: relative;
  top: 0;
  left: 0;
  .line {
    position: absolute;
    top: 20px;
    left: 50%;
    width: 2px;
    height: 100px;
    background: #333;
    margin-left: -1px;
  }
  /deep/ .van-grid-item__content {
    padding: 18px 0;
  }
  /deep/ .van-grid-item__icon {
    font-size: 46px;
    &.wonder-shoucang {
      color: #eb5253;
    }
    &.wonder-lishi {
      color: #ff9d1d;
    }
  }
  /deep/ .van-grid-item__text {
    font-size: 28px;
    color: #333;
    letter-spacing: 2px;
  }
}
</style>