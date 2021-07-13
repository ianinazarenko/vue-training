<template>
  <div class="home">
    <div v-if="error" class="error">Could not fetch the data</div>
    <div v-if="documents && !error">
      <div v-for="doc in documents" :key="doc.id">{{ doc.title }}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getCollection } from '@/composables'

export default {
  name: 'Home',
  components: {},
  setup() {
    const { documents, error } = getCollection('playlists')

    return { documents, error }
  },
}
</script>
