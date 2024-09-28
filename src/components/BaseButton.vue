<template>
  <input
    type="button"
    class="btn"
    :value="buttonSymbol"
    @click="btnClick()"
  >
</template>

<script>
export default {
  emits: {
    'btn-click'(buttonSymbol) {
      if (buttonSymbol) {
        return true
      }
      console.warn('Нет параметра id для emit read-news')
      return false
    }
  },
  props: {
    buttonSymbol: {
      type: String,
      required: true
    },
    expressionSymbol: {
      type: String,
      required: true
    },
  },
  methods: {
    btnClick() {
      // console.log(`btnClick: ${this.buttonSymbol}`);
      this.$emit('btn-click', this.buttonSymbol)
    }
  }
}
</script>

<style scoped>
input.btn {
  font-family: Arial;
}
</style>