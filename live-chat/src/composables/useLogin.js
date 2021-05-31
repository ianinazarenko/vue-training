import { ref } from 'vue'
import { auth } from '../data/config'

const error = ref(null)

async function login(email, password) {
  error.value = null

  try {
    const response = await auth.signInWithEmailAndPassword(email, password)
    if (!response) {
      throw new Error('Could not log in')
    }
    error.value = null
    return response
  } catch (err) {
    console.log(err.message)
    error.value = err.message
  }
}

function useLogin() {
  return { error, login }
}

export default useLogin
