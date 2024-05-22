<template>
  <div class="my-5" style="max-width: 100%; min-height: 400px">
    <v-row justify="center" align="center">
        <div class="d-flex flex-row flex-wrap justify-space-evenly align-center">
          <v-col class="mx-3"  v-for="(data, index) in actualRopajes" :key="index">
            <generic-card :cardData="data"></generic-card>
          </v-col>
        </div>
    </v-row>
  </div>
</template>

<script setup>
  import {ref, computed, onMounted} from 'vue';
  import { useStore } from 'vuex';
  import { useRoute } from 'vue-router';

  const store = useStore();
  const route = useRoute();

  const actualFilterRopa = computed(() => store.getters['ropaStore/actualFilterRopa']);
  const actualRopajes = computed(() => store.getters['ropaStore/actualRopajes']);
  const addFilter = (filter_object) => store.dispatch("ropaStore/addFilter", filter_object);
  const cambiarCamisetas = () => store.dispatch("ropaStore/cambiarCamisetas");

  import genericCard from '../components/simpleCard.vue';

  onMounted(()=>{
    addFilter({'atributo':'category','valor':[route.params.category]});
  });

</script>

<style lang="scss" scoped></style>
