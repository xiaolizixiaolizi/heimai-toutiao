import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/login',
    name: 'login',
    component: () => import('views/login/Login')
  },
  {
    path: '/',
    component: () => import('views/layout/Index'),
    redirect:'/home',
    children: [
     
      {
        path: '/home',
        name: 'Home',
        component: () => import('views/layout/home/Home')
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('views/layout/qa/QA')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('views/layout/video/Video')
      },
      {
        path: '/wode',
        name: 'wode',
        component: () => import('views/layout/wode/WoDe')
      },
      {
        path: '/wode-nologin',
        name: 'WoDeNoLogin',
        component: () => import('views/layout/wode/WoDeNoLogin')
      },
    ]
  },

]

const router = new VueRouter({
  mode:"hash",
  routes
})

export default router
