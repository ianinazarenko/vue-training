<template>
  <div class="project" :class="{ completed: project.complete }">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
      <div class="icons">
        <span class="material-icons" id="edit"> edit </span>
        <span class="material-icons" id="delete" @click="deleteItem"
          >delete</span
        >
        <span class="material-icons tick" id="done" @click="complete"
          >done</span
        >
      </div>
    </div>
    <p v-if="showDetails" class="details">{{ project.details }}</p>
  </div>
</template>

<script>
  export default {
    props: ['project'],
    data() {
      return {
        showDetails: false,
        uri: 'http://localhost:3000/projects/' + this.project.id,
      }
    },
    methods: {
      deleteItem() {
        fetch(this.uri, { method: 'DELETE' }).then(() =>
          this.$emit('delete', this.project.id).catch((err) => console.log(err))
        )
      },
      complete() {
        fetch(this.uri, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...this.project,
            complete: !this.project.complete,
          }),
        }).then(() => this.$emit('complete', this.project.id))
      },
    },
  }
</script>

<style>
  .project {
    width: 100%;
    margin-bottom: 2.5rem;
    padding: 1.5rem 2rem;
    background-color: var(--white-color);
    background: linear-gradient(to right, #ddd 50%, #fff 50%);
    background-size: 200% 100%;
    background-position: 100% 0;
    border-radius: 8px;
    border-left: 8px solid var(--accent-color);
    box-shadow: -3px 03px 5px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
  }
  .project p {
    text-align: left;
  }

  .project h3 {
    transition: var(--transition);
    cursor: pointer;
  }

  .material-icons {
    transition: var(--transition);
    cursor: pointer;
    font-size: 1.5rem;
    margin: 0.5rem;
  }

  .material-icons:hover {
    transform: scale(1.1);
  }

  #edit:hover {
    color: orange;
  }

  #delete:hover {
    color: red;
  }

  #done:hover {
    color: forestgreen;
  }

  .actions {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }

  .details {
    margin-top: 1rem;
  }

  .completed {
    background-color: #ddd;
    border-left-color: #aaa;
    background-position: 0 0;
  }

  .completed .tick {
    color: forestgreen;
  }

  .completed h3 {
    text-decoration: line-through;
    text-decoration-thickness: 0.125rem;
  }
</style>
