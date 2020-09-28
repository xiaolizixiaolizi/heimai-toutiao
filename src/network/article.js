import { get, post } from './request'
//获取新闻article请求模块


//获取用户频道列表 也就是首页的tabbar头部切换 
function getUserChannels(){
  return get('/app/v1_0/user/channels')
}

//频道新闻推荐_V1.1 也就是首页的tabbar 我的频道
function getRecommendArticle(params){
  return get('/app/v1_1/articles',params)
}

//获取所有频道
function getAllChannel(params){
  return get('/app/v1_0/channels',params)
}
export default {
  getUserChannels,
  getRecommendArticle,
  getAllChannel,
}