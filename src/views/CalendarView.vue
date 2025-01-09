<script setup>
import { ref, computed } from "vue";
import dayjs from "dayjs";
import dayjsPluginLocalizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(dayjsPluginLocalizedFormat);
dayjs.locale("en");

const camps = ref([
  {
    name: "Summer Football Camp",
    date: "2024-07-15 to 2024-07-20",
    location: "Berlin",
    description: "Intensive training for young football talents.",
    scout: "Immo Osterkamp",
    deadline: "2024-07-01",
  },
  {
    name: "Easter Football Camp",
    date: "2024-04-08 to 2024-04-12",
    location: "Munich",
    description: "Fun and technique in focus.",
    scout: "Immo Osterkamp",
    deadline: "2024-07-01",
  },
  {
    name: "Autumn Football Camp",
    date: "2024-10-21 to 2024-10-25",
    location: "Hamburg",
    description: "Preparation for the new season.",
    scout: "Immo Osterkamp",
    deadline: "2024-07-01",
  },
  {
    name: "June Football Camp",
    date: "2024-06-10 to 2024-06-14",
    location: "Cologne",
    description: "Technique training and game practice.",
    scout: "Immo Osterkamp",
    deadline: "2024-07-01",
  },
  {
    name: "August Football Camp",
    date: "2024-08-05 to 2024-08-09",
    location: "Stuttgart",
    description: "Preparation for the second half of the season.",
    scout: "Immo Osterkamp",
    deadline: "2024-07-01",
  },
  {
    name: "Extra Football Camp",
    date: "2024-06-05 to 2024-07-09",
    location: "Stuttgart",
    description: "Preparation for the second half of the season.",
    scout: "Immo Osterkamp",
    deadline: "2024-07-01",
  },
  {
    name: "January Football Camp",
    date: "2025-01-10 to 2025-01-14",
    location: "Frankfurt",
    description: "Start the year with football",
    scout: "Immo Osterkamp",
    deadline: "2024-07-01",
  },
]);

const campsByMonth = computed(() => {
  const groupedCamps = {};

  camps.value.forEach((camp) => {
    const startDateString = camp.date.split(" to ")[0];
    const startDate = dayjs(startDateString);
    const yearMonth = startDate.format("YYYY-MM"); // Format für die Sortierung: YYYY-MM
    const monthName = startDate.format("MMMM YYYY"); // Format für die Anzeige: MMMM YYYY

    if (!groupedCamps[yearMonth]) {
      groupedCamps[yearMonth] = { monthName, camps: [] };
    }
    groupedCamps[yearMonth].camps.push(camp);
  });

  // Nach Jahr und Monat sortieren (YYYY-MM)
  const sortedYearMonths = Object.keys(groupedCamps).sort();

  // Sortiertes Array von Objekten erstellen (mit monthName)
  return sortedYearMonths.map((yearMonth) => groupedCamps[yearMonth]);
});
</script>

