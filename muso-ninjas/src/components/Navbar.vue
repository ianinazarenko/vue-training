<template>
  <div class="navbar">
    <nav>
      <h1>
        <router-link :to="{ name: 'Home' }">Muso Ninjas</router-link>
      </h1>
      <div class="links">
        <div v-if="user">
          <button @click="handleLogout">Logout</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'Login' }">Log In</router-link>
          <router-link class="btn" :to="{ name: 'Signup' }"
            >Sign Up</router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useLogout, getUser } from '@/composables'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const { logout } = useLogout()
    const router = useRouter()
    const user = getUser()

    console.log(user.value)

    async function handleLogout() {
      const response = await logout()
      console.log('user log out', response)
      router.push({ name: 'Login' })
    }

    return { handleLogout, user }
  },
}
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav img {
  max-height: 60px;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
</style>
