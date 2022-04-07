/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/app.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#app {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  width: 600px;\n  align-items: center;\n  background: white;\n  padding: 12px 12px 36px 12px;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.title {\n  margin-top: 32px;\n}\n\n.nav-container {\n  margin-top: 32px;\n}\n\n.nav-button {\n  width: 200px;\n  background: var(--color-nav-button-bg);\n  width: 118px;\n  height: 36px;\n  border: none;\n  border-radius: 4px;\n  margin: 0 4px;\n}\n\n.nav-button.nav-button-clicked {\n  background-color: var(--color-nav-button-clicked);\n}\n\n.input-container {\n  margin-top: 52px;\n}\n\n.input-container > form {\n  display: flex;\n  flex-direction: column;\n}\n\n.add-item-input {\n  width: 120px;\n  height: 36px;\n}\n\n.submit-button {\n  background-color: var(--color-submit-button-bg);\n  padding: 6px;\n  width: 56px;\n  height: 36px;\n  color: var(--color-submit-button-font-color);\n  font-weight: 700;\n  font-size: 14px;\n  margin-left: 16px;\n}\n\n.submit-button:hover {\n  background-color: var(--color-submit-button-hover);\n}\n\n.submit-button:active {\n  background-color: var(--color-submit-button-active);\n}\n\n.table-container {\n  margin-top: 48px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.table-container > table {\n  margin-top: 16px;\n}\n\n.table-container > table td {\n  text-align: center;\n}\n\n.item-table-change-button,\n.item-table-delete-button {\n  width: 50px;\n  height: 32px;\n}\n\n.item-table-purchase-button {\n  width: 100px;\n  height: 32px;\n}\n\n.table-container > table tr {\n  display: grid;\n  align-items: center;\n  grid-gap: 0;\n  border-bottom: 1px solid #dcdcdc;\n}\n\n.item-table {\n  width: 480px;\n}\n\n.item-table tr {\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: 45px;\n}\n\n.coin-table {\n  width: 240px;\n}\n\n.coin-table tr {\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 45px;\n}\n\n.table-container > table tr:first-child {\n  border-top: 1px solid #dcdcdc;\n}\n\n.charge-money-input {\n  width: 300px;\n  height: 36px;\n}\n\n.input-container p {\n  margin-top: 16px;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.display-none {\n  display: none;\n}\n\n.return-money-button {\n  width: 100px;\n  height: 32px;\n  margin-top: 24px;\n}\n\n.table-item-input {\n  width: 90px;\n  text-align: center;\n}\n\n.item-table-confirm-button {\n  width: 100px;\n  height: 32px;\n}\n\n#snackbar {\n  visibility: hidden;\n  min-width: 250px;\n  margin-left: -125px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  bottom: 5%;\n}\n\n.show {\n  visibility: visible !important; /* Show the snackbar */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 1.7s;\n  animation: fadein 0.5s, fadeout 0.5s 1.7s;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 5%;\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 5%;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 5%;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 5%;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n\n#login-form,\n#signup-form,\n#change-form {\n  display: flex;\n  flex-direction: column;\n  margin-top: 46px;\n}\n\n#login-form input,\n#signup-form input,\n#change-form input {\n  width: 300px;\n  height: 36px;\n  margin-bottom: 16px;\n}\n\n#login-form button,\n#signup-form button,\n#change-form button {\n  background: var(--color-submit-button-bg);\n  padding: 6px 6px 6px 8px;\n  color: white;\n  font-weight: 700;\n  font-size: 14px;\n  height: 36px;\n  margin-top: 14px;\n}\n\n#header-button-container {\n  align-self: flex-end;\n}\n\n#login-button {\n  width: 117px;\n  height: 36px;\n}\n\n.login-to-signup {\n  margin-top: 14px;\n  align-self: start;\n}\n\n#go-to-signup {\n  cursor: pointer;\n  color: #3581d7;\n}\n\n#user-badge {\n  border-radius: 50%;\n  background-color: #d6f4f8;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  cursor: pointer;\n}\n\n#user-badge:hover {\n  background-color: #b3ebf2;\n}\n\n.permission-info {\n  margin-top: 50px;\n}\n\n#user-container {\n  position: relative;\n}\n\n#user-dropbox {\n  position: absolute;\n  top: 50px;\n  left: -15px;\n  width: 60px;\n  padding: 5px;\n  background-color: var(--color-nav-button-bg);\n  text-align: center;\n  font-size: 12px;\n  border-radius: 5px;\n}\n\n#user-dropbox li {\n  padding: 4px 0;\n}\n\n#user-dropbox li:hover {\n  background-color: var(--color-button-hover);\n  cursor: pointer;\n}\n\n#user-dropbox::before {\n  content: '';\n  position: absolute;\n  border-bottom: 10px solid var(--color-nav-button-bg);\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n  top: -8px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/app.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,sCAAsC;EACtC,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,iDAAiD;AACnD;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,+CAA+C;EAC/C,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,4CAA4C;EAC5C,gBAAgB;EAChB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,kDAAkD;AACpD;;AAEA;EACE,mDAAmD;AACrD;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,gCAAgC;AAClC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,qCAAqC;EACrC,wBAAwB;AAC1B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,qCAAqC;EACrC,wBAAwB;AAC1B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,UAAU;EACV,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,8BAA8B,EAAE,sBAAsB;EACtD,iDAAiD;EACjD,yCAAyC;AAC3C;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,UAAU;IACV,UAAU;EACZ;AACF;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,UAAU;IACV,UAAU;EACZ;AACF;;AAEA;EACE;IACE,UAAU;IACV,UAAU;EACZ;EACA;IACE,SAAS;IACT,UAAU;EACZ;AACF;;AAEA;EACE;IACE,UAAU;IACV,UAAU;EACZ;EACA;IACE,SAAS;IACT,UAAU;EACZ;AACF;;AAEA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;;;EAGE,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;;EAGE,yCAAyC;EACzC,wBAAwB;EACxB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,WAAW;EACX,YAAY;EACZ,4CAA4C;EAC5C,kBAAkB;EAClB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,2CAA2C;EAC3C,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,oDAAoD;EACpD,mCAAmC;EACnC,kCAAkC;EAClC,SAAS;AACX","sourcesContent":["#app {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  width: 600px;\n  align-items: center;\n  background: white;\n  padding: 12px 12px 36px 12px;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.title {\n  margin-top: 32px;\n}\n\n.nav-container {\n  margin-top: 32px;\n}\n\n.nav-button {\n  width: 200px;\n  background: var(--color-nav-button-bg);\n  width: 118px;\n  height: 36px;\n  border: none;\n  border-radius: 4px;\n  margin: 0 4px;\n}\n\n.nav-button.nav-button-clicked {\n  background-color: var(--color-nav-button-clicked);\n}\n\n.input-container {\n  margin-top: 52px;\n}\n\n.input-container > form {\n  display: flex;\n  flex-direction: column;\n}\n\n.add-item-input {\n  width: 120px;\n  height: 36px;\n}\n\n.submit-button {\n  background-color: var(--color-submit-button-bg);\n  padding: 6px;\n  width: 56px;\n  height: 36px;\n  color: var(--color-submit-button-font-color);\n  font-weight: 700;\n  font-size: 14px;\n  margin-left: 16px;\n}\n\n.submit-button:hover {\n  background-color: var(--color-submit-button-hover);\n}\n\n.submit-button:active {\n  background-color: var(--color-submit-button-active);\n}\n\n.table-container {\n  margin-top: 48px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.table-container > table {\n  margin-top: 16px;\n}\n\n.table-container > table td {\n  text-align: center;\n}\n\n.item-table-change-button,\n.item-table-delete-button {\n  width: 50px;\n  height: 32px;\n}\n\n.item-table-purchase-button {\n  width: 100px;\n  height: 32px;\n}\n\n.table-container > table tr {\n  display: grid;\n  align-items: center;\n  grid-gap: 0;\n  border-bottom: 1px solid #dcdcdc;\n}\n\n.item-table {\n  width: 480px;\n}\n\n.item-table tr {\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: 45px;\n}\n\n.coin-table {\n  width: 240px;\n}\n\n.coin-table tr {\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 45px;\n}\n\n.table-container > table tr:first-child {\n  border-top: 1px solid #dcdcdc;\n}\n\n.charge-money-input {\n  width: 300px;\n  height: 36px;\n}\n\n.input-container p {\n  margin-top: 16px;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.display-none {\n  display: none;\n}\n\n.return-money-button {\n  width: 100px;\n  height: 32px;\n  margin-top: 24px;\n}\n\n.table-item-input {\n  width: 90px;\n  text-align: center;\n}\n\n.item-table-confirm-button {\n  width: 100px;\n  height: 32px;\n}\n\n#snackbar {\n  visibility: hidden;\n  min-width: 250px;\n  margin-left: -125px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  bottom: 5%;\n}\n\n.show {\n  visibility: visible !important; /* Show the snackbar */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 1.7s;\n  animation: fadein 0.5s, fadeout 0.5s 1.7s;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 5%;\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 5%;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 5%;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 5%;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n\n#login-form,\n#signup-form,\n#change-form {\n  display: flex;\n  flex-direction: column;\n  margin-top: 46px;\n}\n\n#login-form input,\n#signup-form input,\n#change-form input {\n  width: 300px;\n  height: 36px;\n  margin-bottom: 16px;\n}\n\n#login-form button,\n#signup-form button,\n#change-form button {\n  background: var(--color-submit-button-bg);\n  padding: 6px 6px 6px 8px;\n  color: white;\n  font-weight: 700;\n  font-size: 14px;\n  height: 36px;\n  margin-top: 14px;\n}\n\n#header-button-container {\n  align-self: flex-end;\n}\n\n#login-button {\n  width: 117px;\n  height: 36px;\n}\n\n.login-to-signup {\n  margin-top: 14px;\n  align-self: start;\n}\n\n#go-to-signup {\n  cursor: pointer;\n  color: #3581d7;\n}\n\n#user-badge {\n  border-radius: 50%;\n  background-color: #d6f4f8;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  cursor: pointer;\n}\n\n#user-badge:hover {\n  background-color: #b3ebf2;\n}\n\n.permission-info {\n  margin-top: 50px;\n}\n\n#user-container {\n  position: relative;\n}\n\n#user-dropbox {\n  position: absolute;\n  top: 50px;\n  left: -15px;\n  width: 60px;\n  padding: 5px;\n  background-color: var(--color-nav-button-bg);\n  text-align: center;\n  font-size: 12px;\n  border-radius: 5px;\n}\n\n#user-dropbox li {\n  padding: 4px 0;\n}\n\n#user-dropbox li:hover {\n  background-color: var(--color-button-hover);\n  cursor: pointer;\n}\n\n#user-dropbox::before {\n  content: '';\n  position: absolute;\n  border-bottom: 10px solid var(--color-nav-button-bg);\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n  top: -8px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --color-body-bg: rgb(230, 230, 230);\n  --color-nav-button-bg: #f5f5f5;\n  --color-button-hover: #dfdfdf;\n  --color-nav-button-clicked: #00bcd429;\n  --color-submit-button-bg: #00bcd4;\n  --color-submit-button-hover: #00bbd4c2;\n  --color-submit-button-active: #00bbd4c2;\n  --color-submit-button-font-color: #ffffff;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nhtml,\nbody {\n  display: flex;\n  justify-content: center;\n  -webkit-font-smoothing: antialiased;\n  background: var(--color-body-bg);\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\nbutton {\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: var(--color-button-hover);\n}\n\ninput {\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n  padding: 5px 9px;\n}\n\nlabel {\n  font-size: 16px;\n  margin-bottom: 4px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAEA;EACE,mCAAmC;EACnC,8BAA8B;EAC9B,6BAA6B;EAC7B,qCAAqC;EACrC,iCAAiC;EACjC,sCAAsC;EACtC,uCAAuC;EACvC,yCAAyC;AAC3C;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mCAAmC;EACnC,gCAAgC;AAClC;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB","sourcesContent":["@import './app.css';\n\n:root {\n  --color-body-bg: rgb(230, 230, 230);\n  --color-nav-button-bg: #f5f5f5;\n  --color-button-hover: #dfdfdf;\n  --color-nav-button-clicked: #00bcd429;\n  --color-submit-button-bg: #00bcd4;\n  --color-submit-button-hover: #00bbd4c2;\n  --color-submit-button-active: #00bbd4c2;\n  --color-submit-button-font-color: #ffffff;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nhtml,\nbody {\n  display: flex;\n  justify-content: center;\n  -webkit-font-smoothing: antialiased;\n  background: var(--color-body-bg);\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\nbutton {\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: var(--color-button-hover);\n}\n\ninput {\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n  padding: 5px 9px;\n}\n\nlabel {\n  font-size: 16px;\n  margin-bottom: 4px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/AppManager.ts":
/*!******************************!*\
  !*** ./src/js/AppManager.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controllers_manageItemController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/manageItemController */ "./src/js/controllers/manageItemController.ts");