<template>
  <div class="hero-section">
    <img src="" alt="" class="hero-img" />
    <h1 class="hero-title">Calendar</h1>
  </div>
  <div class="calendar-section">
    <div class="calendar-container-one">
      <h1 class="calendar-title">
        Here you can find the next dates for our 360°-Scouting Camps
      </h1>
      <p class="calendar-text text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet
      </p>
    </div>
    <div class="calendar-container-two">
      <div v-for="monthGroup in campsByMonth" :key="monthGroup.monthName">
        <h2 class="month-heading">{{ monthGroup.monthName }}</h2>
        <v-list class="camp-list" density="compact">
          <v-list-item
            class="camp-list-item"
            v-for="(camp, index) in monthGroup.camps"
            :key="index"
          >
            <template v-slot:prepend>
              <v-icon
                icon="mdi-football"
                color="var(--color-accent)"
                size="large"
              ></v-icon>
            </template>
            <v-list-item-title class="camp-list-item-title">{{
              camp.name
            }}</v-list-item-title>
            <v-list-item-subtitle class="camp-list-item-text"
              >{{ camp.date }} - {{ camp.location }}</v-list-item-subtitle
            >
            <v-list-item-subtitle class="camp-list-item-text">{{
              camp.description
            }}</v-list-item-subtitle>
            <v-list-item-subtitle class="camp-list-item-text"
              >Scout: {{ camp.scout }}</v-list-item-subtitle
            >
            <v-list-item-subtitle class="camp-list-item-text"
              >Registration deadline: {{ camp.deadline }}</v-list-item-subtitle
            >
            <v-dialog max-width="800">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  text="More Information"
                  base-color="var(--color-accent)"
                  class="contact-button"
                ></v-btn>
              </template>
              <template v-slot:default="{ isActive }">
                <v-card class="camp-information">
                  <template v-slot:text>
                    Ac sit wisi. Sodales aliquam, sed vestibulum nullam arcu sit
                    risus arcu, id luctus vitae lorem nibh, integer nec nullam
                    class cursus mi, purus arcu lectus. Vel ante suscipit
                    volutpat potenti mattis sed, wisi eu placerat aliquam erat,
                    lectus morbi lobortis at assumenda. Consequat neque purus
                    ipsum voluptas odio, netus vestibulum ut nec, suspendisse
                    pellentesque nec enim in. Wisi dictum sed semper a, ipsum
                    erat tellus habitasse est, erat sem ornare, vitae quisque
                    ultricies. Dui sed blandit. Tempor et faucibus justo sed
                    luctus, nec vitae vitae. Nunc nibh pede, ipsum vestibulum
                    aenean leo ante ultricies, nam cras quis sed penatibus amet.
                    In mauris a. Integer metus mauris tortor, et rutrum
                    vestibulum ultricies, ut phasellus in ullamcorper ut mollit,
                    eu justo. Cursus pretium venenatis. Cras pellentesque vel
                    sodales accumsan aenean. Feugiat metus sit nec in aliquet
                    amet, porttitor pretium vulputate massa. Consequat ipsum
                    luctus quisque adipiscing libero. Wisi sollicitudin. Eget
                    vitae ac lobortis, lorem natoque vestibulum et, aliquet
                    faucibus at morbi nibh, vel condimentum. Massa unde orci sed
                    id sed, odio donec congue nec praesent amet. Hymenaeos velit
                    lacus, quis vivamus libero tempus duis, eu nisi eu, ipsum at
                    accumsan pede justo morbi donec, massa et libero sit risus
                    neque tortor. Ut sed sed etiam hendrerit dapibus, quis metus
                    suspendisse nibh.

                    <br />

                    Fringilla tempor felis augue magna. Cum arcu a, id vitae.
                    Pellentesque pharetra in cras sociis adipiscing est. Nibh
                    nec mattis at maecenas, nisl orci aliquam nulla justo
                    egestas venenatis, elementum duis vel porta eros, massa
                    vitae, eligendi imperdiet amet. Nec neque luctus suscipit,
                    justo sem praesent, ut nisl quisque, volutpat torquent wisi
                    tellus aliquam reprehenderit, curabitur cras at quis massa
                    porttitor mauris. Eros sed ultrices. Amet dignissim justo
                    urna feugiat mauris litora, etiam accumsan, lobortis a orci
                    suspendisse. Semper ac mauris, varius bibendum pretium, orci
                    urna nunc ullamcorper auctor, saepe sem integer quam, at
                    feugiat egestas duis. Urna ligula ante. Leo elementum
                    nonummy. Sagittis mauris est in ipsum, nulla amet non justo,
                    proin id potenti platea posuere sit ut, nunc sit erat
                    bibendum. Nibh id auctor, ab nulla vivamus ultrices, posuere
                    morbi nunc tellus gravida vivamus.

                    <br />

                    Mauris nec, facilisi quam fermentum, ut mauris integer, orci
                    tellus tempus diam ut in pellentesque. Wisi faucibus tempor
                    et odio leo diam, eleifend quis integer curabitur sit
                    scelerisque ac, mauris consequat luctus quam penatibus
                    fringilla dis, vitae lacus in, est eu ac tempus.
                    Consectetuer amet ipsum amet dui, sed blandit id sed. Tellus
                    integer, dignissim id pede sodales quis, felis dolorem id
                    mauris orci, orci tempus ut. Nullam hymenaeos. Curabitur in
                    a, tortor ut praesent placerat tincidunt interdum, ac
                    dignissim metus nonummy hendrerit wisi, etiam ut.
                  </template>

                  <v-card-actions>
                    <v-btn
                      class="contact-button"
                      text="Download registration form"
                      href="public/Steckbrief Azetabulumfraktur.pdf"
                      download="Registration form.pdf"
                    ></v-btn>
                    <v-btn
                      class="contact-button"
                      text="Close"
                      @click="isActive.value = false"
                    ></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-list-item>
        </v-list>
        <v-divider class="month-divider"></v-divider>
      </div>
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

.calendar-section {
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 2rem 1rem;
}

.calendar-container-one {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
}

.calendar-title {
  width: 100%;
  font-size: 1.8rem;
  color: var(--color-heading);
  padding-bottom: 1rem;
}

.calendar-text {
  padding-bottom: 1rem;
}

.calendar-container-two {
  width: 100%;
  padding-bottom: 1rem;
}

.month-heading {
  font-size: 1.5rem;
  color: var(--color-accent);
}

.month-divider {
  position: relative;
  width: 100vw;
  color: var(--color-accent);
  opacity: 0.5;
  margin-bottom: 2rem;
  left: -1rem;
}

.camp-list {
  background-color: var(--color-background);
}

.camp-list-item {
  background-color: var(--color-background);
  color: var(--color-text);
  border: 1px inset var(--color-text);
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}

.camp-list-item-title {
  font-size: 1.4rem;
}

.camp-list-item-text {
  font-size: 1rem;
  padding: 0.2rem 0;
}

.camp-information {
  background-color: var(--color-background);
  color: var(--color-text);
}

.contact-button {
  background-color: var(--color-accent);
  color: var(--color-background);
  margin-top: 1rem;
}

.contact-button:hover {
  opacity: 0.5;
}

@media screen and (min-width: 960px) {
  .month-divider {
    position: static;
    width: 100%;
  }
}
</style>
