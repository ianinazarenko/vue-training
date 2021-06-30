<template>
  <form @submit.prevent="handleSubmit">
    <h4>Create New Playlist</h4>
    <input type="text" v-model="title" placeholder="Playlist title" required />
    <textarea
      v-model="description"
      placeholder="Playlist description..."
      required
    ></textarea>
    <label for="cover">Upload paylist cover image</label>
    <input
      type="file"
      id="cover"
      @change="handleFileUpload"
      accept="image/jpeg,image/png"
    />
    <div class="error">{{ fileError }}</div>
    <div class="error">{{ error }}</div>
    <button type="submit">Create</button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const title = ref('')
    const description = ref('')
    const error = ref(null)

    function handleSubmit() {
      if (file.value) {
        console.log(title.value, description.value)
      }
    }

    // File handling
    const fileError = ref(null)
    const file = ref(null)

    const allowedImgTypes = ['image/png', 'image/jpeg']

    function handleFileUpload(e) {
      const selected = e.target.files[0]

      if (selected && allowedImgTypes.includes(selected.type)) {
        file.value = selected
        const reader = new FileReader()
        reader.readAsDataURL(file.value)
        reader.onload = () => {}
        reader.onerror = () => {
          fileError.value = reader.error
        }
      } else {
        file.value = null
        fileError.value = 'Please, select an image file (png or jpg)'
      }
    }

    return {
      title,
      description,
      handleSubmit,
      error,
      fileError,
      handleFileUpload,
    }
  },
}
</script>

<style>
input[type='file'] {
  border: none;
  padding: 0;
}
label {
  font-size: 0.75rem;
  display: block;
  margin-top: 2rem;
}
button {
  margin-top: 1.5rem;
}
</style>
