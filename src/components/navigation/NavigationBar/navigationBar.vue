<template>
  <div class="w-100">
    <header class="header-desing header-box py-3">
      <div class="logo secondary-title-font">
        <span>TIENDA ROJA</span>
      </div>
      <div>
        <ul class="main-nav secondary-title-font">
          <li><a href="#">Ropa</a></li>
          <li><a href="#">Libros</a></li>
          <li><a href="#">Accesorios</a></li>
          <li class="cart-list-movil"><a href="#">Carrito</a></li>
          <li><a href="#">Contacto</a></li>
          <li
            ><div class="search-box primary-font">
              <v-text-field
                clearable
                label="Búsqueda"
                prepend-icon="mdi-magnify"
                variant="outlined"
                rounded
                density="compact"></v-text-field> </div
          ></li>
          <li
            class="cart-list"><div class="cart-box">
              <v-btn variant="text" size="x-large" rounded="xl">
                <v-badge floating :content="9">
                  <v-icon size="x-large">mdi-storefront-outline</v-icon>
                </v-badge>
              </v-btn>
            </div></li
          >
        </ul>
      </div>
      <!-- <h1 class="logo primary-font"><span href="#">TIENDA ROJA</span></h1>
      <ul class="main-nav primary-font">
        <li><a href="#">Ropa</a></li>
        <li><a href="#">Libros</a></li>
        <li><a href="#">Accesorios</a></li>
        <li><a href="#">Varios</a></li>
        <li
          ><div class="search-box primary-font">
            <v-text-field
              clearable
              label="Búsqueda"
              prepend-icon="mdi-magnify"
              variant="outlined"
              rounded
              density="compact"></v-text-field> </div
        ></li>
        <li
          ><div class="cart-box">
            <v-btn variant="text" size="x-large" rounded="xl">
              <v-badge floating :content="9">
                <v-icon size="x-large">mdi-storefront-outline</v-icon>
              </v-badge>
            </v-btn>
          </div></li
        >
      </ul> -->
    </header>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
    .header-desing {
      padding-top: .5em;
      padding-bottom: .5em;
      border: 1px solid #a2a2a2;
      background-color: #f4f4f4;
      -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
      box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
  }

  .header-box{
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      align-items: center;

      ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }

    .logo {
    	margin: 0;
      margin-left: 10px;
    	font-size: 2cm;
    }

    .cart-list-movil{
      display: none;
    }
  }




    h2,
    h3,
    a {
    	color: #34495e;
    }

    a {
    	text-decoration: none;
    }




    .main-nav {
    	margin-top: 5px;
      font-size:xx-large;

    }
    .logo a,
    .main-nav a {
    	padding: 10px 15px;
    	text-align: center;
    }

    .search-box{
    	padding: 0 15px;
      margin-top: 15px;
      min-width: 300px;
    	color: #34495e;
    }

    .cart-box {
    	color: #34495e;
    }

    .main-nav a {
    	color: #34495e;
    	font-size: .99em;
    }

    .main-nav a:hover {
    	color: #718daa;
    }


    /* =================================
      Media Queries
    ==================================== */
@media (max-width: 1050px) {
  .header-box{
    flex-flow: column wrap;
    justify-content: center;

    .logo{
      text-align: center;
    }

    ul {
      flex-flow: column wrap;
    justify-content: center;

    }
    .cart-list{
      display: none;
    }
    .cart-list-movil{
      display: block;
    }
  }
}

</style>
