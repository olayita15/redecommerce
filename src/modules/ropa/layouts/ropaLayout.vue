<template>
  <v-card class="primary-font">
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        temporary
        style="background-color: #f4f4f4;"
        @click="rail = false">
        <v-list-item
          prepend-icon="mdi-filter"
          title="Filtrar/Ordenar"
          nav
          style="font-size:x-large;">
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav v-if="!rail">
          <v-checkbox label="Precio: más bajo primero"></v-checkbox>

          <v-card-text class="ma-3 pa-0">
            <h2 class="mb-2"> Tipo de ropa </h2>
            <v-chip-group v-model="tiposRopaValue" column multiple filter>
              <v-chip
                v-for="(chip, index) in tiposRopa"
                :key="index"
                :color="colorChips[index]"
                >{{ chip }}
              </v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-text class="ma-3 pa-0">
            <h2 class="mb-2"> Talla </h2>
            <v-chip-group v-model="tallasRopaValue" column multiple filter>
              <v-chip
                v-for="(chip, index) in tallasRopa"
                :key="index"
                :color="colorChips[index]"
                >{{ chip }}
              </v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-text class="ma-3 pa-0">
            <h2 class="mb-2"> Color </h2>
            <v-chip-group v-model="colorRopaValue" column multiple filter>
              <v-chip
                v-for="(chip, index) in colores"
                :key="index"
                :color="colorChips[index]"
                >{{ chip.text }}
              </v-chip>
            </v-chip-group>
          </v-card-text>

          <!-- <v-select
            v-model="tiposRopaValue"
            :items="tiposRopa"
            chips
            label="Tipo de ropa"
            multiple
            variant="outlined"></v-select> -->
          <!-- <v-select
            v-model="tallasRopaValue"
            :items="tallasRopa"
            chips
            label="Tallas"
            multiple
            variant="outlined"></v-select> -->
          <!-- <v-select
            v-model="selectedItem"
            :items="colores"
            item-title="text"
            item-value="value"
            item-color="color"
            label="Colores"
            multiple
            variant="outlined"
            chips
            return-object>
            <template #chip="{ item }">
              <v-chip closable :color="item.value.color">{{item.title}}</v-chip>
            </template>
          </v-select> -->

          <!-- <v-list-item prepend-icon="mdi-home-city" title="Tipo de ropa" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="Talla" value="account"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Color" value="users"></v-list-item> -->
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <v-container fluid class="pa-0 ma-0" grid-list-xs>
          <v-container fluid class="pa-0 ma-0">
            <div class="d-flex flex-column">
              <div class="d-flex flex-row justify-space-between align-center my-5">
                <span class="mx-15 primary-title-font title-font-size"></span>
                <v-btn
                  class="mx-13"
                  color="blue-lighten-1"
                  style="align-self: flex-end;"
                  @click="drawer = true"
                  >Filtrar</v-btn
                >
              </div>
              <router-view v-slot="{ Component, route }">
                <transition name="slide-fade" mode="out-in">
                  <component :is="Component" :key="route.name" />
                </transition>
              </router-view>
            </div>
          </v-container> </v-container
      ></v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
    import navigationRopa from '../components/navigationRopa.vue';
    import { ref } from 'vue';
  const drawer = ref(false);
  const rail = ref(false);
  const tiposRopa= ref(['Gorras', 'Camisetas', 'Cuellos', 'Bufandas']);
  const tiposRopaValue= ref([]);
  const tallasRopa= ref(['S', 'M', 'L', 'XL']);
  const tallasRopaValue= ref([]);
  const colores = ref([
      { text: 'Rojo', value: 1, color: 'red' },
      { text: 'Azul', value: 2, color: 'blue' },
      { text: 'Verde', value: 3, color: 'green' },
      { text: 'Negro', value: 3, color: 'black' },
    ]);
  const colorChips = ref(['red','blue','green','purple'])
  const colorRopaValue= ref([]);
</script>
<style lang="scss" scoped>
.title-font-size{
  font-size: 48px;
}
  .chips-box{
    width: 100%;
    display: flex;
    flex-flow: row wrap;
  }
</style>
