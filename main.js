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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* styles.css */\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: #22333b;\r\n}\r\n\r\n#content {\r\n  display: grid;\r\n  grid-template-columns: 100vw;\r\n  grid-template-rows: auto;\r\n  place-items: center;\r\n}\r\n\r\n#container {\r\n  background-color: #eae0d5;\r\n  grid-column: 1/2;\r\n  height: 100vh;\r\n  width: 70vw;\r\n  filter: drop-shadow(0px 0px 1px #000000);\r\n  display: grid;\r\n  grid-template-rows: 0.3fr 0.15fr 5fr;\r\n}\r\n\r\n#nav-menu {\r\n  background-color: #eae0d5;\r\n  grid-row: 1/2;\r\n  filter: drop-shadow(0px 1px 1px #a0a0a0);\r\n  display: flex;\r\n  gap: 3em;\r\n  padding: 3em;\r\n  padding-top: 2em;\r\n  align-items: center;\r\n}\r\n\r\n#nav-divider {\r\n  background-color: #C6BAB1;\r\n  grid-row: 2/3;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  /* filter: drop-shadow(0px -1px 1px #a0a0a0); */\r\n}\r\n\r\n#lower-main {\r\n  grid-row: 3/4;\r\n  padding: 3em;\r\n  /* filter: drop-shadow(0px 1px 1px #a0a0a0); */\r\n}\r\n\r\n.nav-button {\r\n  height: 3em;\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n  /* background-color: #C6BAB1; */\r\n}\r\n\r\n.right-align {\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n  margin-left: auto;\r\n}\r\n\r\n.find-location-msg {\r\n  text-decoration: underline;\r\n}\r\n\r\n.special-H1 {\r\n  font-size: 1.7em;\r\n  /* padding: 3em; */\r\n  /* padding-top: 0.1em; */\r\n}\r\n\r\n.special-p {\r\n  /* padding-left: 3em; */\r\n  font-size: 1em;\r\n  padding-right: 30em;\r\n  padding-top: 1em;\r\n}\r\n\r\n.img-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  min-height: 85%;\r\n  padding-top: 2em;\r\n  filter: drop-shadow(0px 0px 1px #000000);\r\n}\r\n\r\n.background-color1 {\r\n  grid-column: 1/2;\r\n  background-color: #000000;\r\n}\r\n\r\n.background-color2 {\r\n  grid-column: 2/3;\r\n  background-color: #868686;\r\n}\r\n\r\n.background-color3 {\r\n  grid-column: 3/4;\r\n  background-color: #c5c4c4;\r\n}\r\n\r\n.fish-image {\r\n  height: 5em;\r\n  /* padding-left: 1em;\r\n  padding-right: 1em; */\r\n  position: absolute;\r\n}\r\n\r\n.fake-slot-fish {\r\n  height: 3em;\r\n  width: 5em;\r\n}\r\n\r\n.menuCards {\r\n  display: flex;\r\n  gap: 3em;\r\n  flex-direction: column;\r\n  margin-top: 3em;\r\n}\r\n\r\n.foodItem {\r\n  background-color: #C6BAB1;\r\n  padding: 2em;\r\n  max-width: 40vw;\r\n}\r\n\r\n.foodName {\r\n  font-size: 2em;\r\n}\r\n\r\n.foodDesc {\r\n  padding-top: 1em;\r\n  font-size: 1em;\r\n  line-height: 1.5;\r\n}\r\n\r\n.foodIngred {\r\n  padding-top: 1em;\r\n  font-size: 1em;\r\n  line-height: 1.2;\r\n  font-style: italic;\r\n}\r\n\r\n.contactCards {\r\n  display: flex;\r\n  gap: 2em;\r\n  flex-direction: column;\r\n  margin-top: 3em;\r\n}\r\n\r\n.contactItem {\r\n  /* background-color: #C6BAB1; */\r\n  padding: 1em;\r\n  max-width: 40vw;\r\n  font-size: 1.3em;\r\n}\r\n\r\n.weekItem {\r\n  padding: 1em;\r\n  max-width: 40vw;\r\n  font-size: 1.1em;\r\n  white-space: pre;\r\n  /*needed for line breaks */\r\n  line-height: 2;\r\n}\r\n\r\n.img-grid>div>img {\r\n  height: 100%;\r\n  width: 100%;\r\n  object-fit:cover;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contact() {\r\n    const containerDiv = document.getElementById(`container`); // we have to regrab the containerDiv here because home.js doesn't have access to that variable\r\n    const lowerMain = document.createElement(\"div\");\r\n    lowerMain.setAttribute(\"id\", \"lower-main\");\r\n    containerDiv.appendChild(lowerMain);\r\n\r\n    const specialH1 = document.createElement(\"p\");\r\n    specialH1.setAttribute(\"class\", \"special-H1\");\r\n    specialH1.textContent = \"Contact Us\";\r\n    lowerMain.appendChild(specialH1);\r\n\r\n    const specialP = document.createElement(\"p\");\r\n    specialP.setAttribute(\"class\", \"special-p\");\r\n    specialP.textContent = \"We value your feedback and are always looking to enhance our seafood restaurant to better serve you! Whether it's a comment about your dining experience or a creative suggestion for new menu items, we’d love to hear your thoughts. Share your ideas through our Contact Us page, and help us make every visit even more delightful. Your input is key to our growth!\";\r\n    lowerMain.appendChild(specialP);\r\n\r\n    const contactFlex = document.createElement(\"div\");\r\n    contactFlex.setAttribute(\"class\", \"contactCards\");\r\n    lowerMain.appendChild(contactFlex);\r\n\r\n    const contact1 = document.createElement(\"div\");\r\n    contact1.setAttribute(\"class\", \"contactItem\");\r\n    contact1.textContent = \"Email: RosySeafood@email.ca\";\r\n    contactFlex.appendChild(contact1);\r\n\r\n    const contact2 = document.createElement(\"div\");\r\n    contact2.setAttribute(\"class\", \"contactItem\");\r\n    contact2.textContent = \"Phone: 1234-555-9034\";\r\n    contactFlex.appendChild(contact2);\r\n\r\n    const week1 = document.createElement(\"div\");\r\n    week1.setAttribute(\"class\", \"weekItem\");\r\n    week1.textContent = \"Monday: 11 AM - 9 PM\\r\\n\";\r\n    week1.textContent += \"Tuesday: 11 AM - 9 PM\\r\\n\";\r\n    week1.textContent += \"Wednesday: 11 AM - 9 PM\\r\\n\";\r\n    week1.textContent += \"Thursday: 11 AM - 9 PM\\r\\n\";\r\n    week1.textContent += \"Friday: 11 AM - 10 PM\\r\\n\";\r\n    week1.textContent += \"Saturday: 11 AM - 10 PM\\r\\n\";\r\n    week1.textContent += \"Sunday: 12 PM - 8 PM\\r\\n\";\r\n    week1.textContent += \"Join us for fresh seafood all week!\";\r\n    contactFlex.appendChild(week1);\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?\n}");

