<template>
  <div class="spin"></div>
</template>

<style>
.spin {
  width: 40px;
  height: 40px;
  margin: 2rem auto;
  /* background: teal; */
  border: 3px solid rgb(197, 228, 228);
  border-top-color: teal;
  border-radius: 50%;
  animation: spinner 1s ease-in-out infinite;
}

@keyframes spinner {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
