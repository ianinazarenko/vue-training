<template>
  <div class="edit-smoothie container" v-if="smoothie">
    <h2>
      Edit <b>{{ smoothie.title }}</b>
    </h2>
    <form @submit.prevent="editSmoothie">
      <div class="field title">
        <label for="title">Smoothie Title:</label>
        <input type="text" id="title" v-model="smoothie.title" />
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an ingredient (tab to add one):</label>
        <input
          type="text"
          id="add-ingredient"
          @keydown.tab.prevent="addIng"
          v-model="newIng"
        />
        <ul>
          <li
            v-for="(ing, index) in smoothie.ingredients"
            :key="index"
            @click="deleteIng"
          >
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>
      <div class="field center-align">
        <p class="red-text" v-if="feedback">{{ feedback }}</p>
        <button class="btn pink">Submit Changes</button>
      </div>
    </form>
  </div>
</template>

<script>
  import db from '@/database/init'
  import slugify from 'slugify'

  export default {
    name: 'EditSmoothie',
    data() {
      return {
        smoothie: null,
        newIng: null,
        feedback: null,
      }
    },
    methods: {
      editSmoothie() {
        console.log(this.smoothie.title)
        console.log(this.smoothie.ingredients)
        if (this.smoothie.title) {
          this.feedback = null
          const slug = slugify(this.smoothie.title, {
            replacement: '-',
            remove: /[$*_+~.()'"!\-:@]/g,
            lower: true,
          })
          db.collection('smoothies')
            .doc(this.smoothie.id)
            .update({
              title: this.smoothie.title,
              ingredients: this.smoothie.ingredients,
              slug,
            })
            .then(() => {
              this.$router.push({ name: 'Home' })
            })
            .catch((err) => console.log(err))
        } else {
          this.feedback = 'You must enter a smoothie title'
        }
      },
      addIng() {
        if (this.newIng) {
          this.feedback = null
          if (!this.smoothie.ingredients.includes(this.newIng)) {
            this.smoothie.ingredients.push(this.newIng)
          }
          this.newIng = null
        } else {
          this.feedback = 'You must enter a value to add an ingredient'
        }
      },
      deleteIng(e) {
        this.smoothie.ingredients = this.smoothie.ingredients.filter(
          (ing) => ing !== e.target.innerText
        )
      },
    },
    created() {
      const ref = db
        .collection('smoothies')
        .where('slug', '==', this.$route.params.smoothie_slug)

      ref.get().then((snapshot) => {
        {
          snapshot.forEach((doc) => {
            this.smoothie = doc.data()
            this.smoothie.id = doc.id
          })
        }
      })
    },
  }
</script>

<style></style>
