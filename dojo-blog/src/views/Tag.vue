<template>
  <div class="tag">
    <div v-if="postsWithTag.length" class="layout">
      <PostList :posts="postsWithTag" />
      <TagsCloud :posts="posts" />
    </div>
    <div v-if="!postsWithTag.length && !error">
      <Spinner />
    </div>
    <div v-if="error" class="red-text">
      {{ error.message }}
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import getPosts from '@/composables/getPosts'
import PostList from '@/components/PostList'
import Spinner from '@/components/Spinner'
import TagsCloud from '@/components/TagsCloud'

export default {
  components: { PostList, Spinner, TagsCloud },
  setup() {
    const route = useRoute()
    const { posts, error, load } = getPosts()
    load()

    const postsWithTag = computed(() =>
      posts.value.filter((post) => post.tags.includes(route.params.tag))
    )

    return { postsWithTag, error, posts }
  },
}
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
