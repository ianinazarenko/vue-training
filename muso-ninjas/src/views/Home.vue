<template>
  <div class="home">
    <div v-if="error" class="error">Could not fetch the data</div>
    <div v-if="documents && !error">
      <ListView :playlists="documents" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getCollection } from '@/composables'
import ListView from '@/components/ListView'

export default {
  name: 'Home',
  components: { ListView },
  setup() {
    const { documents, error } = getCollection('playlists')

    return { documents, error }
  },
}
</script>