/* harmony import */ var _controllers_chargeMoneyController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/chargeMoneyController */ "./src/js/controllers/chargeMoneyController.ts");
/* harmony import */ var _controllers_purchaseItemController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/purchaseItemController */ "./src/js/controllers/purchaseItemController.ts");
/* harmony import */ var _controllers_logInController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/logInController */ "./src/js/controllers/logInController.ts");
/* harmony import */ var _controllers_signUpController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/signUpController */ "./src/js/controllers/signUpController.ts");
/* harmony import */ var _vendingMachine_vendingMachine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendingMachine/vendingMachine */ "./src/js/vendingMachine/vendingMachine.ts");
/* harmony import */ var _router_Router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router/Router */ "./src/js/router/Router.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/common */ "./src/js/utils/common.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/constants */ "./src/js/constants/constants.ts");
/* harmony import */ var _templates_initialTemplate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates/initialTemplate */ "./src/js/templates/initialTemplate.ts");
/* harmony import */ var _controllers_changeUserInfoController__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controllers/changeUserInfoController */ "./src/js/controllers/changeUserInfoController.ts");











var AppManager = /** @class */ (function () {
    function AppManager() {
        this.initDom();
        this.vendingMachine = new _vendingMachine_vendingMachine__WEBPACK_IMPORTED_MODULE_5__["default"]();
        this.manageItemController = new _controllers_manageItemController__WEBPACK_IMPORTED_MODULE_0__["default"](this.vendingMachine);
        this.chargeMoneyController = new _controllers_chargeMoneyController__WEBPACK_IMPORTED_MODULE_1__["default"](this.vendingMachine);
        this.purchaseItemController = new _controllers_purchaseItemController__WEBPACK_IMPORTED_MODULE_2__["default"](this.vendingMachine);
        this.logInController = new _controllers_logInController__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.signUpController = new _controllers_signUpController__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.changeUserInfoController = new _controllers_changeUserInfoController__WEBPACK_IMPORTED_MODULE_10__["default"]();
        this.router = new _router_Router__WEBPACK_IMPORTED_MODULE_6__["default"](this.manageItemController, this.chargeMoneyController, this.purchaseItemController, this.logInController, this.signUpController, this.changeUserInfoController);
        this.router.loadRoutePage();
    }
    AppManager.prototype.initDom = function () {
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_7__.$)(_constants_constants__WEBPACK_IMPORTED_MODULE_8__.SELECTOR.ID.APP).insertAdjacentHTML('beforeend', _templates_initialTemplate__WEBPACK_IMPORTED_MODULE_9__.initialTemplate);
    };
    return AppManager;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppManager);


/***/ }),

/***/ "./src/js/constants/constants.ts":
/*!***************************************!*\
  !*** ./src/js/constants/constants.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SELECTOR": () => (/* binding */ SELECTOR),
/* harmony export */   "COINS": () => (/* binding */ COINS),
/* harmony export */   "ERROR_MESSAGE": () => (/* binding */ ERROR_MESSAGE),
/* harmony export */   "CONFIRM_MESSAGE": () => (/* binding */ CONFIRM_MESSAGE),
/* harmony export */   "ITEM": () => (/* binding */ ITEM),
/* harmony export */   "OWN_MONEY": () => (/* binding */ OWN_MONEY),
/* harmony export */   "PURCHASE_MONEY": () => (/* binding */ PURCHASE_MONEY),
/* harmony export */   "URL_HASH": () => (/* binding */ URL_HASH)
/* harmony export */ });
var SELECTOR = {
    ID: {
        APP: '#app',
        CONTENT: '#content',
        CHARGE_MONEY_FORM: '#charge-money-form',
        CURRENT_MONEY: '#current-money',
        ADD_ITEM_NAME: '#add-item-name',
        ADD_ITEM_PRICE: '#add-item-price',
        ADD_ITEM_QUANTITY: '#add-item-quantity',
        ADD_ITEM_FORM: '#add-item-form',
        PURCHASE_ITEM_FORM: '#purchase-item-form'
    },
    CLASS: {
        CHARGE_MONEY_INPUT: '.charge-money-input',
        COIN_TABLE: '.coin-table',
        NAV_CONTAINER: '.nav-container',
        NAV_BUTTON: '.nav-button',
        ITEM_TABLE_BUTTON_CONTAINER: '.item-table-button-container',
        TABLE_CONTAINER: '.table-container',
        ITEM_TABLE_CONFIRM_BUTTON: '.item-table-confirm-button',
        ITEM_TABLE_DELETE_BUTTON: '.item-table-delete-button',
        ITEM_TABLE_CHANGE_BUTTON: '.item-table-change-button',
        PURCHASE_ITEM_INPUT: '.purchase-item-input'
    },
    ID_STRING: {
        ITEM_MANGE_TAB: 'item-manage-tab',
        MONEY_CHARGE_TAB: 'money-charge-tab',
        ITEM_PURCHASE_TAB: 'item-purchase-tab'
    },
    CLASS_STRING: {
        NAV_BUTTON_CLICKED: 'nav-button-clicked',
        TABLE_ITEM_NAME: 'table-item-name',
        TABLE_ITEM_PRICE: 'table-item-price',
        TABLE_ITEM_QUANTITY: 'table-item-quantity',
        TABLE_ITEM_INPUT_NAME: 'table-item-input-name',
        TABLE_ITEM_INPUT_PRICE: 'table-item-input-price',
        TABLE_ITEM_INPUT_QUANTITY: 'table-item-input-quantity',
        ITEM_TABLE_CHANGE_BUTTON: 'item-table-change-button',
        ITEM_TABLE_DELETE_BUTTON: 'item-table-delete-button',
        ITEM_TABLE_CONFIRM_BUTTON: 'item-table-confirm-button'
    }
};
var COINS = {
    fiveHundred: 500,
    hundred: 100,
    fifty: 50,
    ten: 10
};
var ERROR_MESSAGE;
(function (ERROR_MESSAGE) {
    ERROR_MESSAGE["ITEM_NAME_DUPLICATED"] = "\uC774\uBBF8 \uB4F1\uB85D\uB41C \uC0C1\uD488\uBA85\uC785\uB2C8\uB2E4.";
    ERROR_MESSAGE["ITEM_NAME_EMPTY_NAME"] = "\uACF5\uBC31\uC73C\uB85C\uB41C \uC0C1\uD488\uBA85\uC744 \uC785\uB825\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
    ERROR_MESSAGE["ITEM_NAME_OVER_MAX_LENGTH"] = "10\uC790 \uC774\uC0C1\uC758 \uC0C1\uD488\uBA85\uC744 \uC785\uB825\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
    ERROR_MESSAGE["ITEM_PRICE_NOT_INTEGER"] = "\uC815\uC218\uAC00 \uC544\uB2CC \uC22B\uC790\uB294 \uAC00\uACA9\uC73C\uB85C \uC785\uB825\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
    ERROR_MESSAGE["ITEM_PRICE_UNDER_MIN"] = "100\uC6D0\uBCF4\uB2E4 \uB0AE\uC740 \uAC00\uACA9\uC740 \uC785\uB825\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
    ERROR_MESSAGE["ITEM_PRICE_OVER_MAX"] = "10,000\uC6D0 \uBCF4\uB2E4 \uD070 \uAC00\uACA9\uC744 \uC785\uB825\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
    ERROR_MESSAGE["ITEM_PRICE_INVALID_UNIT"] = "10\uC6D0 \uB2E8\uC704\uC758 \uAC00\uACA9\uB9CC \uC785\uB825\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.";
    ERROR_MESSAGE["ITEM_QUANTITY_NOT_INTEGER"] = "\uC815\uC218\uAC00 \uC544\uB2CC \uC22B\uC790\uB294 \uC218\uB7C9\uC73C\uB85C \uC785\uB825\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
    ERROR_MESSAGE["ITEM_QUANTITY_UNDER_MIN"] = "0\uC774\uD558\uC758 \uC218\uB294 \uC218\uB7C9\uC73C\uB85C \uC785\uB825\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
    ERROR_MESSAGE["ITEM_QUANTITY_OVER_MAX"] = "20\uAC1C \uBCF4\uB2E4 \uB9CE\uC740 \uC218\uB7C9\uC744 \uC785\uB825\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
    ERROR_MESSAGE["INPUT_MONEY_NOT_INTEGER"] = "\uC815\uC218\uAC00 \uC544\uB2CC \uC22B\uC790\uB294 \uAE08\uC561\uC73C\uB85C \uC785\uB825\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
    ERROR_MESSAGE["INPUT_MONEY_UNDER_MIN"] = "0\uC6D0\uC774\uD558\uC758 \uAE08\uC561\uC740 \uD22C\uC785\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
    ERROR_MESSAGE["INPUT_MONEY_OVER_MAX"] = "100,000\uC6D0 \uBCF4\uB2E4 \uB9CE\uC740 \uAE08\uC561\uC744 \uD22C\uC785\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
    ERROR_MESSAGE["INPUT_MONEY_INVALID_UNIT"] = "10\uC6D0 \uB2E8\uC704\uC758 \uAE08\uC561\uB9CC \uD22C\uC785\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.";
    ERROR_MESSAGE["INPUT_PURCHASE_MONEY_OVER_MAX"] = "10,000\uC6D0 \uBCF4\uB2E4 \uB9CE\uC740 \uAE08\uC561\uC744 \uD22C\uC785\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
})(ERROR_MESSAGE || (ERROR_MESSAGE = {}));
var CONFIRM_MESSAGE = {
    DELETE: '정말로 삭제하시겠습니까?'
};
var ITEM = {
    NAME: {
        MAX_LENGTH: 10
    },
    PRICE: {
        MIN: 100,
        MAX: 10000,
        UNIT: 10
    },
    QUANTITY: {
        MIN: 0,
        MAX: 20
    }
};
var OWN_MONEY = {
    MIN: 0,
    MAX: 100000,
    UNIT: 10
};
var PURCHASE_MONEY = {
    MIN: 0,
    MAX: 10000,
    UNIT: 10
};
var URL_HASH = {
    MANAGE_ITEM: '#mangeItem',
    CHARGE_MONEY: '#chargeMoney',
    PURCHASE_ITEM: '#purchaseItem',
    LOG_IN: '#login',
    SIGN_UP: '#signup'
};


