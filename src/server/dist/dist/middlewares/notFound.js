"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.notFoundHandler = void 0;var notFoundHandler = function notFoundHandler(req, res, next) {
  try {
    res.
    status(404).
    json({ msg: "Route not found. Check your request url and try again." });
  } catch (err) {
    next(err);
  }
};exports.notFoundHandler = notFoundHandler;
//# sourceMappingURL=notFound.js.map