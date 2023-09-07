<template>
  <div class="play">
    <div class="images">
      <v-img 
        v-for="image, index in images" 
        :key="index" 
        :width="300" 
        aspect-ratio="1/1" 
        cover 
        :src="image.url" 
      />
    </div>
    <v-text-field v-model="prompt" label="Prompt" variant="solo" />
    <v-slider
      v-model="numImages"
      :min="1"
      :max="3"
      :step="1"
      thumb-label
    />
    <div class="btn-wrapper">
      <v-btn color="teal" :loading="loading" @click="generateImage">Go</v-btn>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useImageStore } from '@/stores/image';

const imageStore = useImageStore();

const prompt = ref(null);
const numImages = ref(1);
const images = ref(null);
const loading = ref(false);

const generateImage = async () => {
  if (!prompt.value) return;

  loading.value = true;
  images.value = await imageStore.getImage(prompt.value, numImages.value);
  loading.value = false;
};
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
