<template>
  <div class="w-100">
    <v-footer class="bg-indigo-lighten-1 d-flex flex-column">
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="text"></v-btn>
      </div>

      <div class="pt-0 primary-font my-5 ">
        <div class="d-flex" style="width: 100%;">
          <v-expansion-panels>
            <v-expansion-panel
              title="¿Quiénes somos?"
              text="La juventud comunista colombiana es una organización juvenil de carácter
        político, democrática, revolucionaria y antiimperialista, que lucha por
        la unidad de los jóvenes, por la defensa de sus derechos, por la paz con
        justicia social, la liberación nacional, la democracia y el socialismo.
        La JUCO es una organización patriótica, orientada por los principios del
        marxismo-leninismo, inspirado y recreado en la tradiciones emancipadoras
        de nuestro pueblo, el pensamiento bolivariano y de nuestra América.
        Continúa el ejemplo de las gestas de la liberación nacional y
        latinoamericana. Educa y forja a sus militantes en sus ideales para el
        socialismo, en la conciencia de clase, la independencia y la soberanía.
        Somos una organización antifacista que promueve los principios del
        internacionalismo y la solidaridad con los pueblos oprimidos en el
        mundo.">
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>

      <v-divider></v-divider>

      <div class="primary-font">
        {{ new Date().getFullYear() }} —
        <strong>Juventud Comunista Colombiana</strong>
      </div>
    </v-footer>
  </div>
</template>

<script setup>
  import {ref} from 'vue';
    const icons = ref([
            'mdi-facebook',
            'mdi-twitter',
            'mdi-whatsapp',
            'mdi-instagram',
          ]);
</script>

<style lang="scss" scoped></style>
