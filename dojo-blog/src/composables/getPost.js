import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

export default function getPost(id) {
  const post = ref(null)
  const error = ref(null)

  async function load() {
    try {
      const response = await projectFirestore
        .collection('posts')
        .doc(id)
        .get()

      if (!response.exists) {
        throw new Error('There is no such post')
      }

      post.value = { ...response.data(), id: response.id }
    } catch (err) {
      console.log('Error!: ' + err.message)
      error.value = err.message
    }
  }

  return { post, error, load }
}
