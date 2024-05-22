<template>
    <div>
      <form>
        <v-textarea
          v-model="state.name"
          :error-messages="v$.name.$errors.map(e => e.$message)"
          :counter="20"
          label="Escribe acá tus dudas"
          required
          @input="v$.name.$touch"
          @blur="v$.name.$touch"
          variant="outlined"
          class="my-5"></v-textarea>

        <v-text-field
          v-model="state.name"
          :error-messages="v$.name.$errors.map(e => e.$message)"
          :counter="20"
          label="Nombre"
          required
          @input="v$.name.$touch"
          @blur="v$.name.$touch"
          variant="outlined"
          class="my-5"></v-text-field>
  
        <v-text-field
          v-model="state.email"
          type="email"
          :error-messages="v$.email.$errors.map(e => e.$message)"
          label="Correo"
          required
          @input="v$.email.$touch"
          @blur="v$.email.$touch"
          variant="outlined"
          class="my-5"></v-text-field>
  
        <v-text-field
          v-model="state.phone"
          :error-messages="v$.phone.$errors.map(e => e.$message)"
          label="Número de celular"
          required
          @input="v$.phone.$touch"
          @blur="v$.phone.$touch"
          class="my-5"
          variant="outlined"></v-text-field>
  
        <v-checkbox
          v-model="state.checkbox"
          label="¿Estás de acuerdo con que te contactemos?"
          class="my-5"></v-checkbox>
        <v-btn class="me-4" @click="v$.$validate" :disabled="state.select===null">
          Enviar
        </v-btn>
        <v-btn @click="clear"> Limpiar </v-btn>
      </form>
    </div>
  </template>
  
  <script setup>
    import { reactive } from 'vue'
    import { useVuelidate } from '@vuelidate/core'
    import { email, required, helpers } from '@vuelidate/validators'
  
    const initialState = {
      name: '',
      email: '',
      phone: '',
      checkbox: null,
    };
  
    const state = reactive({
      ...initialState,
    });
  
  
    const rules = {
      name: { required: helpers.withMessage('Este campo no puede estar vacío.', required) },
      email: { required: helpers.withMessage('El correo es obligatorio.', required), email: helpers.withMessage('Debe ser un correo válido.', email) },
      phone: { required: helpers.withMessage('El número de teléfono es obligatorio.', required) },
    };
  
    const v$ = useVuelidate(rules, state);
  
    function clear () {
      v$.value.$reset()
  
      for (const [key, value] of Object.entries(initialState)) {
        state[key] = value
      }
    };
  </script>
  
  <style lang="scss" scoped></style>
  