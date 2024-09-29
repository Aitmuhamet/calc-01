(function(){"use strict";var __webpack_modules__={7478:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4114),core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__),_BaseButton_vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9564);__webpack_exports__.A={data(){return{displaySymbols:[],calculationSymbols:[],mathExpression:"",calculationResult:"",calcButtons:[{id:"ut-001",buttonSymbol:"C",expressionSymbol:"C",keyCode:"Escape",key:"Escape",handleBtnClick:this.clickClearButton},{id:"ut-002",buttonSymbol:"()",expressionSymbol:"()",keyCode:"",key:"",handleBtnClick:this.handleCalcBtnClick},{id:"ut-003",buttonSymbol:"%",expressionSymbol:"%",keyCode:"",key:"%",handleBtnClick:this.handleCalcBtnClick},{id:"op-004",buttonSymbol:"÷",expressionSymbol:"/",keyCode:"NumpadDivide",key:"/",handleBtnClick:this.handleCalcBtnClick},{id:"num-007",buttonSymbol:"7",expressionSymbol:"7",keyCode:"Numpad7",key:"7",handleBtnClick:this.handleCalcBtnClick},{id:"num-008",buttonSymbol:"8",expressionSymbol:"8",keyCode:"Numpad8",key:"8",handleBtnClick:this.handleCalcBtnClick},{id:"num-009",buttonSymbol:"9",expressionSymbol:"9",keyCode:"Numpad9",key:"9",handleBtnClick:this.handleCalcBtnClick},{id:"op-003",buttonSymbol:"×",expressionSymbol:"*",keyCode:"NumpadMultiply",key:"*",handleBtnClick:this.handleCalcBtnClick},{id:"num-004",buttonSymbol:"4",expressionSymbol:"4",keyCode:"Numpad4",key:"4",handleBtnClick:this.handleCalcBtnClick},{id:"num-005",buttonSymbol:"5",expressionSymbol:"5",keyCode:"Numpad5",key:"5",handleBtnClick:this.handleCalcBtnClick},{id:"num-006",buttonSymbol:"6",expressionSymbol:"6",keyCode:"Numpad6",key:"6",handleBtnClick:this.handleCalcBtnClick},{id:"op-002",buttonSymbol:"-",expressionSymbol:"-",keyCode:"NumpadSubtract",key:"-",handleBtnClick:this.handleCalcBtnClick},{id:"num-001",buttonSymbol:"1",expressionSymbol:"1",keyCode:"Numpad1",key:"1",handleBtnClick:this.handleCalcBtnClick},{id:"num-002",buttonSymbol:"2",expressionSymbol:"2",keyCode:"Numpad2",key:"2",handleBtnClick:this.handleCalcBtnClick},{id:"num-003",buttonSymbol:"3",expressionSymbol:"3",keyCode:"Numpad3",key:"3",handleBtnClick:this.handleCalcBtnClick},{id:"op-001",buttonSymbol:"+",expressionSymbol:"+",keyCode:"NumpadAdd",key:"+",handleBtnClick:this.handleCalcBtnClick},{id:"011",buttonSymbol:"±",expressionSymbol:"±",keyCode:"",key:"",handleBtnClick:this.handleCalcBtnClick},{id:"num-010",buttonSymbol:"0",expressionSymbol:"0",keyCode:"Numpad0",key:"0",handleBtnClick:this.handleCalcBtnClick},{id:"012",buttonSymbol:",",expressionSymbol:".",keyCode:"NumpadDecimal",key:".",handleBtnClick:this.handleCalcBtnClick},{id:"op-005",buttonSymbol:"=",expressionSymbol:"=",keyCode:"NumpadEnter",key:"Enter",handleBtnClick:this.handleCalcBtnClick}]}},methods:{handleCalcBtnClick(e){switch(e){case"±":this.toggleSign();break;case"()":this.clickParentheses();break;case"÷":case"×":case"+":case"-":this.addOperator(e);break;case"C":this.clickClearButton();break;case"Backspace":this.clickBackspaceButton();break;case"=":this.clickEquals();break;default:this.addSymbolToDisplaySymbols(e);break}},getLastOperatorIndex(e){for(let t=e.length-1;t>=0;t--){const l=e[t];if(isNaN(l))return t}},getLastNumberDigits(e,t){let l=t.slice(e+1);return l},handlePercent(e,t){const l=e.slice(0,t),s=e[t],a=this.getLastNumberDigits(t,e).join("");this.calculationSymbols=[],this.pushLeftSideOfOperator(l),this.calculationSymbols.push(s),"*"===s?(this.calculationSymbols.push(a),this.calculationSymbols.push("/100")):"/"===s?(this.calculationSymbols.push(a),this.calculationSymbols.push("*100")):"+"!==s&&"-"!==s||(this.pushLeftSideOfOperator(l),this.calculationSymbols.push("*"),this.calculationSymbols.push(a),this.calculationSymbols.push("/100"))},pushLeftSideOfOperator(e){this.calculationSymbols.push("("),this.calculationSymbols.push(...e),this.calculationSymbols.push(")")},clickClearButton(){this.displaySymbols=[],this.calculationSymbols=[],this.mathExpression="",this.calculationResult=""},clickEquals(){const allowedCharacters=/[.0-9+\-*/()]/gs,filteredValue=this.mathExpression.match(allowedCharacters)?.join("")||"";try{this.calculationResult=eval(filteredValue)}catch(error){alert("Использован недопустимый формат")}},clickBackspaceButton(){this.displaySymbols.pop()},clickParentheses(){const e=this.getLastExpressionSymbol(this.displaySymbols);isNaN(e)&&")"!==e&&"%"!==e?","===e?(this.clickBackspaceButton(),this.balanceBrackets()):this.displaySymbols.push("("):this.balanceBrackets()},balanceBrackets(){this.isOpeningBracketsMore(this.displaySymbols)?this.displaySymbols.push(")"):(this.displaySymbols.push("×"),this.displaySymbols.push("("))},isOpeningBracketsMore(e){let t=0,l=0;for(let s of e)"("===s?t++:")"===s&&l++;return t>l},getLastExpressionSymbol(e){return e[e.length-1]},isMathOperator(e){return-1!=e.search(/[+\-×÷%]/i)},toggleSign(){const e=this.getLastOperatorIndex(this.displaySymbols),t=this.displaySymbols.slice(0,e),l=this.displaySymbols[e],s=this.getLastNumberDigits(e,this.displaySymbols);this.displaySymbols=[],this.displaySymbols.push(...t),this.displaySymbols.push(l),this.displaySymbols.push("("),this.displaySymbols.push("-"),this.displaySymbols.push(...s)},addSymbolToDisplaySymbols(e){")"===this.getLastExpressionSymbol(this.displaySymbols)&&this.displaySymbols.push("×"),this.displaySymbols.push(e)},addOperator(e){const t=this.getLastExpressionSymbol(this.displaySymbols);"÷"!==t&&"×"!==t&&"+"!==t&&"-"!==t||this.clickBackspaceButton(),this.displaySymbols.push(e)},addSymbolToCalculationSymbols(e){this.calculationResult="",this.calculationSymbols=[];let t=null;e.forEach((e=>{switch(e){case",":this.calculationSymbols.push(".");break;case"×":this.calculationSymbols.push("*");break;case"÷":this.calculationSymbols.push("/");break;case"%":t=this.getLastOperatorIndex(this.calculationSymbols),this.handlePercent(this.calculationSymbols,t);break;default:this.calculationSymbols.push(e);break}}))}},watch:{displaySymbols:{handler(e){this.addSymbolToCalculationSymbols(e),this.mathExpression=this.calculationSymbols.join("")},deep:1}},mounted(){document.addEventListener("keydown",(e=>{"Enter"===e.key&&e.preventDefault();try{let t=this.calcButtons.find((t=>t.key===e.key));void 0!==t&&e.shiftKey&&"*"===e.key?this.handleCalcBtnClick("×"):void 0!==t&&e.shiftKey&&"%"===e.key?this.handleCalcBtnClick("%"):void 0!==t?this.handleCalcBtnClick(t.buttonSymbol):"Backspace"===e.key?this.handleCalcBtnClick("Backspace"):"("===e.key&&e.shiftKey?this.handleCalcBtnClick("("):")"===e.key&&e.shiftKey&&this.handleCalcBtnClick(")")}catch(t){console.log("Error: ",t),alert("Использован недопустимый формат")}}))},components:{BaseButton:_BaseButton_vue__WEBPACK_IMPORTED_MODULE_1__.A}}},4803:function(e,t,l){var s=l(3751),a=l(641);const i={class:"container column"};function n(e,t,l,s,n,o){const c=(0,a.g2)("TheHeading"),r=(0,a.g2)("AppDisplay");return(0,a.uX)(),(0,a.CE)("div",i,[(0,a.bF)(c),(0,a.bF)(r)])}function o(e,t,l,s,i,n){return(0,a.uX)(),(0,a.CE)("h1",null,"Freebie: Calculator App User Interface Design. 🚀")}var c={},r=l(6262);const u=(0,r.A)(c,[["render",o],["__scopeId","data-v-5e760d07"]]);var _=u,h=l(33);const p={class:"circle"},d={class:"calc"},b={class:"calc__display"},y={class:"calc__input"},k={class:"calc__result"},m={class:"calc-btn__list"};function C(e,t,l,s,i,n){const o=(0,a.g2)("base-button");return(0,a.uX)(),(0,a.CE)("div",p,[(0,a.Lk)("div",d,[(0,a.Lk)("div",b,[(0,a.Lk)("div",y,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.displaySymbols,(e=>((0,a.uX)(),(0,a.CE)("span",{key:e.id,class:(0,h.C4)({"math-operator":n.isMathOperator(e)})},(0,h.v_)(e),3)))),128))]),(0,a.Lk)("div",k,[(0,a.Lk)("span",null,(0,h.v_)(i.calculationResult),1)]),(0,a.Lk)("button",{class:"backspace",type:"button",onClick:t[0]||(t[0]=(...e)=>n.clickBackspaceButton&&n.clickBackspaceButton(...e))},"←")]),(0,a.Lk)("div",m,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.calcButtons,((e,t)=>((0,a.uX)(),(0,a.Wv)(o,{key:t,buttonSymbol:e.buttonSymbol,expressionSymbol:e.expressionSymbol,onBtnClick:this.handleCalcBtnClick},null,8,["buttonSymbol","expressionSymbol","onBtnClick"])))),128))])])])}var S=l(7478);const B=(0,r.A)(S.A,[["render",C],["__scopeId","data-v-8defa88e"]]);var f=B,w={name:"App",components:{TheHeading:_,AppDisplay:f}};const v=(0,r.A)(w,[["render",n]]);var x=v;(0,s.Ef)(x).mount("#app")},9564:function(e,t,l){l.d(t,{A:function(){return r}});var s=l(641);const a=["value"];function i(e,t,l,i,n,o){return(0,s.uX)(),(0,s.CE)("input",{type:"button",class:"btn",value:l.buttonSymbol,onClick:t[0]||(t[0]=e=>o.btnClick())},null,8,a)}var n={emits:{"btn-click"(e){return!!e||(console.warn("Нет параметра id для emit read-news"),!1)}},props:{buttonSymbol:{type:String,required:!0},expressionSymbol:{type:String,required:!0}},methods:{btnClick(){this.$emit("btn-click",this.buttonSymbol)}}},o=l(6262);const c=(0,o.A)(n,[["render",i],["__scopeId","data-v-749db005"]]);var r=c}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var l=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(l.exports,l,l.exports,__webpack_require__),l.exports}__webpack_require__.m=__webpack_modules__,function(){var e=[];__webpack_require__.O=function(t,l,s,a){if(!l){var i=1/0;for(r=0;r<e.length;r++){l=e[r][0],s=e[r][1],a=e[r][2];for(var n=!0,o=0;o<l.length;o++)(!1&a||i>=a)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](l[o])}))?l.splice(o--,1):(n=!1,a<i&&(i=a));if(n){e.splice(r--,1);var c=s();void 0!==c&&(t=c)}}return t}a=a||0;for(var r=e.length;r>0&&e[r-1][2]>a;r--)e[r]=e[r-1];e[r]=[l,s,a]}}(),function(){__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(t,{a:t}),t}}(),function(){__webpack_require__.d=function(e,t){for(var l in t)__webpack_require__.o(t,l)&&!__webpack_require__.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};__webpack_require__.O.j=function(t){return 0===e[t]};var t=function(t,l){var s,a,i=l[0],n=l[1],o=l[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(s in n)__webpack_require__.o(n,s)&&(__webpack_require__.m[s]=n[s]);if(o)var r=o(__webpack_require__)}for(t&&t(l);c<i.length;c++)a=i[c],__webpack_require__.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return __webpack_require__.O(r)},l=self["webpackChunkcalculator"]=self["webpackChunkcalculator"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var __webpack_exports__=__webpack_require__.O(void 0,[504],(function(){return __webpack_require__(4803)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.498bba2e.js.map