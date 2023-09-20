import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import { useImageStore } from './image';

export const useGameStore = defineStore('game', () => {
  const imageStore = useImageStore();
  const characters = reactive([
    {
      profession: 'archaeologist',
      url: 'characters/archaeologist.png',
      keywords: ['treasure', 'jar', 'pottery', 'chest', 'shovel', 'discovery'],
      hidden: false,
    },
    {
      profession: 'captain',
      url: 'characters/captain.png',
      keywords: ['ocean', 'rope', 'net', 'compass', 'adventure', 'sailing'],
      hidden: false,
    },
    {
      profession: 'detective',
      url: 'characters/detective.png',
      keywords: ['office', 'files', 'trench coat', 'crime', 'mystery'],
      hidden: false,
    }
  ]);

  const rooms = reactive([
    {
      room: 'bathroom',
      url: 'rooms/bathroom.png',
      keywords: ['sink', 'tiles', 'water', 'mold', 'towel', 'soap', 'sponge'],
      hidden: false,
    },
    {
      room: 'bedroom',
      url: 'rooms/bedroom.png',
      keywords: ['dream', 'linen', 'curtains', 'rug', 'pillows', 'bedframe'],
      hidden: false,
    },
    {
      room: 'cellar',
      url: 'rooms/cellar.png',
      keywords: ['cement', 'darkness', 'cobwebs', 'wine', 'barrel'],
      hidden: false,
    },
    {
      room: 'chapel',
      url: 'rooms/chapel.png',
      keywords: ['angel', 'stained glass', 'light beams', 'cross', 'sacred book'],
      hidden: false,
    },
    {
      room: 'greenhouse',
      url: 'rooms/greenhouse.png',
      keywords: ['glass', 'green', 'dirt', 'worms', 'light beams', 'plants'],
      hidden: false,
    },
    {
      room: 'kitchen',
      url: 'rooms/kitchen.png',
      keywords: ['food', 'smoke', 'counter', 'tiles', 'pots', 'oven', 'rat', 'dinner'],
      hidden: false,
    },
    {
      room: 'library',
      url: 'rooms/library.png',
      keywords: ['books', 'dust', 'lamp', 'painting', 'shelves'],
      hidden: false,
    },
    {
      room: 'parlor',
      url: 'rooms/parlor.png',
      keywords: ['chair', 'couch', 'desk', 'painting', 'cocktail party', 'cocktails'],
      hidden: false,
    },
    {
      room: 'stable',
      url: 'rooms/stable.png',
      keywords: ['hay', 'dirt', 'wooden walls', 'horse tail', 'wooden stall', 'barn door'],
      hidden: false,
    },

  ]);

  const objects = reactive([
    {
      object: 'knife',
      url: 'objects/knife.png',
      keywords: ['metal', 'reflection', 'sharp'],
      hidden: false,
    },
    
  ]);
  
  const answers = ref([]);
  const phase = ref(0);
  const turn = ref(0);
  const clues = ref([]);
  const clueLoading = ref(false);

  const newGame = () => {
    resetGame();
    chooseAnswers();
    generateClueImage();
  }

  const resetGame = () => {
    phase.value = 0;
    const allPhaseOptions = [characters, rooms, objects]
    for (const options of allPhaseOptions) {
      for (const option of options) {
        option.hidden = false;
      }
    }
    clues.value = [];
  }

  const chooseAnswers = () => {
    const murderer = Math.floor(Math.random() * characters.length);
    const room = Math.floor(Math.random() * rooms.length);
    const weapon = Math.floor(Math.random() * objects.length);
    answers.value = [murderer, room, weapon];
  }

  const getCurrentPhaseOptions = () => {
    const options = [characters, rooms, objects];
    return options[phase.value];
  }

  const advancePhase = () => {
    phase.value++;
    clues.value = [];
  }

  const checkGuess = (guess) => {
    if (guess === answers.value[phase.value]) {
      advancePhase();
    } else if (clues.value.length === getCurrentPhaseOptions().length - 1) {
      advancePhase();
      // Display message that you were wrong
    } else {
      getCurrentPhaseOptions()[guess].hidden = true;
    }
    turn.value++;
    generateClueImage();
  }

  const getCurrentAnswer = () => {
    return getCurrentPhaseOptions()[answers.value[phase.value]];
  }

  const generateClueImage = async () => {
    const keywords = getCurrentAnswer().keywords;
    const shuffledKeywords = keywords.sort(() => 0.5 - Math.random());
    const selectedKeywords = shuffledKeywords.slice(0, 2);
    const prompt = `Digital art that embodies the spirit of ${selectedKeywords[0]}, with hints of ${selectedKeywords[1]}.`;
    clueLoading.value = true; 
    const response = await imageStore.getImage(prompt, 1);
    clueLoading.value = false; 
    clues.value.push(response[0].url);
  }

  return {characters, rooms, objects, answers, phase, turn, clues, clueLoading, newGame, checkGuess};
});
