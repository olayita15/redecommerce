<template>
  <v-container class="card-box-container">
    <v-img
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
          <div class="card-item-box">
            <v-card-title class="max-width"
              ><div class="title-text primary-title-font">
                <span
                  class="break-word"
                  >{{ genericCardData.title || 'Default Title' }}</span
                >
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
          </div>
        </v-card-item>

        <v-card-text class="card-text-box">
          <div class="product-price-box mt-4 text-subtitle-1 primary-font"
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

        <v-card-actions class="card-actions-box primary-font">
          <v-btn color="deep-purple-lighten-2" variant="text" @click="reserve">
            COMPRAR
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
  .max-width{
    max-width: 65%;
  }
  .card-box-container{
    margin: 0 5vh;
    .image {
      image-rendering: optimizeSpeed;
      width: calc(20% - 20px);
      max-width: 400px;
      height: auto;
      position: absolute;
      margin-left: 225px;
      margin-top: -55px;
      z-index: 5;
    }

    .card-box {
      width: 350px;
      height: 320px;
      display: flex;
      flex-flow: column nowrap;
      border-radius: 25px;
      .card-item-box{
        .title-text{
          font-size: 30px;
          margin: 10px 0;
          white-space: wrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .card-text-box{
        display: flex;
        flex-flow: column;
        justify-content: flex-end;
        height: 40px;
        .product-price-box {
          justify-self: center;
          align-self: flex-start;
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
        }
      }
      .card-actions-box{
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        height: 70px;
        .card-logo {
          width: 15%;
          height: auto;
        }
      }
    }
  }
  @media (min-width: 1400px) {
    .card-box-container{
      .image {
        width: calc(247px);
      }
    }
  }
</style>
