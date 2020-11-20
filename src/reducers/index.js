"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
var reducer = function (state, action) {
    switch (action.type) {
        case 'LOADING_LANGS':
            return __assign(__assign({}, state), { loading: true });
        case 'LANGS_LOADED':
            return __assign(__assign({}, state), { loading: false, langs: action.payload.langs });
        case 'ERROR':
            return __assign(__assign({}, state), { error: action.payload.error });
        case 'LOADING_TRANSLATIONS':
            return __assign(__assign({}, state), { loading: true, lang: action.payload.lang });
        case 'TRANSLATIONS_LOADED':
            return __assign(__assign({}, state), { loading: false });
        default:
            return state;
    }
};
exports.reducer = reducer;
