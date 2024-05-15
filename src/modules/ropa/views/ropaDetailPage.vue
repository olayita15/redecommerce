<template>
  <div>
    <div class = "card-wrapper my-10">
      <div class = "card">
        <!-- card left -->
        <div class = "product-imgs">
          <div class = "img-display">
            <div class = "img-showcase">
              <div v-for="(image, index) in imageList" :key="image.src">
                <img :src="image.src" alt="Shoe image" v-if="index===select_index" />
              </div>
            </div>
          </div>
          <div class = "img-select">
            <div class = "img-item" v-for="(image, index) in imageList" :key="image.src">
              <a :data-id = index @click="selectionIndex(index)">
                <img :src="image.src" alt = "shoe image">
              </a>
            </div>
          </div>
        </div>
        <!-- card right -->
        <div class = "product-content primary-font">
          <h2 class = "product-title">{{ productData.title }}</h2>
          <a href = "#" class = "product-link">visita {{ productData.author }}</a>
          <div class = "product-rating">
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star-half-alt"></i>
            <span>{{productData.rating}} (21)</span>
          </div>

          <div class = "product-price">
            <p class = "last-price">Precio antiguo: <span>$257.00</span></p>
            <p class = "new-price">Precio nuevo: <span>${{productData.price}} (5%)</span></p>
          </div>

          <div class = "product-detail">
            <h2>Sobre este producto: </h2>
            <p>{{ productData.description }}</p>
            <ul>
              <li class="d-flex align-center">Color: 
                <v-chip-group column multiple filter class="mx-5">
                  <v-chip
                    v-for="(chip, index) in productData.avalibleColors"
                    :key="index"
                    :color="productData.avalibleColors[index]"
                    >{{ chip }}
                  </v-chip>
                </v-chip-group>
              </li>
              <li>Disponibilidad: <span>Disponible</span></li>
              <li class="d-flex align-center">Tallas: 
                <v-chip-group column multiple filter class="mx-5">
                  <v-chip
                    v-for="(chip, index) in productData.availableSizes"
                    :key="index"
                    :color="colorChips[index]"
                    >{{ chip }}
                  </v-chip>
                </v-chip-group>
              </li>
              <li>Categoría: <span>{{ productData.category }}</span></li>
            </ul>
          </div>

          <div class = "purchase-info">
            <input type = "number" min = "0" value = "1">
            <button type = "button" class = "btn">
              Añadir al carrito <i class = "fas fa-shopping-cart"></i>
            </button>
            <button type = "button" class = "btn">Whatsapp</button>
          </div>

          <div class = "social-links">
            <p>Share At: </p>
            <a href = "#">
              <i class = "fab fa-facebook-f"></i>
            </a>
            <a href = "#">
              <i class = "fab fa-twitter"></i>
            </a>
            <a href = "#">
              <i class = "fab fa-instagram"></i>
            </a>
            <a href = "#">
              <i class = "fab fa-whatsapp"></i>
            </a>
            <a href = "#">
              <i class = "fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

import camisetaAdelanteFidelCastro from '@/assets/images/carrouselPrincipal/camisetaAdelanteFidelCastro_1.webp';
import camisetaDetrasFidelCastro from '@/assets/images/carrouselPrincipal/camisetaDetrasFidelCastro.webp';

const select_index = ref(0);
const imageList = ref([
  { src: camisetaAdelanteFidelCastro },
  { src: camisetaDetrasFidelCastro },
]);

const productData = reactive({
  title: 'Camiseta Revolución Cubana',
  author: 'Ernesto Ché Guevara',
  iconColor: 'red',
  icon: 'mdi-fire-circle',
  rating: 4.5,
  reviews: 413,
  price: 30000,
  description: 'Expresa tu apoyo a la revolución con esta elegante camiseta de temática comunista.',
  availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
  avalibleColors: ['green'],
  image: camisetaAdelanteFidelCastro,
  category: 'camisetas',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg',
});
const colorChips = ref(['red','blue','green','purple']);

const selectionIndex = (index) =>{
  select_index.value = index;
};
</script>

<style lang="scss" scoped>

.card-wrapper{
    max-width: 1100px;
    margin: 0 auto;
}
img{
    width: 100%;
    display: block;
}
.img-display{
    overflow: hidden;
}
.img-showcase{
    display: flex;
    width: 100%;
    transition: all 0.5s ease;
}
.img-showcase img{
    min-width: 100%;
}
.img-select{
    display: flex;
}
.img-item{
    margin: 0.3rem;
}
.img-item:nth-child(1),
.img-item:nth-child(2),
.img-item:nth-child(3){
    margin-right: 0;
}
.img-item:hover{
    opacity: 0.8;
}
.product-content{
    padding: 2rem 1rem;
}
.product-title{
    font-size: 2rem;
    text-transform: capitalize;
    position: relative;
    color: #12263a;
    margin: 1rem 0;
}
.product-title::after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 4px;
    width: 80px;
    background: #12263a;
}
.product-link{
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 0.9rem;
    display: inline-block;
    margin-bottom: 0.5rem;
    background: #256eff;
    color: #fff;
    padding: 0 0.3rem;
    transition: all 0.5s ease;
}
.product-link:hover{
    opacity: 0.9;
}
.product-rating{
    color: #ffc107;
}
.product-rating span{
    font-weight: 600;
    color: #252525;
}
.product-price{
    margin: 1rem 0;
    font-size: 1rem;
    font-weight: 700;
}
.product-price span{
    font-weight: 400;
}
.last-price span{
    color: #f64749;
    text-decoration: line-through;
}
.new-price span{
    color: #256eff;
}
.product-detail h2{
    text-transform: capitalize;
    color: #12263a;
    padding-bottom: 0.6rem;
}
.product-detail p{
    font-size: 0.9rem;
    padding: 0.3rem;
    opacity: 0.8;
}
.product-detail ul{
    margin: 1rem 0;
    font-size: 0.9rem;
}
.product-detail ul li{
    margin: 0;
    list-style: none;
    background: url(https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/checked.png) left center no-repeat;
    background-size: 18px;
    padding-left: 1.7rem;
    margin: 0.4rem 0;
    font-weight: 600;
    opacity: 0.9;
}
.product-detail ul li span{
    font-weight: 400;
}
.purchase-info{
    margin: 1.5rem 0;
}
.purchase-info input,
.purchase-info .btn{
    border: 1.5px solid #ddd;
    border-radius: 25px;
    text-align: center;
    padding: 0.45rem 0.8rem;
    outline: 0;
    margin-right: 0.2rem;
    margin-bottom: 1rem;
}
.purchase-info input{
    width: 60px;
}
.purchase-info .btn{
    cursor: pointer;
    color: #fff;
}
.purchase-info .btn:first-of-type{
    background: #256eff;
}
.purchase-info .btn:last-of-type{
    background: #639b2f;
}
.purchase-info .btn:hover{
    opacity: 0.9;
}
.social-links{
    display: flex;
    align-items: center;
}
.social-links a{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    color: #000;
    border: 1px solid #000;
    margin: 0 0.2rem;
    border-radius: 50%;
    text-decoration: none;
    font-size: 0.8rem;
    transition: all 0.5s ease;
}
.social-links a:hover{
    background: #000;
    border-color: transparent;
    color: #fff;
}

@media screen and (min-width: 992px){
    .card{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
    }
    .card-wrapper{
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .product-imgs{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .product-content{
        padding-top: 0;
    }
}
</style>