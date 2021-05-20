<template>
  <div v-for="post in posts" :key="post.id">
    <Post :post="post" />
  </div>
</template>

<script>
import Post from '@/components/Post'

export default {
  props: ['posts'],
  components: { Post },
}
</script>

<style></style>