/***/ }),

/***/ "./src/js/controllers/changeUserInfoController.ts":
/*!********************************************************!*\
  !*** ./src/js/controllers/changeUserInfoController.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_changeUserInfoView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/changeUserInfoView */ "./src/js/views/changeUserInfoView.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common */ "./src/js/utils/common.ts");


var ChangeUserInfoController = /** @class */ (function () {
    function ChangeUserInfoController() {
        this.changeUserInfoView = new _views_changeUserInfoView__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.bindEvents();
    }
    ChangeUserInfoController.prototype.bindEvents = function () {
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.onCustomEvent)('CHANGE_USER_INFO', this.handleChangeUserInfo.bind(this));
    };
    ChangeUserInfoController.prototype.handleChangeUserInfo = function (event) {
        var _a = event.detail, name = _a.name, password = _a.password, targetId = _a.targetId;
        var user = JSON.parse(sessionStorage.getItem('user'));
        var data = JSON.stringify({
            email: user.email,
            name: name,
            password: password
        });
        fetch("https://json-vendingmachine-server.herokuapp.com/".concat(user.id), {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: data
        })
            .then(function (res) {
            return res.json();
        })
            .then(function (result) {
            var changedUser = {
                email: result.email,
                name: result.name,
                id: result.id
            };
            var name = result.name;
            if (!name) {
                throw new Error(result);
            }
            sessionStorage.setItem('user', JSON.stringify(changedUser));
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.emitCustomEvent)('ROUTE_CHANGE', { detail: { targetId: targetId } });
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.showSnackBar)('회원 정보가 수정되었습니다.');
        })["catch"](function (error) { return alert(error.message); });
    };
    ChangeUserInfoController.prototype.loadPage = function (isLogin) {
        this.changeUserInfoView.render(isLogin);
    };
    return ChangeUserInfoController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangeUserInfoController);


/***/ }),

/***/ "./src/js/controllers/chargeMoneyController.ts":
/*!*****************************************************!*\
  !*** ./src/js/controllers/chargeMoneyController.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_chargeMoneyView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/chargeMoneyView */ "./src/js/views/chargeMoneyView.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common */ "./src/js/utils/common.ts");


var ChargeMoneyController = /** @class */ (function () {
    function ChargeMoneyController(vendingMachine) {
        this.vendingMachine = vendingMachine;
        this.chargeMoneyView = new _views_chargeMoneyView__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.bindEvents();
    }
    ChargeMoneyController.prototype.bindEvents = function () {
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.onCustomEvent)('CHARGE_MONEY', this.handleChargeMoney.bind(this));
    };
    ChargeMoneyController.prototype.handleChargeMoney = function (event) {
        var inputMoney = event.detail.inputMoney;
        this.vendingMachine.chargeOwnMoney(inputMoney);
        this.chargeMoneyView.repaintCoinsTable(this.vendingMachine.getCoins());
    };
    ChargeMoneyController.prototype.loadPage = function (isLogin) {
        var coins = this.vendingMachine.getCoins();
        var totalMoney = this.vendingMachine.getCurrentOwnMoney();
        this.chargeMoneyView.render(isLogin, coins, totalMoney);
    };
    return ChargeMoneyController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChargeMoneyController);


/***/ }),

/***/ "./src/js/controllers/logInController.ts":
/*!***********************************************!*\
  !*** ./src/js/controllers/logInController.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_logInView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/logInView */ "./src/js/views/logInView.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common */ "./src/js/utils/common.ts");


var LogInController = /** @class */ (function () {
    function LogInController() {
        this.logInView = new _views_logInView__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.bindEvents();
    }
    LogInController.prototype.bindEvents = function () {
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.onCustomEvent)('LOG_IN', this.handleLogIn.bind(this));
    };
    LogInController.prototype.handleLogIn = function (event) {
        var _a = event.detail, email = _a.email, password = _a.password, targetId = _a.targetId;
        var data = JSON.stringify({
            email: email,
            password: password
        });
        fetch('https://json-vendingmachine-server.herokuapp.com/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: data
        })
            .then(function (res) {
            return res.json();
        })
            .then(function (result) {
            var accessToken = result.accessToken, user = result.user;
            if (!accessToken) {
                throw new Error(result);
            }
            sessionStorage.setItem('jwt-token', accessToken);
            sessionStorage.setItem('isLogIn', 'true');
            sessionStorage.setItem('user', JSON.stringify(user));
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.emitCustomEvent)('ROUTE_CHANGE', { detail: { targetId: targetId } });
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.showSnackBar)('로그인 되었습니다.');
        })["catch"](function (error) { return alert(error.message); });
    };
    LogInController.prototype.loadPage = function (isLogin) {
        this.logInView.render(isLogin);
    };
    return LogInController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogInController);


/***/ }),

/***/ "./src/js/controllers/manageItemController.ts":
/*!****************************************************!*\
  !*** ./src/js/controllers/manageItemController.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_mangeItemView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/mangeItemView */ "./src/js/views/mangeItemView.ts");
/* harmony import */ var _validates_validates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validates/validates */ "./src/js/validates/validates.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/common */ "./src/js/utils/common.ts");



var ManageItemController = /** @class */ (function () {
    function ManageItemController(vendingMachine) {
        this.vendingMachine = vendingMachine;
        this.manageItemView = new _views_mangeItemView__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.bindEvents();
    }
    ManageItemController.prototype.bindEvents = function () {
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.onCustomEvent)('ADD_ITEM', this.handleAddItem.bind(this));
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.onCustomEvent)('TABLE_ITEM_CHANGE', this.handleTableItemChange.bind(this));
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.onCustomEvent)('TABLE_ITEM_DELETE', this.handleTableItemDelete.bind(this));
    };
    ManageItemController.prototype.handleAddItem = function (event) {
        try {
            var newItem = event.detail;
            var items = this.vendingMachine.getItems();
            (0,_validates_validates__WEBPACK_IMPORTED_MODULE_1__.checkDuplicatedItem)(items, newItem, null);
            this.vendingMachine.addItem(newItem);
            this.manageItemView.clearInput();
            this.manageItemView.repaintItemTable(this.vendingMachine.getItems());
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.showSnackBar)('상품이 추가되었습니다.');
        }
        catch (error) {
            alert(error.message);
        }
    };
    ManageItemController.prototype.handleTableItemChange = function (event) {
        try {
            var _a = event.detail, item = _a.item, targetRowIndex = _a.targetRowIndex, $targetTableRow = _a.$targetTableRow;
            var items = this.vendingMachine.getItems();
            (0,_validates_validates__WEBPACK_IMPORTED_MODULE_1__.checkDuplicatedItem)(items, item, targetRowIndex);
            this.vendingMachine.changeItem(targetRowIndex, item);
            this.manageItemView.repaintItemTableRow($targetTableRow, item);
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.showSnackBar)('상품이 수정되었습니다.');
        }
        catch (error) {
            alert(error.message);
        }
    };
    ManageItemController.prototype.handleTableItemDelete = function (event) {
        var item = event.detail.item;
        this.vendingMachine.deleteItem(item);
    };
    ManageItemController.prototype.loadPage = function (isLogin) {
        var itemList = this.vendingMachine.getItems();
        this.manageItemView.render(isLogin, itemList);
    };
    return ManageItemController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManageItemController);


/***/ }),

/***/ "./src/js/controllers/purchaseItemController.ts":
/*!******************************************************!*\
  !*** ./src/js/controllers/purchaseItemController.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_purchaseItemView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/purchaseItemView */ "./src/js/views/purchaseItemView.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common */ "./src/js/utils/common.ts");


var PurchaseItemController = /** @class */ (function () {
    function PurchaseItemController(vendingMachine) {
        this.vendingMachine = vendingMachine;
        this.purchaseItemView = new _views_purchaseItemView__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.bindEvents();
    }
    PurchaseItemController.prototype.bindEvents = function () {
        var _this = this;
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.onCustomEvent)('PURCHASE_MONEY_INPUT', this.handlePurchaseMoneyInput.bind(this));
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.onCustomEvent)('RETURN_MONEY', function () {
            try {
                _this.vendingMachine.giveChange();
                (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.showSnackBar)('잔돈이 반환되었습니다.');
                _this.loadPage();
            }
            catch (error) {
                alert(error.message);
            }
        });
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.onCustomEvent)('PURCHASE_ITEM', function (event) {
            try {
                var itemName = event.detail.itemName;
                _this.vendingMachine.buyItem(itemName);
                (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.showSnackBar)('상품을 구매하였습니다.');
                _this.loadPage();
            }
            catch (error) {
                alert(error.message);
            }
        });
    };
    PurchaseItemController.prototype.handlePurchaseMoneyInput = function (event) {
        var inputMoney = event.detail.inputMoney;
        this.vendingMachine.chargePurchaseInputMoney(inputMoney);
    };
    PurchaseItemController.prototype.loadPage = function () {
        var items = this.vendingMachine.getItems();
        var inputMoney = this.vendingMachine.getPurchaseInputMoney();
        var coins = this.vendingMachine.getChange();
        this.purchaseItemView.render(items, coins, inputMoney);
    };
    return PurchaseItemController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PurchaseItemController);


