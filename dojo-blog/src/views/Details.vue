<template>
  <p v-if="error">{{ error }}</p>
  <div v-if="post" class="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
  <h2 v-if="!post && !error">
    <Spinner />
  </h2>
</template>

<script>
import getPost from '@/composables/getPost'
import Spinner from '@/components/Spinner'

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    console.log(props.id)
    const { post, error, load } = getPost(props.id)
    load()

    return { post, error }
  },
}
</script>

<style>
.post {
  max-width: 600px;
  margin: 3rem auto;
}
</style>
