import ArticleItem3 from './ArticleItem3'

export default {
  //Vue.use()方法就会自动执行install
  install(Vue) {
    Vue.component(ArticleItem3.name , ArticleItem3) ////获取组件的名字 当做全局组件名字使用

  }

}