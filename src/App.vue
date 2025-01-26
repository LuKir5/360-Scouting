<script setup>
import { RouterLink, RouterView } from "vue-router";
import { VNavigationDrawer } from "vuetify/lib/components/index.mjs";
import { ref } from "vue";

const drawer = ref(false); // Create a ref to control the drawer's state
</script>

<template>
  <v-app id="v-app">
    <header class="main-container header">
      <v-app-bar class="mobile-header-bar d-flex d-md-none">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>360° Scouting</v-app-bar-title>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        class="mobile-header-drawer d-flex d-md-none"
      >
        <v-list class="mobile-header-links"
          ><RouterLink to="/" class="mobile-nav-link">Home</RouterLink>
          <RouterLink to="/about" class="mobile-nav-link">About</RouterLink>
          <RouterLink to="/contact" class="mobile-nav-link">Contact</RouterLink>
          <RouterLink to="/calendar" class="mobile-nav-link"
            >Calendar</RouterLink
          >
          <RouterLink to="/pricing" class="mobile-nav-link">Pricing</RouterLink>
          <a href="#" class="mobile-nav-link">Database</a>
        </v-list>
      </v-navigation-drawer>
      <div class="header-wrapper">
        <nav class="header-links d-none d-md-flex fixed-header">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <div class="vertical-divider"></div>
          <RouterLink to="/about" class="nav-link">About</RouterLink>
          <div class="vertical-divider"></div>
          <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
          <div class="vertical-divider"></div>
          <RouterLink to="/calendar" class="nav-link">Calendar</RouterLink>
          <div class="vertical-divider"></div>
          <RouterLink to="/pricing" class="nav-link">Pricing</RouterLink>
          <div class="vertical-divider"></div>
          <a href="#" class="nav-link">Database</a>
        </nav>
      </div>
    </header>

    <v-main class="main-container main">
      <RouterView />
    </v-main>

    <v-footer class="main-container footer">
      <div class="footer-wrapper">
        <div class="footer-credits">
          <p>2025 © Lukas Kirchberg |</p>
          <RouterLink to="/privacy" class="nav-link px-1"
            >Impressum & Privacy Policy</RouterLink
          >
        </div>
        <nav class="footer-links">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/about" class="nav-link">About</RouterLink>
          <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
          <RouterLink to="/calendar" class="nav-link">Calendar</RouterLink>
          <RouterLink to="/pricing" class="nav-link">Pricing</RouterLink>
          <a href="#" class="nav-link">Database</a>
        </nav>
      </div>
    </v-footer>
  </v-app>
</template>

<style scoped>
#v-app {
  background-color: var(--color-background);
  color: var(--color-text);
  background-repeat: no-repeat;
  background-size: cover;
}

.main-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
}

/* Header-Bereich */
.header {
  width: 100%;
  position: sticky;
  top: 0;
  background-color: var(--color-text);
  z-index: 3;
}

.header-wrapper {
  width: 100%;
}

.mobile-header-bar {
  background-color: var(--color-text);
  color: var(--color-accent);
}

.mobile-header-drawer {
  background-color: var(--color-text);
}

.mobile-header-links {
  display: flex;
  flex-direction: column;
}

.mobile-nav-link {
  color: var(--color-background);
  border-bottom: 1px solid var(--color-background);
  width: 50%;
  margin-bottom: 0.5rem;
}

nav {
  width: 100%;
  padding: 1rem 0;
  font-size: 1.5rem;
}

.header-links {
  display: flex;
  flex-wrap: wrap;
}

a.nav-link {
  color: var(--color-background);
  position: relative;
}

a.nav-link:hover {
  color: var(--color-accent);
  transition: 0.5s;
}

a.nav-link:after {
  width: 0;
  bottom: 0;
  left: 50%;
  height: 1px;
  content: "";
  display: block;
  position: absolute;
  background: var(--color-accent);
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
}

a.nav-link:hover:after {
  width: 100%;
  left: 0;
}

.header-links a.nav-link {
  padding: 0 1rem 0 1rem;
}

/* Main-Bereich */
.main {
  z-index: 2;
  background-color: transparent;
  color: inherit;
  padding: 0;
}

/* Footer-Bereich */
.footer {
  z-index: 2;
  background-color: var(--color-text);
  color: var(--color-background);
  padding-bottom: 1rem;
}

.footer-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.footer-credits {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  order: 2;
}

.footer-links {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  order: 1;
}

.footer-link {
  color: var(--color-background);
  padding: 0 0 0 5px;
}

/* Media-Queries */
@media screen and (min-width: 960px) {
  .header-wrapper {
    width: 60%;
    margin: 0 auto;
  }

  .footer-wrapper {
    width: 60%;
    margin: 0 auto;
  }

  .footer-credits {
    width: 50%;
    justify-content: flex-start;
    flex-direction: row;
    font-size: 1.2rem;
    order: 1;
  }

  .footer-links {
    width: 50%;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 1.2rem;
    order: 2;
  }

  a.nav-link {
    padding: 0 1rem 0 1rem;
  }
}

@media screen and (min-width: 1280px) {
  .mobile-header-drawer {
    position: absolute;
  }
}
</style>
