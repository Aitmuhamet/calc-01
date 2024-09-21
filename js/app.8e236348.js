(function(){"use strict";var __webpack_modules__={7478:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4114),core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__),_BaseButton_vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5585);__webpack_exports__.A={data(){return{displaySymbols:[],calculationSymbols:[],expressionString:"",calculationResult:"",buttons:[{id:1,buttonSymbol:"1",expressionSymbol:"1",keyCode:"Numpad1",key:"1",cssClasses:[],method:this.handleCalcBtnClick},{id:1,buttonSymbol:"2",expressionSymbol:"2",keyCode:"Numpad2",key:"2",cssClasses:[],method:this.handleCalcBtnClick},{id:1,buttonSymbol:"3",expressionSymbol:"3",keyCode:"Numpad3",key:"3",cssClasses:[],method:this.handleCalcBtnClick},{id:1,buttonSymbol:"4",expressionSymbol:"4",keyCode:"Numpad4",key:"4",cssClasses:[],method:this.handleCalcBtnClick},{id:1,buttonSymbol:"5",expressionSymbol:"5",keyCode:"Numpad5",key:"5",cssClasses:[],method:this.handleCalcBtnClick},{id:1,buttonSymbol:"6",expressionSymbol:"6",keyCode:"Numpad6",key:"6",cssClasses:[],method:this.handleCalcBtnClick},{id:1,buttonSymbol:"7",expressionSymbol:"7",keyCode:"Numpad7",key:"7",cssClasses:[],method:this.handleCalcBtnClick},{id:1,buttonSymbol:"8",expressionSymbol:"8",keyCode:"Numpad8",key:"8",cssClasses:[],method:this.handleCalcBtnClick},{id:1,buttonSymbol:"9",expressionSymbol:"9",keyCode:"Numpad9",key:"9",cssClasses:[],method:this.handleCalcBtnClick},{id:1,buttonSymbol:"±",expressionSymbol:"±",keyCode:"",key:"",cssClasses:[],method:this.handleCalcBtnClick},{id:1,buttonSymbol:"0",expressionSymbol:"0",keyCode:"Numpad0",key:"0",cssClasses:[],method:this.handleCalcBtnClick},{id:1,buttonSymbol:",",expressionSymbol:".",keyCode:"NumpadDecimal",key:"Decimal",cssClasses:[],method:this.handleCalcBtnClick},{id:1,buttonSymbol:"()",expressionSymbol:"()",keyCode:"",key:"",cssClasses:[],method:this.handleCalcBtnClick},{id:1,buttonSymbol:"%",expressionSymbol:"%",keyCode:"",key:"",cssClasses:[],method:this.handleCalcBtnClick},{id:1,buttonSymbol:"+",expressionSymbol:"+",keyCode:"NumpadAdd",key:"+",cssClasses:[],method:this.handleCalcBtnClick},{id:1,buttonSymbol:"-",expressionSymbol:"-",keyCode:"NumpadSubtract",key:"-",cssClasses:[],method:this.handleCalcBtnClick},{id:1,buttonSymbol:"×",expressionSymbol:"*",keyCode:"NumpadMultiply",key:"*",cssClasses:[],method:this.handleCalcBtnClick},{id:1,buttonSymbol:"÷",expressionSymbol:"/",keyCode:"NumpadDivide",key:"/",cssClasses:[],method:this.handleCalcBtnClick},{id:1,buttonSymbol:"C",expressionSymbol:"C",keyCode:"Escape",key:"Escape",cssClasses:[],method:this.handleCalcBtnClick},{id:1,buttonSymbol:"=",expressionSymbol:"=",keyCode:"NumpadEnter",key:"Enter",cssClasses:[],method:this.handleCalcBtnClick}]}},methods:{handleCalcBtnClick(e=""){switch(e){case"=":this.clickEquals();break;case"C":this.clickClearButton();break;case"()":this.clickParentheses();break;default:this.addSymbolToExpressionString(e);break}this.styleSpecificChars()},addSymbolToExpressionString(e=""){this.calculationResult="",""!==e&&this.displaySymbols.push(e),this.expressionString=this.displaySymbols.join("")},styleSpecificChars(){const e=this.expressionString.replace(/([+\-*/×÷%])/g,'<span class="calc__sign">$1</span>').replace(/([()])/g,'<span class="highlight-parenthesis">$1</span>');this.$refs.editableDiv.innerHTML=e},clickClearButton(){this.displaySymbols=[],this.expressionString="",this.calculationResult=""},clickBackspaceButton(){this.displaySymbols.pop(),this.expressionString=this.displaySymbols.join(""),this.handleCalcBtnClick()},clickParentheses(){!0===this.isLastElementOpenParenthesis()?(this.clickBackspaceButton(),this.addSymbolToExpressionString(")")):!1===this.isLastElementOpenParenthesis()?(this.clickBackspaceButton(),this.addSymbolToExpressionString("(")):this.addSymbolToExpressionString("(")},isLastElementOpenParenthesis(){return"("===this.displaySymbols[this.displaySymbols.length-1]||")"!==this.displaySymbols[this.displaySymbols.length-1]&&void 0},clickEquals(){this.calculationResult=eval(this.expressionString)}},mounted(){document.addEventListener("keydown",(e=>{let s=this.buttons.find((s=>s.key===e.key));e.shiftKey&&s?console.log(s.keyCode):s&&s.method(s.expressionSymbol)}))},components:{BaseButton:_BaseButton_vue__WEBPACK_IMPORTED_MODULE_1__.A}}},8705:function(e,s,t){var n=t(5130),o=t(6768);const i={class:"container column"};function l(e,s,t,n,l,a){const c=(0,o.g2)("TheHeading"),_=(0,o.g2)("AppDisplay");return(0,o.uX)(),(0,o.CE)("div",i,[(0,o.bF)(c),(0,o.bF)(_)])}function a(e,s,t,n,i,l){return(0,o.uX)(),(0,o.CE)("h1",null,"Freebie: Calculator App User Interface Design. 🚀")}var c={},_=t(1241);const r=(0,_.A)(c,[["render",a],["__scopeId","data-v-5e760d07"]]);var u=r,d=t(4232);const p={class:"circle"},b={class:"calc"},y={class:"calc__display"},h={ref:"editableDiv",class:"calc__input"},k={class:"calc__result"},m={class:"calc__numbers-list"};function C(e,s,t,n,i,l){const a=(0,o.g2)("base-button");return(0,o.uX)(),(0,o.CE)("div",p,[(0,o.Lk)("div",b,[(0,o.Lk)("div",y,[(0,o.Lk)("div",h,null,512),(0,o.Lk)("div",k,[(0,o.Lk)("span",null,(0,d.v_)(i.calculationResult),1)]),(0,o.Lk)("button",{class:"backspace",type:"button",onClick:s[0]||(s[0]=(...e)=>l.clickBackspaceButton&&l.clickBackspaceButton(...e))},"←")]),(0,o.Lk)("div",m,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.buttons,((e,s)=>((0,o.uX)(),(0,o.Wv)(a,{key:s,buttonSymbol:e.buttonSymbol,expressionSymbol:e.expressionSymbol,btnMethod:e.method},null,8,["buttonSymbol","expressionSymbol","btnMethod"])))),128))])])])}var S=t(7478);const f=(0,_.A)(S.A,[["render",C],["__scopeId","data-v-2eda1b3f"]]);var v=f,w={name:"App",components:{TheHeading:u,AppDisplay:v}};const x=(0,_.A)(w,[["render",l]]);var B=x;(0,n.Ef)(B).mount("#app")},5585:function(e,s,t){t.d(s,{A:function(){return _}});var n=t(6768);const o=["value"];function i(e,s,t,i,l,a){return(0,n.uX)(),(0,n.CE)("input",{type:"button",class:"btn",value:t.buttonSymbol,onClick:s[0]||(s[0]=e=>t.btnMethod(t.expressionSymbol))},null,8,o)}var l={props:{buttonSymbol:{type:String,required:!0},expressionSymbol:{type:String,required:!0},btnMethod:{type:Function,required:!0}}},a=t(1241);const c=(0,a.A)(l,[["render",i],["__scopeId","data-v-b0226f50"]]);var _=c}},__webpack_module_cache__={};function __webpack_require__(e){var s=__webpack_module_cache__[e];if(void 0!==s)return s.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(t.exports,t,t.exports,__webpack_require__),t.exports}__webpack_require__.m=__webpack_modules__,function(){var e=[];__webpack_require__.O=function(s,t,n,o){if(!t){var i=1/0;for(_=0;_<e.length;_++){t=e[_][0],n=e[_][1],o=e[_][2];for(var l=!0,a=0;a<t.length;a++)(!1&o||i>=o)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](t[a])}))?t.splice(a--,1):(l=!1,o<i&&(i=o));if(l){e.splice(_--,1);var c=n();void 0!==c&&(s=c)}}return s}o=o||0;for(var _=e.length;_>0&&e[_-1][2]>o;_--)e[_]=e[_-1];e[_]=[t,n,o]}}(),function(){__webpack_require__.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(s,{a:s}),s}}(),function(){__webpack_require__.d=function(e,s){for(var t in s)__webpack_require__.o(s,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){var e={524:0};__webpack_require__.O.j=function(s){return 0===e[s]};var s=function(s,t){var n,o,i=t[0],l=t[1],a=t[2],c=0;if(i.some((function(s){return 0!==e[s]}))){for(n in l)__webpack_require__.o(l,n)&&(__webpack_require__.m[n]=l[n]);if(a)var _=a(__webpack_require__)}for(s&&s(t);c<i.length;c++)o=i[c],__webpack_require__.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return __webpack_require__.O(_)},t=self["webpackChunkcalculator"]=self["webpackChunkcalculator"]||[];t.forEach(s.bind(null,0)),t.push=s.bind(null,t.push.bind(t))}();var __webpack_exports__=__webpack_require__.O(void 0,[504],(function(){return __webpack_require__(8705)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.8e236348.js.map