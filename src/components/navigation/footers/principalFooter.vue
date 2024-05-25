<template>
  <div class="w-100">
    <v-footer class="d-flex flex-column footer">
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="btn mx-4"
          :icon="icon"
          variant="text"></v-btn>
      </div>


      <v-divider></v-divider>

      <div class="primary-font author-font">
        {{ new Date().getFullYear() }} —
        <strong>Juventud Comunista Colombiana</strong>
      </div>
    </v-footer>
  </div>
</template>

<script setup>
  import {ref} from 'vue';
    const icons = ref([
            'mdi-facebook',
            'mdi-twitter',
            'mdi-whatsapp',
            'mdi-instagram',
          ]);
</script>

<style lang="scss" scoped>
$primary-color-text: $first-color;
$secondary-color-text: rgba($fourth-color, 0.7);
$third-color-text: $fifth-color;
$primary-color-background: $second-color;

.footer{
  background-color: $primary-color-background;
  .btn{
    color: $secondary-color-text;
  }
  .author-font{
    color: $secondary-color-text;
  }
}
</style>
