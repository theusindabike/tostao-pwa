<template>
  <div>
    <v-snackbar
      :timeout="timeout"
    >
      {{ message }}
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
export default {
  name: 'AppSnackBar',
  props: {
      message: String,
  },
  data() {
      return {
          timeout: 2000,
      }
  }
}
</script>