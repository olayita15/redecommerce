<template>
    <div>
        <!-- Hero -->
        <div class="et-hero-tabs">
            <v-carousel class="h-100 w-100" cycle :show-arrows="false" hide-delimiters style="background:url('https://assets.editorial.aetnd.com/uploads/2019/10/communism-socialism-gettyimages-986270630.jpg');">
                <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                cover
                >
                    <div v-if="i===0" class="slider-box primary-font">
                        <h1>Descuentos en ropa y libros</h1>
                        <h3 class="primary-font">Un individuo solo puede hacer poco; unidos podemos hacer mucho.</h3>
                        <h2 class="secondary-title-font">Tienda Roja.</h2>
                        <v-btn class="primary-font btn" @click="scrollToComponente('tab-descuentos')">Ver más</v-btn>
                    </div>
                    <div v-if="i===1" class="slider-box ">
                        <principal-carrousel :slides="slides" />
                    </div>
                </v-carousel-item>
            </v-carousel>
        </div>
        
        <section class="et-hero-tabs-menu primary-font pb-10">
            <div class="et-hero-tabs-container">
            <a class="et-hero-tab" @click="scrollToComponente('tab-descuentos')">Descuentos</a>
            <a class="et-hero-tab" @click="scrollToComponente('tab-flexbox')">Ropa</a>
            <a class="et-hero-tab" @click="scrollToComponente('tab-react')">Libros</a>
            <!-- <a class="et-hero-tab" href="#tab-angular">Angular</a> -->
            <a class="et-hero-tab" @click="scrollToComponente('tab-other')">Contacto</a>
            <span class="et-hero-tab-slider"></span>
        </div>
        </section>
        <!-- Main -->
        <main class="et-main primary-font">
            <section class="et-slide" id="tab-descuentos">
                <h1>Descuentos</h1>
                <div class="d-flex flex-row flex-wrap justify-space-around align-center my-5">
                    <div
                    v-for="(data, index) in genericCardDataArray"
                    :key="index">
                        <!-- <generic-card class="generic-desktop-card" :genericCardData="data" /> -->
                        <!-- <genericMobileCard class="generic-mobile-card" :genericCardData="data" /> -->
                        <simple-card class="generic-mobile-card" :cardData="data" />
                    </div>
                </div>
            </section>
            <section class="et-slide clothes-section" id="tab-flexbox">
                <h1>Sección de ropa</h1>
                <h3>Si los medios no informan, nuestra moda lo hará.</h3>
                <div class="d-flex flex-wrap justify-space-around align-center my-5">
                    <principal-carrousel class="my-5" :slides="slides" />
                    <principal-carrousel class="my-5" :slides="slides2" />
                    <principal-carrousel class="my-5" :slides="slides3" />
                </div>
            </section>
            <section class="et-slide" id="tab-react">
                <h1>Sección de libros</h1>
                <h3>Formación permanente, crítica constante.</h3>
            </section>
            <!-- <section class="et-slide" id="tab-angular">
            <h1>Angular</h1>
            <h3>something about angular</h3>
            </section> -->
            <section class="et-slide contact-section" id="tab-other" >
            <h1 style="cursor: pointer;">Contacto</h1>
            <h3>¿Quieres saber más de nosotros?</h3>
            </section>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

import background1Carrousel from '../../../assets/images/carrouselPrincipal/Background1Carrousel.webp';

import genericCard from '../../../components/generalCards/genericCard.vue';
import simpleCard from '../../ropa/components/simpleCard.vue';
import principalCarrousel from '../components/molecular/principalCarrousel.vue';
import camisetaAdelanteFidelCastro from '@/assets/images/carrouselPrincipal/camisetaAdelanteFidelCastro_1.webp';
import camisetaDetrasFidelCastro from '@/assets/images/carrouselPrincipal/camisetaDetrasFidelCastro.webp';

const currentId = ref(null);
const currentTab = ref(null);
const tabContainerHeight = ref(70);

const scrollToComponente = (id_component) => {
  const componente = document.getElementById(id_component); // Selecciona el elemento del componente
  componente.scrollIntoView({ behavior: 'smooth' }); // Desplaza la vista hacia el componente
};

const items = ref([
    {
        src: 'https://assets.editorial.aetnd.com/uploads/2019/10/communism-socialism-gettyimages-986270630.jpg',
    },
    // {
    //     src: 'https://i.pinimg.com/originals/09/65/c4/0965c438eca27e14778069349b285b81.jpg',
    // },
]);

const slides = ref([
    { src: camisetaAdelanteFidelCastro, title: 'Camiseta Revolución Cubana (Frente)', 
    slug: 'camiseta-revolucion-comunista', category: 'camisetas' },
    { src: camisetaDetrasFidelCastro, title: 'Camiseta Revolución Cubana (Detrás)', 
    slug: 'camiseta-revolucion-comunista', category: 'camisetas' },
]);

const slides2 = ref([
    { src: 'https://cdnx.jumpseller.com/palestino/image/45458410/resize/255/255?1707767558', 
    title: 'Camiseta de fútbol Palestina (Negra)' },
    { src: 'https://i.ebayimg.com/images/g/~zYAAOSw9l5jiby7/s-l1200.webp', 
    title: 'Camiseta de fútbol Palestina (Blanca)' }
]);

