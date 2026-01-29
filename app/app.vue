<script setup>
import AirplaneScene from "~/components/AirplaneScene.vue";
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
    rel="stylesheet"
  />
  <div class="page-wrapper">
    <AirplaneScene />
    <h1>aaaa</h1>
    <section class="scroll-area">Role para ver o avião voar</section>
  </div>
</template>

<style>
.page-wrapper {
  height: 200vh; /* scroll total */
  background: linear-gradient(#eef2ff, #ffffff);
}

body {
  font-family: "Open Sans", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Montserrat", sans-serif;
}

.scroll-area {
  margin-top: 120vh;
  text-align: center;
  font-size: 2rem;
  color: #00003e;
}
</style>
