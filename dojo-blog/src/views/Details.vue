<template>
  <p v-if="error">{{ error }}</p>
  <div v-if="post" class="post">
    <h1>{{ post.title }}</h1>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleClick">Delete</button>
  </div>
  <h2 v-if="!post && !error">
    <Spinner />
  </h2>
</template>

<script>
import getPost from '@/composables/getPost'
import Spinner from '@/components/Spinner'
import { projectFirestore } from '@/firebase/config'
import { useRouter } from 'vue-router'

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const router = useRouter()
    const { post, error, load } = getPost(props.id)
    load()
    console.log(props.id)
    console.log(post.value)

    async function handleClick(e) {
      await projectFirestore
        .collection('posts')
        .doc(props.id)
        .delete()

      router.push({ name: 'Home' })
    }

    return { post, error, handleClick }
  },
}
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>
