(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/platform-browser"), require("rxjs/Subject"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/platform-browser", "rxjs/Subject"], factory);
	else if(typeof exports === 'object')
		exports["ng2-toasty"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/platform-browser"), require("rxjs/Subject"));
	else
		root["ng2-toasty"] = factory(root["@angular/core"], root["@angular/common"], root["@angular/platform-browser"], root["rxjs/Subject"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ToastData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ToastyConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ToastyEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ToastyEvent; });
/* harmony export (immutable) */ __webpack_exports__["f"] = toastyServiceFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ToastyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toasty_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Options to configure specific Toast
 */
var ToastOptions = /** @class */ (function () {
    function ToastOptions() {
    }
    ToastOptions = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ToastOptions);
    return ToastOptions;
}());

/**
 * Structrure of Toast
 */
var ToastData = /** @class */ (function () {
    function ToastData() {
    }
    ToastData = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ToastData);
    return ToastData;
}());

/**
 * Default configuration foa all toats and toasty container
 */
var ToastyConfig = /** @class */ (function () {
    function ToastyConfig() {
        // Maximum number of toasties to show at once
        this.limit = 5;
        // Whether to show the 'X' icon to close the toast
        this.showClose = true;
        // The window position where the toast pops up
        this.position = 'bottom-right';
        // How long (in miliseconds) the toasty shows before it's removed. Set to null/0 to turn off.
        this.timeout = 5000;
        // What theme to use
        this.theme = 'default';
    }
    ToastyConfig = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ToastyConfig);
    return ToastyConfig;
}());

var ToastyEventType;
(function (ToastyEventType) {
    ToastyEventType[ToastyEventType["ADD"] = 0] = "ADD";
    ToastyEventType[ToastyEventType["CLEAR"] = 1] = "CLEAR";
    ToastyEventType[ToastyEventType["CLEAR_ALL"] = 2] = "CLEAR_ALL";
})(ToastyEventType || (ToastyEventType = {}));
var ToastyEvent = /** @class */ (function () {
    function ToastyEvent(type, value) {
        this.type = type;
        this.value = value;
    }
    return ToastyEvent;
}());

function toastyServiceFactory(config) {
    return new ToastyService(config);
}
/**
 * Toasty service helps create different kinds of Toasts
 */
var ToastyService = /** @class */ (function () {
    function ToastyService(config) {
        this.config = config;
        // Init the counter
        this.uniqueCounter = 0;
        // ToastData event emitter
        // private toastsEmitter: EventEmitter<ToastData> = new EventEmitter<ToastData>();
        // Clear event emitter
        // private clearEmitter: EventEmitter<number> = new EventEmitter<number>();
        this.eventSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.events = this.eventSource.asObservable();
    }
    ToastyService_1 = ToastyService;
    /**
     * Get list of toats
     */
    // getToasts(): Observable<ToastData> {
    //   return this.toastsEmitter.asObservable();
    // }
    // getClear(): Observable<number> {
    //   return this.clearEmitter.asObservable();
    // }
    /**
     * Create Toast of a default type
     */
    ToastyService.prototype.default = function (options) {
        this.add(options, 'default');
    };
    /**
     * Create Toast of info type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.info = function (options) {
        this.add(options, 'info');
    };
    /**
     * Create Toast of success type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.success = function (options) {
        this.add(options, 'success');
    };
    /**
     * Create Toast of wait type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.wait = function (options) {
        this.add(options, 'wait');
    };
    /**
     * Create Toast of error type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.error = function (options) {
        this.add(options, 'error');
    };
    /**
     * Create Toast of warning type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.warning = function (options) {
        this.add(options, 'warning');
    };
    // Add a new toast item
    ToastyService.prototype.add = function (options, type) {
        var toastyOptions;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["b" /* isString */])(options) && options !== '' || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["c" /* isNumber */])(options)) {
            toastyOptions = {
                title: options.toString()
            };
        }
        else {
            toastyOptions = options;
        }
        if (!toastyOptions || !toastyOptions.title && !toastyOptions.msg && !toastyOptions.htmlContent) {
            throw new Error('ng2-toasty: No toast title, message or htmlContent specified!');
        }
        type = type || 'default';
        // Set a unique counter for an id
        this.uniqueCounter++;
        // Set the local vs global config items
        var showClose = this._checkConfigItem(this.config, toastyOptions, 'showClose');
        // If we have a theme set, make sure it's a valid one
        var theme;
        if (toastyOptions.theme) {
            theme = ToastyService_1.THEMES.indexOf(toastyOptions.theme) > -1 ? toastyOptions.theme : this.config.theme;
        }
        else {
            theme = this.config.theme;
        }
        var toast = {
            id: this.uniqueCounter,
            title: toastyOptions.title,
            msg: toastyOptions.msg,
            htmlContent: toastyOptions.htmlContent,
            showClose: showClose,
            type: 'toasty-type-' + type,
            theme: 'toasty-theme-' + theme,
            onAdd: toastyOptions.onAdd && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["a" /* isFunction */])(toastyOptions.onAdd) ? toastyOptions.onAdd : null,
            onRemove: toastyOptions.onRemove && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["a" /* isFunction */])(toastyOptions.onRemove) ? toastyOptions.onRemove : null
        };
        // If there's a timeout individually or globally, set the toast to timeout
        // Allows a caller to pass null/0 and override the default. Can also set the default to null/0 to turn off.
        toast.timeout = toastyOptions.hasOwnProperty('timeout') ? toastyOptions.timeout : this.config.timeout;
        // Push up a new toast item
        // this.toastsSubscriber.next(toast);
        // this.toastsEmitter.next(toast);
        this.emitEvent(new ToastyEvent(ToastyEventType.ADD, toast));
        // If we have a onAdd function, call it here
        if (toastyOptions.onAdd && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["a" /* isFunction */])(toastyOptions.onAdd)) {
            toastyOptions.onAdd.call(this, toast);
        }
    };
    // Clear all toasts
    ToastyService.prototype.clearAll = function () {
        // this.clearEmitter.next(null);
        this.emitEvent(new ToastyEvent(ToastyEventType.CLEAR_ALL));
    };
    // Clear the specific one
    ToastyService.prototype.clear = function (id) {
        // this.clearEmitter.next(id);
        this.emitEvent(new ToastyEvent(ToastyEventType.CLEAR, id));
    };
    // Checks whether the local option is set, if not,
    // checks the global config
    ToastyService.prototype._checkConfigItem = function (config, options, property) {
        if (options[property] === false) {
            return false;
        }
        else if (!options[property]) {
            return config[property];
        }
        else {
            return true;
        }
    };
    ToastyService.prototype.emitEvent = function (event) {
        if (this.eventSource) {
            // Push up a new event
            this.eventSource.next(event);
        }
    };
    var ToastyService_1;
    // Allowed THEMES
    ToastyService.THEMES = ['default', 'material', 'bootstrap'];
    ToastyService = ToastyService_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [ToastyConfig])
    ], ToastyService);
    return ToastyService;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(domSanitized) {
        this.domSanitized = domSanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.domSanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({ name: 'safeHtml' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toasty_service__ = __webpack_require__(1);
// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * A Toast component shows message with title and close button.
 */
var ToastComponent = /** @class */ (function () {
    function ToastComponent() {
        this.closeToastEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * Event handler invokes when user clicks on close button.
     * This method emit new event into ToastyContainer to close it.
     */
    ToastComponent.prototype.close = function ($event) {
        $event.preventDefault();
        this.closeToastEvent.next(this.toast);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__toasty_service__["b" /* ToastData */])
    ], ToastComponent.prototype, "toast", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('closeToast'),
        __metadata("design:type", Object)
    ], ToastComponent.prototype, "closeToastEvent", void 0);
    ToastComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ng2-toast',
            template: "\n        <div class=\"toast\" [ngClass]=\"[toast.type, toast.theme]\">\n            <div *ngIf=\"toast.showClose\" class=\"close-button\" (click)=\"close($event)\"></div>\n            <div *ngIf=\"toast.title || toast.msg\" class=\"toast-text\">\n                <span *ngIf=\"toast.title\" class=\"toast-title\" [innerHTML]=\"toast.title | safeHtml\"></span>\n                <br *ngIf=\"toast.title && toast.msg\" />\n                <span *ngIf=\"toast.msg\" class=\"toast-msg\" [innerHtml]=\"toast.msg | safeHtml\"></span>\n            </div>\n            <div *ngIf=\"toast.htmlContent\" class=\"toast-html-content\" [innerHtml]=\"toast.htmlContent | safeHtml\"></div>\n        </div>"
        })
    ], ToastComponent);
    return ToastComponent;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toasty_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toasty_service__ = __webpack_require__(1);
// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Toasty is container for Toast components
 */
var ToastyComponent = /** @class */ (function () {
    function ToastyComponent(config, toastyService) {
        this.config = config;
        this.toastyService = toastyService;
        this._position = '';
        // The storage for toasts.
        this.toasts = [];
        // Initialise position
        this.position = '';
    }
    ToastyComponent_1 = ToastyComponent;
    Object.defineProperty(ToastyComponent.prototype, "position", {
        get: function () {
            return this._position;
        },
        // The window position where the toast pops up. Possible values:
        // - bottom-right (default value from ToastConfig)
        // - bottom-left
        // - top-right
        // - top-left
        // - top-center
        // - bottom-center
        // - center-center
        set: function (value) {
            if (value) {
                var notFound = true;
                for (var i = 0; i < ToastyComponent_1.POSITIONS.length; i++) {
                    if (ToastyComponent_1.POSITIONS[i] === value) {
                        notFound = false;
                        break;
                    }
                }
                if (notFound) {
                    // Position was wrong - clear it here to use the one from config.
                    value = this.config.position;
                }
            }
            else {
                value = this.config.position;
            }
            this._position = 'toasty-position-' + value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * `ngOnInit` is called right after the directive's data-bound properties have been checked for the
     * first time, and before any of its children have been checked. It is invoked only once when the
     * directive is instantiated.
     */
    ToastyComponent.prototype.ngOnInit = function () {
        var _this = this;
        // We listen events from our service
        this.toastyService.events.subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_2__toasty_service__["d" /* ToastyEventType */].ADD) {
                // Add the new one
                var toast = event.value;
                _this.add(toast);
            }
            else if (event.type === __WEBPACK_IMPORTED_MODULE_2__toasty_service__["d" /* ToastyEventType */].CLEAR) {
                // Clear the one by number
                var id = event.value;
                _this.clear(id);
            }
            else if (event.type === __WEBPACK_IMPORTED_MODULE_2__toasty_service__["d" /* ToastyEventType */].CLEAR_ALL) {
                // Lets clear all toasts
                _this.clearAll();
            }
        });
    };
    /**
     * Event listener of 'closeToast' event comes from ToastyComponent.
     * This method removes ToastComponent assosiated with this Toast.
     */
    ToastyComponent.prototype.closeToast = function (toast) {
        this.clear(toast.id);
    };
    /**
     * Add new Toast
     */
    ToastyComponent.prototype.add = function (toast) {
        // If we've gone over our limit, remove the earliest
        // one from the array
        if (this.toasts.length >= this.config.limit) {
            this.toasts.shift();
        }
        // Add toasty to array
        this.toasts.push(toast);
        //
        // If there's a timeout individually or globally,
        // set the toast to timeout
        if (toast.timeout) {
            this._setTimeout(toast);
        }
    };
    /**
     * Clear individual toast by id
     * @param id is unique identifier of Toast
     */
    ToastyComponent.prototype.clear = function (id) {
        var _this = this;
        if (id) {
            this.toasts.forEach(function (value, key) {
                if (value.id === id) {
                    if (value.onRemove && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["a" /* isFunction */])(value.onRemove)) {
                        value.onRemove.call(_this, value);
                    }
                    _this.toasts.splice(key, 1);
                }
            });
        }
        else {
            throw new Error('Please provide id of Toast to close');
        }
    };
    /**
     * Clear all toasts
     */
    ToastyComponent.prototype.clearAll = function () {
        var _this = this;
        this.toasts.forEach(function (value, key) {
            if (value.onRemove && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["a" /* isFunction */])(value.onRemove)) {
                value.onRemove.call(_this, value);
            }
        });
        this.toasts = [];
    };
    /**
     * Custom setTimeout function for specific setTimeouts on individual toasts.
     */
    ToastyComponent.prototype._setTimeout = function (toast) {
        var _this = this;
        window.setTimeout(function () {
            _this.clear(toast.id);
        }, toast.timeout);
    };
    var ToastyComponent_1;
    /**
     * Set of constants defins position of Toasty on the page.
     */
    ToastyComponent.POSITIONS = ['bottom-right', 'bottom-left', 'top-right', 'top-left', 'top-center', 'bottom-center', 'center-center'];
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ToastyComponent.prototype, "position", null);
    ToastyComponent = ToastyComponent_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ng2-toasty',
            template: "\n    <div id=\"toasty\" [ngClass]=\"[position]\">\n        <ng2-toast *ngFor=\"let toast of toasts\" [toast]=\"toast\" (closeToast)=\"closeToast(toast)\"></ng2-toast>\n    </div>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__toasty_service__["c" /* ToastyConfig */], __WEBPACK_IMPORTED_MODULE_2__toasty_service__["g" /* ToastyService */]])
    ], ToastyComponent);
    return ToastyComponent;
}());



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isString;
/* harmony export (immutable) */ __webpack_exports__["c"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["a"] = isFunction;
// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
/**
 * Check and return true if an object is type of string
 * @param obj Analyse has to object the string type
 * @return result of analysis
 */
function isString(obj) {
    return typeof obj === "string";
}
/**
 * Check and return true if an object is type of number
 * @param obj Analyse has to object the boolean type
 * @return result of analysis
 */
function isNumber(obj) {
    return typeof obj === "number";
}
/**
 * Check and return true if an object is type of Function
 * @param obj Analyse has to object the function type
 * @return result of analysis
 */
function isFunction(obj) {
    return typeof obj === "function";
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providers", function() { return providers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastyModule", function() { return ToastyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastOptions", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastData", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastyConfig", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastyEventType", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastyEvent", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toastyServiceFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastyService", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_toasty_component__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastyComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__src_toasty_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_toast_component__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return __WEBPACK_IMPORTED_MODULE_4__src_toast_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_shared__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return __WEBPACK_IMPORTED_MODULE_5__src_shared__["a"]; });
// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var providers = [
    __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["c" /* ToastyConfig */],
    { provide: __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["g" /* ToastyService */], useFactory: __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["f" /* toastyServiceFactory */], deps: [__WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["c" /* ToastyConfig */]] }
];
var ToastyModule = /** @class */ (function () {
    function ToastyModule() {
    }
    ToastyModule_1 = ToastyModule;
    ToastyModule.forRoot = function () {
        return {
            ngModule: ToastyModule_1,
            providers: providers
        };
    };
    var ToastyModule_1;
    ToastyModule = ToastyModule_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__src_toast_component__["a" /* ToastComponent */], __WEBPACK_IMPORTED_MODULE_3__src_toasty_component__["a" /* ToastyComponent */], __WEBPACK_IMPORTED_MODULE_5__src_shared__["a" /* SafeHtmlPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__src_toast_component__["a" /* ToastComponent */], __WEBPACK_IMPORTED_MODULE_3__src_toasty_component__["a" /* ToastyComponent */]],
            providers: providers
        })
    ], ToastyModule);
    return ToastyModule;
}());



