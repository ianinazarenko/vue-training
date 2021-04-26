<template>
  <div v-if="projects.length" class="home">
    <div v-for="project in projects" :key="project.id">
      <Project :project="project" />
    </div>
  </div>
</template>

<script>
  import Project from '../components/Project'
  export default {
    name: 'Home',
    components: {
      Project,
    },
    data() {
      return {
        projects: [],
      }
    },
    mounted() {
      fetch('http://localhost:3000/projects')
        .then((response) => response.json())
        .then((data) => (this.projects = data))
        .catch((err) => console.log(err))
    },
  }
</script>

<style>
  .home {
    padding: 3rem 0;
  }

  .home div {
    width: 100%;
  }
</style>
