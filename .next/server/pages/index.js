module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ADLayoutAd; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Layout.module.css */ \"./styles/Layout.module.css\");\n/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/cristopher/pt2/edulcorantes/components/Layout.js\";\n\n\n\n\nconst {\n  Header,\n  Content,\n  Footer,\n  Sider\n} = antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"];\nfunction ADLayoutAd() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Sider, {\n        style: {\n          overflow: \"auto\",\n          height: \"100vh\",\n          position: \"fixed\",\n          left: 0\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"], {\n          theme: \"dark\",\n          mode: \"inline\",\n          defaultSelectedKeys: [\"4\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"UserOutlined\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 38\n            }, this),\n            children: \"Calculadora de consumo de edulcorantes\"\n          }, \"1\", false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"VideoCameraOutlined\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 38\n            }, this)\n          }, \"2\", false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"UploadOutlined\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 38\n            }, this),\n            children: \"Chuleta\"\n          }, \"3\", false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"BarChartOutlined\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 38\n            }, this),\n            children: \"Chuleta\"\n          }, \"4\", false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"CloudOutlined\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 38\n            }, this),\n            children: \"nav 5\"\n          }, \"5\", false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"AppstoreOutlined\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 38\n            }, this),\n            children: \"nav 6\"\n          }, \"6\", false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"TeamOutlined\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 38\n            }, this),\n            children: \"nav 7\"\n          }, \"7\", false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"ShopOutlined\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 38\n            }, this),\n            children: \"nav 8\"\n          }, \"8\", false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], {\n        className: _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.siteLayout,\n        style: {\n          marginLeft: 200\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Header, {\n          className: _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.siteLayoutBackground,\n          style: {\n            padding: 0\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Content, {\n          style: {\n            margin: \"24px 16px 0\",\n            overflow: \"initial\"\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.siteLayoutBackground,\n            style: {\n              padding: 24,\n              textAlign: \"center\"\n            },\n            children: [\"...\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 15\n            }, this), \"Really\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 15\n            }, this), \"...\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 15\n            }, this), \"...\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 15\n            }, this), \"...\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 15\n            }, this), \"long\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 15\n            }, this), \"...\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 15\n            }, this), \"...\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 15\n            }, this), \"...\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 15\n            }, this), \"...\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 84,\n              columnNumber: 15\n            }, this), \"content\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Footer, {\n          style: {\n            textAlign: \"center\"\n          },\n          children: \"Ant Design \\xA92018 Created by Ant UED\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkhlYWRlciIsIkNvbnRlbnQiLCJGb290ZXIiLCJTaWRlciIsIkxheW91dCIsIkFETGF5b3V0QWQiLCJvdmVyZmxvdyIsImhlaWdodCIsInBvc2l0aW9uIiwibGVmdCIsInN0eWxlcyIsInNpdGVMYXlvdXQiLCJtYXJnaW5MZWZ0Iiwic2l0ZUxheW91dEJhY2tncm91bmQiLCJwYWRkaW5nIiwibWFyZ2luIiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVdBLE1BQU07QUFBRUEsUUFBRjtBQUFVQyxTQUFWO0FBQW1CQyxRQUFuQjtBQUEyQkM7QUFBM0IsSUFBcUNDLDJDQUEzQztBQUVlLFNBQVNDLFVBQVQsR0FBc0I7QUFDbkMsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQywyQ0FBRDtBQUFBLDhCQUNFLHFFQUFDLEtBQUQ7QUFDRSxhQUFLLEVBQUU7QUFDTEMsa0JBQVEsRUFBRSxNQURMO0FBRUxDLGdCQUFNLEVBQUUsT0FGSDtBQUdMQyxrQkFBUSxFQUFFLE9BSEw7QUFJTEMsY0FBSSxFQUFFO0FBSkQsU0FEVDtBQUFBLGdDQVFFO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkYsZUFTRSxxRUFBQyx5Q0FBRDtBQUFNLGVBQUssRUFBQyxNQUFaO0FBQW1CLGNBQUksRUFBQyxRQUF4QjtBQUFpQyw2QkFBbUIsRUFBRSxDQUFDLEdBQUQsQ0FBdEQ7QUFBQSxrQ0FDRSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBbUIsZ0JBQUksZUFBRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUF6QjtBQUFBO0FBQUEsYUFBZSxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBbUIsZ0JBQUksZUFBRSxxRUFB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O0FBQUEsZ0JBakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQTZFRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0xheW91dC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBMYXlvdXQsIE1lbnUgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHtcbiAgQXBwc3RvcmVPdXRsaW5lZCxcbiAgQmFyQ2hhcnRPdXRsaW5lZCxcbiAgQ2xvdWRPdXRsaW5lZCxcbiAgU2hvcE91dGxpbmVkLFxuICBUZWFtT3V0bGluZWQsXG4gIFVzZXJPdXRsaW5lZCxcbiAgVXBsb2FkT3V0bGluZWQsXG4gIFZpZGVvQ2FtZXJhT3V0bGluZWQsXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuXG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgRm9vdGVyLCBTaWRlciB9ID0gTGF5b3V0O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBRExheW91dEFkKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8U2lkZXJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cbiAgICAgICAgICA8TWVudSB0aGVtZT1cImRhcmtcIiBtb2RlPVwiaW5saW5lXCIgZGVmYXVsdFNlbGVjdGVkS2V5cz17W1wiNFwiXX0+XG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjFcIiBpY29uPXs8VXNlck91dGxpbmVkIC8+fT5cbiAgICAgICAgICAgICAgQ2FsY3VsYWRvcmEgZGUgY29uc3VtbyBkZSBlZHVsY29yYW50ZXNcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIyXCIgaWNvbj17PFZpZGVvQ2FtZXJhT3V0bGluZWQgLz59PjwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIzXCIgaWNvbj17PFVwbG9hZE91dGxpbmVkIC8+fT5cbiAgICAgICAgICAgICAgQ2h1bGV0YVxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjRcIiBpY29uPXs8QmFyQ2hhcnRPdXRsaW5lZCAvPn0+XG4gICAgICAgICAgICAgIENodWxldGFcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI1XCIgaWNvbj17PENsb3VkT3V0bGluZWQgLz59PlxuICAgICAgICAgICAgICBuYXYgNVxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjZcIiBpY29uPXs8QXBwc3RvcmVPdXRsaW5lZCAvPn0+XG4gICAgICAgICAgICAgIG5hdiA2XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiN1wiIGljb249ezxUZWFtT3V0bGluZWQgLz59PlxuICAgICAgICAgICAgICBuYXYgN1xuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjhcIiBpY29uPXs8U2hvcE91dGxpbmVkIC8+fT5cbiAgICAgICAgICAgICAgbmF2IDhcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgPC9TaWRlcj5cbiAgICAgICAgPExheW91dCBjbGFzc05hbWU9e3N0eWxlcy5zaXRlTGF5b3V0fSBzdHlsZT17eyBtYXJnaW5MZWZ0OiAyMDAgfX0+XG4gICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2l0ZUxheW91dEJhY2tncm91bmR9XG4gICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAwIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29udGVudCBzdHlsZT17eyBtYXJnaW46IFwiMjRweCAxNnB4IDBcIiwgb3ZlcmZsb3c6IFwiaW5pdGlhbFwiIH19PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zaXRlTGF5b3V0QmFja2dyb3VuZH1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogMjQsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIFJlYWxseVxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgbG9uZ1xuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICBjb250ZW50XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgPEZvb3RlciBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICBBbnQgRGVzaWduIMKpMjAxOCBDcmVhdGVkIGJ5IEFudCBVRURcbiAgICAgICAgICA8L0Zvb3Rlcj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/cristopher/pt2/edulcorantes/pages/index.js\";\n\n\n\n\nfunction Home() {\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    console.log(\"jajajajaja aqui estoy\");\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQzdCQyx5REFBUyxDQUFDLE1BQU07QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQU8scUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJqYWphamFqYWphIGFxdWkgZXN0b3lcIik7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPExheW91dCAvPjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"logo\": \"Home_logo__1YbrH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2M1NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./styles/Layout.module.css":
/*!**********************************!*\
  !*** ./styles/Layout.module.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"siteLayout\": \"Layout_siteLayout__3TEKc\",\n\t\"siteLayoutBackground\": \"Layout_siteLayoutBackground__3HQTr\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvTGF5b3V0Lm1vZHVsZS5jc3M/MTc2OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0xheW91dC5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2l0ZUxheW91dFwiOiBcIkxheW91dF9zaXRlTGF5b3V0X18zVEVLY1wiLFxuXHRcInNpdGVMYXlvdXRCYWNrZ3JvdW5kXCI6IFwiTGF5b3V0X3NpdGVMYXlvdXRCYWNrZ3JvdW5kX18zSFFUclwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Layout.module.css\n");

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@ant-design/icons\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiPzI0MTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFudC1kZXNpZ24vaWNvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@ant-design/icons\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCI/MDhhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbnRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });