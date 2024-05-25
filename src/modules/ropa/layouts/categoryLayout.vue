<template>
    <v-card class="primary-font">
      <v-layout>
        <v-main>
          <v-container fluid class="pa-0 ma-0 elevation-0" grid-list-xs>
            <v-container fluid class="pa-0 ma-0 elevation-0">
              <div class="d-flex flex-column">
                <router-view v-slot="{ Component, route }">
                  <transition name="slide-fade" mode="out-in">
                    <component :is="Component" :key="route.name" />
                  </transition>
                </router-view>
              </div>
            </v-container> 
          </v-container>
        </v-main>
      </v-layout>
    </v-card>
  </template>
  
  <script setup>
      import navigationRopa from '../components/navigationRopa.vue';
      import { ref } from 'vue';
    const drawer = ref(false);
    const rail = ref(false);
    const tiposRopa= ref(['Gorras', 'Camisetas', 'Cuellos', 'Bufandas']);
    const tiposRopaValue= ref([]);
    const tallasRopa= ref(['S', 'M', 'L', 'XL']);
    const tallasRopaValue= ref([]);
    const colores = ref([
        { text: 'Rojo', value: 1, color: 'red' },
        { text: 'Azul', value: 2, color: 'blue' },
        { text: 'Verde', value: 3, color: 'green' },
        { text: 'Negro', value: 3, color: 'black' },
      ]);
    const colorChips = ref(['red','blue','green','purple'])
    const colorRopaValue= ref([]);
  </script>
  <style lang="scss" scoped>
  .title-font-size{
    font-size: 48px;
  }
    .chips-box{
      width: 100%;
      display: flex;
      flex-flow: row wrap;
    }
  </style>
  