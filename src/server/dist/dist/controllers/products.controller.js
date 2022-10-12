"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.updateOne = exports.findOneById = exports.findAll = exports.deleteOne = exports.createOne = void 0;var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _utils = _interopRequireDefault(require("../db/utils"));

var findAll = /*#__PURE__*/function () {var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {return _regenerator["default"].wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
              (0, _utils["default"])("SELECT * FROM products"));case 2:return _context.abrupt("return", _context.sent);case 3:case "end":return _context.stop();}}}, _callee);}));return function findAll() {return _ref.apply(this, arguments);};}();exports.findAll = findAll;


var findOneById = /*#__PURE__*/function () {var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {return _regenerator["default"].wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
              (0, _utils["default"])("SELECT * FROM products WHERE ProductID = ?", [id]));case 2:return _context2.abrupt("return", _context2.sent);case 3:case "end":return _context2.stop();}}}, _callee2);}));return function findOneById(_x) {return _ref2.apply(this, arguments);};}();exports.findOneById = findOneById;


var createOne = /*#__PURE__*/function () {var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(product) {return _regenerator["default"].wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
              (0, _utils["default"])("INSERT INTO products SET ?", [product]));case 2:return _context3.abrupt("return", _context3.sent);case 3:case "end":return _context3.stop();}}}, _callee3);}));return function createOne(_x2) {return _ref3.apply(this, arguments);};}();exports.createOne = createOne;


var updateOne = /*#__PURE__*/function () {var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(product, id) {return _regenerator["default"].wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (
              (0, _utils["default"])("UPDATE products SET ? WHERE ProductID = ?", [
              product,
              id]));case 2:return _context4.abrupt("return", _context4.sent);case 3:case "end":return _context4.stop();}}}, _callee4);}));return function updateOne(_x3, _x4) {return _ref4.apply(this, arguments);};}();exports.updateOne = updateOne;



var deleteOne = /*#__PURE__*/function () {var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {return _regenerator["default"].wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
              (0, _utils["default"])("DELETE FROM products WHERE ProductID = ?", [id]));case 2:return _context5.abrupt("return", _context5.sent);case 3:case "end":return _context5.stop();}}}, _callee5);}));return function deleteOne(_x5) {return _ref5.apply(this, arguments);};}();exports.deleteOne = deleteOne;
//# sourceMappingURL=products.controller.js.map