module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var reducer = function reducer(state) {
  return state;
};

/* harmony default export */ __webpack_exports__["a"] = (reducer);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return fileSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return buttonsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return buttonUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return buttonDownload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hidden; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var WHITE = "#FFFFFF";
var LIGHT_GREY = "#B0B0B0";
var DARK_GREY = "#2A2F3A";
var PUKE_GREEN = "#A1C659";

var base = {
  textAlign: "center",
  textTransform: "uppercase",
  background: DARK_GREY,
  padding: "20px 0",
  fontFamily: 'monaco, Consolas, "Lucida Console", monospace',
  height: "100%",
  color: WHITE
};

var header = {
  display: "block"
};

var fileSize = {
  margin: "10px 0",
  fontSize: "22px",
  display: "block",
  color: PUKE_GREEN,
  textTransform: "initial",
  fontFamily: "monospace"
};

var notification = {
  color: "#FFFFFF",
  padding: "10px"
};

var error = _extends({ background: "#FF0000" }, notification);
var success = _extends({ background: "#00FF00" }, notification);

var buttonsContainer = {
  padding: "0 10px 10px"
};

var button = {
  margin: "0 8px 8px",
  padding: "10px",
  border: "1px solid " + LIGHT_GREY,
  borderRadius: "10px",
  fontFamily: "Arial"
};
var buttonUpload = _extends({}, button);
var buttonDownload = _extends({}, button);

var hidden = { display: "none" };

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("filesize");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_devtools__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_devtools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_devtools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_filesize__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_filesize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_filesize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var UploadDownloadMonitor = function (_Component) {
  _inherits(UploadDownloadMonitor, _Component);

  function UploadDownloadMonitor(props) {
    _classCallCheck(this, UploadDownloadMonitor);

    var _this = _possibleConstructorReturn(this, (UploadDownloadMonitor.__proto__ || Object.getPrototypeOf(UploadDownloadMonitor)).call(this, props));

    _this.getFileInputEl = function () {
      return document.getElementById("file-upload");
    };

    _this.getAppState = function () {
      return {
        monitorState: _this.props.monitorState,
        actionsById: _this.props.actionsById,
        nextActionId: _this.props.nextActionId,
        stagedActionIds: _this.props.stagedActionIds,
        skippedActionIds: _this.props.skippedActionIds,
        committedState: _this.props.committedState,
        computedStates: [],
        currentStateIndex: _this.props.currentStateIndex
      };
    };

    _this.renderFileError = function () {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { style: __WEBPACK_IMPORTED_MODULE_5__styles__["a" /* error */] },
        "Error parsing file, please upload a valid application state"
      );
    };

    _this.renderFileSuccess = function () {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { style: __WEBPACK_IMPORTED_MODULE_5__styles__["b" /* success */] },
        "State successfully uploaded and imported into application"
      );
    };

    _this.state = {
      fileError: false
    };

    _this.handleFiles = _this.handleFiles.bind(_this);
    return _this;
  }

  _createClass(UploadDownloadMonitor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getFileInputEl().addEventListener("change", this.handleFiles, false);
    }
  }, {
    key: "handleFiles",
    value: function handleFiles() {
      var _this2 = this;

      var fileReader = new FileReader();

      fileReader.onload = function (evt) {
        var originalAppState = _this2.getAppState();
        var newAppState = JSON.parse(evt.target.result);

        try {
          _this2.setState({ fileError: false, fileSuccess: true });
          _this2.props.dispatch(__WEBPACK_IMPORTED_MODULE_2_redux_devtools__["ActionCreators"].importState(newAppState));
        } catch (e) {
          _this2.setState({ fileError: true, fileSuccess: false });
          _this2.props.dispatch(__WEBPACK_IMPORTED_MODULE_2_redux_devtools__["ActionCreators"].importState(originalAppState));
        }
      };

      var file = this.getFileInputEl().files[0];
      fileReader.readAsText(file);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var stringifiedAppState = JSON.stringify(this.getAppState());
      var fileLink = "data:text/json;charset=utf-8, " + encodeURIComponent(stringifiedAppState);
      var genFileName = function genFileName() {
        return (document.title || "app") + "-state.json";
      };
      var promptDownload = function promptDownload() {
        return _this3.refs.fileDownload.click();
      };
      var promptUpload = function promptUpload() {
        return _this3.refs.fileUpload.click();
      };

      var resetNotifications = function resetNotifications() {
        return _this3.setState({
          fileError: false,
          fileSuccess: false
        });
      };

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { style: __WEBPACK_IMPORTED_MODULE_5__styles__["c" /* base */], onClick: resetNotifications },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "span",
          { style: __WEBPACK_IMPORTED_MODULE_5__styles__["d" /* header */] },
          "Current state filesize"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "span",
          { style: __WEBPACK_IMPORTED_MODULE_5__styles__["e" /* fileSize */] },
          __WEBPACK_IMPORTED_MODULE_3_filesize___default()(stringifiedAppState.length)
        ),
        this.state.fileError ? this.renderFileError() : null,
        this.state.fileSuccess ? this.renderFileSuccess() : null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { style: __WEBPACK_IMPORTED_MODULE_5__styles__["f" /* buttonsContainer */] },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { style: __WEBPACK_IMPORTED_MODULE_5__styles__["g" /* buttonDownload */], onClick: promptDownload },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "label",
              { htmlFor: "file-download" },
              "Download"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              ref: "fileDownload",
              id: "file-download",
              href: fileLink,
              download: genFileName(),
              style: __WEBPACK_IMPORTED_MODULE_5__styles__["h" /* hidden */]
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { style: __WEBPACK_IMPORTED_MODULE_5__styles__["i" /* buttonUpload */], onClick: promptUpload },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "label",
              { htmlFor: "file-upload" },
              "Upload"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
              ref: "fileUpload",
              id: "file-upload",
              type: "file",
              style: __WEBPACK_IMPORTED_MODULE_5__styles__["h" /* hidden */]
            })
          )
        )
      );
    }
  }]);

  return UploadDownloadMonitor;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

UploadDownloadMonitor.update = __WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */];
UploadDownloadMonitor.propTypes = {
  dispatch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  computedStates: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
  stagedActionIds: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
  actionsById: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  committedState: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  monitorState: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    initialScrollTop: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
  }),
  skippedActionIds: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
  nextActionId: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  currentStateIndex: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
};


/* harmony default export */ __webpack_exports__["default"] = (UploadDownloadMonitor);

/***/ })
/******/ ]);