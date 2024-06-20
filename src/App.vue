<template>
  <v-app>
    <v-app-bar class="toolbar" app color="transparent" elevation="0">
      <v-toolbar-title class="mr-12"> Klub Nurkowy Siechnice </v-toolbar-title>
      <v-btn text to="/">{{ $t('message.home') }}</v-btn>
      <v-btn text to="/events">{{ $t('message.events') }}</v-btn>
      <v-btn text to="/blog">{{ $t('message.blog') }}</v-btn>
      <v-btn text to="/contact">{{ $t('message.contact') }}</v-btn>
      <div id="menu-wrapper" class="menu-wrapper">
        <v-menu v-model="menuOpen" :close-on-content-click="false" attach="#menu-wrapper">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on" @click="toggleMenu">
              {{ currentLanguage }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="lang in languages" :key="lang" @click="changeLanguage(lang)" right>
              <v-list-item-title>{{ lang }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>

    <v-main class="background-image">
      <router-view></router-view>
    </v-main>
    <FooterComponent></FooterComponent>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import FooterComponent from './components/FooterComponent.vue'

const { locale } = useI18n()
const languages = ref(['en', 'pl'])
const currentLanguage = ref<string>(locale.value)
const menuOpen = ref<boolean>(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const changeLanguage = (lang: string) => {
  locale.value = lang
  currentLanguage.value = lang
  menuOpen.value = false // Close the dropdown menu after selecting a language
}
</script>
<style scoped>
.background-image {
  background-image: url('img/background2-unsplash.jpg'); /* Path to your background image */
  background-size: cover; /* Cover the entire element */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent image from repeating */
  min-height: 100vh; /* Ensure it covers the full viewport height */
}

::v-deep(.v-toolbar__content) {
  overflow: visible !important;
}
.menu-wrapper {
  position: relative;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav ul li {
    display: inline-block;
  }
}
.custom-container {
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  padding: 20px;
  border-radius: 8px;
}

.custom-title {
  font-size: 2em;
  margin-bottom: 20px;
}

.custom-content {
  font-size: 1.2em;
}

/* Additional styling for the transparent app bar */
.v-application--is-ltr .v-app-bar {
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
}

.v-toolbar-title,
.v-btn {
  color: white; /* Make sure the text is visible on the transparent background */
}

.v-icon {
  color: white; /* Ensure the icon color is visible */
}
</style>
