function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default (function (mapValuesToProps, context) {
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
});