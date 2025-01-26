import "./assets/main.css";

import { createApp } from "vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Material Design Icons
import "@mdi/font/css/materialdesignicons.css";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi.mjs";

// Animate on scroll library
import AOS from "aos";
import "aos/dist/aos.css";

import App from "./App.vue";
import router from "./router";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi", // Standard-Iconset auf Material Design Icons setzen
    aliases,
    sets: {
      mdi,
    },
  },
});

const app = createApp(App);

app.use(router);
app.use(vuetify); // Vuetify einbinden

app.mount("#app");

// AOS-Initialisierung und Attributentfernung
function initializeAOS() {
  const viewportWidth = window.innerWidth;

  // Suche alle Elemente mit relevanten AOS-Attributen
  const elements = document.querySelectorAll(
    "[data-aos], [data-aos-easing], [data-aos-duration], [data-aos-delay]"
  );

  if (viewportWidth > 960) {
    // AOS initialisieren
    AOS.init({
      disableMutationObserver: false,
    });

    // Entferne die CSS-Klasse bei größeren Viewports
    elements.forEach((el) => {
      el.classList.remove("aos-visible");
    });

    // AOS-Stile vollständig zurücksetzen
    AOS.refreshHard();
  } else {
    // Entferne AOS-Attribute und füge die CSS-Klasse hinzu
    elements.forEach((el) => {
      el.removeAttribute("data-aos");
      el.removeAttribute("data-aos-easing");
      el.removeAttribute("data-aos-duration");
      el.removeAttribute("data-aos-delay");

      // Füge die CSS-Klasse hinzu
      el.classList.add("aos-visible");
    });
  }
}

// Event-Handler für Viewport-Änderungen
function handleViewportChange() {
  initializeAOS();
}

// Bei Seitenladen initialisieren
window.onload = function () {
  const appElement = document.getElementById("app");
  if (appElement) {
    appElement.classList.add("loaded");
  }
  initializeAOS();
};

// Bei Routenwechsel AOS aktualisieren
router.afterEach(() => {
  // Verwende ein kleines Delay, um sicherzustellen, dass der neue DOM vollständig geladen ist
  setTimeout(() => {
    initializeAOS();
  }, 50); // 50ms Delay, um sicherzugehen, dass der DOM gerendert wurde
});

// Bei Änderung der Viewportgröße
window.addEventListener("resize", handleViewportChange);
