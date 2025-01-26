<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import dayjs from "dayjs";
import dayjsPluginLocalizedFormat from "dayjs/plugin/localizedFormat";
import campsData from "../assets/camps.js";

dayjs.extend(dayjsPluginLocalizedFormat);
dayjs.locale("en");

const camps = ref(campsData);

const sortedCamps = computed(() => {
  return [...camps.value].sort((a, b) => {
    const dateA = dayjs(a.date.split(" to ")[0]);
    const dateB = dayjs(b.date.split(" to ")[0]);
    return dateA.isBefore(dateB) ? -1 : 1;
  });
});

const link = ref(null); // Ref für den Link erstellen

const smoothScrollHandler = (event) => {
  event.preventDefault();

  const targetElement = document.getElementById("home-section");

  if (targetElement) {
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  } else {
    console.error("Ziel '#home-section' nicht gefunden.");
  }
};

onMounted(() => {
  link.value = document.querySelector('a[href="#home-section"]'); // Zugriff über .value
  if (link.value) {
    link.value.addEventListener("click", smoothScrollHandler);
  }
});

onBeforeUnmount(() => {
  if (link.value) {
    link.value.removeEventListener("click", smoothScrollHandler);
    link.value = null;
  }
});
</script>

<template>
  <div class="hero-section-lead">
    <img src="" alt="" class="hero-img-lead" />
    <h1
      class="hero-title"
      data-aos="zoom in"
      data-aos-duration="1500"
      data-aos-delay="800"
    >
      360° Scouting
    </h1>
    <h2
      class="hero-subtitle"
      data-aos="zoom in"
      data-aos-duration="1500"
      data-aos-delay="1300"
    >
      Welcome to American Football Scouting
    </h2>
    <a
      href="#home-section"
      style="position: relative; top: 25%"
      data-aos="zoom in"
      data-aos-duration="1500"
      data-aos-delay="1500"
    >
      <v-icon size="70" color="var(--color-accent)">mdi-arrow-down</v-icon>
    </a>
  </div>
  <div id="home-section" class="home-section">
    <div class="home-container-one">
      <v-container
        class="home-subcontainer d-flex flex-column justify-lg-center ma-0"
        data-aos="fade-right"
        data-aos-anchor-placement="top-center"
      >
        <h3 class="section-subtitle">Building bridges between continents</h3>
        <h2 class="section-title mt-3 mb-6">
          Connecting American Football<br />
          With the Rest of the World.
        </h2>
        <p class="text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.<br /><br />
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
      </v-container>
      <img
        src="../components/img/placeholder.jpg"
        alt=""
        class="home-img-one elevation-10"
        data-aos="fade-right"
        data-aos-anchor-placement="top-center"
      />
      <img
        src="../components/img/placeholder.jpg"
        alt=""
        class="home-img-one elevation-10"
        data-aos="fade-left"
        data-aos-anchor-placement="top-center"
      />
      <v-container
        class="home-subcontainer d-flex flex-column justify-lg-center ma-0"
        data-aos="fade-left"
        data-aos-anchor-placement="top-center"
      >
        <h3 class="section-subtitle">Create special chances</h3>
        <h2 class="section-title mt-3 mb-6">Scouting the Future.</h2>
        <p class="text">
          We want to give young, success oriented Football Players the
          opportunity to get in touch with Americas Football Colleges. Sed diam
          voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet.<br /><br />
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
      </v-container>
    </div>

    <div
      class="container-wrapper"
      data-aos="slide-left"
      data-aos-anchor-placement="center-bottom"
    >
      <div
        class="home-container-two"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <h3 class="section-subtitle" style="color: var(--color-background)">
          Look at our next camp dates
        </h3>
        <h2
          class="section-title mt-3 mb-6"
          style="color: var(--color-background)"
        >
          Next Scouting Camps
        </h2>
        <v-slide-group show-arrows class="slider" v-if="sortedCamps.length > 0">
          <template v-slot:prev="{ props }">
            <v-btn v-bind="props" icon color="var(--color-text)">
              <v-icon size="50" color="var(--color-accent)"
                >mdi-chevron-left</v-icon
              >
            </v-btn>
          </template>
          <template v-slot:next="{ props }">
            <v-btn v-bind="props" icon color="var(--color-text)">
              <v-icon size="50" color="var(--color-accent)"
                >mdi-chevron-right</v-icon
              >
            </v-btn>
          </template>

          <v-slide-group-item
            v-for="camp in sortedCamps"
            :key="camp.date"
            v-slot="{ toggle }"
          >
            <v-card
              class="ma-2 slider-cards card-background elevation-4"
              rounded
              @click="toggle"
              max-width="20rem"
              min-width="15rem"
            >
              <v-card-title>{{ camp.name }}</v-card-title>
              <v-card-subtitle>{{ camp.date }}</v-card-subtitle>
              <v-card-text
                >Location: {{ camp.location }}<br />
                Registration deadline: {{ camp.deadline }}</v-card-text
              >
              <v-card-actions>More Info</v-card-actions>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </div>
    </div>

    <div
      class="home-container-three"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-delay="400"
    >
      <h3 class="section-subtitle">Don't miss anything!</h3>
      <h2 class="section-title mt-3 mb-6">Check out our latest News</h2>
      <v-list class="news-list">
        <v-list-item class="news-item elevation-10">
          <v-card class="news-card"
            ><v-card-title>News 1</v-card-title
            ><v-card-subtitle>01.01.2025</v-card-subtitle
            ><v-card-text
              >Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor
              venenatis feugiat. Etiam quis faucibus erat, non accumsan leo.
              Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras
              ullamcorper gravida tellus ut consequat.</v-card-text
            ><v-card-text
              ><a href="" class="news-link">Mehr</a></v-card-text
            ></v-card
          >
        </v-list-item>
        <v-list-item class="news-item elevation-10">
          <v-card class="news-card"
            ><v-card-title>News 1</v-card-title
            ><v-card-subtitle>01.01.2025</v-card-subtitle
            ><v-card-text
              >Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor
              venenatis feugiat. Etiam quis faucibus erat, non accumsan leo.
              Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras
              ullamcorper gravida tellus ut consequat.</v-card-text
            ><v-card-text
              ><a href="" class="news-link">Mehr</a></v-card-text
            ></v-card
          >
        </v-list-item>
        <v-list-item class="news-item elevation-10">
          <v-card class="news-card"
            ><v-card-title>News 1</v-card-title
            ><v-card-subtitle>01.01.2025</v-card-subtitle
            ><v-card-text
              >Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor
              venenatis feugiat. Etiam quis faucibus erat, non accumsan leo.
              Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras
              ullamcorper gravida tellus ut consequat.</v-card-text
            ><v-card-text
              ><a href="" class="news-link">Mehr</a></v-card-text
            ></v-card
          >
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<style scoped>
.home-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 1rem;
}

