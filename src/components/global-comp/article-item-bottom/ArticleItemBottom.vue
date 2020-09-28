<!--置顶 作者 评论 时间 -->
<template>
  <div class="articleI-item-bottom">
    <span class="top" v-if="defaultArticleItemBottom.is_top">{{
      defaultArticleItemBottom.is_top
    }}</span>
    <span class="aut-name">{{ defaultArticleItemBottom.aut_name }}</span>
    <span class="collect-count"
      >{{ defaultArticleItemBottom.comm_count }}评论</span
    >
    <span class="pubdate">{{
      defaultArticleItemBottom.pubdate | formatRelativeTime
    }}</span>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  name: "ArticleItemBottom",
  props: {
    articleItemBottom: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      defaultArticleItemBottom: {
        is_top: "", //是否置顶，0-不置顶，1-置顶
        aut_name: "", //作者name
        comm_count: 0, //评论数量
        pubdate: "", //发布时间
      },
    };
  },
  methods: {
    /**********************************************网络请求模块******************************************************/
    /*********************************************数据逻辑处理模块*************************************************/
    initDefaultArticleItemBottom() {
      this.defaultArticleItemBottom = {
        ...this.defaultArticleItemBottom,
        ...this.articleItemBottom,
      };
    },
  },
  watch: {
    articleItemBottom: {
      handler() {
        this.initDefaultArticleItemBottom();
      },
      immediate: true,
    },
  },
};
</script>
<style lang="less" scoped>
.articleI-item-bottom {
  margin-top: 25px;
  font-size: 23px;
  font-family: "Microsoft YaHei";
  color: #b4b4b4;
  line-height: 1;
  span {
    margin-right: 25px;
  }

  .top {
    color: #e22829;
  }
  .aut-name {
  }
  .collect-count {
  }
  .pubdate {
  }
}
</style>