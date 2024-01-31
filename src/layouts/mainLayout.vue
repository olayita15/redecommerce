<template>
  <div class="container">
    <navigation-bar class="navigation-desktop"/>
    <navigationMobilBar >
      <v-container fluid class="pa-0 ma-0" grid-list-xs>
        <v-container fluid class="pa-0 ma-0">
          <router-view></router-view>
        </v-container>
      </v-container>
    </navigationMobilBar>
    <div class="navigation-desktop">
      <v-container fluid class="pa-0 ma-0" grid-list-xs>
        <v-container fluid class="pa-0 ma-0">
          <router-view></router-view>
        </v-container>
      </v-container>
    </div>
    <principal-footer />
  </div>
</template>

<script setup>
  import navigationBar from '@/components/navigation/NavigationBar/navigationBar.vue';
  import navigationMobilBar from '../components/navigation/NavigationBar/navigationMobilBar.vue';

  import PrincipalFooter from '@/components/navigation/footers/principalFooter.vue';
</script>

<style lang="scss" scoped>
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
