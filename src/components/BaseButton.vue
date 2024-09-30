<template>
  <div
    class="wrapper no-select"
    @click="btnClick()"
  >
    <input
      type="button"
      class="btn no-select"
      :class="{
        'math-operator': buttonType === 'operator',
        'escape': buttonType === 'escape',
        'equals': buttonType === 'equals',
      }"
      :value="buttonSymbol"
    >
  </div>
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
    buttonType: {
      type: String,
      required: true,
    }
  },
  methods: {
    btnClick() {
      this.$emit('btn-click', this.buttonSymbol)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 10px;
}

.btn {
  --btn-size: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: var(--btn-size);
  height: var(--btn-size);
  padding: 6px 4px;
  border-radius: 50px;
  border: 1px rgba(255, 255, 255, 0.85);
  background: var(--btn-background);
  backdrop-filter: blur(6px);

  color: rgb(var(--symbol-input-color));
  font-family: Poppins;
  font-family: Arial;
  font-size: var(--symbol-btn-font-size);
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

  
@media (max-width: 767.9px) {
  --btn-size: 90px
}

@media (max-width: 575.9px) {
  --btn-size: 78px
}

@media (max-width: 399.9px) {
  --btn-size: 58px
}
}

.btn.math-operator {
  color: rgb(var(--math-operator-color));
}

.btn.escape {
  color: rgb(var(--escape-color));
}

.btn.equals {
  background-color: rgb(var(--math-operator-color));
  color: rgb(255, 255, 255);
}

</style>