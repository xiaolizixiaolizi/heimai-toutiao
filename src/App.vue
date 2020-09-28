<template>
  <div id="app">
    <router-view />
  </div>
</template>
 
<script>
export default {
  name: "APP",
  data() {
    return {};
  },
  created() {
    // 页面每次刷新加载时候都会去读取sessionStorage里面的vuex状态
    if (this._getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state, //这个永远还原默认值
          this._getItem("store") //这里存的是可能经过mutions处理过的state值，是最新的,所以放在最后
        )
      );
    }
    // 在页面刷新之前把vuex中的信息存到sessionStoreage
    window.addEventListener("beforeunload", () => {
      this._setItem("store", this.$store.state);
    });
  },
};
</script>
<style lang="less">
#app {
}
</style>
