export default {
  namespaced: true,
  state: {
    comments: []

  },
  mutations: {
    setComments (state, comments) {
      state.comments = comments
    },
    addNewComment (state, comment) {
      state.comments.push(comment)
      
    }
  },
  actions: {
    async getComments ({ commit, dispatch }, id) {
      const url = 'https://jsonplaceholder.typicode.com/comments'
      try {
        const response = await fetch(url)
        const data = await response.json()
        const comments = data.filter(comment => comment.id === id)
        commit('setComments', comments)
      } catch (e) {
        console.log(e)
      }
    },
    async addComments ({ commit }, data) {
      const url = 'https://jsonplaceholder.typicode.com/comments'

      try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            body: data.body,
            postId: data.id
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
        const comments = await response.json()
        commit('addNewComment', comments)
        return comments
      } catch (e) {
        console.log(e)
      }
    }

  },
  getters: {
    comments (state) {
      return state.comments
    }
  }
}
