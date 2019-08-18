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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9Db250ZXh0L1NoYXJlZEFuaW1hdGlvbi50c3giLCJzcmMvQ29udGV4dC9TaGFyZWRBbmltYXRpb25Db250ZXh0LnRzeCIsInNyYy9Db250ZXh0L1NoYXJlZEFuaW1hdGlvblByb3ZpZGVyLnRzeCIsInNyYy9IT0MvY29ubmVjdFNoYXJlZEFuaW1hdGlvbi50c3giLCJzcmMvY29uc3RhbnRzL2luZGV4LnRzeCIsInNyYy9oZWxwZXJzL2dldFZhbHVlcy50cyIsInNyYy9pbmRleC50cyIsInNyYy91c2VTaGFyZWRBbmltYXRpb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTXFCLGU7Ozs7Ozs7Ozs7Ozs7NkJBQ1g7QUFBQTs7QUFDUixhQUNDLDZCQUFDLCtCQUFELENBQWtCLFFBQWxCLFFBQ0UsVUFBQyxPQUFEO0FBQUEsZUFBbUMsS0FBSSxDQUFDLEtBQUwsQ0FBVyxRQUFYLENBQW9CLE9BQXBCLENBQW5DO0FBQUEsT0FERixDQUREO0FBS0E7Ozs7RUFQMkMsZUFBTSxTOzs7Ozs7Ozs7O0FDUm5EOztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNLHNCQUFzQixHQUFHLDJCQUEvQjtBQUNBLHNCQUFzQixDQUFDLFdBQXZCLEdBQXFDLGlCQUFyQztlQUVlLHNCOzs7Ozs7Ozs7QUNqQmY7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVlxQix1Qjs7Ozs7QUFFcEIsbUNBQVksS0FBWixFQUFrQztBQUFBOztBQUFBOztBQUNqQyxpR0FBTSxLQUFOOztBQURpQzs7QUFHakMsVUFBSyxjQUFMLEdBQXNCLEtBQUssQ0FBQyxjQUFOLElBQXdCLEVBQTlDO0FBQ0EsVUFBSyxRQUFMLEdBQWdCLE1BQUssUUFBTCxDQUFjLElBQWQsK0JBQWhCO0FBQ0EsVUFBSyxRQUFMLEdBQWdCLE1BQUssUUFBTCxDQUFjLElBQWQsK0JBQWhC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QU0sSUFBSSxLQUFKLDZUQUtVLGdCQUxWLHdCQUt1QyxnQkFMdkMsMEJBQU47QUFPQSxHQXJDRCxDQXFDRSxPQUFPLENBQVAsRUFBVTtBQUNYLElBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxDQUFkO0FBQ0EsV0FBTyxFQUFQO0FBQ0E7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0Q7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7O0FBQ0E7Ozs7QUFFQSxJQUFNLGtCQUFrQixHQUFHLFNBQXJCLGtCQUFxQixDQUFDLEtBQUQsRUFBb0I7QUFBQSxvQkFDdUIsdUJBQ3BFLCtCQURvRSxDQUR2QjtBQUFBLE1BQ3RDLFFBRHNDLGVBQ3RDLFFBRHNDO0FBQUEsTUFDNUIsUUFENEIsZUFDNUIsUUFENEI7QUFBQSxNQUNsQixjQURrQixlQUNsQixjQURrQjs7QUFLOUMsTUFBTSxHQUF5QixHQUFHO0FBQUUsSUFBQSxRQUFRLEVBQVIsUUFBRjtBQUFZLElBQUEsUUFBUSxFQUFSLFFBQVo7QUFBc0IsSUFBQSxjQUFjLEVBQWQ7QUFBdEIsR0FBbEM7QUFDQSxTQUFPLEdBQVA7QUFDQSxDQVBEOztlQVFlLGtCIiwiZmlsZSI6ImJ1bmRsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtaWdub3JlXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFuaW1hdGlvbkNvbnRleHQsIHsgQW5pbWF0aW9uQ29udGV4dFR5cGUgfSBmcm9tICcuL1NoYXJlZEFuaW1hdGlvbkNvbnRleHQnO1xuXG5pbnRlcmZhY2UgQW5pbWF0aW9uQ29uc3VtZXJQcm9wcyB7XG5cdGNoaWxkcmVuOiAoY29udGV4dDogQW5pbWF0aW9uQ29udGV4dFR5cGUpID0+IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcmVkQW5pbWF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEFuaW1hdGlvbkNvbnN1bWVyUHJvcHM+IHtcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8QW5pbWF0aW9uQ29udGV4dC5Db25zdW1lcj5cblx0XHRcdFx0eyhjb250ZXh0OiBBbmltYXRpb25Db250ZXh0VHlwZSkgPT4gdGhpcy5wcm9wcy5jaGlsZHJlbihjb250ZXh0KX1cblx0XHRcdDwvQW5pbWF0aW9uQ29udGV4dC5Db25zdW1lcj5cblx0XHQpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZWRUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFuaW1hdGlvbkNvbnRleHRUeXBlIHtcblx0Z2V0VmFsdWU6IChuYW1lOiBzdHJpbmcpID0+IEFuaW1hdGVkVHlwZTtcblx0bmV3VmFsdWU6IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBBbmltYXRlZFR5cGUpID0+IEFuaW1hdGVkVHlwZTtcblx0YW5pbWF0ZWRWYWx1ZXM6IHsgW2tleTogc3RyaW5nXTogQW5pbWF0ZWRUeXBlIH07XG59XG5cbi8vIGNvbnN0IFNoYXJlZEFuaW1hdGlvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbi8vIFx0Z2V0VmFsdWU6ICgpID0+IGNvbnNvbGUuZXJyb3IoJ1NoYXJlZEFuaW1hdGlvbiBub3QgcHJvcGVybHkgaW5pdGlhbGl6ZWQnKSxcbi8vIFx0c2V0VmFsdWU6ICgpID0+IGNvbnNvbGUuZXJyb3IoJ1NoYXJlZEFuaW1hdGlvbiBub3QgcHJvcGVybHkgaW5pdGlhbGl6ZWQnKSxcbi8vIFx0YW5pbWF0ZWRWYWx1ZXM6IHt9LFxuLy8gfSk7XG5cbmNvbnN0IFNoYXJlZEFuaW1hdGlvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5TaGFyZWRBbmltYXRpb25Db250ZXh0LmRpc3BsYXlOYW1lID0gJ1NoYXJlZEFuaW1hdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXJlZEFuaW1hdGlvbkNvbnRleHQ7XG4iLCIvLyBAdHMtaWdub3JlXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFuaW1hdGlvbkNvbnRleHQgZnJvbSAnLi9TaGFyZWRBbmltYXRpb25Db250ZXh0JztcbmltcG9ydCB7IExJQlJBUllfTkFNRSB9IGZyb20gJy4uL2NvbnN0YW50cy9pbmRleCc7XG5pbXBvcnQgZ2V0VmFsdWVzIGZyb20gJy4uL2hlbHBlcnMvZ2V0VmFsdWVzJztcbmltcG9ydCB7IEFuaW1hdGVkVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IE1hcFZhbHVlc1RvUHJvcHMgfSBmcm9tICcuLi9IT0MvdHlwZXMnO1xuXG5pbnRlcmZhY2UgQW5pbWF0ZWRWYWx1ZXMge1xuXHRba2V5OiBzdHJpbmddOiBBbmltYXRlZFR5cGU7XG59XG5pbnRlcmZhY2UgUHJvdmlkZXJQcm9wcyB7XG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG5cdGFuaW1hdGVkVmFsdWVzPzogQW5pbWF0ZWRWYWx1ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXJlZEFuaW1hdGlvblByb3ZpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3ZpZGVyUHJvcHM+IHtcblx0cHVibGljIGFuaW1hdGVkVmFsdWVzOiBBbmltYXRlZFZhbHVlcztcblx0Y29uc3RydWN0b3IocHJvcHM6IFByb3ZpZGVyUHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLmFuaW1hdGVkVmFsdWVzID0gcHJvcHMuYW5pbWF0ZWRWYWx1ZXMgfHwge307XG5cdFx0dGhpcy5nZXRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUuYmluZCh0aGlzKTtcblx0XHR0aGlzLm5ld1ZhbHVlID0gdGhpcy5uZXdWYWx1ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZ2V0U3RhdGUgPSB0aGlzLmdldFN0YXRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5nZXQgPSB0aGlzLmdldC5iaW5kKHRoaXMpO1xuXHR9XG5cdGdldFN0YXRlKCkge1xuXHRcdHJldHVybiB0aGlzLmFuaW1hdGVkVmFsdWVzO1xuXHR9XG5cdGdldChtYXBWYWx1ZXNUb1Byb3BzOiBNYXBWYWx1ZXNUb1Byb3BzKSB7XG5cdFx0cmV0dXJuIGdldFZhbHVlcyhtYXBWYWx1ZXNUb1Byb3BzLCB0aGlzKTtcblx0fVxuXHRnZXRWYWx1ZShuYW1lOiBzdHJpbmcpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgdmFsdWU6IEFuaW1hdGVkVHlwZSA9IHRoaXMuYW5pbWF0ZWRWYWx1ZXNbbmFtZV07XG5cdFx0XHRpZiAoIXZhbHVlKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgXG5FcnJvciBpbiAke0xJQlJBUllfTkFNRX0ncyBnZXRWYWx1ZSgpIGZ1bmN0aW9uLlxu8J+Ri2FuaW1hdGlvbiB2YWx1ZSB7JHtuYW1lfX0gaXMgcmVsYXRlZCB0byB0aGUgcHJvYmxlbVxuVHJpZWQgdG8gZ2V0IGFuaW1hdGVkIHZhbHVlICR7bmFtZX0sIGJ1dCBpdCBmYWlsZWQuLi5cblRoaXMgcHJvYmFibHkgbWVhbnMgdGhpcyBBbmltYXRlZCB2YWx1ZSB3YXMgbmV2ZXIgaW5pdGlhbGl6ZWQsIG9yIGl0IGlzbid0IGEgdmFsaWQgQW5pbWF0ZWQgdmFsdWUgZnJvbSByZWFjdC1uYXRpdmUtcmVhbmltYXRlZC5cbkFyZSB5b3Ugc3VyZSB5b3UgaW5pdGlhbGl6ZWQgYW4gQW5pbWF0ZWQgdmFsdWUgdXNpbmcgc2V0VmFsdWUobmFtZSwgYW5pbWF0ZWRWYWx1ZSkgd2hlcmUgdGhlIG5hbWUgaXMgJHtuYW1lfT9cbklmIHRoYXQgZG9lc24ndCBkbyBpdCwgdHJ5IHJ1bm5pbmcgbnBtIGkgcmVhY3QtbmF0aXZlLXJlYW5pbWF0ZWQgcmVhY3QtbmF0aXZlLWdlc3R1cmUtaGFuZGxlciBpbiB0aGUgdGVybWluYWwuXG5cdFx0XHRgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHRcdH1cblx0fVxuXHRuZXdWYWx1ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBBbmltYXRlZFR5cGUpIHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKCF2YWx1ZSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFxuRXJyb3IgaW4gJHtMSUJSQVJZX05BTUV9J3MgbmV3VmFsdWUoKSBmdW5jdGlvbi5cbvCfkYthbmltYXRpb24gdmFsdWUgJHtuYW1lfSBpcyByZWxhdGVkIHRvIHRoZSBwcm9ibGVtXG5FeHBlY3RlZCBhIHZhbGlkIEFuaW1hdGVkLlZhbHVlIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQsIGJ1dCBnb3QgJHt2YWx1ZX0gaW5zdGVhZC5cbkl0IHNob3VsZCBsb29rIHNvbWV0aGluZyBsaWtlIHRoaXM6XG5pbXBvcnQgQW5pbWF0ZWQgZnJvbSAncmVhY3QtbmF0aXZlLXJlYW5pbWF0ZWQnXG5jb25zdCB7IFZhbHVlIH0gPSBBbmltYXRlZDtcbi4uLlxuY29uc3QgdmFsdWUgPSBuZXcgVmFsdWUoaW5pdGlhbFZhbHVlKVxubmV3VmFsdWUobmFtZSwgdmFsdWUpO1xuXG5JZiB0aGF0IGRvZXNuJ3QgZG8gaXQsIHRyeSBydW5uaW5nIG5wbSBpIHJlYWN0LW5hdGl2ZS1yZWFuaW1hdGVkIHJlYWN0LW5hdGl2ZS1nZXN0dXJlLWhhbmRsZXIgaW4gdGhlIHRlcm1pbmFsLlxuXHRcdFx0XHRgKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuYW5pbWF0ZWRWYWx1ZXNbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHRcdH1cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCB7IG5ld1ZhbHVlLCBnZXRWYWx1ZSwgYW5pbWF0ZWRWYWx1ZXMgfSA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxBbmltYXRpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IG5ld1ZhbHVlLCBnZXRWYWx1ZSwgYW5pbWF0ZWRWYWx1ZXMgfX0+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDwvQW5pbWF0aW9uQ29udGV4dC5Qcm92aWRlcj5cblx0XHQpO1xuXHR9XG59XG5cbi8vIGNvbnN0IEFuaW1hdGlvblByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogUHJvdmlkZXJQcm9wcykgPT4ge1xuLy8gXHRyZXR1cm4gPEFuaW1hdGlvbkNvbnRleHQuUHJvdmlkZXI+e2NoaWxkcmVufTwvQW5pbWF0aW9uQ29udGV4dC5Qcm92aWRlcj47XG4vLyB9O1xuIiwiLy8gQHRzLWlnbm9yZVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBbmltYXRpb25Db250ZXh0LCB7IEFuaW1hdGlvbkNvbnRleHRUeXBlIH0gZnJvbSAnLi4vQ29udGV4dC9TaGFyZWRBbmltYXRpb25Db250ZXh0JztcbmltcG9ydCBnZXRWYWx1ZXMgZnJvbSAnLi4vaGVscGVycy9nZXRWYWx1ZXMnO1xuaW1wb3J0IHsgTWFwVmFsdWVzVG9Qcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBjb25uZWN0U2hhcmVkQW5pbWF0aW9uID0gKG1hcFZhbHVlc1RvUHJvcHM6IE1hcFZhbHVlc1RvUHJvcHMpID0+IHtcblx0cmV0dXJuIChXcmFwcGVkQ29tcG9uZW50OiBSZWFjdC5Db21wb25lbnRUeXBlIHwgUmVhY3QuRWxlbWVudFR5cGUpID0+IHtcblx0XHRyZXR1cm4gY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRcdFx0c3RhdGljIGNvbnRleHRUeXBlID0gQW5pbWF0aW9uQ29udGV4dDtcblx0XHRcdHZhbHVlcygpIHtcblx0XHRcdFx0Y29uc3QgeyBjb250ZXh0IH06IHsgY29udGV4dDogQW5pbWF0aW9uQ29udGV4dFR5cGUgfSA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiBnZXRWYWx1ZXMobWFwVmFsdWVzVG9Qcm9wcywgY29udGV4dCk7XG5cdFx0XHR9XG5cdFx0XHRyZW5kZXIoKSB7XG5cdFx0XHRcdGNvbnN0IHsgbmV3VmFsdWUsIGdldFZhbHVlIH0gPSB0aGlzLmNvbnRleHQ7XG5cdFx0XHRcdGNvbnN0IHsgdmFsdWVzIH0gPSB0aGlzO1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSB7Li4ueyBnZXRWYWx1ZSwgbmV3VmFsdWUsIC4uLnZhbHVlcygpIH19IC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RTaGFyZWRBbmltYXRpb247XG4iLCJleHBvcnQgY29uc3QgTElCUkFSWV9OQU1FID0gJ3JlYWN0LW5hdGl2ZS1zaGFyZWQtYW5pbWF0aW9uJztcbiIsImltcG9ydCB7IEFuaW1hdGlvbkNvbnRleHRUeXBlIH0gZnJvbSAnLi4vQ29udGV4dC9TaGFyZWRBbmltYXRpb25Db250ZXh0JztcbmltcG9ydCB7IE1hcFZhbHVlc1RvUHJvcHMgfSBmcm9tICcuLi9IT0MvdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCAobWFwVmFsdWVzVG9Qcm9wczogTWFwVmFsdWVzVG9Qcm9wcywgY29udGV4dDogQW5pbWF0aW9uQ29udGV4dFR5cGUpID0+IHtcblx0dHJ5IHtcblx0XHRpZiAodHlwZW9mIG1hcFZhbHVlc1RvUHJvcHMgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRjb25zdCBrZXkgPSBtYXBWYWx1ZXNUb1Byb3BzO1xuXHRcdFx0cmV0dXJuIHsgW2tleV06IGNvbnRleHQuZ2V0VmFsdWUoa2V5KSB9O1xuXHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShtYXBWYWx1ZXNUb1Byb3BzKSkge1xuXHRcdFx0aWYgKCFtYXBWYWx1ZXNUb1Byb3BzLmxlbmd0aCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0J0Vycm9yIGluIGNvbm5lY3RTaGFyZWRBbmltYXRpb24gSE9DIGZpcnN0IGFyZ3VtZW50LiBDYW5ub3QgcGFzcyBlbXB0eSBhcnJheSwgZXhwZWN0ZWQgbmFtZXMgb2YgdmFsaWQgYW5pbWF0aW9uIHZhbHVlcy4nLFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgdmFsaWRBcnJheSA9IG1hcFZhbHVlc1RvUHJvcHMucmVkdWNlKChhLCBiKSA9PiBhICYmIHR5cGVvZiBiID09PSAnc3RyaW5nJywgdHJ1ZSk7XG5cdFx0XHRpZiAoIXZhbGlkQXJyYXkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBFcnJvciBpbiBmaXJzdCBhcmd1bWVudCBvZiBjb25uZWN0U2hhcmVkQW5pbWF0aW9uIEhPQy4gQW4gYXJyYXkgd2FzIHBhc3NlZCwgYnV0IHZhbHVlcyB3ZXJlIG5vdCBhbGwgc3RyaW5ncy5cblRoaXMgYXJndW1lbnQgc2hvdWxkIGVpdGhlciBiZSBhIHN0cmluZywgYXJyYXkgb2Ygc3RyaW5ncywgb3Igb2JqZWN0IGNyZWF0b3IgZnVuY3Rpb24gdGhhdCB0YWtlcyBhbmltYXRlZFZhbHVlcyBhcyB0aGUgZmlyc3QgYXJndW1lbnQuIEluIHRoZSBmaXJzdCB0d28gY2FzZXMsIHN0cmluZ3Mgc2hvdWxkIGNvcnJlc3BvbmQgdG8gdGhlIG5hbWVzIG9mIGluaXRpYWxpemVkIGFuaW1hdGVkIHZhbHVlcy5gKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHZhbHVlcyA9IHt9O1xuXHRcdFx0Y29uc3QgdmFsdWVMaXN0ID0gbWFwVmFsdWVzVG9Qcm9wcztcblx0XHRcdHZhbHVlTGlzdC5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdFx0XHR2YWx1ZXNbbmFtZV0gPSBjb250ZXh0LmdldFZhbHVlKG5hbWUpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gdmFsdWVzO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIG1hcFZhbHVlc1RvUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHJldHVybiBtYXBWYWx1ZXNUb1Byb3BzKGNvbnRleHQuYW5pbWF0ZWRWYWx1ZXMpO1xuXHRcdH0gZWxzZSBpZiAobWFwVmFsdWVzVG9Qcm9wcyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdCdtYXBWYWx1ZXNUb1Byb3BzIGFyZ3VtZW50IHdhcyB1bmRlZmluZWQuIGNoZWNrIGluc3RhbmNlIG9mIGNvbm5lY3RTaGFyZWRBbmltYXRpb24gSE9DIElmIHlvdSBkbyBub3Qgd2FudCB0byBnZXQgYW55IHZhbHVlcywgcGFzcyBudWxsIGFzIHRoZSBmaXJzdCBhcmd1bWVudC4nLFxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKG1hcFZhbHVlc1RvUHJvcHMgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiB7fTtcblx0XHR9XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBcbkVycm9yIHdpdGggZmlyc3QgYXJndW1lbnQgcGFzc2VkIHRvIGNvbm5lY3RTaGFyZWRBbmltYXRpb24oKSBIT0NcblJlbWVtYmVyIHRvIG1ha2UgaXQgbnVsbCBpZiB5b3UgZG9uJ3Qgd2FudCB0byBwYXNzIGFueSB2YWx1ZXMgZGlyZWN0bHkuXG5cbk90aGVyd2lzZSwgdGhpcyBhcmd1bWVudCBzaG91bGQgZWl0aGVyIGJlIGEgc3RyaW5nLCBhcnJheSBvZiBzdHJpbmdzLCBvciBvYmplY3QgY3JlYXRvciBmdW5jdGlvbiB0aGF0IHRha2VzIGFuaW1hdGVkVmFsdWVzIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cbkluc3RlYWQsIGl0IGdvdCAke21hcFZhbHVlc1RvUHJvcHN9OiAoJHt0eXBlb2YgbWFwVmFsdWVzVG9Qcm9wc30gYXMgdGhlIHR5cGUpXG5cdFx0YCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHRcdHJldHVybiB7fTtcblx0fVxufTtcbiIsImltcG9ydCBTaGFyZWRBbmltYXRpb25Qcm92aWRlciBmcm9tICcuL0NvbnRleHQvU2hhcmVkQW5pbWF0aW9uUHJvdmlkZXInXG5pbXBvcnQgY29ubmVjdFNoYXJlZEFuaW1hdGlvbiBmcm9tICcuL0hPQy9jb25uZWN0U2hhcmVkQW5pbWF0aW9uJ1xuaW1wb3J0IFNoYXJlZEFuaW1hdGlvbiBmcm9tICcuL0NvbnRleHQvU2hhcmVkQW5pbWF0aW9uJ1xuaW1wb3J0IHVzZVNoYXJlZEFuaW1hdGlvbiBmcm9tICcuL3VzZVNoYXJlZEFuaW1hdGlvbi9pbmRleCdcblxuZXhwb3J0IHsgU2hhcmVkQW5pbWF0aW9uUHJvdmlkZXIsIGNvbm5lY3RTaGFyZWRBbmltYXRpb24sIFNoYXJlZEFuaW1hdGlvbiwgdXNlU2hhcmVkQW5pbWF0aW9uIH1cbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQW5pbWF0aW9uQ29udGV4dCwgeyBBbmltYXRpb25Db250ZXh0VHlwZSB9IGZyb20gJy4uL0NvbnRleHQvU2hhcmVkQW5pbWF0aW9uQ29udGV4dCc7XG5cbmNvbnN0IHVzZVNoYXJlZEFuaW1hdGlvbiA9ICh2YWx1ZT86IHN0cmluZykgPT4ge1xuXHRjb25zdCB7IGdldFZhbHVlLCBuZXdWYWx1ZSwgYW5pbWF0ZWRWYWx1ZXMgfTogQW5pbWF0aW9uQ29udGV4dFR5cGUgPSB1c2VDb250ZXh0KFxuXHRcdEFuaW1hdGlvbkNvbnRleHQsXG5cdCk7XG5cblx0Y29uc3Qgb2JqOiBBbmltYXRpb25Db250ZXh0VHlwZSA9IHsgZ2V0VmFsdWUsIG5ld1ZhbHVlLCBhbmltYXRlZFZhbHVlcyB9O1xuXHRyZXR1cm4gb2JqO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZVNoYXJlZEFuaW1hdGlvbjtcbiJdfQ==