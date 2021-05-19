<template>
  <div class="chat container">
    <h2>Chat</h2>
    <h3 v-if="name">
      Hello, <b>{{ name.toUpperCase() }}</b>
    </h3>
  </div>
</template>

<script>
  export default {
    name: 'Chat',
    props: ['name'],
    data() {
      return {}
    },
    // created() {
    //   console.log(this.$route)
    //   console.log(this.$router)
    //   if (!this.name) this.$router.push({ name: 'Wellcome' })
    // },
  }
</script>

<style></style>
