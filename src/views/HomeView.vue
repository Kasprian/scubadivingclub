<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="title">
          <v-card class="homeview" elevation="0">
            <transition name="fade-in-up">
              <v-card-title v-if="showTitle" class="animated-title">{{
                $t('message.welcometitle')
              }}</v-card-title>
            </transition>
            <v-card-text>{{ $t('message.welcometext') }}</v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showTitle = ref(false)

onMounted(() => {
  showTitle.value = true
})
</script>

<style scoped>
.homeview {
  color: white;
  background-color: transparent;
}
.title {
  position: absolute;
  top: 50%; /* Adjust top position as per your design */
  left: 50%; /* Adjust left position as per your design */
  transform: translate(-50%, -50%); /* Center the element */
}
.v-card-title {
  font-size: 60px;
}
.fade-in-up-enter-active,
.fade-in-up-leave-active {
  transition:
    opacity 1s ease,
    transform 1s ease;
}
.fade-in-up-enter-from,
.fade-in-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.fade-in-up-enter-to,
.fade-in-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
