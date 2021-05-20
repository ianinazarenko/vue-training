<template>
  <div class="home">
    <h1>Home</h1>
    <p v-if="error">{{ error }}</p>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <h3 v-else>
      <Spinner />
    </h3>
  </div>
  <router-link :to="{ name: 'Create' }">
    <button>Create New Post</button>
  </router-link>
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
ul {
  list-style: none;
  padding: 0;
}
</style>
