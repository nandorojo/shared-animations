"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SharedAnimationContext = _interopRequireDefault(require("./SharedAnimationContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SharedAnimation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SharedAnimation, _React$Component);

  function SharedAnimation() {
    _classCallCheck(this, SharedAnimation);

    return _possibleConstructorReturn(this, _getPrototypeOf(SharedAnimation).apply(this, arguments));
  }

  _createClass(SharedAnimation, [{
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement(_SharedAnimationContext.default.Consumer, null, function (context) {
        return _this.props.children(context);
      });
    }
  }]);

  return SharedAnimation;
}(_react.default.Component);

exports.default = SharedAnimation;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

// const SharedAnimationContext = createContext({
// 	getValue: () => console.error('SharedAnimation not properly initialized'),
// 	setValue: () => console.error('SharedAnimation not properly initialized'),
// 	animatedValues: {},
// });
// @ts-ignore
var SharedAnimationContext = (0, _react.createContext)();
SharedAnimationContext.displayName = 'SharedAnimation';
var _default = SharedAnimationContext;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SharedAnimationContext = _interopRequireDefault(require("./SharedAnimationContext"));

var _index = require("../constants/index");

var _getValues = _interopRequireDefault(require("../helpers/getValues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SharedAnimationProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SharedAnimationProvider, _React$Component);

  function SharedAnimationProvider(props) {
    var _this;

    _classCallCheck(this, SharedAnimationProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SharedAnimationProvider).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "animatedValues", void 0);

    _this.animatedValues = props.animatedValues || {};
    _this.getValue = _this.getValue.bind(_assertThisInitialized(_this));
    _this.newValue = _this.newValue.bind(_assertThisInitialized(_this));
    _this.getState = _this.getState.bind(_assertThisInitialized(_this));
    _this.get = _this.get.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SharedAnimationProvider, [{
    key: "getState",
    value: function getState() {
      return this.animatedValues;
    }
  }, {
    key: "get",
    value: function get(mapValuesToProps) {
      return (0, _getValues.default)(mapValuesToProps, this);
    }
  }, {
    key: "getValue",
    value: function getValue(name) {
      try {
        var value = this.animatedValues[name];

        if (!value) {
          throw new Error("\nError in ".concat(_index.LIBRARY_NAME, "'s getValue() function.\n\uD83D\uDC4Banimation value {").concat(name, "} is related to the problem\nTried to get animated value ").concat(name, ", but it failed...\nThis probably means this Animated value was never initialized, or it isn't a valid Animated value from react-native-reanimated.\nAre you sure you initialized an Animated value using setValue(name, animatedValue) where the name is ").concat(name, "?\nIf that doesn't do it, try running npm i react-native-reanimated react-native-gesture-handler in the terminal.\n\t\t\t"));
        }

        return value;
      } catch (e) {
        console.error(e);
      }
    }
  }, {
    key: "newValue",
    value: function newValue(name, value) {
      try {
        if (!value) {
          throw new Error("\nError in ".concat(_index.LIBRARY_NAME, "'s newValue() function.\n\uD83D\uDC4Banimation value ").concat(name, " is related to the problem\nExpected a valid Animated.Value as the second argument, but got ").concat(value, " instead.\nIt should look something like this:\nimport Animated from 'react-native-reanimated'\nconst { Value } = Animated;\n...\nconst value = new Value(initialValue)\nnewValue(name, value);\n\nIf that doesn't do it, try running npm i react-native-reanimated react-native-gesture-handler in the terminal.\n\t\t\t\t"));
        }

        this.animatedValues[name] = value;
        return value;
      } catch (e) {
        console.error(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var newValue = this.newValue,
          getValue = this.getValue,
          animatedValues = this.animatedValues;
      return _react.default.createElement(_SharedAnimationContext.default.Provider, {
        value: {
          newValue: newValue,
          getValue: getValue,
          animatedValues: animatedValues
        }
      }, children);
    }
  }]);

  return SharedAnimationProvider;
}(_react.default.Component); // const AnimationProvider = ({ children }: ProviderProps) => {
// 	return <AnimationContext.Provider>{children}</AnimationContext.Provider>;
// };


exports.default = SharedAnimationProvider;
"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SharedAnimationContext = _interopRequireDefault(require("../Context/SharedAnimationContext"));

var _getValues = _interopRequireDefault(require("../helpers/getValues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var connectSharedAnimation = function connectSharedAnimation(mapValuesToProps) {
  return function (WrappedComponent) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "values",
        value: function values() {
          var context = this.context;
          return (0, _getValues.default)(mapValuesToProps, context);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$context = this.context,
              newValue = _this$context.newValue,
              getValue = _this$context.getValue;
          var values = this.values;
          return _react.default.createElement(WrappedComponent, _extends({}, this.props, _objectSpread({
            getValue: getValue,
            newValue: newValue
          }, values())));
        }
      }]);

      return _class;
    }(_react.default.Component), _defineProperty(_class, "contextType", _SharedAnimationContext.default), _temp;
  };
};

