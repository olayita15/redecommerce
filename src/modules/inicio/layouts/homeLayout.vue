<template>
    <v-container fluid class="pa-0 ma-0" grid-list-xs>
      <v-container fluid class="pa-0 ma-0">
        <router-view></router-view>
      </v-container>
    </v-container>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useRouter } from "vue-router";
    const router = useRouter();
    onMounted(()=>{
      router.push({name:'homeFirstPage'})
    });

  </script>
  