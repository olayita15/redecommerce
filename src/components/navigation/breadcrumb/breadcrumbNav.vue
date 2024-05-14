<template>
  <div >
    <v-breadcrumbs
      class="breadcrumb"
      density="compact"
      divider="-"
      :items="finallyArray">
      <template v-slot:title="{ item }">
        <v-btn v-if="item.title" :to="generateRoute(item)" variant="plain"
          ><span class="primary-font font-size">{{ item.title }}</span></v-btn
        >
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  import { useRoute, useRouter } from "vue-router";

    const route = useRoute();
    const router = useRouter();

    const newArray = computed(()=>route.matched.filter(item => item.meta));

    const metaArray = computed(()=> newArray.value.map(item => item?.meta));

    const finallyArray = computed(()=>{
      const processArray = metaArray.value;
      const nullIndex = processArray.findIndex(item => !item.title && item.redirection);
      // Si se encuentra un valor null, reemplazarlo con un valor deseado
      if (nullIndex !== -1) {
        processArray.splice(nullIndex, 1, route.meta); // Reemplazar null con 0
      }
      const filteredArray = processArray.filter(objeto => Object.keys(objeto).length > 0);
      return filteredArray;
    });

    const generateRoute = (item) => {
      const destinationRoute = router.resolve({ name: item.redirection });
      // Verifica si la ruta destino tiene parámetros
      if (destinationRoute.params && Object.keys(destinationRoute.params).length > 0) {
        // Si tiene parámetros, incluye la ruta completa
        return destinationRoute.href;
      } else {
        // Si no tiene parámetros, genera la ruta normalmente
        return { name: item.redirection };
      }
    };
</script>

<style lang="scss" scoped>
  .font-size{
    font-size: medium;
  }
   @media (max-width: 900px) {
    .font-size{
      font-size:6px;
    }
  }
</style>
