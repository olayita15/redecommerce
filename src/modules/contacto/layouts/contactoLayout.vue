<template>
  <div>
    <v-container fluid class="pa-0 ma-0" grid-list-xs>
      <v-container fluid class="pa-0 ma-0">
        <v-parallax
          :scale="0.5"
          src="https://i.pinimg.com/originals/0c/8d/f0/0c8df0e1471b29c4e7bed731530c0a13.jpg">
          <router-view v-slot="{ Component, route }">
            <transition name="slide-fade" mode="out-in">
              <component :is="Component" :key="route.name" />
            </transition>
          </router-view>
        </v-parallax>
      </v-container>
    </v-container>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
