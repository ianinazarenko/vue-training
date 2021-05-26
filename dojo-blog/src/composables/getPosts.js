import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'

export default function getPosts() {
  const posts = ref([])
  const error = ref(null)

  async function load() {
    try {
      const response = await projectFirestore
        .collection('posts')
        .orderBy('createdAt', 'desc')
        .get()
      response.docs.forEach((doc) =>
        posts.value.push({ ...doc.data(), id: doc.id })
      )
    } catch (err) {
      console.log('Error!: ' + err.message)
      error.value = err.message
    }
  }

  return { posts, error, load }
}
