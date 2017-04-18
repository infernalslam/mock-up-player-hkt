import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    listAlbum: []
  },
  getters: {
    listAlbum: state => { return state.listAlbum }
  },
  actions: {
    getAlbum (context, payload) {
      context.commit('getAlbum', payload)
    }
  },
  mutations: {
    getAlbum (state, payload) {
      state.listAlbum = payload
    }
  }
})

export default store
