import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import EventsView from './views/EventsView.vue'
import ContactView from './views/ContactView.vue'
import BlogListView from './views/BlogListView.vue'
import BlogPostView from './views/BlogPostView.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import i18n from './i18n'

const vuetify = createVuetify({
  components,
  directives
})

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/events', component: EventsView },
  { path: '/contact', component: ContactView },
  { path: '/blog', component: BlogListView },
  { path: '/blog/:id', component: BlogPostView, name: 'blog-post' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(i18n)
app.mount('#app')
