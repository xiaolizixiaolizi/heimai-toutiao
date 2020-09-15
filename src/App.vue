<template>
  <div id="app">
    <h1>黑马头条</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "APP",
  created() {},
};
</script>
<style lang="less">
#app {
  h1 {
    color: @color-primary;
  }
}
</style>
