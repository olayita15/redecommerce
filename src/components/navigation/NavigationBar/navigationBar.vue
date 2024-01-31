<template>
  <div>
    <header class="header">
      <h1 class="logo primary-font"><span href="#">TIENDA ROJA</span></h1>
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
      </ul>
    </header>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>


  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }


  h2,
  h3,
  a {
  	color: #34495e;
  }

  a {
  	text-decoration: none;
  }



  .logo {
  	margin: 0;
    margin-left: 10px;
  	font-size: 2cm;
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
    padding: 0 45px 0 10px;
  	color: #34495e;
  }

  .main-nav a {
  	color: #34495e;
  	font-size: .99em;
  }

  .main-nav a:hover {
  	color: #718daa;
  }



  .header {
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


  /* =================================
    Media Queries
  ==================================== */




  @media (min-width: 769px) {
  	.header,
  	.main-nav {
  		display: flex;
        align-items: center;
  	}
  	.header {
  		flex-direction: column;
  		align-items: center;
  		width: 100%;
        max-height: 100px;
  	}

  }

  @media (min-width: 1025px) {
  	.header {
  		flex-direction: row;
  		justify-content: space-between;
  	}

  }
</style>
