<!--文章列表第2种样式 无图片 -->
<template>
  <div class="article-item-wrapper van-hairline--bottom">
    <div class="article-item-main">
      <p class="article-title">{{ defaultArticle.title }}</p>
      <van-image
        width="3.12rem"
        height="1.96rem"
        lazy-load
        :src="defaultArticle.cover.images[0]"
      />
    </div>
    <article-item-bottom
      class="article-item2-bottom"
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
  name: "ArticleItem2",
  inheritAttrs: false,
  mixins: [articleItem],
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
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
.article-item-main {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.article-item2-bottom {
  margin-top: 0;
}
</style>