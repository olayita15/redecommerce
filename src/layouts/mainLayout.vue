<template>
  <div class="container">
    <navigation-mobile-bar>
      <breadcrumb-nav></breadcrumb-nav>
      <v-container fluid class="pa-0 ma-0" grid-list-xs>
        <v-container fluid class="pa-0 ma-0">
          <router-view v-slot="{ Component }">
            <transition name="slide-fade">
              <component :is="Component" />
            </transition>
          </router-view>
        </v-container>
      </v-container>
    </navigation-mobile-bar>
    <principal-footer />
  </div>
</template>

<script setup>
  import breadcrumbNav from '../components/navigation/breadcrumb/breadcrumbNav.vue';
  import navigationMobileBar from '../components/navigation/NavigationBar/navigationMobilBar.vue';
  import PrincipalFooter from '@/components/navigation/footers/principalFooter.vue';
  
</script>

<style lang="scss" scoped>
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: opacity 0.2s ease-in; /* Ajusta la duración según sea necesario */
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    opacity: 0;
  }
</style>
