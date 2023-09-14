<template>
  <v-btn @click="gameStore.newGame()">Reset Game</v-btn>
  <v-item-group mandatory>
    <v-container>
      <v-row>
        <v-col
          v-for="option, index in currentPhaseOptions"
          v-show="!option.hidden"
          :key="index"
          cols="12"
          md="4"
        >
          <OptionCard :option="option" :index="index" />
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
  <div class="play">
    <div class="images">
      <v-img 
        v-for="imageUrl, index in gameStore.clues" 
        :key="index" 
        :width="300" 
        aspect-ratio="1/1" 
        :src="imageUrl" 
      />
    </div>
  </div>
  <p>{{gameStore.answers}}</p>
  <p>Phase: {{gameStore.phase}}</p>
  <p>Turn: {{gameStore.turn}}</p>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue';
import { useGameStore } from '@/stores/game';
import OptionCard from '@/components/OptionCard.vue';

const gameStore = useGameStore();

const images = ref(null);

const currentPhaseOptions = computed(() => {
  const phase = gameStore.phase;
  if (phase === 0) {
    return gameStore.characters;
  }
  if (phase === 1) {
    return gameStore.rooms;
  }
  else {
    return gameStore.characters;
  }
})

watchEffect(() => {
  if (gameStore.turn > 6 && gameStore.phase < 3) {
    alert('You lose!');
  } else if (gameStore.phase > 2) {
    alert('You win!');
  }
})

gameStore.newGame();
</script>

<style scoped>
.images {
  display: flex;
  gap: 1rem;

  margin-bottom: 1rem;
}

.btn-wrapper {
  display: flex;
  justify-content: center;
}
</style>
