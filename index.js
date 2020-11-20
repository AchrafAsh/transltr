"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(require("react"));

require("./index.css");

var widget_1 = __importDefault(require("./widget"));

var index_1 = require("./providers/index");

var Module = function Module(_a) {
  var id = _a.id;
  return react_1["default"].createElement(index_1.LangProvider, null, react_1["default"].createElement(widget_1["default"], null));
};

exports["default"] = Module;
"use strict";

var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var LangProvider = function LangProvider(_a) {
  var children = _a.children;

  var _b = react_1.useReducer(index_1.reducer, initialState),
      state = _b[0],
      dispatch = _b[1];

  return react_1["default"].createElement(exports.LangDispatchContext.Provider, {
    value: dispatch
  }, react_1["default"].createElement(exports.LangStateContext.Provider, {
    value: state
  }, children));
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
"use strict";

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = void 0;

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'LOADING_LANGS':
      return __assign(__assign({}, state), {
        loading: true
      });

    case 'LANGS_LOADED':
      return __assign(__assign({}, state), {
        loading: false,
        langs: action.payload.langs
      });

    case 'ERROR':
      return __assign(__assign({}, state), {
        error: action.payload.error
      });

    case 'LOADING_TRANSLATIONS':
      return __assign(__assign({}, state), {
        loading: true,
        lang: action.payload.lang
      });

    case 'TRANSLATIONS_LOADED':
      return __assign(__assign({}, state), {
        loading: false
      });

    default:
      return state;
  }
};

exports.reducer = reducer;
"use strict";

var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(require("react"));

var fr_png_1 = __importDefault(require("./images/fr.png"));

var es_png_1 = __importDefault(require("./images/es.png"));

var en_png_1 = __importDefault(require("./images/en.png"));

var de_png_1 = __importDefault(require("./images/de.png"));

var index_1 = require("./providers/index");

var API_URI = 'https://transltr.herokuapp.com';

var getFlags = function getFlags(country) {
  switch (country) {
    case 'fr':
      return fr_png_1["default"];

    case 'de':
      return de_png_1["default"];

    case 'es':
      return es_png_1["default"];

    case 'en':
      return en_png_1["default"];

    default:
      return '';
  }
};

var Container = function Container() {
  var dispatch = index_1.useLangDispatch();

  var translatePage = function translatePage(lang) {
    return __awaiter(void 0, void 0, void 0, function () {
      var response, translations, error_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            dispatch({
              type: 'LOADING_TRANSLATIONS',
              payload: {
                lang: lang
              }
            });
            _a.label = 1;

          case 1:
            _a.trys.push([1, 4,, 5]);

            return [4
            /*yield*/
            , fetch(API_URI + '/translation/?' + new URLSearchParams({
              apiKey: 'myapikey',
              domain: window.location.hostname,
              pathname: window.location.pathname,
              lang: lang
            }))];

          case 2:
            response = _a.sent();
            return [4
            /*yield*/
            , response.json() // translate page content
            ];

          case 3:
            translations = _a.sent(); // translate page content

            translations.forEach(function (element) {
              var HTMLElement = document.querySelector(element.selector);

              if (HTMLElement) {
                HTMLElement.textContent = element.text;
              }
            });
            return [3
            /*break*/
            , 5];

          case 4:
            error_1 = _a.sent();
            throw error_1;

          case 5:
            setTimeout(function () {
              dispatch({
                type: 'TRANSLATIONS_LOADED'
              });
            }, 1000);
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  var handleLanguageChange = function handleLanguageChange(event) {
    var lang = event.currentTarget.value;
    if (lang === 'en') translatePage('en');
    if (lang === 'fr') translatePage('fr');
    if (lang === 'de') translatePage('de');
    if (lang === 'es') translatePage('es');
  };

  react_1.useEffect(function () {
    // get available languages
    var getAvailableLanguages = function getAvailableLanguages() {
      return __awaiter(void 0, void 0, void 0, function () {
        var response, langs, error_2;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 3,, 4]);

              return [4
              /*yield*/
              , fetch(API_URI + '/translation/lang?' + new URLSearchParams({
                apiKey: 'myapikey',
                domain: window.location.hostname
              }))];

            case 1:
              response = _a.sent();
              return [4
              /*yield*/
              , response.json()];

            case 2:
              langs = _a.sent();
              return [2
              /*return*/
              , langs];

            case 3:
              error_2 = _a.sent();
              throw error_2;

            case 4:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    dispatch({
      type: 'LOADING_LANGS'
    });
    getAvailableLanguages().then(function (langs) {
      return dispatch({
        type: 'LANGS_LOADED',
        payload: {
          langs: langs
        }
      });
    });
  });
  return react_1["default"].createElement(Widget, {
    onChange: handleLanguageChange
  });
};

var Widget = function Widget(_a) {
  var onChange = _a.onChange;

  var _b = index_1.useLangState(),
      lang = _b.lang,
      loading = _b.loading;

  return react_1["default"].createElement("div", {
    className: 'widget-container'
  }, react_1["default"].createElement("div", {
    className: 'flag-wrapper'
  }, react_1["default"].createElement("div", {
    id: 'flag',
    style: {
      backgroundImage: "url(" + getFlags(lang) + ")"
    },
    title: 'France'
  })), react_1["default"].createElement("div", {
    className: 'toggle-container'
  }, react_1["default"].createElement("div", {
    className: 'selector-container'
  }, react_1["default"].createElement("div", {
    className: 'selector-wrapper'
  }, react_1["default"].createElement("select", {
    value: lang,
    name: 'language',
    onChange: onChange,
    id: 'language-selector'
  }, react_1["default"].createElement("option", {
    value: 'fr'
  }, "Francais"), react_1["default"].createElement("option", {
    value: 'en'
  }, "English"), react_1["default"].createElement("option", {
    value: 'es'
  }, "Spanish"), react_1["default"].createElement("option", {
    value: 'de'
  }, "German")))), react_1["default"].createElement("div", {
    className: 'brand-wrapper'
  }, react_1["default"].createElement("small", null, "\u26A1 by transltr"))), loading && react_1["default"].createElement("div", {
    className: 'loader-container',
    id: 'loading'
  }, react_1["default"].createElement("div", {
    className: 'loader'
  })));
};

exports["default"] = Container;
