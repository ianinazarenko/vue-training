<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add New Project</router-link>
  </div>
  <hr />
  <router-view />
</template>

<style>
  :root {
    --main-color: rgb(87, 105, 119);
    --accent-color: rgb(233, 0, 116);
    --white-color: #fff;
    --transition: all 0.3s ease-out;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 18px;
  }

  body {
    background-color: #eee;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 600px;
    margin: 2rem auto;
    color: var(--main-color);
  }

  #nav {
    text-align: center;
    padding-bottom: 1.5rem;
  }

  hr {
    border: 1px solid var(--accent-color);
  }

  #nav a {
    margin: 0 2rem;
  }

  #nav a:hover {
    color: var(--accent-color);
    text-shadow: 0 0 0.5rem rgba(233, 0, 116, 0.2);
  }

  a {
    text-decoration: none;
    color: var(--main-color);
    font-weight: bold;
  }

  .section {
    padding: 3rem 0;
  }

  .router-link-active {
    color: var(--accent-color);
  }

  #nav a:active {
    color: var(--white-color);
  }
</style>
