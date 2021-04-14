<template>
  <form>
    <label for="email">Email :</label>
    <input type="email" name="email" id="email" required v-model="email" />
    <label for="password">Password :</label>
    <input type="password" name="password" id="password" required />
    <label for="role">Role:</label>
    <select name="role" id="role" v-model="role">
      <option value="developer">Developer</option>
      <option value="designer">Designer</option>
      <option value="manager">Manager</option>
    </select>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        email: 'developer@mail.co.uk',
        password: '',
        role: 'developer',
      };
    },
  };
</script>

<style>
  form {
    background-color: #fff;
    max-width: 36rem;
    margin: 4rem auto;
    padding: 5rem 3rem;
    text-align: left;
    border-radius: 1.5rem;
    box-shadow: 0.25rem 0.25rem 1.5rem rgba(0, 0, 0, 0.15);
  }

  label {
    display: block;
    text-transform: uppercase;
    color: #bbb;
    font-size: 0.875rem;
    font-weight: bold;
    letter-spacing: 1px;
    /* padding-left: 0.5rem; */
    margin-bottom: 0.5rem;
  }

  input,
  select {
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-bottom: 2px solid #999;
    color: #666;
    font-size: 1rem;
    margin-bottom: 3rem;
  }
</style>
