// [DozArtworkPlayer]  Build version: 1.2.0  
 (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("doz"));
	else if(typeof define === 'function' && define.amd)
		define("DozArtworkPlayer", ["doz"], factory);
	else if(typeof exports === 'object')
		exports["DozArtworkPlayer"] = factory(require("doz"));
	else
		root["DozArtworkPlayer"] = factory(root["Doz"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _doz = __webpack_require__(0);

var _src = __webpack_require__(2);

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// expose component to global scope
function register() {
    if (typeof window !== 'undefined') {
        (0, _doz.define)('doz-artwork-player', _src2.default);
        (0, _doz.defineWebComponent)('doz-artwork-player', _src2.default, ['image-url', 'audio-url', 'height', 'width', 'border-radius']);
    }
}

register();

exports.default = _src2.default;


if (false) {}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\n            <style> \n                :host {\n                    display: block;\n                    width: ', ';\n                    height: ', ';\n                }\n                \n                * {\n                    box-sizing: border-box;\n                }\n                \n                :component {\n                    position: relative;\n                    display: block;\n                    width: ', ';\n                    height: ', ';\n                    background: url("', '") center;\n                    background-size: cover;\n                    border-radius: ', ';\n                    overflow: hidden;\n                }\n\n                .dap-controls {\n                    display: flex;\n                    align-items: center;\n                    text-align: center;\n                    position: absolute;\n                    height: 100%;\n                    width: 100%;\n                    left: 0;\n                    top: 0;\n                    background: rgb(0,0,0);\n                    background: radial-gradient(circle, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0) 70%);\n                    cursor: pointer;\n                }\n\n                .dap-controls svg {\n                    width: 40%;\n                    fill: #fff;\n                    transition: all 250ms;\n                    opacity: .75;\n                }\n\n                .dap-controls:hover svg{\n                    width: 60%;\n                    opacity: 1;\n                }\n                \n                .dap-controls-button {\n                    z-index: 2;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                }\n                \n                .dap-controls .dap-controls-progress {\n                    width: 0; \n                    height: 100%; \n                    background: #000; \n                    position: absolute; \n                    bottom: 0; \n                    left: 0;\n                    transition: all 500ms;\n                    opacity: .4;\n                    box-shadow: inset -1px 0 0 1px #fff;\n                }\n            </style>\n\n            <div class="dap-controls" onclick="', '" d-show="', '">\n                <', ' d-show="', '" class="dap-controls-button"/>\n                <', ' d-show="', '" class="dap-controls-button"/>\n                <div style="width: ', '%" class="dap-controls-progress"></div>\n            </div>\n        '], ['\n\n            <style> \n                :host {\n                    display: block;\n                    width: ', ';\n                    height: ', ';\n                }\n                \n                * {\n                    box-sizing: border-box;\n                }\n                \n                :component {\n                    position: relative;\n                    display: block;\n                    width: ', ';\n                    height: ', ';\n                    background: url("', '") center;\n                    background-size: cover;\n                    border-radius: ', ';\n                    overflow: hidden;\n                }\n\n                .dap-controls {\n                    display: flex;\n                    align-items: center;\n                    text-align: center;\n                    position: absolute;\n                    height: 100%;\n                    width: 100%;\n                    left: 0;\n                    top: 0;\n                    background: rgb(0,0,0);\n                    background: radial-gradient(circle, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0) 70%);\n                    cursor: pointer;\n                }\n\n                .dap-controls svg {\n                    width: 40%;\n                    fill: #fff;\n                    transition: all 250ms;\n                    opacity: .75;\n                }\n\n                .dap-controls:hover svg{\n                    width: 60%;\n                    opacity: 1;\n                }\n                \n                .dap-controls-button {\n                    z-index: 2;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                }\n                \n                .dap-controls .dap-controls-progress {\n                    width: 0; \n                    height: 100%; \n                    background: #000; \n                    position: absolute; \n                    bottom: 0; \n                    left: 0;\n                    transition: all 500ms;\n                    opacity: .4;\n                    box-shadow: inset -1px 0 0 1px #fff;\n                }\n            </style>\n\n            <div class="dap-controls" onclick="', '" d-show="', '">\n                <', ' d-show="', '" class="dap-controls-button"/>\n                <', ' d-show="', '" class="dap-controls-button"/>\n                <div style="width: ', '%" class="dap-controls-progress"></div>\n            </div>\n        ']);

var _doz = __webpack_require__(0);

var _playSvg = __webpack_require__(3);

var _playSvg2 = _interopRequireDefault(_playSvg);

var _pauseSvg = __webpack_require__(4);

var _pauseSvg2 = _interopRequireDefault(_pauseSvg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STATE = {
    PLAY: 'PLAY',
    PAUSE: 'PAUSE'
};

var _class = function (_Component) {
    _inherits(_class, _Component);

    function _class(o) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, o));

        _this.props = {
            title: '',
            imageUrl: '',
            audioUrl: '',
            height: '100px',
            width: '100px',
            borderRadius: '8px',
            _state: STATE.PAUSE,
            _progress: 0
        };

        _this.propsListener = {
            _state: function _state(v) {
                if (v === STATE.PAUSE) {
                    this.props._progress = 0;
                }
            }
        };
        return _this;
    }

    _createClass(_class, [{
        key: 'template',
        value: function template(h) {
            return h(_templateObject, this.props.width, this.props.height, this.props.width, this.props.height, this.props.imageUrl, this.props.borderRadius, this.toggle, !!this.props.audioUrl, _playSvg2.default, this.props._state === STATE.PAUSE, _pauseSvg2.default, this.props._state === STATE.PLAY, this.props._progress);
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            if (this.props._state === STATE.PLAY) this.stop();else this.play();
        }
    }, {
        key: 'play',
        value: function play() {
            this.createGlobalPlayer().play().then();
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.destroyGlobalPlayer();
        }
    }, {
        key: 'createGlobalPlayer',
        value: function createGlobalPlayer() {
            var _this2 = this;

            this.destroyGlobalPlayer();
            window.__dozArtworkPlayer = new Audio(this.props.audioUrl);
            window.__dozArtworkPlayer.addEventListener('playing', function () {
                _this2.props._state = STATE.PLAY;
            });
            window.__dozArtworkPlayer.addEventListener('pause', function () {
                _this2.props._state = STATE.PAUSE;
            });
            window.__dozArtworkPlayer.addEventListener('ended', function () {
                _this2.props._state = STATE.PAUSE;
            });
            window.__dozArtworkPlayer.addEventListener('timeupdate', function () {
                if (window.__dozArtworkPlayer) _this2.props._progress = window.__dozArtworkPlayer.currentTime / window.__dozArtworkPlayer.duration * 100;
            });
            window.__dozArtworkPlayer._setStatePause = function () {
                _this2.props._state = STATE.PAUSE;
            };
            return window.__dozArtworkPlayer;
        }
    }, {
        key: 'destroyGlobalPlayer',
        value: function destroyGlobalPlayer() {
            if (window.__dozArtworkPlayer) {
                window.__dozArtworkPlayer._setStatePause();
                window.__dozArtworkPlayer.src = '';
                window.__dozArtworkPlayer = null;
                this.props._state = STATE.PAUSE;
            }
        }
    }]);

    return _class;
}(_doz.Component);

