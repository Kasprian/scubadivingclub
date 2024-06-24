<template>
  <v-app>
    <v-app-bar class="toolbar" app color="transparent" elevation="0">
      <v-icon class="d-md-none" @click="drawer = !drawer"
        ><img src="@/assets/icons/burger_icon.svg" alt="Burger Icon" class="burger_icon"
      /></v-icon>
      <v-toolbar-title class="mr-12">Klub Nurkowy Siechnice</v-toolbar-title>
      <div class="d-none d-md-flex">
        <v-btn to="/">{{ $t('message.home') }}</v-btn>
        <v-btn to="/events">{{ $t('message.events') }}</v-btn>
        <v-btn to="/blog">{{ $t('message.blog') }}</v-btn>

        <v-btn to="/contact">{{ $t('message.contact') }}</v-btn>
        <v-btn @click="toggleLanguage">
          {{ currentLanguage }}
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary class="d-md-none">
      <v-list>
        <v-list-item @click="$router.push('/')">
          <v-list-item-title>{{ $t('message.home') }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push('/events')">
          <v-list-item-title>{{ $t('message.events') }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push('/blog')">
          <v-list-item-title>{{ $t('message.blog') }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push('/contact')">
          <v-list-item-title>{{ $t('message.contact') }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click="toggleLanguage">
          <v-list-item-title>{{ currentLanguage }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

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

const { locale, t } = useI18n()
const currentLanguage = ref<string>(locale.value)
const drawer = ref<boolean>(false)

const toggleLanguage = () => {
  if (currentLanguage.value === 'PL') {
    changeLanguage('EN')
  } else {
    changeLanguage('PL')
  }
}

const changeLanguage = (language: string) => {
  locale.value = language
  currentLanguage.value = language
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
@media (max-width: 600px) {
  .toolbar {
    background-color: #102c57 !important; /* Ensure toolbar is visible on mobile */
    padding: 10px; /* Example: Reduce padding */
    text-align: center;
  }
  .mobile-drawer {
    background-color: #102c57 !important; /* Ensure drawer is visible on mobile */
    color: white;
  }
  .v-btn {
    font-size: 12px; /* Example: Adjust button text size */
    color: white !important;
  }
  .v-list-item-title {
    color: white !important; /* Set list item text color to white */
  }
  .v-list-item-icon .v-icon {
    color: white !important; /* Set icon color to white on mobile */
  }
}
.burger_icon {
  max-width: 150%;
  max-height: 150%;
  filter: invert(98%) sepia(2%) saturate(2837%) hue-rotate(233deg) brightness(124%) contrast(100%);
  margin-left: 20px;
}
.v-list {
  background-color: #102c57 !important;
  color: white;
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
