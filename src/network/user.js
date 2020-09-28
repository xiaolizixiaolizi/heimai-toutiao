import { post,get } from './request'

function getSms(mobile) {
  return get(`/app/v1_0/sms/codes/${mobile}`, )
}
function register(params) {
  return post('/register/', params)
}

function login(params) {
  return post('/app/v1_0/authorizations', params)
}

// 获取登录用户自己的信息 
function getCurrentUser(){
  return get('/app/v1_0/user')

}

export default {
  getSms,
  register,
  login,
  getCurrentUser,
}