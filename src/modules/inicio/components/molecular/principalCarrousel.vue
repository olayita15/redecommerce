<template>
  <div
    class="d-flex flex-row align-center carousel-box elevation-5"
    >
    <v-carousel cycle hide-delimiters class="circular-box justify-content-start ma-0 pa-0 mx-5">
      <v-carousel-item
        v-for="(item,i) in slides"
        :key="i"
        cover
        transition="fade-transition"
        ><img :src="item.src" alt="Imagen Circular" class="circular-image" />
      </v-carousel-item>
    </v-carousel>
    <!-- <div class="d-flex justify-content-center text-center display-desktop" >
      <v-btn color="red">INGRESA YA</v-btn>
    </div> -->
  </div>
</template>

<script setup>
  const props = defineProps(['slides', 'backgroundSlide']);
</script>

<style lang="scss" scoped>
  .carousel-box {
    background-size:contain;
    background-position: center;
    height: 100%;
    width: 100%;
  }

  .circular-box {
    width: 60%; /* Ancho del círculo como un porcentaje de la pantalla */
    height: 60%; /* Altura del círculo como un porcentaje de la pantalla */
    max-width: 300px; /* Ancho máximo del círculo */
    max-height: 300px; /* Altura máxima del círculo */
    border-radius: 50%; /* Hace que el div sea circular */
    // border: 1px solid #181818; /* Borde del círculo */
    overflow: hidden; /* Oculta el contenido que se sale del círculo */
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff; /* Color del texto dentro del círculo */
    font-size: 18px; /* Tamaño del texto dentro del círculo */
    background-color: rgba(0, 0, 0, 0.623);
  }

  .circular-box img.circular-image {
    min-width: 300px;
    width: 100%; /* Ajusta la imagen al 100% del contenedor */
    height: 100%; /* Ajusta la altura al 100% del contenedor */
    object-fit:scale-down; /* Ajusta la imagen para cubrir completamente el contenedor */
    border-radius: 50%; /* Garantiza que la imagen sea circular */
    image-rendering: optimizeQuality;
    z-index: 10;
  }
  .display-desktop{
    justify-content: center;
  }

  @media (max-width: 900px) {
    .carousel-box {
      justify-content: center;
      align-items: center;
      background-size: cover;
      background-position: bottom;
    }

    .circular-box {
      width: 80%; /* Ancho del círculo como un porcentaje de la pantalla */
      height: 40%; /* Altura del círculo como un porcentaje de la pantalla */
    }

    .display-desktop{
      display: none;
    }
  }
</style>
