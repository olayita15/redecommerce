<template>
  <div class="w-100 ma-0 pa-0">
    <v-carousel
      height="400"
      :show-arrows="false"
      cycle
      :interval="18000"
      hide-delimiters
      class="ma-0 pa-0">
      <v-carousel-item v-for="(item,i) in objectSlides" :key="i" cover :src="item.backgroundSlide">
        <principal-carrousel
          :slides="item.slides"
          :backgroundSlide="item.backgroundSlide" />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup>
  import principalCarrousel from '../molecular/principalCarrousel.vue';

  const props = defineProps(['objectSlides']);
</script>

<style lang="scss" scoped></style>
