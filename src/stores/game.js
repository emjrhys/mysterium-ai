import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', () => {
  const characters = [
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
  ];
  
  let murderer;
  let phase = 0;

  const newGame = () => {
    resetGame();
    chooseMurderer();
  }

  const resetGame = () => {
    phase = 0;
    for (const character of characters) {
      character.hidden = false;
    }
  }

  const chooseMurderer = () => {
    murderer = Math.floor(Math.random() * characters.length);
  }

  const checkGuess = (guess) => {
    if (phase === 0) {
      if (guess === murderer) {
        phase++;
      } else {
        characters[guess].hidden = true;
      }
    }
    
  }

  return {characters, murderer, newGame, checkGuess};
});