/***/ }),

/***/ "./src/js/controllers/signUpController.ts":
/*!************************************************!*\
  !*** ./src/js/controllers/signUpController.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_signUpView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/signUpView */ "./src/js/views/signUpView.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common */ "./src/js/utils/common.ts");


var SignUpController = /** @class */ (function () {
    function SignUpController() {
        this.signUpView = new _views_signUpView__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.bindEvents();
    }
    SignUpController.prototype.bindEvents = function () {
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.onCustomEvent)('SIGN_UP', this.handleSignUp.bind(this));
    };
    SignUpController.prototype.handleSignUp = function (event) {
        var _a = event.detail, email = _a.email, name = _a.name, password = _a.password, targetId = _a.targetId;
        var data = JSON.stringify({
            email: email,
            name: name,
            password: password
        });
        fetch('https://json-vendingmachine-server.herokuapp.com/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: data
        })
            .then(function (res) {
            return res.json();
        })
            .then(function (result) {
            var accessToken = result.accessToken;
            if (!accessToken) {
                throw new Error(result);
            }
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.emitCustomEvent)('ROUTE_CHANGE', { detail: { targetId: targetId } });
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.showSnackBar)('회원가입 되었습니다.');
        })["catch"](function (error) { return alert(error.message); });
    };
    SignUpController.prototype.loadPage = function (isLogin) {
        this.signUpView.render(isLogin);
    };
    return SignUpController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpController);


/***/ }),

/***/ "./src/js/router/Router.ts":
/*!*********************************!*\
  !*** ./src/js/router/Router.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common */ "./src/js/utils/common.ts");
/* harmony import */ var _views_mainView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/mainView */ "./src/js/views/mainView.ts");
/* harmony import */ var _templates_initialTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/initialTemplate */ "./src/js/templates/initialTemplate.ts");




var Router = /** @class */ (function () {
    function Router(manageItemController, chargeMoneyController, purchaseItemController, logInController, signUpController, changeUserInfoController) {
        this.mainView = new _views_mainView__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.manageItemController = manageItemController;
        this.chargeMoneyController = chargeMoneyController;
        this.purchaseItemController = purchaseItemController;
        this.logInController = logInController;
        this.signUpController = signUpController;
        this.changeUserInfoController = changeUserInfoController;
        this.$header = (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.$)('.header');
        this.bindEvents();
        this.loadRoutePage();
    }
    Router.prototype.bindEvents = function () {
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.onCustomEvent)('ROUTE_CHANGE', this.handleRouteChange.bind(this));
        window.addEventListener('popstate', this.loadRoutePage.bind(this));
    };
    Router.prototype.handleRouteChange = function (event) {
        var targetId = event.detail.targetId;
        if (targetId === _constants_constants__WEBPACK_IMPORTED_MODULE_0__.SELECTOR.ID_STRING.ITEM_MANGE_TAB) {
            window.history.pushState(null, null, _constants_constants__WEBPACK_IMPORTED_MODULE_0__.URL_HASH.MANAGE_ITEM);
        }
        if (targetId === _constants_constants__WEBPACK_IMPORTED_MODULE_0__.SELECTOR.ID_STRING.MONEY_CHARGE_TAB) {
            window.history.pushState(null, null, _constants_constants__WEBPACK_IMPORTED_MODULE_0__.URL_HASH.CHARGE_MONEY);
        }
        if (targetId === _constants_constants__WEBPACK_IMPORTED_MODULE_0__.SELECTOR.ID_STRING.ITEM_PURCHASE_TAB) {
            window.history.pushState(null, null, _constants_constants__WEBPACK_IMPORTED_MODULE_0__.URL_HASH.PURCHASE_ITEM);
        }
        if (targetId === 'login-button') {
            window.history.pushState(null, null, '#login');
        }
        if (targetId === 'go-to-signup') {
            window.history.pushState(null, null, '#signup');
        }
        if (targetId === 'login-form') {
            window.history.pushState(null, null, '#purchaseItem');
        }
        if (targetId === 'signup-form') {
            window.history.pushState(null, null, '#login');
        }
        if (targetId === 'change-form') {
            window.history.pushState(null, null, '#purchaseItem');
        }
        if (targetId === 'change-user-info') {
            window.history.pushState(null, null, '#changeUserInfo');
        }
        if (targetId === 'logout') {
            window.history.pushState(null, null, '#purchaseItem');
        }
        this.loadRoutePage();
    };
    Router.prototype.loadRoutePage = function () {
        var hash = window.location.hash;
        var isLogin = sessionStorage.getItem('isLogIn') === 'true' ? true : false;
        var user = JSON.parse(sessionStorage.getItem('user'));
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.$)('#header-button-container').replaceChildren();
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.$)('#header-button-container').insertAdjacentHTML('beforeend', (0,_templates_initialTemplate__WEBPACK_IMPORTED_MODULE_3__.headerButtonTemplate)(isLogin));
        if (isLogin) {
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.$)('#user-name').textContent = user.name[0];
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.$)('.nav-container').classList.remove('display-none');
        }
        else {
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.$)('.nav-container').classList.add('display-none');
        }
        if (!hash) {
            this.$header.classList.remove('display-none');
            this.manageItemController.loadPage(isLogin);
            this.mainView.changeButtonColor(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.SELECTOR.ID_STRING.ITEM_MANGE_TAB);
            return;
        }
        if (hash === _constants_constants__WEBPACK_IMPORTED_MODULE_0__.URL_HASH.MANAGE_ITEM) {
            this.$header.classList.remove('display-none');
            this.manageItemController.loadPage(isLogin);
            this.mainView.changeButtonColor(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.SELECTOR.ID_STRING.ITEM_MANGE_TAB);
            return;
        }
        if (hash === _constants_constants__WEBPACK_IMPORTED_MODULE_0__.URL_HASH.CHARGE_MONEY) {
            this.$header.classList.remove('display-none');
            this.chargeMoneyController.loadPage(isLogin);
            this.mainView.changeButtonColor(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.SELECTOR.ID_STRING.MONEY_CHARGE_TAB);
            return;
        }
        if (hash === _constants_constants__WEBPACK_IMPORTED_MODULE_0__.URL_HASH.PURCHASE_ITEM) {
            this.$header.classList.remove('display-none');
            this.purchaseItemController.loadPage();
            this.mainView.changeButtonColor(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.SELECTOR.ID_STRING.ITEM_PURCHASE_TAB);
            return;
        }
        if (hash === _constants_constants__WEBPACK_IMPORTED_MODULE_0__.URL_HASH.LOG_IN) {
            this.$header.classList.add('display-none');
            this.logInController.loadPage(isLogin);
            return;
        }
        if (hash === _constants_constants__WEBPACK_IMPORTED_MODULE_0__.URL_HASH.SIGN_UP) {
            this.$header.classList.add('display-none');
            this.signUpController.loadPage(isLogin);
        }
        if (hash === '#changeUserInfo') {
            this.$header.classList.add('display-none');
            this.changeUserInfoController.loadPage(isLogin);
        }
    };
    return Router;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);


/***/ }),

/***/ "./src/js/templates/changeUserInfoTemplate.ts":
/*!****************************************************!*\
  !*** ./src/js/templates/changeUserInfoTemplate.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeUserInfoTemplate": () => (/* binding */ changeUserInfoTemplate)
/* harmony export */ });
var changeUserInfoTemplate = function (isLogin, user) {
    return isLogin
        ? "\n    <h1 class=\"title\">\uD68C\uC6D0 \uC815\uBCF4 \uC218\uC815</h1>\n    <form id=\"change-form\">\n      <label>\uC774\uBA54\uC77C</label>\n      <input id=\"change-email-input\" required value=".concat(user.email, " disabled/>\n      <label>\uC774\uB984</label>\n      <input id=\"change-name-input\" placeholder=\"\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694\" required/>\n      <label>\uBE44\uBC00\uBC88\uD638</label>\n      <input id=\"change-password-input\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" type=\"password\" required/>\n      <label>\uBE44\uBC00\uBC88\uD638 \uD655\uC778</label>\n      <input id=\"change-password-check-input\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" type=\"password\" required/>  \n      <button>\uD655\uC778</button>\n    </form>")
        : "<div class=\"permission-info\">\uC811\uADFC \uAD8C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</div>";
};


/***/ }),

/***/ "./src/js/templates/chareMoneyTemplate.ts":
/*!************************************************!*\
  !*** ./src/js/templates/chareMoneyTemplate.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sectionTemplate": () => (/* binding */ sectionTemplate),
/* harmony export */   "chargeMoneyTemplate": () => (/* binding */ chargeMoneyTemplate)
/* harmony export */ });
/* harmony import */ var _utils_viewTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/viewTemplate */ "./src/js/utils/viewTemplate.ts");

var sectionTemplate = {
    inputContainer: function (currentMoney) {
        return "\n    <section class=\"input-container\">\n      <h2 hidden>\uC794\uB3C8 \uCDA9\uC804</h2>\n      <form id=\"charge-money-form\">\n      <label>\uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD560 \uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.</label>\n      <div>\n       <input class=\"charge-money-input\" placeholder=\"\uAE08\uC561\" type=\"number\" />\n        <button class=\"submit-button\">\uCDA9\uC804</button>\n       </div>\n      </form>\n      <p>\uD604\uC7AC \uBCF4\uC720 \uAE08\uC561: <span id=\"current-money\">".concat(currentMoney, "</span>\uC6D0</p>\n    </section>\n    ");
    },
    tableContainer: function (coins) {
        return "\n    <section class=\"table-container\">\n      <h2>\uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD55C \uB3D9\uC804</h2>\n      <table class=\"coin-table\">\n      ".concat(this.coinTableContent(coins), "\n      </table>\n    </section>");
    },
    coinTableRowLayout: function (coinKey, coinNumber) {
        return "\n    <tr>\n      <td>".concat(coinKey, "\uC6D0</td>\n      <td>").concat(coinNumber, "\uAC1C</td>\n    </tr>\n    ");
    },
    coinTableContent: function (coins) {
        return "\n    <tr>\n      <th>\uB3D9\uC804</th>\n      <th>\uAC1C\uC218</th>\n    </tr>\n    ".concat((0,_utils_viewTemplate__WEBPACK_IMPORTED_MODULE_0__.generateCoinTableTemplate)(coins, this.coinTableRowLayout), "\n    ");
    }
};
var chargeMoneyTemplate = function (isLogin, coins, currentMoney) {
    return isLogin
        ? "\n  ".concat(sectionTemplate.inputContainer(currentMoney), "\n  ").concat(sectionTemplate.tableContainer(coins), "\n  ")
        : "<div class=\"permission-info\">\uC811\uADFC \uAD8C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</div>";
};


