<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="homeview" elevation="0">
          <v-card-title>{{ $t('message.welcometitle') }}</v-card-title>
          <v-card-text>{{ $t('message.welcometext') }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts"></script>

<style scoped>
.homeview {
  color: white;
  background-color: transparent;
}
</style>
