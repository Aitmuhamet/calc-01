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
<!-- 
        <div class="calc__result">
          <span>{{ displaySymbols }}</span>
        </div> -->

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
          :expressionSymbol="btn.expressionSymbol"
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
          expressionSymbol: 'C',
          keyCode: 'Escape',
          key: 'Escape',
          handleBtnClick: this.clickClearButton
        },
        {
          id: 'ut-002',
          buttonSymbol: '()',
          expressionSymbol: '()',
          keyCode: '',
          key: '',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'ut-003',
          buttonSymbol: '%',
          expressionSymbol: '%',
          keyCode: '',
          key: '',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'op-004',
          buttonSymbol: '÷',
          expressionSymbol: '/',
          keyCode: 'NumpadDivide',
          key: '/',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'num-001',
          buttonSymbol: '1',
          expressionSymbol: '1',
          keyCode: 'Numpad1',
          key: '1',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'num-002',
          buttonSymbol: '2',
          expressionSymbol: '2',
          keyCode: 'Numpad2',
          key: '2',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'num-003',
          buttonSymbol: '3',
          expressionSymbol: '3',
          keyCode: 'Numpad3',
          key: '3',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'op-003',
          buttonSymbol: '×',
          expressionSymbol: '*',
          keyCode: 'NumpadMultiply',
          key: '*',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'num-004',
          buttonSymbol: '4',
          expressionSymbol: '4',
          keyCode: 'Numpad4',
          key: '4',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'num-005',
          buttonSymbol: '5',
          expressionSymbol: '5',
          keyCode: 'Numpad5',
          key: '5',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'num-006',
          buttonSymbol: '6',
          expressionSymbol: '6',
          keyCode: 'Numpad6',
          key: '6',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'op-002',
          buttonSymbol: '-',
          expressionSymbol: '-',
          keyCode: 'NumpadSubtract',
          key: '-',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'num-007',
          buttonSymbol: '7',
          expressionSymbol: '7',
          keyCode: 'Numpad7',
          key: '7',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'num-008',
          buttonSymbol: '8',
          expressionSymbol: '8',
          keyCode: 'Numpad8',
          key: '8',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'num-009',
          buttonSymbol: '9',
          expressionSymbol: '9',
          keyCode: 'Numpad9',
          key: '9',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'op-001',
          buttonSymbol: '+',
          expressionSymbol: '+',
          keyCode: 'NumpadAdd',
          key: '+',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: '011',
          buttonSymbol: '±',
          expressionSymbol: '±',
          keyCode: '',
          key: '',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'num-010',
          buttonSymbol: '0',
          expressionSymbol: '0',
          keyCode: 'Numpad0',
          key: '0',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: '012',
          buttonSymbol: ',',
          expressionSymbol: '.',
          keyCode: 'NumpadDecimal',
          key: '.',
          handleBtnClick: this.handleCalcBtnClick
        },
        {
          id: 'op-005',
          buttonSymbol: '=',
          expressionSymbol: '=',
          keyCode: 'NumpadEnter',
          key: 'Enter',
          handleBtnClick: this.handleCalcBtnClick
        },
      ],
    }
  },
  methods: {
    handleCalcBtnClick(symb) {
      // console.log(`handleCalcBtnClick: ${symb}`);

      switch (symb) {
        case '±':
          this.clickParentheses();
          break;

        case '()':
          this.clickParentheses();
          break;

        case '%':
          this.clickParentheses();
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
          this.displaySymbols.push(symb);
          break;
      }

    },

    addSymbolToCalculationSymbols(array) {
      this.calculationResult = '';
      this.calculationSymbols = [];
      array.forEach(element => {

        switch (element) {

          case ',':
            this.calculationSymbols.push('.');
            break;

          case '×':
            this.calculationSymbols.push('*');
            break;

          case '÷':
            this.calculationSymbols.push('/');
            break;

          default:
            this.calculationSymbols.push(element);
            break;

        }
      });
    },

    clickClearButton() {
      this.displaySymbols = [];
      this.calculationSymbols = [];
      this.mathExpression = '';
      this.calculationResult = '';
    },

    clickEquals() {
      const allowedCharacters = /[.0-9+\-*/()]/gs;
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
      const lastExpressionSymbol = this.getLastExpressionSymbol()
      if (!isNaN(lastExpressionSymbol)) {
        this.displaySymbols.push('×');
        this.displaySymbols.push('(');
      } else if (lastExpressionSymbol === '(') {
        this.clickBackspaceButton();
        this.clickBackspaceButton();
        this.displaySymbols.push(')')
      } else if (lastExpressionSymbol === ')' || lastExpressionSymbol === ',') {
        this.clickBackspaceButton();
        this.displaySymbols.push('×')
        this.displaySymbols.push('(')
      } else {
        this.displaySymbols.push('(')
      }
    },
    getLastExpressionSymbol() {
      return this.displaySymbols[this.displaySymbols.length - 1]
    },
    isLastElementOpenParenthesis() {
      if (this.displaySymbols[this.displaySymbols.length - 1] === '(') {
        return true
      } else if (this.displaySymbols[this.displaySymbols.length - 1] === ')') {
        return false;
      }
    },

    isMathOperator(par) {
      if (par.search(/[+\-×÷,]/i) != -1) {
        return true
      } else {
        return false
      }
    },

    handleKeyPress(event, btn) {
      if (event.shiftKey && btn) {
        // console.log('handleKeyPress: shiftKey +', btn.keyCode);
        // btn.handleBtnClick(btn.keyCode)
      } else if (btn) {
        // console.log(`handleCalcBtnClick(${btn.buttonSymbol})`);
        this.handleCalcBtnClick(btn.buttonSymbol)
      }
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
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  gap: 8px 16px;
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