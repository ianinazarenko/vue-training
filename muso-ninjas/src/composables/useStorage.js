import { ref } from 'vue'
import { storage } from '../data/config'
import getUser from './getUser'

const { user } = getUser()

function useStorage() {
  const error = ref(null)
  const url = ref(null)
  const filePath = ref(null)

  async function uploadImage(file) {
    filePath.value = `covers/${user.value.uid}/${file.name}`
    const storageRef = storage.ref(filePath.value)

    try {
      const response = await storageRef.put(file)
      url.value = response.ref.getDownloadURL()
    } catch (err) {
      console.log(err.message)
      error.value = err.message
    }
  }

  return { error, url, filePath, uploadImage }
}

export default useStorage
