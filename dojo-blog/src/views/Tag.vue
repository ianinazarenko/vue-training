<template>
  <div class="tag">
    <div v-if="taggedPosts.length" class="layout">
      <PostList :posts="taggedPosts" />
      <TagsCloud :posts="posts" />
    </div>
    <div v-if="!taggedPosts.length && !error">
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

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
