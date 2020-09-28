<!-- layout页面的底部导航栏组件 -->
<template>
  <van-tabbar
    v-model="active"
    :active-color="tabBarConfig.activeColor"
    :inactive-color="tabBarConfig.inactiveColor"
    :route="tabBarConfig.route"
  >
    <van-tabbar-item
      v-for="(item, index) in defaultTabbarItemConfig"
      :key="index"
      :name="item.name"
      icon-prefix="wonder"
      :icon="item.icon"
      :to="item.to"
      replace
      >{{ item.text }}</van-tabbar-item
    >
  </van-tabbar>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "TabbarItem",
  data() {
    return {
      active: "home",
      tabBarConfig: {
        activeColor: "#3296fa", //3296fa
        inactiveColor: "#666666",
        route: true,
      },

      defaultTabbarItemConfig: [
        { name: "home", icon: "shouye", text: "首页", to: "/home" },
        { name: "qa", icon: "wenda", text: "问答", to: "/qa" },
        { name: "video", icon: "shipin", text: "视频", to: "/video" },
      ],
    };
  },
  computed: {
    ...mapState({
      userToken: "userToken",
    }),
  },
  methods: {
    initWode() {
      const wode = { name: "wode", icon: "wode", text: "我的", to: "/wode" };
      if (!this.userToken.token) {
        wode.name = "wode1";
        wode.text = "未登录";
        wode.to = "/wode-nologin";
      }
      this.defaultTabbarItemConfig.push(wode);
    },
  },
  created() {
    this.initWode();
  },
  watch: {
    "userToken.token": {
      handler() {
        this.defaultTabbarItemConfig.pop();
        this.initWode();
      },
    },
  },
};
</script>
<style lang="less" scoped>
</style>