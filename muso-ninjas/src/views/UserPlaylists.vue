<template>
  <div class="user-playlists">
    <h2>My playlists</h2>
    <div v-if="playlists">
      <ListView :playlists="playlists" />
    </div>
    <router-link :to="{ name: 'CreatePlaylist' }"
      >Create a new playlist</router-link
    >
  </div>
</template>

<script>
import { getCollection, getUser } from '@/composables'
import ListView from '@/components/ListView'

export default {
  components: { ListView },
  setup() {
    const { user } = getUser()
    const { documents: playlists } = getCollection('playlists', [
      'userID',
      '==',
      user.value.uid,
    ])

    return { playlists }
  },
}
</script>

<style></style>
