<template>
    <div>
        <!-- Hero -->
        <div class="principal-slider-box">
            <v-carousel class="h-100 w-100" cycle continuous :interval="12000"
            hide-delimiter-background touch
            :show-arrows="false" hide-delimiters style="background:url('https://assets.editorial.aetnd.com/uploads/2019/10/communism-socialism-gettyimages-986270630.jpg');">
                <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                cover
                >
                    <div v-if="i===0" class="slider-box primary-font">
                        <h1 class="third-color-text">Descuentos en ropa y libros</h1>
                        <h3 class="primary-font">Un individuo solo puede hacer poco; unidos podemos hacer mucho.</h3>
                        <h2 class="secondary-title-font">Tienda Roja.</h2>
                        <v-btn class="primary-font btn" @click="scrollToComponente('tab-descuentos')">Ver más</v-btn>
                    </div>
                    <div v-if="i===1" class="slider-box ">
                        <h1 class="third-color-text">Memoria Histórica</h1>
                        <h3 class="primary-font">A través de la moda.</h3>
                        <h2 class="secondary-title-font">Tienda Roja.</h2>
                        <v-btn class="primary-font btn" @click="scrollToComponente('tab-memoria-historica')">Ver más</v-btn>
                    </div>
                </v-carousel-item>
            </v-carousel>
        </div>
        <!-- Menu -->
        <section class="et-hero-tabs-menu primary-font pb-10">
            <div class="et-hero-tabs-container">
                <a class="et-hero-tab" @click="scrollToComponente('tab-descuentos')">Descuentos</a>
                <!-- <a class="et-hero-tab" @click="scrollToComponente('lo-mas-buscado')">Lo más buscado</a> -->
                <a class="et-hero-tab" @click="scrollToComponente('tab-memoria-historica')">Memoria Histórica</a>
                <a class="et-hero-tab" @click="scrollToComponente('tab-react')">Libros</a>
                <a class="et-hero-tab" @click="scrollToComponente('tab-other')">Contacto</a>
            </div>
        </section>

        <!-- Main -->
        <main class="et-main primary-font blanco-paleta-background">
            <v-container>
                <v-row>
                    <v-col>
                        <section class="et-slide" id="tab-descuentos">
                            <h1>Descuentos</h1>
                            <div class="d-flex flex-row flex-wrap justify-space-around align-start my-5">
                                <div
                                v-for="(data, index) in genericCardDataArray"
                                :key="index">
                                    <simple-card class="generic-mobile-card" :cardData="data" />
                                </div>
                            </div>
                        </section>
                    </v-col>
                </v-row>
                <!-- <section class="et-slide" id="lo-mas-buscado">
                <h1>Lo más buscado</h1>
                <h3>something about angular</h3>
                </section> -->
                <v-row>
                    <v-col>
                        <section class="et-slide clothes-section" id="tab-memoria-historica">
                            <h1>Memoria Histórica</h1>
                            <h3>Si los medios no informan, nuestra moda lo hará.</h3>
                            <div class="d-flex flex-wrap justify-space-around align-center my-5">
                                <principal-carrousel class="my-5" :slides="slides" />
                                <principal-carrousel class="my-5" :slides="slides2" />
                                <principal-carrousel class="my-5" :slides="slides3" />
                            </div>
                        </section>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <section class="et-slide" id="tab-react">
                            <h1>Sección de libros</h1>
                            <h3>Formación permanente, crítica constante.</h3>
                        </section>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <section class="et-slide contact-section" id="tab-other" >
                        <h1 style="cursor: pointer;">Contacto</h1>
                        <h3>¿Quieres saber más de nosotros?</h3>
                        </section>
                    </v-col>
                </v-row>
            </v-container>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

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
    {
        src: 'https://pacifista.tv/wp-content/uploads/2018/09/maria3.jpg',
    },
]);

const slides = ref([
    { src: camisetaAdelanteFidelCastro, title: 'Camiseta Revolución Cubana (Frente)', 
    slug: 'camiseta-revolucion-comunista', category: 'camisetas',
    background: 'https://st2.depositphotos.com/1017251/9439/i/450/depositphotos_94394106-stock-photo-items-related-to-cuba-travel.jpg'},
    { src: camisetaDetrasFidelCastro, title: 'Camiseta Revolución Cubana (Detrás)', 
    slug: 'camiseta-revolucion-comunista', category: 'camisetas',
    background: 'https://st2.depositphotos.com/1017251/9439/i/450/depositphotos_94394106-stock-photo-items-related-to-cuba-travel.jpg' },
]);

