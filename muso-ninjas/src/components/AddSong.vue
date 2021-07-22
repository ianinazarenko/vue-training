<template>
  <div class="add-song">
    <button v-if="!showForm" @click="showForm = true">Add song</button>
    <form v-else @submit.prevent="onSubmit">
      <input type="text" placeholder="Song title" v-model="title" required />
      <input type="text" placeholder="Artist" v-model="artist" required />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useDocument } from '@/composables'

export default {
  props: ['playlist'],
  setup(props) {
    const title = ref(null)
    const artist = ref(null)
    const showForm = ref(false)
    const { updateDoc } = useDocument('playlists', props.playlist.id)

    async function onSubmit() {
      const newSong = {
        title: title.value,
        artist: artist.value,
        id: new Date().getTime(),
      }
      const res = await updateDoc({ songs: [...props.playlist.songs, newSong] })
      title.value = null
      artist.value = null
      console.log(res)
    }

    return { title, artist, showForm, onSubmit }
  },
}
</script>

<style scoped>
.add-song {
  text-align: center;
  margin-top: 40px;
}
form {
  max-width: 100%;
  text-align: left;
}
</style>
