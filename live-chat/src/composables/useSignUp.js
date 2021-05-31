import { ref } from 'vue'
import { auth } from '../data/config'

const error = ref(null)

async function signUp(email, password, displayName) {
  error.value = null

  try {
    const response = await auth.createUserWithEmailAndPassword(email, password)
    if (!response) {
      throw new Error('Could not complete the sign up')
    }
    await response.user.updateProfile({ displayName })
    error.value = null
    return response
  } catch (err) {
    console.log(err.message)
    error.value = err.message
  }
}

function useSignUp() {
  return { error, signUp }
}

export default useSignUp
