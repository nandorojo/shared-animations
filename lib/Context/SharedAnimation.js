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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db250ZXh0L1NoYXJlZEFuaW1hdGlvbi50c3giXSwibmFtZXMiOlsiU2hhcmVkQW5pbWF0aW9uIiwiY29udGV4dCIsInByb3BzIiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTXFCQSxlOzs7Ozs7Ozs7Ozs7OzZCQUNYO0FBQUE7O0FBQ1IsYUFDQyw2QkFBQywrQkFBRCxDQUFrQixRQUFsQixRQUNFLFVBQUNDLE9BQUQ7QUFBQSxlQUFtQyxLQUFJLENBQUNDLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkYsT0FBcEIsQ0FBbkM7QUFBQSxPQURGLENBREQ7QUFLQTs7OztFQVAyQ0csZUFBTUMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQW5pbWF0aW9uQ29udGV4dCwgeyBBbmltYXRpb25Db250ZXh0VHlwZSB9IGZyb20gJy4vU2hhcmVkQW5pbWF0aW9uQ29udGV4dCc7XG5cbmludGVyZmFjZSBBbmltYXRpb25Db25zdW1lclByb3BzIHtcblx0Y2hpbGRyZW46IChjb250ZXh0OiBBbmltYXRpb25Db250ZXh0VHlwZSkgPT4gUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFyZWRBbmltYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8QW5pbWF0aW9uQ29uc3VtZXJQcm9wcz4ge1xuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxBbmltYXRpb25Db250ZXh0LkNvbnN1bWVyPlxuXHRcdFx0XHR7KGNvbnRleHQ6IEFuaW1hdGlvbkNvbnRleHRUeXBlKSA9PiB0aGlzLnByb3BzLmNoaWxkcmVuKGNvbnRleHQpfVxuXHRcdFx0PC9BbmltYXRpb25Db250ZXh0LkNvbnN1bWVyPlxuXHRcdCk7XG5cdH1cbn1cbiJdfQ==