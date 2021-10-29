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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --alpha: 0;\\r\\n  --midnightBlue: #00478f;\\r\\n  --redORange: #ff5d00;\\r\\n  --ebony: #2a231f;\\r\\n  --mistyBlue: #d8e1e7;\\r\\n}\\r\\n\\r\\n/* -------------------------- */\\r\\n/* ----------reset---------- */\\r\\n/* ------------------------- */\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  min-height: 100vh;\\r\\n  line-height: 1.5;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\ninput,\\r\\nbutton,\\r\\ntextarea,\\r\\nselect {\\r\\n  font: inherit;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  max-width: 100%;\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n/* -------------------------- */\\r\\n/* ----------global---------- */\\r\\n/* ------------------------- */\\r\\n\\r\\nbody {\\r\\n  background: var(--midnightBlue);\\r\\n  font-family: 'Source Sans Pro', sans-serif;\\r\\n  color: var(--redORange);\\r\\n}\\r\\n\\r\\n.container {\\r\\n  width: min(90%, 1000px);\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\nsection {\\r\\n  padding: 2rem 0;\\r\\n}\\r\\n\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4 {\\r\\n  text-align: center;\\r\\n  text-transform: capitalize;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  font-size: 2rem;\\r\\n  letter-spacing: 5px;\\r\\n}\\r\\n\\r\\nh3 {\\r\\n  font-size: 1.75rem;\\r\\n  letter-spacing: 2px;\\r\\n  grid-column: 1/-1;\\r\\n  grid-row: 1;\\r\\n}\\r\\n\\r\\np {\\r\\n  font-size: 1.75rem;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n/* -------------------------- */\\r\\n/* ----------grouped elements---------- */\\r\\n/* ------------------------- */\\r\\nheader,\\r\\nnav,\\r\\n.menu-section {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n/* -------------------------- */\\r\\n/* ----------header---------- */\\r\\n/* ------------------------- */\\r\\nheader {\\r\\n  padding: 1.5rem 0;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  gap: 1rem;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  letter-spacing: 2px;\\r\\n}\\r\\n\\r\\nnav ul {\\r\\n  display: flex;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\nnav ul li {\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\nnav ul li a {\\r\\n  padding: 0.25rem 1.25rem;\\r\\n  border-radius: 5px;\\r\\n  color: inherit;\\r\\n  text-transform: capitalize;\\r\\n  transition: all 500ms ease;\\r\\n}\\r\\n\\r\\nnav ul li a:hover {\\r\\n  background: var(--mistyBlue);\\r\\n  color: var(--ebony);\\r\\n}\\r\\n\\r\\n@media (min-width: 700px) {\\r\\n  header {\\r\\n    flex-direction: row;\\r\\n  }\\r\\n}\\r\\n/* -------------------------- */\\r\\n/* ----------home section---------- */\\r\\n/* ------------------------- */\\r\\n.home-section {\\r\\n  background: var(--mistyBlue);\\r\\n}\\r\\n\\r\\n.image-box {\\r\\n  max-width: 37.5rem;\\r\\n  margin-bottom: 1.5rem;\\r\\n}\\r\\n\\r\\n.image-box img {\\r\\n  --borderStyle: 1px solid rgba(0, 0, 0, 0.5);\\r\\n  border-top: var(--borderStyle);\\r\\n  border-left: var(--borderStyle);\\r\\n  box-shadow: 10px 10px 5px var(--ebony);\\r\\n}\\r\\n\\r\\n.home-section p {\\r\\n  font-weight: bold;\\r\\n  color: var(--ebony);\\r\\n}\\r\\n\\r\\n/* -------------------------- */\\r\\n/* ----------menu section---------- */\\r\\n/* ------------------------- */\\r\\n.menu-section {\\r\\n  flex-direction: column;\\r\\n\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.menu-container {\\r\\n  display: grid;\\r\\n  justify-content: center;\\r\\n  grid-template-columns: repeat(auto-fill, 300px);\\r\\n  gap: 2em;\\r\\n  margin-bottom: 1.5rem;\\r\\n}\\r\\n\\r\\n.menu-card {\\r\\n  padding: 1rem;\\r\\n  border: 1px solid var(--redORange);\\r\\n  border-radius: 10px;\\r\\n  background: hsla(0, 0%, 100%, 0.2);\\r\\n  color: var(--ebony);\\r\\n  transition: all 400ms ease;\\r\\n}\\r\\n\\r\\n.menu-card:hover {\\r\\n  background: hsla(0, 0%, 100%, 0.5);\\r\\n  transform: scale(1.05);\\r\\n}\\r\\n\\r\\n.menu-card h4 {\\r\\n  font-size: 1.5rem;\\r\\n  margin-bottom: 0.75rem;\\r\\n}\\r\\n\\r\\n.menu-card p {\\r\\n  font-size: 1.25rem;\\r\\n}\\r\\n\\r\\n.menu-card img {\\r\\n  border-radius: 50%;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n/* -------------------------- */\\r\\n/* ----------contact section---------- */\\r\\n/* ------------------------- */\\r\\n.contact-section {\\r\\n  background: var(--mistyBlue);\\r\\n}\\r\\n\\r\\n.contact-section h2 {\\r\\n  color: var(--ebony);\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.contact-section p {\\r\\n  font-size: 1.5rem;\\r\\n  font-weight: bold;\\r\\n  margin-bottom: 0.5rem;\\r\\n}\\r\\n\\r\\n.contact-section img {\\r\\n  max-width: 400px;\\r\\n  margin: 0 auto;\\r\\n  box-shadow: 15px 15px 50px var(--ebony);\\r\\n}\\r\\n/* -------------------------- */\\r\\n/* ----------footer section---------- */\\r\\n/* ------------------------- */\\r\\n.footer-section {\\r\\n  padding: 0.75rem;\\r\\n}\\r\\n\\r\\n.footer-section p {\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.footer-section a {\\r\\n  padding: 0;\\r\\n  margin-left: 0.5rem;\\r\\n  color: inherit;\\r\\n  transition: all 300ms ease;\\r\\n}\\r\\n\\r\\n.footer-section a:hover {\\r\\n  color: var(--mistyBlue);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContactSection\": () => (/* binding */ createContactSection)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n\r\n\r\nconst imageLink = 'https://source.unsplash.com/daily?food'\r\n\r\nconst createContactSection = () => {\r\n  const contactSection = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('section')\r\n  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addId)(contactSection, 'contact us')\r\n  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(contactSection, 'contact-section')\r\n\r\n  const contactTitle = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('h2')\r\n  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addTextContent)(contactTitle, 'contact us')\r\n\r\n  const contactDiv = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('div')\r\n  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(contactDiv, 'container')\r\n\r\n  const address = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('p')\r\n  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addTextContent)(address, '123 Fake Street, XYZ City')\r\n\r\n  const phoneNumber = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('p')\r\n  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addTextContent)(phoneNumber, '123-456-7890')\r\n\r\n  const image = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('img')\r\n  image.src = imageLink\r\n  image.alt = 'Map of the resturant'\r\n\r\n  const contactDivLists = [address, phoneNumber, image]\r\n  contactDivLists.map(contactDivList => contactDiv.appendChild(contactDivList))\r\n\r\n  const lists = [contactTitle, contactDiv]\r\n  lists.map(list => contactSection.appendChild(list))\r\n\r\n  return contactSection\r\n}\r\n\r\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n\r\n\r\nconst createFooter = () => {\r\n  const footer = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('footer')\r\n  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(footer, 'footer-section')\r\n\r\n  const text = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('p')\r\n  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addTextContent)(text, 'Made by Victoria')\r\n\r\n  const fontAwesome = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('i')\r\n  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(fontAwesome, 'fab')\r\n  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(fontAwesome, 'fa-github')\r\n\r\n  const link = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('a')\r\n  link.href = 'https://github.com/victoriacheng15'\r\n\r\n  link.appendChild(fontAwesome)\r\n  text.appendChild(link)\r\n  footer.appendChild(text)\r\n\r\n  return footer\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewElement\": () => (/* binding */ createNewElement),\n/* harmony export */   \"addId\": () => (/* binding */ addId),\n/* harmony export */   \"addClass\": () => (/* binding */ addClass),\n/* harmony export */   \"addTextContent\": () => (/* binding */ addTextContent)\n/* harmony export */ });\n/* eslint-disable no-return-assign */\r\nconst createNewElement = (tag) => document.createElement(tag)\r\nconst addId = (element, idName) => element.id = idName\r\nconst addClass = (element, className) => element.classList.add(className)\r\nconst addTextContent = (element, text) => element.textContent = text\r\n\r\n\r\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/functions.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n/* eslint-disable no-return-assign */\r\n\r\n\r\nconst createNav = () => {\r\n  const navArray = ['home', 'menu', 'contact']\r\n  const nav = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('nav')\r\n  const ul = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('ul')\r\n  nav.appendChild(ul)\r\n  // eslint-disable-next-line array-callback-return\r\n  navArray.map(nav => {\r\n    const li = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('li')\r\n    const a = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('a')\r\n    a.href = `#${nav}`\r\n    ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addTextContent)(a, nav)\r\n    li.appendChild(a)\r\n    ul.appendChild(li)\r\n  })\r\n\r\n  return nav\r\n}\r\n\r\nconst createHeader = () => {\r\n  const header = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('header')\r\n  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(header, 'container')\r\n\r\n  const restaurantName = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('h1')\r\n  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(restaurantName, 'restaurant-name')\r\n  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addTextContent)(restaurantName, 'the food place')\r\n\r\n  header.appendChild(restaurantName)\r\n  header.appendChild(createNav())\r\n\r\n  return header\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHomePage\": () => (/* binding */ createHomePage)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n/* harmony import */ var _sandra_seitamaa_OFJGlG3sKik_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sandra-seitamaa-OFJGlG3sKik-unsplash.jpg */ \"./src/sandra-seitamaa-OFJGlG3sKik-unsplash.jpg\");\n\r\n\r\n\r\nconst createHomePage = () => {\r\n  const homeSection = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('section')\r\n  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addId)(homeSection, 'home')\r\n  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(homeSection, 'home-section')\r\n\r\n  const imageDiv = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('div')\r\n  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(imageDiv, 'image-box')\r\n  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(imageDiv, 'container')\r\n\r\n  const homeImage = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('img')\r\n  homeImage.src = _sandra_seitamaa_OFJGlG3sKik_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__\r\n  imageDiv.appendChild(homeImage)\r\n\r\n  const homeText = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('p')\r\n  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addTextContent)(homeText, 'Make your order online or come visit us!')\r\n\r\n  homeSection.appendChild(imageDiv)\r\n  homeSection.appendChild(homeText)\r\n  return homeSection\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* eslint-disable no-unused-vars */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst addToContent = (() => {\r\n  const content = document.querySelector('#content')\r\n\r\n  const ContentLists = [(0,_header_js__WEBPACK_IMPORTED_MODULE_0__.createHeader)(), (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHomePage)(), (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenuSection)(), (0,_contact__WEBPACK_IMPORTED_MODULE_3__.createContactSection)(), (0,_footer_js__WEBPACK_IMPORTED_MODULE_4__.createFooter)()]\r\n  ContentLists.map(ContentList => content.appendChild(ContentList))\r\n})()\r\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenuSection\": () => (/* binding */ createMenuSection)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n/* eslint-disable array-callback-return */\r\n\r\n\r\nconst menuList = [\r\n  {\r\n    name: 'Chicken Wings',\r\n    description: 'Too cultivated use solicitude frequently',\r\n    image: 'https://source.unsplash.com/daily?food',\r\n    type: 'snack'\r\n  },\r\n  {\r\n    name: 'Takoyaki (6pc)',\r\n    description: 'Dashwood likewise up consider continue entrance ladyship oh',\r\n    image: 'https://source.unsplash.com/daily?food',\r\n    type: 'snack'\r\n  },\r\n  {\r\n    name: 'Steak Poutine',\r\n    description: 'Wrong guest given purse power is no',\r\n    image: 'https://source.unsplash.com/daily?food',\r\n    type: 'snack'\r\n  },\r\n  {\r\n    name: 'The Classic Burger',\r\n    description: 'Friendship to connection an am considered difficulty',\r\n    image: 'https://source.unsplash.com/daily?food',\r\n    type: 'burger'\r\n  },\r\n  {\r\n    name: 'Vegan Burger',\r\n    description: 'Country met pursuit lasting moments why calling certain the',\r\n    image: 'https://source.unsplash.com/daily?food',\r\n    type: 'burger'\r\n  },\r\n  {\r\n    name: 'Steak Wrap',\r\n    description: 'Middletons boisterous our way understood law',\r\n    image: 'https://source.unsplash.com/daily?food',\r\n    type: 'wrap'\r\n  },\r\n  {\r\n    name: 'Chicken Wrap',\r\n    description: 'Among state cease how and sight since shall',\r\n    image: 'https://source.unsplash.com/daily?food',\r\n    type: 'wrap'\r\n  },\r\n  {\r\n    name: 'Turkey Wrap',\r\n    description: 'Material did pleasure breeding our humanity she contempt had',\r\n    image: 'https://source.unsplash.com/daily?food',\r\n    type: 'wrap'\r\n  },\r\n  {\r\n    name: 'Vanilla Milkshake',\r\n    description: 'So ye really mutual no cousin piqued summer result',\r\n    image: 'https://source.unsplash.com/daily?food',\r\n    type: 'milkshake'\r\n  },\r\n  {\r\n    name: 'Mango Milkshake',\r\n    description: 'Contented get distrusts certainty nay are frankness concealed ham',\r\n    image: 'https://source.unsplash.com/daily?food',\r\n    type: 'milkshake'\r\n  },\r\n  {\r\n    name: 'Chocolate Milkshake',\r\n    description: 'On unaffected resolution on considered of',\r\n    image: 'https://source.unsplash.com/daily?food',\r\n    type: 'milkshake'\r\n  },\r\n  {\r\n    name: 'Fine Cheesecake',\r\n    description: 'No thought me husband or colonel forming effects',\r\n    image: 'https://source.unsplash.com/daily?food',\r\n    type: 'dessert'\r\n  },\r\n  {\r\n    name: 'Oreo Cheesecake',\r\n    description: 'End sitting shewing who saw besides son musical adapted',\r\n    image: 'https://source.unsplash.com/daily?food',\r\n    type: 'dessert'\r\n  },\r\n  {\r\n    name: 'Fine Cheesecake',\r\n    description: 'Contrasted interested eat alteration pianoforte sympathize was',\r\n    image: 'https://source.unsplash.com/daily?food',\r\n    type: 'dessert'\r\n  }, {\r\n    name: 'Banan Split Ice Cream',\r\n    description: 'He families believed if no elegance interest surprise an',\r\n    image: 'https://source.unsplash.com/daily?food',\r\n    type: 'dessert'\r\n  }\r\n]\r\n\r\nconst menu = (foodType) => {\r\n  const container = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('article')\r\n  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(container, 'menu-container')\r\n\r\n  const menuTitle = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('h3')\r\n  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addTextContent)(menuTitle, `${foodType}`)\r\n\r\n  container.appendChild(menuTitle)\r\n  menuList\r\n    .filter(type => type.type === `${foodType}`)\r\n    .map(food => {\r\n      const divContainer = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('div')\r\n      ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(divContainer, 'menu-card')\r\n\r\n      const title = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('h4')\r\n      ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addTextContent)(title, food.name)\r\n\r\n      const image = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('img')\r\n      image.src = food.image\r\n      image.alt = `${food.name}`\r\n\r\n      const desc = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('p')\r\n      ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addTextContent)(desc, food.description)\r\n\r\n      const divLists = [title, image, desc]\r\n      divLists.map(divList => divContainer.appendChild(divList))\r\n      container.appendChild(divContainer)\r\n    })\r\n\r\n  return container\r\n}\r\n\r\nconst createMenuSection = () => {\r\n  const menuSection = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('section')\r\n  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addId)(menuSection, 'menu')\r\n  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(menuSection, 'menu-section')\r\n\r\n  const menuTitle = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('h2')\r\n  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addTextContent)(menuTitle, ' our menu')\r\n\r\n  const menuContainer = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('div')\r\n  ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(menuContainer, 'container')\r\n\r\n  menuSection.appendChild(menuTitle)\r\n  menuSection.appendChild(menuContainer)\r\n\r\n  const addMenuLists = [menu('snack'), menu('burger'), menu('wrap'), menu('milkshake'), menu('dessert')]\r\n  addMenuLists.map(menuList => menuContainer.appendChild(menuList))\r\n\r\n  return menuSection\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/sandra-seitamaa-OFJGlG3sKik-unsplash.jpg":
/*!******************************************************!*\
  !*** ./src/sandra-seitamaa-OFJGlG3sKik-unsplash.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0f07681c4d8ce71deae7.jpg\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/sandra-seitamaa-OFJGlG3sKik-unsplash.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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