/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1NjhmNTQxZTVlZDQxODI0ODc5OCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvYXN0eS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvYXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9hc3R5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9hc3R5LnV0aWxzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL1N1YmplY3RcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFF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SSxTQUFTLEdBQUc7SUFDbkIseUVBQVk7SUFDWixFQUFFLE9BQU8sRUFBRSwwRUFBYSxFQUFFLFVBQVUsRUFBRSxpRkFBb0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyx5RUFBWSxDQUFDLEVBQUU7Q0FDckYsQ0FBQztBQVFGO0lBQUE7SUFPQSxDQUFDO3FCQVBZLFlBQVk7SUFDZCxvQkFBTyxHQUFkO1FBQ0ksT0FBTztZQUNILFFBQVEsRUFBRSxjQUFZO1lBQ3RCLFNBQVMsRUFBRSxTQUFTO1NBQ3ZCLENBQUM7SUFDTixDQUFDOztJQU5RLFlBQVk7UUFOeEIsOEVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLDZEQUFZLENBQUM7WUFDdkIsWUFBWSxFQUFFLENBQUMsNEVBQWMsRUFBRSw4RUFBZSxFQUFFLGlFQUFZLENBQUM7WUFDN0QsT0FBTyxFQUFFLENBQUUsNEVBQWMsRUFBRSw4RUFBZSxDQUFDO1lBQzNDLFNBQVMsRUFBRSxTQUFTO1NBQ3ZCLENBQUM7T0FDVyxZQUFZLENBT3hCO0lBQUQsbUJBQUM7Q0FBQTtBQVB3Qjs7Ozs7OztBQzVCekIsK0M7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6ImluZGV4LnVtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIiksIHJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpLCByZXF1aXJlKFwicnhqcy9TdWJqZWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIkBhbmd1bGFyL2NvcmVcIiwgXCJAYW5ndWxhci9jb21tb25cIiwgXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIsIFwicnhqcy9TdWJqZWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5nMi10b2FzdHlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiKSwgcmVxdWlyZShcInJ4anMvU3ViamVjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibmcyLXRvYXN0eVwiXSA9IGZhY3Rvcnkocm9vdFtcIkBhbmd1bGFyL2NvcmVcIl0sIHJvb3RbXCJAYW5ndWxhci9jb21tb25cIl0sIHJvb3RbXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCJdLCByb290W1wicnhqcy9TdWJqZWN0XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV84X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU2OGY1NDFlNWVkNDE4MjQ4Nzk4IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBDb3B5cmlnaHQgKEMpIDIwMTYtMjAxNyBTZXJnZXkgQWtvcGtva2h5YW50c1xuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi10b2FzdHlcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNTdHJpbmcsIGlzTnVtYmVyLCBpc0Z1bmN0aW9uIH0gZnJvbSAnLi90b2FzdHkudXRpbHMnO1xuXG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbi8qKlxuICogT3B0aW9ucyB0byBjb25maWd1cmUgc3BlY2lmaWMgVG9hc3RcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvYXN0T3B0aW9ucyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG1zZz86IHN0cmluZztcbiAgaHRtbENvbnRlbnQ/OiBzdHJpbmc7XG4gIHNob3dDbG9zZT86IGJvb2xlYW47XG4gIHRoZW1lPzogc3RyaW5nO1xuICB0aW1lb3V0PzogbnVtYmVyO1xuICBvbkFkZD86IEZ1bmN0aW9uO1xuICBvblJlbW92ZT86IEZ1bmN0aW9uO1xufVxuXG4vKipcbiAqIFN0cnVjdHJ1cmUgb2YgVG9hc3RcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvYXN0RGF0YSB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG1zZzogc3RyaW5nO1xuICBodG1sQ29udGVudDogc3RyaW5nO1xuICBzaG93Q2xvc2U6IGJvb2xlYW47XG4gIHR5cGU6IHN0cmluZztcbiAgdGhlbWU6IHN0cmluZztcbiAgdGltZW91dDogbnVtYmVyO1xuICBvbkFkZDogRnVuY3Rpb247XG4gIG9uUmVtb3ZlOiBGdW5jdGlvbjtcbiAgb25DbGljazogRnVuY3Rpb247XG59XG5cbi8qKlxuICogRGVmYXVsdCBjb25maWd1cmF0aW9uIGZvYSBhbGwgdG9hdHMgYW5kIHRvYXN0eSBjb250YWluZXJcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvYXN0eUNvbmZpZyB7XG5cbiAgLy8gTWF4aW11bSBudW1iZXIgb2YgdG9hc3RpZXMgdG8gc2hvdyBhdCBvbmNlXG4gIGxpbWl0OiBudW1iZXIgPSA1O1xuXG4gIC8vIFdoZXRoZXIgdG8gc2hvdyB0aGUgJ1gnIGljb24gdG8gY2xvc2UgdGhlIHRvYXN0XG4gIHNob3dDbG9zZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgLy8gVGhlIHdpbmRvdyBwb3NpdGlvbiB3aGVyZSB0aGUgdG9hc3QgcG9wcyB1cFxuICBwb3NpdGlvbjogJ2JvdHRvbS1yaWdodCcgfCAnYm90dG9tLWxlZnQnIHwgJ3RvcC1yaWdodCcgfCAndG9wLWxlZnQnIHwgJ3RvcC1jZW50ZXInIHwgJ2JvdHRvbS1jZW50ZXInIHwgJ2NlbnRlci1jZW50ZXInID0gJ2JvdHRvbS1yaWdodCc7XG5cbiAgLy8gSG93IGxvbmcgKGluIG1pbGlzZWNvbmRzKSB0aGUgdG9hc3R5IHNob3dzIGJlZm9yZSBpdCdzIHJlbW92ZWQuIFNldCB0byBudWxsLzAgdG8gdHVybiBvZmYuXG4gIHRpbWVvdXQ6IG51bWJlciA9IDUwMDA7XG5cbiAgLy8gV2hhdCB0aGVtZSB0byB1c2VcbiAgdGhlbWU6ICdkZWZhdWx0JyB8ICdtYXRlcmlhbCcgfCAnYm9vdHN0cmFwJyA9ICdkZWZhdWx0Jztcbn1cblxuZXhwb3J0IGVudW0gVG9hc3R5RXZlbnRUeXBlIHtcbiAgQURELFxuICBDTEVBUixcbiAgQ0xFQVJfQUxMXG59XG5cbmV4cG9ydCBjbGFzcyBUb2FzdHlFdmVudCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHR5cGU6VG9hc3R5RXZlbnRUeXBlLCBwdWJsaWMgdmFsdWU/OmFueSkge31cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvYXN0eVNlcnZpY2VGYWN0b3J5KGNvbmZpZzogVG9hc3R5Q29uZmlnKTogVG9hc3R5U2VydmljZSAge1xuICAgIHJldHVybiBuZXcgVG9hc3R5U2VydmljZShjb25maWcpO1xufVxuXG4vKipcbiAqIFRvYXN0eSBzZXJ2aWNlIGhlbHBzIGNyZWF0ZSBkaWZmZXJlbnQga2luZHMgb2YgVG9hc3RzXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2FzdHlTZXJ2aWNlIHtcbiAgLy8gQWxsb3dlZCBUSEVNRVNcbiAgc3RhdGljIFRIRU1FUzogQXJyYXk8c3RyaW5nPiA9IFsnZGVmYXVsdCcsICdtYXRlcmlhbCcsICdib290c3RyYXAnXTtcbiAgLy8gSW5pdCB0aGUgY291bnRlclxuICB1bmlxdWVDb3VudGVyOiBudW1iZXIgPSAwO1xuICAvLyBUb2FzdERhdGEgZXZlbnQgZW1pdHRlclxuICAvLyBwcml2YXRlIHRvYXN0c0VtaXR0ZXI6IEV2ZW50RW1pdHRlcjxUb2FzdERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxUb2FzdERhdGE+KCk7XG4gIC8vIENsZWFyIGV2ZW50IGVtaXR0ZXJcbiAgLy8gcHJpdmF0ZSBjbGVhckVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgcHJpdmF0ZSBldmVudFNvdXJjZTogU3ViamVjdDxUb2FzdHlFdmVudD4gPSBuZXcgU3ViamVjdDxUb2FzdHlFdmVudD4oKTtcbiAgcHVibGljIGV2ZW50czogT2JzZXJ2YWJsZTxUb2FzdHlFdmVudD4gPSB0aGlzLmV2ZW50U291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBUb2FzdHlDb25maWcpIHt9XG5cbiAgLyoqXG4gICAqIEdldCBsaXN0IG9mIHRvYXRzXG4gICAqL1xuICAvLyBnZXRUb2FzdHMoKTogT2JzZXJ2YWJsZTxUb2FzdERhdGE+IHtcbiAgLy8gICByZXR1cm4gdGhpcy50b2FzdHNFbWl0dGVyLmFzT2JzZXJ2YWJsZSgpO1xuICAvLyB9XG5cbiAgLy8gZ2V0Q2xlYXIoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgLy8gICByZXR1cm4gdGhpcy5jbGVhckVtaXR0ZXIuYXNPYnNlcnZhYmxlKCk7XG4gIC8vIH1cblxuICAvKipcbiAgICogQ3JlYXRlIFRvYXN0IG9mIGEgZGVmYXVsdCB0eXBlXG4gICAqL1xuICBkZWZhdWx0KG9wdGlvbnM6IFRvYXN0T3B0aW9uc3xzdHJpbmd8bnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hZGQob3B0aW9ucywgJ2RlZmF1bHQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgVG9hc3Qgb2YgaW5mbyB0eXBlXG4gICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9ucyBJbmRpdmlkdWFsIHRvYXN0eSBjb25maWcgb3ZlcnJpZGVzXG4gICAqL1xuICBpbmZvKG9wdGlvbnM6IFRvYXN0T3B0aW9uc3xzdHJpbmd8bnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hZGQob3B0aW9ucywgJ2luZm8nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgVG9hc3Qgb2Ygc3VjY2VzcyB0eXBlXG4gICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9ucyBJbmRpdmlkdWFsIHRvYXN0eSBjb25maWcgb3ZlcnJpZGVzXG4gICAqL1xuICBzdWNjZXNzKG9wdGlvbnM6IFRvYXN0T3B0aW9uc3xzdHJpbmd8bnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hZGQob3B0aW9ucywgJ3N1Y2Nlc3MnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgVG9hc3Qgb2Ygd2FpdCB0eXBlXG4gICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9ucyBJbmRpdmlkdWFsIHRvYXN0eSBjb25maWcgb3ZlcnJpZGVzXG4gICAqL1xuICB3YWl0KG9wdGlvbnM6IFRvYXN0T3B0aW9uc3xzdHJpbmd8bnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hZGQob3B0aW9ucywgJ3dhaXQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgVG9hc3Qgb2YgZXJyb3IgdHlwZVxuICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnMgSW5kaXZpZHVhbCB0b2FzdHkgY29uZmlnIG92ZXJyaWRlc1xuICAgKi9cbiAgZXJyb3Iob3B0aW9uczogVG9hc3RPcHRpb25zfHN0cmluZ3xudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFkZChvcHRpb25zLCAnZXJyb3InKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgVG9hc3Qgb2Ygd2FybmluZyB0eXBlXG4gICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9ucyBJbmRpdmlkdWFsIHRvYXN0eSBjb25maWcgb3ZlcnJpZGVzXG4gICAqL1xuICB3YXJuaW5nKG9wdGlvbnM6IFRvYXN0T3B0aW9uc3xzdHJpbmd8bnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hZGQob3B0aW9ucywgJ3dhcm5pbmcnKTtcbiAgfVxuXG5cbiAgLy8gQWRkIGEgbmV3IHRvYXN0IGl0ZW1cbiAgcHJpdmF0ZSBhZGQob3B0aW9uczogVG9hc3RPcHRpb25zfHN0cmluZ3xudW1iZXIsIHR5cGU6IHN0cmluZykge1xuICAgIGxldCB0b2FzdHlPcHRpb25zOiBUb2FzdE9wdGlvbnM7XG5cbiAgICBpZiAoaXNTdHJpbmcob3B0aW9ucykgJiYgb3B0aW9ucyAhPT0gJycgfHwgaXNOdW1iZXIob3B0aW9ucykpIHtcbiAgICAgIHRvYXN0eU9wdGlvbnMgPSA8VG9hc3RPcHRpb25zPntcbiAgICAgICAgdGl0bGU6IG9wdGlvbnMudG9TdHJpbmcoKVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9hc3R5T3B0aW9ucyA9IDxUb2FzdE9wdGlvbnM+b3B0aW9ucztcbiAgICB9XG5cbiAgICBpZiAoIXRvYXN0eU9wdGlvbnMgfHwgIXRvYXN0eU9wdGlvbnMudGl0bGUgJiYgIXRvYXN0eU9wdGlvbnMubXNnICYmICF0b2FzdHlPcHRpb25zLmh0bWxDb250ZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25nMi10b2FzdHk6IE5vIHRvYXN0IHRpdGxlLCBtZXNzYWdlIG9yIGh0bWxDb250ZW50IHNwZWNpZmllZCEnKTtcbiAgICB9XG5cbiAgICB0eXBlID0gdHlwZSB8fCAnZGVmYXVsdCc7XG5cbiAgICAvLyBTZXQgYSB1bmlxdWUgY291bnRlciBmb3IgYW4gaWRcbiAgICB0aGlzLnVuaXF1ZUNvdW50ZXIrKztcblxuICAgIC8vIFNldCB0aGUgbG9jYWwgdnMgZ2xvYmFsIGNvbmZpZyBpdGVtc1xuICAgIGxldCBzaG93Q2xvc2UgPSB0aGlzLl9jaGVja0NvbmZpZ0l0ZW0odGhpcy5jb25maWcsIHRvYXN0eU9wdGlvbnMsICdzaG93Q2xvc2UnKTtcblxuICAgIC8vIElmIHdlIGhhdmUgYSB0aGVtZSBzZXQsIG1ha2Ugc3VyZSBpdCdzIGEgdmFsaWQgb25lXG4gICAgbGV0IHRoZW1lOiBzdHJpbmc7XG4gICAgaWYgKHRvYXN0eU9wdGlvbnMudGhlbWUpIHtcbiAgICAgIHRoZW1lID0gVG9hc3R5U2VydmljZS5USEVNRVMuaW5kZXhPZih0b2FzdHlPcHRpb25zLnRoZW1lKSA+IC0xID8gdG9hc3R5T3B0aW9ucy50aGVtZSA6IHRoaXMuY29uZmlnLnRoZW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGVtZSA9IHRoaXMuY29uZmlnLnRoZW1lO1xuICAgIH1cblxuICAgIGxldCB0b2FzdDogVG9hc3REYXRhID0gPFRvYXN0RGF0YT57XG4gICAgICBpZCAgICAgICAgIDogdGhpcy51bmlxdWVDb3VudGVyLFxuICAgICAgdGl0bGUgICAgICA6IHRvYXN0eU9wdGlvbnMudGl0bGUsXG4gICAgICBtc2cgICAgICAgIDogdG9hc3R5T3B0aW9ucy5tc2csXG4gICAgICBodG1sQ29udGVudDogdG9hc3R5T3B0aW9ucy5odG1sQ29udGVudCxcbiAgICAgIHNob3dDbG9zZSAgOiBzaG93Q2xvc2UsXG4gICAgICB0eXBlICAgICAgIDogJ3RvYXN0eS10eXBlLScgKyB0eXBlLFxuICAgICAgdGhlbWUgICAgICA6ICd0b2FzdHktdGhlbWUtJyArIHRoZW1lLFxuICAgICAgb25BZGQgICAgICA6IHRvYXN0eU9wdGlvbnMub25BZGQgJiYgaXNGdW5jdGlvbih0b2FzdHlPcHRpb25zLm9uQWRkKSA/IHRvYXN0eU9wdGlvbnMub25BZGQgOiBudWxsLFxuICAgICAgb25SZW1vdmUgICA6IHRvYXN0eU9wdGlvbnMub25SZW1vdmUgJiYgaXNGdW5jdGlvbih0b2FzdHlPcHRpb25zLm9uUmVtb3ZlKSA/IHRvYXN0eU9wdGlvbnMub25SZW1vdmUgOiBudWxsXG4gICAgfTtcblxuICAgIC8vIElmIHRoZXJlJ3MgYSB0aW1lb3V0IGluZGl2aWR1YWxseSBvciBnbG9iYWxseSwgc2V0IHRoZSB0b2FzdCB0byB0aW1lb3V0XG4gICAgLy8gQWxsb3dzIGEgY2FsbGVyIHRvIHBhc3MgbnVsbC8wIGFuZCBvdmVycmlkZSB0aGUgZGVmYXVsdC4gQ2FuIGFsc28gc2V0IHRoZSBkZWZhdWx0IHRvIG51bGwvMCB0byB0dXJuIG9mZi5cbiAgICB0b2FzdC50aW1lb3V0ID0gdG9hc3R5T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgndGltZW91dCcpID8gdG9hc3R5T3B0aW9ucy50aW1lb3V0IDogdGhpcy5jb25maWcudGltZW91dDtcblxuICAgIC8vIFB1c2ggdXAgYSBuZXcgdG9hc3QgaXRlbVxuICAgIC8vIHRoaXMudG9hc3RzU3Vic2NyaWJlci5uZXh0KHRvYXN0KTtcbiAgICAvLyB0aGlzLnRvYXN0c0VtaXR0ZXIubmV4dCh0b2FzdCk7XG4gICAgdGhpcy5lbWl0RXZlbnQobmV3IFRvYXN0eUV2ZW50KFRvYXN0eUV2ZW50VHlwZS5BREQsIHRvYXN0KSk7XG4gICAgLy8gSWYgd2UgaGF2ZSBhIG9uQWRkIGZ1bmN0aW9uLCBjYWxsIGl0IGhlcmVcbiAgICBpZiAodG9hc3R5T3B0aW9ucy5vbkFkZCAmJiBpc0Z1bmN0aW9uKHRvYXN0eU9wdGlvbnMub25BZGQpKSB7XG4gICAgICB0b2FzdHlPcHRpb25zLm9uQWRkLmNhbGwodGhpcywgdG9hc3QpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENsZWFyIGFsbCB0b2FzdHNcbiAgY2xlYXJBbGwoKSB7XG4gICAgLy8gdGhpcy5jbGVhckVtaXR0ZXIubmV4dChudWxsKTtcbiAgICB0aGlzLmVtaXRFdmVudChuZXcgVG9hc3R5RXZlbnQoVG9hc3R5RXZlbnRUeXBlLkNMRUFSX0FMTCkpO1xuICB9XG5cbiAgLy8gQ2xlYXIgdGhlIHNwZWNpZmljIG9uZVxuICBjbGVhcihpZDogbnVtYmVyKSB7XG4gICAgLy8gdGhpcy5jbGVhckVtaXR0ZXIubmV4dChpZCk7XG4gICAgdGhpcy5lbWl0RXZlbnQobmV3IFRvYXN0eUV2ZW50KFRvYXN0eUV2ZW50VHlwZS5DTEVBUiwgaWQpKTtcbiAgfVxuXG4gIC8vIENoZWNrcyB3aGV0aGVyIHRoZSBsb2NhbCBvcHRpb24gaXMgc2V0LCBpZiBub3QsXG4gIC8vIGNoZWNrcyB0aGUgZ2xvYmFsIGNvbmZpZ1xuICBwcml2YXRlIF9jaGVja0NvbmZpZ0l0ZW0oY29uZmlnOiBhbnksIG9wdGlvbnM6IGFueSwgcHJvcGVydHk6IHN0cmluZykge1xuICAgIGlmIChvcHRpb25zW3Byb3BlcnR5XSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKCFvcHRpb25zW3Byb3BlcnR5XSkge1xuICAgICAgcmV0dXJuIGNvbmZpZ1twcm9wZXJ0eV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZW1pdEV2ZW50KGV2ZW50OiBUb2FzdHlFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5ldmVudFNvdXJjZSkge1xuICAgICAgICAgICAgLy8gUHVzaCB1cCBhIG5ldyBldmVudFxuICAgICAgICAgICAgdGhpcy5ldmVudFNvdXJjZS5uZXh0KGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy90b2FzdHkuc2VydmljZS50cyIsIi8vIENvcHlyaWdodCAoQykgMjAxNi0yMDE3IFNlcmdleSBBa29wa29raHlhbnRzXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLXRvYXN0eVxuXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnc2FmZUh0bWwnfSlcbmV4cG9ydCBjbGFzcyBTYWZlSHRtbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtICB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkb21TYW5pdGl6ZWQ6IERvbVNhbml0aXplcikge31cblxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvbVNhbml0aXplZC5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9zaGFyZWQudHMiLCIvLyBDb3B5cmlnaHQgKEMpIDIwMTYtMjAxNyBTZXJnZXkgQWtvcGtva2h5YW50c1xuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi10b2FzdHlcblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVG9hc3REYXRhIH0gZnJvbSAnLi90b2FzdHkuc2VydmljZSc7XG5cbi8qKlxuICogQSBUb2FzdCBjb21wb25lbnQgc2hvd3MgbWVzc2FnZSB3aXRoIHRpdGxlIGFuZCBjbG9zZSBidXR0b24uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi10b2FzdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2FzdFwiIFtuZ0NsYXNzXT1cIlt0b2FzdC50eXBlLCB0b2FzdC50aGVtZV1cIj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ0b2FzdC5zaG93Q2xvc2VcIiBjbGFzcz1cImNsb3NlLWJ1dHRvblwiIChjbGljayk9XCJjbG9zZSgkZXZlbnQpXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidG9hc3QudGl0bGUgfHwgdG9hc3QubXNnXCIgY2xhc3M9XCJ0b2FzdC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0b2FzdC50aXRsZVwiIGNsYXNzPVwidG9hc3QtdGl0bGVcIiBbaW5uZXJIVE1MXT1cInRvYXN0LnRpdGxlIHwgc2FmZUh0bWxcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJyICpuZ0lmPVwidG9hc3QudGl0bGUgJiYgdG9hc3QubXNnXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvYXN0Lm1zZ1wiIGNsYXNzPVwidG9hc3QtbXNnXCIgW2lubmVySHRtbF09XCJ0b2FzdC5tc2cgfCBzYWZlSHRtbFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInRvYXN0Lmh0bWxDb250ZW50XCIgY2xhc3M9XCJ0b2FzdC1odG1sLWNvbnRlbnRcIiBbaW5uZXJIdG1sXT1cInRvYXN0Lmh0bWxDb250ZW50IHwgc2FmZUh0bWxcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgdG9hc3Q6IFRvYXN0RGF0YTtcbiAgQE91dHB1dCgnY2xvc2VUb2FzdCcpIGNsb3NlVG9hc3RFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBpbnZva2VzIHdoZW4gdXNlciBjbGlja3Mgb24gY2xvc2UgYnV0dG9uLlxuICAgKiBUaGlzIG1ldGhvZCBlbWl0IG5ldyBldmVudCBpbnRvIFRvYXN0eUNvbnRhaW5lciB0byBjbG9zZSBpdC5cbiAgICovXG4gIGNsb3NlKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jbG9zZVRvYXN0RXZlbnQubmV4dCh0aGlzLnRvYXN0KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3RvYXN0LmNvbXBvbmVudC50cyIsIi8vIENvcHlyaWdodCAoQykgMjAxNi0yMDE3IFNlcmdleSBBa29wa29raHlhbnRzXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLXRvYXN0eVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vdG9hc3R5LnV0aWxzJztcbmltcG9ydCB7IFRvYXN0eVNlcnZpY2UsIFRvYXN0RGF0YSwgVG9hc3R5Q29uZmlnLCBUb2FzdHlFdmVudCwgVG9hc3R5RXZlbnRUeXBlIH0gZnJvbSAnLi90b2FzdHkuc2VydmljZSc7XG5cbi8qKlxuICogVG9hc3R5IGlzIGNvbnRhaW5lciBmb3IgVG9hc3QgY29tcG9uZW50c1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZzItdG9hc3R5JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGlkPVwidG9hc3R5XCIgW25nQ2xhc3NdPVwiW3Bvc2l0aW9uXVwiPlxuICAgICAgICA8bmcyLXRvYXN0ICpuZ0Zvcj1cImxldCB0b2FzdCBvZiB0b2FzdHNcIiBbdG9hc3RdPVwidG9hc3RcIiAoY2xvc2VUb2FzdCk9XCJjbG9zZVRvYXN0KHRvYXN0KVwiPjwvbmcyLXRvYXN0PlxuICAgIDwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3R5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIFNldCBvZiBjb25zdGFudHMgZGVmaW5zIHBvc2l0aW9uIG9mIFRvYXN0eSBvbiB0aGUgcGFnZS5cbiAgICovXG4gIHN0YXRpYyBQT1NJVElPTlM6IEFycmF5PFN0cmluZz4gPSBbJ2JvdHRvbS1yaWdodCcsICdib3R0b20tbGVmdCcsICd0b3AtcmlnaHQnLCAndG9wLWxlZnQnLCAndG9wLWNlbnRlcicsICdib3R0b20tY2VudGVyJywgJ2NlbnRlci1jZW50ZXInXTtcblxuICBwcml2YXRlIF9wb3NpdGlvbjogc3RyaW5nID0gJyc7XG4gIC8vIFRoZSB3aW5kb3cgcG9zaXRpb24gd2hlcmUgdGhlIHRvYXN0IHBvcHMgdXAuIFBvc3NpYmxlIHZhbHVlczpcbiAgLy8gLSBib3R0b20tcmlnaHQgKGRlZmF1bHQgdmFsdWUgZnJvbSBUb2FzdENvbmZpZylcbiAgLy8gLSBib3R0b20tbGVmdFxuICAvLyAtIHRvcC1yaWdodFxuICAvLyAtIHRvcC1sZWZ0XG4gIC8vIC0gdG9wLWNlbnRlclxuICAvLyAtIGJvdHRvbS1jZW50ZXJcbiAgLy8gLSBjZW50ZXItY2VudGVyXG4gIEBJbnB1dCgpIHNldCBwb3NpdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBsZXQgbm90Rm91bmQgPSB0cnVlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBUb2FzdHlDb21wb25lbnQuUE9TSVRJT05TLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChUb2FzdHlDb21wb25lbnQuUE9TSVRJT05TW2ldID09PSB2YWx1ZSkge1xuICAgICAgICAgIG5vdEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChub3RGb3VuZCkge1xuICAgICAgICAvLyBQb3NpdGlvbiB3YXMgd3JvbmcgLSBjbGVhciBpdCBoZXJlIHRvIHVzZSB0aGUgb25lIGZyb20gY29uZmlnLlxuICAgICAgICB2YWx1ZSA9IHRoaXMuY29uZmlnLnBvc2l0aW9uO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuY29uZmlnLnBvc2l0aW9uO1xuICAgIH1cbiAgICB0aGlzLl9wb3NpdGlvbiA9ICd0b2FzdHktcG9zaXRpb24tJyArIHZhbHVlO1xuICB9XG5cbiAgZ2V0IHBvc2l0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgLy8gVGhlIHN0b3JhZ2UgZm9yIHRvYXN0cy5cbiAgdG9hc3RzOiBBcnJheTxUb2FzdERhdGE+ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IFRvYXN0eUNvbmZpZywgcHJpdmF0ZSB0b2FzdHlTZXJ2aWNlOiBUb2FzdHlTZXJ2aWNlKSB7XG4gICAgLy8gSW5pdGlhbGlzZSBwb3NpdGlvblxuICAgIHRoaXMucG9zaXRpb24gPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBgbmdPbkluaXRgIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgZGlyZWN0aXZlJ3MgZGF0YS1ib3VuZCBwcm9wZXJ0aWVzIGhhdmUgYmVlbiBjaGVja2VkIGZvciB0aGVcbiAgICogZmlyc3QgdGltZSwgYW5kIGJlZm9yZSBhbnkgb2YgaXRzIGNoaWxkcmVuIGhhdmUgYmVlbiBjaGVja2VkLiBJdCBpcyBpbnZva2VkIG9ubHkgb25jZSB3aGVuIHRoZVxuICAgKiBkaXJlY3RpdmUgaXMgaW5zdGFudGlhdGVkLlxuICAgKi9cbiAgbmdPbkluaXQoKTogYW55IHtcbiAgICAvLyBXZSBsaXN0ZW4gZXZlbnRzIGZyb20gb3VyIHNlcnZpY2VcbiAgICB0aGlzLnRvYXN0eVNlcnZpY2UuZXZlbnRzLnN1YnNjcmliZSgoZXZlbnQ6IFRvYXN0eUV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gVG9hc3R5RXZlbnRUeXBlLkFERCkge1xuICAgICAgICAvLyBBZGQgdGhlIG5ldyBvbmVcbiAgICAgICAgbGV0IHRvYXN0OiBUb2FzdERhdGEgPSBldmVudC52YWx1ZTtcbiAgICAgICAgdGhpcy5hZGQodG9hc3QpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSBUb2FzdHlFdmVudFR5cGUuQ0xFQVIpIHtcbiAgICAgICAgLy8gQ2xlYXIgdGhlIG9uZSBieSBudW1iZXJcbiAgICAgICAgbGV0IGlkOiBudW1iZXIgPSBldmVudC52YWx1ZTtcbiAgICAgICAgdGhpcy5jbGVhcihpZCk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09IFRvYXN0eUV2ZW50VHlwZS5DTEVBUl9BTEwpIHtcbiAgICAgICAgLy8gTGV0cyBjbGVhciBhbGwgdG9hc3RzXG4gICAgICAgIHRoaXMuY2xlYXJBbGwoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBsaXN0ZW5lciBvZiAnY2xvc2VUb2FzdCcgZXZlbnQgY29tZXMgZnJvbSBUb2FzdHlDb21wb25lbnQuXG4gICAqIFRoaXMgbWV0aG9kIHJlbW92ZXMgVG9hc3RDb21wb25lbnQgYXNzb3NpYXRlZCB3aXRoIHRoaXMgVG9hc3QuXG4gICAqL1xuICBjbG9zZVRvYXN0KHRvYXN0OiBUb2FzdERhdGEpIHtcbiAgICB0aGlzLmNsZWFyKHRvYXN0LmlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbmV3IFRvYXN0XG4gICAqL1xuICBhZGQodG9hc3Q6IFRvYXN0RGF0YSkge1xuICAgIC8vIElmIHdlJ3ZlIGdvbmUgb3ZlciBvdXIgbGltaXQsIHJlbW92ZSB0aGUgZWFybGllc3RcbiAgICAvLyBvbmUgZnJvbSB0aGUgYXJyYXlcbiAgICBpZiAodGhpcy50b2FzdHMubGVuZ3RoID49IHRoaXMuY29uZmlnLmxpbWl0KSB7XG4gICAgICB0aGlzLnRvYXN0cy5zaGlmdCgpO1xuICAgIH1cbiAgICAvLyBBZGQgdG9hc3R5IHRvIGFycmF5XG4gICAgdGhpcy50b2FzdHMucHVzaCh0b2FzdCk7XG4gICAgLy9cbiAgICAvLyBJZiB0aGVyZSdzIGEgdGltZW91dCBpbmRpdmlkdWFsbHkgb3IgZ2xvYmFsbHksXG4gICAgLy8gc2V0IHRoZSB0b2FzdCB0byB0aW1lb3V0XG4gICAgaWYgKHRvYXN0LnRpbWVvdXQpIHtcbiAgICAgIHRoaXMuX3NldFRpbWVvdXQodG9hc3QpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBpbmRpdmlkdWFsIHRvYXN0IGJ5IGlkXG4gICAqIEBwYXJhbSBpZCBpcyB1bmlxdWUgaWRlbnRpZmllciBvZiBUb2FzdFxuICAgKi9cbiAgY2xlYXIoaWQ6IG51bWJlcikge1xuICAgIGlmIChpZCkge1xuICAgICAgdGhpcy50b2FzdHMuZm9yRWFjaCgodmFsdWU6IGFueSwga2V5OiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlLmlkID09PSBpZCkge1xuICAgICAgICAgIGlmICh2YWx1ZS5vblJlbW92ZSAmJiBpc0Z1bmN0aW9uKHZhbHVlLm9uUmVtb3ZlKSkge1xuICAgICAgICAgICAgdmFsdWUub25SZW1vdmUuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMudG9hc3RzLnNwbGljZShrZXksIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgcHJvdmlkZSBpZCBvZiBUb2FzdCB0byBjbG9zZScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgdG9hc3RzXG4gICAqL1xuICBjbGVhckFsbCgpIHtcbiAgICB0aGlzLnRvYXN0cy5mb3JFYWNoKCh2YWx1ZTogYW55LCBrZXk6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHZhbHVlLm9uUmVtb3ZlICYmIGlzRnVuY3Rpb24odmFsdWUub25SZW1vdmUpKSB7XG4gICAgICAgIHZhbHVlLm9uUmVtb3ZlLmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudG9hc3RzID0gW107XG4gIH1cblxuICAvKipcbiAgICogQ3VzdG9tIHNldFRpbWVvdXQgZnVuY3Rpb24gZm9yIHNwZWNpZmljIHNldFRpbWVvdXRzIG9uIGluZGl2aWR1YWwgdG9hc3RzLlxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0VGltZW91dCh0b2FzdDogVG9hc3REYXRhKSB7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jbGVhcih0b2FzdC5pZCk7XG4gICAgfSwgdG9hc3QudGltZW91dCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy90b2FzdHkuY29tcG9uZW50LnRzIiwiXG4vLyBDb3B5cmlnaHQgKEMpIDIwMTYtMjAxNyBTZXJnZXkgQWtvcGtva2h5YW50c1xuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi10b2FzdHlcblxuLyoqXG4gKiBDaGVjayBhbmQgcmV0dXJuIHRydWUgaWYgYW4gb2JqZWN0IGlzIHR5cGUgb2Ygc3RyaW5nXG4gKiBAcGFyYW0gb2JqIEFuYWx5c2UgaGFzIHRvIG9iamVjdCB0aGUgc3RyaW5nIHR5cGVcbiAqIEByZXR1cm4gcmVzdWx0IG9mIGFuYWx5c2lzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhvYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiO1xufVxuXG4vKipcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3QgaXMgdHlwZSBvZiBudW1iZXJcbiAqIEBwYXJhbSBvYmogQW5hbHlzZSBoYXMgdG8gb2JqZWN0IHRoZSBib29sZWFuIHR5cGVcbiAqIEByZXR1cm4gcmVzdWx0IG9mIGFuYWx5c2lzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcihvYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcIm51bWJlclwiO1xufVxuXG4vKipcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3QgaXMgdHlwZSBvZiBGdW5jdGlvblxuICogQHBhcmFtIG9iaiBBbmFseXNlIGhhcyB0byBvYmplY3QgdGhlIGZ1bmN0aW9uIHR5cGVcbiAqIEByZXR1cm4gcmVzdWx0IG9mIGFuYWx5c2lzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIjtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy90b2FzdHkudXRpbHMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2LTIwMTcgU2VyZ2V5IEFrb3Brb2toeWFudHNcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Frc2VyZy9uZzItdG9hc3R5XG5cbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmV4cG9ydCAqIGZyb20gJy4vc3JjL3RvYXN0eS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL3RvYXN0eS5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvdG9hc3QuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL3NoYXJlZCc7XG5cbmltcG9ydCB7IFRvYXN0eUNvbXBvbmVudCB9IGZyb20gJy4vc3JjL3RvYXN0eS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9hc3RDb21wb25lbnQgfSBmcm9tICcuL3NyYy90b2FzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2FmZUh0bWxQaXBlIH0gZnJvbSAnLi9zcmMvc2hhcmVkJztcbmltcG9ydCB7IFRvYXN0eVNlcnZpY2UsIFRvYXN0eUNvbmZpZywgdG9hc3R5U2VydmljZUZhY3RvcnkgfSBmcm9tICcuL3NyYy90b2FzdHkuc2VydmljZSc7XG5cbmV4cG9ydCBsZXQgcHJvdmlkZXJzID0gW1xuICAgIFRvYXN0eUNvbmZpZyxcbiAgICB7IHByb3ZpZGU6IFRvYXN0eVNlcnZpY2UsIHVzZUZhY3Rvcnk6IHRvYXN0eVNlcnZpY2VGYWN0b3J5LCBkZXBzOiBbVG9hc3R5Q29uZmlnXSB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1RvYXN0Q29tcG9uZW50LCBUb2FzdHlDb21wb25lbnQsIFNhZmVIdG1sUGlwZV0sXG4gICAgZXhwb3J0czogWyBUb2FzdENvbXBvbmVudCwgVG9hc3R5Q29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IHByb3ZpZGVyc1xufSlcbmV4cG9ydCBjbGFzcyBUb2FzdHlNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IFRvYXN0eU1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogcHJvdmlkZXJzXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL2luZGV4LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzhfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9TdWJqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==