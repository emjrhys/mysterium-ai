<template>
  <v-dialog
    v-model="active"
    width="auto"
  >
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
      >
        How to Play
      </v-btn>
    </template>

    <v-card id="how-to-play">
      <v-card-text>
        You have been invited to Murkbrook Manor for a séance. 
        As the clock strikes five, you make contact with a spirit who has been cursed to haunt the manor until their murderer is brought to justice. 
        The spirit needs your help. Find their murderer, the room in which the murder occurred, and the murder weapon. 
        At the top of each hour, the spirit will send you a clue: a memory in the form of a spectral image. 
        BEWARE! You must correctly interpret the spectral images before the clock strikes twelve, or the spirit will haunt Murkbrook Manor for eternity.
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

<style scoped>

#how-to-play {
  width: 50%;
}
</style>