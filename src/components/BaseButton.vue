<template>
  <input
    type="button"
    class="btn"
    :value="buttonSymbol"
    @click="btnMethod(expressionSymbol)"
  >
</template>

<script>
export default {
  props: {
    buttonSymbol: {
      type: String,
      required: true
    },
    expressionSymbol: {
      type: String,
      required: true
    },
    btnMethod: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>
input.btn {
  font-family: Arial;
}
</style>