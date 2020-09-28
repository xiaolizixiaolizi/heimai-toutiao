<!--  HomePopup首页弹出层组件-->
<template>
  <van-popup
    v-model="defaultHomePopup.isShowEdit"
    closeable
    close-icon-position="top-left"
    position="bottom"
    get-container="body"
    duration=".5"
    :style="{ height: '100%' }"
  >
    <!-- 我的频道 -->
    <div class="popup-container">
      <van-cell title="我的频道" center :border="false">
        <template #right-icon>
          <van-image
            width="1.386667rem"
            height="0.64rem"
            :src="require('assets/img/home/edit-butoon.png')"
          />
        </template>
      </van-cell>
      <van-grid :column-num="4" :border="false" v-if="myChannel.length !== 0">
        <van-grid-item v-for="(item, index) in myChannel" :key="index">
          <van-button type="default" @click="goMyChannel(item)">{{
            item.title
          }}</van-button>
        </van-grid-item>
      </van-grid>

      <!-- 频道推荐 -->
      <van-cell
        title="频道推荐"
        center
        class="recommend-channel"
        :border="false"
      />
      <van-grid
        :column-num="4"
        :border="false"
        v-if="recommendChannel.length !== 0"
      >
        <van-grid-item v-for="(item, index) in recommendChannel" :key="index">
          <van-button icon="plus" type="default" @click="addChannel(item)">{{
            item.title
          }}</van-button>
        </van-grid-item>
      </van-grid>
    </div>
  </van-popup>
</template>
<script>
export default {
  name: "HomePopup",
  props: {
    homePopup: {
      type: Object,
      required: true,
      default: () => {},
    },
    tabData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      defaultHomePopup: {
        isShowEdit: false, //是否显示弹出层 默认是false 不显示
      },
      allChannelData: [],
      myChannel: [],
      recommendChannel: [],
    };
  },
  methods: {
    /**********************************************网络请求模块******************************************************/
    // 获取所有频道数据

    async _getAllChannel() {
      const data = await this.$api.getAllChannel().catch((_) => {
        const data = this._getItem("allChannel");
        const res = data.data.channels;
        res.forEach((item) => (item.title = item.name));
        this.allChannelData = res;
      });
      if (!data) return;
      const deepData = this._setItem("allChannel", data);
      const res = data.data.channels;
      res.forEach((item) => (item.title = item.name));
      this.allChannelData = res;
    },
    /*********************************************数据逻辑处理模块**************************************************/
    handleRecommendChannel() {
      const myChannel = this.myChannel.map((item) => item.id);
      this.recommendChannel = this.allChannelData.filter(
        (channel) => !myChannel.includes(channel.id)
      );
    },

    initDefaultHomePopup() {
      this.defaultHomePopup = { ...this.defaultHomePopup, ...this.homePopup };
    },
    initMyChannel() {
      this.myChannel = [...this.myChannel, ...this.tabData];
    },
    // 添加频道逻辑
    addChannel(item) {
      this.myChannel.push(item);
      // this.handleRecommendChannel(); //可以
      this.recommendChannel = this.recommendChannel.filter(
        (channel) => channel.id !== item.id
      );
    },
    // 点击我的频道，会跳转到我的tabbar对应的页面 其实就是子组件改变父组件的值 $emit
    goMyChannel(item) {
      this.$emit("changeTabBarActiveName", item.name);
      // 关闭popup弹出层
      this.defaultHomePopup.isShowEdit = false;
    },
  },
  watch: {
    "homePopup.isShowEdit": {
      handler(val) {
        if (val === true) this.initDefaultHomePopup();
      },
      immediate: true,
    },
    "defaultHomePopup.isShowEdit": {
      handler(val) {
        if (val === false) this.homePopup.isShowEdit = false;
      },
    },
    tabData: {
      async handler() {
        await this._getAllChannel();
        this.initMyChannel();
        this.handleRecommendChannel();
      },
    },
  },
};
</script>
<style lang="less" scoped>
.van-popup {
  /deep/ .van-popup__close-icon {
    font-size: 30px;
    color: #222222;
  }
  /deep/.van-popup__close-icon--top-left {
    top: 30px;
  }
  .popup-container {
    margin: 108px 25px 0;

    .van-cell {
      font-size: 32px;
      font-family: "Microsoft YaHei";
      color: rgb(51, 51, 51);
      line-height: 1.125;
    }
    .recommend-channel {
      margin-top: 70px;
    }

    .van-grid {
      margin-top: 50px;
      /deep/ .van-grid-item__content {
        padding: 0;
      }
      /deep/ .van-grid-item__content {
        width: fit-content;
      }

      .van-button {
        background-color: #f4f5f6;
        font-size: 28px;
        font-family: "Microsoft YaHei";
        color: rgb(34, 34, 34);
        height: 88px;
        width: 160px;
        border-radius: 8px;
        margin-bottom: 30px;
        /deep/ .van-icon-plus {
          font-size: 24px;
        }
      }
    }
  }
}
</style>