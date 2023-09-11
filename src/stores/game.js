import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

export const useGameStore = defineStore('game', () => {
  const characters = reactive([
    {
      profession: 'archaeologist',
      url: 'archaeologist.png',
      keywords: ['treasure', 'jar', 'pottery', 'chest', 'shovel'],
      hidden: false,
    },
    {
      profession: 'captain',
      url: 'captain.png',
      keywords: ['nautical', 'ship wheel', 'rope', 'net', 'compass'],
      hidden: false,
    },
    {
      profession: 'detective',
      url: 'detective.png',
      keywords: ['magnifying glass', 'files', 'crime tape'],
      hidden: false,
    }
  ]);
  
  const answers = ref([]);
  const phase = ref(0);
  const turn = ref(0);

  const newGame = () => {
    resetGame();
    chooseAnswers();
  }

  const resetGame = () => {
    phase.value = 0;
    for (const character of characters) {
      character.hidden = false;
    }
  }

  const chooseAnswers = () => {
    const murderer = Math.floor(Math.random() * characters.length);
    const room = Math.floor(Math.random() * characters.length);
    const weapon = Math.floor(Math.random() * characters.length);
    answers.value = [murderer, room, weapon];
  }

  const checkGuess = (guess) => {
    const options = [characters, characters, characters]
    if (guess === answers.value[phase.value]) {
      phase.value++;
    } else {
      options[phase.value][guess].hidden = true;
    }
    turn.value++;
  }

  return {characters, answers, phase, turn, newGame, checkGuess};
});