var _default = connectSharedAnimation;
exports.default = _default;
"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LIBRARY_NAME = void 0;
var LIBRARY_NAME = 'react-native-shared-animation';
exports.LIBRARY_NAME = LIBRARY_NAME;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(mapValuesToProps, context) {
  try {
    if (typeof mapValuesToProps === 'string') {
      var _key = mapValuesToProps;
      return _defineProperty({}, _key, context.getValue(_key));
    } else if (Array.isArray(mapValuesToProps)) {
      if (!mapValuesToProps.length) {
        throw new Error('Error in connectSharedAnimation HOC first argument. Cannot pass empty array, expected names of valid animation values.');
      }

      var validArray = mapValuesToProps.reduce(function (a, b) {
        return a && typeof b === 'string';
      }, true);

      if (!validArray) {
        throw new Error("Error in first argument of connectSharedAnimation HOC. An array was passed, but values were not all strings.\nThis argument should either be a string, array of strings, or object creator function that takes animatedValues as the first argument. In the first two cases, strings should correspond to the names of initialized animated values.");
      }

      var values = {};
      var valueList = mapValuesToProps;
      valueList.forEach(function (name) {
        values[name] = context.getValue(name);
      });
      return values;
    } else if (typeof mapValuesToProps === 'function') {
      return mapValuesToProps(context.animatedValues);
    } else if (mapValuesToProps === undefined) {
      throw new Error('mapValuesToProps argument was undefined. check instance of connectSharedAnimation HOC If you do not want to get any values, pass null as the first argument.');
    } else if (mapValuesToProps === null) {
      return {};
    }

    throw new Error("\nError with first argument passed to connectSharedAnimation() HOC\nRemember to make it null if you don't want to pass any values directly.\n\nOtherwise, this argument should either be a string, array of strings, or object creator function that takes animatedValues as the first argument.\nInstead, it got ".concat(mapValuesToProps, ": (").concat(_typeof(mapValuesToProps), " as the type)\n\t\t"));
  } catch (e) {
    console.error(e);
    return {};
  }
};

exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SharedAnimationProvider", {
  enumerable: true,
  get: function get() {
    return _SharedAnimationProvider.default;
  }
});
Object.defineProperty(exports, "connectSharedAnimation", {
  enumerable: true,
  get: function get() {
    return _connectSharedAnimation.default;
  }
});
Object.defineProperty(exports, "SharedAnimation", {
  enumerable: true,
  get: function get() {
    return _SharedAnimation.default;
  }
});
Object.defineProperty(exports, "useSharedAnimation", {
  enumerable: true,
  get: function get() {
    return _index.default;
  }
});

var _SharedAnimationProvider = _interopRequireDefault(require("./Context/SharedAnimationProvider"));

var _connectSharedAnimation = _interopRequireDefault(require("./HOC/connectSharedAnimation"));

var _SharedAnimation = _interopRequireDefault(require("./Context/SharedAnimation"));

