import { defineStore } from 'pinia';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

export const useImageStore = defineStore('image', () => {
  const getImage = async (prompt, numImages) => {
    const body = {
      prompt,
      n: numImages,
      size: '256x256',
    };

    let response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
    });

    response = await response.json();

    return response.data;
  };

  return { getImage };
});