/***/ }),

/***/ "./src/js/templates/initialTemplate.ts":
/*!*********************************************!*\
  !*** ./src/js/templates/initialTemplate.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialTemplate": () => (/* binding */ initialTemplate),
/* harmony export */   "headerButtonTemplate": () => (/* binding */ headerButtonTemplate)
/* harmony export */ });
var initialTemplate = "\n  <div class=\"header\">\n  <div id=\"header-button-container\"><button id=\"login-button\">\uB85C\uADF8\uC778</button></div>\n    <h1>\uD83C\uDF7F \uC790\uD310\uAE30 \uD83C\uDF7F</h1>\n    <div class=\"nav-container\">\n      <button id=\"item-manage-tab\" class=\"nav-button nav-button-clicked\">\uC0C1\uD488 \uAD00\uB9AC</button>\n      <button id=\"money-charge-tab\" class=\"nav-button\">\uC794\uB3C8 \uCDA9\uC804</button>\n      <button id=\"item-purchase-tab\" class=\"nav-button\">\uC0C1\uD488 \uAD6C\uB9E4</button>\n    </div>\n  </div>\n  <div id=\"content\"></div>\n  <div id=\"snackbar\"></div>\n";
var headerButtonTemplate = function (isLogIn) {
    return isLogIn
        ? "\n    <div id=\"user-container\">\n      <button id=\"user-badge\"><span id=\"user-name\"></span></button>\n      <ul id=\"user-dropbox\" class=\"display-none\">\n       <li id=\"change-user-info\">\uC815\uBCF4 \uC218\uC815</li>\n       <li id=\"logout\">\uB85C\uADF8\uC544\uC6C3</li>\n      </ul>\n    </div>\n        "
        : "<button id=\"login-button\">\uB85C\uADF8\uC778</button>";
};


/***/ }),

/***/ "./src/js/templates/logInTemplate.ts":
/*!*******************************************!*\
  !*** ./src/js/templates/logInTemplate.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logInTemplate": () => (/* binding */ logInTemplate)
/* harmony export */ });
var logInTemplate = function (isLogin) {
    return isLogin
        ? "<div class=\"permission-info\">\uC811\uADFC \uAD8C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</div>"
        : "\n    <h1 class=\"title\">\uB85C\uADF8\uC778</h1>\n    <form id=\"login-form\">\n      <label>\uC774\uBA54\uC77C</label>\n      <input id=\"login-email-input\" class=\"login-input\" placeholder=\"woowacourse@gmail.com\" type=\"email\" required/>\n      <label>\uBE44\uBC00\uBC88\uD638</label>\n      <input id=\"login-password-input\" class=\"login-input\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" type=\"password\" required/>\n      <button>\uD655\uC778</button>\n    </form>\n    <div class=\"login-to-signup\">\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694? <span id=\"go-to-signup\">\uD68C\uC6D0\uAC00\uC785</span></div>\n    ";
};


/***/ }),

/***/ "./src/js/templates/manageItemTemplate.ts":
/*!************************************************!*\
  !*** ./src/js/templates/manageItemTemplate.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sectionTemplate": () => (/* binding */ sectionTemplate),
/* harmony export */   "manageItemTemplate": () => (/* binding */ manageItemTemplate)
/* harmony export */ });
var sectionTemplate = {
    inputContainer: function () {
        return "\n      <section class=\"input-container\">\n      <h2 hidden>\uC0C1\uD488 \uC815\uBCF4 \uC785\uB825</h2>\n      <form id=\"add-item-form\">\n        <label>\uCD94\uAC00\uD560 \uC0C1\uD488 \uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.</label>\n        <div>\n          <input id=\"add-item-name\" class=\"add-item-input\" placeholder=\"\uC0C1\uD488\uBA85\" />\n          <input id=\"add-item-price\" class=\"add-item-input\" placeholder=\"\uAC00\uACA9\" type=\"number\"/>\n          <input id=\"add-item-quantity\" class=\"add-item-input\" placeholder=\"\uC218\uB7C9\" type=\"number\"/>\n          <button class=\"submit-button\">\uCD94\uAC00</button>\n        </div>\n      </form>\n      </section>\n    ";
    },
    tableContainer: function (items) {
        var _this = this;
        return "\n    <section class=\"table-container\">\n      <h2>\uC0C1\uD488 \uD604\uD669</h2>\n      <table class=\"item-table\">\n        <tr>\n          <th>\uC0C1\uD488\uBA85</th>\n          <th>\uAC00\uACA9</th>\n          <th>\uC218\uB7C9</th>\n          <th></th>\n        </tr>\n         ".concat(items.map(function (item) { return _this.normalTableContainer(item); }).join(''), "\n      </table>\n    </section>\n    ");
    },
    normalTableContainer: function (item) {
        return "\n    <tr>\n      <td class=\"table-item-name\">".concat(item.name, "</td>\n      <td class=\"table-item-price\">").concat(item.price, "</td>\n      <td class=\"table-item-quantity\">").concat(item.quantity, "</td>\n      <td class=\"item-table-button-container\">\n        <button class=\"item-table-change-button\">\uC218\uC815</button>\n        <button class=\"item-table-delete-button\">\uC0AD\uC81C</button>\n      </td>\n    </tr>\n    ");
    },
    changeTableContainer: function (item) {
        return "\n    <tr>\n      <td><input class=\"table-item-input table-item-input-name\" value=\"".concat(item.name, "\" placeholder=\"\uC0C1\uD488\uBA85\"></input></td>\n      <td><input class=\"table-item-input table-item-input-price\" value=\"").concat(item.price, "\" placeholder=\"\uAC00\uACA9\" type=\"number\"></input></td>\n      <td><input class=\"table-item-input table-item-input-quantity\" value=\"").concat(item.quantity, "\" placeholder=\"\uC218\uB7C9\" type=\"number\"></input></td>\n      <td>\n       <button class=\"item-table-confirm-button\">\uD655\uC778</button>\n      </td>\n    </tr>\n");
    }
};
var manageItemTemplate = function (isLogin, items) {
    return isLogin
        ? "\n    ".concat(sectionTemplate.inputContainer(), "\n    ").concat(sectionTemplate.tableContainer(items), "\n    ")
        : "<div class=\"permission-info\">\uC811\uADFC \uAD8C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</div>";
};


/***/ }),

/***/ "./src/js/templates/purchaseItemTemplate.ts":
/*!**************************************************!*\
  !*** ./src/js/templates/purchaseItemTemplate.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "purchaseItemTemplate": () => (/* binding */ purchaseItemTemplate)
/* harmony export */ });
/* harmony import */ var _utils_viewTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/viewTemplate */ "./src/js/utils/viewTemplate.ts");

var sectionTemplate = {
    inputContainer: function (inputMoney) {
        return "\n    <section class=\"input-container\">\n      <h2 hidden>\uC0C1\uD488 \uAD6C\uB9E4</h2>\n      <form id=\"purchase-item-form\">\n        <label>\uC0C1\uD488\uC744 \uAD6C\uB9E4\uD560 \uAE08\uC561\uC744 \uD22C\uC785\uD574\uC8FC\uC138\uC694</label>\n        <div>\n          <input class=\"purchase-item-input\" placeholder=\"\uAE08\uC561\" type=\"number\"/>\n          <button class=\"submit-button\">\uCDA9\uC804</button>\n        </div>\n      </form>\n      <p>\uD22C\uC785\uD55C \uAE08\uC561: <span id=\"purchase-money-input\">".concat(inputMoney, "</span>\uC6D0</p>\n    </section>\n    ");
    },
    itemTableContainer: function (items) {
        return "\n    <section class=\"table-container\">\n      <h2>\uAD6C\uB9E4 \uAC00\uB2A5 \uC0C1\uD488 \uD604\uD669</h2>\n      <table class=\"item-table\">\n        <tr>\n          <th>\uC0C1\uD488\uBA85</th>\n          <th>\uAC00\uACA9</th>\n          <th>\uC218\uB7C9</th>\n          <th>\uAD6C\uB9E4</th>\n        </tr>\n        ".concat(items
            .map(function (item) {
            return "\n          <tr>\n            <td class=\"table-item-input-name\">".concat(item.name, "</td>\n            <td>").concat(item.price, "</td>\n            <td>").concat(item.quantity, "</td>\n            <td>\n              <button class=\"item-table-purchase-button\">\uAD6C\uB9E4</button>\n            </td>\n          </tr>");
        })
            .join(''), "\n      </table>\n    </section>\n    ");
    },
    coinTableRowLayout: function (coinKey, coinNumber) {
        return "\n    <tr>\n      <td>".concat(coinKey, "\uC6D0</td>\n      <td>").concat(coinNumber, "\uAC1C</td>\n    </tr>\n    ");
    },
    coinTableContainer: function (coins) {
        return "\n    <section class=\"table-container\">\n      <h2>\uC794\uB3C8 \uBC18\uD658</h2>\n      <table class=\"coin-table\">\n          <tr>\n            <th>\uB3D9\uC804</th>\n            <th>\uAC1C\uC218</th>\n          </tr>\n          ".concat((0,_utils_viewTemplate__WEBPACK_IMPORTED_MODULE_0__.generateCoinTableTemplate)(coins, this.coinTableRowLayout), "\n        </table>\n      <button class=\"return-money-button\">\uBC18\uD658</button>\n    </section>\n    ");
    }
};
var purchaseItemTemplate = function (items, coins, inputMoney) { return "\n  ".concat(sectionTemplate.inputContainer(inputMoney), "\n  ").concat(sectionTemplate.itemTableContainer(items), "\n  ").concat(sectionTemplate.coinTableContainer(coins), "\n"); };


/***/ }),

/***/ "./src/js/templates/signUpTemplate.ts":
/*!********************************************!*\
  !*** ./src/js/templates/signUpTemplate.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signUpTemplate": () => (/* binding */ signUpTemplate)
/* harmony export */ });
var signUpTemplate = function (isLogin) {
    return isLogin
        ? "<div class=\"permission-info\">\uC774\uBBF8 \uB85C\uADF8\uC778 \uB418\uC5B4\uC788\uC2B5\uB2C8\uB2E4.</div>"
        : "\n    <h1 class=\"title\">\uD68C\uC6D0\uAC00\uC785</h1>\n    <form id=\"signup-form\">\n      <label>\uC774\uBA54\uC77C</label>\n      <input id=\"signup-email-input\" placeholder=\"\uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" type=\"email\" required/>\n      <label>\uC774\uB984</label>\n      <input id=\"signup-name-input\" placeholder=\"\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694\" required minlength=\"2\" maxlength=\"6\"/>\n      <label>\uBE44\uBC00\uBC88\uD638</label>\n      <input id=\"signup-password-input\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" type=\"password\" required/>\n      <label>\uBE44\uBC00\uBC88\uD638 \uD655\uC778</label>\n      <input id=\"signup-password-check-input\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" type=\"password\" required/>  \n      <button>\uD655\uC778</button>\n    </form>";
};