const slides2 = ref([
    { src: 'https://cdnx.jumpseller.com/palestino/image/45458410/resize/255/255?1707767558', 
    title: 'Camiseta de fútbol Palestina (Negra)',
    background: 'https://www.kodromagazine.com/wp-content/uploads/2021/09/DpUg-f_W0AM2c1u.jpg' },
    { src: 'https://i.ebayimg.com/images/g/~zYAAOSw9l5jiby7/s-l1200.webp', 
    title: 'Camiseta de fútbol Palestina (Blanca)',
    background: 'https://elcuartomosquetero.com/wp-content/uploads/2024/02/Imagen2.jpg' }
]);

const slides3 = ref([
    { src: 'https://i.ebayimg.com/images/g/BQYAAOSwNjhjDgmN/s-l1200.webp', title: 'Camiseta Angela Davis (Rosa)',
    background: 'https://cdn.britannica.com/70/217070-050-250699A2/Black-Lives-Matter-protest-signs-Boston-Massachusetts-May-2020.jpg' },
    { src: 'https://blackpeopleunitedclothing.com/cdn/shop/products/5e259abf944b991e50a3d125a89a3e29_800x.png?v=1642227361', title: 'Camiseta Angela Davis (Azul)',
    background:'https://static01.nyt.com/images/2022/05/18/business/17BLM-foundation-01/merlin_188274429_b5690cad-989a-4f2f-8741-2961afb01632-superJumbo.jpg' }
]);

const genericCardArray = ref([
    {
      title: 'Camiseta Revolución Comunista',
      author: 'Ernesto Ché Guevara',
      iconColor: 'red',
      icon: 'mdi-fire-circle',
      rating: 4.5,
      reviews: 413,
      price: 30000,
      descount: true,
      description: 'Expresa tu apoyo a la revolución con esta elegante camiseta de temática comunista.',
      availability: ['XS', 'S', 'M', 'L', 'XL'],
      image: 'https://acdn.mitiendanube.com/stores/605/358/products/37n1-48054e5e8a19c7b9f716249053342208-640-0.png',
      category: 'ropa',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg'
    },
    {
      title: 'Manifiesto Comunista (Edición especial)',
      author: 'Karl Marx & Federich Engels',
      iconColor: 'red',
      icon: 'mdi-fire-circle',
      rating: 4.7,
      reviews: 200,
      price: 29999,
      descount: true,
      description: 'Mantente abrigado y con estilo con esta acogedora sudadera que promueve la unidad de los trabajadores.',
      availability: ['Teoría & Praxis'],
      image: "https://images.cdn3.buscalibre.com/fit-in/360x360/b5/66/b56627955ecc97a23578bbf08e770d32.jpg",
      category: 'libro',
      logo: 'https://semanariovoz.com/wp-content/uploads/2015/04/09/teopraxisplano21.gif'
    },
   
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
      descount: true,
      description: 'Expresa tu apoyo a la revolución con esta elegante camiseta de temática comunista.',
      availability: ['XS', 'S', 'M', 'L', 'XL'],
      image: 'https://acdn.mitiendanube.com/stores/605/358/products/37n1-48054e5e8a19c7b9f716249053342208-640-0.png',
      category: 'ropa',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg'
    },
    {
      title: 'Manifiesto Comunista (Edición especial)',
      author: 'Karl Marx & Federich Engels',
      iconColor: 'red',
      icon: 'mdi-fire-circle',
      rating: 4.7,
      reviews: 200,
      price: 29999,
      descount: true,
      description: 'Mantente abrigado y con estilo con esta acogedora sudadera que promueve la unidad de los trabajadores.',
      availability: ['Teoría & Praxis'],
      image: "https://images.cdn3.buscalibre.com/fit-in/360x360/b5/66/b56627955ecc97a23578bbf08e770d32.jpg",
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
      descount: true,
      description: 'Difunde el mensaje de igualdad y solidaridad con esta versátil mochila.',
      availability: ['Rojo','Negro'],
      image: 'https://images.creativefabrica.com/products/thumbnails/2023/09/04/tYvYxGtKe/2Uv67oT2m9vDEgyUCWGHyZy4kLZ.png',
      category: 'accesorio',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Coat_of_arms_of_the_Soviet_Union_%281923%E2%80%931936%29.svg/181px-Coat_of_arms_of_the_Soviet_Union_%281923%E2%80%931936%29.svg.png'
    },
    
    {
      title: 'Camiseta de fútbol Palestina',
      author: 'Resistencia',
      iconColor: 'red',
      icon: 'mdi-fire-circle',
      rating: 4.5,
      reviews: 413,
      price: 40000,
      descount: true,
      description: 'Expresa tu apoyo a la revolución con esta elegante camiseta de temática comunista.',
      availability: ['XS', 'S', 'M', 'L', 'XL'],
      image: 'https://img.mrvcdn.com/g/fb/kf/Ee4c7694269d24771bd769a9a0d791eb7S.png',
      category: 'ropa',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg'
    },
  ]);

