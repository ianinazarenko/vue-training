<template>
  <nav>
    <div>
      <p>Hey there... [display name]</p>
      <p class="email">Currently logged in as... [email]</p>
    </div>
    <button @click="handleClick">Log out</button>
  </nav>
</template>

<script>
import useLogout from '@/composables/useLogout'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const { error, logout } = useLogout()
    const router = useRouter()

    async function handleClick() {
      await logout()
      if (!error.value) {
        console.log('user log out')
        router.push({ name: 'Welcome' })
      }
    }
    return { handleClick }
  },
}
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
