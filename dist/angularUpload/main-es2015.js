(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n\r\n\r\n<div class=\"jumbotron mt-3\">\r\n\r\n  <h4 class=\"text-center\"> Acceso riservato all'utente amministratore! <i class=\"fas fa-user-lock\"></i> </h4>\r\n  <br>\r\n  <div class=\"container p-4\">\r\n\r\n    <form>\r\n      <div class=\"row center\">\r\n        <div class=\"col-9 \">\r\n          <input type=\"password\" class=\"form-control \" placeholder=\"{{hint}}\" name=\"text\" id=\"myInput\"\r\n            [(ngModel)]=\"password\">\r\n        </div>\r\n        <div class=\"col-2 pl-0\">\r\n          <button type=\"submit\" [disabled]=\"password == null \" class=\"btn btn-secondary\"\r\n            (click)=\"authenticationButton()\">Submit\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n\r\n  <br> <br>\r\n\r\n\r\n  <div class=\"container\" *ngIf=\"hideTable\">\r\n    <table class=\"table table-sm  table-responsive table-hover table-striped\">\r\n\r\n      <thead class=\"table-dark text-center\">\r\n        <tr>\r\n          <th>P.IVA</th>\r\n          <th>File</th>\r\n          <th>TotDoc</th>\r\n          <th>Data upload</th>\r\n        </tr>\r\n      </thead>\r\n\r\n      <tbody class=\"text-center\" *ngFor=\"let item_list of response.message; let i = index\">\r\n        <tr class=\"table table-info\">\r\n          <th class=\"text-center\"> {{item_list.PIVA}} </th>\r\n          <th></th>\r\n          <th class=\"text-center\">{{item_list.visitTot}}</th>\r\n          <th></th>\r\n        </tr>\r\n        <tr *ngFor=\"let item of item_list.DOCS; let j = index\">\r\n          <td>{{item_list.PIVA}}</td>\r\n          <td>{{item.name}}</td>\r\n          <td></td>\r\n          <td>{{item.dataInsert  | date :'full'  }}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--    \r\n\r\n-->\r\n<div class=\"container mt-2 p-3\" id=\"header\">\r\n\r\n  <div class=\"container p-3 pb-1 my-1 rounded  text-white border-4 \" id=\"header\">\r\n    <div class=\"row\">\r\n\r\n  \r\n\r\n      <div class=\"col-lg-2 col-sm-0 d-none d-md-block pl-0\">\r\n        <img  src=\"{{LOGO}}\" class=\"rounded\" alt=\"sanmarco\" width= \"130px\" height= \"130px\">\r\n      </div>\r\n\r\n      <div class=\"col-lg-8 pl-4 col-sm-0 d-none d-md-block pt-4\">\r\n        <h2>Soluzione ideata da Sanmarco Informatica</h2>\r\n        <p>Lorem, ipsum dolor sit amet consectetur adipisicing Nostrum, accusamus?</p>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-lg-2 col-sm-12\">\r\n        <div class=\"row pb-1 border-top border-left border-right\">\r\n          <button class=\"btn btn-block btn-light custom-btn\" [routerLink]=\"['/home']\">  <i class=\"fas fa-home\"></i>   Home</button>\r\n        </div>\r\n        <div class=\"row pb-1 border-left border-right \">\r\n          <button class=\"btn btn-block btn-light custom-btn\" [routerLink]=\"['/admin']\"><i class=\"fas fa-unlock-alt\"></i> Admin  </button>\r\n        </div>\r\n        <div class=\"row border-left border-right border-bottom\">\r\n          <button class=\"btn btn-block btn-light custom-btn\" [routerLink]=\"['/contact']\"><i class=\"far  fa-address-book\"></i> Contact</button>\r\n        </div>\r\n      </div>\r\n\r\n   \r\n\r\n    </div>\r\n  </div>\r\n\r\n  <router-outlet>\r\n\r\n  <ngx-spinner type=\"ball-spin-clockwise\" size=\"medium\">\r\n    <div class=\"text-white\">\r\n      <p class=\"loading\">Login in corso...</p>\r\n    </div>\r\n  </ngx-spinner>\r\n\r\n  </router-outlet>\r\n\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"card card-body bg-secondary text-white py-5\">\r\n    <h2>Contact</h2>\r\n    <p class=\"lead\"> </p>\r\n  </div>\r\n  \r\n  <div class=\"card card-body py-5\">\r\n    <h4 class=\"\">Per consulenza aprire un ticket alla pagina: <a href=\"https://tsnew.sanmarcoweb.com/it/ticket\" target=\"_blank\">Ticket Sanmarco</a></h4>\r\n  \r\n       \r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron mt-3\">\r\n\r\n    <h4 class=\"text-center\"> Modulo di correzione file</h4>\r\n    <br>\r\n    <h6 class=\"font-italic font-weight-normal \">\r\n      La seguente pagina permette di caricare dal PC un file di testo valido, visualizzare il contenuto del file\r\n      attraverso il text box, e una volta inviato con il bottone Send, verrà scaricato un file contenente le correzioni.\r\n      Il file avrà il nome e l'estensione del file precedentemente caricato più l'aggiunta della stringa \"_ELAB\".\r\n      E' possibile caricare il file da correggere attraverso il bottone Browse oppure trascinando direttamente il file\r\n      nell'area Browse.\r\n      Il file che verrà scaricato avrà le modifiche opportune dove necessario (aggiunta dei tab), invece rimarrà\r\n      invariata la prima riga di intestazione.\r\n    </h6>\r\n\r\n    <br>\r\n\r\n    <div class=\"container mt-3\">\r\n      <h5>Upload file</h5>\r\n      <form>\r\n        <div class=\"custom-file mb-3\">\r\n          <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" name=\"filename\"\r\n            (change)=\"onFileSelected($event)\" >\r\n          <label class=\"custom-file-label\" for=\"customFile\">{{hint}}</label>\r\n          \r\n        </div>\r\n        <div class=\"mt-3\">\r\n          <button type=\"button\" [disabled]=\"file === null\" type=\"submit\" class=\"btn btn-primary btn-lg\"\r\n            (click)=\"onUpload()\">Send</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n    <br>\r\n    <hr>\r\n\r\n    <button id=\"openModalButton\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#myModal\">Open Modal</button>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Contenuto del file</h5>\r\n        <br>\r\n        <pre id=\"p1\"  class=\"card-text\"></pre>\r\n      </div>\r\n    </div>\r\n\r\n    <hr>\r\n   \r\n\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");




