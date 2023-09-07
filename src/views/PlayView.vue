<template>
  <div class="play">
    <v-img
      :width="300"
      aspect-ratio="1/1"
      cover
      :src="imageUrl"
    />
    <v-text-field v-model="prompt" label="Prompt" variant="solo" />
    <v-btn 
      color="teal" 
      :loading="loading"
      @click="generateImage"
    >Go</v-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useImageStore } from '@/stores/image'

const imageStore = useImageStore()

const prompt = ref(null)
const imageUrl = ref(null)
const loading = ref(false)

const generateImage = async () => {
  if (!prompt.value) return

  loading.value = true
  imageUrl.value = await imageStore.getImage(prompt.value)
  loading.value = false
}
</script>

<style>
</style>
