"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Source : {
// https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// }
// kodok is Promise HTTP Javascript
var kodok = function () {
  var get = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var url,
          hit,
          _args = arguments;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
              _context.next = 3;
              return fetch(url, {
                method: 'GET'
              }).then(function (r) {
                return r.json().then(function (d) {
                  return {
                    status: r.status,
                    data: d
                  };
                });
              });

            case 3:
              hit = _context.sent;
              return _context.abrupt("return", hit);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function get() {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    get: get
  };
}();

var _default = kodok;
exports["default"] = _default;