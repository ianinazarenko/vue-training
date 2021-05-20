<template>
  <div class="create">
    <form @submit.prevent="addPost">
      <label for="title">Title:</label>
      <input type="text" id="title" required v-model="title" />
      <label for="content">Content:</label>
      <textarea type="text" id="content" required v-model="content" />
      <label for="tags">Tags (hit enter to add a tag)</label>
      <input
        type="text"
        id="tags"
        v-model="tag"
        @keydown.enter.prevent="addTag"
      />
      <div v-for="tag in tags" :key="tag" class="pill">#{{ tag }}</div>
      <button type="submit">Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const title = ref(null)
    const content = ref(null)
    const tag = ref(null)
    const tags = ref([])

    const router = useRouter()

    function addTag(e) {
      const newTag = e.target.value
      if (newTag && !tags.value.includes(newTag)) {
        newTag.replace(/\s/, '')
        tags.value.push(newTag)
      } else if (!newTag) {
        console.log('You must enter some value')
      }
      tag.value = null
    }

    async function addPost(e) {
      const post = {
        title: title.value,
        body: content.value,
        tags: tags.value,
      }
      try {
        await fetch('http://localhost:3000/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(post),
        })
        router.push('/')
      } catch (error) {
        console.log(error)
      }
    }

    return { title, content, tag, tags, addTag, addPost }
  },
}
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  transform: rotateZ(-1.5deg);
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  transform: rotateZ(3.5deg);
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
