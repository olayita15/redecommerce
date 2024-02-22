<template>
  <div >
    <v-breadcrumbs
      class="breadcrumb"
      density="compact"
      divider="-"
      :items="metaArray">
      <template v-slot:title="{ item }">
        <v-btn v-if="item.title" :to="{name:item.redirection}" variant="plain"
          ><span class="primary-font font-size">{{ item.title }}</span></v-btn
        >
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  import { useRoute } from "vue-router";

    const route = useRoute();

    const newArray = computed(()=>route.matched.filter(item => item.meta && item.meta.title));

    const metaArray = computed(()=>newArray.value.map(item => item?.meta));
</script>

<style lang="scss" scoped>
  .font-size{
    font-size: medium;
  }
   @media (max-width: 900px) {
    .font-size{
      font-size:6px;
    }
  }
</style>
