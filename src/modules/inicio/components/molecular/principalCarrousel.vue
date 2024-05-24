<template>
  <div class="d-flex flex-column justify-center align-center">
    <span class="autor-font-regular">{{ slides[index]?.title }}</span>
    <v-carousel :show-arrows="false" cycle hide-delimiters class="circular-box justify-content-start ma-0 pa-0 mx-5" @update:modelValue="handleIndex">
      <v-carousel-item
        v-for="(item,i) in slides"
        :key="i"
        cover
        transition="fade-transition"
        >
        <div class="img-box ma-0 pa-0" @click="goTo(item)">
          <img :src="item?.src" alt="Imagen Circular" class="circular-image" />
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  const props = defineProps(['slides']);

  const index = ref(0);

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
    max-width: 300px; /* Ancho máximo del círculo */
    max-height: 300px; /* Altura máxima del círculo */
    border-radius: 50%; /* Hace que el div sea circular */
    // border: 10px groove #1818182d; /* Borde del círculo */
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
    
  }
  .display-desktop{
    justify-content: center;
  }

  .img-box{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;
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
