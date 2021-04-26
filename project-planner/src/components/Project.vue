<template>
  <div class="project">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
      <div class="icons">
        <span class="material-icons-outlined">
          done
        </span>
        <span class="material-icons-outlined">
          edit
        </span>
        <span class="material-icons-outlined">
          &#xE87C;
        </span>
      </div>
    </div>
    <p v-if="showDetails">{{ project.details }}</p>
  </div>
</template>

<script>
  export default {
    props: ['project'],
    data() {
      return {
        showDetails: false,
      }
    },
  }
</script>

<style>
  .project {
    width: 100%;
    /* height: 7rem; */
    margin-bottom: 2.5rem;
    padding: 1.5rem 2rem;
    background-color: var(--white-color);
    border-radius: 8px;
    border-left: 8px solid var(--accent-color);
    box-shadow: -3px 03px 5px rgba(0, 0, 0, 0.1);
  }
  .project p {
    text-align: left;
  }

  .project h3 {
    margin-bottom: 1rem;
    transition: var(--transition);
    cursor: pointer;
  }
</style>
