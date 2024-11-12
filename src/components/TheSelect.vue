<template>
  <div class="post__search">
    <label  class="post__label">
      Выбрать пост по пользователю
      <select  class="post__select" v-model="userId">
        <option disabled value="null">Выберете посты по name</option>
        <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
      </select>
    </label>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],

  setup (_, { emit }) {
    const store = useStore()
    const users = computed(() => store.getters['users/user'])
    const userId = ref(null)
    watch(userId, value => {
      emit('update:modelValue', value)
    })

    return {
      users, userId
    }
  }

}
</script>

<style scoped>

</style>
