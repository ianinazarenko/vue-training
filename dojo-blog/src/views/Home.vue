<template>
  <section class="home">
    <h1 ref="p">Hello, this is {{ name }} and I'm {{ age }}</h1>
    <button @click="handleClick">Click me</button>
  </section>
</template>

<script>
  // @ is an alias to /src
  import { ref } from 'vue'

  export default {
    name: 'Home',
    setup() {
      const name = 'mario'
      const age = 30

      const p = ref('ho-ho-ho')
      console.log(p)
      console.log(p.value)

      function handleClick() {
        console.log(p.value.textContent)
        p.value.textContent = 'Hi'
      }

      return { name, age, handleClick, p }
    },
  }
</script>
