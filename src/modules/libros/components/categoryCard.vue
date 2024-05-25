<template>
  <div>
    <div class="card card0" :style="{ backgroundImage: `url(${cardData?.image})` }">
      <div class="borders">
        <h2>{{ cardData?.title }}</h2>
        <div class="icons">
          <i class="" aria-hidden="true"></i>
          <i class="" aria-hidden="true"></i>
          <i class="" aria-hidden="true"></i>
          <i class="" aria-hidden="true"></i>
          <i class="" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(['cardData']);

const imageUrl = ref('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Marx_color.jpg/220px-Marx_color.jpg');
</script>

<style lang="scss" scoped>


  .borders {
    height: 319px;
    width: 240px;
    color: rgba(255, 255, 255, 0);
    background: transparent;
    border-radius: 10px;
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
    transition: box-shadow 0.5s, color 1s, border 1s;
    position: relative;
  }

  .borders:hover {
    border: 1px solid white;
    color: white;
  }

  .borders h2{
      margin: 10px;
  }

  .card {
    height: 329px;
    width: 250px;
    background: grey;
    border-radius: 10px;
    transition: background 0.8s;
    overflow: hidden;
    box-shadow: 0 70px 63px -60px #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
  }

  .card0 {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 300px;
  }

  .card0:hover {
    background-position: left center;
    background-repeat: no-repeat;
    background-size: 600px;
  }

  .card0:hover h2,
  .card0:hover .fa {
    opacity: 1;
  }
</style>