let AdminComponent = class AdminComponent {
    constructor(http, spinner) {
        this.http = http;
        this.spinner = spinner;
        this.hideTable = false;
        this.hint = "Inserisci la password";
    }
    ngOnInit() {
    }
    authenticationButton() {
        this.spinner.show();
        // Reperisce i dati dal db
        this.http.get("https://infinite-savannah-92995.herokuapp.com/visiting").subscribe(data => {
            //   console.log(data)
            this.response = data;
        });
        let params = {
            pass: this.password
        };
        this.http.post("https://infinite-savannah-92995.herokuapp.com/visiting/login", params).subscribe(data => {
            this.spinner.hide();
            //    console.log(data)
            if (data == true) {
                this.hideTable = true;
                this.password = "";
            }
            else
                alert("Password non valido!!!");
        });
    }
};
AdminComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n#header{\r\n    background-color: #28509D\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuI2hlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODUwOURcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");



let AppComponent = class AppComponent {
    constructor(spinner) {
        this.spinner = spinner;
        this.title = 'angularUpload';
        this.LOGO = "assets/Sanmarco-informatica_logo.jpg";
        // Registro 
    }
    ngOnInit() {
        /** spinner starts on init
        this.spinner.show()
    
        setTimeout(() => {
        
          this.spinner.hide();
        }, 500);
    
        */
    }
    ngAfterViewInit() {
        //  this.spinner.hide()
    }
};
AppComponent.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");













