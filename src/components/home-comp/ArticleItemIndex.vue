<!-- ArticleItemIndex 文章显示模块组件-->
<template>
  <div class="article-item van-hairline--bottom">
    <!-- 样式1无图片 -->
    <article-item1 v-bind="this.$attrs" v-if="itemType === 0"> </article-item1>
    <!-- 样式2 1张图片 -->
    <article-item2
      v-bind="this.$attrs"
      v-else-if="itemType === 1"
    ></article-item2>

    <!-- 样式3 3张图片 -->
    <article-item3
      v-bind="this.$attrs"
      v-else-if="itemType === 3"
    ></article-item3>
  </div>
</template>
<script>
export default {
  inheritAttrs: true, //默认就是true
  props: {
    itemType: {
      type: Number,
      required: true,
    },
  },
  name: "ArticleItemIndex",

  data() {
    return {};
  },
  methods: {
    /**********************************************网络请求模块******************************************************/
    /*********************************************数据逻辑处理模块******************************8*******************/
  },
};
</script>
<style lang="less" scoped>
.article-item {
  padding: 0 23px;
  background-color: #fff;
}
</style>