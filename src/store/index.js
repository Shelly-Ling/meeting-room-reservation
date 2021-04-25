import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      phoneNumber: '',
    },
    isAuthenticated: false,
    isAdmin: false

  },
  mutations: {
    setCurrentUser(state, currentUser) {

      state.currentUser = {
        ...state.currentUser,
        ...currentUser.data
      }
      state.isAuthenticated = true
    },
    setAdminUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser.data
      }
      state.isAuthenticated = true
      state.isAdmin = true
    }
  },
  actions: {
  },
  modules: {
  }
})
