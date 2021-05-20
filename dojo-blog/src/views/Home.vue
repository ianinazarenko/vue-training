<template>
  <div class="home">
    <p v-if="error">{{ error }}</p>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <h3 v-else>
      <Spinner />
    </h3>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from '@/components/PostList'
import getPosts from '@/composables/getPosts'
import Spinner from '@/components/Spinner'

export default {
  name: 'Home',
  components: { PostList, Spinner },
  setup() {
    const { posts, error, load } = getPosts()
    load()

    return { posts, error }
  },
}
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
