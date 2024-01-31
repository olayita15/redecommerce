<template>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
<div class="navigation-mobile">
      <v-app-bar  prominent style="background-color: #f4f4f4;" >
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title
          ><div class="logo secondary-title-font">
            <span>TIENDA ROJA</span>
          </div></v-toolbar-title
        >

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>

        <v-btn variant="text" icon="mdi-filter"></v-btn>

        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        location="top"
        temporary
        class="primary-font"
        style="background-color: #f4f4f4;">
        <v-list :items="items"></v-list>
      </v-navigation-drawer>

      <v-main>
         <slot></slot> 
      </v-main>
    </div>
</template>

<script setup>
  import { ref } from 'vue';

  const drawer = ref(false);

  const group = ref(null);
  const items = ref( [
      {
          title: 'Ropa',
          value: 'foo',
      },
      {
          title: 'Libros',
          value: 'bar',
      },
      {
          title: 'Accesorios',
          value: 'fizz',
      },
      {
          title: 'Contacto',
          value: 'buzz',
      },
  ]);
</script>

<style lang="scss" scoped>
.color-nav{
  background-color: #f4f4f4;

}

.navigation-mobile{
    display: none;
  }
    .principal-box{
        max-width: 100%;
    }
    @media (max-width: 900px) {
      .navigation-desktop{
        display: none;
      }
      .navigation-mobile{
    display: flex;
  }
    }
</style>
