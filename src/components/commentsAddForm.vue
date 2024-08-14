<template>
  <div class="form">
    <form action="" class="form__control" @submit.prevent="onSubmit">
      <div class="form__row">
        <label for="email" class="form__label">Ваш email:</label>
          <input id="email" type="text" class="form__input" required v-model="email">

      </div>
      <div class="form__row">
        <label for="title" class="form__label">Придумайте заголовок:</label>
          <input id="title" type="text" class="form__input" required v-model="title">

      </div>
      <div class="form__row">
        <label for="text"  class="form__label">Ваш комментарий:</label>
          <textarea id="text" type="text" class="form__input" required v-model="text"></textarea>

      </div>
      <button type="submit" class="form__btn">Отправить</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  props: ['id'],

  setup (props, { emit }) {
    const store = useStore()
    const idPost = ref(props.id)
    const email = ref('')
    const title = ref('')
    const text = ref('')
    const comment = ref({})

    async function onSubmit () {
      const formData = {
        id: idPost,
        name: title.value,
        body: text.value,
        email: email.value
      }
      try {
        comment.value = await store.dispatch('comments/addComments', formData)
      } catch (e) {
        console.log(e)
      }
    }

    return { onSubmit, email, title, text }
  }

}
</script>

<style scoped>

</style>