const slides3 = ref([
    { src: 'https://i.ebayimg.com/images/g/BQYAAOSwNjhjDgmN/s-l1200.webp', title: 'Camiseta Angela Davis (Rosa)' },
    { src: 'https://blackpeopleunitedclothing.com/cdn/shop/products/5e259abf944b991e50a3d125a89a3e29_800x.png?v=1642227361', title: 'Camiseta Angela Davis (Azul)' }
]);

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

  ]);
// function onTabClick(event, element) {
//   event.preventDefault();
//   const href = element.getAttribute('href');
//   const scrollTop = $(href).offset().top - tabContainerHeight.value + 1;
//   $('html, body').animate({ scrollTop }, 600);
// }

// function checkTabContainerPosition() {
//   const offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - tabContainerHeight.value;
//   if ($(window).scrollTop() > offset) {
//     $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
//   } else {
//     $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
//   }
// }

// function findCurrentTabSelector() {
//   let newCurrentId;
//   let newCurrentTab;

//   $('.et-hero-tab').each(function () {
//     const id = $(this).attr('href');
//     const offsetTop = $(id).offset().top - tabContainerHeight.value;
//     const offsetBottom = $(id).offset().top + $(id).height() - tabContainerHeight.value;

//     if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
//       newCurrentId = id;
//       newCurrentTab = $(this);
//     }
//   });

//   if (currentId.value !== newCurrentId || currentId.value === null) {
//     currentId.value = newCurrentId;
//     currentTab.value = newCurrentTab;
//     setSliderCss();
//   }
// }

// function setSliderCss() {
//   if (!currentTab.value) return; // Handle potential null reference

//   const width = currentTab.value.css('width');
//   const left = currentTab.value.offset().left;

//   $('.et-hero-tab-slider').css('width', width);
//   $('.et-hero-tab-slider').css('left', left);
// }

// onMounted(() => {
//   $(document).on('click', '.et-hero-tab', onTabClick);
//   $(window).scroll(checkTabContainerPosition);
//   $(window).resize(findCurrentTabSelector);
// });

// onBeforeUnmount(() => {
//   $(document).off('click', '.et-hero-tab', onTabClick);
//   $(window).off('scroll', checkTabContainerPosition);
//   $(window).off('resize', findCurrentTabSelector);
// });
</script>

<style lang="scss" scoped>
.slider-box{
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    h1 {
        font-size: 2rem;
        text-transform: uppercase;
        margin: 0;
        color: #fff1f1;
        font-weight: 700;
    }
    h2 {
        color: #fff1f1;
        font-size: 1rem;
        letter-spacing: 0.3rem;
        opacity: 0.6;
        margin: 10px 0;
    }
    h3 {
        color: #fff1f1;
        font-size: 1rem;
        letter-spacing: 0.3rem;
        opacity: 0.6;
    }
    .btn{
        min-width: 200px;
        min-height: 50px;
        color: #fff1f1;
        margin: 10px 0;
        background: #66b0f18e;
    }
}

a {
	text-decoration: none;
}

.et-hero-tabs{
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    height: 100vh;
    position: relative;
    background: #eee;
		text-align: center;
		// padding: 0 2em;
    h1 {
        font-size: 2rem;
        margin: 0;
        letter-spacing: 0.5rem;
    }
    h3 {
        font-size: 1rem;
        letter-spacing: 0.3rem;
        opacity: 0.6;
    }
}

.et-hero-tabs-menu{
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    height: 5vh;
    position: relative;
    background: #eee;
		text-align: center;
		// padding: 0 2em;
    h1 {
        font-size: 2rem;
        margin: 0;
        letter-spacing: 1rem;
    }
    h3 {
        font-size: 1rem;
        letter-spacing: 0.3rem;
        opacity: 0.6;
    }
}

.et-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    position: relative;
    background: #eee;
    text-align: center;
    padding: 0 2em;
    h1 {
        font-size: 2rem;
        margin: 0;
        letter-spacing: 1rem;
    }
    h3 {
        font-size: 1rem;
        letter-spacing: 0.3rem;
        opacity: 0.6;
    }
}

.et-hero-tabs-container {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 70px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background: #fff;
    z-index: 10;
    &--top {
        position: fixed;
        top: 0;
    }
}

.et-hero-tab {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    color: #000;
    letter-spacing: 0.1rem;
    transition: all 0.5s ease;
    font-size: 0.8rem;
	    &:hover {
			color:white;
            background: rgba(241, 111, 102, 0.8);
    //   background: rgba(102,177,241,0.8);
			transition: all 0.5s ease;
    }
}

.et-hero-tab-slider {
    position: absolute;
    bottom: 0;
    width: 0;
    height: 6px;
    background: #66B1F1;
    transition: left 0.3s ease;
}
.clothes-section{
    background-color: #66b0f125;
}
.contact-section{
    background-color: #66b0f125;
}
@media (min-width: 800px) {

    .slider-box{
        h1 {
            font-size: 3rem;
            margin: 0;
            color: #fff1f1;
            font-weight: 700;
        }
        h3 {
            color: #fff1f1;
            font-size: 1.5rem;
            letter-spacing: 0.3rem;
            opacity: 0.6;
        }
    }

	.et-hero-tabs{
        max-height: 100vh;
        height: 100vh;
    }

	.et-slide {
    height: 100vh;

    h1 {
        font-size: 3rem;
    }
    h3 {
        font-size: 1rem;
    }
	}
	.et-hero-tab {
		font-size: 1rem;
	}
}
</style>