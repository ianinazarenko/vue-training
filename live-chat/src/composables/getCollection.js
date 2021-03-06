import { ref, watchEffect } from 'vue'
import { firestore } from '@/data/config'

function getCollection(collection) {
  const documents = ref(null)
  const error = ref(null)

  const collectionRef = firestore.collection(collection).orderBy('createdAt')
  const unsub = collectionRef.onSnapshot(
    (snap) => {
      const results = []
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
      })
      documents.value = results
      error.value = null
    },
    (err) => {
      console.log(err.message)
      documents.value = null
      error.value = err.message
    }
  )

  // unsubscribe from collectionRef before the element that uses getCollection unmounts
  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
  })

  return { documents, error }
}

export default getCollection
