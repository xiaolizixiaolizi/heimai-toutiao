<!-- 首页 问答 视频 我的页面的父级路由页面 把下面切换看作是pc端的侧边栏 -->
<template>
  <div>
    <!-- 子路由 首页 问答 视频 我的页面的子路由-->
    <router-view></router-view>
    <!--  底部导航栏组件切换组件-->
    <layout-tab-bar></layout-tab-bar>
  </div>
</template>
<script>
import LayoutTabBar from "components/layout-comp/LayoutTabBar"; //底部导航栏组件
export default {
  name: "LayoutContainer",
  components: {
    LayoutTabBar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
</style>