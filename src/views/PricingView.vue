<script setup></script>

<template>
  <div class="hero-section-sub">
    <img src="" alt="" class="hero-img-sub" />
    <h1
      class="hero-title text-center"
      data-aos="zoom in"
      data-aos-duration="1000"
    >
      Pricing
    </h1>
  </div>
  <div class="pricing-section">
    <div
      class="pricing-container-one"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-once="true"
    >
      <h3 class="section-subtitle">Look at our next camp dates</h3>
      <h2 class="section-title mt-3 mb-6">Costs of our products</h2>
      <v-container class="pricing-subcontainer" fluid>
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

      <v-container class="pricing-subcontainer" fluid>
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
      data-aos="slide-left"
      data-aos-anchor=".pricing-container-two"
      data-aos-once="true"
      data-aos-duration="1000"
    ></v-divider>
    <div
      class="pricing-container-two"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-once="true"
      data-aos-delay="500"
    >
      <v-container fluid width="80%" class="py-6 px-0">
        <h2 class="container-subtitle">Our Pricing</h2>
        <p class="text pb-4">
          Further down you cann see our prices for our 360° Database and for our
          360° Scouting Camps.
        </p>
      </v-container>
      <v-container fluid width="80%" class="py-6 px-0">
        <h2 class="container-subtitle">Registration Process</h2>
        <p class="text pb-4">
          For the database, we can currently only offer you to fill out a
          registration form and send it to us by e-mail. We will then send you
          further information about payment and access to the database.<br />To
          participate in one of our camps, please send us the registration form
          available for download at the bottom of the page by e-mail. We will
          also contact you regarding the payment process.
        </p>
      </v-container>
      <v-container fluid width="80%" class="py-6 px-0">
        <h2 class="container-subtitle">We're here to help</h2>
        <p class="text pb-4">
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
.pricing-section {
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 1rem;
}

.pricing-container-one {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
}

.pricing-subcontainer {
  width: 100%;
}

.pricing-subtitle {
  width: 100%;
  font-size: 1.5rem;
  color: var(--color-heading);
  text-align: center;
  padding-bottom: 0.5rem;
}

.pricing-card-title {
  color: var(--color-heading);
}

.pricing-container-two {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
}

@media screen and (min-width: 576px) {
  .pricing-title:before {
    margin-right: 0.5rem;
  }
}

@media screen and (min-width: 960px) {
  .pricing-container-one {
    width: 60%;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 2rem 0;
  }

  .pricing-subcontainer {
    width: 50%;
  }

  .pricing-container-two {
    width: 60%;
    margin: 0 auto;
    padding: 2rem 0;
  }

  .pricing-subtitle {
    font-size: 2rem;
  }
}

@media screen and (min-width: 1400px) {
  .pricing-container-two {
    width: 50%;
  }
}

@media screen and (min-width: 1800px) {
}
</style>
