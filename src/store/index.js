import { createStore } from 'vuex'
import users from '../store/users'
import posts from '../store/posts'
import comments from '../store/comments'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    posts,
    users,
    comments

  }
})
