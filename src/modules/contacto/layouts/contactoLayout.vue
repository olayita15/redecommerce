<template>
  <div>
    <v-container fluid class="pa-0 ma-0" grid-list-xs>
      <v-container fluid class="pa-0 ma-0">
          <router-view v-slot="{ Component, route }">
            <transition name="slide-fade" mode="out-in">
              <component :is="Component" :key="route.name" />
            </transition>
          </router-view>
      </v-container>
    </v-container>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