.home-subcontainer {
  width: 100%;
}

.home-container-one {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  gap: 3rem;
}

.home-img-one {
  width: 100%;
  height: auto;
  border-radius: 15px;
}

.home-container-two {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
}

.slider {
  width: 100%;
}

.slider-cards {
  color: var(--color-text);
  border: 1px solid var(--color-border);
  margin: 1rem;
}

.card-background {
  color: var(--color-text);
  background-color: var(--color-card-background);
  border: 1px solid var(--color-border);
}

.card-text {
  color: var(--color-text);
}

.home-container-three {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
}

.news-list {
  width: 100%;
  background-color: transparent;
}

.news-item {
  color: var(--color-text);
  padding: 0 !important;
  margin: 1rem 1rem 2rem 1rem;
}

.news-card {
  color: var(--color-text);
  background-color: var(--color-card-background);
  border: 1px solid var(--color-border);
  padding: 1.5rem;
}

.news-link {
  padding: 0;
}

@media screen and (min-width: 576px) {
}

@media screen and (min-width: 960px) {
  .home-subcontainer {
    width: 50%;
  }

  .home-container-one {
    width: 60%;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 2rem 0;
  }

  .home-img-one {
    width: 40%;
  }

  .home-container-two {
    width: 60%;
    margin: 0 auto;
  }

  .home-container-three {
    width: 60%;
    margin: 0 auto;
    padding: 2rem 0;
  }
}

@media screen and (min-width: 1800px) {
}
</style>
