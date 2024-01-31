<template>
  <div class="d-flex flex-column justify-center  carousel-box">
    <v-carousel
      cycle
      hide-delimiters
      progress="red"
      class="circular-box">
      <v-carousel-item
        v-for="(item,i) in slides"
        :key="i"
        cover
        transition="scroll-x-transition"
        ><img :src="item.src" alt="Imagen Circular" class="circular-image">
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup>
  import {ref} from 'vue';

    const slides = ref(
      [
          {
            src: 'https://acdn.mitiendanube.com/stores/605/358/products/37n1-48054e5e8a19c7b9f716249053342208-640-0.png',
          },
          {
            src: 'https://www.progresando.com/wp-content/uploads/2023/06/KesaneMX-Manifiesto-comunista-El-Karl-Marx-Engeles-GL-EMU.fw_.png',
          },
          {
            src: 'https://www.c1c.com.br/wp-content/uploads/2016/12/mockup_feminina_marx_transp.png',
          },

        ],
    );
</script>

<style lang="scss" scoped>
.carousel-box{
  background-image: url('https://scontent.fbog4-1.fna.fbcdn.net/v/t39.30808-6/331717636_573404524742698_5087273115374914680_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeG9_zj9kyYFpYHB8Q7p6oe9lw9jKSPV53-XD2MpI9Xnf8DeqYZE2cV8sOHngTozbqk&_nc_ohc=jpEjifDVvG4AX9F0tQk&_nc_ht=scontent.fbog4-1.fna&oh=00_AfAzqLuh8740FyFJJ9CLO9YekxNV7qkCPMZemq9fm1Rwdg&oe=65BFB4C3');
  background-size:cover;
  background-position: center;
  min-height: 350px;
}
  .circular-box {
    width: 300px; /* Ancho del círculo */
    max-height: 300px; /* Altura del círculo */
    border-radius: 50%; /* Hace que el div sea circular */
    border: 5px solid #0e0e0e; /* Borde del círculo */
    overflow: hidden; /* Oculta el contenido que se sale del círculo */
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff; /* Color del texto dentro del círculo */
    font-size: 18px; /* Tamaño del texto dentro del círculo */
    background-color: rgba(255, 0, 0, 0.685);
  }

  /* Estilos para la imagen dentro del círculo */
  .circular-box img.circular-image {
    width: 100%; /* Ajusta la imagen al 100% del contenedor */
    height: 100%; /* Ajusta la altura al 100% del contenedor */
    object-fit:contain; /* Ajusta la imagen para cubrir completamente el contenedor */
    border-radius: 50%; /* Garantiza que la imagen sea circular */
    z-index: 10;
  }

  @media (max-width: 700px) {
    .carousel-box{
      align-items: center;
      background-size:cover;
      background-position:bottom;
    }

    .circular-box {
    width: 300px; /* Ancho del círculo */
    height: 100px; /* Altura del círculo */
  }

  }
</style>
