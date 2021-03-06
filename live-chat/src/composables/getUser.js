import { ref } from 'vue'
import { auth } from '../data/config'

const user = ref(auth.currentUser)

auth.onAuthStateChanged((_user) => {
  // console.log('User state changed. Current user is: ', _user)
  user.value = _user
})

function getUser() {
  return { user }
}

export default getUser
