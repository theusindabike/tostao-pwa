<template>  
  <VTextField
    ref="textField"
    v-currency="options"
    @input="handleInput"
    required
    autocomplete="off"
    label="Valor"
    :clearable="true"
  />
</template>

<script>
import { setValue, parseCurrency } from "vue-currency-input"
export default {  
  name: 'AppCurrencyInput',
  data() {
    return {
    }
  },
  props: {
    value: Number,
    form: Object,
  },
  computed: {
    options() {
      return {
        currency: {prefix:null},
        locale: 'pt-PT',
        autoDecimalMode:true,
        distractionFree: {
          hideCurrencySymbol: true,
        },
      }
    }
  },
  watch: {
    value(value) {
      this.setValue(value)
    }
  },
  mounted() {
    this.setValue(this.value)
  },
  methods: {
    setValue(value) {
      setValue(this.$refs.textField.$refs.input, value)
    },
    handleInput(value) {
      this.$emit('input', parseCurrency(value, this.options))
    }
  },
}
</script>

<style scoped>
</style>