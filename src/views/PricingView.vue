<script setup></script>

<template>
  <div class="hero-section">
    <img src="" alt="" class="hero-img" />
    <h1 class="hero-title">Pricing</h1>
    <p class="hero-subtitle"></p>
  </div>
  <div class="pricing-section">
    <div class="pricing-container-one">
      <h1 class="pricing-title">Learn more about the costs of our products</h1>
      <p class="pricing-text text">
        Further down you cann see our prices for our 360° Database and for our
        360° Scouting Camps.<br />For the database, we can currently only offer
        you to fill out a registration form and send it to us by e-mail. We will
        then send you further information about payment and access to the
        database.<br />To participate in one of our camps, please send us the
        registration form available for download at the bottom of the page by
        e-mail. We will also contact you regarding the payment process.
      </p>
    </div>

    <div class="pricing-container-two">
      <v-container class="pb-10" fluid>
        <h2 class="pricing-subtitle font-weight-bold">360° Database</h2>
        <v-sheet
          class="mx-auto pa-2 card-background"
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
                One year subscription
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
          class="mx-auto pa-2 card-background"
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
                Camp participation
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
    <p class="pricing-text text">
      If you have more detailed questions about our payment process, please
      contact us by e-mail. We are working on making the registration & payment
      process easier and faster for you in the future.<br />Thank you for your
      understanding!
    </p>
  </div>
</template>

<style scoped>
.hero-section {
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30vh;
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
}

.pricing-container-one {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
}

.pricing-container-two {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
}

.pricing-title {
  width: 100%;
  font-size: 1.8rem;
  color: var(--color-heading);
  padding-bottom: 1rem;
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

@media screen and (min-width: 1400px) {
  .pricing-container-two {
    flex-direction: row;
  }
}
</style>
