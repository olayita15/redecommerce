<template>
  <div class="d-flex flex-column justify-center align-center">
    <v-carousel v-model="index" :show-arrows="false" hide-delimiters :cycle="cycle" :interval="3000"
    class="circular-box justify-content-start ma-0 pa-0 mx-5" 
    @update:modelValue="handleIndex"
    @mouseover="index=1"
      @mouseleave="index=0">
      <v-carousel-item
        v-for="(item,i) in slides"
        :key="i"
        cover
        >
        <div class="img-box ma-0 pa-0" @click="goTo(item)" >
          <div class="principal-img-box">
            <div class="background" :style="{ backgroundImage: `url(${item.background})` }"></div>
            <img :src="item?.src" alt="Imagen Circular" class="circular-image" />
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
    <div class="d-flex flex-column justify-center align-center">
      <span class="autor-font-regular title-font">{{ slides[index]?.title }}</span>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  const props = defineProps(['slides']);

  const index = ref(0);
  const cycle = ref(false);

  const handleIndex = (index_data) => {
    index.value = index_data;
  }

  const goTo = (item) => {
    if (item?.slug && item?.category) {
      router.push({name: 'ropaDetailPage', params: {category: item.category, id: item.slug}})
    }
  };
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
    width: 300px; /* Ancho máximo del círculo */
    max-height: 300px; /* Altura máxima del círculo */
    border-radius: 10%; /* Hace que el div sea circular */
    border: 1px inset #181818; /* Borde del círculo */
    overflow: hidden; /* Oculta el contenido que se sale del círculo */
    // display: flex;
    // justify-content: center;
    // align-items: center;
    color: #fff; /* Color del texto dentro del círculo */
    font-size: 18px; /* Tamaño del texto dentro del círculo */
    // background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Estrella_roja.svg/768px-Estrella_roja.svg.png");
    // background-color: rgba(30, 74, 155, 0.281);
    background-size: cover;
    background-position: center center;
  }

  .circular-box img.circular-image {
    position: relative;
    min-width: 300px;
    object-fit: scale-down; /* Ajusta la imagen para cubrir completamente el contenedor */
    border-radius: 50%; /* Garantiza que la imagen sea circular */
    image-rendering: optimizeQuality;
    z-index: 10;
    background-position: center center;
    width: 310px; /* Ajusta el ancho deseado */
    height: 310px; /* Ajusta la altura deseada */
    margin: 0 auto; /* Centra la imagen horizontalmente */
    display: block;
    image-rendering: crisp-edges;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    
  }
  .display-desktop{
    justify-content: center;
  }

  .img-box{
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .circular-image{
    background: rgba(255, 0, 0, 0.082); /* Red background */
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.4);
    }
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    filter: sepia(10); /* o cualquier otro filtro que desees aplicar */
    z-index: 0; /* asegura que esté detrás de la imagen */
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
