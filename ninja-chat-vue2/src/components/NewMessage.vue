<template>
  <form @submit.prevent="addMessage">
    <label for="newMessage">New Message (enter to add)</label>
    <input type="text" id="newMessage" v-model="message" />
  </form>
</template>

<script>
  export default {
    name: 'NewMessage',
    props: ['name'],
    data() {
      return {
        message: null,
      }
    },
    methods: {
      addMessage() {
        console.log(this.name, this.message, Date.now())
        this.message = null
      },
    },
  }
</script>

<style></style>
