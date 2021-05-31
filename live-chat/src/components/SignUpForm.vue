<template>
  <form @submit.prevent="onSubmit">
    <input
      type="text"
      required
      placeholder="display name"
      v-model="displayName"
    />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button type="submit">Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignUp from '@/composables/useSignUp'

export default {
  setup(props, context) {
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const { error, signUp } = useSignUp()

    async function onSubmit() {
      await signUp(email.value, password.value, displayName.value)
      if (!error.value) {
        context.emit('signup')
      }
    }

    return { displayName, email, password, onSubmit, error }
  },
}
</script>

<style></style>
