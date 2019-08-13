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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJTaGFyZWRBbmltYXRpb25Qcm92aWRlciIsImNvbm5lY3RTaGFyZWRBbmltYXRpb24iLCJTaGFyZWRBbmltYXRpb24iLCJ1c2VTaGFyZWRBbmltYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztlQUVlO0FBQ2RBLEVBQUFBLHVCQUF1QixFQUF2QkEsZ0NBRGM7QUFFZEMsRUFBQUEsc0JBQXNCLEVBQXRCQSwrQkFGYztBQUdkQyxFQUFBQSxlQUFlLEVBQWZBLHdCQUhjO0FBSWRDLEVBQUFBLGtCQUFrQixFQUFsQkE7QUFKYyxDLEVBT2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoYXJlZEFuaW1hdGlvblByb3ZpZGVyIGZyb20gJy4vQ29udGV4dC9TaGFyZWRBbmltYXRpb25Qcm92aWRlcic7XG5pbXBvcnQgY29ubmVjdFNoYXJlZEFuaW1hdGlvbiBmcm9tICcuL0hPQy9jb25uZWN0U2hhcmVkQW5pbWF0aW9uJztcbmltcG9ydCBTaGFyZWRBbmltYXRpb24gZnJvbSAnLi9Db250ZXh0L1NoYXJlZEFuaW1hdGlvbic7XG5pbXBvcnQgdXNlU2hhcmVkQW5pbWF0aW9uIGZyb20gJy4vdXNlU2hhcmVkQW5pbWF0aW9uL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRTaGFyZWRBbmltYXRpb25Qcm92aWRlcixcblx0Y29ubmVjdFNoYXJlZEFuaW1hdGlvbixcblx0U2hhcmVkQW5pbWF0aW9uLFxuXHR1c2VTaGFyZWRBbmltYXRpb24sXG59O1xuXG4vLyBleHBvcnQgY2xhc3MgQyB7XG4vLyBcdHByaXZhdGUgb3ggPSAxMDtcbi8vIFx0Z2V0WCA9ICgpID0+IHRoaXMub3g7XG4vLyBcdHNldFggPSAobmV3VmFsOiBudW1iZXIpID0+IHtcbi8vIFx0XHR0aGlzLm94ID0gbmV3VmFsO1xuLy8gXHR9O1xuLy8gfVxuXG4vLyBleHBvcnQgbGV0IHggPSBuZXcgQygpO1xuLy8gZXhwb3J0IGxldCB5ID0geyAuLi57IHNvbWU6ICd2YWx1ZScgfSB9O1xuIl19