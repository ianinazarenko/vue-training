<template>
  <div v-if="error" class="error">{{ error }}</div>
  <div v-if="document" class="playlist-details">
    <!-- playlist info -->
    <div class="playlist-info">
      <div class="cover">
        <img :src="document.coverUrl" />
      </div>
      <h2>{{ document.title }}</h2>
      <p class="username">Created by {{ document.userName }}</p>
      <p class="description">{{ document.description }}</p>
      <button v-if="ownership" @click="handleDelete">Delete</button>
    </div>

    <!-- song list -->
    <div class="song-list">song list here</div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { getDocument, getUser, useDocument, useStorage } from '@/composables'
import { useRouter } from 'vue-router'

export default {
  props: ['id'],
  setup(props) {
    const { document, error } = getDocument('playlists', props.id)
    const { user } = getUser()

    const ownership = computed(() => {
      return (
        document.value && user.value && user.value.uid === document.value.userID
      )
    })

    // Delete playlist
    const { deleteDoc } = useDocument('playlists', props.id)
    const { deleteImage } = useStorage()
    const router = useRouter()

    async function handleDelete() {
      await deleteImage(document.value.filePath)
      await deleteDoc()
      router.push({ name: 'Home' })
    }

    return { document, error, ownership, handleDelete }
  },
}
</script>

<style>
.playlist-details {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
}
.cover {
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  padding: 160px;
}
.cover img {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
}
.playlist-info {
  text-align: center;
}
.playlist-info h2 {
  text-transform: capitalize;
  font-size: 28px;
  margin-top: 20px;
}
.playlist-info p {
  margin-bottom: 20px;
}
.username {
  color: #999;
}
.description {
  text-align: left;
}
</style>
