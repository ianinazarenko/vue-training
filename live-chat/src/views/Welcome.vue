<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="toSignUp">
      <h2>Sign Up</h2>
      <SignUpForm />
      <p>
        Already have an account?
        <span @click="toSignUp = false">Log In</span> then
      </p>
    </div>
    <div v-else>
      <h2>Log in</h2>
      <LogInForm />
      <p>
        No account yet?
        <span @click="toSignUp = true">Sign Up</span> then
      </p>
    </div>
  </div>
</template>

<script>
import SignUpForm from '@/components/SignUpForm'
import LogInForm from '@/components/LogInForm'
import { ref } from 'vue'

export default {
  components: { SignUpForm, LogInForm },
  setup() {
    const toSignUp = ref(false)

    function onClick() {
      toSignUp.value = !toSignUp.value
    }

    return { toSignUp, onClick }
  },
}
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
</style>
