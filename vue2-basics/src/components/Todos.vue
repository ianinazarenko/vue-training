<template>
  <section>
    <h1>Todos</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
    </ul>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        todos: [],
      }
    },
    created() {
      axios
        .get('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => (this.todos = response.data))
        .catch((err) => console.log(err))
    },
  }
</script>

<style></style>
