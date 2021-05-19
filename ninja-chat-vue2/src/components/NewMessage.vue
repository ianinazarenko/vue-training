<template>
  <form @submit.prevent="addMessage">
    <label for="newMessage">New Message (enter to add)</label>
    <input type="text" id="newMessage" v-model="message" />
    <p class="red-text" v-if="feedback">{{ feedback }}</p>
  </form>
</template>

<script>
  import db from '@/data/init'

  export default {
    name: 'NewMessage',
    props: ['name'],
    data() {
      return {
        message: null,
        feedback: null,
      }
    },
    methods: {
      addMessage() {
        console.log('submitted')
        if (this.message) {
          db.collection('messages')
            .add({
              name: this.name,
              content: this.message,
              timestamp: Date.now(),
            })
            .catch((err) => console.log(err))
          this.feedback = null
          this.message = null
        } else {
          this.feedback = 'You must enter some text here'
        }
      },
    },
  }
</script>

<style></style>