var _index = _interopRequireDefault(require("./useSharedAnimation/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _SharedAnimationContext = _interopRequireDefault(require("../Context/SharedAnimationContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useSharedAnimation = function useSharedAnimation() {
  var _useContext = (0, _react.useContext)(_SharedAnimationContext.default),
      getValue = _useContext.getValue,
      newValue = _useContext.newValue,
      animatedValues = _useContext.animatedValues;

  var obj = {
    getValue: getValue,
    newValue: newValue,
    animatedValues: animatedValues
  };
  return obj;
};

var _default = useSharedAnimation;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db250ZXh0L1NoYXJlZEFuaW1hdGlvbi50c3giLCIuLi9zcmMvQ29udGV4dC9TaGFyZWRBbmltYXRpb25Db250ZXh0LnRzeCIsIi4uL3NyYy9Db250ZXh0L1NoYXJlZEFuaW1hdGlvblByb3ZpZGVyLnRzeCIsIi4uL3NyYy9IT0MvY29ubmVjdFNoYXJlZEFuaW1hdGlvbi50c3giLCIuLi9zcmMvY29uc3RhbnRzL2luZGV4LnRzeCIsIi4uL3NyYy9oZWxwZXJzL2dldFZhbHVlcy50cyIsIi4uL3NyYy9pbmRleC50cyIsIi4uL3NyYy91c2VTaGFyZWRBbmltYXRpb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTXFCLGU7Ozs7Ozs7Ozs7Ozs7NkJBQ1g7QUFBQTs7QUFDUixhQUNDLDZCQUFDLCtCQUFELENBQWtCLFFBQWxCLFFBQ0UsVUFBQyxPQUFEO0FBQUEsZUFBbUMsS0FBSSxDQUFDLEtBQUwsQ0FBVyxRQUFYLENBQW9CLE9BQXBCLENBQW5DO0FBQUEsT0FERixDQUREO0FBS0E7Ozs7RUFQMkMsZUFBTSxTOzs7Ozs7Ozs7O0FDUm5EOztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLElBQU0sc0JBQXNCLEdBQUcsMkJBQS9CO0FBQ0Esc0JBQXNCLENBQUMsV0FBdkIsR0FBcUMsaUJBQXJDO2VBRWUsc0I7Ozs7Ozs7OztBQ2xCZjs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBWXFCLHVCOzs7OztBQUVwQixtQ0FBWSxLQUFaLEVBQWtDO0FBQUE7O0FBQUE7O0FBQ2pDLGlHQUFNLEtBQU47O0FBRGlDOztBQUdqQyxVQUFLLGNBQUwsR0FBc0IsS0FBSyxDQUFDLGNBQU4sSUFBd0IsRUFBOUM7QUFDQSxVQUFLLFFBQUwsR0FBZ0IsTUFBSyxRQUFMLENBQWMsSUFBZCwrQkFBaEI7QUFDQSxVQUFLLFFBQUwsR0FB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K0I7QUFDckMsYUFBTyxFQUFQO0FBQ0E7O0FBQ0QsVUFBTSxJQUFJLEtBQUosNlRBS1UsZ0JBTFYsd0JBS3VDLGdCQUx2QywwQkFBTjtBQU9BLEdBckNELENBcUNFLE9BQU8sQ0FBUCxFQUFVO0FBQ1gsSUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLENBQWQ7QUFDQSxXQUFPLEVBQVA7QUFDQTtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDRDs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTs7QUFDQTs7OztBQUVBLElBQU0sa0JBQWtCLEdBQUcsU0FBckIsa0JBQXFCLEdBQU07QUFBQSxvQkFDcUMsdUJBQ3BFLCtCQURvRSxDQURyQztBQUFBLE1BQ3hCLFFBRHdCLGVBQ3hCLFFBRHdCO0FBQUEsTUFDZCxRQURjLGVBQ2QsUUFEYztBQUFBLE1BQ0osY0FESSxlQUNKLGNBREk7O0FBS2hDLE1BQU0sR0FBeUIsR0FBRztBQUFFLElBQUEsUUFBUSxFQUFSLFFBQUY7QUFBWSxJQUFBLFFBQVEsRUFBUixRQUFaO0FBQXNCLElBQUEsY0FBYyxFQUFkO0FBQXRCLEdBQWxDO0FBQ0EsU0FBTyxHQUFQO0FBQ0EsQ0FQRDs7ZUFRZSxrQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1pZ25vcmVcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQW5pbWF0aW9uQ29udGV4dCwgeyBBbmltYXRpb25Db250ZXh0VHlwZSB9IGZyb20gJy4vU2hhcmVkQW5pbWF0aW9uQ29udGV4dCc7XG5cbmludGVyZmFjZSBBbmltYXRpb25Db25zdW1lclByb3BzIHtcblx0Y2hpbGRyZW46IChjb250ZXh0OiBBbmltYXRpb25Db250ZXh0VHlwZSkgPT4gUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFyZWRBbmltYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8QW5pbWF0aW9uQ29uc3VtZXJQcm9wcz4ge1xuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxBbmltYXRpb25Db250ZXh0LkNvbnN1bWVyPlxuXHRcdFx0XHR7KGNvbnRleHQ6IEFuaW1hdGlvbkNvbnRleHRUeXBlKSA9PiB0aGlzLnByb3BzLmNoaWxkcmVuKGNvbnRleHQpfVxuXHRcdFx0PC9BbmltYXRpb25Db250ZXh0LkNvbnN1bWVyPlxuXHRcdCk7XG5cdH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFuaW1hdGVkVHlwZSB9IGZyb20gJy4uL3R5cGVzL2luZGV4J1xuXG5leHBvcnQgaW50ZXJmYWNlIEFuaW1hdGlvbkNvbnRleHRUeXBlIHtcblx0Z2V0VmFsdWU6IChuYW1lOiBzdHJpbmcpID0+IEFuaW1hdGVkVHlwZVxuXHRuZXdWYWx1ZTogKG5hbWU6IHN0cmluZywgdmFsdWU6IEFuaW1hdGVkVHlwZSkgPT4gQW5pbWF0ZWRUeXBlXG5cdGFuaW1hdGVkVmFsdWVzOiB7IFtrZXk6IHN0cmluZ106IEFuaW1hdGVkVHlwZSB9XG59XG5cbi8vIGNvbnN0IFNoYXJlZEFuaW1hdGlvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbi8vIFx0Z2V0VmFsdWU6ICgpID0+IGNvbnNvbGUuZXJyb3IoJ1NoYXJlZEFuaW1hdGlvbiBub3QgcHJvcGVybHkgaW5pdGlhbGl6ZWQnKSxcbi8vIFx0c2V0VmFsdWU6ICgpID0+IGNvbnNvbGUuZXJyb3IoJ1NoYXJlZEFuaW1hdGlvbiBub3QgcHJvcGVybHkgaW5pdGlhbGl6ZWQnKSxcbi8vIFx0YW5pbWF0ZWRWYWx1ZXM6IHt9LFxuLy8gfSk7XG5cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IFNoYXJlZEFuaW1hdGlvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblNoYXJlZEFuaW1hdGlvbkNvbnRleHQuZGlzcGxheU5hbWUgPSAnU2hhcmVkQW5pbWF0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBTaGFyZWRBbmltYXRpb25Db250ZXh0XG4iLCIvLyBAdHMtaWdub3JlXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQW5pbWF0aW9uQ29udGV4dCBmcm9tICcuL1NoYXJlZEFuaW1hdGlvbkNvbnRleHQnXG5pbXBvcnQgeyBMSUJSQVJZX05BTUUgfSBmcm9tICcuLi9jb25zdGFudHMvaW5kZXgnXG5pbXBvcnQgZ2V0VmFsdWVzIGZyb20gJy4uL2hlbHBlcnMvZ2V0VmFsdWVzJ1xuaW1wb3J0IHsgQW5pbWF0ZWRUeXBlIH0gZnJvbSAnLi4vdHlwZXMvaW5kZXgnXG5pbXBvcnQgeyBNYXBWYWx1ZXNUb1Byb3BzIH0gZnJvbSAnLi4vSE9DL3R5cGVzJ1xuXG5pbnRlcmZhY2UgQW5pbWF0ZWRWYWx1ZXMge1xuXHRba2V5OiBzdHJpbmddOiBBbmltYXRlZFR5cGVcbn1cbmludGVyZmFjZSBQcm92aWRlclByb3BzIHtcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuXHRhbmltYXRlZFZhbHVlcz86IEFuaW1hdGVkVmFsdWVzXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXJlZEFuaW1hdGlvblByb3ZpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3ZpZGVyUHJvcHM+IHtcblx0cHVibGljIGFuaW1hdGVkVmFsdWVzOiBBbmltYXRlZFZhbHVlc1xuXHRjb25zdHJ1Y3Rvcihwcm9wczogUHJvdmlkZXJQcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5hbmltYXRlZFZhbHVlcyA9IHByb3BzLmFuaW1hdGVkVmFsdWVzIHx8IHt9XG5cdFx0dGhpcy5nZXRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUuYmluZCh0aGlzKVxuXHRcdHRoaXMubmV3VmFsdWUgPSB0aGlzLm5ld1ZhbHVlLmJpbmQodGhpcylcblx0XHR0aGlzLmdldFN0YXRlID0gdGhpcy5nZXRTdGF0ZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5nZXQgPSB0aGlzLmdldC5iaW5kKHRoaXMpXG5cdH1cblx0Z2V0U3RhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYW5pbWF0ZWRWYWx1ZXNcblx0fVxuXHRnZXQobWFwVmFsdWVzVG9Qcm9wczogTWFwVmFsdWVzVG9Qcm9wcykge1xuXHRcdHJldHVybiBnZXRWYWx1ZXMobWFwVmFsdWVzVG9Qcm9wcywgdGhpcylcblx0fVxuXHRnZXRWYWx1ZShuYW1lOiBzdHJpbmcpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgdmFsdWU6IEFuaW1hdGVkVHlwZSA9IHRoaXMuYW5pbWF0ZWRWYWx1ZXNbbmFtZV1cblx0XHRcdGlmICghdmFsdWUpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBcbkVycm9yIGluICR7TElCUkFSWV9OQU1FfSdzIGdldFZhbHVlKCkgZnVuY3Rpb24uXG7wn5GLYW5pbWF0aW9uIHZhbHVlIHske25hbWV9fSBpcyByZWxhdGVkIHRvIHRoZSBwcm9ibGVtXG5UcmllZCB0byBnZXQgYW5pbWF0ZWQgdmFsdWUgJHtuYW1lfSwgYnV0IGl0IGZhaWxlZC4uLlxuVGhpcyBwcm9iYWJseSBtZWFucyB0aGlzIEFuaW1hdGVkIHZhbHVlIHdhcyBuZXZlciBpbml0aWFsaXplZCwgb3IgaXQgaXNuJ3QgYSB2YWxpZCBBbmltYXRlZCB2YWx1ZSBmcm9tIHJlYWN0LW5hdGl2ZS1yZWFuaW1hdGVkLlxuQXJlIHlvdSBzdXJlIHlvdSBpbml0aWFsaXplZCBhbiBBbmltYXRlZCB2YWx1ZSB1c2luZyBzZXRWYWx1ZShuYW1lLCBhbmltYXRlZFZhbHVlKSB3aGVyZSB0aGUgbmFtZSBpcyAke25hbWV9P1xuSWYgdGhhdCBkb2Vzbid0IGRvIGl0LCB0cnkgcnVubmluZyBucG0gaSByZWFjdC1uYXRpdmUtcmVhbmltYXRlZCByZWFjdC1uYXRpdmUtZ2VzdHVyZS1oYW5kbGVyIGluIHRoZSB0ZXJtaW5hbC5cblx0XHRcdGApXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdmFsdWVcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGUpXG5cdFx0fVxuXHR9XG5cdG5ld1ZhbHVlKG5hbWU6IHN0cmluZywgdmFsdWU6IEFuaW1hdGVkVHlwZSkge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoIXZhbHVlKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgXG5FcnJvciBpbiAke0xJQlJBUllfTkFNRX0ncyBuZXdWYWx1ZSgpIGZ1bmN0aW9uLlxu8J+Ri2FuaW1hdGlvbiB2YWx1ZSAke25hbWV9IGlzIHJlbGF0ZWQgdG8gdGhlIHByb2JsZW1cbkV4cGVjdGVkIGEgdmFsaWQgQW5pbWF0ZWQuVmFsdWUgYXMgdGhlIHNlY29uZCBhcmd1bWVudCwgYnV0IGdvdCAke3ZhbHVlfSBpbnN0ZWFkLlxuSXQgc2hvdWxkIGxvb2sgc29tZXRoaW5nIGxpa2UgdGhpczpcbmltcG9ydCBBbmltYXRlZCBmcm9tICdyZWFjdC1uYXRpdmUtcmVhbmltYXRlZCdcbmNvbnN0IHsgVmFsdWUgfSA9IEFuaW1hdGVkO1xuLi4uXG5jb25zdCB2YWx1ZSA9IG5ldyBWYWx1ZShpbml0aWFsVmFsdWUpXG5uZXdWYWx1ZShuYW1lLCB2YWx1ZSk7XG5cbklmIHRoYXQgZG9lc24ndCBkbyBpdCwgdHJ5IHJ1bm5pbmcgbnBtIGkgcmVhY3QtbmF0aXZlLXJlYW5pbWF0ZWQgcmVhY3QtbmF0aXZlLWdlc3R1cmUtaGFuZGxlciBpbiB0aGUgdGVybWluYWwuXG5cdFx0XHRcdGApXG5cdFx0XHR9XG5cdFx0XHR0aGlzLmFuaW1hdGVkVmFsdWVzW25hbWVdID0gdmFsdWVcblx0XHRcdHJldHVybiB2YWx1ZVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSlcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcblx0XHRjb25zdCB7IG5ld1ZhbHVlLCBnZXRWYWx1ZSwgYW5pbWF0ZWRWYWx1ZXMgfSA9IHRoaXNcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEFuaW1hdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbmV3VmFsdWUsIGdldFZhbHVlLCBhbmltYXRlZFZhbHVlcyB9fT5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9BbmltYXRpb25Db250ZXh0LlByb3ZpZGVyPlxuXHRcdClcblx0fVxufVxuXG4vLyBjb25zdCBBbmltYXRpb25Qcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IFByb3ZpZGVyUHJvcHMpID0+IHtcbi8vIFx0cmV0dXJuIDxBbmltYXRpb25Db250ZXh0LlByb3ZpZGVyPntjaGlsZHJlbn08L0FuaW1hdGlvbkNvbnRleHQuUHJvdmlkZXI+O1xuLy8gfTtcbiIsIi8vIEB0cy1pZ25vcmVcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQW5pbWF0aW9uQ29udGV4dCwgeyBBbmltYXRpb25Db250ZXh0VHlwZSB9IGZyb20gJy4uL0NvbnRleHQvU2hhcmVkQW5pbWF0aW9uQ29udGV4dCc7XG5pbXBvcnQgZ2V0VmFsdWVzIGZyb20gJy4uL2hlbHBlcnMvZ2V0VmFsdWVzJztcbmltcG9ydCB7IE1hcFZhbHVlc1RvUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgY29ubmVjdFNoYXJlZEFuaW1hdGlvbiA9IChtYXBWYWx1ZXNUb1Byb3BzOiBNYXBWYWx1ZXNUb1Byb3BzKSA9PiB7XG5cdHJldHVybiAoV3JhcHBlZENvbXBvbmVudDogUmVhY3QuQ29tcG9uZW50VHlwZSB8IFJlYWN0LkVsZW1lbnRUeXBlKSA9PiB7XG5cdFx0cmV0dXJuIGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0XHRcdHN0YXRpYyBjb250ZXh0VHlwZSA9IEFuaW1hdGlvbkNvbnRleHQ7XG5cdFx0XHR2YWx1ZXMoKSB7XG5cdFx0XHRcdGNvbnN0IHsgY29udGV4dCB9OiB7IGNvbnRleHQ6IEFuaW1hdGlvbkNvbnRleHRUeXBlIH0gPSB0aGlzO1xuXHRcdFx0XHRyZXR1cm4gZ2V0VmFsdWVzKG1hcFZhbHVlc1RvUHJvcHMsIGNvbnRleHQpO1xuXHRcdFx0fVxuXHRcdFx0cmVuZGVyKCkge1xuXHRcdFx0XHRjb25zdCB7IG5ld1ZhbHVlLCBnZXRWYWx1ZSB9ID0gdGhpcy5jb250ZXh0O1xuXHRcdFx0XHRjb25zdCB7IHZhbHVlcyB9ID0gdGhpcztcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8V3JhcHBlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gey4uLnsgZ2V0VmFsdWUsIG5ld1ZhbHVlLCAuLi52YWx1ZXMoKSB9fSAvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0U2hhcmVkQW5pbWF0aW9uO1xuIiwiZXhwb3J0IGNvbnN0IExJQlJBUllfTkFNRSA9ICdyZWFjdC1uYXRpdmUtc2hhcmVkLWFuaW1hdGlvbic7XG4iLCJpbXBvcnQgeyBBbmltYXRpb25Db250ZXh0VHlwZSB9IGZyb20gJy4uL0NvbnRleHQvU2hhcmVkQW5pbWF0aW9uQ29udGV4dCdcbmltcG9ydCB7IE1hcFZhbHVlc1RvUHJvcHMgfSBmcm9tICcuLi9IT0MvdHlwZXMnXG5pbXBvcnQgeyBBbmltYXRlZFR5cGUgfSBmcm9tICcuLi90eXBlcy9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgKG1hcFZhbHVlc1RvUHJvcHM6IE1hcFZhbHVlc1RvUHJvcHMsIGNvbnRleHQ6IEFuaW1hdGlvbkNvbnRleHRUeXBlKSA9PiB7XG5cdHRyeSB7XG5cdFx0aWYgKHR5cGVvZiBtYXBWYWx1ZXNUb1Byb3BzID09PSAnc3RyaW5nJykge1xuXHRcdFx0Y29uc3Qga2V5ID0gbWFwVmFsdWVzVG9Qcm9wc1xuXHRcdFx0cmV0dXJuIHsgW2tleV06IGNvbnRleHQuZ2V0VmFsdWUoa2V5KSB9XG5cdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG1hcFZhbHVlc1RvUHJvcHMpKSB7XG5cdFx0XHRpZiAoIW1hcFZhbHVlc1RvUHJvcHMubGVuZ3RoKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XHQnRXJyb3IgaW4gY29ubmVjdFNoYXJlZEFuaW1hdGlvbiBIT0MgZmlyc3QgYXJndW1lbnQuIENhbm5vdCBwYXNzIGVtcHR5IGFycmF5LCBleHBlY3RlZCBuYW1lcyBvZiB2YWxpZCBhbmltYXRpb24gdmFsdWVzLicsXG5cdFx0XHRcdClcblx0XHRcdH1cblx0XHRcdGNvbnN0IHZhbGlkQXJyYXkgPSBtYXBWYWx1ZXNUb1Byb3BzLnJlZHVjZSgoYSwgYikgPT4gYSAmJiB0eXBlb2YgYiA9PT0gJ3N0cmluZycsIHRydWUpXG5cdFx0XHRpZiAoIXZhbGlkQXJyYXkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBFcnJvciBpbiBmaXJzdCBhcmd1bWVudCBvZiBjb25uZWN0U2hhcmVkQW5pbWF0aW9uIEhPQy4gQW4gYXJyYXkgd2FzIHBhc3NlZCwgYnV0IHZhbHVlcyB3ZXJlIG5vdCBhbGwgc3RyaW5ncy5cblRoaXMgYXJndW1lbnQgc2hvdWxkIGVpdGhlciBiZSBhIHN0cmluZywgYXJyYXkgb2Ygc3RyaW5ncywgb3Igb2JqZWN0IGNyZWF0b3IgZnVuY3Rpb24gdGhhdCB0YWtlcyBhbmltYXRlZFZhbHVlcyBhcyB0aGUgZmlyc3QgYXJndW1lbnQuIEluIHRoZSBmaXJzdCB0d28gY2FzZXMsIHN0cmluZ3Mgc2hvdWxkIGNvcnJlc3BvbmQgdG8gdGhlIG5hbWVzIG9mIGluaXRpYWxpemVkIGFuaW1hdGVkIHZhbHVlcy5gKVxuXHRcdFx0fVxuXHRcdFx0Y29uc3QgdmFsdWVzOiB7IFtrZXk6IHN0cmluZ106IEFuaW1hdGVkVHlwZSB9ID0ge31cblx0XHRcdGNvbnN0IHZhbHVlTGlzdCA9IG1hcFZhbHVlc1RvUHJvcHNcblx0XHRcdHZhbHVlTGlzdC5mb3JFYWNoKChuYW1lOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0dmFsdWVzW25hbWVdID0gY29udGV4dC5nZXRWYWx1ZShuYW1lKVxuXHRcdFx0fSlcblx0XHRcdHJldHVybiB2YWx1ZXNcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBtYXBWYWx1ZXNUb1Byb3BzID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRyZXR1cm4gbWFwVmFsdWVzVG9Qcm9wcyhjb250ZXh0LmFuaW1hdGVkVmFsdWVzKVxuXHRcdH0gZWxzZSBpZiAobWFwVmFsdWVzVG9Qcm9wcyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdCdtYXBWYWx1ZXNUb1Byb3BzIGFyZ3VtZW50IHdhcyB1bmRlZmluZWQuIGNoZWNrIGluc3RhbmNlIG9mIGNvbm5lY3RTaGFyZWRBbmltYXRpb24gSE9DIElmIHlvdSBkbyBub3Qgd2FudCB0byBnZXQgYW55IHZhbHVlcywgcGFzcyBudWxsIGFzIHRoZSBmaXJzdCBhcmd1bWVudC4nLFxuXHRcdFx0KVxuXHRcdH0gZWxzZSBpZiAobWFwVmFsdWVzVG9Qcm9wcyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHt9XG5cdFx0fVxuXHRcdHRocm93IG5ldyBFcnJvcihgXG5FcnJvciB3aXRoIGZpcnN0IGFyZ3VtZW50IHBhc3NlZCB0byBjb25uZWN0U2hhcmVkQW5pbWF0aW9uKCkgSE9DXG5SZW1lbWJlciB0byBtYWtlIGl0IG51bGwgaWYgeW91IGRvbid0IHdhbnQgdG8gcGFzcyBhbnkgdmFsdWVzIGRpcmVjdGx5LlxuXG5PdGhlcndpc2UsIHRoaXMgYXJndW1lbnQgc2hvdWxkIGVpdGhlciBiZSBhIHN0cmluZywgYXJyYXkgb2Ygc3RyaW5ncywgb3Igb2JqZWN0IGNyZWF0b3IgZnVuY3Rpb24gdGhhdCB0YWtlcyBhbmltYXRlZFZhbHVlcyBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXG5JbnN0ZWFkLCBpdCBnb3QgJHttYXBWYWx1ZXNUb1Byb3BzfTogKCR7dHlwZW9mIG1hcFZhbHVlc1RvUHJvcHN9IGFzIHRoZSB0eXBlKVxuXHRcdGApXG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRjb25zb2xlLmVycm9yKGUpXG5cdFx0cmV0dXJuIHt9XG5cdH1cbn1cbiIsImltcG9ydCBTaGFyZWRBbmltYXRpb25Qcm92aWRlciBmcm9tICcuL0NvbnRleHQvU2hhcmVkQW5pbWF0aW9uUHJvdmlkZXInXG5pbXBvcnQgY29ubmVjdFNoYXJlZEFuaW1hdGlvbiBmcm9tICcuL0hPQy9jb25uZWN0U2hhcmVkQW5pbWF0aW9uJ1xuaW1wb3J0IFNoYXJlZEFuaW1hdGlvbiBmcm9tICcuL0NvbnRleHQvU2hhcmVkQW5pbWF0aW9uJ1xuaW1wb3J0IHVzZVNoYXJlZEFuaW1hdGlvbiBmcm9tICcuL3VzZVNoYXJlZEFuaW1hdGlvbi9pbmRleCdcblxuZXhwb3J0IHsgU2hhcmVkQW5pbWF0aW9uUHJvdmlkZXIsIGNvbm5lY3RTaGFyZWRBbmltYXRpb24sIFNoYXJlZEFuaW1hdGlvbiwgdXNlU2hhcmVkQW5pbWF0aW9uIH1cbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBbmltYXRpb25Db250ZXh0LCB7IEFuaW1hdGlvbkNvbnRleHRUeXBlIH0gZnJvbSAnLi4vQ29udGV4dC9TaGFyZWRBbmltYXRpb25Db250ZXh0J1xuXG5jb25zdCB1c2VTaGFyZWRBbmltYXRpb24gPSAoKSA9PiB7XG5cdGNvbnN0IHsgZ2V0VmFsdWUsIG5ld1ZhbHVlLCBhbmltYXRlZFZhbHVlcyB9OiBBbmltYXRpb25Db250ZXh0VHlwZSA9IHVzZUNvbnRleHQoXG5cdFx0QW5pbWF0aW9uQ29udGV4dCxcblx0KVxuXG5cdGNvbnN0IG9iajogQW5pbWF0aW9uQ29udGV4dFR5cGUgPSB7IGdldFZhbHVlLCBuZXdWYWx1ZSwgYW5pbWF0ZWRWYWx1ZXMgfVxuXHRyZXR1cm4gb2JqXG59XG5leHBvcnQgZGVmYXVsdCB1c2VTaGFyZWRBbmltYXRpb25cbiJdfQ==