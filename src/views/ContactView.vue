<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="contact">
          <v-card-title>{{ $t('message.contact_title') }}</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submitForm">
              <v-text-field :label="$t('message.name_label')" v-model="name"></v-text-field>
              <v-text-field :label="$t('message.email_label')" v-model="email"></v-text-field>
              <v-textarea :label="$t('message.message_label')" v-model="message"></v-textarea>
              <v-btn class="submit-btn" type="submit">{{ $t('message.send_button') }}</v-btn>
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
<style scoped>
.contact {
  background-color: #102c57;
  color: #f3f7ec;
}
.v-form {
  text-align: center;
}
</style>
