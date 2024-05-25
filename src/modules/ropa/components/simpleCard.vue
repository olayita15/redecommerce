<template>
  <div>
    <div class="d-flex flex-column justify-center align-center my-5 card-box" @click="pushRoute(cardData)">
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
          <div class="d-flex flex-column justify-center">
            <div v-if="cardData?.descount" class="product-descount-box mt-4 text-subtitle-1 primary-font">
              <div class="product-price mt-5 primary-font">
                <div class="d-flex flex-column jusify-center align-start">
                  <span>
                    COP <b>{{ formatPrice(cardData?.price+4000) || '' }}</b>
                  </span> 
                </div>
              </div>
            </div>
            <div class="product-price-box text-subtitle-1 primary-font">
                  <span class="product-price primary-font">
                    <div class="d-flex flex-column jusify-center align-start">
                      <span>
                        COP <b>{{ formatPrice(cardData?.price) || '' }}</b> 
                      </span>
                    </div>
                  </span>
            </div>
          </div>
          
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
      <div class="primary-font title-font title-position">
        <span>
        {{ cardData.title|| 'Card title' }}
        </span>
      </div>

      <div class="autor-font-regular author-font author-position">
        <span>
          {{ cardData.author|| 'Card author' }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref} from 'vue';
  import { useRouter } from 'vue-router';
  import { toast } from 'vue3-toastify';


  const router = useRouter();

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

  function pushRoute(item){
    try {
      router.push({name:'ropaDetailPage', params: {id: item.slug}})
    } catch (error) {
      toast.error('No fue posible acceder a la página solicitada');
    }
  };
</script>

<style lang="scss" scoped>
  $primary-color-text: $fifth-color;
  $secondary-color-text: $fourth-color;
  $third-color-text: $third-color;
  $primary-color-background: $second-color;
  $secondary-color-background: $first-color;

  $relative_width: 250px;
  $relative_height: $relative_width + 50px;

  .card-box{
    width: $relative_width;
  }
  .card{
    width: $relative_width;
    height: $relative_height;
    border-radius: 8px;
    color: $secondary-color-text;
  }
  .title-font{
    font-size: medium;
    text-wrap: nowrap;
    color: $primary-color-text;
  }
  .title-position{
    align-self: flex-start;
  }
  .author-font{
    font-size: small;
    text-wrap: nowrap;
    color: $secondary-color-text;
  }
  .author-position{
    align-self: flex-start;
  }
  .product-price-box {
    justify-self: center;
    align-self: flex-start;
    z-index: -1;
    .product-price {
      background: $primary-color-text;
      padding: 0 10px;
      text-align: center;
      display: inline-block;
      font-size: 23px;
      font-weight: 200;
      color: $secondary-color-background;
      border-radius: 7px;
      // box-shadow: -10px 20px 15px -10px rgba(17, 233, 91, 0.3);
      .product-price-label{
        font-size: 15px;
        margin: 0;
        padding: 0;
        margin-bottom: -10px;
      }
    }
  }

  .product-descount-box {
    justify-self: center;
    align-self: flex-end;
    margin-bottom: -5px;
    .product-price {
      background: $primary-color-background;
      padding: 0 7px;
      text-align: center;
      display: inline-block;
      font-size: 20px;
      font-weight: 100;
      color: $secondary-color-text;
      border-radius: 7px;
      // box-shadow: -10px 20px 15px -10px rgba(17, 233, 91, 0.3);
      z-index: 0;
      .product-descount-label{
        font-size: 15px;
        margin: 0;
        padding: 0;
        margin-bottom: -10px;
      }

      b{
        text-decoration: line-through;
        font-style: italic;
      }
    }
  }

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
    .card-box{
      width: $relative_width - 110px;
    }
    .card{
      width: $relative_width - 110px;
      height: $relative_height - 110px;
    }
    .title-font{
      font-size: 9px;
      text-wrap: pretty;
    }
    .author-font{
      font-size: 7px;
    }

  .product-price-box {
    .product-price {
      padding: 0 2px;
      font-size: 9px;
      font-weight: 100;
      border-radius: 3px;
      .product-price-label{
        font-size: 10px;
      }
    }
  }

  .product-descount-box {
    margin-bottom: -10px;
    .product-price {
      padding: 0 2px;
      font-size: 7px;
      font-weight: 100;
      border-radius: 3px;
      .product-descount-label{
        font-size: 10px;
      }
    }
  }
}
</style>
