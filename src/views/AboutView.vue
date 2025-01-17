<script setup></script>

<template>
  <div class="hero-section">
    <img src="" alt="" class="hero-img" />
    <h1 class="hero-title">About us</h1>
  </div>
  <div class="about-section">
    <h1 class="section-title">
      We are 360° Scouting!
      <div class="background-wrapper"></div>
    </h1>
    <div class="about-container-one">
      <img
        src="../components/img/placeholder.jpg"
        alt=""
        class="about-img-one"
      />
      <div class="accent-container">
        <p class="about-text text elevation-10">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr.
        </p>
      </div>
    </div>
    <v-divider
      class="horizontal-divider my-8 my-lg-16"
      color="var(--color-accent)"
      thickness="2px"
      opacity="1"
    ></v-divider>
    <h1 class="section-title">
      Our corporate values
      <div class="background-wrapper"></div>
    </h1>
    <div class="about-container-two">
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
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  z-index: -1;
}

.about-section {
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 2rem 1rem;
  gap: 1rem;
}

.about-text {
  color: var(--color-background);
  background-color: var(--color-accent);
  border-radius: 15px;
  padding: 1rem;
}

.about-container-one {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 2rem;
}

.about-img-one {
  width: 100%;
  height: auto;
  border-radius: 15px;
}

.accent-container {
  width: 100%;
  display: flex;
  align-items: center;
}

.about-container-two {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
}

.about-num {
  font-size: 2.5rem;
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
  .about-container-one {
    flex-direction: row;
  }

  .about-img-one {
    width: 50%;
  }

  .accent-container {
    width: 50%;
    position: relative;
    right: 5rem;
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

  .about-num-text:before {
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

@media screen and (min-width: 1400px) {
  .about-text {
    font-size: 1.4rem;
  }
}

@media screen and (min-width: 1800px) {
  .about-text {
    font-size: 1.8rem;
  }

  .about-num-text {
    min-height: 8rem;
    display: flex;
    align-items: center;
  }
}
</style>
