<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from '@/components/layout/Footer.vue'
import NavBar from '@/components/layout/NavBar.vue'
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
</style>
