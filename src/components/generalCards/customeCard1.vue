<template>
  <div>
    <div class="container">
      <div class="card">
        <div class="card-head elevation-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Red_star_with_hammer_and_sickle.svg/1200px-Red_star_with_hammer_and_sickle.svg.png"
            alt="logo"
            class="card-logo " />
          <img
            :src="genericCardData.image || 'https://acdn.mitiendanube.com/stores/605/358/products/37n1-48054e5e8a19c7b9f716249053342208-640-0.png'"
            alt="camiseta"
            class="product-img" />
          <div class="product-detail">
            <div class="w-50">
              <h2>{{ genericCardData.title || 'Default Title' }}</h2>
            </div>
            {{ genericCardData.description || 'Default Description' }}
          </div>
          <span class="back-text"> FAS </span>
        </div>
        <div class="card-body">
          <div class="product-desc">
            <span class="product-title">
              Hartbee<b>spoort</b>
              <span class="badge"> New </span>
            </span>
            <span class="product-caption">
              {{ genericCardData.subtitle || 'Default Subtitle' }}
            </span>
            <span class="product-rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star grey"></i>
            </span>
          </div>
          <div class="product-properties">
            <span class="product-size">
              <h4>Tallas disponibles</h4>
              <ul class="ul-size">
                <li><a href="#">7</a></li>
                <li><a href="#">8</a></li>
                <li><a href="#">9</a></li>
                <li><a href="#" class="active">10</a></li>
                <li><a href="#">11</a></li>
              </ul>
            </span>
            <span class="product-color">
              <h4>Colour</h4>
              <ul class="ul-color">
                <li><a href="#" class="orange active"></a></li>
                <li><a href="#" class="green"></a></li>
                <li><a href="#" class="yellow"></a></li>
              </ul>
            </span>
            <span class="product-price">
              COP<b>{{ genericCardData.price || '' }}</b>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="yt">
      <a href="https://www.youtube.com/watch?v=jYAmKNOJ4Ck" target="_blank">
        <img
          width="151"
          src="https://s5.postimg.cc/vzwuxmw87/template.png"
          alt="" />
      </a>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const props = defineProps(['genericCardData']);

  const loading = ref(false);
  const selection = ref(1);

  const reserve = () => {
    loading.value = true;
    setTimeout(() => (loading.value = false), 2000);
  };

  const getCategoryLabel = () => {
    switch (props.genericCardData.category) {
      case 'libro':
        return 'Editoriales disponibles';
      case 'ropa':
        return 'Tallas disponibles';
      case 'accesorio':
        return 'Colores disponibles';
      default:
        return 'Opciones disponibles';
    }
  };

  const categoryLabel = getCategoryLabel();
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
    outline: none;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: #353535;
  }

  .container {
    width: 280px;
    height: 500px;
    margin: 30px auto;
  }

  .card {
    border-radius: 25px;
    box-shadow: -11px 11px 1px rgba(0, 0, 0, 0.3);
  }

  .card-head {
    position: relative;
    height: 252px;
    background: #fa782e;
    /* Old browsers */
    background: -moz-linear-gradient(-45deg, #fa782e 8%, #c82930 83%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(-45deg, #fa782e 8%, #c82930 83%);
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(135deg, #fa782e 8%, #c82930 83%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  //   filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#fa782e', endColorstr='#c82930', GradientType=1);
    /* IE6-9 fallback on horizontal gradient */
    border-radius: 25px 25px 0 0;
  }

  .card-logo {
    width: 55px;
    margin: 20px;
  }

  .product-img {
    width: 200px;
    max-height: 200px;
    position: absolute;
    left: 0;
    margin-top: -25px;
    margin-left: 160px;
  }

  .product-detail {
    padding: 0 20px;
    font-size: 10px;
    color: #fff;
  }

  .product-detail h2 {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
    padding-bottom: 10px;
    text-transform: uppercase;
  }

  .back-text {
    display: inline-block;
    font-size: 125px;
    font-weight: 900;
    margin-left: -7px;
    margin-top: -12px;
    opacity: 0.1;
  }

  .card-body {
    height: 255px;
    background: #fff;
    border-radius: 0 0 25px 25px;
  }

  .product-title {
    padding: 20px 20px 5px 20px;
    display: block;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .product-title b {
    font-weight: 900;
    letter-spacing: 0px;
  }

  .badge {
    position: relative;
    font-size: 10px;
    font-weight: 300;
    color: #fff;
    background: #11e95b;
    padding: 2px 5px;
    border-radius: 4px;
    top: -2px;
    margin-left: 5px;
  }

  .product-caption {
    display: block;
    padding: 0 20px;
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
  }

  .product-rating {
    padding: 0 20px;
    font-size: 11px;
  }

  .product-rating i.grey {
    color: #acacab;
  }

  .product-size h4 {
    font-size: 11px;
    padding: 0 21px;
    margin-top: 15px;
    padding-bottom: 10px;
    text-transform: uppercase;
  }

  .ul-size {
    margin-left: 15px;
  }

  .ul-size li {
    list-style: none;
    float: left;
    margin-right: 20px;
  }

  .ul-size li a {
    display: inline-block;
    text-decoration: none;
    font-size: 11px;
    width: 22px;
    height: 22px;
    border-radius: 100%;
    text-align: center;
    line-height: 23px;
    color: #000;
  }

  .ul-size li a.active {
    background: #f35e3d;
    color: #fff;
  }

  .product-size:before,
  .product-size:after {
    content: '';
    display: block;
    clear: both;
  }

  .product-color h4 {
    font-size: 11px;
    padding: 0 21px;
    margin-top: 20px;
    padding-bottom: 20px;
    text-transform: uppercase;
  }

  .ul-color {
    margin-left: 27px;
  }

  .ul-color li {
    list-style: none;
    float: left;
    margin-right: 20px;
  }

  .ul-color li a {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 100%;
  }

  .ul-color li a.orange {
    background: #f35e3d;
  }

  .ul-color li a.green {
    background: #11e95b;
  }

  .ul-color li a.yellow {
    background: #ffd414;
  }

  .ul-color li a.active:after {
    position: absolute;
    content: '';
    display: inline-block;
    border: 1px solid #f35e3d;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    margin-left: -5px;
    margin-top: -5px;
  }

  .product-price {
    position: absolute;
    background: #11e95b;
    padding: 7px 20px;
    text-align: center;
    display: inline-block;
    font-size: 24px;
    font-weight: 200;
    color: #fff;
    border-radius: 7px;
    margin-top: -13px;
    margin-left: -5px;
    box-shadow: -10px 20px 15px -10px rgba(17, 233, 91, 0.3);
  }

  .product-price b {
    margin-left: 5px;
  }



  .yt
  {
    position: fixed;
    padding:7px 10px 3px 10px;
    top: 5px;
    right: 5px;
    background: rgba(0,0,0,0.1);
  }

  .yt:hover
  {
    background: rgba(0,0,0,0.2);
  }
</style>
