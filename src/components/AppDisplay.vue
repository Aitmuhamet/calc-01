<template>
  <div class="calc">
    <div class="calc__wrapper">
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
        <base-button
          v-for="(btn, index) in calcButtons"
          :key="index"
          :buttonSymbol="btn.buttonSymbol"
          :buttonType="btn.type"
          @btn-click="this.handleCalcBtnClick"
        ></base-button>
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
      calcButtons: [
        {
          id: 'ut-001',
          buttonSymbol: 'C',
          key: 'Escape',
          type: 'escape'
        },
        {
          id: 'ut-002',
          buttonSymbol: '()',
          key: '',
          type: 'operator'
        },
        {
          id: 'ut-003',
          buttonSymbol: '%',
          key: '%',
          type: 'operator'
        },
        {
          id: 'op-004',
          buttonSymbol: '÷',
          key: '/',
          type: 'operator'
        },
        {
          id: 'num-007',
          buttonSymbol: '7',
          key: '7',
          type: 'number'
        },
        {
          id: 'num-008',
          buttonSymbol: '8',
          key: '8',
          type: 'number'
        },
        {
          id: 'num-009',
          buttonSymbol: '9',
          key: '9',
          type: 'number'
        },
        {
          id: 'op-003',
          buttonSymbol: '×',
          key: '*',
          type: 'operator'
        },
        {
          id: 'num-004',
          buttonSymbol: '4',
          key: '4',
          type: 'number'
        },
        {
          id: 'num-005',
          buttonSymbol: '5',
          key: '5',
          type: 'number'
        },
        {
          id: 'num-006',
          buttonSymbol: '6',
          key: '6',
          type: 'number'
        },
        {
          id: 'op-002',
          buttonSymbol: '-',
          key: '-',
          type: 'operator'
        },
        {
          id: 'num-001',
          buttonSymbol: '1',
          key: '1',
          type: 'number'
        },
        {
          id: 'num-002',
          buttonSymbol: '2',
          key: '2',
          type: 'number'
        },
        {
          id: 'num-003',
          buttonSymbol: '3',
          key: '3',
          type: 'number'
        },
        {
          id: 'op-001',
          buttonSymbol: '+',
          key: '+',
          type: 'operator'
        },
        {
          id: '011',
          buttonSymbol: '±',
          key: '',
          type: 'number'
        },
        {
          id: 'num-010',
          buttonSymbol: '0',
          key: '0',
          type: 'number'
        },
        {
          id: '012',
          buttonSymbol: ',',
          key: '.',
          type: 'number'
        },
        {
          id: 'op-005',
          buttonSymbol: '=',
          key: 'Enter',
          type: 'equals'
        },
      ],
    }
  },
  methods: {
    handleCalcBtnClick(symb) {

      switch (symb) {
        case '±':
          this.toggleSign();
          break;

        case '()':
          this.clickParentheses();
          break;

        case '÷':
        case '×':
        case '+':
        case '-':
          this.addOperator(symb);
          break;

        case 'C':
          this.clickClearButton();
          break;

        case 'Backspace':
          this.clickBackspaceButton();
          break;

        case '=':
          this.clickEquals();
          break;

        default:
          this.addSymbolToDisplaySymbols(symb);
          break;
      }

    },

    getLastOperatorIndex(array) {
      for (let j = array.length - 1; j >= 0; j--) {
        const element = array[j];
        if (isNaN(element)) {
          return j;
        }
      }
    },
    getLastNumberDigits(ind, array) {
      let result = array.slice(ind + 1);
      return result;
    },
    handlePercent(tempArray, lastOperatorIndex) {
      const partBeforeLastOperatorArray = tempArray.slice(0, lastOperatorIndex);
      const stringLastOperator = tempArray[lastOperatorIndex];
      const stringLastNumberDigits = this.getLastNumberDigits(lastOperatorIndex, tempArray).join('');

      // const nextSymbolAfterPercent = this.displaySymbolIndex[displaySymbolIndex + 1];

      this.calculationSymbols = [];

      this.pushLeftSideOfOperator(partBeforeLastOperatorArray);
      this.calculationSymbols.push(stringLastOperator);

      if (stringLastOperator === '*') {

        this.calculationSymbols.push(stringLastNumberDigits);
        this.calculationSymbols.push('/100');

      } else if (stringLastOperator === '/') {

        this.calculationSymbols.push(stringLastNumberDigits);
        this.calculationSymbols.push('*100');

      }

      if (stringLastOperator === '+' || stringLastOperator === '-') {

        this.pushLeftSideOfOperator(partBeforeLastOperatorArray);
        this.calculationSymbols.push('*');
        this.calculationSymbols.push(stringLastNumberDigits);
        this.calculationSymbols.push('/100');
      }
      // console.log(nextSymbolAfterPercent);
      // console.log(this.calculationSymbols.join(''));

    },
    pushLeftSideOfOperator(part) {
      this.calculationSymbols.push('(');
      this.calculationSymbols.push(...part);
      this.calculationSymbols.push(')');
    },

    clickClearButton() {
      this.displaySymbols = [];
      this.calculationSymbols = [];
      this.mathExpression = '';
      this.calculationResult = '';
    },

    clickEquals() {
      const allowedCharacters = /[.0-9+\-*/()]/gs;

      // while (this.isOpeningBracketsMore(this.displaySymbols)) {
      //   this.balanceBrackets();
      //   console.log(this.displaySymbols);

      // }

      // this.addSymbolToCalculationSymbols(this.displaySymbols);
      // this.mathExpression = this.calculationSymbols.join('');

      const filteredValue = this.mathExpression
        .match(allowedCharacters)?.join('') || '';

      try {
        this.calculationResult = eval(filteredValue);
      } catch (error) {
        alert('Использован недопустимый формат')
      }
    },

    clickBackspaceButton() {
      this.displaySymbols.pop();
    },

    clickParentheses() {
      const lastExpressionSymbol = this.getLastExpressionSymbol(this.displaySymbols)
      if (
        !isNaN(lastExpressionSymbol) ||
        lastExpressionSymbol === ')' ||
        lastExpressionSymbol === '%'
      ) {
        this.balanceBrackets();
      } else if (lastExpressionSymbol === ',') {
        this.clickBackspaceButton();
        this.balanceBrackets();
      } else {
        this.displaySymbols.push('(')
      }
    },
    balanceBrackets() {
      if (this.isOpeningBracketsMore(this.displaySymbols)) {
        this.displaySymbols.push(')')
      } else {
        this.displaySymbols.push('×')
        this.displaySymbols.push('(')
      }
    },
    isOpeningBracketsMore(expression) {
      let openingCount = 0;
      let closingCount = 0;

      for (let char of expression) {
        if (char === '(') {
          openingCount++;
        } else if (char === ')') {
          closingCount++;
        }
      }

      return openingCount > closingCount;
    },
    getLastExpressionSymbol(array) {
      return array[array.length - 1]
    },

    isMathOperator(par) {
      if (par.search(/[+\-×÷%]/i) != -1) {
        return true
      } else {
        return false
      }
    },

    toggleSign() {
      const lastOperatorIndex = this.getLastOperatorIndex(this.displaySymbols);

      const partBeforeLastOperatorArray = this.displaySymbols.slice(0, lastOperatorIndex);
      const stringLastOperator = this.displaySymbols[lastOperatorIndex];
      const lastNumberDigitsArray = this.getLastNumberDigits(lastOperatorIndex, this.displaySymbols);

      this.displaySymbols = [];

      this.displaySymbols.push(...partBeforeLastOperatorArray);
      this.displaySymbols.push(stringLastOperator);
      this.displaySymbols.push('(');
      this.displaySymbols.push('-');
      this.displaySymbols.push(...lastNumberDigitsArray);

    },

    addSymbolToDisplaySymbols(symb) {
      const lastExpressionSymbol = this.getLastExpressionSymbol(this.displaySymbols);
      if (
        lastExpressionSymbol === ')' ||
        lastExpressionSymbol === '%'
      ) {
        this.displaySymbols.push('×')
      }
      this.displaySymbols.push(symb)
    },
    addOperator(op) {
      const lastExpressionSymbol = this.getLastExpressionSymbol(this.displaySymbols);

      if (
        lastExpressionSymbol === '÷' ||
        lastExpressionSymbol === '×' ||
        lastExpressionSymbol === '+' ||
        lastExpressionSymbol === '-'
      ) {
        this.clickBackspaceButton();
      }
      this.displaySymbols.push(op);
    },

    addSymbolToCalculationSymbols(displaySymbolsArray) {
      this.calculationResult = '';
      this.calculationSymbols = [];
      let lastOperatorIndex = null;

      displaySymbolsArray.forEach((element) => {

        switch (element) {

          case ',':
            this.calculationSymbols.push('.');
            break;

          case '×':
            this.calculationSymbols.push('*')
            break;

          case '÷':
            this.calculationSymbols.push('/')
            break;

          case '%':
            lastOperatorIndex = this.getLastOperatorIndex(this.calculationSymbols);
            this.handlePercent(this.calculationSymbols, lastOperatorIndex);
            break;

          default:
            this.calculationSymbols.push(element);
            break;

        }
      });
    },

  },
  watch: {
    displaySymbols: {
      handler(newValue) {
        this.addSymbolToCalculationSymbols(newValue);
        this.mathExpression = this.calculationSymbols.join('');
      },
      deep: 1
    }
  },
  mounted() {
    document.addEventListener('keydown', (e) => {

      if (e.key === 'Enter') {
        e.preventDefault(); // Останавливает отправку формы или вставку новой строки
        // console.log('Enter key pressed, but default action is prevented');
      }

      try {
        let btn = this.calcButtons.find(btn => btn.key === e.key);


        if (btn !== undefined && e.shiftKey && e.key === '*') {
          this.handleCalcBtnClick('×');
        } else if (btn !== undefined && e.shiftKey && e.key === '%') {
          this.handleCalcBtnClick('%');
        } else if (btn !== undefined) {
          this.handleCalcBtnClick(btn.buttonSymbol);
        } else if (e.key === 'Backspace') {
          this.handleCalcBtnClick('Backspace');
        } else if (e.key === '(' && e.shiftKey) {
          this.handleCalcBtnClick('(')
        } else if (e.key === ')' && e.shiftKey) {
          this.handleCalcBtnClick(')')
        }

      } catch (error) {
        console.log(`Error: `, error);
        alert('Использован недопустимый формат');
      }
    });
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
  position: relative;
}

