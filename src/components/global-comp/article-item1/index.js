import ArticleItem1 from './ArticleItem1'

export default {
  //Vue.use()方法就会自动执行install
  install(Vue) {
    Vue.component(ArticleItem1.name , ArticleItem1) ////获取组件的名字 当做全局组件名字使用

  }

}