/***/ }),

/***/ "./src/fish-logo-smaller.png":
/*!***********************************!*\
  !*** ./src/fish-logo-smaller.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"1283142ec5c7d192a605.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/fish-logo-smaller.png?\n}");

/***/ }),

/***/ "./src/home-food-images/edward-howell-TACZ-gz4li4-unsplash.jpg":
/*!*********************************************************************!*\
  !*** ./src/home-food-images/edward-howell-TACZ-gz4li4-unsplash.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"9d030e411a49b3e4fa58.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/home-food-images/edward-howell-TACZ-gz4li4-unsplash.jpg?\n}");

/***/ }),

/***/ "./src/home-food-images/fernando-andrade-TrD7yA09Vg8-unsplash.jpg":
/*!************************************************************************!*\
  !*** ./src/home-food-images/fernando-andrade-TrD7yA09Vg8-unsplash.jpg ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"9e80f2c77d246b8b129e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/home-food-images/fernando-andrade-TrD7yA09Vg8-unsplash.jpg?\n}");

/***/ }),

/***/ "./src/home-food-images/vino-li-TqOEGdRNowY-unsplash.jpg":
/*!***************************************************************!*\
  !*** ./src/home-food-images/vino-li-TqOEGdRNowY-unsplash.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"5644b95402e4222c359d.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/home-food-images/vino-li-TqOEGdRNowY-unsplash.jpg?\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home_food_images_edward_howell_TACZ_gz4li4_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-food-images/edward-howell-TACZ-gz4li4-unsplash.jpg */ \"./src/home-food-images/edward-howell-TACZ-gz4li4-unsplash.jpg\");\n/* harmony import */ var _home_food_images_fernando_andrade_TrD7yA09Vg8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-food-images/fernando-andrade-TrD7yA09Vg8-unsplash.jpg */ \"./src/home-food-images/fernando-andrade-TrD7yA09Vg8-unsplash.jpg\");\n/* harmony import */ var _home_food_images_vino_li_TqOEGdRNowY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-food-images/vino-li-TqOEGdRNowY-unsplash.jpg */ \"./src/home-food-images/vino-li-TqOEGdRNowY-unsplash.jpg\");\n\r\n\r\n\r\n\r\n\r\nfunction home() {\r\n    const containerDiv = document.getElementById(`container`); // we have to regrab the containerDiv here because home.js doesn't have access to that variable\r\n    const lowerMain = document.createElement(\"div\");\r\n    lowerMain.setAttribute(\"id\", \"lower-main\");\r\n    containerDiv.appendChild(lowerMain);\r\n\r\n    const specialH1 = document.createElement(\"p\");\r\n    specialH1.setAttribute(\"class\", \"special-H1\");\r\n    specialH1.textContent = \"Today's Special\";\r\n    lowerMain.appendChild(specialH1);\r\n\r\n    const specialP = document.createElement(\"p\");\r\n    specialP.setAttribute(\"class\", \"special-p\");\r\n    specialP.textContent = \"Today's special is a mouthwatering Grilled Lobster Tail Platter, featuring a succulent, buttery lobster tail grilled to perfection, served with a zesty lemon herb sauce. Accompanied by creamy garlic mashed potatoes and fresh, seasonal asparagus, this dish is a delightful blend of flavors that celebrates the ocean's finest. Available only today, come savor this coastal treat while it lasts!\";\r\n    lowerMain.appendChild(specialP);\r\n\r\n    const imgGrid = document.createElement(\"div\");\r\n    imgGrid.setAttribute(\"class\", \"img-grid\");\r\n    lowerMain.appendChild(imgGrid);\r\n\r\n    //////////////////////\r\n\r\n    const bg1 = document.createElement(\"div\");\r\n    bg1.setAttribute(\"class\", \"background-color1\");\r\n    imgGrid.appendChild(bg1);\r\n\r\n    const foodImg1 = document.createElement(\"img\");\r\n    foodImg1.src = _home_food_images_edward_howell_TACZ_gz4li4_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    bg1.appendChild(foodImg1);\r\n\r\n    ////////\r\n\r\n    const bg2 = document.createElement(\"div\");\r\n    bg2.setAttribute(\"class\", \"background-color2\");\r\n    imgGrid.appendChild(bg2);\r\n\r\n    const foodImg2 = document.createElement(\"img\");\r\n    foodImg2.src = _home_food_images_fernando_andrade_TrD7yA09Vg8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n    bg2.appendChild(foodImg2);\r\n\r\n    ////////\r\n\r\n    const bg3 = document.createElement(\"div\");\r\n    bg3.setAttribute(\"class\", \"background-color3\");\r\n    imgGrid.appendChild(bg3);\r\n\r\n    const foodImg3 = document.createElement(\"img\");\r\n    foodImg3.src = _home_food_images_vino_li_TqOEGdRNowY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__;\r\n    bg3.appendChild(foodImg3);\r\n\r\n    ////////\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _fish_logo_smaller_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fish-logo-smaller.png */ \"./src/fish-logo-smaller.png\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// import { container } from \"webpack\";\r\n\r\n\r\nfunction switchMenu() {\r\n    const delLowerMain = document.getElementById(\"lower-main\"); // grab lower-main div so we can delete it\r\n    delLowerMain.remove(); // delete lower main so we can add a new one\r\n    console.log(\"removed lower-main div\");\r\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n};\r\n\r\nfunction switchHome() {\r\n    const delLowerMain = document.getElementById(\"lower-main\"); // grab lower-main div so we can delete it\r\n    delLowerMain.remove(); // delete lower main so we can add a new one\r\n    console.log(\"removed lower-main div\");\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n};\r\n\r\nfunction switchContact() {\r\n    const delLowerMain = document.getElementById(\"lower-main\"); // grab lower-main div so we can delete it\r\n    delLowerMain.remove(); // delete lower main so we can add a new one\r\n    console.log(\"removed lower-main div\");\r\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n};\r\n\r\nconst contentDiv = document.getElementById(`content`);\r\n\r\nconst containerDiv = document.createElement(\"div\");\r\ncontainerDiv.setAttribute(\"id\", \"container\");\r\ncontentDiv.appendChild(containerDiv);\r\n\r\nconst navMenu = document.createElement(\"div\");\r\nnavMenu.setAttribute(\"id\", \"nav-menu\");\r\ncontainerDiv.appendChild(navMenu);\r\n\r\nconst image = document.createElement(\"img\");\r\nimage.src = _fish_logo_smaller_png__WEBPACK_IMPORTED_MODULE_1__;\r\nimage.setAttribute(\"class\", \"fish-image\");\r\nnavMenu.appendChild(image);\r\n\r\nconst fakeFishSlot = document.createElement(\"div\"); // the fish image is absolute positioned so this is used to create fake space\r\nfakeFishSlot.setAttribute(\"class\", \"fake-slot-fish\");\r\nnavMenu.appendChild(fakeFishSlot);\r\n\r\nconst homeButton = document.createElement(\"button\");\r\nhomeButton.setAttribute(\"class\", \"nav-button\");\r\nhomeButton.addEventListener(\"click\", function () {\r\n    switchHome();\r\n});\r\nhomeButton.textContent = \"Home\";\r\nnavMenu.appendChild(homeButton);\r\n\r\nconst menuButton = document.createElement(\"button\");\r\nmenuButton.setAttribute(\"class\", \"nav-button\");\r\nmenuButton.addEventListener(\"click\", function () {\r\n    switchMenu();\r\n});\r\nmenuButton.textContent = \"Menu\";\r\nnavMenu.appendChild(menuButton);\r\n\r\nconst contactButton = document.createElement(\"button\");\r\ncontactButton.setAttribute(\"class\", \"nav-button\");\r\ncontactButton.addEventListener(\"click\", function () {\r\n    switchContact();\r\n});\r\ncontactButton.textContent = \"Contact Us\";\r\nnavMenu.appendChild(contactButton);\r\n\r\nconst aboutButton = document.createElement(\"button\");\r\naboutButton.setAttribute(\"class\", \"nav-button\");\r\naboutButton.textContent = \"About\";\r\nnavMenu.appendChild(aboutButton);\r\n\r\nconst logInButton = document.createElement(\"p\");\r\nlogInButton.setAttribute(\"class\", \"right-align\");\r\nlogInButton.textContent = \"Log in\";\r\nnavMenu.appendChild(logInButton);\r\n\r\nconst cartButton = document.createElement(\"p\");\r\ncartButton.textContent = \"Cart\";\r\nnavMenu.appendChild(cartButton);\r\n\r\n\r\nconst navDivider = document.createElement(\"div\");\r\nnavDivider.setAttribute(\"id\", \"nav-divider\");\r\ncontainerDiv.appendChild(navDivider);\r\n\r\nconst findLocationMsg = document.createElement(\"p\");\r\nfindLocationMsg.setAttribute(\"class\", \"find-location-msg\");\r\nfindLocationMsg.textContent = \"Find A Location Near You\";\r\nnavDivider.appendChild(findLocationMsg);\r\n\r\n(function(){\r\n    console.log(_home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n})();\r\n\r\n\r\n\r\n\r\n\r\nconsole.log(\"server is running..\");\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menu() {\r\n    const containerDiv = document.getElementById(`container`); // we have to regrab the containerDiv here because home.js doesn't have access to that variable\r\n    const lowerMain = document.createElement(\"div\");\r\n    lowerMain.setAttribute(\"id\", \"lower-main\");\r\n    containerDiv.appendChild(lowerMain);\r\n\r\n    const specialH1 = document.createElement(\"p\");\r\n    specialH1.setAttribute(\"class\", \"special-H1\");\r\n    specialH1.textContent = \"Menu\";\r\n    lowerMain.appendChild(specialH1);\r\n\r\n    const menuFlex = document.createElement(\"div\");\r\n    menuFlex.setAttribute(\"class\", \"menuCards\");\r\n    lowerMain.appendChild(menuFlex);\r\n\r\n    ///////////////////////////////\r\n\r\n    const item1 = document.createElement(\"div\");\r\n    item1.setAttribute(\"class\", \"foodItem\");\r\n    menuFlex.appendChild(item1);\r\n\r\n    const foodName1 = document.createElement(\"div\");\r\n    foodName1.setAttribute(\"class\", \"foodName\");\r\n    foodName1.textContent = \"Garlic Butter Shrimp Skewers\";\r\n    item1.appendChild(foodName1);\r\n\r\n    const foodDesc1 = document.createElement(\"div\");\r\n    foodDesc1.setAttribute(\"class\", \"foodDesc\");\r\n    foodDesc1.textContent = \"Plump jumbo shrimp are lightly seasoned, skewered, and grilled, then basted with a rich garlic butter sauce. Served with a side of lemon wedges and fresh parsley, these skewers offer a burst of savory, tangy flavor perfect for a light yet satisfying meal.\";\r\n    item1.appendChild(foodDesc1);\r\n\r\n    const foodIngred1 = document.createElement(\"div\");\r\n    foodIngred1.setAttribute(\"class\", \"foodIngred\");\r\n    foodIngred1.textContent = \"Jumbo shrimp, unsalted butter, fresh garlic, lemon juice, parsley, salt, black pepper, olive oil.\";\r\n    item1.appendChild(foodIngred1);\r\n\r\n    ///////////////////////////////\r\n\r\n    const item2 = document.createElement(\"div\");\r\n    item2.setAttribute(\"class\", \"foodItem\");\r\n    menuFlex.appendChild(item2);\r\n\r\n    const foodName2 = document.createElement(\"div\");\r\n    foodName2.setAttribute(\"class\", \"foodName\");\r\n    foodName2.textContent = \"Classic Fish Tacos\"\r\n    item2.appendChild(foodName2);\r\n\r\n    const foodDesc2 = document.createElement(\"div\");\r\n    foodDesc2.setAttribute(\"class\", \"foodDesc\");\r\n    foodDesc2.textContent = \"Tender, flaky cod is lightly spiced and pan-seared, then nestled in warm corn tortillas. Topped with crisp cabbage slaw, creamy avocado, and a zesty lime-cilantro drizzle, these tacos deliver a fresh, coastal vibe in every bite.\"\r\n    item2.appendChild(foodDesc2);\r\n\r\n    const foodIngred2 = document.createElement(\"div\");\r\n    foodIngred2.setAttribute(\"class\", \"foodIngred\");\r\n    foodIngred2.textContent = \"Cod fillets, corn tortillas, cabbage slaw, lime juice, cilantro, avocado, chili powder, cumin, salt, pepper, sour cream.\";\r\n    item2.appendChild(foodIngred2);\r\n\r\n    ////////////////////////////////\r\n\r\n    const item3 = document.createElement(\"div\");\r\n    item3.setAttribute(\"class\", \"foodItem\");\r\n    menuFlex.appendChild(item3);\r\n\r\n    const foodName3 = document.createElement(\"div\");\r\n    foodName3.setAttribute(\"class\", \"foodName\");\r\n    foodName3.textContent = \"Clam Chowder Bowl\"\r\n    item3.appendChild(foodName3);\r\n\r\n    const foodDesc3 = document.createElement(\"div\");\r\n    foodDesc3.setAttribute(\"class\", \"foodDesc\");\r\n    foodDesc3.textContent = \"Our creamy New England-style clam chowder is brimming with tender clams, hearty potatoes, and aromatic herbs in a velvety broth. Served piping hot with a side of crispy oyster crackers, it’s a comforting, soul-warming classic.\"\r\n    item3.appendChild(foodDesc3);\r\n\r\n    const foodIngred3 = document.createElement(\"div\");\r\n    foodIngred3.setAttribute(\"class\", \"foodIngred\");\r\n    foodIngred3.textContent = \"Fresh clams, potatoes, onions, celery, heavy cream, butter, thyme, bay leaf, salt, white pepper, oyster crackers.\";\r\n    item3.appendChild(foodIngred3);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?\n}");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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