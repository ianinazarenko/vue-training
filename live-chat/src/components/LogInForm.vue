<template>
  <form @submit.prevent="onSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <button type="submit">Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const email = ref('')
    const password = ref('')

    function onSubmit() {
      console.log(email.value, password.value)
    }

    return { email, password, onSubmit }
  },
}
</script>

<style></style>
