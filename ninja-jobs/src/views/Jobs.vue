<template>
  <div class="jobs">
    <h4 v-if="jobs.length" v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
        {{ job.title }}
      </router-link>
    </h4>
    <h4 v-else>Loading...</h4>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        jobs: [],
      }
    },
    mounted() {
      fetch('http://localhost:3000/jobs')
        .then((response) => response.json())
        .then((data) => setTimeout(() => (this.jobs = data), 1000))
        .catch((err) => console.log(err))
    },
  }
</script>

<style></style>
