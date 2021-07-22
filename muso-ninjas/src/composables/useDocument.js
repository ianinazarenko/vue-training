import { ref } from 'vue'
import { firestore } from '@/data/config'

function useDocument(collection, id) {
  const error = ref(null)
  const isPending = ref(false)

  let docRef = firestore.collection(collection).doc(id)

  async function deleteDoc() {
    error.value = null
    isPending.value = true

    try {
      const res = await docRef.delete()
      return res
    } catch (err) {
      console.log(err.message)
      error.value = 'Could not delete document'
    } finally {
      isPending.value = false
    }
  }

  return { error, isPending, deleteDoc }
}

export default useDocument
