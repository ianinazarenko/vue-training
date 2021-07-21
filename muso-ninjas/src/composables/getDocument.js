import { ref, watchEffect } from 'vue'
import { firestore } from '@/data/config'

function getDocument(collection, id) {
  const document = ref(null)
  const error = ref(null)

  const documentRef = firestore.collection(collection).doc(id)
  const unsub = documentRef.onSnapshot(
    doc => {
      if (doc.data()) {
        document.value = { ...doc.data(), id: doc.id }
        error.value = null
      } else {
        error.value = 'That ducumnet does not exist'
      }
    },
    err => {
      console.log(err.message)
      document.value = null
      error.value = err.message
    }
  )

  // unsubscribe from documentRef before the element that uses getDocument unmounts
  watchEffect(onInvalidate => {
    onInvalidate(() => unsub())
  })

  return { document, error }
}

export default getDocument
