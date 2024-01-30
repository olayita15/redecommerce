<!-- GenericCard.vue -->

<template>
  <img
    class="image"
    width="200"
    :src="genericCardData.image || 'https://cdn.vuetifyjs.com/images/cards/cooking.png'" />
  <div class="">
    <v-card
      :loading="loading"
      class="mx-auto card-box elevation-5 my-6"
      width="374"
      height="400">
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="deep-purple"
          height="4"
          indeterminate></v-progress-linear>
      </template>
      <v-card-item class="max-width">
        <v-img
        :src="genericCardData.logo || 'https://cdn.vuetifyjs.com/images/cards/cooking.png'"
          alt="logo"
          class="card-logo ">
        </v-img>
        <v-card-title
          ><div class="title-text">
            <span>{{ genericCardData.title || 'Default Title' }}</span>
          </div>
        </v-card-title>

        <v-card-subtitle class="max-width">
          <span
            class="me-1"
            >{{ genericCardData.subtitle || 'Default Subtitle' }}</span
          >
          <v-icon
            :color="genericCardData.iconColor || 'error'"
            :icon="genericCardData.icon || 'mdi-fire-circle'"
            size="small"></v-icon>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
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
          class="mt-5 max-width"
          style="height: 50px;"
          >{{ genericCardData.description || 'Default Description' }}</div
        >
        <div class="mt-4 text-subtitle-1"
          ><span class="product-price mt-5">
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

      <v-card-actions>
        <div>
          <v-btn color="deep-purple-lighten-2" variant="text" @click="reserve">
            Ver más
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </div>
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
  max-width: 250px;
}

.image{
  image-rendering: optimizeSpeed;
  position: absolute;
  margin-left: 225px;
  z-index: 5;
}
.card-box{
  border-radius: 25px;
  .card-logo {
    width: 65px;
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
  font-family: 'Roboto', sans-serif;
}

.product-price b {
  margin-left: 5px;
}

.title-text{
  max-width: 300px;
  text-wrap: wrap;
  word-wrap:break-word;
  font-family: 'Roboto', sans-serif;
}
</style>
