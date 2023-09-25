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
/******/ 	return __webpack_require__(__webpack_require__.s = "./block.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./block.js":
/*!******************!*\
  !*** ./block.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_blocks_timeline_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/blocks/timeline/block */ "./src/blocks/timeline/block.js");
/**
 * styles and scripts that goes into editor
 */


/***/ }),

/***/ "./src/blocks/timeline/block.js":
/*!**************************************!*\
  !*** ./src/blocks/timeline/block.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/timeline/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/blocks/timeline/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/timeline/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/**
 * BLOCK: UBC Wiki Embed.
 */
// Import block dependencies and components.



const __ = wp.i18n.__;
const registerBlockType = wp.blocks.registerBlockType;
registerBlockType('ubc/timeline', {
  title: __('UBC Timeline', 'ubc-timeline'),
  description: __('Provide Gutenberg block for user to create a timeline.', 'ubc-timeline'),
  icon: 'time',
  keywords: [__('Timeline', 'ubc-timeline')],
  category: 'layout',
  example: {
    attributes: {
      data: [{
        info: 'JAN 01, 2020',
        title: `Timeline 1`,
        description: 'Description Placeholder',
        is_period: false
      }, {
        info: 'JAN 01, 2020',
        title: `Timeline 2`,
        description: 'Description Placeholder',
        is_period: false
      }],
      setDefaultData: true
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/blocks/timeline/edit.js":
/*!*************************************!*\
  !*** ./src/blocks/timeline/edit.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/blocks/timeline/helper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * BLOCK: Tabs
 */
const InspectorControls = wp.blockEditor.InspectorControls;
const _wp$components = wp.components,
      PanelBody = _wp$components.PanelBody,
      Button = _wp$components.Button,
      TextareaControl = _wp$components.TextareaControl,
      TextControl = _wp$components.TextControl,
      ToggleControl = _wp$components.ToggleControl;
const __ = wp.i18n.__;
const _wp$element = wp.element,
      useEffect = _wp$element.useEffect,
      useState = _wp$element.useState,
      Fragment = _wp$element.Fragment;


const Edit = ({
  attributes,
  setAttributes
}) => {
  const _attributes$data = attributes.data,
        data = _attributes$data === void 0 ? [] : _attributes$data,
        _attributes$setDefaul = attributes.setDefaultData,
        setDefaultData = _attributes$setDefaul === void 0 ? true : _attributes$setDefaul;

  const _useState = useState(0),
        _useState2 = _slicedToArray(_useState, 2),
        openedTimelineIndex = _useState2[0],
        setOpenedTimelineIndex = _useState2[1];

  useEffect(() => {
    if (!setDefaultData) {
      return;
    }

    setAttributes({
      data: [generateDefaultTimeline(), _objectSpread(_objectSpread({}, generateDefaultTimeline()), {}, {
        title: 'Timeline 2'
      })],
      setDefaultData: false
    });
  }, [setDefaultData]);

  const generateDefaultTimeline = () => {
    return {
      info: 'JAN 01, 2020',
      title: `Timeline ${data.length + 1}`,
      description: 'Description Placeholder',
      is_period: false
    };
  };

  const updateTimelineProperty = (index, property, value) => {
    const copy = Object(_helper__WEBPACK_IMPORTED_MODULE_0__["deepCopy"])(data);
    copy[index][property] = value;
    setAttributes({
      data: copy
    });
  };

  const isFirst = index => {
    return index === 0;
  };

  const isLast = index => {
    return index === data.length - 1;
  };

  const timelineMoveTo = (currentIndex, targetIndex) => {
    const newData = Object(_helper__WEBPACK_IMPORTED_MODULE_0__["deepCopy"])(data);

    if (!newData[targetIndex] || !newData[currentIndex]) {
      return;
    }

    const temp = newData[targetIndex];
    newData[targetIndex] = newData[currentIndex];
    newData[currentIndex] = temp;
    setAttributes({
      data: newData
    });
    setOpenedTimelineIndex(targetIndex);
  };

  const deleteTimeLine = index => {
    const newData = data.filter((item, timelineIndex) => {
      return index !== timelineIndex;
    });
    setAttributes({
      data: newData
    });
  };

  const stripHTML = html => {
    return html.replace(/(<([^>]+)>)/gi, "");
    ;
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", {
    className: "timeline timeline-centered"
  }, data.map((timeline, index) => {
    return /*#__PURE__*/React.createElement("li", {
      key: index,
      className: `timeline-item${timeline.is_period ? ' period' : ''}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "timeline-info"
    }, /*#__PURE__*/React.createElement("span", null, timeline.info)), /*#__PURE__*/React.createElement("div", {
      className: "timeline-marker"
    }), /*#__PURE__*/React.createElement("div", {
      className: "timeline-content"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "timeline-title",
      dangerouslySetInnerHTML: {
        __html: timeline.title
      }
    }), /*#__PURE__*/React.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: timeline.description
      }
    })));
  })), /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {
    title: __('Timelines')
  }, /*#__PURE__*/React.createElement(Button, {
    isSecondary: true,
    onClick: e => {
      e.preventDefault();
      setAttributes({
        data: [...data, generateDefaultTimeline()]
      });
    },
    style: {
      marginBottom: '10px'
    }
  }, __('Add Timeline Item')), data.map((timeline, index) => {
    return /*#__PURE__*/React.createElement(PanelBody, {
      key: index,
      title: stripHTML(timeline.title),
      opened: index === openedTimelineIndex,
      onToggle: () => {
        if (openedTimelineIndex === index) {
          setOpenedTimelineIndex(-1);
          return;
        }

        setOpenedTimelineIndex(index);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "timeline-block-ctrl-group"
    }, /*#__PURE__*/React.createElement(Button, {
      isSecondary: true,
      onClick: e => {
        e.preventDefault();
        timelineMoveTo(index, index - 1);
      },
      disabled: isFirst(index)
    }, /*#__PURE__*/React.createElement("img", {
      src: `${ubc_timeline_admin.plugin_dir_url}src/images/chevron-up-solid.svg`,
      alt: "move up"
    })), /*#__PURE__*/React.createElement(Button, {
      isSecondary: true,
      onClick: e => {
        e.preventDefault();
        timelineMoveTo(index, index + 1);
      },
      disabled: isLast(index)
    }, /*#__PURE__*/React.createElement("img", {
      src: `${ubc_timeline_admin.plugin_dir_url}src/images/chevron-down-solid.svg`,
      alt: "move down"
    })), /*#__PURE__*/React.createElement(Button, {
      isSecondary: true,
      onClick: e => {
        e.preventDefault();

        if (!confirm('Would you like to remove selected timeline item?')) {
          return;
        }

        deleteTimeLine(index);
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: `${ubc_timeline_admin.plugin_dir_url}src/images/trash-alt-solid.svg`,
      alt: "trash"
    }))), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Title'),
      value: timeline.title,
      onChange: value => {
        updateTimelineProperty(index, 'title', value);
      }
    }), !timeline.is_period ? /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(TextControl, {
      label: __('Info'),
      value: timeline.info,
      onChange: value => {
        updateTimelineProperty(index, 'info', value);
      }
    }), /*#__PURE__*/React.createElement(TextareaControl, {
      label: __('Description'),
      value: timeline.description,
      help: __('Accept html code'),
      onChange: value => {
        updateTimelineProperty(index, 'description', value);
      }
    })) : '', /*#__PURE__*/React.createElement(ToggleControl, {
      label: "Is Timeline Divider?",
      checked: timeline.is_period,
      onChange: () => {
        updateTimelineProperty(index, 'is_period', !timeline.is_period);
      }
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/blocks/timeline/helper.js":
/*!***************************************!*\
  !*** ./src/blocks/timeline/helper.js ***!
  \***************************************/
/*! exports provided: deepCopy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepCopy", function() { return deepCopy; });
const deepCopy = inObject => {
  let outObject, value, key;

  if (typeof inObject !== "object" || inObject === null) {
    return inObject; // Return the value if inObject is not an object
  } // Create an array or object to hold the values


  outObject = Array.isArray(inObject) ? [] : {};

  for (key in inObject) {
    value = inObject[key]; // Recursively (deep) copy for nested objects, including arrays

    outObject[key] = deepCopy(value);
  }

  return outObject;
};

/***/ }),

/***/ "./src/blocks/timeline/save.js":
/*!*************************************!*\
  !*** ./src/blocks/timeline/save.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (({
  attributes
}) => {
  const data = attributes.data;
  return /*#__PURE__*/React.createElement("ul", {
    className: "timeline timeline-centered"
  }, data.map((timeline, index) => {
    return /*#__PURE__*/React.createElement("li", {
      key: index,
      className: `timeline-item${timeline.is_period ? ' period' : ''}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "timeline-info"
    }, /*#__PURE__*/React.createElement("span", null, timeline.info)), /*#__PURE__*/React.createElement("div", {
      className: "timeline-marker"
    }), /*#__PURE__*/React.createElement("div", {
      className: "timeline-content"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "timeline-title",
      dangerouslySetInnerHTML: {
        __html: timeline.title
      }
    }), /*#__PURE__*/React.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: timeline.description
      }
    })));
  }));
});

/***/ }),

/***/ "./src/blocks/timeline/style.scss":
/*!****************************************!*\
  !*** ./src/blocks/timeline/style.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=block.js.map