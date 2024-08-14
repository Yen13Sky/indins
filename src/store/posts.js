import store from '@/store'
export default {
  namespaced: true,
  state: {
    posts: []

  },
  mutations: {
    setPost (state, post) {
      state.posts = post
    }

  },
  actions: {

    async getPosts ({ commit, dispatch, rootGetters }) {
      try {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const response = await fetch(url)
        const data = await response.json()
        const users = await store.dispatch('users/getUser')
        const result = data.map(item => ({
          id: item.id,
          title: item.title,
          text: item.body,
          userId: users.find(i => i.id === item.userId).id,
          user: users.find(i => i.id === item.userId).name

        }))
        commit('setPost', result)
        return result
      } catch (e) {
        console.log(e)
      }
    },
    async getPost ({ _, dispatch }, id) {
      try {
        const post = await dispatch('getPosts')
        const result = post.filter(post => post.id === id)
        return result
      } catch (e) {
        console.log(e)
      }
    }

  },
  getters: {
    posts (state) {
      return state.posts
    }

  }

}
