<template>
  <div class="container">
    <navigation-mobile-bar></navigation-mobile-bar>
    <div class="breadcrumb-wrapper">
      <breadcrumb-nav></breadcrumb-nav>
    </div>
    <v-container fluid class="pa-0 ma-0 ">
      <div class="main-box">
        <router-view v-slot="{ Component }">
          <transition name="slide-fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </v-container>
    <principal-footer />
  </div>
</template>

<script setup>
  import breadcrumbNav from '../components/navigation/breadcrumb/breadcrumbNav.vue';
  import navigationMobileBar from '../components/navigation/NavigationBar/navigationMobilBar.vue';
  import PrincipalFooter from '@/components/navigation/footers/principalFooter.vue';
</script>

<style lang="scss" scoped>


  .breadcrumb-wrapper {
    position: fixed;
    background: whitesmoke;
    width: 100%;
    z-index: 1000;
  }
  .main-box{
    margin: 52px 0 0 0;
  }
    .slide-fade-enter-active,
    .slide-fade-leave-active {
      transition: opacity 0.2s ease-in; /* Ajusta la duración según sea necesario */
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
      opacity: 0;
    }
</style>
