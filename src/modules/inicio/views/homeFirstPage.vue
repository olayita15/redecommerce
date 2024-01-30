<template>
  <div class="first-page">
    <principal-carrousel />
    <div class="d-flex flex-column justify-center align-center my-10">
      <div class="d-flex flex-column justify-xl-space-evenly align-center">
        <div class="my-5"><h1>Artículos más vendidos</h1></div>
        <span class="my-5">Explora nuestros artículos más populares</span>
        <v-btn class="my-5" rounded="lg" size="x-large">Ver Todo</v-btn>
      </div>
      <div class="d-flex flex-row justify-space-evenly align-center flex-wrap">
        <div
          class="mx-10"
          v-for="(data, index) in genericCardDataArray"
          :key="index">
          <generic-card :genericCardData="data" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
      import {ref} from 'vue';

        import principalCarrousel from '../components/molecular/principalCarrousel.vue';
        import genericCard from '../../../components/generalCards/genericCard.vue';

        const genericCardDataArray = ref([
    {
      title: 'Camiseta Revolución Comunista',
      subtitle: 'Favorito de la Localidad',
      iconColor: 'red',
      icon: 'mdi-fire-circle',
      rating: 4.5,
      reviews: 413,
      price: 30000,
      description: 'Expresa tu apoyo a la revolución con esta elegante camiseta de temática comunista.',
      availability: ['XS', 'S', 'M', 'L', 'XL'],
      image: 'https://acdn.mitiendanube.com/stores/605/358/products/37n1-48054e5e8a19c7b9f716249053342208-640-0.png',
      category: 'ropa',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg'
    },
    {
      title: 'Discusiones marxistas para la revolución en Colombia',
      subtitle: 'Juan Sebastián Cristancho Rojas',
      iconColor: 'red',
      icon: 'mdi-fire-circle',
      rating: 4.7,
      reviews: 200,
      price: 3999,
      description: 'Mantente abrigado y con estilo con esta acogedora sudadera que promueve la unidad de los trabajadores.',
      availability: ['Teoría & Praxis'],
      image: 'https://lh3.googleusercontent.com/proxy/JasIg0veC-4zpIeKNFhP3hKSHNWyJCLweqCe4lV4aF5p3zNnnRJQP1u2rTeta-Ogq8W0a1F75Wj0H8MBR-taWfPj0XRclzZYyTH7L0rhwSvRfjONYcaIYdJEoAllMwiqqARo8G9QqhY_Pzmayvoa',
      category: 'libro',
      logo: 'https://semanariovoz.com/wp-content/uploads/2015/04/09/teopraxisplano21.gif'
    },
    {
      title: 'Mochila Símbolo de Igualdad',
      subtitle: 'Lleva el Mensaje a Todas Partes',
      iconColor: 'red',
      icon: 'mdi-fire-circle',
      rating: 4.5,
      reviews: 180,
      price: 4999,
      description: 'Difunde el mensaje de igualdad y solidaridad con esta versátil mochila.',
      availability: ['Rojo','Negro'],
      image: 'https://images.creativefabrica.com/products/thumbnails/2023/09/04/tYvYxGtKe/2Uv67oT2m9vDEgyUCWGHyZy4kLZ.png',
      category: 'accesorio',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Coat_of_arms_of_the_Soviet_Union_%281923%E2%80%931936%29.svg/181px-Coat_of_arms_of_the_Soviet_Union_%281923%E2%80%931936%29.svg.png'
    },
    // Añade más objetos de datos para más tarjetas
    // ...
  ]);

  
</script>

<style lang="scss" scoped>

</style>
