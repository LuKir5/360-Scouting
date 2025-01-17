<script setup></script>

<template>
  <div class="hero-section">
    <img src="" alt="" class="hero-img" />
    <h1 class="hero-title">Pricing</h1>
    <p class="hero-subtitle"></p>
  </div>
  <div class="pricing-section">
    <h1 class="section-title">
      Costs of our products
      <div class="background-wrapper"></div>
    </h1>

    <div class="pricing-container-one">
      <v-container class="pb-10" fluid>
        <h2 class="pricing-subtitle font-weight-bold">360° Database</h2>
        <v-sheet
          class="mx-auto pa-2 card-background elevation-10"
          max-width="900"
          rounded="xl"
        >
          <v-row>
            <v-col cols="12">
              <v-card
                class="h-100 flex-column d-flex align-center justify-center pa-4"
                border
                rounded="xl"
                variant="tonal"
              >
                <div class="text-h3 mb-5 card-text font-weight-bold">
                  $2000
                  <small class="text-overline card-text">USD/year</small>
                </div>
                <v-btn
                  class="mb-5 text-none contact-button"
                  color="var(--color-accent)"
                  max-height="36"
                  max-width="256"
                  rounded="lg"
                  text="Download registration form"
                  variant="flat"
                  width="100%"
                />
                <div class="text-caption card-text w-75 text-center">
                  Write us an E-Mail to get access to our database.
                </div>
              </v-card>
            </v-col>
            <v-col class="pa-6 d-flex flex-column justify-center" cols="12">
              <h3 class="text-h5 font-weight-bold mb-4 pricing-card-title">
                Elevate Your Recruiting. Explore Our Database.
              </h3>
              <p class="card-text mb-4">
                Get the most out of Vuetify with a one year subscription. This
                is a limited time offer and will not be available in the future.
                Get access to all current and future features, including full
                access to all snips components.
              </p>
            </v-col>
          </v-row>
        </v-sheet>
      </v-container>

      <v-container class="pb-10" fluid>
        <h2 class="pricing-subtitle font-weight-bold">360° Scouting Camp</h2>
        <v-sheet
          class="mx-auto pa-2 card-background elevation-10"
          max-width="900"
          rounded="xl"
        >
          <v-row>
            <v-col cols="12">
              <v-card
                class="h-100 flex-column d-flex align-center justify-center pa-4"
                border
                rounded="xl"
                variant="tonal"
              >
                <div class="text-h3 mb-5 font-weight-bold card-text">
                  $15
                  <small class="text-overline card-text">USD/Camp</small>
                </div>
                <v-btn
                  class="mb-5 text-none contact-button"
                  color="var(--color-accent)"
                  max-height="36"
                  max-width="256"
                  rounded="lg"
                  text="Download registration form"
                  variant="flat"
                  width="100%"
                />
                <div class="text-caption w-75 text-center card-text">
                  Write us an E-Mail to get access to our database.
                </div>
              </v-card>
            </v-col>
            <v-col class="pa-6 d-flex flex-column justify-center" cols="12">
              <h3 class="text-h5 font-weight-bold mb-4 pricing-card-title">
                Where Potential Meets Opportunity.
              </h3>
              <p class="card-text mb-4">
                Get the most out of Vuetify with a one year subscription. This
                is a limited time offer and will not be available in the future.
                Get access to all current and future features, including full
                access to all snips components.
              </p>
            </v-col>
          </v-row>
        </v-sheet>
      </v-container>
    </div>
    <v-divider
      class="horizontal-divider my-8 my-lg-16"
      color="var(--color-accent)"
      thickness="2px"
      opacity="1"
    ></v-divider>
    <div class="pricing-container-two">
      <v-container fluid class="py-6 px-0">
        <h2 class="container-subtitle">Our Pricing</h2>
        <p class="pricing-text text">
          Further down you cann see our prices for our 360° Database and for our
          360° Scouting Camps.
        </p>
      </v-container>
      <v-container fluid class="py-6 px-0">
        <h2 class="container-subtitle">Registration Process</h2>
        <p class="pricing-text text">
          For the database, we can currently only offer you to fill out a
          registration form and send it to us by e-mail. We will then send you
          further information about payment and access to the database.<br />To
          participate in one of our camps, please send us the registration form
          available for download at the bottom of the page by e-mail. We will
          also contact you regarding the payment process.
        </p>
      </v-container>
      <v-container fluid class="py-6 px-0">
        <h2 class="container-subtitle">We're here to help</h2>
        <p class="pricing-text text">
          If you have more detailed questions about our payment process, please
          contact us by e-mail. We are working on making the registration &
          payment process easier and faster for you in the future.<br />Thank
          you for your understanding!
        </p>
      </v-container>
    </div>
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

.pricing-section {
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 2rem 1rem;
  gap: 1rem;
}

.pricing-container-one {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.pricing-container-two {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.pricing-subtitle {
  width: 100%;
  font-size: 1.5rem;
  color: var(--color-heading);
  text-align: center;
  padding-bottom: 0.5rem;
}

.pricing-text {
  padding-bottom: 1rem;
}

.pricing-card-title {
  color: var(--color-heading);
}

@media screen and (min-width: 576px) {
  .pricing-title:before {
    margin-right: 0.5rem;
  }
}

@media screen and (min-width: 960px) {
  .pricing-subtitle {
    font-size: 2rem;
  }
}

@media screen and (min-width: 1400px) {
  .pricing-container-two {
    width: 50%;
  }

  .pricing-container-one {
    flex-direction: row;
  }

  .pricing-text {
    font-size: 1.4rem;
  }
}

@media screen and (min-width: 1800px) {
  .pricing-text {
    font-size: 1.8rem;
  }
}
</style>
