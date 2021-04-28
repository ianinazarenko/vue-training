<template>
  <section v-if="projects.length" class="section">
    <div v-for="project in projects" :key="project.id">
      <Project
        :project="project"
        @delete="handleDelete"
        @complete="handleComplete"
      />
    </div>
  </section>
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
    methods: {
      handleDelete(id) {
        this.projects = this.projects.filter((project) => project.id !== id)
      },
      handleComplete(id) {
        this.projects.forEach((project) => {
          if (project.id === id) project.complete = !project.complete
        })
      },
    },
  }
</script>

<style></style>
