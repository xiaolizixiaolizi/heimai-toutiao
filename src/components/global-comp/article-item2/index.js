import ArticleItem2 from './ArticleItem2'

export default {
  //Vue.use()方法就会自动执行install
  install(Vue) {
    Vue.component(ArticleItem2.name , ArticleItem2) ////获取组件的名字 当做全局组件名字使用

  }

}