exports.default = _class;
;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(["\n        <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n        viewBox=\"0 0 58.752 58.752\" style=\"enable-background:new 0 0 58.752 58.752;\" xml:space=\"preserve\">\n            <g>\n                <path d=\"M52.524,23.925L12.507,0.824c-1.907-1.1-4.376-1.097-6.276,0C4.293,1.94,3.088,4.025,3.088,6.264v46.205\n                c0,2.24,1.204,4.325,3.131,5.435c0.953,0.555,2.042,0.848,3.149,0.848c1.104,0,2.192-0.292,3.141-0.843l40.017-23.103\n                c1.936-1.119,3.138-3.203,3.138-5.439C55.663,27.134,54.462,25.05,52.524,23.925z M49.524,29.612L9.504,52.716\n                c-0.082,0.047-0.18,0.052-0.279-0.005c-0.084-0.049-0.137-0.142-0.137-0.242V6.263c0-0.1,0.052-0.192,0.14-0.243\n                c0.042-0.025,0.09-0.038,0.139-0.038c0.051,0,0.099,0.013,0.142,0.038l40.01,23.098c0.089,0.052,0.145,0.147,0.145,0.249\n                C49.663,29.47,49.611,29.561,49.524,29.612z\"/>\n            </g>\n        </svg>\n    "], ["\n        <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n        viewBox=\"0 0 58.752 58.752\" style=\"enable-background:new 0 0 58.752 58.752;\" xml:space=\"preserve\">\n            <g>\n                <path d=\"M52.524,23.925L12.507,0.824c-1.907-1.1-4.376-1.097-6.276,0C4.293,1.94,3.088,4.025,3.088,6.264v46.205\n                c0,2.24,1.204,4.325,3.131,5.435c0.953,0.555,2.042,0.848,3.149,0.848c1.104,0,2.192-0.292,3.141-0.843l40.017-23.103\n                c1.936-1.119,3.138-3.203,3.138-5.439C55.663,27.134,54.462,25.05,52.524,23.925z M49.524,29.612L9.504,52.716\n                c-0.082,0.047-0.18,0.052-0.279-0.005c-0.084-0.049-0.137-0.142-0.137-0.242V6.263c0-0.1,0.052-0.192,0.14-0.243\n                c0.042-0.025,0.09-0.038,0.139-0.038c0.051,0,0.099,0.013,0.142,0.038l40.01,23.098c0.089,0.052,0.145,0.147,0.145,0.249\n                C49.663,29.47,49.611,29.561,49.524,29.612z\"/>\n            </g>\n        </svg>\n    "]);

