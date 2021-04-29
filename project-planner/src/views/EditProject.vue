<template>
  <section class="section">
    <form @submit.prevent="updateProject">
      <label for="title">Title:</label>
      <input v-model="title" type="text" id="title" required />
      <label for="details">Details:</label>
      <textarea v-model="details" id="details"></textarea>
      <button type="submit">Update project</button>
    </form>
  </section>
</template>

<script>
  export default {
    props: ['id'],
    data() {
      return {
        title: '',
        details: '',
        uri: 'http://localhost:3000/projects/' + this.id,
      }
    },
    mounted() {
      fetch(this.uri)
        .then((response) => response.json())
        .then((data) => {
          this.title = data.title
          this.details = data.details
        })
    },
    methods: {
      updateProject() {
        fetch(this.uri, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: this.title, details: this.details }),
        }).then(() => this.$router.push({ name: 'Home' }))
      },
    },
  }
</script>

<style></style>
