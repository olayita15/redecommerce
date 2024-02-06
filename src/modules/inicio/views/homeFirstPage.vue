<template>
  <div class="first-page">
    <super-carrousel :objectSlides="objectSlides"  />
    <div class="d-flex flex-column justify-center align-center">
      <div class="d-flex flex-column justify-xl-space-evenly align-center mb-10">
        <div class="my-5 primary-font"><h1>Artículos más vendidos</h1></div>
        <span class="my-5 primary-font">Explora nuestros artículos más populares</span>
        <v-btn class="my-5 primary-font" rounded="lg" size="x-large">Ver Todo</v-btn>
      </div>
      <div class="cards-box d-flex flex-row flex-wrap justify-space-around align-center">
        <div
          v-for="(data, index) in genericCardDataArray"
          :key="index">
          <generic-card class="generic-desktop-card" :genericCardData="data" />
          <!-- <genericMobileCard class="generic-mobile-card" :genericCardData="data" /> -->
          <simple-card class="generic-mobile-card" :cardData="data" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
      import {ref} from 'vue';

        import superCarrousel from '../components/organism/superCarrousel.vue';
        import genericCard from '../../../components/generalCards/genericCard.vue';
        import genericMobileCard from '../../../components/generalCards/genericMobileCard.vue';
        import simpleCard from '../../ropa/components/simpleCard.vue';

const objectSlides = [{
  backgroundSlide :
    'https://libreria.luchadeclases.org/pub/media/ubcontentslider/images/l/i/libro_filosofia_15_.jpg' ,
  slides : [
    { src: 'https://patriaroja.pe/wp-content/uploads/2022/05/3-1.png' },
    { src: 'https://images.pagina12.com.ar/styles/width960/public/2017-03/sl30fo03_1.png?itok=w3848JbB' },
    { src: 'https://1.bp.blogspot.com/-CcYHiz_IGiM/XpryqxUYM4I/AAAAAAAAD4I/8WQ5WVnLh10ZUXp1u5-d8G4RnCs2gWnPwCLcBGAsYHQ/s1600/92699421_224968638774048_8381766954616094720_n.png' },
  ]
},{
  backgroundSlide :
    'https://s.libertaddigital.com/2020/10/09/1280/0/black-lives-matter-flag-comunista.jpg' ,
  slides : [
    { src: 'https://www.punx.co.uk/wp-content/uploads/productimages/luxury-gay-space-communism-t-shirt.png' },
    { src: 'https://www.lavanguardia.com/files/article_gallery_microformat/uploads/2019/06/13/5fa534aa017ee.png' },
    { src: 'https://www.c1c.com.br/wp-content/uploads/2016/12/mockup_feminina_marx_transp.png' },
  ]
},{
  backgroundSlide :
    'https://langostaliteraria.com/wp-content/uploads/2022/02/Imagen-central-01-4-scaled.jpg' ,
  slides : [
    { src: 'https://cdnx.jumpseller.com/queleoconce/image/14203297/resize/540/540?1611333768' },
    { src: 'https://www.atomcomics.net/52141-thickbox_default/cuadernos-ucranianos-diario-de-una-invasion.jpg' },
    { src: 'https://cdn1.despertaferro-ediciones.com/wp-content/uploads/2023/04/DFC5-305x318.png' },
  ]
},];



        const genericCardDataArray = ref([
    {
      title: 'Camiseta Revolución Comunista',
      author: 'Ernesto Ché Guevara',
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
      author: 'Juan Sebastián Cristancho Rojas',
      iconColor: 'red',
      icon: 'mdi-fire-circle',
      rating: 4.7,
      reviews: 200,
      price: 29999,
      description: 'Mantente abrigado y con estilo con esta acogedora sudadera que promueve la unidad de los trabajadores.',
      availability: ['Teoría & Praxis'],
      image: "https://www.progresando.com/wp-content/uploads/2023/06/KesaneMX-Manifiesto-comunista-El-Karl-Marx-Engeles-GL-EMU.fw_.png",
      category: 'libro',
      logo: 'https://semanariovoz.com/wp-content/uploads/2015/04/09/teopraxisplano21.gif'
    },
    {
      title: 'Mochila Símbolo de Igualdad',
      author: 'La panadería Rusa',
      iconColor: 'red',
      icon: 'mdi-fire-circle',
      rating: 4.5,
      reviews: 180,
      price: 49999,
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
  .generic-mobile-card{
    display: none;
    margin: 25px 25px;
  }
  .cards-box{
    max-width: 90%;
  }

  @media (max-width: 900px) {
    .generic-desktop-card{
      display: none;
    }
    .generic-mobile-card{
    display: block;
  }
    .first-page{
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }

  }
</style>
