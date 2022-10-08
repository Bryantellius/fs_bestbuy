"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _typeof = require("@babel/runtime/helpers/typeof");Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _express = _interopRequireDefault(require("express"));
var products = _interopRequireWildcard(require("../controllers/products.controller"));function _getRequireWildcardCache(nodeInterop) {if (typeof WeakMap !== "function") return null;var cacheBabelInterop = new WeakMap();var cacheNodeInterop = new WeakMap();return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {return nodeInterop ? cacheNodeInterop : cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj, nodeInterop) {if (!nodeInterop && obj && obj.__esModule) {return obj;}if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {return { "default": obj };}var cache = _getRequireWildcardCache(nodeInterop);if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj["default"] = obj;if (cache) {cache.set(obj, newObj);}return newObj;}

var router = _express["default"].Router();

router.get("/:id?", /*#__PURE__*/function () {var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {var id, results, err, _yield$products$findO, _yield$products$findO2;return _regenerator["default"].wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;

            id = req.params.id;if (!


            id) {_context.next = 15;break;}
            id = parseInt(id);if (!

            isNaN(id)) {_context.next = 8;break;}
            err = new Error("ProductID must be of type 'number'");
            err.status = 400;throw (
              err);case 8:_context.next = 10;return (


              products.findOneById(id));case 10:_yield$products$findO = _context.sent;_yield$products$findO2 = (0, _slicedToArray2["default"])(_yield$products$findO, 1);results = _yield$products$findO2[0];_context.next = 18;break;case 15:_context.next = 17;return (

              products.findAll());case 17:results = _context.sent;case 18:


            res.json(results || { msg: "No products found with id: ".concat(id) });_context.next = 24;break;case 21:_context.prev = 21;_context.t0 = _context["catch"](0);

            next(_context.t0);case 24:case "end":return _context.stop();}}}, _callee, null, [[0, 21]]);}));return function (_x, _x2, _x3) {return _ref.apply(this, arguments);};}());



router.post("/", /*#__PURE__*/function () {var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {var body, _yield$products$creat, insertId;return _regenerator["default"].wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.prev = 0;

            body = req.body;_context2.next = 4;return (

              products.createOne(body));case 4:_yield$products$creat = _context2.sent;insertId = _yield$products$creat.insertId;
            res.json({
              id: insertId,
              msg: "Successfully added product" });_context2.next = 12;break;case 9:_context2.prev = 9;_context2.t0 = _context2["catch"](0);


            next(_context2.t0);case 12:case "end":return _context2.stop();}}}, _callee2, null, [[0, 9]]);}));return function (_x4, _x5, _x6) {return _ref2.apply(this, arguments);};}());



router.put("/:id", /*#__PURE__*/function () {var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {var body, id, err, _yield$products$updat, affectedRows;return _regenerator["default"].wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.prev = 0;

            body = req.body;
            id = parseInt(req.params.id);if (!

            isNaN(id)) {_context3.next = 9;break;}
            err = new Error("ProductID must be of type 'number'");
            err.status = 400;throw (
              err);case 9:_context3.next = 11;return (

              products.updateOne(body, id));case 11:_yield$products$updat = _context3.sent;affectedRows = _yield$products$updat.affectedRows;
            res.json({
              id: id,
              msg:
              affectedRows > 0 ?
              "Successfully updated product(s)" : "No product found to update with id: ".concat(
              id) });case 14:_context3.next = 19;break;case 16:_context3.prev = 16;_context3.t0 = _context3["catch"](0);



            next(_context3.t0);case 19:case "end":return _context3.stop();}}}, _callee3, null, [[0, 16]]);}));return function (_x7, _x8, _x9) {return _ref3.apply(this, arguments);};}());



router["delete"]("/:id", /*#__PURE__*/function () {var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {var id, err, _yield$products$delet, affectedRows;return _regenerator["default"].wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.prev = 0;

            id = parseInt(req.params.id);if (!

            isNaN(id)) {_context4.next = 8;break;}
            err = new Error("ProductID must be of type 'number'");
            err.status = 400;throw (
              err);case 8:_context4.next = 10;return (

              products.deleteOne(id));case 10:_yield$products$delet = _context4.sent;affectedRows = _yield$products$delet.affectedRows;
            res.json({
              id: id,
              msg:
              affectedRows > 0 ?
              "Successfully deleted product(s)" : "No product found to delete with id: ".concat(
              id) });case 13:_context4.next = 18;break;case 15:_context4.prev = 15;_context4.t0 = _context4["catch"](0);



            next(_context4.t0);case 18:case "end":return _context4.stop();}}}, _callee4, null, [[0, 15]]);}));return function (_x10, _x11, _x12) {return _ref4.apply(this, arguments);};}());var _default =



router;exports["default"] = _default;
//# sourceMappingURL=product.router.js.map