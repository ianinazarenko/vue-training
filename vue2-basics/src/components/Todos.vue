<template>
  <section>
    <h1>Todos</h1>
    <input type="text" id="search" v-model="search" />
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">{{ todo.title }}</li>
    </ul>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        todos: [],
        search: '',
      }
    },
    computed: {
      filteredTodos() {
        return this.todos.filter((todo) => todo.title.includes(this.search))
      },
    },
    created() {
      axios
        .get('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => {
          console.log(response.data)
          return (this.todos = response.data)
        })
        .catch((err) => console.log(err))
    },
  }
</script>

<style></style>
