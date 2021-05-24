<template>
  <div class="home">
    <p v-if="error">{{ error }}</p>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagsCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from '@/components/PostList'
import getPosts from '@/composables/getPosts'
import Spinner from '@/components/Spinner'
import TagsCloud from '@/components/TagsCloud'
import { ref } from 'vue'

export default {
  name: 'Home',
  components: { PostList, Spinner, TagsCloud },
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
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
