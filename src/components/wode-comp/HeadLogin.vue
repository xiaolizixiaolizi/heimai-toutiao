<!-- 登录头部展示子组件 -->
<template>
  <div class="top-top-container">
    <!-- 头部 头像+编辑资料 -->
    <div class="wode-title">
      <van-image :src="titleInfo.img" lazy-load round fit="cover" />
      <p class="desc">{{ titleInfo.title }}</p>
      <van-button type="primary" round>编辑资料</van-button>
    </div>
    <!-- 头部数据 -->
    <van-grid :column-num="4" class="wode-data" :border="false">
      <van-grid-item v-for="item in titleInfo.data" :key="item.text">
        <div class="wode-data-item">
          <p class="woda-data-num">{{ item.num }}</p>
          <p class="woda-data-text">{{ item.text }}</p>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
export default {
  name: "HeadLogin",
  data() {
    return {
      titleInfo: {
        img: "",
        title: "",
        data: [],
      },
    };
  },
  methods: {
    /**************************************************网络请求逻辑*********************************************************** */
    // 获取登录用户的自己个人信息
    async _getCurrentUser() {
      const data = await this.$api.getCurrentUser().catch((err) => {
        const data = this._getItem("currentUserInfo");
        this.handleCurrentUserData(data);
      });
      if (!data) return;
      // 深拷贝 缓存起来把
      const deepCopyData = this._deepCopy(data);
      this._setItem("currentUserInfo", deepCopyData);
      this.handleCurrentUserData(data);
    },
    /**************************************************数据请求逻辑*********************************************************** */
    handleCurrentUserData({ data }) {
      const {
        name,
        photo,
        art_count,
        follow_count,
        fans_count,
        like_count,
      } = data;
      this.titleInfo.title = name;
      this.titleInfo.img = photo;
      this.titleInfo.data = [
        { num: art_count, text: "头条" },
        { num: follow_count, text: "关注" },
        { num: fans_count, text: "粉丝" },
        { num: like_count, text: "获赞" },
      ];
    },
  },
  created() {
    this._getCurrentUser();
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.top-top-container {
  padding-top: 70px;
  height: 330px;
  background: url("~assets/img/wode/bg.png") no-repeat;
  background-size: 100% 100%;
  .wode-title {
    display: flex;
    flex-flow: row nowrap;
    margin: 0 32px;
    align-items: center;

    .van-image {
      width: 134px;
      height: 134px;
    }
    .desc {
      margin-left: 25px;
      flex: 1;
      font-size: 30px;
      color: rgb(255, 255, 255);
      line-height: 1.2;
    }
    .van-button {
      height: 35px;
      padding: 0 15px;
      background: #ffffff;
      font-size: 20px;
      color: rgb(102, 102, 102);
      border: none;
    }
  }
  .wode-data {
    padding: 55px 0 30px;
    .wode-data-item {
      text-align: center;
      .woda-data-num {
        font-size: 36px;
        font-family: "Arial";
        color: rgb(255, 255, 255);
        line-height: 1.2;
      }
      .woda-data-text {
        font-size: 23px;
        font-family: "Microsoft YaHei";
        color: rgb(255, 255, 255);
        line-height: 1.2;
      }
    }
    /deep/.van-grid-item__content {
      background-color: transparent;
      padding: 0 0;
    }
  }
}
</style>