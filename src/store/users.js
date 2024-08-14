export default {
  namespaced: true,
  state: {
    users: []

  },
  mutations: {
    setUser (state, user) {
      state.users = user
    }

  },
  actions: {
    async getUser ({ commit }) {
      try {
        const url = 'https://jsonplaceholder.typicode.com/users'
        const response = await fetch(url)
        const data = await response.json()
        commit('setUser', data)
        return data
      } catch (e) {
        console.log(e)
      }
    },
    async getUserInfo ({ dispatch }, id) {
      const user = await dispatch('getUser')
      const result = user.filter(user => user.id === id)
      return result
    }
  },
  getters: {
    user (state) {
      return state.users
    }
  }

}
