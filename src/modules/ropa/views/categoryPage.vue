<template>
  <div style="max-width: 100%; min-height: 400px">
    <v-row justify="center" align="center" class="elevation-0 ma-0 pa-0">
        <div class="d-flex flex-row flex-wrap justify-center align-center">
          <v-row justify="center" align="center" class="elevation-0 ma-0 pa-0">
            <v-col class="ma-0 pa-0" v-for="(data, index) in actualRopajes" :key="index">
              <v-row justify="center" align="center" class="elevation-0 generic-card pa-0">
                <generic-card :cardData="data"></generic-card>
              </v-row>  
            </v-col>
          </v-row>
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

<style lang="scss" scoped>
.generic-card{
  margin: 10px 10px;
}

@media (max-width: 1200px) {
  .generic-card{
    margin: 10px 0;
  }
}
</style>
