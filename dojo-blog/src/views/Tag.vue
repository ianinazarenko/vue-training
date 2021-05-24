<template>
  <div v-if="taggedPosts.length">
    <PostList :posts="taggedPosts" />
  </div>
  <div v-if="!taggedPosts.length && !error">
    <Spinner />
  </div>
  <div v-if="error" class="red-text">
    {{ error.message }}
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import getPosts from '@/composables/getPosts'
import PostList from '@/components/PostList'
import Spinner from '@/components/Spinner'

export default {
  components: { PostList, Spinner },
  setup() {
    const currentTag = useRoute().params.tag
    const { posts, error, load } = getPosts()
    load()

    const taggedPosts = computed(() =>
      posts.value.filter((post) => post.tags.includes(currentTag))
    )

    return { taggedPosts, error, posts }
  },
}
</script>

<style scoped></style>
