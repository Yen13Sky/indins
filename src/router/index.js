import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: () => import('../views/Post'),
    mata: {
      layout: 'main'
    }

  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes

})

export default router
