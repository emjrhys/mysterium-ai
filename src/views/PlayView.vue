<template>
  <v-item-group mandatory>
    <v-container>
      <v-row>
        <v-col
          v-for="n in 6"
          :key="n"
          cols="12"
          md="4"
        >
          <v-item v-slot="{ isSelected, toggle }">
            <v-card
              :color="isSelected ? 'primary' : ''"
              class="d-flex align-center"
              dark
              height="200"
              @click="toggle"
            >
              <v-img
                src="characters/1.png"
                height="200px"
              ></v-img>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
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
