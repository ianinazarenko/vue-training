<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <h1>Loading job details...</h1>
  </div>
</template>

<script>
  export default {
    props: ['id'],
    data() {
      return {
        job: null,
      }
    },
    mounted() {
      fetch('http://localhost:3000/jobs/' + this.id)
        .then((response) => response.json())
        .then((data) => {
          setTimeout(() => (this.job = data), 1500)
        })
        .catch((err) => console.log(err))
    },
  }
</script>

<style></style>
