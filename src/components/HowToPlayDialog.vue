<template>
  <v-dialog
    v-model="active"
    width="auto"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        color="teal-darken-4"
        v-bind="props"
      >
        How to Play
      </v-btn>
    </template>

    <v-card>
      <v-card-text>
        Here's how to play the game!
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