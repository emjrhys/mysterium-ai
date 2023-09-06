import { defineStore } from 'pinia'

const apiKey = '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' // TODO: obfuscate this before publishing to the internet

export const useImageStore = defineStore('image', () => {
  const getImage = async (prompt) => {
    const body = {
      prompt,
      n: 1,
      size: '256x256',
    }

    let response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
    })

    response = await response.json()
    console.log(response)

    return response.data[0].url
  }

  return { getImage }
})
