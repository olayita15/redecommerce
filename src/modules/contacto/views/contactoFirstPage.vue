<template>
  <div>
    <v-container class="primary-font">
      <v-row>
        <v-col>
          <div class="form-box elevation-3 pa-5">
            <v-select
              theme="light"
              v-model="state.select"
              :items="items"
              item-title="title"
              item-value="value"
              :error-messages="v$.select.$errors.map(e => e.$message)"
              label="Tipo de solicitud"
              required
              @change="v$.select.$touch"
              @blur="v$.select.$touch"
              variant="outlined"></v-select>
            <div v-if="state.select===1">
              <informacion-form />
            </div>
            <div v-if="state.select===2">
              <pertenecer-form />
            </div>
            <div v-if="state.select===3">
              <quejas-form />
            </div>
            <div v-if="state.select===4">
              <dudas-form />
            </div>
          </div>
        </v-col>
        <v-col class="desktop-display">
          <div class="form-box elevation-3 w-100 pa-5">
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
            <v-expansion-panels>
              <v-expansion-panel
                title="¿Cómo puedo contactar al equipo de atención al cliente para consultas sobre mi pedido?"
                text='Puedes contactar al equipo de atención al cliente mediante nuestro formulario en línea en la sección de "Contacto" o enviando un correo electrónico a support@ecommerce.com.'>
              </v-expansion-panel> </v-expansion-panels
            ><v-expansion-panels>
              <v-expansion-panel
                title="¿Cuál es el tiempo de respuesta típico para las consultas enviadas a través del formulario de contacto?"
                text='Nuestro equipo se esfuerza por responder a todas las consultas dentro de las 24 horas hábiles.'>
              </v-expansion-panel> </v-expansion-panels
          ><v-expansion-panels>
              <v-expansion-panel
                title="¿Qué debo hacer si necesito realizar una devolución o cambio de un producto?"
                text='Para realizar una devolución o cambio de un producto, por favor contáctanos a través del formulario en línea o envíanos un correo electrónico a returns@ecommerce.com con los detalles de tu solicitud.'>
              </v-expansion-panel> </v-expansion-panels
          >
          <v-expansion-panels>
              <v-expansion-panel
                title="¿Ofrecen servicio de atención al cliente por teléfono?"
                text='Actualmente, nuestro servicio de atención al cliente se brinda principalmente a través de correo electrónico y formulario en línea. Sin embargo, estamos trabajando para implementar un servicio telefónico en el futuro cercano.'>
              </v-expansion-panel> </v-expansion-panels
          ><v-expansion-panels>
              <v-expansion-panel
                title="¿Dónde puedo encontrar información sobre las políticas de envío y entrega de productos?"
                text='Puedes encontrar información detallada sobre nuestras políticas de envío y entrega en la sección de "Envíos" en nuestro sitio web, o puedes contactarnos directamente para recibir asistencia adicional.'>
              </v-expansion-panel> </v-expansion-panels
          ></div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
    import { reactive } from 'vue'
    import { useVuelidate } from '@vuelidate/core'
    import { required, helpers } from '@vuelidate/validators'

    import informacionForm from '../components/forms/informacionForm.vue';
    import pertenecerForm from '../components/forms/pertenecerForm.vue';
    import quejasForm from '../components/forms/quejasForm.vue';
    import dudasForm from '../components/forms/dudasForm.vue';


    const initialState = {
      select: null,
    };

    const state = reactive({
      ...initialState,
    });

    const items = [
      {title:'Información sobre los productos', value: 1},
      {title:'Interés en pertenecer a la organización', value: 2},
      {title:'Quejas y reclamos', value: 3},
      {title:'Dudas sobre la organización', value: 4},
    ];

    const rules = {
      select: { required: helpers.withMessage('Debes seleccionar un tipo de solicitud.', required) },
      items: { required },
  };

    const v$ = useVuelidate(rules, state);
</script>

<style lang="scss" scoped>
  .select-field  { background-color: red; }
    .form-box{
      background-color: whitesmoke;
        border-radius: 34px;
    }
    .desktop-display{
        display: flex;
    }
    @media (max-width: 900px) {
    .desktop-display{
        display: none;
    }

    }
</style>
