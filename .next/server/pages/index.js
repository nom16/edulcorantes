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

/***/ "./components/Aditives.js":
/*!********************************!*\
  !*** ./components/Aditives.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Aditives; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Layout.module.css */ \"./styles/Layout.module.css\");\n/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/cristopher/pt2/edulcorantes/components/Aditives.js\";\n\n\n\nfunction Aditives(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"hola\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FkaXRpdmVzLmpzP2ZhYWUiXSwibmFtZXMiOlsiQWRpdGl2ZXMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3RDLHNCQUNFO0FBQUEsMkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQUtEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BZGl0aXZlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9MYXlvdXQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgTGF5b3V0LCBNZW51IH0gZnJvbSBcImFudGRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRpdGl2ZXMocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPmhvbGE8L2gxPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Aditives.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ADLayoutAd; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Layout.module.css */ \"./styles/Layout.module.css\");\n/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/cristopher/pt2/edulcorantes/components/Layout.js\";\n\n\n\n\nconst {\n  Header,\n  Content,\n  Footer,\n  Sider\n} = antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"];\nconst {\n  SubMenu\n} = antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"];\nfunction ADLayoutAd(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], {\n      hasSider: true,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Sider, {\n        style: {\n          overflow: \"auto\",\n          height: \"100vh\",\n          position: \"fixed\",\n          left: 0\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"], {\n          onClick: item => {\n            props.OnClickItem(item);\n          },\n          theme: \"light\",\n          mode: \"inline\",\n          defaultSelectedKeys: [\"4\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n            children: \"Aditivos\"\n          }, \"1\", false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n            children: \"Edulcorantes\"\n          }, \"2\", false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n            children: \"Clasificaci\\xF3n\"\n          }, \"3\", false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n            children: \"Blabla\"\n          }, \"4\", false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n            children: \"Clasificaci\\xF3n\"\n          }, \"5\", false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SubMenu, {\n            title: \"Cal\\xF3ricos\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SubMenu, {\n              title: \"Glucosa\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n                children: \"Tom\"\n              }, \"6\", false, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n                children: \"Bill\"\n              }, \"7\", false, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n                children: \"Alex\"\n              }, \"8\", false, {\n                fileName: _jsxFileName,\n                lineNumber: 47,\n                columnNumber: 17\n              }, this)]\n            }, \"sub2\", true, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 15\n            }, this)\n          }, \"sub1\", false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SubMenu, {\n            title: \"No cal\\xF3ricos\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SubMenu, {\n              title: \"Sucralosa\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n                children: \"Composici\\xF3n\"\n              }, \"9\", false, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n                children: \"IDA\"\n              }, \"10\", false, {\n                fileName: _jsxFileName,\n                lineNumber: 53,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n                children: \"Efectos\"\n              }, \"11\", false, {\n                fileName: _jsxFileName,\n                lineNumber: 54,\n                columnNumber: 17\n              }, this)]\n            }, \"sub4\", true, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 15\n            }, this)\n          }, \"sub3\", false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n            children: \"nav 8\"\n          }, \"12\", false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n            children: \"sdfsd\"\n          }, \"13\", false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], {\n        className: _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.siteLayout,\n        style: {\n          marginLeft: 200\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Header, {\n          className: _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.siteLayoutBackground,\n          style: {\n            padding: 0\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Content, {\n          style: {\n            margin: \"24px 16px 0\",\n            overflow: \"initial\"\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.siteLayoutBackground,\n            style: {\n              padding: 24,\n              textAlign: \"center\"\n            },\n            children: props.children\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkhlYWRlciIsIkNvbnRlbnQiLCJGb290ZXIiLCJTaWRlciIsIkxheW91dCIsIlN1Yk1lbnUiLCJNZW51IiwiQURMYXlvdXRBZCIsInByb3BzIiwib3ZlcmZsb3ciLCJoZWlnaHQiLCJwb3NpdGlvbiIsImxlZnQiLCJpdGVtIiwiT25DbGlja0l0ZW0iLCJzdHlsZXMiLCJzaXRlTGF5b3V0IiwibWFyZ2luTGVmdCIsInNpdGVMYXlvdXRCYWNrZ3JvdW5kIiwicGFkZGluZyIsIm1hcmdpbiIsInRleHRBbGlnbiIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVdBLE1BQU07QUFBRUEsUUFBRjtBQUFVQyxTQUFWO0FBQW1CQyxRQUFuQjtBQUEyQkM7QUFBM0IsSUFBcUNDLDJDQUEzQztBQUNBLE1BQU07QUFBRUM7QUFBRixJQUFjQyx5Q0FBcEI7QUFDZSxTQUFTQyxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUN4QyxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLDJDQUFEO0FBQVEsY0FBUSxNQUFoQjtBQUFBLDhCQUNFLHFFQUFDLEtBQUQ7QUFDRSxhQUFLLEVBQUU7QUFDTEMsa0JBQVEsRUFBRSxNQURMO0FBRUxDLGdCQUFNLEVBQUUsT0FGSDtBQUdMQyxrQkFBUSxFQUFFLE9BSEw7QUFJTEMsY0FBSSxFQUFFO0FBSkQsU0FEVDtBQUFBLGdDQVFFO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkYsZUFTRSxxRUFBQyx5Q0FBRDtBQUNFLGlCQUFPLEVBQUdDLElBQUQsSUFBVTtBQUNqQkwsaUJBQUssQ0FBQ00sV0FBTixDQUFrQkQsSUFBbEI7QUFDRCxXQUhIO0FBSUUsZUFBSyxFQUFDLE9BSlI7QUFLRSxjQUFJLEVBQUMsUUFMUDtBQU1FLDZCQUFtQixFQUFFLENBQUMsR0FBRCxDQU52QjtBQUFBLGtDQVFFLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBO0FBQUEsYUFBZSxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkYsZUFTRSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQTtBQUFBLGFBQWUsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRGLGVBVUUscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQSxhQUFlLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWRixlQVdFLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBO0FBQUEsYUFBZSxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWEYsZUFZRSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQTtBQUFBLGFBQWUsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVpGLGVBYUUscUVBQUMsT0FBRDtBQUFvQixpQkFBSyxFQUFDLGNBQTFCO0FBQUEsbUNBQ0UscUVBQUMsT0FBRDtBQUFvQixtQkFBSyxFQUFDLFNBQTFCO0FBQUEsc0NBQ0UscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQSxpQkFBZSxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQTtBQUFBLGlCQUFlLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRixlQUdFLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBO0FBQUEsaUJBQWUsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhGO0FBQUEsZUFBYSxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFhLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFiRixlQW9CRSxxRUFBQyxPQUFEO0FBQW9CLGlCQUFLLEVBQUMsaUJBQTFCO0FBQUEsbUNBQ0UscUVBQUMsT0FBRDtBQUFvQixtQkFBSyxFQUFDLFdBQTFCO0FBQUEsc0NBQ0UscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQSxpQkFBZSxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQTtBQUFBLGlCQUFlLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRixlQUdFLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBO0FBQUEsaUJBQWUsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhGO0FBQUEsZUFBYSxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFhLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFwQkYsZUE0QkUscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQSxhQUFlLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE1QkYsZUE2QkUscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQSxhQUFlLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBMENFLHFFQUFDLDJDQUFEO0FBQVEsaUJBQVMsRUFBRUUsZ0VBQU0sQ0FBQ0MsVUFBMUI7QUFBc0MsYUFBSyxFQUFFO0FBQUVDLG9CQUFVLEVBQUU7QUFBZCxTQUE3QztBQUFBLGdDQUNFLHFFQUFDLE1BQUQ7QUFDRSxtQkFBUyxFQUFFRixnRUFBTSxDQUFDRyxvQkFEcEI7QUFFRSxlQUFLLEVBQUU7QUFBRUMsbUJBQU8sRUFBRTtBQUFYO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUtFLHFFQUFDLE9BQUQ7QUFBUyxlQUFLLEVBQUU7QUFBRUMsa0JBQU0sRUFBRSxhQUFWO0FBQXlCWCxvQkFBUSxFQUFFO0FBQW5DLFdBQWhCO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxFQUFFTSxnRUFBTSxDQUFDRyxvQkFEcEI7QUFFRSxpQkFBSyxFQUFFO0FBQUVDLHFCQUFPLEVBQUUsRUFBWDtBQUFlRSx1QkFBUyxFQUFFO0FBQTFCLGFBRlQ7QUFBQSxzQkFJR2IsS0FBSyxDQUFDYztBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQTZERCIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0xheW91dC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBMYXlvdXQsIE1lbnUgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHtcbiAgQXBwc3RvcmVPdXRsaW5lZCxcbiAgQmFyQ2hhcnRPdXRsaW5lZCxcbiAgQ2xvdWRPdXRsaW5lZCxcbiAgU2hvcE91dGxpbmVkLFxuICBUZWFtT3V0bGluZWQsXG4gIFVzZXJPdXRsaW5lZCxcbiAgVXBsb2FkT3V0bGluZWQsXG4gIFZpZGVvQ2FtZXJhT3V0bGluZWQsXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuXG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgRm9vdGVyLCBTaWRlciB9ID0gTGF5b3V0O1xuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQURMYXlvdXRBZChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0IGhhc1NpZGVyPlxuICAgICAgICA8U2lkZXJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cbiAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgb25DbGljaz17KGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgcHJvcHMuT25DbGlja0l0ZW0oaXRlbSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdGhlbWU9XCJsaWdodFwiXG4gICAgICAgICAgICBtb2RlPVwiaW5saW5lXCJcbiAgICAgICAgICAgIGRlZmF1bHRTZWxlY3RlZEtleXM9e1tcIjRcIl19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIxXCI+QWRpdGl2b3M8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMlwiPkVkdWxjb3JhbnRlczwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIzXCI+Q2xhc2lmaWNhY2nDs248L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNFwiPkJsYWJsYTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI1XCI+Q2xhc2lmaWNhY2nDs248L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxTdWJNZW51IGtleT1cInN1YjFcIiB0aXRsZT1cIkNhbMOzcmljb3NcIj5cbiAgICAgICAgICAgICAgPFN1Yk1lbnUga2V5PVwic3ViMlwiIHRpdGxlPVwiR2x1Y29zYVwiPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNlwiPlRvbTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiN1wiPkJpbGw8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjhcIj5BbGV4PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvU3ViTWVudT5cbiAgICAgICAgICAgIDwvU3ViTWVudT5cbiAgICAgICAgICAgIDxTdWJNZW51IGtleT1cInN1YjNcIiB0aXRsZT1cIk5vIGNhbMOzcmljb3NcIj5cbiAgICAgICAgICAgICAgPFN1Yk1lbnUga2V5PVwic3ViNFwiIHRpdGxlPVwiU3VjcmFsb3NhXCI+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI5XCI+Q29tcG9zaWNpw7NuPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIxMFwiPklEQTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMTFcIj5FZmVjdG9zPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvU3ViTWVudT5cbiAgICAgICAgICAgIDwvU3ViTWVudT5cblxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIxMlwiPm5hdiA4PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjEzXCI+c2Rmc2Q8L01lbnUuSXRlbT5cbiAgICAgICAgICA8L01lbnU+XG4gICAgICAgIDwvU2lkZXI+XG4gICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPXtzdHlsZXMuc2l0ZUxheW91dH0gc3R5bGU9e3sgbWFyZ2luTGVmdDogMjAwIH19PlxuICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNpdGVMYXlvdXRCYWNrZ3JvdW5kfVxuICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogMCB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbnRlbnQgc3R5bGU9e3sgbWFyZ2luOiBcIjI0cHggMTZweCAwXCIsIG92ZXJmbG93OiBcImluaXRpYWxcIiB9fT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2l0ZUxheW91dEJhY2tncm91bmR9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IDI0LCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Aditives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Aditives */ \"./components/Aditives.js\");\n\n\nvar _jsxFileName = \"/Users/cristopher/pt2/edulcorantes/pages/index.js\";\n\n\n\n\n\nlet component = null;\nfunction Home() {\n  const {\n    0: menuKey,\n    1: setMenuKey\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"1\");\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    switch (menuKey) {\n      case \"1\":\n        component = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Aditives__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 21\n        }, this);\n        break;\n\n      case \"2\":\n        component = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: menuKey\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 21\n        }, this);\n        break;\n\n      case \"3\":\n        component = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: menuKey\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 21\n        }, this);\n        break;\n\n      default:\n        component = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: menuKey\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }, this);\n        break;\n    }\n  }, [menuKey]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      OnClickItem: item => {\n        setMenuKey(item.key);\n      },\n      children: component\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImNvbXBvbmVudCIsIkhvbWUiLCJtZW51S2V5Iiwic2V0TWVudUtleSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaXRlbSIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFNBQVMsR0FBRyxJQUFoQjtBQUVlLFNBQVNDLElBQVQsR0FBZ0I7QUFDN0IsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLEdBQUQsQ0FBdEM7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsWUFBUUgsT0FBUjtBQUNFLFdBQUssR0FBTDtBQUNFRixpQkFBUyxnQkFBRyxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFaO0FBQ0E7O0FBQ0YsV0FBSyxHQUFMO0FBQ0VBLGlCQUFTLGdCQUFHO0FBQUEsb0JBQUtFO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBWjtBQUNBOztBQUNGLFdBQUssR0FBTDtBQUNFRixpQkFBUyxnQkFBRztBQUFBLG9CQUFLRTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVo7QUFDQTs7QUFDRjtBQUNFRixpQkFBUyxnQkFBRztBQUFBLG9CQUFLRTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVo7QUFDQTtBQVpKO0FBY0QsR0FmUSxFQWVOLENBQUNBLE9BQUQsQ0FmTSxDQUFUO0FBaUJBLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsMERBQUQ7QUFDRSxpQkFBVyxFQUFHSSxJQUFELElBQVU7QUFDckJILGtCQUFVLENBQUNHLElBQUksQ0FBQ0MsR0FBTixDQUFWO0FBQ0QsT0FISDtBQUFBLGdCQUtHUDtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQVdEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBBZGl0aXZlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9BZGl0aXZlc1wiO1xuXG5sZXQgY29tcG9uZW50ID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW21lbnVLZXksIHNldE1lbnVLZXldID0gdXNlU3RhdGUoXCIxXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3dpdGNoIChtZW51S2V5KSB7XG4gICAgICBjYXNlIFwiMVwiOlxuICAgICAgICBjb21wb25lbnQgPSA8QWRpdGl2ZXMgLz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgY29tcG9uZW50ID0gPGgxPnttZW51S2V5fTwvaDE+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgIGNvbXBvbmVudCA9IDxoMT57bWVudUtleX08L2gxPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb21wb25lbnQgPSA8aDE+e21lbnVLZXl9PC9oMT47XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSwgW21lbnVLZXldKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0XG4gICAgICAgIE9uQ2xpY2tJdGVtPXsoaXRlbSkgPT4ge1xuICAgICAgICAgIHNldE1lbnVLZXkoaXRlbS5rZXkpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y29tcG9uZW50fVxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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