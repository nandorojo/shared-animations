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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IT0MvY29ubmVjdFNoYXJlZEFuaW1hdGlvbi50c3giXSwibmFtZXMiOlsiY29ubmVjdFNoYXJlZEFuaW1hdGlvbiIsIm1hcFZhbHVlc1RvUHJvcHMiLCJXcmFwcGVkQ29tcG9uZW50IiwiY29udGV4dCIsIm5ld1ZhbHVlIiwiZ2V0VmFsdWUiLCJ2YWx1ZXMiLCJwcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQW5pbWF0aW9uQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTUEsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDQyxnQkFBRCxFQUF3QztBQUN0RSxTQUFPLFVBQUNDLGdCQUFELEVBQStEO0FBQUE7O0FBQ3JFO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsaUNBRVU7QUFBQSxjQUNBQyxPQURBLEdBQytDLElBRC9DLENBQ0FBLE9BREE7QUFFUixpQkFBTyx3QkFBVUYsZ0JBQVYsRUFBNEJFLE9BQTVCLENBQVA7QUFDQTtBQUxGO0FBQUE7QUFBQSxpQ0FNVTtBQUFBLDhCQUN1QixLQUFLQSxPQUQ1QjtBQUFBLGNBQ0FDLFFBREEsaUJBQ0FBLFFBREE7QUFBQSxjQUNVQyxRQURWLGlCQUNVQSxRQURWO0FBQUEsY0FFQUMsTUFGQSxHQUVXLElBRlgsQ0FFQUEsTUFGQTtBQUdSLGlCQUNDLDZCQUFDLGdCQUFELGVBQXNCLEtBQUtDLEtBQTNCO0FBQXdDRixZQUFBQSxRQUFRLEVBQVJBLFFBQXhDO0FBQWtERCxZQUFBQSxRQUFRLEVBQVJBO0FBQWxELGFBQStERSxNQUFNLEVBQXJFLEdBREQ7QUFHQTtBQVpGOztBQUFBO0FBQUEsTUFBcUJFLGVBQU1DLFNBQTNCLDBDQUNzQkMsK0JBRHRCO0FBY0EsR0FmRDtBQWdCQSxDQWpCRDs7ZUFtQmVWLHNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBbmltYXRpb25Db250ZXh0LCB7IEFuaW1hdGlvbkNvbnRleHRUeXBlIH0gZnJvbSAnLi4vQ29udGV4dC9TaGFyZWRBbmltYXRpb25Db250ZXh0JztcbmltcG9ydCBnZXRWYWx1ZXMgZnJvbSAnLi4vaGVscGVycy9nZXRWYWx1ZXMnO1xuaW1wb3J0IHsgTWFwVmFsdWVzVG9Qcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBjb25uZWN0U2hhcmVkQW5pbWF0aW9uID0gKG1hcFZhbHVlc1RvUHJvcHM6IE1hcFZhbHVlc1RvUHJvcHMpID0+IHtcblx0cmV0dXJuIChXcmFwcGVkQ29tcG9uZW50OiBSZWFjdC5Db21wb25lbnRUeXBlIHwgUmVhY3QuRWxlbWVudFR5cGUpID0+IHtcblx0XHRyZXR1cm4gY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRcdFx0c3RhdGljIGNvbnRleHRUeXBlID0gQW5pbWF0aW9uQ29udGV4dDtcblx0XHRcdHZhbHVlcygpIHtcblx0XHRcdFx0Y29uc3QgeyBjb250ZXh0IH06IHsgY29udGV4dDogQW5pbWF0aW9uQ29udGV4dFR5cGUgfSA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiBnZXRWYWx1ZXMobWFwVmFsdWVzVG9Qcm9wcywgY29udGV4dCk7XG5cdFx0XHR9XG5cdFx0XHRyZW5kZXIoKSB7XG5cdFx0XHRcdGNvbnN0IHsgbmV3VmFsdWUsIGdldFZhbHVlIH0gPSB0aGlzLmNvbnRleHQ7XG5cdFx0XHRcdGNvbnN0IHsgdmFsdWVzIH0gPSB0aGlzO1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSB7Li4ueyBnZXRWYWx1ZSwgbmV3VmFsdWUsIC4uLnZhbHVlcygpIH19IC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RTaGFyZWRBbmltYXRpb247XG4iXX0=