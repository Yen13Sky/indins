<template>
  <div class="posts">
    <div class="container">
      <h1 class="posts__title">Посты</h1>
      <div class="posts__wrapper">
        <select-post v-model="idUser"></select-post>
        <div  class="post__row post-item"  v-for="(item, i) in filterPosts" :key="item.id">
          <router-link :to="'/post/' + item.id" class="post__link">
            <div class="post-item__title"><span>{{i+1}}</span> {{item.title}}</div>
            <div class="post-item__text">{{item.text}}</div>
            <div class="post-item__user">{{item.user}}</div>
          </router-link>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import TheSelect from '../components/TheSelect'
export default {
  setup () {
    const store = useStore()
    const posts = computed(() => store.getters['posts/posts'])
    const idUser = ref()
    const idPost = ref()

    const filterPosts = computed(() => posts.value.filter(item => {
      if (idUser.value) {
        return item.userId === idUser.value
      } return posts
    }))
    function getPostId () {
      posts.value.map(id => {
        idPost.value = id.id
        return idPost
      })
    }

    return {
      posts, idUser, filterPosts, idPost, getPostId

    }
  },
  components: {
    'select-post': TheSelect
  }

}
</script>

<style scoped>

</style>
