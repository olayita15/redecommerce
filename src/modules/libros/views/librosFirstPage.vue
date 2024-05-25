<template>
  <div>
    <div class="d-flex flex-wrap justify-center align-center">
      <div class="ma-5" v-for="(category, index) in categories" :key="index">
        <category-card :cardData="category" />
      </div>
    </div>
  </div>
</template>

<script setup>
    import {ref, reactive} from 'vue';
      import categoryCard from '../components/categoryCard.vue';

      const categories = ref([
      {
          image: 'https://cinereverso.org/wp-content/uploads/2013/11/Mar%C3%ADa-del-Carmen-Ariet-Garc%C3%ADa.jpg',
          title: 'Autoras',
      },
      {
          image: 'https://www.buscabiografias.com/img/people/Gyorgy_Lukacs.jpg',
          title: 'Autores',
      },
      {
          image: 'https://4.bp.blogspot.com/-ebPLQk-5mz0/UK6HcubHsuI/AAAAAAAAAf0/kmFw9XjNFUc/s1600/latinoamerica_dibujada.jpg',
          title: 'Historia Contemporánea',
      },
      {
          image: 'https://www.libreriacasatomada.com/imagenes/9789585/978958563289.GIF',
          title: 'Paz y Conflicto',
      },
      {
          image: 'https://historia.nationalgeographic.com.es/medio/2023/06/07/cheguevara_496094ea_230607090722_800x992.jpg',
          title: 'Ché Guevara',
      },
      {
          image: 'https://enciclopediadehistoria.com/wp-content/uploads/2022/05/Fidel-Castro.jpeg',
          title: 'Biografía y Pensamiento Político',
      },
      {
          image: 'https://media.viajando.travel/p/955f5cb2e1df84559398bd24b2dc0c68/adjuntos/236/imagenes/000/614/0000614051/1200x0/smart/la-habana-cuba.jpg',
          title: 'Arte y Fotografía',
      },
      {
          image: 'https://vidalturismo.com/wp-content/uploads/2023/02/habana-02.jpg',
          title: 'Cultura y Sociedad en Cuba',
      },
      {
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Aleksandra_Kollontai.jpg/800px-Aleksandra_Kollontai.jpg',
          title: 'Feminismo',
      },
      {
          image: 'https://www.libreriacasatomada.com/imagenes/9781925/978192501965.GIF',
          title: 'Ensayo Político y Social',
      },
  ]
  );
</script>

<style lang="scss" scoped></style>
