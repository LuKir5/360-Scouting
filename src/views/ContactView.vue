<script>
import { computed } from "vue";

export default {
  setup() {
    const email = "deine.email@adresse.de";
    const subject = "Betreff der E-Mail";
    const body = "Nachrichtentext";

    const mailtoLink = computed(() => {
      return `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    });

    return { mailtoLink };
  },
};
</script>

<template>
  <div class="hero-section">
    <img src="" alt="" class="hero-img" />
    <h1 class="hero-title">Contact & FAQ</h1>
  </div>
  <div class="contact-section">
    <div class="contact-container-one">
      <h1 class="contact-title">Frequently asked questions</h1>
      <p class="contact-text text">
        Here we try to give you an answer to the most asked questions about 360°
        Scouting!
      </p>
    </div>
    <div class="contact-container-two">
      <v-expansion-panels bg-color="var(--color-card-background)">
        <v-expansion-panel
          title="Where can i find the date of your next footballcamps?"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
          class="faq-item"
        >
        </v-expansion-panel>
        <v-expansion-panel
          title="Which benefit do i get when im featured in your databank?"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
          class="faq-item"
        >
        </v-expansion-panel>
        <v-expansion-panel
          title="What are the requirements to participate in one of your footballcamps?"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
          class="faq-item"
        >
        </v-expansion-panel>
        <v-expansion-panel
          title="How many camps are doing per year?"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
          class="faq-item"
        >
        </v-expansion-panel>
        <v-expansion-panel
          title="How high is the chance to get an offer from a college?"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
          class="faq-item"
        >
        </v-expansion-panel>
        <v-expansion-panel
          title="What are the costs of a camp?"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
          class="faq-item"
        >
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="contact-container-three">
      <h1 class="contact-title">Want to know more?</h1>
      <p class="contact-text text">
        Or didn't we answer your question here? Reach out to us!
      </p>
    </div>
    <div class="contact-container-four">
      <p class="contact-text text text-center">
        The best way to contact us is per E-Mail.<br />We will try to reply to
        you as quickly as possible.
      </p>
      <p class="contact-text text">
        <v-icon icon="mdi-email" color="var(--color-accent)"></v-icon>
        Muster@gmail.com
      </p>
      <v-btn
        base-color="var(--color-accent)"
        class="contact-button"
        :href="mailtoLink"
        >Send an E-Mail</v-btn
      >
    </div>
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
  background-image: url("./src/components/img/football-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
  z-index: -1;
}

.contact-section {
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 2rem 1rem;
}

.contact-container-one {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
}

.contact-title {
  font-size: 1.8rem;
  color: var(--color-heading);
  padding-bottom: 1rem;
}

.contact-text {
  padding-bottom: 1rem;
}

.contact-container-two {
  width: 100%;
  padding-bottom: 1rem;
}

.contact-container-three {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
}

.contact-container-four {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
}

.faq-item {
  color: var(--color-text);
  border: 1px inset var(--color-text);
  margin-bottom: 0.5rem;
}

.contact-button {
  max-width: 250px;
  margin-top: 1rem;
}

.contact-button:hover {
  opacity: 0.5;
}
</style>
