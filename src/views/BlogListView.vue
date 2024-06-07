<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Blog</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="post in posts" :key="post.id" @click="goToPost(post.id)">
                <v-list-item-content>
                  <v-list-item-title>{{ post.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ post.date }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const posts = ref([
  { id: 1, title: 'Exploring Coral Reefs', date: '2024-06-01' },
  { id: 2, title: 'Night Diving Tips', date: '2024-05-20' },
  { id: 3, title: 'Best Scuba Gear for Beginners', date: '2024-05-10' }
])

const router = useRouter()

const goToPost = (id: number) => {
  router.push({ name: 'blog-post', params: { id } })
}
</script>

<style scoped></style>
