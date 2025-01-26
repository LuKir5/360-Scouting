<script setup>
import { ref, computed } from "vue";
import dayjs from "dayjs";
import dayjsPluginLocalizedFormat from "dayjs/plugin/localizedFormat";
import campsData from "../assets/camps.js";

dayjs.extend(dayjsPluginLocalizedFormat);
dayjs.locale("en");

const camps = ref(campsData);

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
  <div class="hero-section-sub">
    <img src="" alt="" class="hero-img-sub" />
    <h1
      class="hero-title text-center"
      data-aos="zoom in"
      data-aos-duration="1000"
    >
      Calendar
    </h1>
  </div>
  <div class="calendar-section">
    <div
      class="calendar-container-one"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-once="true"
    >
      <h3 class="section-subtitle">Look at our next camp dates</h3>
      <h2 class="section-title mt-3 mb-6">Next dates for our Scouting Camps</h2>
      <p class="text">
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
    <div
      class="calendar-container-two"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-once="true"
      data-aos-delay="500"
    >
      <div v-for="monthGroup in campsByMonth" :key="monthGroup.monthName">
        <h2 class="container-title">{{ monthGroup.monthName }}</h2>
        <v-list class="camp-list" density="compact">
          <v-list-item
            class="camp-list-item elevation-10 ma-3"
            v-for="(camp, index) in monthGroup.camps"
            :key="index"
          >
            <template v-slot:prepend>
              <v-icon
                icon="mdi-football"
                color="var(--color-accent)"
                size="large"
                style="opacity: 1"
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
                      href="/Steckbrief Azetabulumfraktur.pdf"
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
        <v-divider
          class="horizontal-divider"
          color="var(--color-accent)"
          thickness="1px"
          opacity="1"
        ></v-divider>
      </div>
    </div>
  </div>
</template>

<style scoped>
.calendar-section {
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 1rem;
}

.calendar-container-one {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
}

.calendar-container-two {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
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
  color: var(--color-text);
  margin-top: 1rem;
}

.contact-button:hover {
  opacity: 0.5;
}

@media screen and (min-width: 576px) {
}

@media screen and (min-width: 960px) {
  .calendar-container-one {
    width: 60%;
    margin: 0 auto;
    padding: 2rem 0;
  }

  .calendar-container-two {
    width: 60%;
    margin: 0 auto;
    padding: 2rem 0;
  }
}

@media screen and (min-width: 1800px) {
}
</style>
