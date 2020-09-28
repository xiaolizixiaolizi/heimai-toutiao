<!--文章列表第3种样式 有三种图片 -->
<template>
  <div class="article-item-wrapper van-hairline--bottom">
    <p class="article-title">{{ defaultArticle.title }}</p>
    <van-row class="article-image-list">
      <van-col
        :span="8"
        v-for="(item, index) in defaultArticle.cover.images"
        :key="index"
      >
        <van-image width="100%" height="1.96rem" lazy-load :src="item" />
      </van-col>
    </van-row>
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
  name: "ArticleItem3",
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
.article-image-list {
  margin: 26px 0 18px;
}
</style>