<template>
  <section class="section">
    <form @submit.prevent="handleSubmit">
      <label for="title">Title:</label>
      <input v-model="title" type="text" id="title" required />
      <label for="details">Details:</label>
      <textarea v-model="details" id="details"></textarea>
      <button type="submit">Add new project</button>
    </form>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        details: '',
      }
    },
    methods: {
      handleSubmit() {
        console.log(this.title, this.details)
        const project = {
          title: this.title,
          details: this.details,
          complete: false,
        }

        fetch('http://localhost:3000/projects', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(project),
        })
          .then(() => this.$router.push('/'))
          .catch((err) => console.log(err))
      },
    },
  }
</script>

<style>
  form {
    background-color: var(--white-color);
    padding: 2.5rem 1.5rem;
    border-radius: 0.8rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    box-shadow: -3px 03px 5px rgba(0, 0, 0, 0.1);
  }

  label {
    margin-bottom: 0.75rem;
    text-transform: uppercase;
    color: #bbb;
    font-weight: bold;
  }

  input,
  textarea {
    margin-bottom: 2rem;
    padding: 0.5rem;
    font-size: 1rem;
    font-family: sans-serif;
    color: #777;
  }

  input {
    border: none;
    border-bottom: 2px solid #bbb;
  }

  textarea {
    border: 2px solid #bbb;
    min-height: 7rem;
  }

  button {
    align-self: center;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    border: none;
    background-color: var(--accent-color);
    color: var(--white-color);
    font-size: 1rem;
    text-transform: capitalize;
    box-shadow: 0 1rem 1rem -0.9rem rgba(228, 5, 116, 0.5);
    cursor: pointer;
    transition: var(--transition);
  }

  button:hover {
    box-shadow: 0 0 0.25rem rgba(233, 0, 116, 0.5);
    background-color: rgb(204, 0, 102);
    transform: scale(0.99);
  }
</style>
