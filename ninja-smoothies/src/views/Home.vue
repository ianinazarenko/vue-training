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
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        smoothies: [
          {
            title: 'Ninja Brew',
            slug: 'ninja-brew',
            ingredients: ['bananas', 'coffee', 'milk'],
            id: '1',
          },
          {
            title: 'Morning Mood',
            slug: 'morning-mood',
            ingredients: ['mango', 'lime', 'juice'],
            id: '2',
          },
        ],
      }
    },
    methods: {
      deleteSmoothie(id) {
        this.smoothies = this.smoothies.filter((item) => item.id !== id)
      },
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