/***/ }),

/***/ "./src/js/utils/common.ts":
/*!********************************!*\
  !*** ./src/js/utils/common.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateRandom": () => (/* binding */ generateRandom),
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "$$": () => (/* binding */ $$),
/* harmony export */   "emitCustomEvent": () => (/* binding */ emitCustomEvent),
/* harmony export */   "onCustomEvent": () => (/* binding */ onCustomEvent),
/* harmony export */   "showSnackBar": () => (/* binding */ showSnackBar)
/* harmony export */ });
function generateRandom(max) {
    return Math.floor(Math.random() * (max + 1));
}
var $ = function (selector) { return document.querySelector(selector); };
var $$ = function (selector) { return document.querySelectorAll(selector); };
var emitCustomEvent = function (customEventName, detail) {
    window.dispatchEvent(new CustomEvent(customEventName, detail));
};
var onCustomEvent = function (customEventName, eventHandler) {
    window.addEventListener(customEventName, eventHandler);
};
var showSnackBar = function (message) {
    var $snackbar = document.querySelector('#snackbar');
    $snackbar.textContent = message;
    $snackbar.classList.toggle('show');
    setTimeout(function () {
        $snackbar.classList.toggle('show');
    }, 2000);
};


/***/ }),

/***/ "./src/js/utils/viewTemplate.ts":
/*!**************************************!*\
  !*** ./src/js/utils/viewTemplate.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateCoinTableTemplate": () => (/* binding */ generateCoinTableTemplate)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.ts");

var generateCoinTableTemplate = function (coins, coinTableRowLayout) {
    return Object.keys(coins)
        .map(function (coinKey) { return coinTableRowLayout(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.COINS[coinKey], coins[coinKey]); })
        .join('');
};


/***/ }),

/***/ "./src/js/validates/validates.ts":
/*!***************************************!*\
  !*** ./src/js/validates/validates.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateAddItemInput": () => (/* binding */ validateAddItemInput),
/* harmony export */   "validateInputOwnMoney": () => (/* binding */ validateInputOwnMoney),
/* harmony export */   "validateInputPurchaseMoney": () => (/* binding */ validateInputPurchaseMoney),
/* harmony export */   "checkDuplicatedItem": () => (/* binding */ checkDuplicatedItem),
/* harmony export */   "validateReturnChange": () => (/* binding */ validateReturnChange),
/* harmony export */   "checkPassword": () => (/* binding */ checkPassword)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.ts");

var validateAddItemInput = function (_a) {
    var name = _a.name, price = _a.price, quantity = _a.quantity;
    if (name.length === 0) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.ITEM_NAME_EMPTY_NAME);
    }
    if (name.length > _constants_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM.NAME.MAX_LENGTH) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.ITEM_NAME_OVER_MAX_LENGTH);
    }
    if (!Number.isInteger(price)) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.ITEM_PRICE_NOT_INTEGER);
    }
    if (price < _constants_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM.PRICE.MIN) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.ITEM_PRICE_UNDER_MIN);
    }
    if (price > _constants_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM.PRICE.MAX) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.ITEM_PRICE_OVER_MAX);
    }
    if (price % _constants_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM.PRICE.UNIT !== 0) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.ITEM_PRICE_INVALID_UNIT);
    }
    if (!Number.isInteger(quantity)) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.ITEM_QUANTITY_NOT_INTEGER);
    }
    if (quantity <= _constants_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM.QUANTITY.MIN) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.ITEM_QUANTITY_UNDER_MIN);
    }
    if (quantity > _constants_constants__WEBPACK_IMPORTED_MODULE_0__.ITEM.QUANTITY.MAX) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.ITEM_QUANTITY_OVER_MAX);
    }
};
var validateInputOwnMoney = function (inputMoney) {
    if (!Number.isInteger(inputMoney)) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.INPUT_MONEY_NOT_INTEGER);
    }
    if (inputMoney <= _constants_constants__WEBPACK_IMPORTED_MODULE_0__.OWN_MONEY.MIN) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.INPUT_MONEY_UNDER_MIN);
    }
    if (inputMoney > _constants_constants__WEBPACK_IMPORTED_MODULE_0__.OWN_MONEY.MAX) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.INPUT_MONEY_OVER_MAX);
    }
    if (inputMoney % _constants_constants__WEBPACK_IMPORTED_MODULE_0__.OWN_MONEY.UNIT !== 0) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.INPUT_MONEY_INVALID_UNIT);
    }
};
var validateInputPurchaseMoney = function (inputMoney) {
    if (!Number.isInteger(inputMoney)) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.INPUT_MONEY_NOT_INTEGER);
    }
    if (inputMoney <= _constants_constants__WEBPACK_IMPORTED_MODULE_0__.PURCHASE_MONEY.MIN) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.INPUT_MONEY_UNDER_MIN);
    }
    if (inputMoney > _constants_constants__WEBPACK_IMPORTED_MODULE_0__.PURCHASE_MONEY.MAX) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.INPUT_PURCHASE_MONEY_OVER_MAX);
    }
    if (inputMoney % _constants_constants__WEBPACK_IMPORTED_MODULE_0__.PURCHASE_MONEY.UNIT !== 0) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.INPUT_MONEY_INVALID_UNIT);
    }
};
var checkDuplicatedItem = function (items, newItem, targetIndex) {
    if (items.find(function (item, index) { return index !== targetIndex && item.name === newItem.name; })) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.ITEM_NAME_DUPLICATED);
    }
};
var validateReturnChange = function (purchaseMoney, ownMoney) {
    if (purchaseMoney === 0) {
        throw new Error('투입된 금액이 없습니다.');
    }
    if (ownMoney === 0) {
        throw new Error('자판기에 잔돈이 없습니다.');
    }
};
var checkPassword = function (password) {
    var Regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,16}$/;
    if (!Regex.test(password)) {
        throw new Error('영문, 숫자, 특수문자가 혼용된 8~16자의 비밀번호를 작성해주세요.');
    }
};


/***/ }),

/***/ "./src/js/vendingMachine/vendingMachine.ts":
/*!*************************************************!*\
  !*** ./src/js/vendingMachine/vendingMachine.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common */ "./src/js/utils/common.ts");
/* harmony import */ var _validates_validates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validates/validates */ "./src/js/validates/validates.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



var VendingMachine = /** @class */ (function () {
    function VendingMachine() {
        this.items = [];
        this.coins = { fiveHundred: 0, hundred: 0, fifty: 0, ten: 0 };
        this.change = { fiveHundred: 0, hundred: 0, fifty: 0, ten: 0 };
        this.currentOwnMoney = 0;
        this.purchaseInputMoney = 0;
    }
    VendingMachine.prototype.getItems = function () {
        return JSON.parse(JSON.stringify(this.items));
    };
    VendingMachine.prototype.setItems = function (newItems) {
        this.items = newItems;
    };
    VendingMachine.prototype.getCoins = function () {
        return __assign({}, this.coins);
    };
    VendingMachine.prototype.setCoins = function (newCoins) {
        this.coins = newCoins;
    };
    VendingMachine.prototype.getCurrentOwnMoney = function () {
        return this.currentOwnMoney;
    };
    VendingMachine.prototype.setCurrentOwnMoney = function (currentOwnMoney) {
        this.currentOwnMoney = currentOwnMoney;
    };
    VendingMachine.prototype.getPurchaseInputMoney = function () {
        return this.purchaseInputMoney;
    };
    VendingMachine.prototype.setPurchaseInputMoney = function (purchaseInputMoney) {
        this.purchaseInputMoney = purchaseInputMoney;
    };
    VendingMachine.prototype.getChange = function () {
        return __assign({}, this.change);
    };
    VendingMachine.prototype.setChange = function (change) {
        this.change = change;
    };
    VendingMachine.prototype.getTotalMoney = function (coins) {
        var totalMoney = 0;
        Object.keys(coins).forEach(function (coinKey) {
            totalMoney += coins[coinKey] * _constants_constants__WEBPACK_IMPORTED_MODULE_0__.COINS[coinKey];
        });
        return totalMoney;
    };
    VendingMachine.prototype.addItem = function (_a) {
        var name = _a.name, price = _a.price, quantity = _a.quantity;
        var newItems = __spreadArray(__spreadArray([], this.items, true), [{ name: name, price: price, quantity: quantity }], false);
        this.setItems(newItems);
    };
    VendingMachine.prototype.deleteItem = function (targetItem) {
        var newItems = this.getItems().filter(function (item) { return item.name !== targetItem.name; });
        this.setItems(newItems);
    };
    VendingMachine.prototype.changeItem = function (index, _a) {
        var name = _a.name, price = _a.price, quantity = _a.quantity;
        var newItems = this.getItems();
        newItems[index] = { name: name, price: price, quantity: quantity };
        this.setItems(newItems);
    };
    VendingMachine.prototype.generateRandomCoins = function (money) {
        var newCoins = this.getCoins();
        var restMoney = money;
        Object.keys(newCoins).forEach(function (key) {
            if (key === 'ten') {
                newCoins[key] += restMoney / _constants_constants__WEBPACK_IMPORTED_MODULE_0__.COINS[key];
                return;
            }
            var randomNumber = (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.generateRandom)(Math.floor(restMoney / _constants_constants__WEBPACK_IMPORTED_MODULE_0__.COINS[key]));
            restMoney -= randomNumber * _constants_constants__WEBPACK_IMPORTED_MODULE_0__.COINS[key];
            newCoins[key] += randomNumber;
        });
        return newCoins;
    };
    VendingMachine.prototype.chargeOwnMoney = function (money) {
        var newCoins = this.generateRandomCoins(money);
        var newMoney = this.getCurrentOwnMoney() + money;
        this.setCoins(newCoins);
        this.setCurrentOwnMoney(newMoney);
    };
    VendingMachine.prototype.chargePurchaseInputMoney = function (inputMoney) {
        var newMoney = this.getPurchaseInputMoney() + inputMoney;
        this.setPurchaseInputMoney(newMoney);
    };
    VendingMachine.prototype.giveChange = function () {
        var purchaseMoney = this.getPurchaseInputMoney();
        var ownMoney = this.getCurrentOwnMoney();
        var coins = this.getCoins();
        var change = this.getChange();
        (0,_validates_validates__WEBPACK_IMPORTED_MODULE_2__.validateReturnChange)(purchaseMoney, ownMoney);
        Object.keys(coins).forEach(function (key) {
            var coinCount = Math.floor(purchaseMoney / _constants_constants__WEBPACK_IMPORTED_MODULE_0__.COINS[key]);
            if (coins[key] < coinCount) {
                coinCount = coins[key];
            }
            if (ownMoney >= coinCount * _constants_constants__WEBPACK_IMPORTED_MODULE_0__.COINS[key]) {
                coins[key] -= coinCount;
                change[key] = coinCount;
                purchaseMoney -= coinCount * _constants_constants__WEBPACK_IMPORTED_MODULE_0__.COINS[key];
                ownMoney -= coinCount * _constants_constants__WEBPACK_IMPORTED_MODULE_0__.COINS[key];
            }
        });
        this.setCoins(coins);
        this.setPurchaseInputMoney(purchaseMoney);
        this.setChange(change);
        this.setCurrentOwnMoney(ownMoney);
    };
    VendingMachine.prototype.buyItem = function (itemName) {
        var _this = this;
        var items = this.getItems();
        var newItems = items.map(function (item) {
            if (item.name === itemName) {
                var newMoney = _this.getPurchaseInputMoney() - item.price;
                if (item.quantity === 0) {
                    throw new Error('구매할 수 있는 상품의 수량이 남아있지 않습니다.');
                }
                if (newMoney < 0) {
                    throw new Error('투입된 금액이 부족합니다.');
                }
                item.quantity -= 1;
                _this.setPurchaseInputMoney(newMoney);
                _this.chargeOwnMoney(item.price);
                return item;
            }
            return item;
        });
        this.setItems(newItems);
    };
    return VendingMachine;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VendingMachine);


/***/ }),

