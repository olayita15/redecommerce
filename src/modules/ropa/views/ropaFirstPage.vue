<template>
  <div>
    <v-container>
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
      rel="stylesheet" />

    <section class="hero-section">
      <div class="card-grid">
        <div v-for="(category, index) in actualCategoryList" :key="index">
          <div class="card" @click="navigationPage(category)">
            <div
              class="card__background"
              :style="{ 'background-image': 'url(' + category.image?.url + ')' }"></div>
            <div class="card__content">
              <p class="card__category">Categoría</p>
              <h3 class="card__heading">{{ category.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </v-container>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()
const router = useRouter()

const actualCategoryList = computed(() => store.getters['ropaStore/actualCategoryList']);
const cambiarCategories = () => store.dispatch("ropaStore/cambiarCategories");

const navigationPage = (category) => {
  router.beforeEach((to, from, next) => {
    to.meta['title'] = category.slug;
    next();
  });
  router.push({name:'filterByCategoryProductListPage', params: {category: category.slug}})
};

onMounted(()=>{
  cambiarCategories();
})
</script>

<style lang="scss" scoped>

  .hero-section {
    align-items: flex-start;
    // background-image: linear-gradient(15deg, #0f4667 0%, #2a6973 150%);
    display: flex;
    min-height: 100%;
    justify-content: center;
    padding: 64px 24px;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    max-width: 1200px;
    width: 100%;

    @media (min-width: 540px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 960px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .card {
    list-style: none;
    position: relative;
    cursor: pointer;

    &:before {
      content: '';
      display: block;
      padding-bottom: 150%;
      width: 100%;
    }

    .card__background {
      background-size: cover;
      background-position: center;
      border-radius: 24px;
      bottom: 0;
      filter: brightness(0.75) saturate(1.2) contrast(0.85);
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      transform-origin: center;
      transform: scale(1) translateZ(0);
      transition: filter 200ms linear, transform 200ms linear;

      &:hover {
        transform: scale(1.05) translateZ(0);
      }
    }

    .card-grid:hover > &:not(:hover) .card__background {
      filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
    }

    .card__content {
      left: 0;
      padding: 24px;
      position: absolute;
      top: 0;
    }

    .card__category {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9rem;
      margin-bottom: 8px;
      text-transform: uppercase;
    }

    .card__heading {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.9rem;
      text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
      line-height: 1.4;
      word-spacing: 100vw;
    }
  }
</style>

