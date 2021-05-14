<template>
  <div class="add-smoothie container">
    <h2 class="center-align purple-text text-darken-4">
      Add New Smoothie Recipe
    </h2>
    <form @submit.prevent="addSmoothie">
      <div class="field title">
        <label for="title">Smoothie Title:</label>
        <input type="text" id="title" v-model="title" />
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
            v-for="(ing, index) in ingredients"
            :key="index"
            @click="deleteIng"
          >
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>
      <div class="field center-align">
        <p class="red-text" v-if="feedback">{{ feedback }}</p>
        <button class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
  import slugify from 'slugify'
  import db from '@/database/init'

  export default {
    data() {
      return {
        title: null,
        newIng: null,
        ingredients: [],
        feedback: null,
      }
    },
    methods: {
      addSmoothie() {
        if (this.title) {
          this.feedback = null
          let slug = slugify(this.title, {
            replacement: '-',
            remove: /[$*_+~.()'"!\-:@]/g,
            lower: true,
          })
          db.collection('smoothies')
            .add({
              title: this.title,
              ingredients: this.ingredients,
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
      addIng(e) {
        if (this.newIng) {
          this.feedback = null
          if (!this.ingredients.includes(this.newIng)) {
            this.ingredients.push(this.newIng)
          }
          this.newIng = null
        } else {
          this.feedback = 'You must enter a value to add an ingredient'
        }
      },
      deleteIng(e) {
        this.ingredients = this.ingredients.filter(
          (ing) => ing !== e.target.innerText
        )
      },
    },
  }
</script>

<style>
  .add-smoothie {
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;
  }

  .add-smoothie h2 {
    font-size: 2em;
    margin: 20px auto;
  }

  .add-smoothie .field {
    margin: 20px auto;
  }

  .add-ingredient ul {
    display: flex;
    flex-wrap: wrap;
  }

  .add-ingredient li {
    cursor: pointer;
  }
</style>
