import { ref } from 'vue'

export default function getPosts() {
  const posts = ref([])
  const error = ref(null)

  async function load() {
    try {
      // await new Promise((resolve) => setTimeout(() => resolve(), 2000))
      const response = await fetch('http://localhost:3000/posts')

      if (!response.ok) {
        throw new Error('no data availiable')
      }
      posts.value = await response.json()
    } catch (err) {
      console.log('Error!: ' + err.message)
      error.value = err.message
    }
  }

  return { posts, error, load }
}
