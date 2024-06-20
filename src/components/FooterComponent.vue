<template>
  <v-footer class="footer" app>
    <v-col>
      <v-row>
        <v-col cols="12">
          <span>&copy; 2024 Scuba Diving Club. All Rights Reserved.</span>
        </v-col>
      </v-row>
    </v-col>
  </v-footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer {
  text-align: center;
  background-color: transparent;
  color: white;
  padding: 10px 0;
  width: 100%;
  /* Ensure the footer stays at the bottom */
  position: absolute !important;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
