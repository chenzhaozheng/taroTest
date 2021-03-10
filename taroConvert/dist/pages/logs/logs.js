(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/logs/logs"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/logs/logs.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/logs/logs.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mnt_d_Code_miniprogram_1_taroConvert_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _mnt_d_Code_miniprogram_1_taroConvert_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _mnt_d_Code_miniprogram_1_taroConvert_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _mnt_d_Code_miniprogram_1_taroConvert_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_with_weapp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/with-weapp */ "./node_modules/@tarojs/with-weapp/index.js");
/* harmony import */ var _tarojs_with_weapp__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_with_weapp__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _logs_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logs.scss */ "./src/pages/logs/logs.scss");
/* harmony import */ var _logs_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_logs_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);





var _dec, _class;





 // logs.js



var util = __webpack_require__(/*! ../../utils/util.js */ "./src/utils/util.js");

var _C = (_dec = _tarojs_with_weapp__WEBPACK_IMPORTED_MODULE_7___default()({
  data: {
    logs: []
  },
  onLoad: function onLoad() {
    this.setData({
      logs: (_tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log));
      })
    });
  }
}), _dec(_class = /*#__PURE__*/function (_React$Component) {
  Object(_mnt_d_Code_miniprogram_1_taroConvert_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_C, _React$Component);

  var _super = Object(_mnt_d_Code_miniprogram_1_taroConvert_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_C);

  function _C() {
    Object(_mnt_d_Code_miniprogram_1_taroConvert_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, _C);

    return _super.apply(this, arguments);
  }

  Object(_mnt_d_Code_miniprogram_1_taroConvert_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_C, [{
    key: "render",
    value: function render() {
      var logs = this.data.logs;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "e"], {
        className: "container log-list",
        children: logs.map(function (log, index) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Block */ "a"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "d"], {
              className: "log-item",
              children: index + 1 + '. ' + log
            })
          });
        })
      });
    }
  }]);

  return _C;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component)) || _class);

/* harmony default export */ __webpack_exports__["a"] = (_C);

/***/ }),

/***/ "./src/pages/logs/logs.js":
/*!********************************!*\
  !*** ./src/pages/logs/logs.js ***!
  \********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_logs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./logs.js */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/logs/logs.js");


var config = {"navigationBarTitleText":"查看启动日志"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_logs_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/logs/logs', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/logs/logs.scss":
/*!**********************************!*\
  !*** ./src/pages/logs/logs.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/utils/util.js":
/*!***************************!*\
  !*** ./src/utils/util.js ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var formatTime = function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return "".concat([year, month, day].map(formatNumber).join('/'), " ").concat([hour, minute, second].map(formatNumber).join(':'));
};

var formatNumber = function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : "0".concat(n);
};

module.exports = {
  formatTime: formatTime
};

/***/ })

},[["./src/pages/logs/logs.js","runtime","taro","vendors"]]]);
//# sourceMappingURL=logs.js.map