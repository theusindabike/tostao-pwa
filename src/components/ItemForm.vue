<template>
  <div>
    <v-form ref="form" v-model="valid">
      <v-text-field
        v-model="description"
        :counter="50"
        :rules="descriptionRules"
        label="Descrição"
        :clearable="true"
        required
        autocomplete="off"
      ></v-text-field>
      <AppCurrencyInput v-model="value"/>

      <div class="d-flex justify-end">
        <v-btn
          :disabled="!valid"
          color="success"
          @click="validate"
        >
        Salvar
      </v-btn>
      </div>
    </v-form>
    <v-snackbar
      v-model="snackbar"
    >
      {{ snackbarMessage }}
      <v-btn
        color="blue"
        text
        @click="snackbar = false"
      >
        Fechar
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import AppCurrencyInput from './AppCurrencyInput.vue'
import itemService from '../services/itemService'

export default {
  name: 'ItemForm',
  data() { 
    return {
      valid: true,
      description: null,
      descriptionRules: [
        v => !!v || 'Meu anjo, coloca uma descrição ai pra gente',
        v => (v && v.length <= 50) || 'A descrição deve possuir menos que 50 caracteres',
      ],
      value: null,
      snackbarMessage: 'Valor salvo com sucesso',
      snackbar: false,
    }
  },
  components: {
    AppCurrencyInput,    
  },
  methods: {
    validate () {
      this.snackbar = true
      let item = {'description': this.description, 'value': this.value}
      
      itemService.createItem(item).then(() => {
        this.$refs.form.reset()
      })
      this.$refs.form.validate()
    }    
  }
}

</script>

<style>
</style>
