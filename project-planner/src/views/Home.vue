<template>
  <section v-if="projects.length" class="section">
    <NavFilter
      @change:filter="currentFilter = $event"
      :filter="currentFilter"
    />
    <div v-for="project in filteredProjects" :key="project.id">
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
  import NavFilter from '../components/NavFilter'

  export default {
    name: 'Home',
    components: {
      Project,
      NavFilter,
    },
    data() {
      return {
        projects: [],
        currentFilter: 'all',
      }
    },
    computed: {
      filteredProjects: function() {
        if (this.currentFilter === 'completed') {
          return this.projects.filter((project) => project.complete)
        } else if (this.currentFilter === 'ongoing') {
          return this.projects.filter((project) => !project.complete)
        } else {
          return this.projects
        }
      },
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
