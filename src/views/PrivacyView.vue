<script setup></script>

<template>
  <div class="hero-section">
    <img src="" alt="" class="hero-img" />
    <h1 class="hero-title">About us</h1>
  </div>
  <div class="privacy-section">
    <h1 class="section-title">
      Impressum
      <div class="background-wrapper"></div>
    </h1>
    <div class="privacy-container-one">
      <p class="text">360°-Scouting</p>
      <p class="text">Immo Osterkamp</p>
      <p class="text">Hildesheimer Str. 420</p>
      <p class="text">30165 Hannover</p>
      <p class="text">Germany</p>
    </div>
    <h1 class="section-title">
      Privacy Policy
      <div class="background-wrapper"></div>
    </h1>
  </div>
</template>

<style scoped>
.hero-section {
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero-img {
  width: 100%;
  height: 40vh;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("../components/img/football-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
  z-index: -1;
}

.privacy-section {
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 2rem 1rem;
  gap: 1rem;
}

.privacy-container-one {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
}
</style>
