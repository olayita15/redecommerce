<template>
  <v-container class="card-box-container">
    <v-card :loading="loading" class="mx-auto card-box elevation-5">
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="deep-purple"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>
      <v-row>
        <v-col>
          <v-card-item>
            <div class="card-item-box">
              <img
                class="image"
                :src="genericCardData.image || 'https://cdn.vuetifyjs.com/images/cards/cooking.png'"
              />
              <v-card-title class="max-width mt-3">
                <div class="title-text primary-title-font">
                  <span class="break-word">{{ genericCardData.title || 'Default Title' }}</span>
                </div>
              </v-card-title>
              <v-card-subtitle class="max-width ma-1">
                <span
                  class="me-1 autor-font-regular"
                  style="font-size: large;"
                >{{ genericCardData.author || 'Default Subtitle' }}</span
                >
                <v-icon
                  :color="genericCardData.iconColor || 'error'"
                  :icon="genericCardData.icon || 'mdi-fire-circle'"
                  size="small"
                ></v-icon>
              </v-card-subtitle>
            </div>
          </v-card-item>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue';

  const props = defineProps(['genericCardData']);

  const loading = ref(false);

  // ... Resto del código
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  .card-item-box{
    display: flex;
    flex-flow: column nowrap;
    word-wrap: break-word;
  }

  .image {
    max-width: 70%; /* Ajusta el ancho máximo de la imagen según tus necesidades */
    height: auto; /* Mantiene la proporción original de la imagen */
    align-self: center;
  }

  .card-box {
    width: 300px;
    height: 340px;
    border-radius: 25px;

  }

  .title-text {
    font-size: 20px;
    margin: 5px 0;
    white-space: wrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
  }
}
</style>
