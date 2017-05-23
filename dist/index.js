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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return child; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fileSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return buttonsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return buttonUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return buttonDownload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return hidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return clickThrough; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var WHITE = "#FFFFFF";
var LIGHT_GREY = "#FBFCFF";
var DARK_GREY = "#2A2F3A";
var CYAN = "#2BAAD8";
var DARK_BLUE = "#274156";

var wrapper = {
  position: "relative",
  height: "100%",
  width: "100%"
};

var base = function base(_ref) {
  var children = _ref.children;
  return {
    position: "absolute",
    display: "inline-block",
    textAlign: "center",
    textTransform: "uppercase",
    background: DARK_GREY,
    fontFamily: 'monaco, Consolas, "Lucida Console", monospace',
    width: children ? "20%" : "100%",
    height: "100%",
    color: WHITE,
    border: "none"
  };
};

var child = {
  position: "absolute",
  height: "100%",
  width: "80%",
  display: "inline-block",
  left: "20%",
  top: "0",
  border: "none"
};

var header = {
  margin: "8px 0 0",
  display: "block",
  fontSize: "12px"
};

var fileSize = {
  margin: "10px 0",
  fontSize: "24px",
  display: "block",
  color: CYAN,
  textTransform: "initial",
  fontFamily: "monospace"
};

var notification = {
  margin: "4px 0 0",
  color: "#FFFFFF",
  padding: "2px",
  fontSize: "10px"
};

var error = _extends({ background: "#9A031E" }, notification);
var success = _extends({ background: "#6BAB90" }, notification);

var buttonsContainer = {
  padding: "0 10px"
};

var button = {
  margin: "0 8px 4px",
  padding: "10px",
  background: DARK_BLUE,
  color: LIGHT_GREY,
  border: "1px solid " + LIGHT_GREY,
  fontFamily: "Arial",
  fontSize: "14px"
};
var buttonUpload = _extends({}, button);
var buttonDownload = _extends({}, button);

var hidden = { display: "none" };
var clickThrough = { pointerEvents: "none" };

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
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

    _this.validateChildren = _this.validateChildren.bind(_this);
    _this.handleFiles = _this.handleFiles.bind(_this);
    return _this;
  }

  _createClass(UploadDownloadMonitor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getFileInputEl().addEventListener("change", this.handleFiles, false);

      this.validateChildren();
    }
  }, {
    key: "validateChildren",
    value: function validateChildren() {
      var children = this.props.children;


      var isValid = !children || children.type.name === "SliderMonitor";

      if (!isValid) {
        console.warn("UploadDownloadMonitor was passed a child other than SliderMonitor. This may cause problems!");
      }
    }
  }, {
    key: "handleFiles",
    value: function handleFiles() {
      var _this2 = this;

      var fileReader = new FileReader();

      fileReader.onload = function (evt) {
        var originalAppState = _this2.getAppState();

        try {
          var newAppState = JSON.parse(evt.target.result);
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
    key: "renderInfo",
    value: function renderInfo(stringifiedAppState) {
      var appStateFilesize = __WEBPACK_IMPORTED_MODULE_3_filesize___default()(stringifiedAppState.length);
      var _state = this.state,
          fileError = _state.fileError,
          fileSuccess = _state.fileSuccess;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "span",
        { style: __WEBPACK_IMPORTED_MODULE_5__styles__["c" /* fileSize */] },
        fileError ? this.renderFileError() : null,
        fileSuccess ? this.renderFileSuccess() : null,
        !(fileError || fileSuccess) ? appStateFilesize : null
      );
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this3 = this;

      var cloneChild = function cloneChild(child) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(child, _extends({}, _this3.props));
      };
      var childrenWithProps = __WEBPACK_IMPORTED_MODULE_0_react__["Children"].map(this.props.children, cloneChild);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { style: __WEBPACK_IMPORTED_MODULE_5__styles__["d" /* child */] },
        childrenWithProps
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var stringifiedAppState = JSON.stringify(this.getAppState());
      var fileLink = "data:text/json;charset=utf-8, " + encodeURIComponent(stringifiedAppState);

      var genFileName = function genFileName() {
        return (document.title || "app") + "-state.json";
      };
      var promptDownload = function promptDownload() {
        return _this4.refs.fileDownload.click();
      };
      var promptUpload = function promptUpload() {
        return _this4.refs.fileUpload.click();
      };
      var resetNotifications = function resetNotifications() {
        return _this4.setState({ fileError: false, fileSuccess: false });
      };

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { style: __WEBPACK_IMPORTED_MODULE_5__styles__["e" /* wrapper */] },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { style: __WEBPACK_IMPORTED_MODULE_5__styles__["f" /* base */](this.props), onClick: resetNotifications },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "span",
            { style: __WEBPACK_IMPORTED_MODULE_5__styles__["g" /* header */] },
            "Current state filesize"
          ),
          this.renderInfo(stringifiedAppState),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { style: __WEBPACK_IMPORTED_MODULE_5__styles__["h" /* buttonsContainer */] },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { style: __WEBPACK_IMPORTED_MODULE_5__styles__["i" /* buttonDownload */], onClick: promptDownload },
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
                style: __WEBPACK_IMPORTED_MODULE_5__styles__["j" /* hidden */]
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { style: __WEBPACK_IMPORTED_MODULE_5__styles__["k" /* buttonUpload */], onClick: promptUpload },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "label",
                { htmlFor: "file-upload", style: __WEBPACK_IMPORTED_MODULE_5__styles__["l" /* clickThrough */] },
                "Upload"
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
                ref: "fileUpload",
                id: "file-upload",
                type: "file",
                style: __WEBPACK_IMPORTED_MODULE_5__styles__["j" /* hidden */]
              })
            )
          )
        ),
        this.props.children ? this.renderChildren() : null
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