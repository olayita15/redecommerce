<template>
  <div>
    <v-container>
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
      rel="stylesheet" />

    <section class="hero-section">
      <div class="card-grid">
        <a class="card" href="#">
          <div
            class="card__background"
            style="background-image: url(https://ih1.redbubble.net/image.2720416359.7093/ssrco,baseball_cap,womens,B7B4B8:25c8fc6a4c,front_three_quarter,tall_portrait,750x1000-bg,f8f8f8.jpg)"></div>
          <div class="card__content">
            <p class="card__category">Categoría</p>
            <h3 class="card__heading">Gorras</h3>
          </div>
        </a>
        <a class="card" href="#">
          <div
            class="card__background"
            style="background-image: url(https://i.pinimg.com/736x/56/59/34/565934cb75ebd858222913a76e2c8001.jpg)"></div>
          <div class="card__content">
            <p class="card__category">Categoría</p>
            <h3 class="card__heading">Camisetas</h3>
          </div>
        </a>
        <a class="card" href="#">
          <div
            class="card__background"
            style="background-image: url(https://cdn-images.threadless.com/threadless-media/artist_shops/shops/burroart/products/2608005/neck-gaiter_performance_single-layer-1639783341-ba93ffc970590f97847e1bc8061d6b92.jpg?v=3&d=eyJvcHMiOiBbWyJyZXNpemUiLCBbODAwXSwge31dLCBbImNhbnZhc19jZW50ZXJlZCIsIFs4MDAsIDgwMCwgIiNmZmZmZmYiXSwge31dLCBbImVuY29kZSIsIFsianBnIiwgODVdLCB7fV1dLCAiZm9yY2UiOiBmYWxzZSwgIm9ubHlfbWV0YSI6IGZhbHNlfQ==)"></div>
          <div class="card__content">
            <p class="card__category">Categoría</p>
            <h3 class="card__heading">Cuellos</h3>
          </div>
        </a>
        <a class="card" href="#">
          <div
            class="card__background"
            style="background-image: url(https://i.etsystatic.com/7509119/r/il/c86209/5629388129/il_570xN.5629388129_tvot.jpg)"></div>
          <div class="card__content">
            <p class="card__category">Categoría</p>
            <h3 class="card__heading">Bufandas</h3>
          </div>
        </a>
      </div>
    </section>
  </v-container>
  </div>
</template>

<script setup>
  import homeFirstPage from '../../inicio/views/homeFirstPage.vue';
  const backgroundDark = '#2d3548';
const textLight = 'rgba(255, 255, 255, 0.6)';
const textLighter = 'rgba(255, 255, 255, 0.9)';
const spacingS = '8px';
const spacingM = '16px';
const spacingL = '24px';
const spacingXL = '32px';
const spacingXXL = '64px';
const widthContainer = '1200px';
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

