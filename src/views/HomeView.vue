<script setup>
import { ref, computed } from "vue";
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
</script>

<template>
  <div class="hero-section">
    <img src="" alt="" class="hero-img" />
    <h1 class="hero-title">360° Scouting</h1>
    <p class="hero-subtitle">Scouting the Future.</p>
    <p class="hero-subtitle">Precision Scouting. Powerful Results.</p>
  </div>
  <div class="home-section">
    <h2 class="section-title pa-0">
      Next Scouting Camps
      <div class="background-wrapper"></div>
    </h2>

    <div class="home-container-one">
      <v-slide-group show-arrows class="slider" v-if="sortedCamps.length > 0">
        <template v-slot:prev="{ props }">
          <v-btn v-bind="props" icon color="var(--vt-c-2)">
            <v-icon size="50" color="var(--vt-c-1)">mdi-chevron-left</v-icon>
          </v-btn>
        </template>
        <template v-slot:next="{ props }">
          <v-btn v-bind="props" icon color="var(--vt-c-2)">
            <v-icon size="50" color="var(--vt-c-1)">mdi-chevron-right</v-icon>
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

    <h2 class="section-title pa-0">
      News
      <div class="background-wrapper"></div>
    </h2>
    <div class="home-container-two">
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
.hero-section {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-img {
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  background-image: url("../components/img/football-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
  z-index: -1;
}

.hero-section:before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100vh;
  background: var(--color-background);
  background: -moz-linear-gradient(
    0deg,
    rgba(241, 237, 238, 0.8) 0%,
    rgba(241, 237, 238, 0.5) 1%,
    rgba(241, 237, 238, 0) 10%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(241, 237, 238, 0.8) 0%,
    rgba(241, 237, 238, 0.5) 1%,
    rgba(241, 237, 238, 0) 10%
  );
  background: linear-gradient(
    0deg,
    rgba(241, 237, 238, 0.8) 0%,
    rgba(241, 237, 238, 0.5) 1%,
    rgba(241, 237, 238, 0) 10%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f1edee",endColorstr="#f1edee",GradientType=1);
}

.home-section {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  gap: 1rem;
}

.home-container-one {
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
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

.home-container-two {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
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
  .hero-subtitle {
    font-size: 3rem;
  }
}

@media screen and (min-width: 960px) {
}

@media screen and (min-width: 1800px) {
  .hero-subtitle {
    font-size: 4rem;
  }
}
</style>
