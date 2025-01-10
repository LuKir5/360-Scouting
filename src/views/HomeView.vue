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
    <p class="hero-subtitle">Find your passion</p>
  </div>
  <div class="home-section">
    <div class="slider-container">
      <h2 class="container-title">Next Scouting Camps</h2>
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
            class="ma-2 slider-cards card-background"
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
    <div class="news-container">
      <h2 class="container-title">News</h2>
      <v-list class="news-list">
        <v-list-item class="news-item">
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
        <v-list-item class="news-item">
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
        <v-list-item class="news-item">
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
        <v-list-item id="news-item" class="news-item">
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
        <v-list-item class="news-item">
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

<style>
.hero-section {
  height: 100vh;
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
  width: inherit;
  height: inherit;
  background-image: url("../components/img/football-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
  z-index: -1;
}

.hero-subtitle {
  font-size: 2.6rem;
  color: var(--color-heading);
  text-align: center;
}

.home-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
}

.container-title {
  font-size: 2rem;
  color: var(--color-heading);
  text-align: center;
}

.slider-container {
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
}

.slider {
  width: 100%;
}

.slider-cards {
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

.card-background {
  background: rgb(35, 40, 75);
  background: -moz-radial-gradient(
    circle,
    rgba(35, 40, 75, 1) 0%,
    rgba(5, 7, 44, 1) 100%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(35, 40, 75, 1) 0%,
    rgba(5, 7, 44, 1) 100%
  );
  background: radial-gradient(
    circle,
    rgba(35, 40, 75, 1) 0%,
    rgba(5, 7, 44, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#23284b",endColorstr="#05072c",GradientType=1);
}

.card-text {
  color: var(--color-text);
}

.news-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
}

.news-list {
  width: 100%;
  background-color: var(--color-background);
}

.news-item {
  color: var(--color-text);
  margin-bottom: 2rem;
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
