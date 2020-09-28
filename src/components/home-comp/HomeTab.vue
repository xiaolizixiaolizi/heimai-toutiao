<!-- Tab 标签页 -->
<template>
  <div>
    <van-tabs
      class="home-tab"
      v-model="activeName"
      v-if="tabData.length !== 0"
      color="#3296fa"
      swipeable
    >
      <van-tab
        v-for="item in tabData"
        :key="item.title"
        :title="item.title"
        :name="item.name"
      >
        <home-article :channel-id="item.id"></home-article>
      </van-tab>
      <template #nav-right>
        <van-icon name="wap-nav" @click="changeHomePopupShow" />
      </template>
    </van-tabs>
    <!-- 弹出框组件 虽然放在home页面下面 但是推荐通过设置挂在body标签下面 -->
    <home-popup
      :home-popup="homePopup"
      :tab-data="tabData"
      @changeTabBarActiveName="changeTabBarActiveName"
    ></home-popup>
  </div>
</template>
<script>
import HomeArticle from "components/home-comp/HomeArticle";
import HomePopup from "components/home-comp/HomePopup";

export default {
  name: "HomeTab",
  components: {
    HomeArticle,
    HomePopup,
  },
  data() {
    return {
      tabData: [],
      activeName: "",
      homePopup: {
        isShowEdit: true, //是否显示弹出层 默认是false 不显示
      },
    };
  },
  methods: {
    /*************************************网络请求逻辑****************************************************** */
    async _getUserChannels() {
      const data = await this.$api.getUserChannels().catch(() => {
        const data = this._getItem("homeTabData");
        this.handleHomeTabData(data);
      });
      if (!data) return;
      //深拷贝缓存起来
      const deepCopyData = this._deepCopy(data);
      this._setItem("homeTabData", deepCopyData);
      this.handleHomeTabData(data);
    },
    /************************************数据处理逻辑****************************************************** */
    handleHomeTabData({ data }) {
      const channels = data.channels;
      this.tabData = channels.map((item) => {
        return {
          title: item.name,
          name: item.name,
          id: item.id,
        };
      });
    },
    //控制弹出层的逻辑
    changeHomePopupShow() {
      this.homePopup.isShowEdit = true;
    },
    changeTabBarActiveName(activeName) {
      console.log("changeTabBarActiveName -> activeName", activeName);
      this.activeName = activeName;
    },
  },
  created() {
    this._getUserChannels();
  },
};
</script>
<style lang="less" scoped>
.home-tab {
  height: 80px;
  /deep/ .van-tabs__wrap {
    height: 80px;
  }

  /deep/ .van-tab__text {
    font-size: 28px;
    font-family: "Microsoft YaHei";
    color: rgb(119, 119, 119);
  }
  /deep/ .van-tab--active {
    .van-tab__text {
      font-size: 30px;
      font-family: "Microsoft YaHei";
      color: rgb(51, 51, 51);
    }
  }
  /deep/.van-tabs__line {
    width: 0.6rem;
  }
  /deep/ .van-icon-wap-nav {
    position: fixed;
    right: 0;
    // top: 0;
    background-color: rgba(255, 255, 255, 0.5);
    line-height: 80px;
    color: #333333;
  }
}
</style>