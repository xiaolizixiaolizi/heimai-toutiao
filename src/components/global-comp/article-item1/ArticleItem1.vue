<!--文章列表第一种样式 无图片 -->
<template>
  <div class="article-item-wrapper van-hairline--bottom">
    <p class="article-title">{{ defaultArticle.title }}</p>
    <article-item-bottom
      :article-item-bottom="{
        is_top: defaultArticle.is_top,
        aut_name: defaultArticle.aut_name,
        comm_count: defaultArticle.comm_count,
        pubdate: defaultArticle.pubdate,
      }"
    ></article-item-bottom>
  </div>
</template>
<script>
import articleItem from "@/mixin/articleItem";
export default {
  inheritAttrs: false,
  name: "ArticleItem1",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  components: {},
  mixins: [articleItem],
  data() {
    return {};
  },
  methods: {
    /**********************************************网络请求模块******************************************************/
    /*********************************************数据逻辑处理模块*************************************************/
  },
  watch: {},
};
</script>
<style lang="less" scoped>
</style>