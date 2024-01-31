<!-- GenericCard.vue -->

<template>
  <v-container class="card-box-container w-100 mx-10">
    <img
      class="image"
      :src="genericCardData.image || 'https://cdn.vuetifyjs.com/images/cards/cooking.png'" />
    <div>
      <v-card :loading="loading" class="mx-auto card-box elevation-5 my-6">
        <template v-slot:loader="{ isActive }">
          <v-progress-linear
            :active="isActive"
            color="deep-purple"
            height="4"
            indeterminate></v-progress-linear>
        </template>
        <v-card-item>
          <img
      class="image-movil"
      :src="genericCardData.image || 'https://cdn.vuetifyjs.com/images/cards/cooking.png'" />
          <v-card-title class="max-width"
            ><div class="title-text primary-title-font">
              <span>{{ genericCardData.title || 'Default Title' }}</span>
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
              size="small"></v-icon>
          </v-card-subtitle>
        </v-card-item>

        <v-card-text class="my-1">
          <v-row align="center" class="mx-0">
            <v-rating
              :model-value="genericCardData.rating || 4.5"
              color="amber"
              density="compact"
              half-increments
              readonly
              size="small"></v-rating>

            <div
              class="text-grey ms-4"
              >{{ `${genericCardData.rating || 4.5} (${genericCardData.reviews || 0})` }}</div
            >
          </v-row>

          <div
            class="mt-5 max-width primary-font"
            style="height: 50px;"
            >{{ genericCardData.description || 'Default Description' }}</div
          >
          <div class="mt-4 text-subtitle-1 primary-font"
            ><span class="product-price mt-5 primary-font">
              COP<b>{{ formatPrice(genericCardData.price) || '' }}</b>
            </span></div
          >
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <!-- <v-card-title>{{ categoryLabel }}</v-card-title>

      <div class="px-4">
        <v-chip-group v-model="selection">
          <v-chip
            v-for="option in genericCardData.availability"
            :key="option"
            >{{ option }}</v-chip
          >
        </v-chip-group>
      </div> -->

        <v-card-actions class="actions-box primary-font">
          <v-btn color="deep-purple-lighten-2" variant="text" @click="reserve">
            Ver más
          </v-btn>
          <img
            :src="genericCardData.logo || 'https://cdn.vuetifyjs.com/images/cards/cooking.png'"
            alt="logo"
            class="card-logo " />
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue';

  const props = defineProps(['genericCardData']);

  const loading = ref(false);
  const selection = ref(1);

  const reserve = () => {
    loading.value = true;
    setTimeout(() => (loading.value = false), 2000);
  };

  const getCategoryLabel = () => {
    switch (props.genericCardData.category) {
      case 'libro':
        return 'Editoriales disponibles';
      case 'ropa':
        return 'Tallas disponibles';
      case 'accesorio':
        return 'Colores disponibles';
      default:
        return 'Opciones disponibles';
    }
  };

  const categoryLabel = getCategoryLabel();

  const formatPrice = (price) => {
    // Verifica si el precio es un número
    if (typeof price !== 'number') {
      return 'Invalid Price';
    }

    // Formatea el precio como estándar de pesos colombianos
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP'
    }).format(price);
  };
</script>

<style lang="scss" scoped>
  .card-box-container{
    margin: 0 20px;
  }

    .max-width{
      max-width: 255px;
    }

    .image{
      width: 300px;
      image-rendering: optimizeSpeed;
      position: absolute;
      margin-left: 235px;
      margin-top: -55px;
      z-index: 5;
    }

    .image-movil{
      display: none;
      width: 200px;
      image-rendering: optimizeSpeed;
      z-index: 5;
    }
    .card-box{
      width: 374px;
      height: 380px;

      display: flex;
      flex-flow: column nowrap;
      border-radius: 25px;
      margin: 0 250px;
      .card-logo {
        width: 65px;
      }

      .actions-box{
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
      }
    }

    .product-price {
      background: #11b7e9;
      padding: 7px 20px;
      text-align: center;
      display: inline-block;
      font-size: 24px;
      font-weight: 200;
      color: #fff;
      border-radius: 7px;
      box-shadow: -10px 20px 15px -10px rgba(17, 233, 91, 0.3);
    }

    .product-price b {
      margin-left: 5px;
    }

    .title-text{
      text-wrap: wrap;
      word-wrap:break-word;
      font-size: 30px;
      margin: 10px 0;
    }

    @media (max-width: 1288px) {
    .card-box {

    }

    .image {
      width: 250px;
    }

  }

    // Media query para pantallas menores a 700px
  @media (max-width: 800px) {
    .card-box {
      width: 274px;
      height: 580px;
      margin: 0; // Cambiar el margen a 0 o el valor que desees
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }

    .image {
      display: none; // Cambiar el margen izquierdo a 0 o el valor que desees
    }
    .image-movil{
    display: block;
    }

    .max-width{
      max-width: 330px;
    }
  }
</style>
