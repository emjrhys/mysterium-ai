<template>
  <header>
    <HowToPlayDialog />
  </header>

  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router';
import HowToPlayDialog from '@/components/HowToPlayDialog.vue';
</script>

<style scoped>
</style>
