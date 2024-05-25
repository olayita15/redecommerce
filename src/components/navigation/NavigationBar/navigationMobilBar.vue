<template>
  <div>
    <v-app-bar class="gris-paleta-background pa-0"  scroll-behavior="hide">
      <div class="d-flex flex-column  w-100">
        <div class="d-flex justify-center align-center">
          <v-app-bar-nav-icon
            class="primary-color mobile-display"
            variant="text"
            @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

          <v-toolbar-title
            ><div
              @click="router.push({name:'homeFirstPage'})"
              class="main-nav secondary-title-font">
              <a class="mobile-display">TIENDA ROJA</a>
              <a variant="text" class="desktop-display">TIENDA ROJA</a>
            </div></v-toolbar-title
          >
          <div class="desktop-display mb-1 pa-0">
            <ul class="main-nav secondary-title-font">
              <li
                ><v-btn variant="text" :to="{ name: 'ropaFirstPage' }"
                  >Ropa</v-btn
                ></li
              >
              <li
                ><v-btn variant="text" :to="{ name: 'librosFirstPage' }"
                  >Libros</v-btn
                ></li
              >
              <!-- <li
            ><v-btn variant="text" :to="{ name: 'homeFirstPage' }"
              >Accesorios</v-btn
            ></li
          > -->
              <li
                ><v-btn variant="text" :to="{ name: 'contactoFirstPage' }"
                  >Contacto</v-btn
                ></li
              >
            </ul>
          </div>

          <v-btn
            class="primary-color"
            variant="text"
            icon="mdi-magnify"
            @click.stop="search = !search"></v-btn>

          <v-btn
            class="primary-color"
            variant="text"
            icon="mdi-shopping-outline"></v-btn>
        </div>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      location="left"
      temporary
      class="primary-font"
      style="background-color: #f4f4f4;">
      <v-list
        :items="items"
        :selected="selected"
        @click:select="navigateToPage"></v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="search"
      location="top"
      temporary
      class="primary-font gris-paleta-background"
      :width="100">
      <div class="search-drawer">
        <v-text-field
          class="w-75 mt-7 primary-color"
          style="justify-content: flex-end;"
          clearable
          label="Buscar por productos"
          prepend-icon="mdi-magnify"
          variant="underlined"
          rounded
          density="compact"></v-text-field>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router'
  import breadcrumbNav from '../breadcrumb/breadcrumbNav.vue';


  const router = useRouter();

  const drawer = ref(false);
  const search = ref(false);


  const group = ref(null);
  const items = ref( [
      {
          title: 'Ropa',
          value: 'ropaFirstPage',
      },
      {
          title: 'Libros',
          value: 'librosFirstPage',
      },
      // {
      //     title: 'Accesorios',
      //     value: 'fizz',
      // },
      {
          title: 'Contacto',
          value: 'contactoFirstPage',
      },
  ]);

  const selected = ref(null);

  const navigateToPage = (item) => {
    const {id} = item;
    router.push({name:id})
  };
</script>

<style lang="scss" scoped>
$primary-color-text: $morado-semi-claro-paleta;
$secondary-color-text: rgba($morado-oscuro-paleta, 0.7);
$primary-color-background: $gris-paleta;

  .search-drawer{
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

  }
  .primary-color{
    color: $primary-color-text;
  }
      .mobile-display{
        display: none;
      }

          ul {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
        }

        h2,
        h3,
        a {
        	color: $primary-color-text;
        }

        a {
        	text-decoration: none;
        }


        .main-nav {
        	margin-top: 5px;
          font-size:x-large;
          z-index: 1000;
          cursor: pointer;
        }
        .logo a,
        .main-nav a {
        	padding: 10px 15px;
        	text-align: center;
        }
        .main-nav a {
        	color: $primary-color-text;
        	font-size: .99em;
        }

        .main-nav a:hover {
        	color: $secondary-color-text;
        }


        /* =================================
          Media Queries
        ==================================== */
    @media (max-width: 1050px) {
      .mobile-display{
        display: block;
      }
        .desktop-display{
          display: none;
        }
        .logo{
          text-align: center;
        }

        ul {
          flex-flow: column wrap;
        justify-content: center;

        }
        .cart-list{
          display: none;
        }
        .cart-list-movil{
          display: block;
        }
      }
</style>
