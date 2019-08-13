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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VTaGFyZWRBbmltYXRpb24vaW5kZXgudHMiXSwibmFtZXMiOlsidXNlU2hhcmVkQW5pbWF0aW9uIiwidmFsdWUiLCJBbmltYXRpb25Db250ZXh0IiwiZ2V0VmFsdWUiLCJuZXdWYWx1ZSIsImFuaW1hdGVkVmFsdWVzIiwib2JqIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLEtBQUQsRUFBb0I7QUFBQSxvQkFDdUIsdUJBQ3BFQywrQkFEb0UsQ0FEdkI7QUFBQSxNQUN0Q0MsUUFEc0MsZUFDdENBLFFBRHNDO0FBQUEsTUFDNUJDLFFBRDRCLGVBQzVCQSxRQUQ0QjtBQUFBLE1BQ2xCQyxjQURrQixlQUNsQkEsY0FEa0I7O0FBSzlDLE1BQU1DLEdBQXlCLEdBQUc7QUFBRUgsSUFBQUEsUUFBUSxFQUFSQSxRQUFGO0FBQVlDLElBQUFBLFFBQVEsRUFBUkEsUUFBWjtBQUFzQkMsSUFBQUEsY0FBYyxFQUFkQTtBQUF0QixHQUFsQztBQUNBLFNBQU9DLEdBQVA7QUFDQSxDQVBEOztlQVFlTixrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQW5pbWF0aW9uQ29udGV4dCwgeyBBbmltYXRpb25Db250ZXh0VHlwZSB9IGZyb20gJy4uL0NvbnRleHQvU2hhcmVkQW5pbWF0aW9uQ29udGV4dCc7XG5cbmNvbnN0IHVzZVNoYXJlZEFuaW1hdGlvbiA9ICh2YWx1ZT86IHN0cmluZykgPT4ge1xuXHRjb25zdCB7IGdldFZhbHVlLCBuZXdWYWx1ZSwgYW5pbWF0ZWRWYWx1ZXMgfTogQW5pbWF0aW9uQ29udGV4dFR5cGUgPSB1c2VDb250ZXh0KFxuXHRcdEFuaW1hdGlvbkNvbnRleHQsXG5cdCk7XG5cblx0Y29uc3Qgb2JqOiBBbmltYXRpb25Db250ZXh0VHlwZSA9IHsgZ2V0VmFsdWUsIG5ld1ZhbHVlLCBhbmltYXRlZFZhbHVlcyB9O1xuXHRyZXR1cm4gb2JqO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZVNoYXJlZEFuaW1hdGlvbjtcbiJdfQ==