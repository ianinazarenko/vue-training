<template>
  <div class="jobs">
    <h4 v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
        {{ job.title }}
      </router-link>
    </h4>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        jobs: [
          {
            title: 'UX Designer',
            id: 'ux-designer',
            details: 'lorem',
          },
          {
            title: 'Web Developer',
            id: 'web-developer',
            details: 'lorem',
          },
          {
            title: 'Vue Developer ',
            id: 'vue-developer',
            details: 'lorem',
          },
        ],
      };
    },
  };
</script>

<style></style>
