<!-- HomeArticle文章列表组件 -->
<template>
  <van-pull-refresh
    v-model="isLoading"
    @refresh="onRefresh"
    :success-text="successText"
    success-duration="1000"
  >
    <van-list
      v-model="loading"
      :finished="finished"
      @load="onLoad"
      v-if="defaultChannelId !== ''"
    >
      <template #finished>
        <van-row type="flex" justify="center">
          <van-col
            ><i class="wonder wonder-icon02 finished-text"
              >我是有底线的</i
            ></van-col
          >
        </van-row>
      </template>
      <article-item-index
        v-for="(item, index) in list"
        :key="index"
        :article="item"
        :item-type="item.cover.type"
      ></article-item-index>
    </van-list>
  </van-pull-refresh>
</template>
<script>
import ArticleItemIndex from "components/home-comp/ArticleItemIndex";
export default {
  name: "HomeArticle",
  components: {
    ArticleItemIndex,
  },
  props: {
    channelId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      defaultChannelId: "",
      list: [],
      pre_timestamp: new Date().getTime(),
      loading: false, //是否处于加载状态默认是false,false表示不出发onload事件
      finished: false, // 是否已加载完成，加载完成后不再触发load事件(实际情况是数据全部请求完)
      isLoading: false, //下拉刷新的loading.默认是false
      successText: "",
    };
  },

  methods: {
    /*******************************获取网络请求模块******************************************************/
    async _getRecommendArticle() {
      const data = await this.$api
        .getRecommendArticle({
          channel_id: this.defaultChannelId,
          timestamp: this.pre_timestamp,
          with_top: 1,
        })
        .catch((err) => {});
      if (!data) return;
      this.handlerArticleData(data.data);
    },

    /*******************************数据逻辑处理模块******************************************************/
    initDefaultChannelId() {
      this.defaultChannelId = this.channelId;
    },
    handlerArticleData({ pre_timestamp, results }) {
      const action = this.isLoading ? "unshift" : "push";
      this.successText = `更新了${results.length}条数据`;
      // 上划更多的逻辑
      this.list[action](...results);
      if (pre_timestamp) {
        this.pre_timestamp = pre_timestamp;
      } else {
        // 没有时间错了说明数据请求完毕
        this.finished = true;
      }
    },

    //List 初始化后会默认触发一次 load 事件，用于加载第一屏的数据
    async onLoad() {
      await this._getRecommendArticle();
      this.loading = false;
      // 结束条件 不在出发onload事件
      // 结束条件不够严谨
      // if (this.list.length === 0) {
      //   this.finished = true;
      // }
    },
    //下拉刷新
    async onRefresh() {
      await this._getRecommendArticle();
      this.isLoading = false;
    },
  },
  watch: {
    // channelId是tabbarID ,
    channelId: {
      handler(val) {
        this.initDefaultChannelId();
        this.onLoad();
      },
      immediate: true,
    },
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.van-pull-refresh {
  min-height: calc(100vh - 180px);
}
.van-list {
  position: fixed;
  left: 0;
  right: 0;
  top: 180px;
  bottom: 100px;
  overflow-y: auto;
  .finished-text {
    font-size: 30px;
  }
  .van-cell {
    padding: 0.26667rem 0.42667rem;
  }
}
</style>