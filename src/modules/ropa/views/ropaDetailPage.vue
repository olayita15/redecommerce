<template>
  <div class="my-5">
    <div class="detail-box-container my-5">
      <div class="mx-5">
        <div class="d-flex align-center">
          <div class="d-flex flex-column">
            <ul class="grid">
              <li><img :src="camisetaAdelanteFidelCastro" /></li>
              <li><img :src="camisetaAdelanteFidelCastro" /></li>
              <li><img :src="camisetaAdelanteFidelCastro" /></li>
            </ul>
          </div>
          <img class="main-image" :src="camisetaAdelanteFidelCastro" />
        </div>
      </div>
      <div class="mx-5">
        <div class="tabs-box"
          ><v-tabs v-model="tabs" color="primary" grow>
            <v-tab :value="1">
              <v-icon class="mx-3">mdi-phone</v-icon>
              <span>Detalles</span>
            </v-tab>

            <v-tab :value="2">
              <v-icon class="mx-3">mdi-heart</v-icon>
              <span>Historia</span>
            </v-tab>

            <!-- <v-tab :value="3">
                <v-icon>mdi-account-box</v-icon>
                <span></span>
              </v-tab> -->
          </v-tabs>
          <v-window v-model="tabs">
            <v-window-item v-for="i in 3" :key="i" :value="i">
              <v-card>
                <v-card-text>
                  <h1>Camiseta revolución comunista</h1>
                  <div class="d-flex align-center my-3">
                    <h2 class="previous-price mx-3"> $ 35000 </h2>
                    <h2 class="mx-3"> $ 30000 </h2>
                    <v-chip variant="outlined">13% Off</v-chip>
                  </div>
                  <div>
                    <h2>Características</h2>
                  </div>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window></div
        >
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import camisetaAdelanteFidelCastro from '@/assets/images/carrouselPrincipal/camisetaAdelanteFidelCastro_1.webp';
  const tabs= ref(null);
</script>

<style lang="scss" scoped>

  .detail-box-container{
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content:space-between;
  }
    .grid{
      display:flex;
      flex-direction: column;
      flex-wrap: wrap;
      list-style:none;
    }
  .tabs-box
  {
      min-width: 500px;
  }
  .previous-price{
    text-decoration: line-through;
  }

    img{
      width:100px;
      height:auto;
      display:block;
      margin: 5px 0;
    }

    .main-image{
      width: auto;
    }
</style>
