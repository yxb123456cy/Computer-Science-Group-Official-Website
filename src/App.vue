<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import Footer from '@/components/layout/Footer.vue'
import NavBar from '@/components/layout/NavBar.vue'

const route = useRoute()
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <Footer v-if="route.path === '/'" />
</template>

<style scoped>
</style>
