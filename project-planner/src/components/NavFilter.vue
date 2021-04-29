<template>
  <nav class="filter-nav">
    <button @click="updateFilter('all')" :class="{ active: filter === 'all' }">
      all
    </button>
    <button
      @click="updateFilter('completed')"
      :class="{ active: filter === 'completed' }"
    >
      completed
    </button>
    <button
      @click="updateFilter('ongoing')"
      :class="{ active: filter === 'ongoing' }"
    >
      ongoing
    </button>
  </nav>
</template>

<script>
  export default {
    props: ['filter'],
    data() {},
    methods: {
      updateFilter(by) {
        this.$emit('change:filter', by)
      },
    },
  }
</script>

<style>
  .filter-nav button {
    margin: 1rem;
    margin-top: 0;
    padding-bottom: 0.25rem;
    font-size: 0.8rem;
    text-transform: capitalize;
    background: none;
    color: var(--main-color);
    border: none;
    border-bottom: 2px solid transparent;
    transition: var(--transition);
    cursor: pointer;
  }

  .filter-nav button:hover {
    border-bottom: 2px solid var(--main-color);
  }

  .filter-nav button:active {
    color: var(--accent-color);
    border-bottom: 2px solid var(--accent-color);
  }

  .filter-nav button.active {
    border-bottom: 2px solid var(--accent-color);
  }
</style>
