/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_side_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/side-bar */ \"./src/scripts/side-bar.js\");\n/* harmony import */ var _scripts_side_bar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_side_bar__WEBPACK_IMPORTED_MODULE_0__);\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canva = d3.select(\"#canva\");\n  const svg = canva.append(\"svg\");\n  svg.attr('width', 400).attr(\"height\", 400);\n  svg.append(\"circle\").attr(\"cx\", 50).attr(\"cy\", 50).attr(\"r\", 50);\n\n  // d3.select('.content-header').style(\"color\", \"blue\")\n\n  // fetch(`https://api.jikan.moe/v4/anime/1`)\n  //     .then(response => {\n  //         if (response.ok) {\n  //             return response.json();\n  //         } else {\n  //             throw new Error(response);\n  //         }\n  //     })\n  //     .then(data => {\n  //         console.log(data)\n  //     })\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXlDO0FBR3pDQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFFaEQsTUFBTUMsS0FBSyxHQUFHQyxFQUFFLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFDakMsTUFBTUMsR0FBRyxHQUFHSCxLQUFLLENBQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUM7RUFDL0JELEdBQUcsQ0FBQ0UsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQ0EsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7RUFDMUNGLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUNmQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUNkQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUNkQSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQzs7RUFHbEI7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUVKLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2lkZWJhciBmcm9tICcuL3NjcmlwdHMvc2lkZS1iYXInO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cbiAgICBjb25zdCBjYW52YSA9IGQzLnNlbGVjdChcIiNjYW52YVwiKVxuICAgIGNvbnN0IHN2ZyA9IGNhbnZhLmFwcGVuZChcInN2Z1wiKVxuICAgIHN2Zy5hdHRyKCd3aWR0aCcsIDQwMCkuYXR0cihcImhlaWdodFwiLCA0MDApXG4gICAgc3ZnLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgICAuYXR0cihcImN4XCIsIDUwKVxuICAgICAgICAuYXR0cihcImN5XCIsIDUwKVxuICAgICAgICAuYXR0cihcInJcIiwgNTApXG5cblxuICAgIC8vIGQzLnNlbGVjdCgnLmNvbnRlbnQtaGVhZGVyJykuc3R5bGUoXCJjb2xvclwiLCBcImJsdWVcIilcblxuICAgIC8vIGZldGNoKGBodHRwczovL2FwaS5qaWthbi5tb2UvdjQvYW5pbWUvMWApXG4gICAgLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAvLyAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZSk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIC50aGVuKGRhdGEgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAvLyAgICAgfSlcblxufSkiXSwibmFtZXMiOlsiU2lkZWJhciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhIiwiZDMiLCJzZWxlY3QiLCJzdmciLCJhcHBlbmQiLCJhdHRyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/side-bar.js":
/*!*********************************!*\
  !*** ./src/scripts/side-bar.js ***!
  \*********************************/
/***/ (function() {

eval("const sidebarInfo = document.querySelector('.anime-info');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zaWRlLWJhci5qcy5qcyIsIm5hbWVzIjpbInNpZGViYXJJbmZvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvc2lkZS1iYXIuanM/MzBlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaWRlYmFySW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmltZS1pbmZvJylcblxuIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./src/scripts/side-bar.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;