<script setup></script>

<template>
  <div class="hero-section-sub">
    <img src="" alt="" class="hero-img-sub" />
    <h1
      class="hero-title text-center"
      data-aos="zoom in"
      data-aos-duration="1000"
    >
      About us
    </h1>
  </div>
  <div class="about-section">
    <div
      class="about-container-one"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-once="true"
    >
      <h3 class="section-subtitle">Let us introduce ourselves</h3>
      <h2 class="section-title mt-3 mb-6">We are 360° Scouting!</h2>
      <img
        src="../components/img/placeholder.jpg"
        alt=""
        class="about-img-one elevation-10"
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
      data-aos="slide-left"
      data-aos-anchor=".about-container-two"
      data-aos-once="true"
      data-aos-duration="1000"
    ></v-divider>

    <div
      class="about-container-two"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-once="true"
    >
      <h3 class="section-subtitle">To ensure you quality</h3>
      <h2 class="section-title mt-3 mb-6">Our corporate values</h2>
      <h2 class="about-num">01</h2>
      <p class="about-num-text text">
        Precision Scouting.<br />Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
        amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna.
      </p>
      <h2 class="about-num">02</h2>
      <p class="about-num-text text">
        Powerful Results.<br />Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
        est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna.
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
.about-section {
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 1rem;
}

.about-container-one {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
}

.about-img-one {
  width: 100%;
  height: auto;
  border-radius: 15px;
}

.accent-container {
  width: 70%;
  position: relative;
  bottom: 5rem;
  display: flex;
  align-items: center;
}

.about-text {
  color: var(--color-background);
  background-color: var(--color-accent);
  border-radius: 15px;
  padding: 1rem;
}

.about-container-two {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
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
  .about-img-one {
    width: 70%;
  }

  .accent-container {
    width: 60%;
  }
}

@media screen and (min-width: 960px) {
  .about-container-one {
    width: 60%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    padding: 2rem 0;
  }

  .about-img-one {
    width: 65%;
    position: relative;
    left: 2rem;
  }

  .accent-container {
    width: 35%;
    position: relative;
    right: 2rem;
    bottom: 0;
  }

  .about-container-two {
    width: 60%;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 2rem 0;
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
}

@media screen and (min-width: 1800px) {
  .about-img-one {
    width: 50%;
    left: 5rem;
  }

  .accent-container {
    width: 30%;
    right: 5rem;
  }

  .about-num-text {
    min-height: 8rem;
    display: flex;
    align-items: center;
  }
}
</style>
