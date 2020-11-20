"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./index.css");
var widget_1 = __importDefault(require("./widget"));
var index_1 = require("./providers/index");
var Module = function (_a) {
    var id = _a.id;
    return (react_1.default.createElement(index_1.LangProvider, null,
        react_1.default.createElement(widget_1.default, null)));
};
exports.default = Module;