/***/ "./src/js/views/changeUserInfoView.ts":
/*!********************************************!*\
  !*** ./src/js/views/changeUserInfoView.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/js/utils/common.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.ts");
/* harmony import */ var _templates_changeUserInfoTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/changeUserInfoTemplate */ "./src/js/templates/changeUserInfoTemplate.ts");



var ChangeUserInfoView = /** @class */ (function () {
    function ChangeUserInfoView() {
        this.$content = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTOR.ID.CONTENT);
    }
    ChangeUserInfoView.prototype.handleSubmitChangeForm = function (event) {
        try {
            event.preventDefault();
            var targetId = event.target.id;
            var name_1 = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)('#change-name-input').value;
            var password = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)('#change-password-input').value;
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.emitCustomEvent)('CHANGE_USER_INFO', { detail: { name: name_1, password: password, targetId: targetId } });
        }
        catch (error) {
            alert(error.message);
        }
    };
    ChangeUserInfoView.prototype.render = function (isLogin) {
        var user = JSON.parse(sessionStorage.getItem('user'));
        this.$content.replaceChildren();
        this.$content.insertAdjacentHTML('beforeend', (0,_templates_changeUserInfoTemplate__WEBPACK_IMPORTED_MODULE_2__.changeUserInfoTemplate)(isLogin, user));
        if (isLogin) {
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)('#change-form').addEventListener('submit', this.handleSubmitChangeForm.bind(this));
        }
    };
    return ChangeUserInfoView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangeUserInfoView);


/***/ }),

/***/ "./src/js/views/chargeMoneyView.ts":
/*!*****************************************!*\
  !*** ./src/js/views/chargeMoneyView.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/js/utils/common.ts");
/* harmony import */ var _templates_chareMoneyTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/chareMoneyTemplate */ "./src/js/templates/chareMoneyTemplate.ts");
/* harmony import */ var _validates_validates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validates/validates */ "./src/js/validates/validates.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.ts");




var ChargeMoneyView = /** @class */ (function () {
    function ChargeMoneyView() {
        this.$content = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.ID.CONTENT);
    }
    ChargeMoneyView.prototype.bindEvents = function () {
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.ID.CHARGE_MONEY_FORM).addEventListener('submit', this.handleSubmitChargeMoney.bind(this));
    };
    ChargeMoneyView.prototype.handleSubmitChargeMoney = function () {
        try {
            var inputMoney = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.CLASS.CHARGE_MONEY_INPUT).valueAsNumber;
            (0,_validates_validates__WEBPACK_IMPORTED_MODULE_2__.validateInputOwnMoney)(inputMoney);
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.emitCustomEvent)('CHARGE_MONEY', { detail: { inputMoney: inputMoney } });
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.showSnackBar)('잔돈이 충전되었습니다.');
        }
        catch (error) {
            alert(error.message);
        }
    };
    ChargeMoneyView.prototype.render = function (isLogin, coins, totalMoney) {
        this.$content.replaceChildren();
        this.$content.insertAdjacentHTML('beforeend', (0,_templates_chareMoneyTemplate__WEBPACK_IMPORTED_MODULE_1__.chargeMoneyTemplate)(isLogin, coins, totalMoney));
        if (isLogin) {
            this.bindEvents();
        }
    };
    ChargeMoneyView.prototype.repaintCoinsTable = function (coins) {
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.CLASS.COIN_TABLE).replaceChildren();
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.CLASS.COIN_TABLE).insertAdjacentHTML('beforeend', _templates_chareMoneyTemplate__WEBPACK_IMPORTED_MODULE_1__.sectionTemplate.coinTableContent(coins));
    };
    ChargeMoneyView.prototype.clearInput = function () {
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.CLASS.CHARGE_MONEY_INPUT).value = '';
    };
    return ChargeMoneyView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChargeMoneyView);


/***/ }),

/***/ "./src/js/views/logInView.ts":
/*!***********************************!*\
  !*** ./src/js/views/logInView.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/js/utils/common.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.ts");
/* harmony import */ var _templates_logInTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/logInTemplate */ "./src/js/templates/logInTemplate.ts");
/* harmony import */ var _validates_validates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validates/validates */ "./src/js/validates/validates.ts");




var LogInView = /** @class */ (function () {
    function LogInView() {
        this.$content = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTOR.ID.CONTENT);
    }
    LogInView.prototype.handleSubmitLogInForm = function (event) {
        try {
            event.preventDefault();
            var targetId = event.target.id;
            var email = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)('#login-email-input').value;
            var password = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)('#login-password-input').value;
            (0,_validates_validates__WEBPACK_IMPORTED_MODULE_3__.checkPassword)(password);
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.emitCustomEvent)('LOG_IN', { detail: { email: email, password: password, targetId: targetId } });
        }
        catch (error) {
            alert(error.message);
        }
    };
    LogInView.prototype.handleClickGotoSignUpButton = function (event) {
        var targetId = event.target.id;
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.emitCustomEvent)('ROUTE_CHANGE', { detail: { targetId: targetId } });
    };
    LogInView.prototype.render = function (isLogin) {
        this.$content.replaceChildren();
        this.$content.insertAdjacentHTML('beforeend', (0,_templates_logInTemplate__WEBPACK_IMPORTED_MODULE_2__.logInTemplate)(isLogin));
        if (!isLogin) {
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)('#login-form').addEventListener('submit', this.handleSubmitLogInForm.bind(this));
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)('#go-to-signup').addEventListener('click', this.handleClickGotoSignUpButton);
        }
    };
    return LogInView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogInView);


/***/ }),

/***/ "./src/js/views/mainView.ts":
/*!**********************************!*\
  !*** ./src/js/views/mainView.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/js/utils/common.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.ts");
/* harmony import */ var _templates_initialTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/initialTemplate */ "./src/js/templates/initialTemplate.ts");



var MainView = /** @class */ (function () {
    function MainView() {
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTOR.CLASS.NAV_CONTAINER).addEventListener('click', this.handleClickNavButton.bind(this));
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)('#header-button-container').addEventListener('click', this.handleClickLoginButton);
    }
    MainView.prototype.handleClickNavButton = function (event) {
        var targetId = event.target.id;
        this.changeButtonColor(targetId);
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.emitCustomEvent)('ROUTE_CHANGE', { detail: { targetId: targetId } });
    };
    MainView.prototype.handleClickLoginButton = function (event) {
        var targetId = event.target.id;
        if (targetId === 'login-button') {
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.emitCustomEvent)('ROUTE_CHANGE', { detail: { targetId: targetId } });
        }
        if (targetId === 'user-badge') {
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)('#user-dropbox').classList.toggle('display-none');
        }
        if (targetId === 'user-name') {
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)('#user-dropbox').classList.toggle('display-none');
        }
        if (targetId === 'change-user-info') {
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.emitCustomEvent)('ROUTE_CHANGE', { detail: { targetId: targetId } });
        }
        if (targetId === 'logout') {
            if (window.confirm('로그아웃하시겠습니까?')) {
                sessionStorage.removeItem('jwt-token');
                sessionStorage.removeItem('isLogIn');
                sessionStorage.removeItem('user');
                (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.emitCustomEvent)('ROUTE_CHANGE', { detail: { targetId: targetId } });
            }
        }
    };
    MainView.prototype.changeButtonColor = function (targetButtonId) {
        var $navButtons = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$$)(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTOR.CLASS.NAV_BUTTON);
        $navButtons.forEach(function ($navButton) {
            return $navButton.id === targetButtonId
                ? $navButton.classList.add(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTOR.CLASS_STRING.NAV_BUTTON_CLICKED)
                : $navButton.classList.remove(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTOR.CLASS_STRING.NAV_BUTTON_CLICKED);
        });
    };
    MainView.prototype.render = function () {
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTOR.ID.APP).replaceChildren();
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTOR.ID.APP).insertAdjacentHTML('beforeend', _templates_initialTemplate__WEBPACK_IMPORTED_MODULE_2__.initialTemplate);
    };
    return MainView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainView);


/***/ }),

/***/ "./src/js/views/mangeItemView.ts":
/*!***************************************!*\
  !*** ./src/js/views/mangeItemView.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/js/utils/common.ts");
/* harmony import */ var _templates_manageItemTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/manageItemTemplate */ "./src/js/templates/manageItemTemplate.ts");
/* harmony import */ var _validates_validates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validates/validates */ "./src/js/validates/validates.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.ts");




