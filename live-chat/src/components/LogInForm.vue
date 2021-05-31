<template>
  <form @submit.prevent="onSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button type="submit">Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useLogin from '@/composables/useLogin'

export default {
  setup(props, context) {
    const email = ref('')
    const password = ref('')
    const router = useRouter()

    const { error, login } = useLogin()

    async function onSubmit() {
      await login(email.value, password.value)

      // redirect to Chatroom with useRouter
      // if (!error.value) {
      //   router.push({ name: 'Chatroom' })
      // }

      // emiting event to redirect from Welcome component
      if (!error.value) {
        context.emit('login')
      }
    }

    return { email, password, onSubmit, error }
  },
}
</script>

<style></style>
