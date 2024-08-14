<template>
    <div class="content-post__wrapper">
    <h1 class="content-post__main-title">Вы читаете пост с id {{postId}}</h1>
    <router-link class="content-post__link" to="/"> Вернуться к постам</router-link>
    <div class="content-post__item" v-for="item in post" :key="item.id">
      <h2 class="content-post__title">{{item.title}}</h2>
      <p class="content-post__text">{{item.text}}</p>
      <div class="content-post__user post-user">
        <p class="post-user__name" @click="isHidden = !isHidden">{{item.user}}</p>
        <user-info :id="idUser" v-if="isHidden" ></user-info>
      </div>
    </div>
    <div class="content-post__comments">
      <post-comments :id="postId"></post-comments>

    </div>

  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import userInfo from '../components/userInfo'
import postComments from '../components/postComments'

export default {

  setup () {
    const route = useRoute()
    const store = useStore()
    const postId = +route.params.id
    const post = ref()
    const idUser = ref(null)
    const isHidden = ref(false)
    onMounted(async () => {
      post.value = await store.dispatch('posts/getPost', postId)
      idUser.value = post.value[0].userId
    })

    return {
      postId, post, idUser, isHidden
    }
  },
  components: {
    'user-info': userInfo,
    'post-comments': postComments
  }

}
</script>

<style scoped>

</style>