</script>

<style lang="scss" scoped>
$primary-color-text: $blanco-paleta;
$secondary-color-text: rgba($morado-semi-claro-paleta, 0.7);
$third-color-text: $morado-oscuro-paleta;
$primary-color-background: $gris-paleta;

    .principal-slider-box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        text-align: center;
        .slider-box{
            width: 100%;
            height: 100%;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            position: absolute;
            h1 {
                font-size: 2rem;
                margin: 0;
                text-transform: uppercase;
                margin: 0;
                color: $primary-color-text;
                font-weight: 700;
            }
            h2 {
                color: $primary-color-text;
                font-size: 1.5rem;
                letter-spacing: 0.1rem;
                opacity: 0.6;
                margin: 10px 0;
            }
            h3 {
                color: $primary-color-text;
                font-size: 1rem;
                opacity: 0.6;
            }
            .btn{
                color: $primary-color-text;
                margin: 10px 0;
                background: $secondary-color-text;
            }
        }
    }

    .et-hero-tabs-menu{
        height: 5vh;
        position: relative;
        background: $gris-paleta;
        text-align: center;

        .et-hero-tabs-container {
            display: flex;
            flex-direction: row;
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 40px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            background: $primary-color-background;
            z-index: 10;
            &--top {
                position: fixed;
                top: 0;
            }
            .et-hero-tab {
                display: flex;
                justify-content: center;
                align-items: center;
                flex: 1;
                color: $secondary-color-text;
                letter-spacing: 0.1rem;
                transition: all 0.5s ease;
                font-size: 0.5rem;
                cursor: pointer;
                    &:hover {
                        color:$primary-color-text;
                        background: $secondary-color-text;
                        transition: all 0.5s ease;
                }
            }
        }
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

.et-main{
    .et-slide {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        text-align: center;
        h1 {
            font-size: 2rem;
            margin: 0;
            letter-spacing: 3px;
            color: $secondary-color-text;
        }
        h3 {
            font-size: 1rem;
            letter-spacing: 0.3rem;
            opacity: 0.6;
            color: $secondary-color-text;
        }
    }
}
</style>

<!-- <style lang="scss" scoped>
.et-main{
    min-height: 500vh;
    padding-top: 50px;
    background: #eee;
}

.slider-box{
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    h1 {
        font-size: 12px;
        text-transform: uppercase;
        margin: 0;
        color: #fff1f1;
        font-weight: 700;
    }
    h2 {
        color: #fff1f1;
        font-size: 8px;
        letter-spacing: 0.1rem;
        opacity: 0.6;
        margin: 10px 0;
    }
    h3 {
        color: #fff1f1;
        font-size: 8px;
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
    height: 130vh;
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
    padding: 1em 2em;
    h1 {
        font-size: 2rem;
        margin: 0;
        letter-spacing: 5px;
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
    font-size: 0.4rem;
    cursor: pointer;
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

.generic-mobile-card{
        margin: 0 0;
}
@media (min-width: 800px) {

    .slider-box{
        h1 {
            font-size: 3rem;
            margin: 0;
            color: #fff1f1;
            font-weight: 700;
        }
        h2 {
            color: #fff1f1;
            font-size: 1.5rem;
            letter-spacing: 0.3rem;
            opacity: 0.6;
        }
        h3 {
            color: #fff1f1;
            font-size: 1.5rem;
            letter-spacing: 0.3rem;
            opacity: 0.6;
        }
    }

	.et-hero-tabs{
        max-height: 120vh;
        height: 120vh;
    }

	.et-slide {
        min-height: 100vh;

        h1 {
            font-size: 5rem;
        }
        h3 {
            font-size: 1rem;
        }
	}
	.et-hero-tab {
		font-size: 1rem;
	}
    .generic-mobile-card{
        margin: 0 25px;
    }
}
</style> -->