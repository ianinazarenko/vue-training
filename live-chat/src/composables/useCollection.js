import { ref } from 'vue'
import { firestore } from '@/data/config'

function useCollection(collection) {
  const error = ref(null)

  async function addDoc(doc) {
    error.value = null

    try {
      await firestore.collection(collection).add(doc)
    } catch (err) {
      console.log(err.message)
      error.value = err.message
    }
  }

  return { error, addDoc }
}

export default useCollection
