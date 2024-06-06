<template>
  <div>
    <h1>Contact Us</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="message"></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submitForm() {
      alert(`Thank you, ${this.name}! We will get back to you soon.`)
      // Add form submission logic here
    }
  }
}
</script>
