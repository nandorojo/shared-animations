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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db250ZXh0L1NoYXJlZEFuaW1hdGlvblByb3ZpZGVyLnRzeCJdLCJuYW1lcyI6WyJTaGFyZWRBbmltYXRpb25Qcm92aWRlciIsInByb3BzIiwiYW5pbWF0ZWRWYWx1ZXMiLCJnZXRWYWx1ZSIsImJpbmQiLCJuZXdWYWx1ZSIsImdldFN0YXRlIiwiZ2V0IiwibWFwVmFsdWVzVG9Qcm9wcyIsIm5hbWUiLCJ2YWx1ZSIsIkVycm9yIiwiTElCUkFSWV9OQU1FIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBWXFCQSx1Qjs7Ozs7QUFFcEIsbUNBQVlDLEtBQVosRUFBa0M7QUFBQTs7QUFBQTs7QUFDakMsaUdBQU1BLEtBQU47O0FBRGlDOztBQUdqQyxVQUFLQyxjQUFMLEdBQXNCRCxLQUFLLENBQUNDLGNBQU4sSUFBd0IsRUFBOUM7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCwrQkFBaEI7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0QsSUFBZCwrQkFBaEI7QUFDQSxVQUFLRSxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0YsSUFBZCwrQkFBaEI7QUFDQSxVQUFLRyxHQUFMLEdBQVcsTUFBS0EsR0FBTCxDQUFTSCxJQUFULCtCQUFYO0FBUGlDO0FBUWpDOzs7OytCQUNVO0FBQ1YsYUFBTyxLQUFLRixjQUFaO0FBQ0E7Ozt3QkFDR00sZ0IsRUFBb0M7QUFDdkMsYUFBTyx3QkFBVUEsZ0JBQVYsRUFBNEIsSUFBNUIsQ0FBUDtBQUNBOzs7NkJBQ1FDLEksRUFBYztBQUN0QixVQUFJO0FBQ0gsWUFBTUMsS0FBbUIsR0FBRyxLQUFLUixjQUFMLENBQW9CTyxJQUFwQixDQUE1Qjs7QUFDQSxZQUFJLENBQUNDLEtBQUwsRUFBWTtBQUNYLGdCQUFNLElBQUlDLEtBQUosc0JBQ0NDLG1CQURELG1FQUVXSCxJQUZYLHNFQUdvQkEsSUFIcEIsdVFBSzZGQSxJQUw3RiwrSEFBTjtBQVFBOztBQUNELGVBQU9DLEtBQVA7QUFDQSxPQWJELENBYUUsT0FBT0csQ0FBUCxFQUFVO0FBQ1hDLFFBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjRixDQUFkO0FBQ0E7QUFDRDs7OzZCQUNRSixJLEVBQWNDLEssRUFBcUI7QUFDM0MsVUFBSTtBQUNILFlBQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1gsZ0JBQU0sSUFBSUMsS0FBSixzQkFDQ0MsbUJBREQsa0VBRVVILElBRlYseUdBR3dEQyxLQUh4RCxpVUFBTjtBQWFBOztBQUNELGFBQUtSLGNBQUwsQ0FBb0JPLElBQXBCLElBQTRCQyxLQUE1QjtBQUNBLGVBQU9BLEtBQVA7QUFDQSxPQWxCRCxDQWtCRSxPQUFPRyxDQUFQLEVBQVU7QUFDWEMsUUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWNGLENBQWQ7QUFDQTtBQUNEOzs7NkJBQ1E7QUFBQSxVQUNBRyxRQURBLEdBQ2EsS0FBS2YsS0FEbEIsQ0FDQWUsUUFEQTtBQUFBLFVBRUFYLFFBRkEsR0FFdUMsSUFGdkMsQ0FFQUEsUUFGQTtBQUFBLFVBRVVGLFFBRlYsR0FFdUMsSUFGdkMsQ0FFVUEsUUFGVjtBQUFBLFVBRW9CRCxjQUZwQixHQUV1QyxJQUZ2QyxDQUVvQkEsY0FGcEI7QUFHUixhQUNDLDZCQUFDLCtCQUFELENBQWtCLFFBQWxCO0FBQTJCLFFBQUEsS0FBSyxFQUFFO0FBQUVHLFVBQUFBLFFBQVEsRUFBUkEsUUFBRjtBQUFZRixVQUFBQSxRQUFRLEVBQVJBLFFBQVo7QUFBc0JELFVBQUFBLGNBQWMsRUFBZEE7QUFBdEI7QUFBbEMsU0FDRWMsUUFERixDQUREO0FBS0E7Ozs7RUFsRW1EQyxlQUFNQyxTLEdBcUUzRDtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFuaW1hdGVkIGZyb20gJ3JlYWN0LW5hdGl2ZS1yZWFuaW1hdGVkJztcbmltcG9ydCBBbmltYXRpb25Db250ZXh0IGZyb20gJy4vU2hhcmVkQW5pbWF0aW9uQ29udGV4dCc7XG5pbXBvcnQgeyBMSUJSQVJZX05BTUUgfSBmcm9tICcuLi9jb25zdGFudHMvaW5kZXgnO1xuaW1wb3J0IGdldFZhbHVlcyBmcm9tICcuLi9oZWxwZXJzL2dldFZhbHVlcyc7XG5pbXBvcnQgeyBBbmltYXRlZFR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBNYXBWYWx1ZXNUb1Byb3BzIH0gZnJvbSAnLi4vSE9DL3R5cGVzJztcblxuaW50ZXJmYWNlIEFuaW1hdGVkVmFsdWVzIHtcblx0W2tleTogc3RyaW5nXTogQW5pbWF0ZWRUeXBlO1xufVxuaW50ZXJmYWNlIFByb3ZpZGVyUHJvcHMge1xuXHRjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuXHRhbmltYXRlZFZhbHVlcz86IEFuaW1hdGVkVmFsdWVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFyZWRBbmltYXRpb25Qcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm92aWRlclByb3BzPiB7XG5cdHB1YmxpYyBhbmltYXRlZFZhbHVlczogQW5pbWF0ZWRWYWx1ZXM7XG5cdGNvbnN0cnVjdG9yKHByb3BzOiBQcm92aWRlclByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5hbmltYXRlZFZhbHVlcyA9IHByb3BzLmFuaW1hdGVkVmFsdWVzIHx8IHt9O1xuXHRcdHRoaXMuZ2V0VmFsdWUgPSB0aGlzLmdldFZhbHVlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5uZXdWYWx1ZSA9IHRoaXMubmV3VmFsdWUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmdldFN0YXRlID0gdGhpcy5nZXRTdGF0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZ2V0ID0gdGhpcy5nZXQuYmluZCh0aGlzKTtcblx0fVxuXHRnZXRTdGF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5hbmltYXRlZFZhbHVlcztcblx0fVxuXHRnZXQobWFwVmFsdWVzVG9Qcm9wczogTWFwVmFsdWVzVG9Qcm9wcykge1xuXHRcdHJldHVybiBnZXRWYWx1ZXMobWFwVmFsdWVzVG9Qcm9wcywgdGhpcyk7XG5cdH1cblx0Z2V0VmFsdWUobmFtZTogc3RyaW5nKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHZhbHVlOiBBbmltYXRlZFR5cGUgPSB0aGlzLmFuaW1hdGVkVmFsdWVzW25hbWVdO1xuXHRcdFx0aWYgKCF2YWx1ZSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFxuRXJyb3IgaW4gJHtMSUJSQVJZX05BTUV9J3MgZ2V0VmFsdWUoKSBmdW5jdGlvbi5cbvCfkYthbmltYXRpb24gdmFsdWUgeyR7bmFtZX19IGlzIHJlbGF0ZWQgdG8gdGhlIHByb2JsZW1cblRyaWVkIHRvIGdldCBhbmltYXRlZCB2YWx1ZSAke25hbWV9LCBidXQgaXQgZmFpbGVkLi4uXG5UaGlzIHByb2JhYmx5IG1lYW5zIHRoaXMgQW5pbWF0ZWQgdmFsdWUgd2FzIG5ldmVyIGluaXRpYWxpemVkLCBvciBpdCBpc24ndCBhIHZhbGlkIEFuaW1hdGVkIHZhbHVlIGZyb20gcmVhY3QtbmF0aXZlLXJlYW5pbWF0ZWQuXG5BcmUgeW91IHN1cmUgeW91IGluaXRpYWxpemVkIGFuIEFuaW1hdGVkIHZhbHVlIHVzaW5nIHNldFZhbHVlKG5hbWUsIGFuaW1hdGVkVmFsdWUpIHdoZXJlIHRoZSBuYW1lIGlzICR7bmFtZX0/XG5JZiB0aGF0IGRvZXNuJ3QgZG8gaXQsIHRyeSBydW5uaW5nIG5wbSBpIHJlYWN0LW5hdGl2ZS1yZWFuaW1hdGVkIHJlYWN0LW5hdGl2ZS1nZXN0dXJlLWhhbmRsZXIgaW4gdGhlIHRlcm1pbmFsLlxuXHRcdFx0YCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlKTtcblx0XHR9XG5cdH1cblx0bmV3VmFsdWUobmFtZTogc3RyaW5nLCB2YWx1ZTogQW5pbWF0ZWRUeXBlKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghdmFsdWUpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBcbkVycm9yIGluICR7TElCUkFSWV9OQU1FfSdzIG5ld1ZhbHVlKCkgZnVuY3Rpb24uXG7wn5GLYW5pbWF0aW9uIHZhbHVlICR7bmFtZX0gaXMgcmVsYXRlZCB0byB0aGUgcHJvYmxlbVxuRXhwZWN0ZWQgYSB2YWxpZCBBbmltYXRlZC5WYWx1ZSBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LCBidXQgZ290ICR7dmFsdWV9IGluc3RlYWQuXG5JdCBzaG91bGQgbG9vayBzb21ldGhpbmcgbGlrZSB0aGlzOlxuaW1wb3J0IEFuaW1hdGVkIGZyb20gJ3JlYWN0LW5hdGl2ZS1yZWFuaW1hdGVkJ1xuY29uc3QgeyBWYWx1ZSB9ID0gQW5pbWF0ZWQ7XG4uLi5cbmNvbnN0IHZhbHVlID0gbmV3IFZhbHVlKGluaXRpYWxWYWx1ZSlcbm5ld1ZhbHVlKG5hbWUsIHZhbHVlKTtcblxuSWYgdGhhdCBkb2Vzbid0IGRvIGl0LCB0cnkgcnVubmluZyBucG0gaSByZWFjdC1uYXRpdmUtcmVhbmltYXRlZCByZWFjdC1uYXRpdmUtZ2VzdHVyZS1oYW5kbGVyIGluIHRoZSB0ZXJtaW5hbC5cblx0XHRcdFx0YCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmFuaW1hdGVkVmFsdWVzW25hbWVdID0gdmFsdWU7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlKTtcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgeyBuZXdWYWx1ZSwgZ2V0VmFsdWUsIGFuaW1hdGVkVmFsdWVzIH0gPSB0aGlzO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8QW5pbWF0aW9uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBuZXdWYWx1ZSwgZ2V0VmFsdWUsIGFuaW1hdGVkVmFsdWVzIH19PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8L0FuaW1hdGlvbkNvbnRleHQuUHJvdmlkZXI+XG5cdFx0KTtcblx0fVxufVxuXG4vLyBjb25zdCBBbmltYXRpb25Qcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IFByb3ZpZGVyUHJvcHMpID0+IHtcbi8vIFx0cmV0dXJuIDxBbmltYXRpb25Db250ZXh0LlByb3ZpZGVyPntjaGlsZHJlbn08L0FuaW1hdGlvbkNvbnRleHQuUHJvdmlkZXI+O1xuLy8gfTtcbiJdfQ==