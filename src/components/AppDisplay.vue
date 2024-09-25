<template>
  <div class="circle">
    <div class="calc">
      <div class="calc__display">
        <div class="calc__input">
          <span
            v-for="symb in displaySymbols"
            :key="symb.id"
            :class="{ 'math-operator': isMathOperator(symb) }"
          >
            {{ symb }}
          </span>
        </div>

        <div class="calc__result">
          <span>{{ calculationResult }}</span>
        </div>

        <button
          class="backspace"
          type="button"
          @click="clickBackspaceButton"
        >←</button>

      </div>

      <div class="calc-btn__list">
        <div class="calc-btn__group utilityButtons">
          <base-button
            v-for="(btn, index) in utilityButtons"
            :key="index"
            :buttonSymbol="btn.buttonSymbol"
            :expressionSymbol="btn.expressionSymbol"
            :btnMethod="btn.handleBtnClick"
          ></base-button>
        </div>
        <div class="calc-btn__group numericButtons">
          <base-button
            v-for="(btn, index) in numericButtons"
            :key="index"
            :buttonSymbol="btn.buttonSymbol"
            :expressionSymbol="btn.expressionSymbol"
            :btnMethod="btn.handleBtnClick"
          ></base-button>
        </div>
        <div class="calc-btn__group operationButtons">
          <base-button
            v-for="(btn, index) in operationButtons"
            :key="index"
            :buttonSymbol="btn.buttonSymbol"
            :expressionSymbol="btn.expressionSymbol"
            :btnMethod="btn.handleBtnClick"
          ></base-button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  data() {
    return {
      displaySymbols: [],
      calculationSymbols: [],
      mathExpression: '',
      calculationResult: '',
      numericButtons: [
        {
          id: 'num-001',
          buttonSymbol: '1',
          expressionSymbol: '1',
          keyCode: 'Numpad1',
          key: '1',
          btnType: 'number',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'num-002',
          buttonSymbol: '2',
          expressionSymbol: '2',
          keyCode: 'Numpad2',
          key: '2',
          btnType: 'number',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'num-003',
          buttonSymbol: '3',
          expressionSymbol: '3',
          keyCode: 'Numpad3',
          key: '3',
          btnType: 'number',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'num-004',
          buttonSymbol: '4',
          expressionSymbol: '4',
          keyCode: 'Numpad4',
          key: '4',
          btnType: 'number',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'num-005',
          buttonSymbol: '5',
          expressionSymbol: '5',
          keyCode: 'Numpad5',
          key: '5',
          btnType: 'number',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'num-006',
          buttonSymbol: '6',
          expressionSymbol: '6',
          keyCode: 'Numpad6',
          key: '6',
          btnType: 'number',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'num-007',
          buttonSymbol: '7',
          expressionSymbol: '7',
          keyCode: 'Numpad7',
          key: '7',
          btnType: 'number',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'num-008',
          buttonSymbol: '8',
          expressionSymbol: '8',
          keyCode: 'Numpad8',
          key: '8',
          btnType: 'number',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'num-009',
          buttonSymbol: '9',
          expressionSymbol: '9',
          keyCode: 'Numpad9',
          key: '9',
          btnType: 'number',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: '011',
          buttonSymbol: '±',
          expressionSymbol: '±',
          keyCode: '',
          key: '',
          btnType: 'number',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'num-010',
          buttonSymbol: '0',
          expressionSymbol: '0',
          keyCode: 'Numpad0',
          key: '0',
          btnType: 'number',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: '012',
          buttonSymbol: ',',
          expressionSymbol: '.',
          keyCode: 'NumpadDecimal',
          key: 'Decimal',
          btnType: 'number',
          handleBtnClick: this.handleCalcBtnClick
        },
      ],

      operationButtons: [
        {
          id: 'op-001',
          buttonSymbol: '+',
          expressionSymbol: '+',
          keyCode: 'NumpadAdd',
          key: '+',
          btnType: 'operator',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'op-002',
          buttonSymbol: '-',
          expressionSymbol: '-',
          keyCode: 'NumpadSubtract',
          key: '-',
          btnType: 'operator',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'op-003',
          buttonSymbol: '×',
          expressionSymbol: '*',
          keyCode: 'NumpadMultiply',
          key: '*',
          btnType: 'operator',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'op-004',
          buttonSymbol: '÷',
          expressionSymbol: '/',
          keyCode: 'NumpadDivide',
          key: '/',
          btnType: 'operator',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'op-005',
          buttonSymbol: '=',
          expressionSymbol: '=',
          keyCode: 'NumpadEnter',
          key: 'Enter',
          btnType: 'operator',
          handleBtnClick: this.handleCalcBtnClick
        },
      ],

      utilityButtons: [
        {
          id: 'ut-001',
          buttonSymbol: 'C',
          expressionSymbol: '',
          keyCode: 'Escape',
          key: 'Escape',
          btnType: 'utility',
          handleBtnClick: this.clickClearButton
        },
        {
          id: 'ut-002',
          buttonSymbol: '()',
          expressionSymbol: '()',
          keyCode: '',
          key: '',
          btnType: 'utility',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'ut-003',
          buttonSymbol: '%',
          expressionSymbol: '%',
          keyCode: '',
          key: '',
          btnType: 'utility',
          handleBtnClick: this.handleCalcBtnClick
        },

      ],
    }
  },
  methods: {
    handleCalcBtnClick(symb = '') {
      // console.log(symb);

      switch (symb) {
        case '=':
          this.clickEquals();
          break;

        case '()':
          this.clickParentheses();
          break;

        default:
          this.addSymbolToMathExpression(symb);
          break;
      }

    },

    addSymbolToMathExpression(symbol = '') {
      this.calculationResult = '';
      if (symbol !== '') this.displaySymbols.push(symbol);
      this.mathExpression = this.displaySymbols.join('');
    },

    isMathOperator(par) {
      if (par.search(/[+\-*/]/i) != -1) {
        console.log('true');
        return true
      } else {
        console.log('false');
        return false
      }
    },

    // restrictInput(event) {
    //   const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '(', ')', '+', '-', '*', '/', 'Backspace', 'Enter'];
    //   if (!allowedKeys.includes(event.key)) {
    //     event.preventDefault();
    //     console.log('after preventDefault');
    //   } else {
    //     // this.displaySymbols.push(event.key)
    //     // this.mathExpression = this.displaySymbols.join('')
    //   }

    // },
    // updateMathExpression() {
    //   const allowedCharacters = /[0-9()+\-*/]/g;

    //   let currentValue = this.$refs.editableDiv.innerHTML;

    //   // Фильтрация введённого текста, оставляя только допустимые символы
    //   const filteredValue = currentValue.match(allowedCharacters)?.join('') || '';

    //   // Обновление содержимого editableDiv и переменной MathExpression
    //   this.$refs.editableDiv.innerHTML = filteredValue;
    //   this.mathExpression = filteredValue;
    //   console.log(this.mathExpression);

    // },

    clickClearButton(blank) {

      this.displaySymbols = [];
      this.mathExpression = blank;
      this.calculationResult = blank;
    },

    clickEquals() {
      this.calculationResult = eval(this.mathExpression);
    },

    clickBackspaceButton() {
      this.displaySymbols.pop();
      this.mathExpression = this.displaySymbols.join('');
      this.handleCalcBtnClick()
    },

    clickParentheses() {
      if (this.isLastElementOpenParenthesis() === true) {
        this.clickBackspaceButton();
        this.addSymbolToMathExpression(')');
      } else if (this.isLastElementOpenParenthesis() === false) {
        this.clickBackspaceButton();
        this.addSymbolToMathExpression('(');
      } else {
        this.addSymbolToMathExpression('(');
      }
    },

    isLastElementOpenParenthesis() {
      if (this.displaySymbols[this.displaySymbols.length - 1] === '(') {
        return true
      } else if (this.displaySymbols[this.displaySymbols.length - 1] === ')') {
        return false;
      }
    },

    handleKeyPress(event, btn) {
      if (event.shiftKey && btn) {
        console.log(btn.keyCode);
        // btn.handleBtnClick(btn.keyCode)
      } else if (btn) {
        btn.handleBtnClick(btn.expressionSymbol)
      }
    }

  },
  mounted() {
    document.addEventListener('keydown', (e) => {

      let btn = this.numericButtons.find(btn => btn.key === e.key);
      this.handleKeyPress(e, btn);
      btn = this.utilityButtons.find(btn => btn.key === e.key);
      this.handleKeyPress(e, btn);
      btn = this.operationButtons.find(btn => btn.key === e.key);
      this.handleKeyPress(e, btn);

    })
  },
  components: {
    BaseButton
  }
}
</script>

