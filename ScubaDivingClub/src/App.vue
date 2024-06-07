<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Scuba Diving Club</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">{{ $t('message.home') }}</v-btn>
      <v-btn text to="/about">{{ $t('message.about') }}</v-btn>
      <v-btn text to="/events">{{ $t('message.events') }}</v-btn>
      <v-btn text to="/contact">{{ $t('message.contact') }}</v-btn>
      <v-btn text to="/blog">{{ $t('message.blog') }}</v-btn>
      <v-select
        v-model="locale"
        :items="languages"
        label="Language"
        @change="changeLanguage"
      ></v-select>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const languages = ref(['en', 'pl'])

const changeLanguage = (lang: string) => {
  locale.value = lang
}
</script>

<style scoped></style>

<style scoped>
header {
  line-height: 1.5;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 10px;
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
</style>
