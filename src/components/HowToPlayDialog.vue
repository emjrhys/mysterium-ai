<template>
  <v-dialog
    v-model="active"
    width="auto"
    max-width="800"
  >
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
      >
        How to Play
      </v-btn>
    </template>

    <v-card>
      <v-card-text>
        Use the spectral images to guide you in the right direction.
        First, click on the person you think is the murderer.
        When you guess the murderer correctly, click on the room where you think the murder occurred. 
        When you guess the room correctly, click on the object you think was the murder weapon.
        If you guess all three correctly before midnight (i.e., within seven guesses), you win!
      </v-card-text>
      <v-card-actions>
        <v-btn color="teal-darken-4" block @click="active = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';

const active = ref(false);
</script>