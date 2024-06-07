<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Contact Us</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submitForm">
              <v-text-field label="Name" v-model="name"></v-text-field>
              <v-text-field label="Email" v-model="email"></v-text-field>
              <v-textarea label="Message" v-model="message"></v-textarea>
              <v-btn type="submit">Send</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = () => {
  alert(`Thank you, ${name.value}! We will get back to you soon.`)
  // Add form submission logic here
}
</script>

<style scoped></style>
