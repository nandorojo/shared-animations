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
      var key = mapValuesToProps;
      return _defineProperty({}, key, context.getValue(key));
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
exports.default = void 0;

var _SharedAnimationProvider = _interopRequireDefault(require("./Context/SharedAnimationProvider"));

var _connectSharedAnimation = _interopRequireDefault(require("./HOC/connectSharedAnimation"));

var _SharedAnimation = _interopRequireDefault(require("./Context/SharedAnimation"));

var _index = _interopRequireDefault(require("./useSharedAnimation/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  SharedAnimationProvider: _SharedAnimationProvider.default,
  connectSharedAnimation: _connectSharedAnimation.default,
  SharedAnimation: _SharedAnimation.default,
  useSharedAnimation: _index.default
}; // export class C {
// 	private ox = 10;
// 	getX = () => this.ox;
// 	setX = (newVal: number) => {
// 		this.ox = newVal;
// 	};
// }
// export let x = new C();
// export let y = { ...{ some: 'value' } };

exports.default = _default;
"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _SharedAnimationContext = _interopRequireDefault(require("../Context/SharedAnimationContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useSharedAnimation = function useSharedAnimation(value) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9Db250ZXh0L1NoYXJlZEFuaW1hdGlvbi50c3giLCJzcmMvQ29udGV4dC9TaGFyZWRBbmltYXRpb25Db250ZXh0LnRzeCIsInNyYy9Db250ZXh0L1NoYXJlZEFuaW1hdGlvblByb3ZpZGVyLnRzeCIsInNyYy9IT0MvY29ubmVjdFNoYXJlZEFuaW1hdGlvbi50c3giLCJzcmMvY29uc3RhbnRzL2luZGV4LnRzeCIsInNyYy9oZWxwZXJzL2dldFZhbHVlcy50cyIsInNyYy9pbmRleC50cyIsInNyYy91c2VTaGFyZWRBbmltYXRpb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTXFCLGU7Ozs7Ozs7Ozs7Ozs7NkJBQ1g7QUFBQTs7QUFDUixhQUNDLDZCQUFDLCtCQUFELENBQWtCLFFBQWxCLFFBQ0UsVUFBQyxPQUFEO0FBQUEsZUFBbUMsS0FBSSxDQUFDLEtBQUwsQ0FBVyxRQUFYLENBQW9CLE9BQXBCLENBQW5DO0FBQUEsT0FERixDQUREO0FBS0E7Ozs7RUFQMkMsZUFBTSxTOzs7Ozs7Ozs7O0FDUG5EOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNLHNCQUFzQixHQUFHLDJCQUEvQjtBQUNBLHNCQUFzQixDQUFDLFdBQXZCLEdBQXFDLGlCQUFyQztlQUVlLHNCOzs7Ozs7Ozs7QUNuQmY7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVlxQix1Qjs7Ozs7QUFFcEIsbUNBQVksS0FBWixFQUFrQztBQUFBOztBQUFBOztBQUNqQyxpR0FBTSxLQUFOOztBQURpQzs7QUFHakMsVUFBSyxjQUFMLEdBQXNCLEtBQUssQ0FBQyxjQUFOLElBQXdCLEVBQTlDO0FBQ0EsVUFBSyxRQUFMLEdBQWdCLE1BQUssUUFBTCxDQUFjLElBQWQsK0JBQWhCO0FBQ0EsVUFBSyxRQUFMLEdBQWdCLE1BQUssUUFBTCxDQUFjLElBQWQsK0JBQWhC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QU0sSUFBSSxLQUFKLDZUQUtVLGdCQUxWLHdCQUt1QyxnQkFMdkMsMEJBQU47QUFPQSxHQXJDRCxDQXFDRSxPQUFPLENBQVAsRUFBVTtBQUNYLElBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxDQUFkO0FBQ0EsV0FBTyxFQUFQO0FBQ0E7QUFDRCxDOzs7Ozs7Ozs7O0FDN0NEOztBQUNBOztBQUNBOztBQUNBOzs7O2VBRWU7QUFDZCxFQUFBLHVCQUF1QixFQUF2QixnQ0FEYztBQUVkLEVBQUEsc0JBQXNCLEVBQXRCLCtCQUZjO0FBR2QsRUFBQSxlQUFlLEVBQWYsd0JBSGM7QUFJZCxFQUFBLGtCQUFrQixFQUFsQjtBQUpjLEMsRUFPZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDckJBOztBQUNBOzs7O0FBRUEsSUFBTSxrQkFBa0IsR0FBRyxTQUFyQixrQkFBcUIsQ0FBQyxLQUFELEVBQW9CO0FBQUEsb0JBQ3VCLHVCQUNwRSwrQkFEb0UsQ0FEdkI7QUFBQSxNQUN0QyxRQURzQyxlQUN0QyxRQURzQztBQUFBLE1BQzVCLFFBRDRCLGVBQzVCLFFBRDRCO0FBQUEsTUFDbEIsY0FEa0IsZUFDbEIsY0FEa0I7O0FBSzlDLE1BQU0sR0FBeUIsR0FBRztBQUFFLElBQUEsUUFBUSxFQUFSLFFBQUY7QUFBWSxJQUFBLFFBQVEsRUFBUixRQUFaO0FBQXNCLElBQUEsY0FBYyxFQUFkO0FBQXRCLEdBQWxDO0FBQ0EsU0FBTyxHQUFQO0FBQ0EsQ0FQRDs7ZUFRZSxrQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFuaW1hdGlvbkNvbnRleHQsIHsgQW5pbWF0aW9uQ29udGV4dFR5cGUgfSBmcm9tICcuL1NoYXJlZEFuaW1hdGlvbkNvbnRleHQnO1xuXG5pbnRlcmZhY2UgQW5pbWF0aW9uQ29uc3VtZXJQcm9wcyB7XG5cdGNoaWxkcmVuOiAoY29udGV4dDogQW5pbWF0aW9uQ29udGV4dFR5cGUpID0+IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcmVkQW5pbWF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEFuaW1hdGlvbkNvbnN1bWVyUHJvcHM+IHtcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8QW5pbWF0aW9uQ29udGV4dC5Db25zdW1lcj5cblx0XHRcdFx0eyhjb250ZXh0OiBBbmltYXRpb25Db250ZXh0VHlwZSkgPT4gdGhpcy5wcm9wcy5jaGlsZHJlbihjb250ZXh0KX1cblx0XHRcdDwvQW5pbWF0aW9uQ29udGV4dC5Db25zdW1lcj5cblx0XHQpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFuaW1hdGVkIGZyb20gJ3JlYWN0LW5hdGl2ZS1yZWFuaW1hdGVkJztcbmltcG9ydCB7IEFuaW1hdGVkVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBBbmltYXRpb25Db250ZXh0VHlwZSB7XG5cdGdldFZhbHVlOiAobmFtZTogc3RyaW5nKSA9PiBBbmltYXRlZFR5cGU7XG5cdG5ld1ZhbHVlOiAobmFtZTogc3RyaW5nLCB2YWx1ZTogQW5pbWF0ZWRUeXBlKSA9PiBBbmltYXRlZFR5cGU7XG5cdGFuaW1hdGVkVmFsdWVzOiB7IFtrZXk6IHN0cmluZ106IEFuaW1hdGVkVHlwZSB9O1xufVxuXG4vLyBjb25zdCBTaGFyZWRBbmltYXRpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4vLyBcdGdldFZhbHVlOiAoKSA9PiBjb25zb2xlLmVycm9yKCdTaGFyZWRBbmltYXRpb24gbm90IHByb3Blcmx5IGluaXRpYWxpemVkJyksXG4vLyBcdHNldFZhbHVlOiAoKSA9PiBjb25zb2xlLmVycm9yKCdTaGFyZWRBbmltYXRpb24gbm90IHByb3Blcmx5IGluaXRpYWxpemVkJyksXG4vLyBcdGFuaW1hdGVkVmFsdWVzOiB7fSxcbi8vIH0pO1xuXG5jb25zdCBTaGFyZWRBbmltYXRpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuU2hhcmVkQW5pbWF0aW9uQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdTaGFyZWRBbmltYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBTaGFyZWRBbmltYXRpb25Db250ZXh0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBbmltYXRlZCBmcm9tICdyZWFjdC1uYXRpdmUtcmVhbmltYXRlZCc7XG5pbXBvcnQgQW5pbWF0aW9uQ29udGV4dCBmcm9tICcuL1NoYXJlZEFuaW1hdGlvbkNvbnRleHQnO1xuaW1wb3J0IHsgTElCUkFSWV9OQU1FIH0gZnJvbSAnLi4vY29uc3RhbnRzL2luZGV4JztcbmltcG9ydCBnZXRWYWx1ZXMgZnJvbSAnLi4vaGVscGVycy9nZXRWYWx1ZXMnO1xuaW1wb3J0IHsgQW5pbWF0ZWRUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgTWFwVmFsdWVzVG9Qcm9wcyB9IGZyb20gJy4uL0hPQy90eXBlcyc7XG5cbmludGVyZmFjZSBBbmltYXRlZFZhbHVlcyB7XG5cdFtrZXk6IHN0cmluZ106IEFuaW1hdGVkVHlwZTtcbn1cbmludGVyZmFjZSBQcm92aWRlclByb3BzIHtcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcblx0YW5pbWF0ZWRWYWx1ZXM/OiBBbmltYXRlZFZhbHVlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcmVkQW5pbWF0aW9uUHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvdmlkZXJQcm9wcz4ge1xuXHRwdWJsaWMgYW5pbWF0ZWRWYWx1ZXM6IEFuaW1hdGVkVmFsdWVzO1xuXHRjb25zdHJ1Y3Rvcihwcm9wczogUHJvdmlkZXJQcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdHRoaXMuYW5pbWF0ZWRWYWx1ZXMgPSBwcm9wcy5hbmltYXRlZFZhbHVlcyB8fCB7fTtcblx0XHR0aGlzLmdldFZhbHVlID0gdGhpcy5nZXRWYWx1ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMubmV3VmFsdWUgPSB0aGlzLm5ld1ZhbHVlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5nZXRTdGF0ZSA9IHRoaXMuZ2V0U3RhdGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmdldCA9IHRoaXMuZ2V0LmJpbmQodGhpcyk7XG5cdH1cblx0Z2V0U3RhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYW5pbWF0ZWRWYWx1ZXM7XG5cdH1cblx0Z2V0KG1hcFZhbHVlc1RvUHJvcHM6IE1hcFZhbHVlc1RvUHJvcHMpIHtcblx0XHRyZXR1cm4gZ2V0VmFsdWVzKG1hcFZhbHVlc1RvUHJvcHMsIHRoaXMpO1xuXHR9XG5cdGdldFZhbHVlKG5hbWU6IHN0cmluZykge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB2YWx1ZTogQW5pbWF0ZWRUeXBlID0gdGhpcy5hbmltYXRlZFZhbHVlc1tuYW1lXTtcblx0XHRcdGlmICghdmFsdWUpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBcbkVycm9yIGluICR7TElCUkFSWV9OQU1FfSdzIGdldFZhbHVlKCkgZnVuY3Rpb24uXG7wn5GLYW5pbWF0aW9uIHZhbHVlIHske25hbWV9fSBpcyByZWxhdGVkIHRvIHRoZSBwcm9ibGVtXG5UcmllZCB0byBnZXQgYW5pbWF0ZWQgdmFsdWUgJHtuYW1lfSwgYnV0IGl0IGZhaWxlZC4uLlxuVGhpcyBwcm9iYWJseSBtZWFucyB0aGlzIEFuaW1hdGVkIHZhbHVlIHdhcyBuZXZlciBpbml0aWFsaXplZCwgb3IgaXQgaXNuJ3QgYSB2YWxpZCBBbmltYXRlZCB2YWx1ZSBmcm9tIHJlYWN0LW5hdGl2ZS1yZWFuaW1hdGVkLlxuQXJlIHlvdSBzdXJlIHlvdSBpbml0aWFsaXplZCBhbiBBbmltYXRlZCB2YWx1ZSB1c2luZyBzZXRWYWx1ZShuYW1lLCBhbmltYXRlZFZhbHVlKSB3aGVyZSB0aGUgbmFtZSBpcyAke25hbWV9P1xuSWYgdGhhdCBkb2Vzbid0IGRvIGl0LCB0cnkgcnVubmluZyBucG0gaSByZWFjdC1uYXRpdmUtcmVhbmltYXRlZCByZWFjdC1uYXRpdmUtZ2VzdHVyZS1oYW5kbGVyIGluIHRoZSB0ZXJtaW5hbC5cblx0XHRcdGApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XG5cdFx0fVxuXHR9XG5cdG5ld1ZhbHVlKG5hbWU6IHN0cmluZywgdmFsdWU6IEFuaW1hdGVkVHlwZSkge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoIXZhbHVlKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgXG5FcnJvciBpbiAke0xJQlJBUllfTkFNRX0ncyBuZXdWYWx1ZSgpIGZ1bmN0aW9uLlxu8J+Ri2FuaW1hdGlvbiB2YWx1ZSAke25hbWV9IGlzIHJlbGF0ZWQgdG8gdGhlIHByb2JsZW1cbkV4cGVjdGVkIGEgdmFsaWQgQW5pbWF0ZWQuVmFsdWUgYXMgdGhlIHNlY29uZCBhcmd1bWVudCwgYnV0IGdvdCAke3ZhbHVlfSBpbnN0ZWFkLlxuSXQgc2hvdWxkIGxvb2sgc29tZXRoaW5nIGxpa2UgdGhpczpcbmltcG9ydCBBbmltYXRlZCBmcm9tICdyZWFjdC1uYXRpdmUtcmVhbmltYXRlZCdcbmNvbnN0IHsgVmFsdWUgfSA9IEFuaW1hdGVkO1xuLi4uXG5jb25zdCB2YWx1ZSA9IG5ldyBWYWx1ZShpbml0aWFsVmFsdWUpXG5uZXdWYWx1ZShuYW1lLCB2YWx1ZSk7XG5cbklmIHRoYXQgZG9lc24ndCBkbyBpdCwgdHJ5IHJ1bm5pbmcgbnBtIGkgcmVhY3QtbmF0aXZlLXJlYW5pbWF0ZWQgcmVhY3QtbmF0aXZlLWdlc3R1cmUtaGFuZGxlciBpbiB0aGUgdGVybWluYWwuXG5cdFx0XHRcdGApO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5hbmltYXRlZFZhbHVlc1tuYW1lXSA9IHZhbHVlO1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHsgbmV3VmFsdWUsIGdldFZhbHVlLCBhbmltYXRlZFZhbHVlcyB9ID0gdGhpcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEFuaW1hdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbmV3VmFsdWUsIGdldFZhbHVlLCBhbmltYXRlZFZhbHVlcyB9fT5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9BbmltYXRpb25Db250ZXh0LlByb3ZpZGVyPlxuXHRcdCk7XG5cdH1cbn1cblxuLy8gY29uc3QgQW5pbWF0aW9uUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBQcm92aWRlclByb3BzKSA9PiB7XG4vLyBcdHJldHVybiA8QW5pbWF0aW9uQ29udGV4dC5Qcm92aWRlcj57Y2hpbGRyZW59PC9BbmltYXRpb25Db250ZXh0LlByb3ZpZGVyPjtcbi8vIH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFuaW1hdGlvbkNvbnRleHQsIHsgQW5pbWF0aW9uQ29udGV4dFR5cGUgfSBmcm9tICcuLi9Db250ZXh0L1NoYXJlZEFuaW1hdGlvbkNvbnRleHQnO1xuaW1wb3J0IGdldFZhbHVlcyBmcm9tICcuLi9oZWxwZXJzL2dldFZhbHVlcyc7XG5pbXBvcnQgeyBNYXBWYWx1ZXNUb1Byb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IGNvbm5lY3RTaGFyZWRBbmltYXRpb24gPSAobWFwVmFsdWVzVG9Qcm9wczogTWFwVmFsdWVzVG9Qcm9wcykgPT4ge1xuXHRyZXR1cm4gKFdyYXBwZWRDb21wb25lbnQ6IFJlYWN0LkNvbXBvbmVudFR5cGUgfCBSZWFjdC5FbGVtZW50VHlwZSkgPT4ge1xuXHRcdHJldHVybiBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdFx0XHRzdGF0aWMgY29udGV4dFR5cGUgPSBBbmltYXRpb25Db250ZXh0O1xuXHRcdFx0dmFsdWVzKCkge1xuXHRcdFx0XHRjb25zdCB7IGNvbnRleHQgfTogeyBjb250ZXh0OiBBbmltYXRpb25Db250ZXh0VHlwZSB9ID0gdGhpcztcblx0XHRcdFx0cmV0dXJuIGdldFZhbHVlcyhtYXBWYWx1ZXNUb1Byb3BzLCBjb250ZXh0KTtcblx0XHRcdH1cblx0XHRcdHJlbmRlcigpIHtcblx0XHRcdFx0Y29uc3QgeyBuZXdWYWx1ZSwgZ2V0VmFsdWUgfSA9IHRoaXMuY29udGV4dDtcblx0XHRcdFx0Y29uc3QgeyB2YWx1ZXMgfSA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PFdyYXBwZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IHsuLi57IGdldFZhbHVlLCBuZXdWYWx1ZSwgLi4udmFsdWVzKCkgfX0gLz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFNoYXJlZEFuaW1hdGlvbjtcbiIsImV4cG9ydCBjb25zdCBMSUJSQVJZX05BTUUgPSAncmVhY3QtbmF0aXZlLXNoYXJlZC1hbmltYXRpb24nO1xuIiwiaW1wb3J0IHsgQW5pbWF0aW9uQ29udGV4dFR5cGUgfSBmcm9tICcuLi9Db250ZXh0L1NoYXJlZEFuaW1hdGlvbkNvbnRleHQnO1xuaW1wb3J0IHsgTWFwVmFsdWVzVG9Qcm9wcyB9IGZyb20gJy4uL0hPQy90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChtYXBWYWx1ZXNUb1Byb3BzOiBNYXBWYWx1ZXNUb1Byb3BzLCBjb250ZXh0OiBBbmltYXRpb25Db250ZXh0VHlwZSkgPT4ge1xuXHR0cnkge1xuXHRcdGlmICh0eXBlb2YgbWFwVmFsdWVzVG9Qcm9wcyA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGNvbnN0IGtleSA9IG1hcFZhbHVlc1RvUHJvcHM7XG5cdFx0XHRyZXR1cm4geyBba2V5XTogY29udGV4dC5nZXRWYWx1ZShrZXkpIH07XG5cdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG1hcFZhbHVlc1RvUHJvcHMpKSB7XG5cdFx0XHRpZiAoIW1hcFZhbHVlc1RvUHJvcHMubGVuZ3RoKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XHQnRXJyb3IgaW4gY29ubmVjdFNoYXJlZEFuaW1hdGlvbiBIT0MgZmlyc3QgYXJndW1lbnQuIENhbm5vdCBwYXNzIGVtcHR5IGFycmF5LCBleHBlY3RlZCBuYW1lcyBvZiB2YWxpZCBhbmltYXRpb24gdmFsdWVzLicsXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB2YWxpZEFycmF5ID0gbWFwVmFsdWVzVG9Qcm9wcy5yZWR1Y2UoKGEsIGIpID0+IGEgJiYgdHlwZW9mIGIgPT09ICdzdHJpbmcnLCB0cnVlKTtcblx0XHRcdGlmICghdmFsaWRBcnJheSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGluIGZpcnN0IGFyZ3VtZW50IG9mIGNvbm5lY3RTaGFyZWRBbmltYXRpb24gSE9DLiBBbiBhcnJheSB3YXMgcGFzc2VkLCBidXQgdmFsdWVzIHdlcmUgbm90IGFsbCBzdHJpbmdzLlxuVGhpcyBhcmd1bWVudCBzaG91bGQgZWl0aGVyIGJlIGEgc3RyaW5nLCBhcnJheSBvZiBzdHJpbmdzLCBvciBvYmplY3QgY3JlYXRvciBmdW5jdGlvbiB0aGF0IHRha2VzIGFuaW1hdGVkVmFsdWVzIGFzIHRoZSBmaXJzdCBhcmd1bWVudC4gSW4gdGhlIGZpcnN0IHR3byBjYXNlcywgc3RyaW5ncyBzaG91bGQgY29ycmVzcG9uZCB0byB0aGUgbmFtZXMgb2YgaW5pdGlhbGl6ZWQgYW5pbWF0ZWQgdmFsdWVzLmApO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgdmFsdWVzID0ge307XG5cdFx0XHRjb25zdCB2YWx1ZUxpc3QgPSBtYXBWYWx1ZXNUb1Byb3BzO1xuXHRcdFx0dmFsdWVMaXN0LmZvckVhY2gobmFtZSA9PiB7XG5cdFx0XHRcdHZhbHVlc1tuYW1lXSA9IGNvbnRleHQuZ2V0VmFsdWUobmFtZSk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgbWFwVmFsdWVzVG9Qcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuIG1hcFZhbHVlc1RvUHJvcHMoY29udGV4dC5hbmltYXRlZFZhbHVlcyk7XG5cdFx0fSBlbHNlIGlmIChtYXBWYWx1ZXNUb1Byb3BzID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0J21hcFZhbHVlc1RvUHJvcHMgYXJndW1lbnQgd2FzIHVuZGVmaW5lZC4gY2hlY2sgaW5zdGFuY2Ugb2YgY29ubmVjdFNoYXJlZEFuaW1hdGlvbiBIT0MgSWYgeW91IGRvIG5vdCB3YW50IHRvIGdldCBhbnkgdmFsdWVzLCBwYXNzIG51bGwgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LicsXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAobWFwVmFsdWVzVG9Qcm9wcyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHt9O1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgRXJyb3IoYFxuRXJyb3Igd2l0aCBmaXJzdCBhcmd1bWVudCBwYXNzZWQgdG8gY29ubmVjdFNoYXJlZEFuaW1hdGlvbigpIEhPQ1xuUmVtZW1iZXIgdG8gbWFrZSBpdCBudWxsIGlmIHlvdSBkb24ndCB3YW50IHRvIHBhc3MgYW55IHZhbHVlcyBkaXJlY3RseS5cblxuT3RoZXJ3aXNlLCB0aGlzIGFyZ3VtZW50IHNob3VsZCBlaXRoZXIgYmUgYSBzdHJpbmcsIGFycmF5IG9mIHN0cmluZ3MsIG9yIG9iamVjdCBjcmVhdG9yIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYW5pbWF0ZWRWYWx1ZXMgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxuSW5zdGVhZCwgaXQgZ290ICR7bWFwVmFsdWVzVG9Qcm9wc306ICgke3R5cGVvZiBtYXBWYWx1ZXNUb1Byb3BzfSBhcyB0aGUgdHlwZSlcblx0XHRgKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGNvbnNvbGUuZXJyb3IoZSk7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG59O1xuIiwiaW1wb3J0IFNoYXJlZEFuaW1hdGlvblByb3ZpZGVyIGZyb20gJy4vQ29udGV4dC9TaGFyZWRBbmltYXRpb25Qcm92aWRlcic7XG5pbXBvcnQgY29ubmVjdFNoYXJlZEFuaW1hdGlvbiBmcm9tICcuL0hPQy9jb25uZWN0U2hhcmVkQW5pbWF0aW9uJztcbmltcG9ydCBTaGFyZWRBbmltYXRpb24gZnJvbSAnLi9Db250ZXh0L1NoYXJlZEFuaW1hdGlvbic7XG5pbXBvcnQgdXNlU2hhcmVkQW5pbWF0aW9uIGZyb20gJy4vdXNlU2hhcmVkQW5pbWF0aW9uL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRTaGFyZWRBbmltYXRpb25Qcm92aWRlcixcblx0Y29ubmVjdFNoYXJlZEFuaW1hdGlvbixcblx0U2hhcmVkQW5pbWF0aW9uLFxuXHR1c2VTaGFyZWRBbmltYXRpb24sXG59O1xuXG4vLyBleHBvcnQgY2xhc3MgQyB7XG4vLyBcdHByaXZhdGUgb3ggPSAxMDtcbi8vIFx0Z2V0WCA9ICgpID0+IHRoaXMub3g7XG4vLyBcdHNldFggPSAobmV3VmFsOiBudW1iZXIpID0+IHtcbi8vIFx0XHR0aGlzLm94ID0gbmV3VmFsO1xuLy8gXHR9O1xuLy8gfVxuXG4vLyBleHBvcnQgbGV0IHggPSBuZXcgQygpO1xuLy8gZXhwb3J0IGxldCB5ID0geyAuLi57IHNvbWU6ICd2YWx1ZScgfSB9O1xuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBbmltYXRpb25Db250ZXh0LCB7IEFuaW1hdGlvbkNvbnRleHRUeXBlIH0gZnJvbSAnLi4vQ29udGV4dC9TaGFyZWRBbmltYXRpb25Db250ZXh0JztcblxuY29uc3QgdXNlU2hhcmVkQW5pbWF0aW9uID0gKHZhbHVlPzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHsgZ2V0VmFsdWUsIG5ld1ZhbHVlLCBhbmltYXRlZFZhbHVlcyB9OiBBbmltYXRpb25Db250ZXh0VHlwZSA9IHVzZUNvbnRleHQoXG5cdFx0QW5pbWF0aW9uQ29udGV4dCxcblx0KTtcblxuXHRjb25zdCBvYmo6IEFuaW1hdGlvbkNvbnRleHRUeXBlID0geyBnZXRWYWx1ZSwgbmV3VmFsdWUsIGFuaW1hdGVkVmFsdWVzIH07XG5cdHJldHVybiBvYmo7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlU2hhcmVkQW5pbWF0aW9uO1xuIl19