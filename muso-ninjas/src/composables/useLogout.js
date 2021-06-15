import { ref } from 'vue'
import { auth } from '../data/config'

const error = ref(null)
const isPending = ref(false)

async function logout() {
  error.value = null
  isPending.value = true

  try {
    await auth.signOut()
  } catch (err) {
    error.value = err.message
    console.log(err.message)
  } finally {
    isPending.value = false
  }
}

function useLogout() {
  return { error, logout, isPending }
}

export default useLogout
