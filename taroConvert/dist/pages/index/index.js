(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/index/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/index/index.js ***!
  \***************************************************************************************************/
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
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);





var _dec, _class;





 // index.js
// 获取应用实例



var app = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getApp();

var _C = (_dec = _tarojs_with_weapp__WEBPACK_IMPORTED_MODULE_7___default()({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.canIUse('button.open-type.getUserInfo')
  },
  // 事件处理函数
  bindViewTap: function bindViewTap() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.navigateTo({
      url: '../logs/logs'
    });
  },
  onLoad: function onLoad() {
    var _this = this;

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      });
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = function (res) {
        _this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
      };
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getUserInfo({
        success: function success(res) {
          app.globalData.userInfo = res.userInfo;

          _this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    }
  },
  getUserInfo: function getUserInfo(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
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
      var _this$data = this.data,
          hasUserInfo = _this$data.hasUserInfo,
          canIUse = _this$data.canIUse,
          userInfo = _this$data.userInfo,
          motto = _this$data.motto;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "e"], {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "e"], {
          className: "userinfo",
          children: !hasUserInfo && canIUse ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Button */ "b"], {
            openType: "getUserInfo",
            onGetuserinfo: this.getUserInfo,
            children: "\u83B7\u53D6\u5934\u50CF\u6635\u79F0"
          }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Block */ "a"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "c"], {
              onClick: this.bindViewTap,
              className: "userinfo-avatar",
              src: userInfo.avatarUrl,
              mode: "cover"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "d"], {
              className: "userinfo-nickname",
              children: userInfo.nickName
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "e"], {
          className: "usermotto",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "d"], {
            className: "user-motto",
            children: motto
          })
        })]
      });
    }
  }]);

  return _C;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component)) || _class);

/* harmony default export */ __webpack_exports__["a"] = (_C);

/***/ }),

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./index.js */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/index/index.js");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/index/index.js","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map