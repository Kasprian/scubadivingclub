import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    message: {
      home: 'Home',
      welcome: 'Welcome to the Scuba Diving Club',
      about: 'About Us',
      events: 'Upcoming Events',
      contact: 'Contact Us',
      blog: 'Blog'
      // Add other translations here
    }
  },
  pl: {
    message: {
      home: 'Strona główna',
      welcome: 'Witamy w Klubie Nurkowania',
      about: 'O nas',
      events: 'Nadchodzące wydarzenia',
      contact: 'Skontaktuj się z nami',
      blog: 'Blog'
      // Add other translations here
    }
  }
}

const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages // set locale messages
})

export default i18n
