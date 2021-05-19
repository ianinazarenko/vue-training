<template>
  <div class="home">
    <h1 ref="h">Hello, this is {{ name }} and I'm a {{ job }}</h1>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'

export default {
  name: 'Home',
  components: {},
  setup() {
    const name = ref('Nino')
    const job = ref('designer')

    function handleClick() {
      console.log("you've clicked me")
      console.log(h.value)
      name.value = 'mario'
    }

    const h = ref(null)

    return { name: name, job, handleClick, h }
  },
}
</script>
