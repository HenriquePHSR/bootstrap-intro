/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script.js */ \"./src/script.js\");\n\n// const {Pessoa, numero} = require('./script');\n//import { Pessoa, concatenaEndereco as ce } from \"./script.js\";\n\n\nconst umaPessoa = new _script_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Thiago', 'Rocha', \n'Rua das Laranjeiras', \n'100', 'apto 103');\nconst outraPessoa = new _script_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Ricardo', 'Lima', \n  'Rua Cosme Velho', \n  '232', 'apto 401');\nconsole.log(umaPessoa.numero, umaPessoa.nome);\nconsole.log(outraPessoa.numero, outraPessoa.nome);\n\n_script_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contador = 10;\n// console.log(ce.get(umaPessoa)())\n\nconst maisUmaPessoa = new _script_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Roberto', 'Cruz',\n    'Rua Cosme Velho',\n    '524', 'apto 304');\nconsole.log(maisUmaPessoa.numero, maisUmaPessoa.nome);\n\n\n//# sourceURL=webpack://trab-01/./src/index.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Pessoa)\n/* harmony export */ });\nlet contador = 0;\r\nconst numero = new WeakMap();\r\nconst concatenaEndereco = new WeakMap();\r\n\r\n// uma por modulo\r\nclass Pessoa {\r\n   constructor (nome, sobrenome, logradouro, num, complemento) {\r\n      numero.set(this, ++contador);\r\n      this.nome = nome;\r\n      this.sobrenome = sobrenome;\r\n      this._endereco = {\r\n         logradouro: logradouro,\r\n         num: num,\r\n         complemento: complemento\r\n      };\r\n      \r\n      concatenaEndereco.set(this, () =>   \r\n         this._endereco.logradouro + ' ' +\r\n         this._endereco.num + ' ' +\r\n         this._endereco.complemento\r\n      );\r\n   }   \r\n   get endereco() {\r\n      const resposta = concatenaEndereco.get(this)();\r\n      return 'Endereço: ' + resposta;\r\n   }\r\n\r\n   get numero() {\r\n      return numero.get(this);\r\n   }\r\n\r\n   static set contador(cont) {\r\n      if(isNaN(cont) || cont < 0)\r\n         throw new Error(\r\n            'O valor de contador deve ser maior ou igual a zero.');\r\n      contador = cont;\r\n   }\r\n   static get contador() {\r\n      return contador;\r\n   }\r\n}\r\n\r\n// module.exports = {\r\n//     Pessoa,\r\n//     numero\r\n// }\n\n//# sourceURL=webpack://trab-01/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;