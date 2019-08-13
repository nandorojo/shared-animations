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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2dldFZhbHVlcy50cyJdLCJuYW1lcyI6WyJtYXBWYWx1ZXNUb1Byb3BzIiwiY29udGV4dCIsImtleSIsImdldFZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiRXJyb3IiLCJ2YWxpZEFycmF5IiwicmVkdWNlIiwiYSIsImIiLCJ2YWx1ZXMiLCJ2YWx1ZUxpc3QiLCJmb3JFYWNoIiwibmFtZSIsImFuaW1hdGVkVmFsdWVzIiwidW5kZWZpbmVkIiwiZSIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7ZUFHZSxrQkFBQ0EsZ0JBQUQsRUFBcUNDLE9BQXJDLEVBQXVFO0FBQ3JGLE1BQUk7QUFDSCxRQUFJLE9BQU9ELGdCQUFQLEtBQTRCLFFBQWhDLEVBQTBDO0FBQ3pDLFVBQU1FLEdBQUcsR0FBR0YsZ0JBQVo7QUFDQSxpQ0FBVUUsR0FBVixFQUFnQkQsT0FBTyxDQUFDRSxRQUFSLENBQWlCRCxHQUFqQixDQUFoQjtBQUNBLEtBSEQsTUFHTyxJQUFJRSxLQUFLLENBQUNDLE9BQU4sQ0FBY0wsZ0JBQWQsQ0FBSixFQUFxQztBQUMzQyxVQUFJLENBQUNBLGdCQUFnQixDQUFDTSxNQUF0QixFQUE4QjtBQUM3QixjQUFNLElBQUlDLEtBQUosQ0FDTCx3SEFESyxDQUFOO0FBR0E7O0FBQ0QsVUFBTUMsVUFBVSxHQUFHUixnQkFBZ0IsQ0FBQ1MsTUFBakIsQ0FBd0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZUFBVUQsQ0FBQyxJQUFJLE9BQU9DLENBQVAsS0FBYSxRQUE1QjtBQUFBLE9BQXhCLEVBQThELElBQTlELENBQW5COztBQUNBLFVBQUksQ0FBQ0gsVUFBTCxFQUFpQjtBQUNoQixjQUFNLElBQUlELEtBQUosdVZBQU47QUFFQTs7QUFDRCxVQUFNSyxNQUFNLEdBQUcsRUFBZjtBQUNBLFVBQU1DLFNBQVMsR0FBR2IsZ0JBQWxCO0FBQ0FhLE1BQUFBLFNBQVMsQ0FBQ0MsT0FBVixDQUFrQixVQUFBQyxJQUFJLEVBQUk7QUFDekJILFFBQUFBLE1BQU0sQ0FBQ0csSUFBRCxDQUFOLEdBQWVkLE9BQU8sQ0FBQ0UsUUFBUixDQUFpQlksSUFBakIsQ0FBZjtBQUNBLE9BRkQ7QUFHQSxhQUFPSCxNQUFQO0FBQ0EsS0FqQk0sTUFpQkEsSUFBSSxPQUFPWixnQkFBUCxLQUE0QixVQUFoQyxFQUE0QztBQUNsRCxhQUFPQSxnQkFBZ0IsQ0FBQ0MsT0FBTyxDQUFDZSxjQUFULENBQXZCO0FBQ0EsS0FGTSxNQUVBLElBQUloQixnQkFBZ0IsS0FBS2lCLFNBQXpCLEVBQW9DO0FBQzFDLFlBQU0sSUFBSVYsS0FBSixDQUNMLDhKQURLLENBQU47QUFHQSxLQUpNLE1BSUEsSUFBSVAsZ0JBQWdCLEtBQUssSUFBekIsRUFBK0I7QUFDckMsYUFBTyxFQUFQO0FBQ0E7O0FBQ0QsVUFBTSxJQUFJTyxLQUFKLDZUQUtVUCxnQkFMVix3QkFLdUNBLGdCQUx2QywwQkFBTjtBQU9BLEdBckNELENBcUNFLE9BQU9rQixDQUFQLEVBQVU7QUFDWEMsSUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWNGLENBQWQ7QUFDQSxXQUFPLEVBQVA7QUFDQTtBQUNELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmltYXRpb25Db250ZXh0VHlwZSB9IGZyb20gJy4uL0NvbnRleHQvU2hhcmVkQW5pbWF0aW9uQ29udGV4dCc7XG5pbXBvcnQgeyBNYXBWYWx1ZXNUb1Byb3BzIH0gZnJvbSAnLi4vSE9DL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgKG1hcFZhbHVlc1RvUHJvcHM6IE1hcFZhbHVlc1RvUHJvcHMsIGNvbnRleHQ6IEFuaW1hdGlvbkNvbnRleHRUeXBlKSA9PiB7XG5cdHRyeSB7XG5cdFx0aWYgKHR5cGVvZiBtYXBWYWx1ZXNUb1Byb3BzID09PSAnc3RyaW5nJykge1xuXHRcdFx0Y29uc3Qga2V5ID0gbWFwVmFsdWVzVG9Qcm9wcztcblx0XHRcdHJldHVybiB7IFtrZXldOiBjb250ZXh0LmdldFZhbHVlKGtleSkgfTtcblx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobWFwVmFsdWVzVG9Qcm9wcykpIHtcblx0XHRcdGlmICghbWFwVmFsdWVzVG9Qcm9wcy5sZW5ndGgpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHRcdCdFcnJvciBpbiBjb25uZWN0U2hhcmVkQW5pbWF0aW9uIEhPQyBmaXJzdCBhcmd1bWVudC4gQ2Fubm90IHBhc3MgZW1wdHkgYXJyYXksIGV4cGVjdGVkIG5hbWVzIG9mIHZhbGlkIGFuaW1hdGlvbiB2YWx1ZXMuJyxcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHZhbGlkQXJyYXkgPSBtYXBWYWx1ZXNUb1Byb3BzLnJlZHVjZSgoYSwgYikgPT4gYSAmJiB0eXBlb2YgYiA9PT0gJ3N0cmluZycsIHRydWUpO1xuXHRcdFx0aWYgKCF2YWxpZEFycmF5KSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgRXJyb3IgaW4gZmlyc3QgYXJndW1lbnQgb2YgY29ubmVjdFNoYXJlZEFuaW1hdGlvbiBIT0MuIEFuIGFycmF5IHdhcyBwYXNzZWQsIGJ1dCB2YWx1ZXMgd2VyZSBub3QgYWxsIHN0cmluZ3MuXG5UaGlzIGFyZ3VtZW50IHNob3VsZCBlaXRoZXIgYmUgYSBzdHJpbmcsIGFycmF5IG9mIHN0cmluZ3MsIG9yIG9iamVjdCBjcmVhdG9yIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYW5pbWF0ZWRWYWx1ZXMgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LiBJbiB0aGUgZmlyc3QgdHdvIGNhc2VzLCBzdHJpbmdzIHNob3VsZCBjb3JyZXNwb25kIHRvIHRoZSBuYW1lcyBvZiBpbml0aWFsaXplZCBhbmltYXRlZCB2YWx1ZXMuYCk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB2YWx1ZXMgPSB7fTtcblx0XHRcdGNvbnN0IHZhbHVlTGlzdCA9IG1hcFZhbHVlc1RvUHJvcHM7XG5cdFx0XHR2YWx1ZUxpc3QuZm9yRWFjaChuYW1lID0+IHtcblx0XHRcdFx0dmFsdWVzW25hbWVdID0gY29udGV4dC5nZXRWYWx1ZShuYW1lKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHZhbHVlcztcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBtYXBWYWx1ZXNUb1Byb3BzID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRyZXR1cm4gbWFwVmFsdWVzVG9Qcm9wcyhjb250ZXh0LmFuaW1hdGVkVmFsdWVzKTtcblx0XHR9IGVsc2UgaWYgKG1hcFZhbHVlc1RvUHJvcHMgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHQnbWFwVmFsdWVzVG9Qcm9wcyBhcmd1bWVudCB3YXMgdW5kZWZpbmVkLiBjaGVjayBpbnN0YW5jZSBvZiBjb25uZWN0U2hhcmVkQW5pbWF0aW9uIEhPQyBJZiB5b3UgZG8gbm90IHdhbnQgdG8gZ2V0IGFueSB2YWx1ZXMsIHBhc3MgbnVsbCBhcyB0aGUgZmlyc3QgYXJndW1lbnQuJyxcblx0XHRcdCk7XG5cdFx0fSBlbHNlIGlmIChtYXBWYWx1ZXNUb1Byb3BzID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4ge307XG5cdFx0fVxuXHRcdHRocm93IG5ldyBFcnJvcihgXG5FcnJvciB3aXRoIGZpcnN0IGFyZ3VtZW50IHBhc3NlZCB0byBjb25uZWN0U2hhcmVkQW5pbWF0aW9uKCkgSE9DXG5SZW1lbWJlciB0byBtYWtlIGl0IG51bGwgaWYgeW91IGRvbid0IHdhbnQgdG8gcGFzcyBhbnkgdmFsdWVzIGRpcmVjdGx5LlxuXG5PdGhlcndpc2UsIHRoaXMgYXJndW1lbnQgc2hvdWxkIGVpdGhlciBiZSBhIHN0cmluZywgYXJyYXkgb2Ygc3RyaW5ncywgb3Igb2JqZWN0IGNyZWF0b3IgZnVuY3Rpb24gdGhhdCB0YWtlcyBhbmltYXRlZFZhbHVlcyBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXG5JbnN0ZWFkLCBpdCBnb3QgJHttYXBWYWx1ZXNUb1Byb3BzfTogKCR7dHlwZW9mIG1hcFZhbHVlc1RvUHJvcHN9IGFzIHRoZSB0eXBlKVxuXHRcdGApO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlKTtcblx0XHRyZXR1cm4ge307XG5cdH1cbn07XG4iXX0=