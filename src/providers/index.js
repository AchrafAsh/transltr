"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLangDispatch = exports.useLangState = exports.LangProvider = exports.LangStateContext = exports.LangDispatchContext = void 0;
var react_1 = __importStar(require("react"));
var index_1 = require("../reducers/index");
var initialState = {
    loading: true,
    error: null,
    langs: [],
    lang: 'fr'
};
exports.LangDispatchContext = react_1.createContext(undefined);
exports.LangStateContext = react_1.createContext(undefined);
var LangProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useReducer(index_1.reducer, initialState), state = _b[0], dispatch = _b[1];
    return (react_1.default.createElement(exports.LangDispatchContext.Provider, { value: dispatch },
        react_1.default.createElement(exports.LangStateContext.Provider, { value: state }, children)));
};
exports.LangProvider = LangProvider;
function useLangState() {
    var context = react_1.useContext(exports.LangStateContext);
    if (context === undefined) {
        throw new Error('useLangState must be used within a LangProvider');
    }
    return context;
}
exports.useLangState = useLangState;
function useLangDispatch() {
    var context = react_1.useContext(exports.LangDispatchContext);
    if (context === undefined) {
        throw new Error('useLangDispatch must be used within a LangProvider');
    }
    return context;
}
exports.useLangDispatch = useLangDispatch;