exports.default = PlaySVG;

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function PlaySVG(h) {
    return h(_templateObject);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(["\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 493.528 493.528\" style=\"enable-background:new 0 0 493.528 493.528;\" xml:space=\"preserve\">\n            <g>\n                <path d=\"M178.064,0L166.04,0.248c-14.876,0-27.236,12.112-27.236,26.992v439.664c0,14.876,13.396,26.624,28.272,26.624h0.084    \n                l10.976-0.072c14.892,0,26.22-11.92,26.22-26.808V26.996C204.352,12.116,193.028,0,178.064,0z\"/>\n                <path d=\"M328.584,0l-12.092,0.248c-14.88,0-27.3,12.112-27.3,26.992v439.664c0,14.876,13.708,26.624,28.58,26.624h0.084    \n                l10.816-0.072c14.88,0,26.052-11.92,26.052-26.808V26.996C354.72,12.116,343.548,0,328.584,0z\"/>\n            </g>\n        </svg>\n    "], ["\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 493.528 493.528\" style=\"enable-background:new 0 0 493.528 493.528;\" xml:space=\"preserve\">\n            <g>\n                <path d=\"M178.064,0L166.04,0.248c-14.876,0-27.236,12.112-27.236,26.992v439.664c0,14.876,13.396,26.624,28.272,26.624h0.084    \n                l10.976-0.072c14.892,0,26.22-11.92,26.22-26.808V26.996C204.352,12.116,193.028,0,178.064,0z\"/>\n                <path d=\"M328.584,0l-12.092,0.248c-14.88,0-27.3,12.112-27.3,26.992v439.664c0,14.876,13.708,26.624,28.58,26.624h0.084    \n                l10.816-0.072c14.88,0,26.052-11.92,26.052-26.808V26.996C354.72,12.116,343.548,0,328.584,0z\"/>\n            </g>\n        </svg>\n    "]);

exports.default = PauseSVG;

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function PauseSVG(h) {
    return h(_templateObject);
}

/***/ })
/******/ ]);
}); 