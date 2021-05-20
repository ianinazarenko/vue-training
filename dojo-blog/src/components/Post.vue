<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <div>
      <span v-for="tag in post.tags">#{{ tag }}</span>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      const text = props.post.body
      if (text.length > 100) {
        return text.substring(0, 100) + '...'
      } else {
        return text
      }
    })

    return { snippet }
  },
}
</script>

<style scoped>
span {
  margin-right: 10px;
}
</style>
