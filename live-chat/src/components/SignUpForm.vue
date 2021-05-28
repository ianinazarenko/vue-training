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
    <button type="submit">Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    function onSubmit() {
      console.log(displayName.value, email.value, password.value)
    }

    return { displayName, email, password, onSubmit }
  },
}
</script>

<style></style>
