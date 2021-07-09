<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="text" placeholder="Email" v-model="email" required />
    <input type="password" placeholder="password" v-model="password" required />
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending" type="submit">Log in</button>
    <button v-if="isPending" disabled>Loding...</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useLogin, getUser } from '@/composables'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const { error, login, isPending } = useLogin()
    const router = useRouter()
    const user = getUser()

    async function handleSubmit() {
      await login(email.value, password.value)
      if (!error.value) {
        console.log('user logged in')
        router.push({ name: 'Home' })
      }
    }

    return { email, password, handleSubmit, error, isPending }
  },
}
</script>

<style></style>
