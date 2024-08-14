<template>
  <div class="comments__wrapper">
    <div class="comments__row" v-for="(item, i)  in comments" :key="i">
      <p class="comments__user">email: {{item.email}}</p>
      <h4 class="comments__title"> {{item.name}}</h4>
      <p class="comments__text">{{item.body}}</p>
    </div>
    <h4 class="comments__title-comment">Добавить комментарий</h4>
    <comments-form :id="idPost" ></comments-form>
  </div>

</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import commentsAddForm from './commentsAddForm'
export default {
  props: ['id'],
  setup (props) {
    const store = useStore()
    const idPost = ref(props.id)
    const comments = ref([])

    onMounted(async () => {
      await store.dispatch('comments/getComments', idPost)
      comments.value = await store.getters['comments/comments']
    })
    return {
      comments, idPost
    }
  },
  components: {
    'comments-form': commentsAddForm
  }
}
</script>

<style scoped>

</style>
