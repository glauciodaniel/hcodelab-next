module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\projetos\\hcodelab-next\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("meta", {
    charset: "UTF-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, "Ferrari"), __jsx("link", {
    type: "text/css",
    href: "css/index.css",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  })), __jsx("header", {
    id: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("div", {
    id: "overlay",
    "data-close": "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }), __jsx("a", {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "images/logo.svg",
    id: "logo",
    alt: "Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  })), __jsx("button", {
    type: "button",
    id: "btn-open",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("svg", {
    id: "menu-black-18dp",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    className: "jsx-3467027710",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3467027710",
    __self: this
  }, "#Caminho_216.jsx-3467027710{fill:#000;}@media(prefers-color-scheme:dark){#Caminho_216.jsx-3467027710{fill:#FFF;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxwcm9qZXRvc1xcaGNvZGVsYWItbmV4dFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCZ0MsQUFHbUMsQUFJSSxVQUhsQixBQUlJIiwiZmlsZSI6IkM6XFxwcm9qZXRvc1xcaGNvZGVsYWItbmV4dFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCl7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5GZXJyYXJpPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJjc3MvaW5kZXguY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGhlYWRlciBpZD1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm92ZXJsYXlcIiBkYXRhLWNsb3NlPVwibWVudVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj48aW1nIHNyYz1cImltYWdlcy9sb2dvLnN2Z1wiIGlkPVwibG9nb1wiIGFsdD1cIkxvZ29cIiAvPjwvYT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiYnRuLW9wZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGlkPVwibWVudS1ibGFjay0xOGRwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgI0NhbWluaG9fMjE2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgI0NhbWluaG9fMjE2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICNGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIkNhbWluaG9fMjE1XCIgZGF0YS1uYW1lPVwiQ2FtaW5obyAyMTVcIiBkPVwiTTAsMEgzMlYzMkgwWlwiIGZpbGw9XCJub25lXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIkNhbWluaG9fMjE2XCIgZGF0YS1uYW1lPVwiQ2FtaW5obyAyMTZcIiBkPVwiTTMsMThIMjlWMTZIM1ptMC01SDI5VjExSDNaTTMsNlY4SDI5VjZaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgNClcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiYnRuLWNsb3NlXCIgZGF0YS1jbG9zZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2NhbWluaG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2FtaW5obyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICNGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiY2FtaW5ob1wiIGQ9XCJNMTksNi40MSwxNy41OSw1LDEyLDEwLjU5LDYuNDEsNSw1LDYuNDEsMTAuNTksMTIsNSwxNy41OSw2LjQxLDE5LDEyLDEzLjQxLDE3LjU5LDE5LDE5LDE3LjU5LDEzLjQxLDEyWlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAsMEgyNFYyNEgwWlwiIGZpbGw9XCJub25lXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9cIj5Ib21lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9vdXItaGlzdG9yeS5odG1sXCI+Tm9zc2EgSGlzdMOzcmlhPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9nYWxsZXJ5Lmh0bWxcIj5HYWxlcmlhPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9jb250YWN0Lmh0bWxcIj5Db250YXRvPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInJlZ2lzdGVyLmh0bWxcIiBjbGFzc05hbWU9XCJidG4tcmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVnaXN0cmUtc2UgLyBMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgPG1haW4gaWQ9XCJob21lXCI+ICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJpdGFseVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5TRjkwIFN0cmFkYWxlPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2dhbGVyaWEuaHRtbFwiPkRldGFsaGVzPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ2FsbGVyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9waG90b3MvZXNwb3N0aXZhcy1hbWFyZWxhLTM3NXgyNTAuanBnXCIgYWx0PVwiRmVycmFyaSBBbWFyZWxhXCIgLz5cdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Fc3BvcnRpdmFzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZlcnJhcmkgRjEwMDA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3Bob3Rvcy9lc3BvcnRpdmFzLWludGVyaW9yLTM3NXgyNTAuanBnXCIgYWx0PVwiRmVycmFyaSBJbnRlcmlvclwiIC8+XHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+RXNwb3J0aXZhczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GZXJyYXJpIEYxMDAwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9waG90b3MvZXNwb3N0aXZhcy1henVsLTM3NXgyNTAuanBnXCIgYWx0PVwiRmVycmFyaSBBenVsXCIgLz5cdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Fc3BvcnRpdmFzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZlcnJhcmkgRjEwMDA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpbnNwaXJhdGlvblwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkluc3BpcmFuZG88c3Bhbj5HZXJhw6fDtWVzPC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Bc3NlcnRpdmVseSBpdGVyYXRlIGVudGVycHJpc2Utd2lkZSBwb3J0YWxzIHRocm91Z2ggc3luZXJnaXN0aWMgcHJvZHVjdHMuIEVmZmljaWVudGx5IGJ1aWxkIGFkYXB0aXZlIHNjaGVtYeKApjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29tcGxldGVcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWIgaXRhcXVlIG5lc2NpdW50IHNhcGllbnRlIG9wdGlvIG5vYmlzIGF0cXVlIHZlcml0YXRpcyByZW0gYXV0IGVhIGV4cGVkaXRhLCByZXByZWhlbmRlcml0IGZ1Z2l0IHJlaWNpZW5kaXMsIG1pbnVzIHF1b2Qgb2JjYWVjYXRpIGludmVudG9yZSBhdCBwbGFjZWF0IHByb3ZpZGVudCE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyIGFuaW1hdGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hlZWxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwia25vd1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtub3ctMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+Q29uaGXDp2EgYSBNw6FxdWluYTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFzc2VydGl2ZWx5IGl0ZXJhdGUgZW50ZXJwcmlzZS13aWRlIHBvcnRhbHMgdGhyb3VnaCBzeW5lcmdpc3RpYyBwcm9kdWN0cy4gRWZmaWNpZW50bHkgYnVpbGQgYWRhcHRpdmUgc2NoZW1hcyBhZnRlciB0cmFuc3BhcmVudCBxdWFsaXR5IHZlY3RvcnMuIFBob3NmbHVvcmVzY2VudGx5IG9wdGltaXplIGNvbXBldGl0aXZlIHJlc291cmNlcyBhZnRlciBleHRlbnNpdmUgY29udmVyZ2VuY2UuIFJhcGlkaW91c2x5IG9wdGltaXplIGhpZ2gtcXVhbGl0eSBtZXRhLXNlcnZpY2VzIHZpYSBkaXN0cmlidXRlZCBhcmNoaXRlY3R1cmVzLiBDcmVkaWJseSBkZWxpdmVyIDI0LzM2NS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZ2FsbGVyeS5odG1sXCI+RGV0YWxoZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy90b3Atdmlldy5qcGdcIiBhbHQ9XCJGZXJyYXJpIFRvcCBWaWV3XCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrbm93LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdD5Nb3Rvcml6YcOnw6NvPC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZD5Bc3NlcnRpdmVseSBpdGVyYXRlIGVudGVycHJpc2Utd2lkZSBwb3J0YWxzIHRocm91Z2ggc3luZXJnaXN0aWMgcHJvZHVjdHMuPC9kZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQ+RGVzZW1wZW5obzwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQ+QXNzZXJ0aXZlbHkgaXRlcmF0ZSBlbnRlcnByaXNlLXdpZGUgcG9ydGFscyB0aHJvdWdoIHN5bmVyZ2lzdGljIHByb2R1Y3RzLjwvZGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0PkNvbmZvcnRvPC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZD5Bc3NlcnRpdmVseSBpdGVyYXRlIGVudGVycHJpc2Utd2lkZSBwb3J0YWxzIHRocm91Z2ggc3luZXJnaXN0aWMgcHJvZHVjdHMuPC9kZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDxmb290ZXIgaWQ9XCJmb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2ljb24tYXJyb3ctdXAuc3ZnXCIgYWx0PVwidXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlua3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0aXRsZVwiPkxpbmtzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL1wiPkhvbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL291ci1oaXN0b3J5Lmh0bWxcIj5Ob3NzYSBIaXN0w7NyaWE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2dhbGxlcnkuaHRtbFwiPkdhbGVyaWE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2NvbnRhY3QuaHRtbFwiPkNvbnRhdG88L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRpdGxlXCI+Q29udGF0bzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RS1tYWlsOiBzdXBwb3J0QGZlcnJhcmkuaXQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNvY2lhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGltZyBzcmM9XCJpbWFnZXMvZmFjZWJvb2suc3ZnXCIgYWx0PVwiRmFjZWJvb2tcIi8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGltZyBzcmM9XCJpbWFnZXMvdHdpdHRlci5zdmdcIiBhbHQ9XCJUd2l0dGVyXCIvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxpbWcgc3JjPVwiaW1hZ2VzL3lvdXR1YmUuc3ZnXCIgYWx0PVwiWW91VHViZVwiLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48aW1nIHNyYz1cImltYWdlcy9pbnN0YWdyYW0uc3ZnXCIgYWx0PVwiSW5zdGFncmFtXCIvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj48aW1nIHNyYz1cImltYWdlcy9mZXJyYXJpLWZvb3Rlci5zdmdcIiBhbHQ9XCJMb2dvXCIgY2xhc3NOYW1lPVwibG9nb1wiIC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cD4yMDIwIMKpIEhjb2RlLiBBbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG5cclxufSJdfQ== */\n/*@ sourceURL=C:\\\\projetos\\\\hcodelab-next\\\\pages\\\\index.js */"), __jsx("path", {
    id: "Caminho_215",
    "data-name": "Caminho 215",
    d: "M0,0H32V32H0Z",
    fill: "none",
    className: "jsx-3467027710",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }), __jsx("path", {
    id: "Caminho_216",
    "data-name": "Caminho 216",
    d: "M3,18H29V16H3Zm0-5H29V11H3ZM3,6V8H29V6Z",
    transform: "translate(0 4)",
    className: "jsx-3467027710",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }))), __jsx("nav", {
    className: "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx("button", {
    type: "button",
    id: "btn-close",
    "data-close": "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    className: "jsx-2675716399",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2675716399",
    __self: this
  }, "#caminho.jsx-2675716399{fill:#000;}@media(prefers-color-scheme:dark){#caminho.jsx-2675716399{fill:#FFF;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxwcm9qZXRvc1xcaGNvZGVsYWItbmV4dFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DNEMsQUFHK0MsQUFJQSxVQUhkLEFBSUkiLCJmaWxlIjoiQzpcXHByb2pldG9zXFxoY29kZWxhYi1uZXh0XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKXtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkZlcnJhcmk8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImNzcy9pbmRleC5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwib3ZlcmxheVwiIGRhdGEtY2xvc2U9XCJtZW51XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPjxpbWcgc3JjPVwiaW1hZ2VzL2xvZ28uc3ZnXCIgaWQ9XCJsb2dvXCIgYWx0PVwiTG9nb1wiIC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJidG4tb3BlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJtZW51LWJsYWNrLTE4ZHBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAjQ2FtaW5ob18yMTYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAjQ2FtaW5ob18yMTYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogI0ZGRjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiQ2FtaW5ob18yMTVcIiBkYXRhLW5hbWU9XCJDYW1pbmhvIDIxNVwiIGQ9XCJNMCwwSDMyVjMySDBaXCIgZmlsbD1cIm5vbmVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiQ2FtaW5ob18yMTZcIiBkYXRhLW5hbWU9XCJDYW1pbmhvIDIxNlwiIGQ9XCJNMywxOEgyOVYxNkgzWm0wLTVIMjlWMTFIM1pNMyw2VjhIMjlWNlpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCA0KVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJidG4tY2xvc2VcIiBkYXRhLWNsb3NlPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2FtaW5obyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYShwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNjYW1pbmhvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogI0ZGRjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJjYW1pbmhvXCIgZD1cIk0xOSw2LjQxLDE3LjU5LDUsMTIsMTAuNTksNi40MSw1LDUsNi40MSwxMC41OSwxMiw1LDE3LjU5LDYuNDEsMTksMTIsMTMuNDEsMTcuNTksMTksMTksMTcuNTksMTMuNDEsMTJaXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCwwSDI0VjI0SDBaXCIgZmlsbD1cIm5vbmVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL1wiPkhvbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL291ci1oaXN0b3J5Lmh0bWxcIj5Ob3NzYSBIaXN0w7NyaWE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2dhbGxlcnkuaHRtbFwiPkdhbGVyaWE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2NvbnRhY3QuaHRtbFwiPkNvbnRhdG88L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwicmVnaXN0ZXIuaHRtbFwiIGNsYXNzTmFtZT1cImJ0bi1yZWdpc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWdpc3RyZS1zZSAvIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8bWFpbiBpZD1cImhvbWVcIj4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIml0YWx5XCIgLz5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPlNGOTAgU3RyYWRhbGU8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZ2FsZXJpYS5odG1sXCI+RGV0YWxoZXM8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJnYWxsZXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3Bob3Rvcy9lc3Bvc3RpdmFzLWFtYXJlbGEtMzc1eDI1MC5qcGdcIiBhbHQ9XCJGZXJyYXJpIEFtYXJlbGFcIiAvPlx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkVzcG9ydGl2YXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RmVycmFyaSBGMTAwMDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvcGhvdG9zL2VzcG9ydGl2YXMtaW50ZXJpb3ItMzc1eDI1MC5qcGdcIiBhbHQ9XCJGZXJyYXJpIEludGVyaW9yXCIgLz5cdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Fc3BvcnRpdmFzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZlcnJhcmkgRjEwMDA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3Bob3Rvcy9lc3Bvc3RpdmFzLWF6dWwtMzc1eDI1MC5qcGdcIiBhbHQ9XCJGZXJyYXJpIEF6dWxcIiAvPlx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkVzcG9ydGl2YXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RmVycmFyaSBGMTAwMDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImluc3BpcmF0aW9uXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+SW5zcGlyYW5kbzxzcGFuPkdlcmHDp8O1ZXM8L3NwYW4+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFzc2VydGl2ZWx5IGl0ZXJhdGUgZW50ZXJwcmlzZS13aWRlIHBvcnRhbHMgdGhyb3VnaCBzeW5lcmdpc3RpYyBwcm9kdWN0cy4gRWZmaWNpZW50bHkgYnVpbGQgYWRhcHRpdmUgc2NoZW1h4oCmPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb21wbGV0ZVwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBYiBpdGFxdWUgbmVzY2l1bnQgc2FwaWVudGUgb3B0aW8gbm9iaXMgYXRxdWUgdmVyaXRhdGlzIHJlbSBhdXQgZWEgZXhwZWRpdGEsIHJlcHJlaGVuZGVyaXQgZnVnaXQgcmVpY2llbmRpcywgbWludXMgcXVvZCBvYmNhZWNhdGkgaW52ZW50b3JlIGF0IHBsYWNlYXQgcHJvdmlkZW50ITwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXIgYW5pbWF0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGVlbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJrbm93XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia25vdy0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Db25oZcOnYSBhIE3DoXF1aW5hPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXNzZXJ0aXZlbHkgaXRlcmF0ZSBlbnRlcnByaXNlLXdpZGUgcG9ydGFscyB0aHJvdWdoIHN5bmVyZ2lzdGljIHByb2R1Y3RzLiBFZmZpY2llbnRseSBidWlsZCBhZGFwdGl2ZSBzY2hlbWFzIGFmdGVyIHRyYW5zcGFyZW50IHF1YWxpdHkgdmVjdG9ycy4gUGhvc2ZsdW9yZXNjZW50bHkgb3B0aW1pemUgY29tcGV0aXRpdmUgcmVzb3VyY2VzIGFmdGVyIGV4dGVuc2l2ZSBjb252ZXJnZW5jZS4gUmFwaWRpb3VzbHkgb3B0aW1pemUgaGlnaC1xdWFsaXR5IG1ldGEtc2VydmljZXMgdmlhIGRpc3RyaWJ1dGVkIGFyY2hpdGVjdHVyZXMuIENyZWRpYmx5IGRlbGl2ZXIgMjQvMzY1LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9nYWxsZXJ5Lmh0bWxcIj5EZXRhbGhlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3RvcC12aWV3LmpwZ1wiIGFsdD1cIkZlcnJhcmkgVG9wIFZpZXdcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtub3ctMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0Pk1vdG9yaXphw6fDo288L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkPkFzc2VydGl2ZWx5IGl0ZXJhdGUgZW50ZXJwcmlzZS13aWRlIHBvcnRhbHMgdGhyb3VnaCBzeW5lcmdpc3RpYyBwcm9kdWN0cy48L2RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdD5EZXNlbXBlbmhvPC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZD5Bc3NlcnRpdmVseSBpdGVyYXRlIGVudGVycHJpc2Utd2lkZSBwb3J0YWxzIHRocm91Z2ggc3luZXJnaXN0aWMgcHJvZHVjdHMuPC9kZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQ+Q29uZm9ydG88L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkPkFzc2VydGl2ZWx5IGl0ZXJhdGUgZW50ZXJwcmlzZS13aWRlIHBvcnRhbHMgdGhyb3VnaCBzeW5lcmdpc3RpYyBwcm9kdWN0cy48L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPGZvb3RlciBpZD1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvaWNvbi1hcnJvdy11cC5zdmdcIiBhbHQ9XCJ1cFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRpdGxlXCI+TGlua3M8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCI+SG9tZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvb3VyLWhpc3RvcnkuaHRtbFwiPk5vc3NhIEhpc3TDs3JpYTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvZ2FsbGVyeS5odG1sXCI+R2FsZXJpYTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvY29udGFjdC5odG1sXCI+Q29udGF0bzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGl0bGVcIj5Db250YXRvPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5FLW1haWw6IHN1cHBvcnRAZmVycmFyaS5pdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic29jaWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48aW1nIHNyYz1cImltYWdlcy9mYWNlYm9vay5zdmdcIiBhbHQ9XCJGYWNlYm9va1wiLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48aW1nIHNyYz1cImltYWdlcy90d2l0dGVyLnN2Z1wiIGFsdD1cIlR3aXR0ZXJcIi8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGltZyBzcmM9XCJpbWFnZXMveW91dHViZS5zdmdcIiBhbHQ9XCJZb3VUdWJlXCIvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxpbWcgc3JjPVwiaW1hZ2VzL2luc3RhZ3JhbS5zdmdcIiBhbHQ9XCJJbnN0YWdyYW1cIi8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPjxpbWcgc3JjPVwiaW1hZ2VzL2ZlcnJhcmktZm9vdGVyLnN2Z1wiIGFsdD1cIkxvZ29cIiBjbGFzc05hbWU9XCJsb2dvXCIgLz48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwPjIwMjAgwqkgSGNvZGUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcblxyXG59Il19 */\n/*@ sourceURL=C:\\\\projetos\\\\hcodelab-next\\\\pages\\\\index.js */"), __jsx("path", {
    id: "caminho",
    d: "M19,6.41,17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12Z",
    className: "jsx-2675716399",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 33
    }
  }), __jsx("path", {
    d: "M0,0H24V24H0Z",
    fill: "none",
    className: "jsx-2675716399",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }))), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, "Home")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "/our-history.html",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 33
    }
  }, "Nossa Hist\xF3ria")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "/gallery.html",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 33
    }
  }, "Galeria")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "/contact.html",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 33
    }
  }, "Contato")))), __jsx("a", {
    href: "register.html",
    className: "btn-register",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, "Registre-se / Login"))), __jsx("main", {
    id: "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("hr", {
    className: "italy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }), __jsx("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, "SF90 Stradale"), __jsx("a", {
    href: "/galeria.html",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, "Detalhes")), __jsx("section", {
    className: "gallery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, __jsx("figure", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/photos/espostivas-amarela-375x250.jpg",
    alt: "Ferrari Amarela",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }), __jsx("figcaption", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  }, "Esportivas"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }, "Ferrari F1000"))), __jsx("figure", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/photos/esportivas-interior-375x250.jpg",
    alt: "Ferrari Interior",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }), __jsx("figcaption", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 29
    }
  }, "Esportivas"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }, "Ferrari F1000"))), __jsx("figure", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/photos/espostivas-azul-375x250.jpg",
    alt: "Ferrari Azul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  }), __jsx("figcaption", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 29
    }
  }, "Esportivas"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 29
    }
  }, "Ferrari F1000")))), __jsx("section", {
    className: "inspiration",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, "Inspirando", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 39
    }
  }, "Gera\xE7\xF5es")), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 25
    }
  }, "Assertively iterate enterprise-wide portals through synergistic products. Efficiently build adaptive schema\u2026"), __jsx("p", {
    className: "complete",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  }, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab itaque nesciunt sapiente optio nobis atque veritatis rem aut ea expedita, reprehenderit fugit reiciendis, minus quod obcaecati inventore at placeat provident!")), __jsx("div", {
    className: "car animated",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "wheel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 25
    }
  }))), __jsx("section", {
    className: "know",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "know-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 25
    }
  }, "Conhe\xE7a a M\xE1quina"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 25
    }
  }, "Assertively iterate enterprise-wide portals through synergistic products. Efficiently build adaptive schemas after transparent quality vectors. Phosfluorescently optimize competitive resources after extensive convergence. Rapidiously optimize high-quality meta-services via distributed architectures. Credibly deliver 24/365."), __jsx("a", {
    href: "/gallery.html",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 25
    }
  }, "Detalhes")), __jsx("img", {
    src: "/images/top-view.jpg",
    alt: "Ferrari Top View",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "know-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, __jsx("dl", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 25
    }
  }, __jsx("dt", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 29
    }
  }, "Motoriza\xE7\xE3o"), __jsx("dd", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 29
    }
  }, "Assertively iterate enterprise-wide portals through synergistic products."), __jsx("dt", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 29
    }
  }, "Desempenho"), __jsx("dd", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 29
    }
  }, "Assertively iterate enterprise-wide portals through synergistic products."), __jsx("dt", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 29
    }
  }, "Conforto"), __jsx("dd", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 29
    }
  }, "Assertively iterate enterprise-wide portals through synergistic products."))))), __jsx("footer", {
    id: "footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "images/icon-arrow-up.svg",
    alt: "up",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "columns",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: "links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 25
    }
  }, __jsx("li", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 29
    }
  }, "Links"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 33
    }
  }, "Home")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "/our-history.html",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 33
    }
  }, "Nossa Hist\xF3ria")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "/gallery.html",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 33
    }
  }, "Galeria")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "/contact.html",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 33
    }
  }, "Contato"))), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 25
    }
  }, __jsx("li", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 29
    }
  }, "Contato"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 29
    }
  }, "E-mail: support@ferrari.it"), __jsx("li", {
    className: "social",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "images/facebook.svg",
    alt: "Facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 45
    }
  })), __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "images/twitter.svg",
    alt: "Twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 45
    }
  })), __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "images/youtube.svg",
    alt: "YouTube",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 45
    }
  })), __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "images/instagram.svg",
    alt: "Instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 45
    }
  }))))), __jsx("a", {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "images/ferrari-footer.svg",
    alt: "Logo",
    className: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 33
    }
  }))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 17
    }
  }, "2020 \xA9 Hcode. All rights reserved.")));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projetos\hcodelab-next\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiSW5kZXgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFHZSxTQUFTQSxLQUFULEdBQWdCO0FBRTNCLFNBQ0ksbUVBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxXQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFB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QUFKLENBSEosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsZUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUosQ0FKSixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFFBQUksRUFBQyxlQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSixDQUxKLENBREosRUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUZKLEVBR0k7QUFBSSxhQUFTLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVk7QUFBSyxPQUFHLEVBQUMscUJBQVQ7QUFBK0IsT0FBRyxFQUFDLFVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBWixDQURKLEVBRUk7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVk7QUFBSyxPQUFHLEVBQUMsb0JBQVQ7QUFBOEIsT0FBRyxFQUFDLFNBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBWixDQUZKLEVBR0k7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVk7QUFBSyxPQUFHLEVBQUMsb0JBQVQ7QUFBOEIsT0FBRyxFQUFDLFNBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBWixDQUhKLEVBSUk7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVk7QUFBSyxPQUFHLEVBQUMsc0JBQVQ7QUFBZ0MsT0FBRyxFQUFDLFdBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBWixDQUpKLENBSEosQ0FSSixDQURKLEVBb0JJO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFZO0FBQUssT0FBRyxFQUFDLDJCQUFUO0FBQXFDLE9BQUcsRUFBQyxNQUF6QztBQUFnRCxhQUFTLEVBQUMsTUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFaLENBcEJKLENBSkosRUEwQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0ExQkosQ0F0SUosQ0FESjtBQXVLSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVLRCxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKXtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkZlcnJhcmk8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImNzcy9pbmRleC5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwib3ZlcmxheVwiIGRhdGEtY2xvc2U9XCJtZW51XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPjxpbWcgc3JjPVwiaW1hZ2VzL2xvZ28uc3ZnXCIgaWQ9XCJsb2dvXCIgYWx0PVwiTG9nb1wiIC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJidG4tb3BlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJtZW51LWJsYWNrLTE4ZHBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAjQ2FtaW5ob18yMTYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAjQ2FtaW5ob18yMTYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogI0ZGRjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiQ2FtaW5ob18yMTVcIiBkYXRhLW5hbWU9XCJDYW1pbmhvIDIxNVwiIGQ9XCJNMCwwSDMyVjMySDBaXCIgZmlsbD1cIm5vbmVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiQ2FtaW5ob18yMTZcIiBkYXRhLW5hbWU9XCJDYW1pbmhvIDIxNlwiIGQ9XCJNMywxOEgyOVYxNkgzWm0wLTVIMjlWMTFIM1pNMyw2VjhIMjlWNlpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCA0KVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJidG4tY2xvc2VcIiBkYXRhLWNsb3NlPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2FtaW5obyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYShwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNjYW1pbmhvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogI0ZGRjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJjYW1pbmhvXCIgZD1cIk0xOSw2LjQxLDE3LjU5LDUsMTIsMTAuNTksNi40MSw1LDUsNi40MSwxMC41OSwxMiw1LDE3LjU5LDYuNDEsMTksMTIsMTMuNDEsMTcuNTksMTksMTksMTcuNTksMTMuNDEsMTJaXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCwwSDI0VjI0SDBaXCIgZmlsbD1cIm5vbmVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL1wiPkhvbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL291ci1oaXN0b3J5Lmh0bWxcIj5Ob3NzYSBIaXN0w7NyaWE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2dhbGxlcnkuaHRtbFwiPkdhbGVyaWE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2NvbnRhY3QuaHRtbFwiPkNvbnRhdG88L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwicmVnaXN0ZXIuaHRtbFwiIGNsYXNzTmFtZT1cImJ0bi1yZWdpc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWdpc3RyZS1zZSAvIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8bWFpbiBpZD1cImhvbWVcIj4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIml0YWx5XCIgLz5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPlNGOTAgU3RyYWRhbGU8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZ2FsZXJpYS5odG1sXCI+RGV0YWxoZXM8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJnYWxsZXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3Bob3Rvcy9lc3Bvc3RpdmFzLWFtYXJlbGEtMzc1eDI1MC5qcGdcIiBhbHQ9XCJGZXJyYXJpIEFtYXJlbGFcIiAvPlx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkVzcG9ydGl2YXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RmVycmFyaSBGMTAwMDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvcGhvdG9zL2VzcG9ydGl2YXMtaW50ZXJpb3ItMzc1eDI1MC5qcGdcIiBhbHQ9XCJGZXJyYXJpIEludGVyaW9yXCIgLz5cdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Fc3BvcnRpdmFzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZlcnJhcmkgRjEwMDA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3Bob3Rvcy9lc3Bvc3RpdmFzLWF6dWwtMzc1eDI1MC5qcGdcIiBhbHQ9XCJGZXJyYXJpIEF6dWxcIiAvPlx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkVzcG9ydGl2YXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RmVycmFyaSBGMTAwMDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImluc3BpcmF0aW9uXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+SW5zcGlyYW5kbzxzcGFuPkdlcmHDp8O1ZXM8L3NwYW4+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFzc2VydGl2ZWx5IGl0ZXJhdGUgZW50ZXJwcmlzZS13aWRlIHBvcnRhbHMgdGhyb3VnaCBzeW5lcmdpc3RpYyBwcm9kdWN0cy4gRWZmaWNpZW50bHkgYnVpbGQgYWRhcHRpdmUgc2NoZW1h4oCmPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb21wbGV0ZVwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBYiBpdGFxdWUgbmVzY2l1bnQgc2FwaWVudGUgb3B0aW8gbm9iaXMgYXRxdWUgdmVyaXRhdGlzIHJlbSBhdXQgZWEgZXhwZWRpdGEsIHJlcHJlaGVuZGVyaXQgZnVnaXQgcmVpY2llbmRpcywgbWludXMgcXVvZCBvYmNhZWNhdGkgaW52ZW50b3JlIGF0IHBsYWNlYXQgcHJvdmlkZW50ITwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXIgYW5pbWF0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGVlbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJrbm93XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia25vdy0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Db25oZcOnYSBhIE3DoXF1aW5hPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXNzZXJ0aXZlbHkgaXRlcmF0ZSBlbnRlcnByaXNlLXdpZGUgcG9ydGFscyB0aHJvdWdoIHN5bmVyZ2lzdGljIHByb2R1Y3RzLiBFZmZpY2llbnRseSBidWlsZCBhZGFwdGl2ZSBzY2hlbWFzIGFmdGVyIHRyYW5zcGFyZW50IHF1YWxpdHkgdmVjdG9ycy4gUGhvc2ZsdW9yZXNjZW50bHkgb3B0aW1pemUgY29tcGV0aXRpdmUgcmVzb3VyY2VzIGFmdGVyIGV4dGVuc2l2ZSBjb252ZXJnZW5jZS4gUmFwaWRpb3VzbHkgb3B0aW1pemUgaGlnaC1xdWFsaXR5IG1ldGEtc2VydmljZXMgdmlhIGRpc3RyaWJ1dGVkIGFyY2hpdGVjdHVyZXMuIENyZWRpYmx5IGRlbGl2ZXIgMjQvMzY1LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9nYWxsZXJ5Lmh0bWxcIj5EZXRhbGhlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3RvcC12aWV3LmpwZ1wiIGFsdD1cIkZlcnJhcmkgVG9wIFZpZXdcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtub3ctMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0Pk1vdG9yaXphw6fDo288L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkPkFzc2VydGl2ZWx5IGl0ZXJhdGUgZW50ZXJwcmlzZS13aWRlIHBvcnRhbHMgdGhyb3VnaCBzeW5lcmdpc3RpYyBwcm9kdWN0cy48L2RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdD5EZXNlbXBlbmhvPC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZD5Bc3NlcnRpdmVseSBpdGVyYXRlIGVudGVycHJpc2Utd2lkZSBwb3J0YWxzIHRocm91Z2ggc3luZXJnaXN0aWMgcHJvZHVjdHMuPC9kZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQ+Q29uZm9ydG88L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkPkFzc2VydGl2ZWx5IGl0ZXJhdGUgZW50ZXJwcmlzZS13aWRlIHBvcnRhbHMgdGhyb3VnaCBzeW5lcmdpc3RpYyBwcm9kdWN0cy48L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPGZvb3RlciBpZD1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvaWNvbi1hcnJvdy11cC5zdmdcIiBhbHQ9XCJ1cFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRpdGxlXCI+TGlua3M8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCI+SG9tZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvb3VyLWhpc3RvcnkuaHRtbFwiPk5vc3NhIEhpc3TDs3JpYTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvZ2FsbGVyeS5odG1sXCI+R2FsZXJpYTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvY29udGFjdC5odG1sXCI+Q29udGF0bzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGl0bGVcIj5Db250YXRvPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5FLW1haWw6IHN1cHBvcnRAZmVycmFyaS5pdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic29jaWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48aW1nIHNyYz1cImltYWdlcy9mYWNlYm9vay5zdmdcIiBhbHQ9XCJGYWNlYm9va1wiLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48aW1nIHNyYz1cImltYWdlcy90d2l0dGVyLnN2Z1wiIGFsdD1cIlR3aXR0ZXJcIi8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGltZyBzcmM9XCJpbWFnZXMveW91dHViZS5zdmdcIiBhbHQ9XCJZb3VUdWJlXCIvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxpbWcgc3JjPVwiaW1hZ2VzL2luc3RhZ3JhbS5zdmdcIiBhbHQ9XCJJbnN0YWdyYW1cIi8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPjxpbWcgc3JjPVwiaW1hZ2VzL2ZlcnJhcmktZm9vdGVyLnN2Z1wiIGFsdD1cIkxvZ29cIiBjbGFzc05hbWU9XCJsb2dvXCIgLz48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwPjIwMjAgwqkgSGNvZGUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcblxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==