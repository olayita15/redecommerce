<template>
  <div class="my-5" style="max-width: 100%;">
    <v-row justify="center" align="center">
        <div class="d-flex flex-row flex-wrap justify-space-evenly align-center">
          <v-col class="mx-3"  v-for="(data, index) in genericCardDataArray" :key="index">
            <generic-card :cardData="data"></generic-card>
          </v-col>
        </div>
    </v-row>
  </div>
</template>

<script setup>
        import {ref, onMounted} from 'vue';


          import genericCard from '../components/simpleCard.vue';
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
      image: 'https://ih1.redbubble.net/image.470608356.1399/aldr,x1700,front-c,185,103,750,1000-bg,f8f8f8.jpg',
      category: 'ropa',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg'
    },
    {
      title: 'Camiseta Marxismo Creativo',
      author: 'Ana González',
      iconColor: 'red',
      icon: 'mdi-fire-circle',
      rating: 4.2,
      reviews: 320,
      price: 27000,
      description: 'Demuestra tu creatividad y pasión por el marxismo con esta vibrante camiseta.',
      availability: ['S', 'M', 'L', 'XL'],
      image: 'https://ih1.redbubble.net/image.519375768.5238/gtdr,x1500,front,black-c,216,320,600,600-bg,f8f8f8.u2.jpg',
      category: 'ropa',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg'
    },
    {
      title: 'Camiseta Solidaridad Internacional',
      author: 'Carlos Rodríguez',
      iconColor: 'red',
      icon: 'mdi-fire-circle',
      rating: 4.8,
      reviews: 240,
      price: 32000,
      description: 'Muestra tu apoyo a la solidaridad internacional con esta camiseta única.',
      availability: ['XS', 'M', 'XL'],
      image: 'https://ih1.redbubble.net/image.540361567.5111/gtdr,x1500,front,black-c,216,320,600,600-bg,f8f8f8.u1.jpg',
      category: 'ropa',
      logo: 'https://ih1.redbubble.net/image.540361567.5111/gtdr,x1500,front,black-c,216,320,600,600-bg,f8f8f8.u1.jpg'
    },
    {
      title: 'Camiseta Feminismo Socialista',
      author: 'María López',
      iconColor: 'red',
      icon: 'mdi-fire-circle',
      rating: 4.6,
      reviews: 380,
      price: 29000,
      description: 'Celebra la unión del feminismo y el socialismo con esta poderosa camiseta.',
      availability: ['S', 'L', 'XL'],
      image: 'https://render.fineartamerica.com/images/rendered/default/t-shirt/35/2/images/artworkimages/medium/3/ussr-soviet-union-communist-star-communism-russia-tony-rubino-transparent.png?targetx=0&targety=0&imagewidth=350&imageheight=327&modelwidth=350&modelheight=425',
      category: 'ropa',
      logo: 'https://render.fineartamerica.com/images/rendered/default/t-shirt/35/2/images/artworkimages/medium/3/ussr-soviet-union-communist-star-communism-russia-tony-rubino-transparent.png?targetx=0&targety=0&imagewidth=350&imageheight=327&modelwidth=350&modelheight=425'
    },
    {
      title: 'Camiseta Revolución de Octubre',
      author: 'Iván Petrov',
      iconColor: 'red',
      icon: 'mdi-fire-circle',
      rating: 4.4,
      reviews: 310,
      price: 31000,
      description: 'Conmemora la Revolución de Octubre con esta histórica camiseta.',
      availability: ['M', 'L', 'XL'],
      image: 'https://communist-clothing.com/cdn/shop/products/product-image-556527966_grande_c842d9b5-11ea-4f19-af07-dcb8f13c9750_large.jpg?v=1518141004',
      category: 'ropa',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg'
    },
    {
      title: 'Camiseta Che Vive',
      author: 'Rosa Jiménez',
      iconColor: 'red',
      icon: 'mdi-fire-circle',
      rating: 4.7,
      reviews: 360,
      price: 28000,
      description: 'Rinde homenaje al Che Guevara con esta vibrante camiseta que celebra su legado.',
      availability: ['XS', 'S', 'L', 'XL'],
      image: 'https://ih1.redbubble.net/image.546980332.3329/gtdr,x1500,front,black-c,216,320,600,600-bg,f8f8f8.u5.jpg',
      category: 'ropa',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg'
    },
    {
      title: 'Camiseta Proletariado Unido',
      author: 'Pablo Hernández',
      iconColor: 'red',
      icon: 'mdi-fire-circle',
      rating: 4.5,
      reviews: 290,
      price: 33000,
      description: 'Únete al movimiento con esta camiseta que aboga por la unidad del proletariado.',
      availability: ['S', 'M', 'XL'],
      image: 'https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1YJ5or21TBuNjy0Fjq6yjyXXaz%2FCuba-Rip-Communist-Che-Guevara-Men-s-T-shirt-Fashion-Casual-O-neck-Men-T-Shirt.jpg_480x480.jpg',
      category: 'ropa',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg'
    },
    {
      title: 'Camiseta Socialismo en Acción',
      author: 'Elena Ramírez',
      iconColor: 'red',
      icon: 'mdi-fire-circle',
      rating: 4.3,
      reviews: 260,
      price: 30000,
      description: 'Inspira cambio con esta camiseta que promueve el socialismo en acción.',
      availability: ['XS', 'L', 'XL'],
      image: 'https://teefury.com/cdn/shop/products/flat-tee-color-blk_5803d13c-5ad6-4e44-bc51-13f07bc54535_650x650.jpg?v=1572665710',
      category: 'ropa',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg'
    },
    {
      title: 'Camiseta Revolución Popular',
      author: 'Javier Martínez',
      iconColor: 'red',
      icon: 'mdi-fire-circle',
      rating: 4.6,
      reviews: 340,
      price: 31000,
      description: 'Lucha por la revolución popular con esta impactante camiseta.',
      availability: ['S', 'M', 'L', 'XL'],
      image: 'https://rlv.zcache.com/communiste_cold_war_flag_baby_bodysuit-r536d59f3874b4bd89b3309083bcd86b4_j82wr_307.jpg',
      category: 'ropa',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg'
    },
    {
      title: 'Camiseta Antifascista',
      author: 'Luisa Castro',
      iconColor: 'red',
      icon: 'mdi-fire-circle',
      rating: 4.8,
      reviews: 370,
      price: 32000,
      description: 'Haz frente al fascismo con esta camiseta que defiende los valores antifascistas.',
      availability: ['S', 'M', 'XL'],
      image: 'https://res.cloudinary.com/dzdgpwtox/image/upload/w_900,c_scale,q_auto/u_final_designs:seller_design_391159:f_20220624061317.png,w_220,h_275,y_-270,a_1,c_fit/l_tshirt_dresses:map.png,e_displace,y_8/u_tshirt_dresses:colors:Red.jpg,w_900,h_1040/v1688465154/tshirt_dresses/mockup.webp',
      category: 'ropa',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg'
    },
    // Agrega más objetos de datos para más tarjetas
    // ...
  ]);
</script>

<style lang="scss" scoped></style>
