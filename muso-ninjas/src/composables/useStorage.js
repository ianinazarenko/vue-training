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
      url.value = await response.ref.getDownloadURL()
    } catch (err) {
      console.log(err.message)
      error.value = err.message
    }
  }

  async function deleteImage(path) {
    const storageRef = storage.ref(path)

    try {
      await storageRef.delete()
    } catch (err) {
      console.log(err.message)
      error.value = 'Could not delete image'
    }
  }

  return { error, url, filePath, uploadImage, deleteImage }
}

export default useStorage
