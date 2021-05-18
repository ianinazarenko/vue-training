<template>
  <div class="wellcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Wellcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name:</label>
          <input type="text" id="name" v-model="name" />
          <button type="submit" class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'Wellcome',
    components: {},
    data() {
      return {
        name: null,
      }
    },
    methods: {
      enterChat() {
        console.log(this.name)
      },
    },
  }
</script>

<style>
  .wellcome {
    max-width: 400px;
    margin-top: 100px;
  }

  .wellcome h2 {
    font-size: 3em;
  }

  .wellcome button {
    margin: 30px auto;
  }
</style>