<style lang="scss" scoped>
.circle {
  width: 574px;
  height: 574px;
}

.calc {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 612px;
  flex-shrink: 0;
  border-radius: 39px;
  background: linear-gradient(167deg, #F7F8FB -5.94%, rgba(247, 248, 251, 0.019) 103.62%);
  backdrop-filter: blur(51px);
  margin-top: 50px;
}

.calc-btn__list {
  width: 100%;
  padding: 0 15px;

  display: grid;
  // justify-items: center;
  justify-content: center;
  grid-template-areas:
    "A A A C"
    "B B B C"
    "B B B C"
    "B B B C";
  gap: 8px 16px;
}

.calc-btn__group {
  display: grid;
  gap: 8px 16px;
}

.utilityButtons {
  grid-area: A;
  grid-template-columns: repeat(3, 1fr);
}

.numericButtons {
  grid-area: B;
  grid-template-columns: repeat(3, 1fr);
}

.operationButtons {
  grid-area: C;
}

.calc__display {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  min-height: 230px;
  padding: 30px;
}

.calc__input {
  color: #818181;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  width: 100%;
  display: flex;
  justify-content: end;
  text-align: right;

  border-bottom: 1px solid #ccc;
  padding: 5px;
  min-height: 40px;
}

.math-operator {
    color: rgb(183, 127, 7);
}

.calc__result {
  width: 100%;

  display: flex;
  justify-content: end;
  color: #424242;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 62px;
  height: 62px;
  padding: 6px 4px;
  border-radius: 50px;
  border: 1px rgba(255, 255, 255, 0.85);
  background: linear-gradient(130deg, rgba(255, 255, 255, 0.30) -9.69%, rgba(255, 255, 255, 0.20) 114.23%);
  backdrop-filter: blur(6px);

  color: #FFF;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}


.backspace {
  background-color: transparent;
  flex: 0 1
}

@media (max-width: 719.9px) {
  .circle {
    border-radius: 0px
  }

  .calc {
    width: 100%;
    margin-top: 0;
  }

}
</style>