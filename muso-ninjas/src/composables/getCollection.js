import { ref, watchEffect } from 'vue'
import { firestore } from '@/data/config'

function getCollection(collection, query) {
  const documents = ref(null)
  const error = ref(null)

  let collectionRef = firestore.collection(collection).orderBy('createdAt')

  if (query) {
    collectionRef = collectionRef.where(...query)
  }
  const unsub = collectionRef.onSnapshot(
    snap => {
      const results = []
      snap.docs.forEach(doc => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
      })
      console.log(results)
      documents.value = results
      error.value = null
    },
    err => {
      console.log(err.message)
      documents.value = null
      error.value = err.message
    }
  )

  // unsubscribe from collectionRef before the element that uses getCollection unmounts
  watchEffect(onInvalidate => {
    onInvalidate(() => unsub())
  })

  return { documents, error }
}

export default getCollection
