<template>
  <div>
    <Post v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import Post from '@/components/Post'
import { isReactive } from 'vue'

export default {
  props: ['posts'],
  components: { Post },
}
</script>

<style></style>
