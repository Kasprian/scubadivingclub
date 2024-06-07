<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>{{ post.title }}</v-card-title>
          <v-card-subtitle>{{ post.date }}</v-card-subtitle>
          <v-card-text>
            <p>{{ post.content }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const post = ref({ title: '', date: '', content: '' })

const route = useRoute()

const fetchPost = (id: number) => {
  const allPosts = [
    {
      id: 1,
      title: 'Exploring Coral Reefs',
      date: '2024-06-01',
      content: 'Content of exploring coral reefs.'
    },
    {
      id: 2,
      title: 'Night Diving Tips',
      date: '2024-05-20',
      content: 'Content of night diving tips.'
    },
    {
      id: 3,
      title: 'Best Scuba Gear for Beginners',
      date: '2024-05-10',
      content: 'Content of best scuba gear for beginners.'
    }
  ]

  post.value = allPosts.find((post) => post.id === id) || {
    title: 'Not Found',
    date: '',
    content: 'The post you are looking for does not exist.'
  }
}

onMounted(() => {
  const postId = Number(route.params.id)
  fetchPost(postId)
})
</script>

<style scoped></style>
