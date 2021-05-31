import { ref } from 'vue'
import { auth } from '../data/config'

const error = ref(null)

async function logout() {
  error.value = null

  try {
    await auth.signOut()
  } catch (err) {
    error.value = err.message
    console.log(err.message)
  }
}

function useLogout() {
  return { error, logout }
}

export default useLogout
