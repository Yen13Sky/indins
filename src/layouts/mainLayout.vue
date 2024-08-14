<template>
  <div class="content container">
    <router-view/>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()

    onMounted(async () => {
      if (store.getters['posts/posts']) {
        await store.dispatch('posts/getPosts')
      }
      if (store.getters['users/user']) {
        await store.dispatch('users/getUser')
      }
    })

    return {}
  }

}
</script>

<style scoped>

</style>
