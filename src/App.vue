<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup>
  
</script>

<style lang="scss">

  // Estilos globales para toastify
  :root {
    --toastify-icon-color-success: rgb(var(--v-theme-surface)) !important;
    --toastify-icon-color-warning: rgb(var(--v-theme-surface)) !important;
    --toastify-icon-color-error: rgb(var(--v-theme-surface)) !important;
    --jse-theme-color: rgb(var(--v-theme-primary)) !important;
  }
  .toast-classssssss {
    border-radius: 40px !important;
    color: rgb(var(--v-theme-surface)) !important;
    // font-family: Sora !important;
    font-size: 13px !important;
    font-style: normal !important;
    font-weight: 600 !important;
    line-height: normal !important;
  }
  .Toastify__toast--success {
    background: #5DC966 !important;
  }

  .Toastify__toast--warning{
    background: #e4e73d !important;
  }

  .Toastify__toast--error{
    background: #8d1b1b !important;
  }

  .Toastify__close-button {
    margin-top: 15px;
    margin-right: 10px;
  }
  //Modificaciones a vuetify
  .v-tooltip.v-overlay > .v-overlay__content {
    background: rgba(50, 50, 50, 0.6) !important;
    color: rgba(255,255,255,1) !important;
    font: 13px "Sora";
  }
</style>
