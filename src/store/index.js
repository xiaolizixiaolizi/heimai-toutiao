import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken:{
      refresh_token:'',
      token:''
    }

  },
  mutations: {
    setUserToken(state,payload){
      state.userToken = {...state.userToken,...payload.userToken}

    }
  },
  actions: {
  },
  modules: {
  }
})
