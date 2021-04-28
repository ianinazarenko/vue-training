<template>
  <section class="section">
    <form @submit.prevent="handleSubmit">
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
    props: ['id', 'project'],
    data() {
      return {
        title: '',
        details: '',
        uri: 'http://localhost:3000/projects/' + this.id,
      }
    },
    mounted() {
      // console.log(this.$route.params, this.project)
      fetch(this.uri)
        .then((response) => response.json())
        .then((data) => {
          this.title = data.title
          this.details = data.details
        })
    },
  }
</script>

<style></style>
