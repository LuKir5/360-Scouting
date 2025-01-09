<script setup></script>

<template>
  <div class="hero-section">
    <img src="" alt="" class="hero-img" />
    <h1 class="hero-title">About us</h1>
  </div>
  <div class="about-section">
    <div class="about-container-one">
      <div class="accent-container">
        <h1 class="about-title">Welcome to 360° Scouting!</h1>
        <p class="about-text text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
    <div class="about-container-two">
      <div class="about-img-one"></div>
    </div>
    <div class="about-container-three">
      <h1 class="about-title">Our strategy is following our mission</h1>
      <h2 class="about-num">01</h2>
      <p class="about-num-text text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna.
      </p>
      <h2 class="about-num">02</h2>
      <p class="about-num-text text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna.
      </p>
      <h2 class="about-num">03</h2>
      <p class="about-num-text text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna.
      </p>
      <h2 class="about-num">04</h2>
      <p class="about-num-text text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna.
      </p>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30vh;
  background-image: url("./src/components/img/football-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
  z-index: -1;
}

.about-section {
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 2rem 1rem;
}

.accent-container {
  padding: 0;
  margin: 0;
  display: block;
  /* background-color: var(--color-accent); */
  /* padding: 2rem; */
  /* border-radius: 15px; */
}

.about-title {
  width: 100%;
  font-size: 1.8rem;
  color: var(--color-heading);
  padding-bottom: 1rem;
}

.about-text {
  padding-bottom: 1rem;
}

.about-container-one {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
}

.about-container-two {
  position: relative;
  left: -1rem;
  width: 100vw;
  padding-bottom: 2rem;
}

.about-img-one {
  position: relative;
  height: 500px;
  background-image: url("./src/components/img/football-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
}

.about-container-three {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
}

.about-num {
  font-size: 3rem;
  color: var(--color-accent);
  margin-bottom: 1rem;
}

.about-num-text {
  padding-left: 1rem;
  margin-bottom: 2rem;
  border-left: 1px solid var(--color-accent);
}

@media screen and (min-width: 576px) {
}

@media screen and (min-width: 960px) {
  .about-img-one {
    border-radius: 15px;
  }

  .about-container-two {
    width: 100%;
    position: static;
  }

  h2.about-num {
    display: none;
  }

  .about-num-text {
    margin-left: 30%;
    display: flex;
    align-items: center;
    margin-bottom: 4rem;
  }

  .about-num-text::before {
    position: absolute;
    font-size: 4rem;
    color: var(--color-accent);
    left: 25%;
  }

  .about-num-text:nth-of-type(1)::before {
    content: "01";
  }

  .about-num-text:nth-of-type(2)::before {
    content: "02";
  }

  .about-num-text:nth-of-type(3)::before {
    content: "03";
  }

  .about-num-text:nth-of-type(4)::before {
    content: "04";
  }
}

@media screen and (min-width: 1800px) {
  .about-num-text {
    min-height: 8rem;
    display: flex;
    align-items: center;
  }
}
</style>
