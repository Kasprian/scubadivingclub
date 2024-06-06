import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/HomeView.vue'
import About from './views/AboutView.vue'
import Events from './views/EventsView.vue'
import Contact from './views/ContactView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/events', component: Events },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
