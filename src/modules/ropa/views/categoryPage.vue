<template>
  <div class="my-5" style="max-width: 100%;">
    <v-row justify="center" align="center">
        <div class="d-flex flex-row flex-wrap justify-space-evenly align-center">
          <v-col class="mx-3"  v-for="(data, index) in actualCamisetas" :key="index">
            <generic-card :cardData="data"></generic-card>
          </v-col>
        </div>
    </v-row>
  </div>
</template>

<script setup>
  import {ref, computed} from 'vue';
  import { useStore } from 'vuex';

  const store = useStore()

  const actualCamisetas = computed(() => store.getters['ropaStore/actualCamisetas']);

  import genericCard from '../components/simpleCard.vue';

</script>

<style lang="scss" scoped></style>
