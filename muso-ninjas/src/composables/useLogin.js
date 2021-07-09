import { ref } from 'vue'
import { auth } from '../data/config'
import getUser from './getUser'

const error = ref(null)
const isPending = ref(false)

async function login(email, password) {
  error.value = null
  isPending.value = true

  try {
    const response = await auth.signInWithEmailAndPassword(email, password)
    console.log('useLogin login response', response)

    if (!response) {
      throw new Error('Could not log in')
    }
    error.value = null
    return response
  } catch (err) {
    console.log(err.message)
    error.value = err.message
  } finally {
    isPending.value = false
  }
}

function useLogin() {
  return { error, login, isPending }
}

export default useLogin
