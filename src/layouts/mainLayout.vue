<template>
  <div class="container">
    <navigation-bar />
    <v-container fluid class="pa-0 ma-0" grid-list-xs>
      <v-container fluid class="pa-0 ma-0">
        <router-view></router-view>
      </v-container>
    </v-container>
    <principal-footer />
  </div>
</template>

<script setup>
  import navigationBar from '@/components/navigation/NavigationBar/navigationBar.vue';
  import PrincipalFooter from '@/components/navigation/footers/principalFooter.vue';
</script>

<style lang="scss" scoped>
  .principal-box{
      max-width: 100%;
  }
</style>
