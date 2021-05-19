<template>
  <div class="home container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)"
          >delete</i
        >
        <h2 class="purple-text text-darken-4">{{ smoothie.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>
      <span class="btn-floating btn-large halfway-fab pink">
        <router-link
          :to="{ name: 'Edit', params: { smoothie_slug: smoothie.slug } }"
        >
          <i class="material-icons">edit</i>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
  import db from '@/database/init'
  import AddNewSmoothie from '@/views/AddNewSmoothie'

  export default {
    components: { AddNewSmoothie },
    data() {
      return {
        smoothies: [],
      }
    },
    methods: {
      deleteSmoothie(id) {
        db.collection('smoothies')
          .doc(id)
          .delete()
          .then(
            () =>
              (this.smoothies = this.smoothies.filter((item) => item.id !== id))
          )
      },
    },
    created() {
      // fetch data from database
      db.collection('smoothies')
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            let smoothie = doc.data()
            smoothie.id = doc.id
            this.smoothies.push(smoothie)
          })
        })
    },
  }
</script>

<style>
  .home {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-top: 60px;
  }
  .home h2 {
    font-size: 2em;
  }
  .home .ingredients {
    display: flex;
    flex-wrap: wrap;
  }
  .home .card-content {
    position: relative;
  }
  .home .delete {
    position: absolute;
    top: 18px;
    right: 18px;
    cursor: pointer;
    color: #aaa;
    font-size: 1.4em;
  }
</style>
