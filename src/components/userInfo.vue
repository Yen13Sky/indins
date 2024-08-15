<template>

  <div class="user__wrapper">
    <div class="user__row" v-for="(item, i) in user" :key="i">
      <h3 class="user__name">Имя: <span>{{item.name}}</span></h3>
      <p class="user__username">Логин: <span>{{item.username}}</span></p>
      <a href= "#" class="user__email">email: <span>{{item.email}}</span></a>
      <div class="user__address user-address">
        <p class="user-address__city">Город: <span>{{item.address.city}}</span></p>
        <p class="user-address__street">Улица: <span>{{item.address.street}}</span></p>
      </div>
    </div>

  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  props: ['id'],
  setup (props) {
    const store = useStore()
    const id = props.id
    const user = ref({})

    onMounted(async () => {
      user.value = await store.dispatch('users/getUserInfo', id)
    })

    return {
      user
    }
  }

}
</script>

<style scoped>

</style>
