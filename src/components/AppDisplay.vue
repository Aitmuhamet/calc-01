<template>
  <div class="circle">
    <div class="calc">
      <div class="calc__display">
        <div
          ref="editableDiv"
          class="calc__input"
        >
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

      <div class="calc__numbers-list">
        <base-button
          v-for="(btn, index) in buttons"
          :key="index"
          :buttonSymbol="btn.buttonSymbol"
          :expressionSymbol="btn.expressionSymbol"
          :btnMethod="btn.method"
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
      expressionString: '',
      calculationResult: '',
      buttons: [
        {
          id: 1,
          buttonSymbol: '1',
          expressionSymbol: '1',
          keyCode: 'Numpad1',
          key: '1',
          cssClasses: [],
          method: this.handleCalcBtnClick
        },
        {
          id: 1,
          buttonSymbol: '2',
          expressionSymbol: '2',
          keyCode: 'Numpad2',
          key: '2',
          cssClasses: [],
          method: this.handleCalcBtnClick
        },
        {
          id: 1,
          buttonSymbol: '3',
          expressionSymbol: '3',
          keyCode: 'Numpad3',
          key: '3',
          cssClasses: [],
          method: this.handleCalcBtnClick
        },
        {
          id: 1,
          buttonSymbol: '4',
          expressionSymbol: '4',
          keyCode: 'Numpad4',
          key: '4',
          cssClasses: [],
          method: this.handleCalcBtnClick
        },
        {
          id: 1,
          buttonSymbol: '5',
          expressionSymbol: '5',
          keyCode: 'Numpad5',
          key: '5',
          cssClasses: [],
          method: this.handleCalcBtnClick
        },
        {
          id: 1,
          buttonSymbol: '6',
          expressionSymbol: '6',
          keyCode: 'Numpad6',
          key: '6',
          cssClasses: [],
          method: this.handleCalcBtnClick
        },
        {
          id: 1,
          buttonSymbol: '7',
          expressionSymbol: '7',
          keyCode: 'Numpad7',
          key: '7',
          cssClasses: [],
          method: this.handleCalcBtnClick
        },
        {
          id: 1,
          buttonSymbol: '8',
          expressionSymbol: '8',
          keyCode: 'Numpad8',
          key: '8',
          cssClasses: [],
          method: this.handleCalcBtnClick
        },
        {
          id: 1,
          buttonSymbol: '9',
          expressionSymbol: '9',
          keyCode: 'Numpad9',
          key: '9',
          cssClasses: [],
          method: this.handleCalcBtnClick
        },
        {
          id: 1,
          buttonSymbol: '±',
          expressionSymbol: '±',
          keyCode: '',
          key: '',
          cssClasses: [],
          method: this.handleCalcBtnClick
        },
        {
          id: 1,
          buttonSymbol: '0',
          expressionSymbol: '0',
          keyCode: 'Numpad0',
          key: '0',
          cssClasses: [],
          method: this.handleCalcBtnClick
        },
        {
          id: 1,
          buttonSymbol: ',',
          expressionSymbol: '.',
          keyCode: 'NumpadDecimal',
          key: 'Decimal',
          cssClasses: [],
          method: this.handleCalcBtnClick
        },
        {
          id: 1,
          buttonSymbol: '()',
          expressionSymbol: '()',
          keyCode: '',
          key: '',
          cssClasses: [],
          method: this.handleCalcBtnClick
        },
        {
          id: 1,
          buttonSymbol: '%',
          expressionSymbol: '%',
          keyCode: '',
          key: '',
          cssClasses: [],
          method: this.handleCalcBtnClick
        },
        {
          id: 1,
          buttonSymbol: '+',
          expressionSymbol: '+',
          keyCode: 'NumpadAdd',
          key: '+',
          cssClasses: [],
          method: this.handleCalcBtnClick
        },
        {
          id: 1,
          buttonSymbol: '-',
          expressionSymbol: '-',
          keyCode: 'NumpadSubtract',
          key: '-',
          cssClasses: [],
          method: this.handleCalcBtnClick
        },
        {
          id: 1,
          buttonSymbol: '×',
          expressionSymbol: '*',
          keyCode: 'NumpadMultiply',
          key: '*',
          cssClasses: [],
          method: this.handleCalcBtnClick
        },
        {
          id: 1,
          buttonSymbol: '÷',
          expressionSymbol: '/',
          keyCode: 'NumpadDivide',
          key: '/',
          cssClasses: [],
          method: this.handleCalcBtnClick
        },
        {
          id: 1,
          buttonSymbol: 'C',
          expressionSymbol: 'C',
          keyCode: 'Escape',
          key: 'Escape',
          cssClasses: [],
          method: this.handleCalcBtnClick
        },
        {
          id: 1,
          buttonSymbol: '=',
          expressionSymbol: '=',
          keyCode: 'NumpadEnter',
          key: 'Enter',
          cssClasses: [],
          method: this.handleCalcBtnClick
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

        case 'C':
          this.clickClearButton();
          break;

        case '()':
          this.clickParentheses();
          break;

        default:
          this.addSymbolToExpressionString(symb);
          break;
      }

      this.styleSpecificChars();
    },

    addSymbolToExpressionString(symbol = '') {
      this.calculationResult = '';
      if (symbol !== '') this.displaySymbols.push(symbol);
      this.expressionString = this.displaySymbols.join('');
    },

    styleSpecificChars() {
      const result = this.expressionString
        .replace(/([+\-*/×÷%])/g, '<span class="calc__sign">$1</span>')
        .replace(/([()])/g, '<span class="highlight-parenthesis">$1</span>');

      this.$refs.editableDiv.innerHTML = result;
    },


    // restrictInput(event) {
    //   const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '(', ')', '+', '-', '*', '/', 'Backspace', 'Enter'];
    //   if (!allowedKeys.includes(event.key)) {
    //     event.preventDefault();
    //     console.log('after preventDefault');
    //   } else {
    //     // this.displaySymbols.push(event.key)
    //     // this.expressionString = this.displaySymbols.join('')
    //   }

    // },
    // updateExpressionString() {
    //   const allowedCharacters = /[0-9()+\-*/]/g;

    //   let currentValue = this.$refs.editableDiv.innerHTML;

    //   // Фильтрация введённого текста, оставляя только допустимые символы
    //   const filteredValue = currentValue.match(allowedCharacters)?.join('') || '';

    //   // Обновление содержимого editableDiv и переменной expressionString
    //   this.$refs.editableDiv.innerHTML = filteredValue;
    //   this.expressionString = filteredValue;
    //   console.log(this.expressionString);

    // },

    clickClearButton() {
      this.displaySymbols = [];
      this.expressionString = '';
      this.calculationResult = '';
    },

    clickBackspaceButton() {
      this.displaySymbols.pop();
      this.expressionString = this.displaySymbols.join('');
      this.handleCalcBtnClick()
    },

    clickParentheses() {
      if (this.isLastElementOpenParenthesis() === true) {
        this.clickBackspaceButton();
        this.addSymbolToExpressionString(')');
      } else if (this.isLastElementOpenParenthesis() === false) {
        this.clickBackspaceButton();
        this.addSymbolToExpressionString('(');
      } else {
        this.addSymbolToExpressionString('(');
      }
    },

    isLastElementOpenParenthesis() {
      if (this.displaySymbols[this.displaySymbols.length - 1] === '(') {
        return true
      } else if (this.displaySymbols[this.displaySymbols.length - 1] === ')') {
        return false;
      }
    },

    clickEquals() {
      this.calculationResult = eval(this.expressionString);
    },
  },
  mounted() {
    document.addEventListener('keydown', (e) => {

      let btn = this.buttons.find(btn => btn.key === e.key);
      if (e.shiftKey && btn) {
        console.log(btn.keyCode);
        // btn.method(btn.keyCode)
      } else if (btn) {
        btn.method(btn.expressionSymbol)
      }
      
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

.calc__numbers-list {
  width: 100%;
  padding: 0 15px;

  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
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