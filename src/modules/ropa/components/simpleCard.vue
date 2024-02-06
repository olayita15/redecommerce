<template>
  <div>
    <div class="d-flex flex-column justify-center align-center ">
      <span
        class="primary-title-font title-font title-position"
        >{{ cardData.title|| 'Card title' }}</span
      >
      <span
        class="autor-font-regular"
        >{{ cardData.author|| 'Card author' }}</span
      >

      <v-card
        class="mx-auto card d-flex flex-column"
        :image="cardData.image || 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
        :variant="'outlined'"
        theme="dark"
        hover>
        <template #image>
          <v-img class="card-image" :src="cardData.image" />
        </template>
        <v-spacer></v-spacer>

        <v-card-actions class="card-actions">
          <!-- <v-btn
          width="150"
          size="x-large"
          color="green-lighten-2"
          variant="outlined">
          VER MÁS
        </v-btn> -->

          <v-spacer></v-spacer>
          <div class="product-price-box mt-4 text-subtitle-1 primary-font"
            ><span class="product-price mt-5 primary-font">
              COP <b>{{ formatPrice(cardData?.price) || '' }}</b>
            </span></div
          >
          <!-- <v-btn
        class="mt-8"
          color="blue-lighten-2"
          :icon="show ? 'mdi-arrow-up-drop-circle-outline' : 'mdi-arrow-down-drop-circle-outline'"
          @click="show = !show"></v-btn> -->
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text class="primary-font" style="background-color: beige;">
              <span>{{ cardData?.description }}</span>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </div>
</template>

<script setup>
  import {ref} from 'vue';
  const show = ref(false);
  const props = defineProps(['cardData']);
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
  .card{
    min-width: 300px;
    height: 350px;
  }
  .title-font{
    font-size: x-large;
  }
  .title-position{
    text-align: center;
  }
  .product-price-box {
            justify-self: center;
            align-self: flex-start;
            .product-price {
              background: #042c38fa;
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
    // .card-actions{
    //     display: none;
    // }
      .card-image {
        background-size: cover;
        height: 100%;
        transition: transform 0.3s ease-in-out;
      }

      .card:hover .card-image {
        transform: scale(1.1);
      }
      .card:hover .card-actions{
        display: flex;
        flex-flow: row nowrap;
        justify-items: center;
        align-items: center;
      }

      @media (max-width: 1200px) {
        .card{
          min-width: 200px;
          height: 250px;
        }
        .title-font{
        font-size: large;
      }
    }
</style>
