import { ref } from 'vue'
import { firestore } from '@/data/config'

function useCollection(collection) {
  const error = ref(null)
  const isPending = ref(false)

  async function addDoc(doc) {
    error.value = null
    isPending.value = true

    try {
      const response = await firestore.collection(collection).add(doc)
      return response
    } catch (err) {
      console.log(err.message)
      error.value = err.message
    } finally {
      isPending.value = false
    }
  }

  return { error, addDoc, isPending }
}

export default useCollection
