<template>
  <v-layout>
    <v-app-bar
      color="teal-darken-4"
      density="compact"
    >
      <v-app-bar-title>MysterAIm</v-app-bar-title>
  
      <template #append>
        <HowToPlayDialog />
      </template>
    </v-app-bar>

    <v-main class="content">
      <RouterView />
    </v-main>
  </v-layout>
</template>

<script setup>
import { RouterView } from 'vue-router';
import HowToPlayDialog from '@/components/HowToPlayDialog.vue';
</script>

<style scoped>
.content {
  width: 100%;
}
</style>
