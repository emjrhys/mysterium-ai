<template>
  <v-item v-slot="{ isSelected, toggle }">
    <v-card
      :color="isSelected ? 'primary' : ''"
      class="d-flex align-center"
      dark
      @click="gameStore.checkGuess(index)"
    >
      <v-img
        :src="`images/${option.url}`"
      ></v-img>
    </v-card>
  </v-item>
</template>

<script setup>
import { useGameStore } from '@/stores/game';

const gameStore = useGameStore();

defineProps({
  option: Object,
  index: Number,
});

</script>

<style scoped>

</style>