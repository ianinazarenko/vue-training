<template>
  <div class="container">
    <Navbar />
    <NewMessage />
  </div>
</template>

<script>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '@/components/Navbar'
import NewMessage from '@/components/NewMessage'
import getUser from '@/composables/getUser'

export default {
  components: { Navbar, NewMessage },
  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {
      if (!user.value) router.push({ name: 'Welcome' })
    })
  },
}
</script>

<style></style>
