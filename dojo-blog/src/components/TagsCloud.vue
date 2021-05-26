<template>
  <div class="tags-cloud">
    <h3>Tags</h3>
    <div>
      <span v-for="tag in tags" :key="tag">
        <router-link :to="{ name: 'Tag', params: { tag: tag } }">
          #{{ tag }}
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: ['posts'],
  setup(props) {
    const tags = ref([])
    const tagsSet = new Set()
    props.posts.forEach((post) => post.tags.forEach((tag) => tagsSet.add(tag)))
    tags.value = [...tagsSet]

    return { tags }
  },
}
</script>

<style>
.tags-cloud {
  padding: 10px;
}
.tags-cloud h3 {
  border-bottom: 1px solid #eee;
  padding: 16px 8px;
  color: #444;
}
.tags-cloud span {
  display: inline-block;
  padding: 10px;
}
.tags-cloud a {
  color: #ccc;
  text-decoration: none;
}
.tags-cloud a.router-link-active {
  color: #ff8800;
  font-weight: bold;
}
</style>
