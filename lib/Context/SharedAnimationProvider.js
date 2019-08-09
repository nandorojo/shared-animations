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

import React from 'react';
import AnimationContext from './SharedAnimationContext';
import { LIBRARY_NAME } from '../constants/index';
import getValues from '../helpers/getValues';

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
      return getValues(mapValuesToProps, this);
    }
  }, {
    key: "getValue",
    value: function getValue(name) {
      try {
        var value = this.animatedValues[name];

        if (!value) {
          throw new Error("\nError in ".concat(LIBRARY_NAME, "'s getValue() function.\n\uD83D\uDC4Banimation value {").concat(name, "} is related to the problem\nTried to get animated value ").concat(name, ", but it failed...\nThis probably means this Animated value was never initialized, or it isn't a valid Animated value from react-native-reanimated.\nAre you sure you initialized an Animated value using setValue(name, animatedValue) where the name is ").concat(name, "?\nIf that doesn't do it, try running npm i react-native-reanimated react-native-gesture-handler in the terminal.\n\t\t\t"));
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
          throw new Error("\nError in ".concat(LIBRARY_NAME, "'s newValue() function.\n\uD83D\uDC4Banimation value ").concat(name, " is related to the problem\nExpected a valid Animated.Value as the second argument, but got ").concat(value, " instead.\nIt should look something like this:\nimport Animated from 'react-native-reanimated'\nconst { Value } = Animated;\n...\nconst value = new Value(initialValue)\nnewValue(name, value);\n\nIf that doesn't do it, try running npm i react-native-reanimated react-native-gesture-handler in the terminal.\n\t\t\t\t"));
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
      return React.createElement(AnimationContext.Provider, {
        value: {
          newValue: newValue,
          getValue: getValue,
          animatedValues: animatedValues
        }
      }, children);
    }
  }]);

  return SharedAnimationProvider;
}(React.Component); // const AnimationProvider = ({ children }: ProviderProps) => {
// 	return <AnimationContext.Provider>{children}</AnimationContext.Provider>;
// };


export { SharedAnimationProvider as default };