<template>
  <div class="w-100">
    <v-footer class="bg-indigo-lighten-1 d-flex flex-column">
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="text"></v-btn>
      </div>


      <v-divider></v-divider>

      <div class="primary-font">
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

<style lang="scss" scoped></style>