var ManageItemView = /** @class */ (function () {
    function ManageItemView() {
        this.$content = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.ID.CONTENT);
    }
    ManageItemView.prototype.bindSubmitEvent = function () {
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.ID.ADD_ITEM_FORM).addEventListener('submit', this.handleSubmitAddItem.bind(this));
    };
    ManageItemView.prototype.bindDeleteClickEvents = function () {
        var _this = this;
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$$)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.CLASS.ITEM_TABLE_DELETE_BUTTON).forEach(function (button) {
            return _this.bindTargetDeleteClickEvent(button);
        });
    };
    ManageItemView.prototype.bindChangeClickEvents = function () {
        var _this = this;
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$$)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.CLASS.ITEM_TABLE_CHANGE_BUTTON).forEach(function (button) {
            _this.bindTargetChangeClickEvent(button);
        });
    };
    ManageItemView.prototype.bindTargetChangeClickEvent = function ($targetButton) {
        var _this = this;
        $targetButton.addEventListener('click', function () {
            var $targetTableRow = $targetButton.closest('tr');
            var item = _this.getItemFromTargetTableRow($targetTableRow);
            $targetTableRow.replaceChildren();
            $targetTableRow.insertAdjacentHTML('beforeEnd', _templates_manageItemTemplate__WEBPACK_IMPORTED_MODULE_1__.sectionTemplate.changeTableContainer(item));
            _this.bindSaveClickEvent($targetTableRow);
        });
    };
    ManageItemView.prototype.bindTargetDeleteClickEvent = function ($targetButton) {
        var _this = this;
        $targetButton.addEventListener('click', function () {
            var $targetTableRow = $targetButton.closest('tr');
            var item = _this.getItemFromTargetTableRow($targetTableRow);
            if (window.confirm(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.CONFIRM_MESSAGE.DELETE)) {
                _this.handleTableItemDelete(item);
                $targetTableRow.remove();
                (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.showSnackBar)('상품이 삭제되었습니다.');
            }
        });
    };
    ManageItemView.prototype.bindSaveClickEvent = function ($targetTableRow) {
        var _this = this;
        var $confirmButton = $targetTableRow.getElementsByClassName(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.CLASS_STRING.ITEM_TABLE_CONFIRM_BUTTON)[0];
        $confirmButton.addEventListener('click', function () {
            try {
                var targetRowIndex = $targetTableRow.rowIndex - 1;
                var item = _this.getItemFromInputValue($targetTableRow);
                (0,_validates_validates__WEBPACK_IMPORTED_MODULE_2__.validateAddItemInput)(item);
                _this.handleTableItemChange(item, targetRowIndex, $targetTableRow);
            }
            catch (error) {
                alert(error.message);
            }
        });
    };
    ManageItemView.prototype.handleSubmitAddItem = function (event) {
        event.preventDefault();
        try {
            var addItemName = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.ID.ADD_ITEM_NAME).value.trim();
            var addItemPrice = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.ID.ADD_ITEM_PRICE).valueAsNumber;
            var addItemQuantity = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.ID.ADD_ITEM_QUANTITY).valueAsNumber;
            var item = { name: addItemName, price: addItemPrice, quantity: addItemQuantity };
            (0,_validates_validates__WEBPACK_IMPORTED_MODULE_2__.validateAddItemInput)(item);
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.emitCustomEvent)('ADD_ITEM', { detail: item });
        }
        catch (error) {
            alert(error.message);
        }
    };
    ManageItemView.prototype.handleTableItemChange = function (item, targetRowIndex, $targetTableRow) {
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.emitCustomEvent)('TABLE_ITEM_CHANGE', {
            detail: { item: item, targetRowIndex: targetRowIndex, $targetTableRow: $targetTableRow }
        });
    };
    ManageItemView.prototype.handleTableItemDelete = function (item) {
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.emitCustomEvent)('TABLE_ITEM_DELETE', { detail: { item: item } });
    };
    ManageItemView.prototype.render = function (isLogin, items) {
        this.$content.replaceChildren();
        this.$content.insertAdjacentHTML('beforeend', (0,_templates_manageItemTemplate__WEBPACK_IMPORTED_MODULE_1__.manageItemTemplate)(isLogin, items));
        if (isLogin) {
            this.bindSubmitEvent();
            this.bindChangeClickEvents();
            this.bindDeleteClickEvents();
        }
    };
    ManageItemView.prototype.repaintItemTable = function (items) {
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.CLASS.TABLE_CONTAINER).remove();
        this.$content.insertAdjacentHTML('beforeend', _templates_manageItemTemplate__WEBPACK_IMPORTED_MODULE_1__.sectionTemplate.tableContainer(items));
        this.bindChangeClickEvents();
        this.bindDeleteClickEvents();
    };
    ManageItemView.prototype.repaintItemTableRow = function ($targetTableRow, item) {
        var $targetChangeButton = $targetTableRow.getElementsByClassName(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.CLASS_STRING.ITEM_TABLE_CHANGE_BUTTON);
        var $targetDeleteButton = $targetTableRow.getElementsByClassName(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.CLASS_STRING.ITEM_TABLE_DELETE_BUTTON);
        $targetTableRow.replaceChildren();
        $targetTableRow.insertAdjacentHTML('beforeEnd', _templates_manageItemTemplate__WEBPACK_IMPORTED_MODULE_1__.sectionTemplate.normalTableContainer(item));
        this.bindTargetChangeClickEvent($targetChangeButton[0]);
        this.bindTargetDeleteClickEvent($targetDeleteButton[0]);
    };
    ManageItemView.prototype.clearInput = function () {
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.ID.ADD_ITEM_NAME).value = '';
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.ID.ADD_ITEM_PRICE).value = '';
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.ID.ADD_ITEM_QUANTITY).value = '';
    };
    ManageItemView.prototype.getItemFromTargetTableRow = function ($targetTableRow) {
        var name = $targetTableRow.getElementsByClassName(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.CLASS_STRING.TABLE_ITEM_NAME)[0].textContent;
        var price = Number($targetTableRow.getElementsByClassName(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.CLASS_STRING.TABLE_ITEM_PRICE)[0].textContent);
        var quantity = Number($targetTableRow.getElementsByClassName(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.CLASS_STRING.TABLE_ITEM_QUANTITY)[0]
            .textContent);
        return { name: name, price: price, quantity: quantity };
    };
    ManageItemView.prototype.getItemFromInputValue = function ($targetTableRow) {
        var name = $targetTableRow
            .getElementsByClassName(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.CLASS_STRING.TABLE_ITEM_INPUT_NAME)[0]
            .value.trim();
        var price = $targetTableRow.getElementsByClassName(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.CLASS_STRING.TABLE_ITEM_INPUT_PRICE)[0].valueAsNumber;
        var quantity = $targetTableRow.getElementsByClassName(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.CLASS_STRING.TABLE_ITEM_INPUT_QUANTITY)[0].valueAsNumber;
        return { name: name, price: price, quantity: quantity };
    };
    return ManageItemView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManageItemView);


/***/ }),

/***/ "./src/js/views/purchaseItemView.ts":
/*!******************************************!*\
  !*** ./src/js/views/purchaseItemView.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/js/utils/common.ts");
/* harmony import */ var _templates_purchaseItemTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/purchaseItemTemplate */ "./src/js/templates/purchaseItemTemplate.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.ts");
/* harmony import */ var _validates_validates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validates/validates */ "./src/js/validates/validates.ts");





var PurchaseItemView = /** @class */ (function () {
    function PurchaseItemView() {
        this.$content = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.SELECTOR.ID.CONTENT);
    }
    PurchaseItemView.prototype.bindSubmitEvent = function () {
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)('#purchase-item-form').addEventListener('submit', this.handleSubmitPurchaseMoneyInput.bind(this));
    };
    PurchaseItemView.prototype.bindPurchaseClickEvents = function () {
        var _this = this;
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$$)('.item-table-purchase-button').forEach(function (button) { return _this.bindTargetPurchaseClick(button); });
    };
    PurchaseItemView.prototype.bindTargetPurchaseClick = function (button) {
        button.addEventListener('click', function () {
            var $targetTableRow = button.closest('tr');
            var itemName = $targetTableRow
                .getElementsByClassName(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.SELECTOR.CLASS_STRING.TABLE_ITEM_INPUT_NAME)[0]
                .textContent.trim();
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.emitCustomEvent)('PURCHASE_ITEM', { detail: { itemName: itemName } });
        });
    };
    PurchaseItemView.prototype.bindReturnMoneyClickEvent = function () {
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)('.return-money-button').addEventListener('click', this.handleClickReturnMoneyButton.bind(this));
    };
    PurchaseItemView.prototype.handleSubmitPurchaseMoneyInput = function () {
        try {
            var inputMoney = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.SELECTOR.CLASS.PURCHASE_ITEM_INPUT).valueAsNumber;
            (0,_validates_validates__WEBPACK_IMPORTED_MODULE_3__.validateInputPurchaseMoney)(inputMoney);
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.emitCustomEvent)('PURCHASE_MONEY_INPUT', { detail: { inputMoney: inputMoney } });
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.showSnackBar)('금액을 투입하였습니다.');
        }
        catch (error) {
            alert(error.message);
        }
    };
    PurchaseItemView.prototype.handleClickReturnMoneyButton = function () {
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.emitCustomEvent)('RETURN_MONEY');
    };
    PurchaseItemView.prototype.render = function (items, coins, inputMoney) {
        this.$content.replaceChildren();
        this.$content.insertAdjacentHTML('beforeend', (0,_templates_purchaseItemTemplate__WEBPACK_IMPORTED_MODULE_1__.purchaseItemTemplate)(items, coins, inputMoney));
        this.bindSubmitEvent();
        this.bindPurchaseClickEvents();
        this.bindReturnMoneyClickEvent();
    };
    return PurchaseItemView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PurchaseItemView);


/***/ }),

/***/ "./src/js/views/signUpView.ts":
/*!************************************!*\
  !*** ./src/js/views/signUpView.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/js/utils/common.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.ts");
/* harmony import */ var _templates_signUpTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/signUpTemplate */ "./src/js/templates/signUpTemplate.ts");
/* harmony import */ var _validates_validates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validates/validates */ "./src/js/validates/validates.ts");




var SignUpView = /** @class */ (function () {
    function SignUpView() {
        this.$content = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTOR.ID.CONTENT);
    }
    SignUpView.prototype.handleSubmitSignUpForm = function (event) {
        try {
            event.preventDefault();
            var targetId = event.target.id;
            var email = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)('#signup-email-input').value.trim();
            var name_1 = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)('#signup-name-input').value.trim();
            var password = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)('#signup-password-input').value;
            (0,_validates_validates__WEBPACK_IMPORTED_MODULE_3__.checkPassword)(password);
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.emitCustomEvent)('SIGN_UP', { detail: { email: email, name: name_1, password: password, targetId: targetId } });
        }
        catch (error) {
            alert(error.message);
        }
    };
    SignUpView.prototype.render = function (isLogin) {
        console.log('SignUpView Render');
        this.$content.replaceChildren();
        this.$content.insertAdjacentHTML('beforeend', (0,_templates_signUpTemplate__WEBPACK_IMPORTED_MODULE_2__.signUpTemplate)(isLogin));
        if (!isLogin) {
            (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.$)('#signup-form').addEventListener('submit', this.handleSubmitSignUpForm.bind(this));
        }
    };
    return SignUpView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpView);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _AppManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppManager */ "./src/js/AppManager.ts");


new _AppManager__WEBPACK_IMPORTED_MODULE_1__["default"]();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map