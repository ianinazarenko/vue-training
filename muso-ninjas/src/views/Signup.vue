<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>
    <input type="text" placeholder="Display name" v-model="name" required />
    <input type="text" placeholder="Email" v-model="email" required />
    <input type="password" placeholder="password" v-model="password" required />
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending" type="submit">Sign up</button>
    <button v-if="isPending" disabled>Loding...</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useSignUp } from '@/composables'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const { error, signUp, isPending } = useSignUp()
    const router = useRouter()

    async function handleSubmit() {
      const response = await signUp(email.value, password.value, name.value)
      if (!error.value) {
        router.push({ name: 'Home' })
      }
    }

    return { name, email, password, handleSubmit, error, isPending }
  },
}
</script>

<style></style>
