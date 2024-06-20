import { createI18n } from 'vue-i18n'

import enHome from './locales/en/home.json'
import enAbout from './locales/en/about.json'
import enEvents from './locales/en/events.json'
import enContact from './locales/en/contact.json'
import enBlog from './locales/en/blog.json'

// Import translations for Polish
import plHome from './locales/pl/home.json'
import plAbout from './locales/pl/about.json'
import plEvents from './locales/pl/events.json'
import plContact from './locales/pl/contact.json'
import plBlog from './locales/pl/blog.json'

const messages = {
  en: {
    message: {
      ...enHome.message,
      ...enAbout.message,
      ...enEvents.message,
      ...enContact.message,
      ...enBlog.message
    }
  },
  pl: {
    message: {
      ...plHome.message,
      ...plAbout.message,
      ...plEvents.message,
      ...plContact.message,
      ...plBlog.message
    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'pl', // set locale
  fallbackLocale: 'pl', // set fallback locale
  messages // set locale messages
})

export default i18n
