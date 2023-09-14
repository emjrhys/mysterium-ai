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

  const rooms = reactive([
    {
      room: 'bathroom',
      url: 'rooms/bathroom.png',
      keywords: [],
      hidden: false,
    },
    {
      room: 'bedroom',
      url: 'rooms/bedroom.png',
      keywords: [],
      hidden: false,
    },
    {
      room: 'cellar',
      url: 'rooms/cellar.png',
      keywords: [],
      hidden: false,
    },
    {
      room: 'chapel',
      url: 'rooms/chapel.png',
      keywords: [],
      hidden: false,
    },
    {
      room: 'greenhouse',
      url: 'rooms/greenhouse.png',
      keywords: [],
      hidden: false,
    },
    {
      room: 'kitchen',
      url: 'rooms/kitchen.png',
      keywords: [],
      hidden: false,
    },
    {
      room: 'library',
      url: 'rooms/library.png',
      keywords: [],
      hidden: false,
    },
    {
      room: 'parlor',
      url: 'rooms/parlor.png',
      keywords: [],
      hidden: false,
    },
    {
      room: 'stable',
      url: 'rooms/stable.png',
      keywords: [],
      hidden: false,
    },

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
    const room = Math.floor(Math.random() * rooms.length);
    const weapon = Math.floor(Math.random() * characters.length);
    answers.value = [murderer, room, weapon];
  }

  const checkGuess = (guess) => {
    const options = [characters, rooms, characters]
    if (guess === answers.value[phase.value]) {
      phase.value++;
    } else {
      options[phase.value][guess].hidden = true;
    }
    turn.value++;
  }

  return {characters, rooms, answers, phase, turn, newGame, checkGuess};
});