.calc__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 15px;

  border-radius: 39px;
  background: linear-gradient(167deg, #F7F8FB -5.94%, rgba(247, 248, 251, 0.019) 103.62%);
  backdrop-filter: blur(51px);
  position: relative;
  z-index: 10;
}

.calc::after {
  content: '';
  width: var(--background-wrapper-size);
  height: var(--background-wrapper-size);
  border-radius: 50%;
  background: #109DFF;
  position: absolute;
  z-index: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.calc-btn__list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  justify-items: center;
}

.calc__display {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  min-height: 130px;
  padding: 15px;
  padding-top: 30px;
}

.calc__input {
  color: rgb(var(--symbol-input-color));
  font-size: var(--symbol-btn-font-size);
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  width: 100%;
  height: calc(var(--symbol-btn-font-size) * 1.2 * 3);
  // height: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: flex-end;
  text-align: right;

  padding: 5px;
  min-height: 40px;
}

.math-operator {
  color: rgb(var(--math-operator-color));
}

.calc__result {
  width: 100%;

  display: flex;
  justify-content: end;
  color: rgba(var(--symbol-input-color), 0.8);
  font-size: var(--symbol-result-font-size);
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}


.backspace {
  background-color: transparent;
  flex: 0 1
}

@media (max-width: 767.9px) {

  .calc::after {
    border-radius: 0px;
    display: none;
  }

  .calc {
    width: 100%;
    height: 100dvh;
    margin-top: 0;
  }

  .calc__wrapper {
    border-radius: 0;
    background: linear-gradient(180deg,
        #F7F8FB -5.94%,
        rgba(247, 248, 251, 0.90) 20%,
        rgba(247, 248, 251, 0.60) 30%,
        rgba(247, 248, 251, 0.20) 60%,
        rgba(247, 248, 251, 0.0) 100%);
  }
}
</style>