// 2.
const routes = [
    // basic routes
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"]
        ],
        providers: [
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__["HashLocationStrategy"] },
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["APP_BASE_HREF"], useValue: '/' }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const url_heroku = "https://infinite-savannah-92995.herokuapp.com/email/send";
const url_pi = "http://93.49.6.246:3000/email/send";
let ContactComponent = class ContactComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
    }
    call() {
        //  console.log(this.name)
        let params = {
            name: this.name,
            email: this.email,
            emailtext: this.emailtext
        };
        this.http.post(url_heroku, params).subscribe(data => {
            if (data == true) {
                alert("Email inviato!");
                this.name = "";
                this.email = "";
                this.emailtext = "";
            }
            else {
                this.http.post(url_pi, params, {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json'),
                    responseType: 'json'
                }).subscribe(data => {
                    //    console.log(data)
                    if (data == true) {
                        alert("Email inviato!");
                        this.name = "";
                        this.email = "";
                        this.emailtext = "";
                    }
                    else {
                        alert("Email inviato!!!");
                        this.name = "";
                        this.email = "";
                        this.emailtext = "";
                    }
                });
            }
        });
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let HomeComponent = class HomeComponent {
    constructor(document, http) {
        this.http = http;
        this.title = 'angularUpload';
        this.hint = "Choose file";
        this.fileUploadedContent = "";
        this.file = null;
        this.valid = true;
        this.uploadUrlPath = 'src/assets/uploads/';
    }
    ngOnInit() {
    }
    onFileSelected(event) {
        this.hint = event.target.files[0].name;
        const ext = (this.hint).split('.').pop();
        if (((this.hint).split('.').pop())[0] !== "C") {
            this.hint = null;
            alert('L\'estensione ".' + ext + '" del file inserito non permesso! I file compatibili sono quelli che presentano estensione da "C00" a "CZZ".');
            return;
            // document.getElementById("openModalButton").click(); 
        }
        else {
            // The file content itself
            this.file = event.target.files[0];
            this.onText();
        }
    }
    onText() {
        let fileReader = new FileReader();
        fileReader.onload = (e) => {
            // Entire file
            var fileAsString = (fileReader.result).split('\n');
            var outputFile = "";
            // Controlla che inizi sempre per IE815
            if (fileAsString[1].substring(0, 5) !== "IE815") {
                this.file = null;
                //   console.log(fileAsString[1].substring(0, 4))
                document.getElementById("p1").innerHTML = "";
                alert("File con processabile. E' richiesto un file facente riferimento ad una bozza E-Ad.");
                return;
            }
            // Read line by line and construct file
            for (var line = 0; line < fileAsString.length; line++) {
                //Adding whatever you wish   
                outputFile = outputFile + fileAsString[line] + '\n';
            }
            document.getElementById("p1").innerHTML = outputFile;
        };
        fileReader.readAsText(this.file);
    }
    // Construct the final file 
    onUpload() {
        let fileReader = new FileReader();
        fileReader.onload = (e) => {
            // Entire file as string[]
            var fileAsArrayString = (fileReader.result).split('\n');
            var outputFile = "";
            var iii = -1;
            // Read line by line and construct file
            for (var line = 0; line < fileAsArrayString.length; line++) {
                var finalLine = "";
                var currentLine = fileAsArrayString[line];
                //###########################################################################################################
                let split = new Array();
                split = null;
                split = currentLine.split("\t");
                iii = iii + 1;
                // preparo il file di output
                // salto la prima riga
                switch (iii) {
                    case 0:
                        {
                            // idoc: non devo fare nulla
                            outputFile = outputFile + currentLine;
                            // save the piva
                            var aux = currentLine.split(/(\s+)/).filter(function (e) { return e.trim().length > 0; });
                            this.pIva = aux[3].trim();
                            this.getConfig(this.hint, this.pIva);
                        }
                        continue;
                    case 1:
                        {
                            // record A
                            // controllo se ho garanti    break;
                            var nGaranti = parseInt((split[80]).trim());
                            //  console.log("\n Iterazione[" + line + "] nGaranti vale :  " + nGaranti + "\n")
                            // se ho iterazioni garanti, per trovare l'iterazione successiva devo moltiplicare questo numero
                            // per
                            // i campi da saltare
                            //   var posDau = 81;
                            var posGaranti = 80;
                            // trovo iterazione successiva (Dau)
                            var posDau = this.findNextIteration(parseInt((split[posGaranti]).trim()), 10, posGaranti);
                            // trovo iterazione successiva (Trasporto)
                            var posTrasporto = this.findNextIteration(parseInt((split[posDau]).trim()), 3, posDau);
                            // trovo iterazione successiva (Certificati)
                            var posCert = this.findNextIteration(parseInt((split[posTrasporto]).trim()), 9, posTrasporto);
                            // controllo iterazioni Certificati
                            var nCert = parseInt((split[posCert]).trim());
                            // intanto mi salvo i dati fino a qui.
                            for (var j1 = 0; j1 <= posCert; j1++) {
                                //  console.log("######  Sono in FOR: " + iii + " e split[j1] vale PRIMA DEL METODO: \n" + currentLine+ "\n")
                                finalLine = finalLine + (split[j1] + "\t");
                                //    console.log("######  Sono in FOR: " + iii + " e split[j1] vale DOPO IL METODO: \n" + currentLine+ "\n")
                            }
                            var posRecC = posCert + 1;
                            // se ho certificati devo andare ad aggiornare il tracciato
                            if (nCert > 0) {
                                // trovo la fine dei certificati
                                posRecC = posRecC + (nCert * 6);
                                // per ogni record di certificato scrivo i primi campi as is
                                var countField = 0;
                                for (var j2 = posCert + 1; j2 < posRecC; j2++) {
                                    countField++;
                                    finalLine = finalLine + (split[j2] + "\t");
                                    if (countField == 6) {
                                        countField = 0;
                                        finalLine = finalLine + ("\t" + "\t");
                                    }
                                }
                            }
                            finalLine = finalLine + this.elabRecordC(posRecC, split);
                            outputFile = outputFile + finalLine;
                        }
                        break;
                    default:
                        {
                            // code block
                            if (currentLine.trim() !== "") {
                                finalLine = finalLine + (split[0] + "\t" + split[1] + "\t" + this.elabRecordC(2, split));
                                outputFile = outputFile + finalLine;
                            }
                        }
                        break;
                }
                //###########################################################################################################
            }
            // Sending final file...[can be fixed some more]
            Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(new Blob([outputFile], { type: 'text/csv;charset=utf-8' }), this.hint + "_ELAB");
        };
        fileReader.readAsText(this.file);
    }
    elabRecordC(posRecC_N, split_N) {
        var posImba = posRecC_N + 22;
        var finalC = "";
        // scrivo la prima parte fissa
        for (var i1 = posRecC_N; i1 <= posImba; i1++) {
            finalC = finalC + (split_N[i1] + "\t");
        }
        // leggo quanti imballaggi ho
        var nImba = parseInt(split_N[posImba].trim());
        var posVino = posImba + 1;
        // se ho imballaggi devo andare ad aggiornare il tracciato
        if (nImba > 0) {
            // trovo la fine dei certificati
            posVino = posVino + (nImba * 7);
            // per ogni record di imballaggi scrivo i primi campi as is
            var countField = 0;
            for (var j4 = posImba + 1; j4 < posVino; j4++) {
                countField++;
                finalC = finalC + (split_N[j4] + "\t");
                if (countField == 7) {
                    countField = 0;
                    finalC = finalC + ("\t");
                }
            }
        }
        // fatto ciò, posso scrivere fino alla fine
        for (var i5 = posVino; i5 < split_N.length; i5++) {
            finalC = finalC + (split_N[i5] + "\t");
        }
        finalC = finalC.substring(0, finalC.length - 1);
        return finalC;
    }
    findNextIteration(nIter, fieldIter, posIter) {
        if (nIter > 0)
            return posIter + 1 + (nIter * fieldIter);
        return posIter + 1;
    }
    getConfig(docName, p_iva) {
        let article = {
            piva: p_iva,
            docname: docName
        };
        /**
       *
         this.http.post("http://93.49.6.246:3000/visiting/insert", article).subscribe(data => {
         console.log(data)
        })
        this.http.post("https://whispering-ravine-10287.herokuapp.com/visiting/insert", article).subscribe(data => {
          console.log(data)
         })
        */
        this.http.post("https://infinite-savannah-92995.herokuapp.com/visiting/insert", article).subscribe(data => {
            console.log("visiting/insert done");
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]))
], HomeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tommal\Desktop\jexp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map