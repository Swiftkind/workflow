(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container-fluid main-container p-0\" [ngClass]=\"{'container-extended': nav.config.expand}\">\n  <ui-view name=\"sidemenu\"></ui-view>\n\n  <div class=\"content-wrapper\">\n\n    <ui-view name=\"navigation\"></ui-view>\n    <ui-view name=\"content\"></ui-view>\n    \n  </div>\n  \n  <!-- SIDE MODALS -->\n\n  <ui-view name=\"sideopen\"></ui-view>\n\n  <aside class=\"search-filter\">\n    <div class=\"d-flex justify-content-between mb-3\">\n      <label>Filters</label>\n      <small class=\"text-muted\">\n        <i class=\"far fa-circle-notch\"></i>\n        Applying Filters\n      </small>\n    </div>\n    <div class=\"mb-5\">\n      <label class=\"section-title d-block\">Inclusive Dates</label>\n      <div id=\"reportrange\" class=\"date-range-picker form-control\">\n          <span></span>\n      </div>\n      \n    </div>\n    <div class=\"form-check pl-0 mb-5\">\n      <input type=\"checkbox\" name=\"\" id=\"project\">\n      <label class=\"text-medium\">Projects</label>\n      \n      <ul class=\"list-unstyled\">\n        <li>\n          <div class=\"form-check\">\n            <input type=\"checkbox\" name=\"\" id=\"project\">\n            <label>Current Projects</label>\n          </div>\n        </li>\n        <li>\n          <div class=\"form-check\">\n            <input type=\"checkbox\" name=\"\" id=\"project\">\n            <label>Archived Projects</label>\n          </div>\n        </li>\n        <li>\n          <div class=\"pl-3\">\n            <label class=\"section-title d-block\">Selected Projects</label>\n            <select class=\"selectpicker form-control\"  multiple id=\"selectProject\">\n              <option>All Projects</option>\n              <option>Mustard</option>\n              <option>Ketchup</option>\n              <option>Relish</option>\n            </select>\n\n          </div>\n        </li>\n      </ul>\n    </div>\n    \n    <div class=\"form-check pl-0 pb-5\">\n      <input type=\"checkbox\" name=\"\" id=\"project\">\n      <label class=\"text-medium\">Task Status</label>\n      <ul class=\"list-unstyled\">\n        <li>\n          <div class=\"form-check\">\n            <input type=\"checkbox\" name=\"\" id=\"project\">\n            <label>Done</label>\n          </div>\n        </li>\n        <li>\n          <div class=\"form-check\">\n            <input type=\"checkbox\" name=\"\" id=\"project\">\n            <label>To Do</label>\n          </div>\n        </li>\n        <li>\n          <div class=\"form-check\">\n            <input type=\"checkbox\" name=\"\" id=\"project\">\n            <label>Issues</label>\n          </div>\n          <ul class=\"list-unstyled\">\n            <li>\n              <div class=\"form-check\">\n                <input type=\"checkbox\" name=\"\" id=\"project\">\n                <label>Pending</label>\n              </div>\n              <div class=\"form-check\">\n                <input type=\"checkbox\" name=\"\" id=\"project\">\n                <label>Resolved</label>\n              </div>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n    <div class=\"d-flex justify-content-center mt-5\">\n      <button class=\"btn-light btn mr-4\">Clear</button>\n      <button class=\"btn-primary btn filter-toggle\">Close</button>\n    </div>\n  </aside>\n  \n  <!-- SIDE MODALS -->\n</main>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _commons_services_utils_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commons/services/utils/nav.service */ "./src/app/commons/services/utils/nav.service.ts");
/* harmony import */ var _commons_services_auth_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commons/services/auth/server.service */ "./src/app/commons/services/auth/server.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(nav, server) {
        this.nav = nav;
        this.server = server;
        // load server date time
        server.syncServerDT();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_commons_services_utils_nav_service__WEBPACK_IMPORTED_MODULE_1__["NavService"],
            _commons_services_auth_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/partials/partials.module */ "./src/app/components/partials/partials.module.ts");
/* harmony import */ var _components_public_public_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/public/public.module */ "./src/app/components/public/public.module.ts");
/* harmony import */ var _components_users_users_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/users/users.module */ "./src/app/components/users/users.module.ts");
/* harmony import */ var _components_projects_projects_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/projects/projects.module */ "./src/app/components/projects/projects.module.ts");
/* harmony import */ var _components_payroll_payroll_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/payroll/payroll.module */ "./src/app/components/payroll/payroll.module.ts");
/* harmony import */ var _commons_services_interceptors_token_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./commons/services/interceptors/token.service */ "./src/app/commons/services/interceptors/token.service.ts");
/* harmony import */ var _commons_utils_app_states__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./commons/utils/app.states */ "./src/app/commons/utils/app.states.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__["UIRouterModule"].forRoot(_commons_utils_app_states__WEBPACK_IMPORTED_MODULE_11__["APP_STATES"]),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _components_partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _components_public_public_module__WEBPACK_IMPORTED_MODULE_6__["PublicModule"],
                _components_users_users_module__WEBPACK_IMPORTED_MODULE_7__["UsersModule"],
                _components_projects_projects_module__WEBPACK_IMPORTED_MODULE_8__["ProjectsModule"],
                _components_payroll_payroll_module__WEBPACK_IMPORTED_MODULE_9__["PayrollModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _commons_services_interceptors_token_service__WEBPACK_IMPORTED_MODULE_10__["TokenService"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/commons/constants/api.constants.ts":
/*!****************************************************!*\
  !*** ./src/app/commons/constants/api.constants.ts ***!
  \****************************************************/
/*! exports provided: USERS, AUTH_USER, AUTH_LOGIN, SERVER_STATUS, SLACKAUTH, SLACKAUTH_CONFIG, SLACKAUTH_USER_TOKEN, PAYROLL, PAYROLL_REPORT, FEED, FEED_NOTIFICATIONS, FEED_NOTIFICATIONS_EVENTS, FEED_NOTIFICATIONS_PENDING, HISTORY, HISTORY_STANDUP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_USER", function() { return AUTH_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_LOGIN", function() { return AUTH_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_STATUS", function() { return SERVER_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLACKAUTH", function() { return SLACKAUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLACKAUTH_CONFIG", function() { return SLACKAUTH_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLACKAUTH_USER_TOKEN", function() { return SLACKAUTH_USER_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYROLL", function() { return PAYROLL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYROLL_REPORT", function() { return PAYROLL_REPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEED", function() { return FEED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEED_NOTIFICATIONS", function() { return FEED_NOTIFICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEED_NOTIFICATIONS_EVENTS", function() { return FEED_NOTIFICATIONS_EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEED_NOTIFICATIONS_PENDING", function() { return FEED_NOTIFICATIONS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HISTORY", function() { return HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HISTORY_STANDUP", function() { return HISTORY_STANDUP; });
/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/http.utils */ "./src/app/commons/utils/http.utils.ts");

/* USERS ENDPOINTS
 */
var USERS = '/api/users/';
/* AUTH ENDPOINTS
 */
var AUTH_USER = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(USERS, 'auth');
var AUTH_LOGIN = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(AUTH_USER, 'login');
var SERVER_STATUS = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(AUTH_USER, 'server');
/* SLACK AUTH ENDPOINTS
 */
var SLACKAUTH = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(AUTH_USER, 'slack');
var SLACKAUTH_CONFIG = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(SLACKAUTH, 'config');
var SLACKAUTH_USER_TOKEN = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(SLACKAUTH, 'token');
/* PAYROLL ENDPOINTS
 */
var PAYROLL = '/api/payroll/';
// This isn't by definition a "constant" url since the id changes, but this will let us
//   put all the api/endpoints in one place.
var PAYROLL_REPORT = function (id) { return Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(PAYROLL, id, 'report'); };
/* FEED ENDPOINTS
 */
var FEED = '/api/feed/';
var FEED_NOTIFICATIONS = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(FEED, 'notifications');
var FEED_NOTIFICATIONS_EVENTS = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(FEED_NOTIFICATIONS, 'events');
var FEED_NOTIFICATIONS_PENDING = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(FEED_NOTIFICATIONS, 'pending');
/* HISTORY ENDPOINTS
 */
var HISTORY = '/api/history/';
var HISTORY_STANDUP = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(HISTORY, 'standup');


/***/ }),

/***/ "./src/app/commons/constants/conf.constants.ts":
/*!*****************************************************!*\
  !*** ./src/app/commons/constants/conf.constants.ts ***!
  \*****************************************************/
/*! exports provided: AUTH_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_KEY", function() { return AUTH_KEY; });
// TODO: make it dynamic. generate every login. (it looks cool)
// 18 random characters (alphanumeric + special characters + token)
var AUTH_KEY = 'NCqrSTxQCGMK2wDvRL';


/***/ }),

/***/ "./src/app/commons/directives/directives.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/commons/directives/directives.module.ts ***!
  \*********************************************************/
/*! exports provided: DirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesModule", function() { return DirectivesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _prevdefault_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prevdefault.directive */ "./src/app/commons/directives/prevdefault.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [_prevdefault_directive__WEBPACK_IMPORTED_MODULE_2__["PrevdefaultDirective"]],
            declarations: [_prevdefault_directive__WEBPACK_IMPORTED_MODULE_2__["PrevdefaultDirective"]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());



/***/ }),

/***/ "./src/app/commons/directives/prevdefault.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/commons/directives/prevdefault.directive.ts ***!
  \*************************************************************/
/*! exports provided: PrevdefaultDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrevdefaultDirective", function() { return PrevdefaultDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrevdefaultDirective = /** @class */ (function () {
    function PrevdefaultDirective(el) {
        this.el = el;
    }
    PrevdefaultDirective.prototype.onClick = function () {
        // prevent default to execute
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PrevdefaultDirective.prototype, "onClick", null);
    PrevdefaultDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[prevdefault]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], PrevdefaultDirective);
    return PrevdefaultDirective;
}());



/***/ }),

/***/ "./src/app/commons/forms/login.forms.ts":
/*!**********************************************!*\
  !*** ./src/app/commons/forms/login.forms.ts ***!
  \**********************************************/
/*! exports provided: LoginForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginForm", function() { return LoginForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var LoginForm = /** @class */ (function () {
    function LoginForm(data) {
        this.err = null;
        /* Initialize the form builder
        */
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]().group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
    }
    /* Check if form field is valid
     */
    LoginForm.prototype.valid = function (f) {
        return !(!this.form.get(f).valid && this.form.get(f).touched);
    };
    /* Check if the form field has an error
     */
    LoginForm.prototype.hasError = function (f, e) {
        return this.form.get(f).hasError(e) && this.form.get(f).touched;
    };
    return LoginForm;
}());



/***/ }),

/***/ "./src/app/commons/forms/user.forms.ts":
/*!*********************************************!*\
  !*** ./src/app/commons/forms/user.forms.ts ***!
  \*********************************************/
/*! exports provided: UserForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserForm", function() { return UserForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var UserForm = /** @class */ (function () {
    function UserForm(data) {
        this.submitted = false;
        /* Initialize the form builder
         */
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]().group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.first_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.last_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            birthdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.birthdate, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            position: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.position, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            date_started: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.date_started, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
    }
    /* Check if form field is valid
     */
    UserForm.prototype.valid = function (f) {
        return !(!this.form.get(f).valid && (this.form.get(f).touched || this.submitted));
    };
    /* Check if the form field has an error
     */
    UserForm.prototype.hasError = function (f, e) {
        return this.form.get(f).hasError(e) && (this.form.get(f).touched || this.submitted);
    };
    /* DEFAULT VALUE
     * set the value of the form fields if there is a default value.
     */
    UserForm.prototype.defaultValue = function (d) {
        // set a timeout just incase that the value is not yet ready.
        this.form.patchValue(d);
    };
    return UserForm;
}());



/***/ }),

/***/ "./src/app/commons/models/history.models.ts":
/*!**************************************************!*\
  !*** ./src/app/commons/models/history.models.ts ***!
  \**************************************************/
/*! exports provided: Standup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Standup", function() { return Standup; });
/* harmony import */ var _user_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.models */ "./src/app/commons/models/user.models.ts");

/* Model class for standup
 */
var Standup = /** @class */ (function () {
    function Standup(data) {
        if (data === void 0) { data = {}; }
        this.id = null;
        this.date_created = null;
        this.total_hours = null;
        this.user = new _user_models__WEBPACK_IMPORTED_MODULE_0__["User"];
        this.project = {};
        this.done = [];
        this.todo = [];
        this.blockers = [];
        Object.assign(this, data);
    }
    return Standup;
}());



/***/ }),

/***/ "./src/app/commons/models/login.models.ts":
/*!************************************************!*\
  !*** ./src/app/commons/models/login.models.ts ***!
  \************************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* Model class for signing in.
 */
var Login = /** @class */ (function () {
    function Login(data) {
        if (data === void 0) { data = {}; }
        this.email = null;
        this.password = null;
        Object.assign(this, data);
    }
    return Login;
}());



/***/ }),

/***/ "./src/app/commons/models/payroll.models.ts":
/*!**************************************************!*\
  !*** ./src/app/commons/models/payroll.models.ts ***!
  \**************************************************/
/*! exports provided: Plan, Deduction, Payroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plan", function() { return Plan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deduction", function() { return Deduction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payroll", function() { return Payroll; });
/* harmony import */ var _user_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.models */ "./src/app/commons/models/user.models.ts");

/* Model class for plan
 */
var Plan = /** @class */ (function () {
    function Plan(data) {
        if (data === void 0) { data = {}; }
        this.id = null;
        this.name = null;
        this.amount = null;
        this.term = null;
        this.monthly_ammort = null;
        this.payment_count = null;
        this.date_from = null;
        this.date_to = null;
        this.date_created = null;
        this.date_updated = null;
        Object.assign(this, data);
    }
    return Plan;
}());

/* Model class for deduction
 */
var Deduction = /** @class */ (function () {
    function Deduction(data) {
        if (data === void 0) { data = {}; }
        this.name = null;
        this.description = null;
        this.tier = null;
        this.amount = null;
        this.er = null;
        this.ee = null;
        this.date_created = null;
        this.date_updated = null;
        Object.assign(this, data);
    }
    return Deduction;
}());

/* Model class for payroll
 */
var Payroll = /** @class */ (function () {
    function Payroll(data) {
        if (data === void 0) { data = {}; }
        this.id = null;
        this.user = new _user_models__WEBPACK_IMPORTED_MODULE_0__["User"];
        this.payroll_code = null;
        this.date_from = null;
        this.date_to = null;
        this.total_deduction = null;
        this.gross_pay = null;
        this.net_pay = null;
        this.date_created = null;
        this.date_updated = null;
        this.is_sent = false;
        Object.assign(this, data);
    }
    return Payroll;
}());



/***/ }),

/***/ "./src/app/commons/models/user.models.ts":
/*!***********************************************!*\
  !*** ./src/app/commons/models/user.models.ts ***!
  \***********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* Model class for user
 */
var User = /** @class */ (function () {
    function User(data) {
        if (data === void 0) { data = {}; }
        this.id = null;
        this.email = null;
        this.first_name = null;
        this.last_name = null;
        this.full_name = null;
        this.birthdate = null;
        this.image = null;
        this.position = null;
        this.position_type = null;
        this.date_started = null;
        this.deductions = new Array();
        this.plans = new Array();
        Object.assign(this, data);
    }
    return User;
}());



/***/ }),

/***/ "./src/app/commons/pipes/pipes.module.ts":
/*!***********************************************!*\
  !*** ./src/app/commons/pipes/pipes.module.ts ***!
  \***********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sanitizeurl_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sanitizeurl.pipe */ "./src/app/commons/pipes/sanitizeurl.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [
                _sanitizeurl_pipe__WEBPACK_IMPORTED_MODULE_2__["SanitizeurlPipe"]
            ],
            declarations: [_sanitizeurl_pipe__WEBPACK_IMPORTED_MODULE_2__["SanitizeurlPipe"]]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/commons/pipes/sanitizeurl.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/commons/pipes/sanitizeurl.pipe.ts ***!
  \***************************************************/
/*! exports provided: SanitizeurlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeurlPipe", function() { return SanitizeurlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SanitizeurlPipe = /** @class */ (function () {
    function SanitizeurlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SanitizeurlPipe.prototype.transform = function (url, args) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    SanitizeurlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sanitizeurl'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SanitizeurlPipe);
    return SanitizeurlPipe;
}());



/***/ }),

/***/ "./src/app/commons/services/auth/auth.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/commons/services/auth/auth.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_api_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/api.constants */ "./src/app/commons/constants/api.constants.ts");
/* harmony import */ var _constants_conf_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/conf.constants */ "./src/app/commons/constants/conf.constants.ts");
/* harmony import */ var _models_user_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/user.models */ "./src/app/commons/models/user.models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.user = new _models_user_models__WEBPACK_IMPORTED_MODULE_4__["User"];
    }
    /* USER LOGIN
     * @desc : sends a request to the backend server to
     *         to check for the credentials and returns
     *         a generated token.
     */
    AuthService.prototype.login = function (creds) {
        var _this = this;
        return this.http.post(_constants_api_constants__WEBPACK_IMPORTED_MODULE_2__["AUTH_LOGIN"], creds)
            .toPromise()
            .then(function (resp) { _this.setToken(resp); return resp; })
            .catch(function (err) { return Promise.reject(err); });
    };
    /* MANAGE USER TOKEN
     * @desc : manage user token generated from the backend
     *         to be used on authenticated requests
     */
    AuthService.prototype.setToken = function (token) {
        // save the generated token to the local storage
        window.localStorage[_constants_conf_constants__WEBPACK_IMPORTED_MODULE_3__["AUTH_KEY"]] = JSON.stringify(token);
        return;
    };
    AuthService.prototype.getToken = function () {
        // fetch the generated token from the storage
        var d = window.localStorage[_constants_conf_constants__WEBPACK_IMPORTED_MODULE_3__["AUTH_KEY"]];
        if (!d)
            return null;
        return JSON.parse(d);
    };
    AuthService.prototype.rmToken = function () {
        // clear the token from the local storage.
        window.localStorage.removeItem(_constants_conf_constants__WEBPACK_IMPORTED_MODULE_3__["AUTH_KEY"]);
    };
    /* MANAGE USER INSTANCE
     * @desc : manage user instance.
     */
    AuthService.prototype.authenticated = function () {
        // check if the user is authenticated
        return this.getToken() ? true : false;
    };
    AuthService.prototype.setuser = function () {
        var _this = this;
        // save the user's instance
        return this.http.get(_constants_api_constants__WEBPACK_IMPORTED_MODULE_2__["AUTH_USER"])
            .toPromise()
            .then(function (resp) { _this.user = new _models_user_models__WEBPACK_IMPORTED_MODULE_4__["User"](resp); });
    };
    AuthService.prototype.getuser = function () {
        // fetch the user instance
        if (this.user.id == null) {
            // sends a request from the backend to
            // get the data.
            this.setuser();
        }
        return this.user;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/commons/services/auth/server.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/commons/services/auth/server.service.ts ***!
  \*********************************************************/
/*! exports provided: ServerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerService", function() { return ServerService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_api_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/api.constants */ "./src/app/commons/constants/api.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};





var ServerService = /** @class */ (function () {
    function ServerService(http) {
        this.http = http;
        this.now = new Date();
    }
    /* SERVER STATUS
     * @desc : retrieve the server date time and status
     */
    ServerService.prototype.getStatus = function () {
        var _this = this;
        return this.http.get(_constants_api_constants__WEBPACK_IMPORTED_MODULE_4__["SERVER_STATUS"])
            .toPromise()
            .then(function (resp) {
            // TODO: sync the server datetime and the current dt.
            var serverdt = new Date(resp['datetime']);
            // sync the datetime of the server and
            // the frontend service.
            _this.currentdt = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (tick) { return new Date(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
        });
    };
    ServerService.prototype._getCurrenDT = function () {
        return this.currentdt;
    };
    ServerService.prototype.syncServerDT = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // send a request to the backend server to get
                    // the current date and time.
                    // Note: `await` makes it synchronous.
                    return [4 /*yield*/, this.getStatus()];
                    case 1:
                        // send a request to the backend server to get
                        // the current date and time.
                        // Note: `await` makes it synchronous.
                        _a.sent();
                        // sync to the current datetime.
                        this._getCurrenDT().subscribe(function (resp) {
                            _this.now = new Date(resp);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ServerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ServerService);
    return ServerService;
}());



/***/ }),

/***/ "./src/app/commons/services/auth/slack.service.ts":
/*!********************************************************!*\
  !*** ./src/app/commons/services/auth/slack.service.ts ***!
  \********************************************************/
/*! exports provided: SlackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlackService", function() { return SlackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/http.utils */ "./src/app/commons/utils/http.utils.ts");
/* harmony import */ var _constants_api_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/api.constants */ "./src/app/commons/constants/api.constants.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/commons/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SlackService = /** @class */ (function () {
    function SlackService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    /* SLACK CONFIG
     * @desc : returns the slack auth configuration
     *         set from the backend.
     */
    SlackService.prototype.getConfig = function () {
        var _this = this;
        return this.http.get(_constants_api_constants__WEBPACK_IMPORTED_MODULE_3__["SLACKAUTH_CONFIG"])
            .toPromise()
            .then(function (resp) { _this.config = resp; return resp; });
    };
    /* USER TOKEN
     * @desc : Get user token using the slack token
     */
    SlackService.prototype.getUserToken = function (slackToken) {
        var _this = this;
        return this.http.get(Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_2__["urlsafe"])(_constants_api_constants__WEBPACK_IMPORTED_MODULE_3__["SLACKAUTH_USER_TOKEN"], slackToken))
            .toPromise()
            .then(function (resp) { _this.auth.setToken(resp); return resp; })
            .catch(function (err) { return Promise.reject(err); });
    };
    SlackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], SlackService);
    return SlackService;
}());



/***/ }),

/***/ "./src/app/commons/services/auth/user.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/commons/services/auth/user.service.ts ***!
  \*******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_api_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/api.constants */ "./src/app/commons/constants/api.constants.ts");
/* harmony import */ var _models_user_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/user.models */ "./src/app/commons/models/user.models.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/commons/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(auth, http) {
        this.auth = auth;
        this.http = http;
    }
    /* USER UPDATE
     * @desc : sends a request to the backend server to update
     *         the user's information.
     */
    UserService.prototype.update = function (data) {
        var _this = this;
        return this.http.post(_constants_api_constants__WEBPACK_IMPORTED_MODULE_2__["AUTH_USER"], data)
            .toPromise()
            .then(function (resp) { _this.auth.user = new _models_user_models__WEBPACK_IMPORTED_MODULE_3__["User"](resp); return resp; })
            .catch(function (err) { return Promise.reject(err); });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/commons/services/history/standup.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/commons/services/history/standup.service.ts ***!
  \*************************************************************/
/*! exports provided: StandupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandupService", function() { return StandupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/http.utils */ "./src/app/commons/utils/http.utils.ts");
/* harmony import */ var _constants_api_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/api.constants */ "./src/app/commons/constants/api.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StandupService = /** @class */ (function () {
    function StandupService(http) {
        this.http = http;
    }
    StandupService.prototype.getReport = function (id) {
        return this.http.get(Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_2__["urlsafe"])(_constants_api_constants__WEBPACK_IMPORTED_MODULE_3__["HISTORY_STANDUP"], id));
    };
    StandupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StandupService);
    return StandupService;
}());



/***/ }),

/***/ "./src/app/commons/services/interceptors/token.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/commons/services/interceptors/token.service.ts ***!
  \****************************************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TokenService = /** @class */ (function () {
    function TokenService(auth, state) {
        this.auth = auth;
        this.state = state;
    }
    TokenService.prototype.intercept = function (r, n) {
        var _this = this;
        var req = r.clone({
            headers: r.headers.set('Authorization', this.token())
        });
        return n.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (resp) {
            if (resp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"])
                return resp;
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"])
                _this.authenticate();
        }));
    };
    // Get user token from the local storage
    // and format if to be placed into the request header.
    TokenService.prototype.token = function () {
        var t = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](this.auth.getToken(), ['token'], null);
        return "Token " + t;
    };
    // Remove expired token. redirect the user to the login
    // page and re-authenticate.
    TokenService.prototype.authenticate = function () {
        this.auth.rmToken();
        this.state.go('login');
    };
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__["StateService"]])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/commons/services/payroll/payroll.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/commons/services/payroll/payroll.service.ts ***!
  \*************************************************************/
/*! exports provided: PayrollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollService", function() { return PayrollService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/http.utils */ "./src/app/commons/utils/http.utils.ts");
/* harmony import */ var _constants_api_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/api.constants */ "./src/app/commons/constants/api.constants.ts");
/* harmony import */ var _commons_models_payroll_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../commons/models/payroll.models */ "./src/app/commons/models/payroll.models.ts");
/* harmony import */ var _utils_file_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/file.utils */ "./src/app/commons/utils/file.utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PayrollService = /** @class */ (function () {
    function PayrollService(http, payrollservice) {
        this.http = http;
        this.payrollservice = payrollservice;
        this.plist = [];
        this.payroll = new _commons_models_payroll_models__WEBPACK_IMPORTED_MODULE_4__["Payroll"];
    }
    /* Payroll detail
     */
    PayrollService.prototype.detail = function (id) {
        return this.http.get(Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_2__["urlsafe"])(_constants_api_constants__WEBPACK_IMPORTED_MODULE_3__["PAYROLL"], id));
    };
    /* Payroll list
     */
    PayrollService.prototype.list = function (params) {
        if (params === void 0) { params = {}; }
        return this.http.get(_constants_api_constants__WEBPACK_IMPORTED_MODULE_3__["PAYROLL"] + Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_2__["queryparams"])(params));
    };
    PayrollService.prototype.getList = function () {
        var _this = this;
        this.list()
            .subscribe(function (resp) { _this.plist = resp; });
    };
    PayrollService.prototype.downloadPDF = function (id, fileName) {
        /* Automatically download the pdf
        */
        if (fileName === void 0) { fileName = "default"; }
        // instead of using a simple redirection to download the request.
        //  Use a get request so that the inteceptors can catch it and attach token. 
        this.http.get(Object(_constants_api_constants__WEBPACK_IMPORTED_MODULE_3__["PAYROLL_REPORT"])(id), { responseType: 'blob' })
            .subscribe(function (data) { Object(_utils_file_utils__WEBPACK_IMPORTED_MODULE_5__["downloadFileHanlder"])(data, fileName); });
    };
    PayrollService.prototype.sendPayrollReport = function (id) {
        return this.http.post(Object(_constants_api_constants__WEBPACK_IMPORTED_MODULE_3__["PAYROLL_REPORT"])(id), null)
            .toPromise()
            .then(function (resp) { return resp; })
            .catch(function (err) { return Promise.reject(err); });
    };
    PayrollService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            PayrollService])
    ], PayrollService);
    return PayrollService;
}());



/***/ }),

/***/ "./src/app/commons/services/utils/feed.service.ts":
/*!********************************************************!*\
  !*** ./src/app/commons/services/utils/feed.service.ts ***!
  \********************************************************/
/*! exports provided: FeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedService", function() { return FeedService; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/http.utils */ "./src/app/commons/utils/http.utils.ts");
/* harmony import */ var _constants_api_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/api.constants */ "./src/app/commons/constants/api.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeedService = /** @class */ (function () {
    function FeedService(http) {
        this.http = http;
        this.q = [];
        // toggle checker that is used to check if there is
        // a pending request to the backend. This prevents
        // the system from sending spam requests to the backend.
        this.fetching = false;
        // toggle checker that is used to check if the feed list
        // should be reloaded or not. there are pages/components
        // which the list shouldn't be reloaded. (dashboard-report,
        // feed-search, feed-filter).
        this.noreload = false;
        // checker that will know if all the data is loaded
        // in the frontend.
        this.all_loaded = false;
        // this query params object is used for filtering and searching feature.
        // ADD your filter parameters in here. PAGINATION and QUERIES are
        // always binded to each other. DO NOT SEPARATE this functionalities
        this.qparams = {
            page: 1
        };
    }
    FeedService.prototype.getFeed = function () {
        var _this = this;
        // toggle fetching to true to prevent multiple
        // similar request to overload the server.
        this.fetching = true;
        this.http.get(_constants_api_constants__WEBPACK_IMPORTED_MODULE_4__["FEED"] + Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_3__["queryparams"])(this.qparams))
            .toPromise()
            .then(function (resp) {
            // append the new data to the current data list.
            _this.q = lodash__WEBPACK_IMPORTED_MODULE_0__["concat"](_this.q, resp['results']);
            // reset the fetching to false.
            _this.fetching = false;
            // check if this request is the last request. by
            // checking if there is no value for the `next` attribute,
            // we will know that all the data are loaded.
            if (!resp['next']) {
                _this.all_loaded = true;
            }
        });
    };
    FeedService.prototype.loadMoreFeed = function () {
        // check if all the data are loaded.
        if (!this.all_loaded && !this.fetching) {
            // update the page number so that this will fetch
            // the next batch instead of the current one.
            // TODO: Add a checker if the the page_number is more than
            // the maximum page count.
            this.qparams.page++;
            // fetch feed items.
            this.getFeed();
        }
        else {
            console.log('all data are loaded');
        }
    };
    FeedService.prototype.getNotificationEvents = function () {
        var _this = this;
        return this.http.get(_constants_api_constants__WEBPACK_IMPORTED_MODULE_4__["FEED_NOTIFICATIONS_EVENTS"])
            .toPromise()
            .then(function (resp) {
            _this.nEvents = resp;
        });
    };
    FeedService.prototype.getNotificationPendingIssues = function () {
        var _this = this;
        return this.http.get(_constants_api_constants__WEBPACK_IMPORTED_MODULE_4__["FEED_NOTIFICATIONS_PENDING"])
            .toPromise()
            .then(function (resp) {
            _this.pendingIssues = resp;
        });
    };
    FeedService.prototype.getIssueCount = function () {
        // return the sum of all the number of issues.
        return lodash__WEBPACK_IMPORTED_MODULE_0__["map"](this.pendingIssues, 'count').map(Number).reduce(function (x, y) { return x + y; });
    };
    FeedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FeedService);
    return FeedService;
}());



/***/ }),

/***/ "./src/app/commons/services/utils/nav.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/commons/services/utils/nav.service.ts ***!
  \*******************************************************/
/*! exports provided: NavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavService", function() { return NavService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavService = /** @class */ (function () {
    function NavService() {
        this.config = {
            title: null,
            expand: false
        };
    }
    NavService.prototype.setNav = function (title, expand) {
        if (expand === void 0) { expand = false; }
        this.config = Object({
            title: title, expand: expand
        });
    };
    NavService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NavService);
    return NavService;
}());



/***/ }),

/***/ "./src/app/commons/utils/app.states.ts":
/*!*********************************************!*\
  !*** ./src/app/commons/utils/app.states.ts ***!
  \*********************************************/
/*! exports provided: APP_STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_STATES", function() { return APP_STATES; });
/* harmony import */ var _components_public_public_states__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/public/public.states */ "./src/app/components/public/public.states.ts");
/* harmony import */ var _components_users_users_states__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/users/users.states */ "./src/app/components/users/users.states.ts");
/* harmony import */ var _components_projects_projects_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/projects/projects.states */ "./src/app/components/projects/projects.states.ts");
/* harmony import */ var _components_payroll_payroll_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/payroll/payroll.states */ "./src/app/components/payroll/payroll.states.ts");




var APP_STATES = {
    otherwise: '/',
    states: [].concat(_components_public_public_states__WEBPACK_IMPORTED_MODULE_0__["PUBLIC_STATES"], _components_users_users_states__WEBPACK_IMPORTED_MODULE_1__["USER_STATES"], _components_projects_projects_states__WEBPACK_IMPORTED_MODULE_2__["PROJECTS_STATES"], _components_payroll_payroll_states__WEBPACK_IMPORTED_MODULE_3__["PAYROLL_STATES"])
};


/***/ }),

/***/ "./src/app/commons/utils/file.utils.ts":
/*!*********************************************!*\
  !*** ./src/app/commons/utils/file.utils.ts ***!
  \*********************************************/
/*! exports provided: downloadFileHanlder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFileHanlder", function() { return downloadFileHanlder; });
/*
    File handler utils.
 */
/*
   downloadPDFHanlder: Gets the blob from a request and
       downloads it.
*/
function downloadFileHanlder(file, fileName) {
    // Attach the blob to an anchor
    var anchhor = document.createElement("a");
    anchhor.href = URL.createObjectURL(file);
    // Define anchor as a downlodable type and click it.
    anchhor.download = fileName;
    anchhor.click();
}


/***/ }),

/***/ "./src/app/commons/utils/http.utils.ts":
/*!*********************************************!*\
  !*** ./src/app/commons/utils/http.utils.ts ***!
  \*********************************************/
/*! exports provided: urlsafe, queryparams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlsafe", function() { return urlsafe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryparams", function() { return queryparams; });
/* Re-format the URL parameters for
 * readbility
 */
function urlsafe(url) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    return url.concat(params.join("/"), '/');
}
function queryparams(data) {
    return "?" + Object.keys(data).map(function (key) { return key + "=" + encodeURIComponent(data[key]); }).join('&');
}


/***/ }),

/***/ "./src/app/commons/utils/layout.utils.ts":
/*!***********************************************!*\
  !*** ./src/app/commons/utils/layout.utils.ts ***!
  \***********************************************/
/*! exports provided: ContentOnly, NavContent, NavSideOpenContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentOnly", function() { return ContentOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavContent", function() { return NavContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavSideOpenContent", function() { return NavSideOpenContent; });
/* harmony import */ var _components_partials_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/partials/navigation/navigation.component */ "./src/app/components/partials/navigation/navigation.component.ts");
/* harmony import */ var _components_partials_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/partials/side-menu/side-menu.component */ "./src/app/components/partials/side-menu/side-menu.component.ts");


function ContentOnly(content) {
    return { content: content };
}
function NavContent(content) {
    return {
        sidemenu: _components_partials_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__["SideMenuComponent"],
        navigation: _components_partials_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__["NavigationComponent"],
        content: content
    };
}
function NavSideOpenContent(content, BackgroundContent) {
    return {
        sidemenu: _components_partials_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__["SideMenuComponent"],
        navigation: _components_partials_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__["NavigationComponent"],
        content: BackgroundContent,
        sideopen: content
    };
}


/***/ }),

/***/ "./src/app/commons/utils/security.utils.ts":
/*!*************************************************!*\
  !*** ./src/app/commons/utils/security.utils.ts ***!
  \*************************************************/
/*! exports provided: LoginRequired, Disconnect, PayrollRedirect, SlackAuthRedirect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRequired", function() { return LoginRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Disconnect", function() { return Disconnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollRedirect", function() { return PayrollRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlackAuthRedirect", function() { return SlackAuthRedirect; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
/* harmony import */ var _services_auth_slack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth/slack.service */ "./src/app/commons/services/auth/slack.service.ts");
/* harmony import */ var _services_payroll_payroll_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/payroll/payroll.service */ "./src/app/commons/services/payroll/payroll.service.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};




/* LOGIN REQUIRED
 * @desc : callback function that will check and will not pass
 *         users that are not logged in.
 */
function LoginRequired(t) {
    var auth = t.injector().get(_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), state = t.router.stateService;
    if (!auth.authenticated())
        return state.target('login');
}
/* DISCONNECT
 * @desc : callback function that will log user out.
 *         (removes/clear the user token)
 */
function Disconnect(t) {
    var auth = t.injector().get(_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), state = t.router.stateService;
    if (auth.authenticated())
        auth.rmToken();
    return state.target('login');
}
/* PAYROLL REDIRECT
 */
function PayrollRedirect(t) {
    return __awaiter(this, void 0, void 0, function () {
        var auth, payroll, state;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    auth = t.injector().get(_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), payroll = t.injector().get(_services_payroll_payroll_service__WEBPACK_IMPORTED_MODULE_3__["PayrollService"]), state = t.router.stateService;
                    if (!auth.authenticated())
                        return [2 /*return*/, state.target('login')];
                    if (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](payroll.plist)) return [3 /*break*/, 2];
                    // TODO: improve this part. it looks good but messy.
                    // `payroll.plist` shouldn't be assigned in this function
                    return [4 /*yield*/, payroll.list()
                            .toPromise()
                            .then(function (resp) { payroll.plist = resp; return resp; })];
                case 1:
                    // TODO: improve this part. it looks good but messy.
                    // `payroll.plist` shouldn't be assigned in this function
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (payroll.plist.length !== 0) {
                        return [2 /*return*/, state.target('payroll-detail', { id: payroll.plist[0].id })];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
/* SLACK LOGIN REDIRECT
 * @desc : callback receiver for requests coming from
 *         slack server.
 */
function SlackAuthRedirect(t, $state) {
    return __awaiter(this, void 0, void 0, function () {
        var auth, slack, state, token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    auth = t.injector().get(_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), slack = t.injector().get(_services_auth_slack_service__WEBPACK_IMPORTED_MODULE_2__["SlackService"]), state = t.router.stateService, token = t._targetState._params.token;
                    if (!token) return [3 /*break*/, 2];
                    // validate if the access token is valid. retrieve
                    // the user token from the backend and redirect
                    // the user to the dashboard.
                    return [4 /*yield*/, slack.getUserToken(token)];
                case 1:
                    // validate if the access token is valid. retrieve
                    // the user token from the backend and redirect
                    // the user to the dashboard.
                    _a.sent();
                    // token is invalid or other error.
                    //if(!auth.authenticated()) return state.target('login');
                    return [2 /*return*/, state.target('dashboard')];
                case 2: return [2 /*return*/, state.target('login')];
            }
        });
    });
}


/***/ }),

/***/ "./src/app/components/partials/navigation/navigation.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/partials/navigation/navigation.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/partials/navigation/navigation.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/partials/navigation/navigation.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"center-nav\">\n  <div class=\"d-flex justify-content-between w-100\">\n    <h2 class=\"section-title\">{{ nav.config.title }}</h2>\n    <div class=\"search-input input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text filter-toggle\">Show Filters</span>\n      </div>\n      <input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Search anything\">\n      <div class=\"input-group-append\">\n        <span class=\"input-group-text\">\n          <a href=\"\" class=\"filter-toggle\">\n            <i class=\"fal fa-search ml-1\"></i>\n          </a>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"profile-dropdown\" ngbDropdown>\n    <div class=\"profile-info\">\n      <p>{{ auth.user.first_name }} {{ auth.user.last_name }}</p>\n      <span>{{ auth.user.position }}</span>\n    </div>\n    <a href=\"\" prevdefault ngbDropdownToggle>\n      <div class=\"avatar-sm\" [ngStyle]=\"{'background-image': 'url(' + auth.user.image + ')'}\" data-rjs=\"3\"></div>\n    </a>\n    <div ngbDropdownMenu>\n      <a uiSref=\"user-settings\" class=\"dropdown-item\">\n        <i class=\"far fa-cog\"></i>\n        <span>\n          Account Settings\n          <small class=\"text-muted\">{{ auth.user.email }}</small>\n        </span>\n      </a>\n      <a uiSref=\"logout\" class=\"dropdown-item\">\n        <i class=\"far fa-arrow-alt-right\"></i>\n        Log out\n      </a>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/partials/navigation/navigation.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/partials/navigation/navigation.component.ts ***!
  \************************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _commons_services_utils_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commons/services/utils/nav.service */ "./src/app/commons/services/utils/nav.service.ts");
/* harmony import */ var _commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../commons/services/auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(bconfig, auth, nav) {
        this.bconfig = bconfig;
        this.auth = auth;
        this.nav = nav;
        bconfig.placement = 'bottom-right';
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.auth.getuser();
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/partials/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/partials/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"],
            _commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _commons_services_utils_nav_service__WEBPACK_IMPORTED_MODULE_2__["NavService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/partials/partials.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/partials/partials.module.ts ***!
  \********************************************************/
/*! exports provided: PartialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartialsModule", function() { return PartialsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _commons_directives_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../commons/directives/directives.module */ "./src/app/commons/directives/directives.module.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/components/partials/navigation/navigation.component.ts");
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./side-menu/side-menu.component */ "./src/app/components/partials/side-menu/side-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PartialsModule = /** @class */ (function () {
    function PartialsModule() {
    }
    PartialsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__["UIRouterModule"],
                _commons_directives_directives_module__WEBPACK_IMPORTED_MODULE_4__["DirectivesModule"]
            ],
            declarations: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_6__["SideMenuComponent"]]
        })
    ], PartialsModule);
    return PartialsModule;
}());



/***/ }),

/***/ "./src/app/components/partials/side-menu/side-menu.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/partials/side-menu/side-menu.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/partials/side-menu/side-menu.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/partials/side-menu/side-menu.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"side-menu\">\n  <div class=\"brand\">\n    <a href=\"index.html\">\n      <img src=\"/static/images/logo.png\"\n           srcset=\"/static/images/logo@2x.png 2x,\n                   /static/images/logo@3x.png 3x\"\n           class=\"logo\">\n    </a>\n  </div>\n  <nav>\n    <ul class=\"list-unstyled\">\n      <li>\n        <a uiSref=\"dashboard\" [ngClass]=\"{active: state.includes('dashboard') || state.includes('dashboard-report')}\">\n          <i class=\"fal fa-gem\"></i>\n          Dashboard\n        </a>\n      </li>\n      <li>\n        <a uiSref=\"\">\n          <i class=\"fal fa-inbox\"></i>\n          Inbox\n        </a>\n        <span class=\"count\">1</span>\n      </li>\n      <li>\n        <a uiSref=\"projects\" uiSrefActive=\"active\">\n          <i class=\"fal fa-paste\"></i>\n          Projects\n        </a>\n      </li>\n      <li>\n        <a uiSref=\"payroll\" [ngClass]=\"{active: state.includes('payroll-detail')}\">\n          <i class=\"fal fa-gift\"></i>\n          Payroll\n        </a>\n      </li>\n    </ul>\n  </nav>\n</aside>"

/***/ }),

/***/ "./src/app/components/partials/side-menu/side-menu.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/partials/side-menu/side-menu.component.ts ***!
  \**********************************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent(state) {
        this.state = state;
    }
    SideMenuComponent.prototype.ngOnInit = function () { };
    SideMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-menu',
            template: __webpack_require__(/*! ./side-menu.component.html */ "./src/app/components/partials/side-menu/side-menu.component.html"),
            styles: [__webpack_require__(/*! ./side-menu.component.css */ "./src/app/components/partials/side-menu/side-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_uirouter_angular__WEBPACK_IMPORTED_MODULE_1__["StateService"]])
    ], SideMenuComponent);
    return SideMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/payroll/payroll-list/payroll-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/payroll/payroll-list/payroll-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/payroll/payroll-list/payroll-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/payroll/payroll-list/payroll-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"payslip-list\">\n\n  <div class=\"d-flex align-items-center justify-content-between mb-4\">\n    <h5 class=\"subtitle mb-0\">All Pay slips</h5>\n    <div class=\"feed-data-options \">\n      <button class=\"btn btn-sm mr-2\" >\n        <i class=\"fas fa-download\"></i>\n      </button>\n      <button class=\"btn btn-sm\">\n        <i class=\"fas fa-arrow-alt-from-left\"></i>\n      </button>\n    </div>\n  </div>\n  \n  <div class=\"nav-list-style-1\">\n    \n    <a uiSref=\"payroll-detail\" [uiParams]=\"{id:p.id}\" uiSrefActive=\"active\" *ngFor=\"let p of payrollservice.plist\">\n      <div class=\"nav-list-item d-flex justify-content-between align-items-start p-3\">\n        <div class=\"d-flex align-items-center\">\n          <input type=\"checkbox\" name=\"\" class=\"mr-3 inputcheck\">\n          <div class=\"\">\n            <h6 class=\"section-title mb-1\">{{ p.payroll_code }}</h6>\n            <small class=\"text-muted\">{{ p.date_created | date: '(EEE) MMM d, y' }}</small>\n          </div>\n        </div>\n        <div class=\"text-right\">\n          <p class=\"mb-1 pane-title\">{{ p.date_from | date: 'MMM d' }} - {{ p.date_to | date: 'd y' }}</p>\n          <p class=\"text-primary mb-0\" *ngIf=\"p.is_sent\">Sent</p>\n          <p class=\"text-warning mb-0\" *ngIf=\"!p.is_sent\">Pending</p>\n        </div>\n      </div>\n    </a>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/payroll/payroll-list/payroll-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/payroll/payroll-list/payroll-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: PayrollListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollListComponent", function() { return PayrollListComponent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _commons_services_payroll_payroll_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../commons/services/payroll/payroll.service */ "./src/app/commons/services/payroll/payroll.service.ts");
/* harmony import */ var _commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../commons/services/auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PayrollListComponent = /** @class */ (function () {
    function PayrollListComponent(state, auth, payrollservice) {
        this.state = state;
        this.auth = auth;
        this.payrollservice = payrollservice;
    }
    PayrollListComponent.prototype.ngOnInit = function () {
        // get the list of payrolls for the
        // authenticated user.
        if (!lodash__WEBPACK_IMPORTED_MODULE_0__["size"](this.payrollservice.plist)) {
            this.payrollservice.getList();
        }
    };
    PayrollListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payroll-list',
            template: __webpack_require__(/*! ./payroll-list.component.html */ "./src/app/components/payroll/payroll-list/payroll-list.component.html"),
            styles: [__webpack_require__(/*! ./payroll-list.component.css */ "./src/app/components/payroll/payroll-list/payroll-list.component.css")]
        }),
        __metadata("design:paramtypes", [_uirouter_angular__WEBPACK_IMPORTED_MODULE_2__["StateService"],
            _commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _commons_services_payroll_payroll_service__WEBPACK_IMPORTED_MODULE_3__["PayrollService"]])
    ], PayrollListComponent);
    return PayrollListComponent;
}());



/***/ }),

/***/ "./src/app/components/payroll/payroll.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/payroll/payroll.module.ts ***!
  \******************************************************/
/*! exports provided: PayrollModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollModule", function() { return PayrollModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _payroll_payroll_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payroll/payroll.component */ "./src/app/components/payroll/payroll/payroll.component.ts");
/* harmony import */ var _payroll_list_payroll_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payroll-list/payroll-list.component */ "./src/app/components/payroll/payroll-list/payroll-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PayrollModule = /** @class */ (function () {
    function PayrollModule() {
    }
    PayrollModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__["UIRouterModule"]
            ],
            declarations: [_payroll_payroll_component__WEBPACK_IMPORTED_MODULE_4__["PayrollComponent"], _payroll_list_payroll_list_component__WEBPACK_IMPORTED_MODULE_5__["PayrollListComponent"]]
        })
    ], PayrollModule);
    return PayrollModule;
}());



/***/ }),

/***/ "./src/app/components/payroll/payroll.states.ts":
/*!******************************************************!*\
  !*** ./src/app/components/payroll/payroll.states.ts ***!
  \******************************************************/
/*! exports provided: PAYROLL_STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYROLL_STATES", function() { return PAYROLL_STATES; });
/* harmony import */ var _commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../commons/utils/layout.utils */ "./src/app/commons/utils/layout.utils.ts");
/* harmony import */ var _commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commons/utils/security.utils */ "./src/app/commons/utils/security.utils.ts");
/* harmony import */ var _payroll_payroll_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payroll/payroll.component */ "./src/app/components/payroll/payroll/payroll.component.ts");



var PAYROLL_STATES = [
    {
        name: 'payroll',
        url: '/payroll/',
        views: Object(_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["NavContent"])(_payroll_payroll_component__WEBPACK_IMPORTED_MODULE_2__["PayrollComponent"]),
        onEnter: _commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__["PayrollRedirect"]
    },
    {
        name: 'payroll-detail',
        url: '/payroll/:id/',
        views: Object(_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["NavContent"])(_payroll_payroll_component__WEBPACK_IMPORTED_MODULE_2__["PayrollComponent"]),
        onEnter: _commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__["LoginRequired"]
    }
];


/***/ }),

/***/ "./src/app/components/payroll/payroll/payroll.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/payroll/payroll/payroll.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/payroll/payroll/payroll.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/payroll/payroll/payroll.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center-section\">\n  <div class=\"payroll-wrapper row\">\n    \n    <section class=\"col-md-4\">\n      <app-payroll-list></app-payroll-list>\n    </section>\n\n    <section class=\"col-md-8\">\n      <div class=\"payslip-preview-container\">\n        <div class=\"payslip-preview\">\n          <div class=\"d-flex justify-content-between mb-5\">\n            <div>\n              <img src=\"/static/images/logo-2.png\" data-rjs=\"3\">\n            </div>\n\n            <div class=\"text-right\">\n              <p class=\"subtitle mb-1\">Payslip</p>\n              <h5 class=\"title-bold\">#{{ payrollservice.payroll.payroll_code }}</h5>\n            </div>\n          </div>\n          <div class=\"d-flex justify-content-between mb-5\">\n            <div>\n              <h3 class=\"title-bold mb-1\">{{ payrollservice.payroll.user.full_name }}</h3>\n              <h6 class=\"pane-title mb-1\">{{ payrollservice.payroll.user.position }}</h6>\n              <p class=\"text-muted\">{{ payrollservice.payroll.user.email }}</p>\n            </div>\n            <div class=\"text-right\">\n              <p class=\"text-muted mb-1 small\">Pay period</p>\n              <p class=\"title-bold\">{{ payrollservice.payroll.date_from | date: 'MMM d' }} - {{ payrollservice.payroll.date_to | date: 'd, y' }}</p>\n            </div>\n          </div>\n          <table class=\"salary-breakdown-table\">\n            <thead>\n              <tr>\n                <th scope=\"col\">\n                  <p class=\"title-bold\">Base Salary</p>\n                </th>\n                <th scope=\"col\">\n                  <p class=\"title-bold\">Benefits</p>\n                </th>\n                <th scope=\"col\">\n                  <p class=\"title-bold\">Other Deductions</p>\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  <p>{{ payrollservice.payroll.gross_pay }}</p>\n                </td>\n                <td>\n                  <p *ngFor=\"let benefit of payrollservice.payroll.benefits\">\n                    {{ benefit.name }}\n                    <span>{{ benefit.amount }}</span>\n                  </p>\n                </td>\n                <td>\n                  <p *ngFor=\"let plan of payrollservice.payroll.plans\">\n                    {{ plan.name }}\n                    <span>{{ plan.amount }}</span>\n                  </p>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <div class=\"summary d-flex justify-content-end\">\n            <div class=\"w-50\">\n              <div class=\"d-flex justify-content-between\">\n                <p class=\"title-bold\">Total Deductions</p>\n                <p>{{ payrollservice.payroll.total_deduction }}</p>\n              </div>\n              <div class=\"d-flex justify-content-between\">\n                <p class=\"title-bold\">Subtotal</p>\n                <p>{{ payrollservice.payroll.net_pay }}</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"total text-right\">\n            <p class=\"h6\">Pay per Period</p>\n            <h3 class=\"title-bold\">P{{ payrollservice.payroll.payperiod_amount }}</h3>\n          </div>\n          <div class=\"payslip-footer d-flex align-items-end justify-content-between\">\n            <div class=\"w-50\">\n              <p class=\"xsmall\">\n                Door 1, 3rd Floor, Consuelo Building, J.P. Laurel Avenue, Lanang, Davao City, Philippines, 8000\n              </p>  \n              <p class=\"xsmall\">\n                (082) 225 - 1050\n              </p>  \n            </div>\n            <p class=\"xsmall\">\n                http://swiftkind.com/\n              </p>  \n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/payroll/payroll/payroll.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/payroll/payroll/payroll.component.ts ***!
  \*****************************************************************/
/*! exports provided: PayrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollComponent", function() { return PayrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _commons_services_payroll_payroll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commons/services/payroll/payroll.service */ "./src/app/commons/services/payroll/payroll.service.ts");
/* harmony import */ var _commons_services_utils_nav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../commons/services/utils/nav.service */ "./src/app/commons/services/utils/nav.service.ts");
/* harmony import */ var _commons_models_payroll_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../commons/models/payroll.models */ "./src/app/commons/models/payroll.models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PayrollComponent = /** @class */ (function () {
    function PayrollComponent(state, payrollservice, nav) {
        this.state = state;
        this.payrollservice = payrollservice;
        this.nav = nav;
        this.payroll = new _commons_models_payroll_models__WEBPACK_IMPORTED_MODULE_4__["Payroll"];
        this.sendingEmail = false;
        this.emailCallbackMessage = "";
        // nav configuration
        // TODO: this sucks!. find a better solution
        this.nav.setNav('Payroll', true);
    }
    PayrollComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.state.params.id) {
            // get payroll details from the backend
            this.payrollservice.detail(this.state.params.id)
                .subscribe(function (resp) { _this.payrollservice.payroll = new _commons_models_payroll_models__WEBPACK_IMPORTED_MODULE_4__["Payroll"](resp); });
        }
    };
    PayrollComponent.prototype.getFileName = function () {
        // Constructing the file name for the pdf
        var report_phrase = this.payroll.date_from + " to " + this.payroll.date_to;
        var date_phrase = this.payroll.date_from + " to " + this.payroll.date_to;
        var employee_name = this.payroll.user.first_name + " to " + this.payroll.user.last_name;
        var file_name = "payroll of " + employee_name + " " + report_phrase;
        return "payroll of " + employee_name + " " + date_phrase;
        ;
    };
    PayrollComponent.prototype.downloadPDF = function () {
        var file_name = this.getFileName();
        this.payrollservice.downloadPDF(this.state.params.id, file_name);
    };
    PayrollComponent.prototype.sendPDF = function () {
        var _this = this;
        // sendingEmail means that we have to disable the button
        this.sendingEmail = true;
        // Reset message if it's still sending
        this.emailCallbackMessage = "";
        this.payrollservice.sendPayrollReport(this.state.params.id)
            .then(function (data) {
            console.log(data);
            _this.sendPDFGeneralCallback();
            _this.emailCallbackMessage = "Email is sent sucessfully.";
        })
            .catch(function (errors) {
            console.log(errors);
            _this.sendPDFGeneralCallback();
            _this.emailCallbackMessage = "Something went wrong in sending the email!";
        });
    };
    PayrollComponent.prototype.sendPDFGeneralCallback = function () {
        // General clean up on call back
        this.sendingEmail = false;
    };
    PayrollComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payroll',
            template: __webpack_require__(/*! ./payroll.component.html */ "./src/app/components/payroll/payroll/payroll.component.html"),
            styles: [__webpack_require__(/*! ./payroll.component.css */ "./src/app/components/payroll/payroll/payroll.component.css")]
        }),
        __metadata("design:paramtypes", [_uirouter_angular__WEBPACK_IMPORTED_MODULE_1__["StateService"],
            _commons_services_payroll_payroll_service__WEBPACK_IMPORTED_MODULE_2__["PayrollService"],
            _commons_services_utils_nav_service__WEBPACK_IMPORTED_MODULE_3__["NavService"]])
    ], PayrollComponent);
    return PayrollComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/projects.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/projects/projects.module.ts ***!
  \********************************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/components/projects/projects/projects.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]
            ],
            declarations: [_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"]]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());



/***/ }),

/***/ "./src/app/components/projects/projects.states.ts":
/*!********************************************************!*\
  !*** ./src/app/components/projects/projects.states.ts ***!
  \********************************************************/
/*! exports provided: PROJECTS_STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS_STATES", function() { return PROJECTS_STATES; });
/* harmony import */ var _commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../commons/utils/layout.utils */ "./src/app/commons/utils/layout.utils.ts");
/* harmony import */ var _commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commons/utils/security.utils */ "./src/app/commons/utils/security.utils.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/components/projects/projects/projects.component.ts");



var PROJECTS_STATES = [
    {
        name: 'projects',
        url: '/projects/',
        views: Object(_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["NavContent"])(_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]),
        onEnter: _commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__["LoginRequired"]
    }
];


/***/ }),

/***/ "./src/app/components/projects/projects/projects.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/projects/projects/projects.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/projects/projects/projects.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/projects/projects/projects.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center-section \">\n  <div class=\"projects-tab\">\n    <nav class=\"project-nav\">\n      <div class=\"nav nav-tabs\" role=\"tablist\">\n        <a class=\"nav-item active\" id=\"activeProjects\" data-toggle=\"tab\" href=\"#activeProjectslist\" role=\"tab\" aria-controls=\"activeProjectslist\" aria-selected=\"true\">Active Projects(4)</a>\n        <a class=\"nav-item \" id=\"archiveProjects\" data-toggle=\"tab\" aria-controls=\"archiveProjectslist\" href=\"#archiveProjectslist\" aria-controls=\"archiveProjectslist\" aria-selected=\"false\">Archive (16)</a>\n      </div>\n    </nav> \n    <div class=\"tab-content\">\n      <div class=\"tab-pane fade show active\" id=\"activeProjectslist\" role=\"tabpanel\" aria-labelled=\"activeProjects\">\n        <div class=\"project-item d-flex align-items-start justify-content-between\">\n          <div class=\"d-flex align-items-start\">\n            <div class=\"avatar-sm no-photo-pink mr-3\">D</div>\n            <div class=\"\">\n              <a href=\"project-details.html\" class=\"h5\">Designs</a>\n              <p class=\"text-muted my-1 small\">30 hours of 40/week</p>\n              <div class=\"hour-meter\">\n                <span class=\"hour-spent\" width=\"80%\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"team-members d-flex\">\n            <div class=\"avatar-xs\" style=\"background-image: url('assets/images/tamara-bellis-401355-unsplash.jpg');\" data-rjs=\"3\">\n            </div>\n            <div class=\"avatar-xs ml-2\" style=\"background-image: url('assets/images/tamara-bellis-401355-unsplash.jpg');\" data-rjs=\"3\">\n            </div>\n            <div class=\"avatar-xs ml-2\" style=\"background-image: url('assets/images/tamara-bellis-401355-unsplash.jpg');\" data-rjs=\"3\">\n            </div>\n            <div class=\"avatar-xs ml-2\" style=\"background-image: url('assets/images/tamara-bellis-401355-unsplash.jpg');\" data-rjs=\"3\">\n            </div>\n            <div class=\"avatar-xs more ml-2\">\n              +7\n            </div>\n          </div>\n        </div>\n        <div class=\"project-item d-flex align-items-start justify-content-between\">\n          <div class=\"d-flex align-items-start\">\n            <div class=\"avatar-sm no-photo-success mr-3\">S</div>\n            <div class=\"\">\n              <a href=\"\" class=\"h5\">Saltstack</a>\n              <p class=\"text-muted my-1 small\">30 hours of 40/week</p>\n              <div class=\"hour-meter\">\n                <span class=\"hour-spent\" width=\"80%\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"team-members d-flex\">\n            <div class=\"avatar-xs\" style=\"background-image: url('assets/images/tamara-bellis-401355-unsplash.jpg');\" data-rjs=\"3\">\n            </div>\n            <div class=\"avatar-xs ml-2\" style=\"background-image: url('assets/images/tamara-bellis-401355-unsplash.jpg');\" data-rjs=\"3\">\n            </div>\n            <div class=\"avatar-xs ml-2\" style=\"background-image: url('assets/images/tamara-bellis-401355-unsplash.jpg');\" data-rjs=\"3\">\n            </div>\n            <div class=\"avatar-xs ml-2\" style=\"background-image: url('assets/images/tamara-bellis-401355-unsplash.jpg');\" data-rjs=\"3\">\n            </div>\n            <div class=\"avatar-xs more ml-2\">\n              +7\n            </div>\n          </div>\n        </div>\n        <div class=\"project-item d-flex align-items-start justify-content-between\">\n          <div class=\"d-flex align-items-start\">\n            <div class=\"avatar-sm no-photo-primary mr-3\">Z</div>\n            <div class=\"\">\n              <a href=\"\" class=\"h5\">Zumbacruise</a>\n              <p class=\"text-muted my-1 small\">No activities for the week</p>\n            </div>\n          </div>\n          <div class=\"team-members d-flex\">\n            <div class=\"avatar-xs\" style=\"background-image: url('assets/images/tamara-bellis-401355-unsplash.jpg');\" data-rjs=\"3\">\n            </div>\n            <div class=\"avatar-xs ml-2\" style=\"background-image: url('assets/images/tamara-bellis-401355-unsplash.jpg');\" data-rjs=\"3\">\n            </div>\n            <div class=\"avatar-xs ml-2\" style=\"background-image: url('assets/images/tamara-bellis-401355-unsplash.jpg');\" data-rjs=\"3\">\n            </div>\n            <div class=\"avatar-xs ml-2\" style=\"background-image: url('assets/images/tamara-bellis-401355-unsplash.jpg');\" data-rjs=\"3\">\n            </div>\n            <div class=\"avatar-xs more ml-2\">\n              +7\n            </div>\n          </div>\n        </div>\n        <div class=\"project-item d-flex align-items-start justify-content-between\">\n          <div class=\"d-flex align-items-start\">\n            <div class=\"avatar-sm no-photo-orange mr-3\">H</div>\n            <div class=\"\">\n              <a href=\"\" class=\"h5\">HelpDesk</a>\n              <p class=\"text-muted my-1 small\">No activities for the week</p>\n            </div>\n          </div>\n          <div class=\"team-members d-flex\">\n            <div class=\"avatar-xs\" style=\"background-image: url('assets/images/tamara-bellis-401355-unsplash.jpg');\" data-rjs=\"3\">\n            </div>\n            <div class=\"avatar-xs ml-2\" style=\"background-image: url('assets/images/tamara-bellis-401355-unsplash.jpg');\" data-rjs=\"3\">\n            </div>\n            <div class=\"avatar-xs ml-2\" style=\"background-image: url('assets/images/tamara-bellis-401355-unsplash.jpg');\" data-rjs=\"3\">\n            </div>\n            <div class=\"avatar-xs ml-2\" style=\"background-image: url('assets/images/tamara-bellis-401355-unsplash.jpg');\" data-rjs=\"3\">\n            </div>\n            <div class=\"avatar-xs more ml-2\">\n              +7\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"tab-pane fade\" id=\"archiveProjectslist\" role=\"tabpanel\" aria-labelledby=\"archiveProjects\">\n        archive\n      </div>\n    </div>\n  </div>\n\n  <aside class=\"stat-pane overflow-hidden\">\n    <div class=\"report-feed report-stream\">\n      <div class=\"mb-4 px-4\">\n        <div class=\"mb-4 d-flex justify-content-between align-items-center\">\n          <div>\n            <h5 class=\"pane-title mb-0\">Report stream</h5>\n          </div>\n          <a href=\"#\" class=\"\">Filter by date</a>\n        </div>\n      </div>\n      <div class=\"month-label\">\n        <span>January 2018</span>\n      </div>\n\n      <div class=\"report-items\">\n        <ngb-accordion #a=\"ngbAccordion\" activeIds=\"ngb-panel-0\" [destroyOnHide]=\"false\">\n        \n        <ngb-panel>\n          <ng-template ngbPanelHeader let-opened=\"opened\">\n            <button class=\"btn\" [ngClass]=\"{'active': opened}\" ngbPanelToggle>\n              <div class=\"d-flex align-items-center\">\n                <div class=\"report-stream-date text-center\">\n                  <p class=\"text-primary mb-0\">23</p>\n                  <small class=\"text-muted\">TUE</small>\n                </div>\n                <span class=\"date-indicator\"></span>\n                <div class=\"d-flex justify-content-between\">\n                  <div class=\"mr-5\">\n                    <p class=\"mb-0 pane-title\">Designs</p>\n                    <small class=\"\">No issues</small>\n                  </div>\n                  <div class=\"text-left\">\n                    <p class=\"mb-0 d-block\">Total hours: <span>8</span></p>\n                    <small class=\"text-muted\">as of 6:45 PM</small>\n                  </div>\n                </div>\n              </div>\n            </button>\n          </ng-template>\n\n          <ng-template ngbPanelContent>\n            <div class=\"report-table\">\n              <table id=\"doneTable\">\n                <thead>\n                  <tr>\n                    <th width=\"80%\">Worked on</th>\n                    <th width=\"10%\">Link</th>\n                    <th width=\"10%\">Hours</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Creating the service to connect to flask\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                  \n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Succesfully connecting to aws cognito for login\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Transferring the bootstrap to node modules using npm\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"todoTable\">\n                <thead>\n                  <tr>\n                    <th width=\"80%\">To do</th>\n                    <th width=\"10%\">Link</th>\n                    <th width=\"10%\">&nbsp;</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Creating an endpoint to change the user's password. (This is needed so we could use the token that is passed to us)\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"issuesTable\">\n                \n                <tbody>\n                  <tr>\n                    <p class=\"text-muted\">No Issues</p>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </ng-template>\n        </ngb-panel>\n\n        <ngb-panel>\n          <ng-template ngbPanelHeader let-opened=\"opened\">\n            <button class=\"btn\" [ngClass]=\"{'active': opened}\" ngbPanelToggle>\n              <div class=\"d-flex align-items-center\">\n                <div class=\"report-stream-date text-center\">\n                  <p class=\"text-primary mb-0\">23</p>\n                  <small class=\"text-muted\">TUE</small>\n                </div>\n                <span class=\"date-indicator\"></span>\n                <div class=\"d-flex justify-content-between\">\n                  <div class=\"mr-5\">\n                    <p class=\"mb-0 pane-title\">Designs</p>\n                    <small class=\"\">No issues</small>\n                  </div>\n                  <div class=\"text-left\">\n                    <p class=\"mb-0 d-block\">Total hours: <span>8</span></p>\n                    <small class=\"text-muted\">as of 6:45 PM</small>\n                  </div>\n                </div>\n              </div>\n            </button>\n          </ng-template>\n\n          <ng-template ngbPanelContent>\n            <div class=\"report-table\">\n              <table id=\"doneTable\">\n                <thead>\n                  <tr>\n                    <th width=\"80%\">Worked on</th>\n                    <th width=\"10%\">Link</th>\n                    <th width=\"10%\">Hours</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Creating the service to connect to flask\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                  \n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Succesfully connecting to aws cognito for login\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Transferring the bootstrap to node modules using npm\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"todoTable\">\n                <thead>\n                  <tr>\n                    <th width=\"80%\">To do</th>\n                    <th width=\"10%\">Link</th>\n                    <th width=\"10%\">&nbsp;</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Creating an endpoint to change the user's password. (This is needed so we could use the token that is passed to us)\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"issuesTable\">\n                \n                <tbody>\n                  <tr>\n                    <p class=\"text-muted\">No Issues</p>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </ng-template>\n        </ngb-panel>\n\n        <ngb-panel>\n          <ng-template ngbPanelHeader let-opened=\"opened\">\n            <button class=\"btn\" [ngClass]=\"{'active': opened}\" ngbPanelToggle>\n              <div class=\"d-flex align-items-center\">\n                <div class=\"report-stream-date text-center\">\n                  <p class=\"text-primary mb-0\">23</p>\n                  <small class=\"text-muted\">TUE</small>\n                </div>\n                <span class=\"date-indicator\"></span>\n                <div class=\"d-flex justify-content-between\">\n                  <div class=\"mr-5\">\n                    <p class=\"mb-0 pane-title\">Designs</p>\n                    <small class=\"\">No issues</small>\n                  </div>\n                  <div class=\"text-left\">\n                    <p class=\"mb-0 d-block\">Total hours: <span>8</span></p>\n                    <small class=\"text-muted\">as of 6:45 PM</small>\n                  </div>\n                </div>\n              </div>\n            </button>\n          </ng-template>\n\n          <ng-template ngbPanelContent>\n            <div class=\"report-table\">\n              <table id=\"doneTable\">\n                <thead>\n                  <tr>\n                    <th width=\"80%\">Worked on</th>\n                    <th width=\"10%\">Link</th>\n                    <th width=\"10%\">Hours</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Creating the service to connect to flask\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                  \n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Succesfully connecting to aws cognito for login\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Transferring the bootstrap to node modules using npm\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"todoTable\">\n                <thead>\n                  <tr>\n                    <th width=\"80%\">To do</th>\n                    <th width=\"10%\">Link</th>\n                    <th width=\"10%\">&nbsp;</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Creating an endpoint to change the user's password. (This is needed so we could use the token that is passed to us)\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"issuesTable\">\n                \n                <tbody>\n                  <tr>\n                    <p class=\"text-muted\">No Issues</p>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </ng-template>\n        </ngb-panel>\n\n        <ngb-panel>\n          <ng-template ngbPanelHeader let-opened=\"opened\">\n            <button class=\"btn\" [ngClass]=\"{'active': opened}\" ngbPanelToggle>\n              <div class=\"d-flex align-items-center\">\n                <div class=\"report-stream-date text-center\">\n                  <p class=\"text-primary mb-0\">23</p>\n                  <small class=\"text-muted\">TUE</small>\n                </div>\n                <span class=\"date-indicator\"></span>\n                <div class=\"d-flex justify-content-between\">\n                  <div class=\"mr-5\">\n                    <p class=\"mb-0 pane-title\">Designs</p>\n                    <small class=\"\">No issues</small>\n                  </div>\n                  <div class=\"text-left\">\n                    <p class=\"mb-0 d-block\">Total hours: <span>8</span></p>\n                    <small class=\"text-muted\">as of 6:45 PM</small>\n                  </div>\n                </div>\n              </div>\n            </button>\n          </ng-template>\n\n          <ng-template ngbPanelContent>\n            <div class=\"report-table\">\n              <table id=\"doneTable\">\n                <thead>\n                  <tr>\n                    <th width=\"80%\">Worked on</th>\n                    <th width=\"10%\">Link</th>\n                    <th width=\"10%\">Hours</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Creating the service to connect to flask\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                  \n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Succesfully connecting to aws cognito for login\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Transferring the bootstrap to node modules using npm\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"todoTable\">\n                <thead>\n                  <tr>\n                    <th width=\"80%\">To do</th>\n                    <th width=\"10%\">Link</th>\n                    <th width=\"10%\">&nbsp;</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Creating an endpoint to change the user's password. (This is needed so we could use the token that is passed to us)\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"issuesTable\">\n                \n                <tbody>\n                  <tr>\n                    <p class=\"text-muted\">No Issues</p>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </ng-template>\n        </ngb-panel>\n\n        <ngb-panel>\n          <ng-template ngbPanelHeader let-opened=\"opened\">\n            <button class=\"btn\" [ngClass]=\"{'active': opened}\" ngbPanelToggle>\n              <div class=\"d-flex align-items-center\">\n                <div class=\"report-stream-date text-center\">\n                  <p class=\"text-primary mb-0\">23</p>\n                  <small class=\"text-muted\">TUE</small>\n                </div>\n                <span class=\"date-indicator\"></span>\n                <div class=\"d-flex justify-content-between\">\n                  <div class=\"mr-5\">\n                    <p class=\"mb-0 pane-title\">Designs</p>\n                    <small class=\"\">No issues</small>\n                  </div>\n                  <div class=\"text-left\">\n                    <p class=\"mb-0 d-block\">Total hours: <span>8</span></p>\n                    <small class=\"text-muted\">as of 6:45 PM</small>\n                  </div>\n                </div>\n              </div>\n            </button>\n          </ng-template>\n\n          <ng-template ngbPanelContent>\n            <div class=\"report-table\">\n              <table id=\"doneTable\">\n                <thead>\n                  <tr>\n                    <th width=\"80%\">Worked on</th>\n                    <th width=\"10%\">Link</th>\n                    <th width=\"10%\">Hours</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Creating the service to connect to flask\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                  \n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Succesfully connecting to aws cognito for login\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Transferring the bootstrap to node modules using npm\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"todoTable\">\n                <thead>\n                  <tr>\n                    <th width=\"80%\">To do</th>\n                    <th width=\"10%\">Link</th>\n                    <th width=\"10%\">&nbsp;</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Creating an endpoint to change the user's password. (This is needed so we could use the token that is passed to us)\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"issuesTable\">\n                \n                <tbody>\n                  <tr>\n                    <p class=\"text-muted\">No Issues</p>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </ng-template>\n        </ngb-panel>\n\n        <ngb-panel>\n          <ng-template ngbPanelHeader let-opened=\"opened\">\n            <button class=\"btn\" [ngClass]=\"{'active': opened}\" ngbPanelToggle>\n              <div class=\"d-flex align-items-center\">\n                <div class=\"report-stream-date text-center\">\n                  <p class=\"text-primary mb-0\">23</p>\n                  <small class=\"text-muted\">TUE</small>\n                </div>\n                <span class=\"date-indicator\"></span>\n                <div class=\"d-flex justify-content-between\">\n                  <div class=\"mr-5\">\n                    <p class=\"mb-0 pane-title\">Designs</p>\n                    <small class=\"\">No issues</small>\n                  </div>\n                  <div class=\"text-left\">\n                    <p class=\"mb-0 d-block\">Total hours: <span>8</span></p>\n                    <small class=\"text-muted\">as of 6:45 PM</small>\n                  </div>\n                </div>\n              </div>\n            </button>\n          </ng-template>\n\n          <ng-template ngbPanelContent>\n            <div class=\"report-table\">\n              <table id=\"doneTable\">\n                <thead>\n                  <tr>\n                    <th width=\"80%\">Worked on</th>\n                    <th width=\"10%\">Link</th>\n                    <th width=\"10%\">Hours</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Creating the service to connect to flask\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                  \n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Succesfully connecting to aws cognito for login\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Transferring the bootstrap to node modules using npm\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"todoTable\">\n                <thead>\n                  <tr>\n                    <th width=\"80%\">To do</th>\n                    <th width=\"10%\">Link</th>\n                    <th width=\"10%\">&nbsp;</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Creating an endpoint to change the user's password. (This is needed so we could use the token that is passed to us)\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"issuesTable\">\n                \n                <tbody>\n                  <tr>\n                    <p class=\"text-muted\">No Issues</p>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </ng-template>\n        </ngb-panel>\n\n        <ngb-panel>\n          <ng-template ngbPanelHeader let-opened=\"opened\">\n            <button class=\"btn\" [ngClass]=\"{'active': opened}\" ngbPanelToggle>\n              <div class=\"d-flex align-items-center\">\n                <div class=\"report-stream-date text-center\">\n                  <p class=\"text-primary mb-0\">23</p>\n                  <small class=\"text-muted\">TUE</small>\n                </div>\n                <span class=\"date-indicator\"></span>\n                <div class=\"d-flex justify-content-between\">\n                  <div class=\"mr-5\">\n                    <p class=\"mb-0 pane-title\">Designs</p>\n                    <small class=\"\">No issues</small>\n                  </div>\n                  <div class=\"text-left\">\n                    <p class=\"mb-0 d-block\">Total hours: <span>8</span></p>\n                    <small class=\"text-muted\">as of 6:45 PM</small>\n                  </div>\n                </div>\n              </div>\n            </button>\n          </ng-template>\n\n          <ng-template ngbPanelContent>\n            <div class=\"report-table\">\n              <table id=\"doneTable\">\n                <thead>\n                  <tr>\n                    <th width=\"80%\">Worked on</th>\n                    <th width=\"10%\">Link</th>\n                    <th width=\"10%\">Hours</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Creating the service to connect to flask\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                  \n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Succesfully connecting to aws cognito for login\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Transferring the bootstrap to node modules using npm\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"todoTable\">\n                <thead>\n                  <tr>\n                    <th width=\"80%\">To do</th>\n                    <th width=\"10%\">Link</th>\n                    <th width=\"10%\">&nbsp;</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Creating an endpoint to change the user's password. (This is needed so we could use the token that is passed to us)\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"issuesTable\">\n                \n                <tbody>\n                  <tr>\n                    <p class=\"text-muted\">No Issues</p>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </ng-template>\n        </ngb-panel>\n\n        <ngb-panel>\n          <ng-template ngbPanelHeader let-opened=\"opened\">\n            <button class=\"btn\" [ngClass]=\"{'active': opened}\" ngbPanelToggle>\n              <div class=\"d-flex align-items-center\">\n                <div class=\"report-stream-date text-center\">\n                  <p class=\"text-primary mb-0\">23</p>\n                  <small class=\"text-muted\">TUE</small>\n                </div>\n                <span class=\"date-indicator\"></span>\n                <div class=\"d-flex justify-content-between\">\n                  <div class=\"mr-5\">\n                    <p class=\"mb-0 pane-title\">Designs</p>\n                    <small class=\"\">No issues</small>\n                  </div>\n                  <div class=\"text-left\">\n                    <p class=\"mb-0 d-block\">Total hours: <span>8</span></p>\n                    <small class=\"text-muted\">as of 6:45 PM</small>\n                  </div>\n                </div>\n              </div>\n            </button>\n          </ng-template>\n\n          <ng-template ngbPanelContent>\n            <div class=\"report-table\">\n              <table id=\"doneTable\">\n                <thead>\n                  <tr>\n                    <th width=\"80%\">Worked on</th>\n                    <th width=\"10%\">Link</th>\n                    <th width=\"10%\">Hours</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Creating the service to connect to flask\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                  \n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Succesfully connecting to aws cognito for login\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Transferring the bootstrap to node modules using npm\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"todoTable\">\n                <thead>\n                  <tr>\n                    <th width=\"80%\">To do</th>\n                    <th width=\"10%\">Link</th>\n                    <th width=\"10%\">&nbsp;</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Creating an endpoint to change the user's password. (This is needed so we could use the token that is passed to us)\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"issuesTable\">\n                \n                <tbody>\n                  <tr>\n                    <p class=\"text-muted\">No Issues</p>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </ng-template>\n        </ngb-panel>\n\n        <ngb-panel>\n          <ng-template ngbPanelHeader let-opened=\"opened\">\n            <button class=\"btn\" [ngClass]=\"{'active': opened}\" ngbPanelToggle>\n              <div class=\"d-flex align-items-center\">\n                <div class=\"report-stream-date text-center\">\n                  <p class=\"text-primary mb-0\">23</p>\n                  <small class=\"text-muted\">TUE</small>\n                </div>\n                <span class=\"date-indicator\"></span>\n                <div class=\"d-flex justify-content-between\">\n                  <div class=\"mr-5\">\n                    <p class=\"mb-0 pane-title\">Designs</p>\n                    <small class=\"\">No issues</small>\n                  </div>\n                  <div class=\"text-left\">\n                    <p class=\"mb-0 d-block\">Total hours: <span>8</span></p>\n                    <small class=\"text-muted\">as of 6:45 PM</small>\n                  </div>\n                </div>\n              </div>\n            </button>\n          </ng-template>\n\n          <ng-template ngbPanelContent>\n            <div class=\"report-table\">\n              <table id=\"doneTable\">\n                <thead>\n                  <tr>\n                    <th width=\"80%\">Worked on</th>\n                    <th width=\"10%\">Link</th>\n                    <th width=\"10%\">Hours</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Creating the service to connect to flask\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                  \n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Succesfully connecting to aws cognito for login\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Transferring the bootstrap to node modules using npm\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"todoTable\">\n                <thead>\n                  <tr>\n                    <th width=\"80%\">To do</th>\n                    <th width=\"10%\">Link</th>\n                    <th width=\"10%\">&nbsp;</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Creating an endpoint to change the user's password. (This is needed so we could use the token that is passed to us)\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"issuesTable\">\n                \n                <tbody>\n                  <tr>\n                    <p class=\"text-muted\">No Issues</p>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </ng-template>\n        </ngb-panel>\n\n        <ngb-panel>\n          <ng-template ngbPanelHeader let-opened=\"opened\">\n            <button class=\"btn\" [ngClass]=\"{'active': opened}\" ngbPanelToggle>\n              <div class=\"d-flex align-items-center\">\n                <div class=\"report-stream-date text-center\">\n                  <p class=\"text-primary mb-0\">23</p>\n                  <small class=\"text-muted\">TUE</small>\n                </div>\n                <span class=\"date-indicator\"></span>\n                <div class=\"d-flex justify-content-between\">\n                  <div class=\"mr-5\">\n                    <p class=\"mb-0 pane-title\">Designs</p>\n                    <small class=\"\">No issues</small>\n                  </div>\n                  <div class=\"text-left\">\n                    <p class=\"mb-0 d-block\">Total hours: <span>8</span></p>\n                    <small class=\"text-muted\">as of 6:45 PM</small>\n                  </div>\n                </div>\n              </div>\n            </button>\n          </ng-template>\n\n          <ng-template ngbPanelContent>\n            <div class=\"report-table\">\n              <table id=\"doneTable\">\n                <thead>\n                  <tr>\n                    <th width=\"80%\">Worked on</th>\n                    <th width=\"10%\">Link</th>\n                    <th width=\"10%\">Hours</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Creating the service to connect to flask\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                  \n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Succesfully connecting to aws cognito for login\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Transferring the bootstrap to node modules using npm\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"todoTable\">\n                <thead>\n                  <tr>\n                    <th width=\"80%\">To do</th>\n                    <th width=\"10%\">Link</th>\n                    <th width=\"10%\">&nbsp;</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Creating an endpoint to change the user's password. (This is needed so we could use the token that is passed to us)\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"issuesTable\">\n                \n                <tbody>\n                  <tr>\n                    <p class=\"text-muted\">No Issues</p>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </ng-template>\n        </ngb-panel>\n\n        <ngb-panel>\n          <ng-template ngbPanelHeader let-opened=\"opened\">\n            <button class=\"btn\" [ngClass]=\"{'active': opened}\" ngbPanelToggle>\n              <div class=\"d-flex align-items-center\">\n                <div class=\"report-stream-date text-center\">\n                  <p class=\"text-primary mb-0\">23</p>\n                  <small class=\"text-muted\">TUE</small>\n                </div>\n                <span class=\"date-indicator\"></span>\n                <div class=\"d-flex justify-content-between\">\n                  <div class=\"mr-5\">\n                    <p class=\"mb-0 pane-title\">Designs</p>\n                    <small class=\"\">No issues</small>\n                  </div>\n                  <div class=\"text-left\">\n                    <p class=\"mb-0 d-block\">Total hours: <span>8</span></p>\n                    <small class=\"text-muted\">as of 6:45 PM</small>\n                  </div>\n                </div>\n              </div>\n            </button>\n          </ng-template>\n\n          <ng-template ngbPanelContent>\n            <div class=\"report-table\">\n              <table id=\"doneTable\">\n                <thead>\n                  <tr>\n                    <th width=\"80%\">Worked on</th>\n                    <th width=\"10%\">Link</th>\n                    <th width=\"10%\">Hours</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Creating the service to connect to flask\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                  \n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Succesfully connecting to aws cognito for login\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Transferring the bootstrap to node modules using npm\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"todoTable\">\n                <thead>\n                  <tr>\n                    <th width=\"80%\">To do</th>\n                    <th width=\"10%\">Link</th>\n                    <th width=\"10%\">&nbsp;</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Creating an endpoint to change the user's password. (This is needed so we could use the token that is passed to us)\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"issuesTable\">\n                \n                <tbody>\n                  <tr>\n                    <p class=\"text-muted\">No Issues</p>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </ng-template>\n        </ngb-panel>\n\n        <ngb-panel>\n          <ng-template ngbPanelHeader let-opened=\"opened\">\n            <button class=\"btn\" [ngClass]=\"{'active': opened}\" ngbPanelToggle>\n              <div class=\"d-flex align-items-center\">\n                <div class=\"report-stream-date text-center\">\n                  <p class=\"text-primary mb-0\">23</p>\n                  <small class=\"text-muted\">TUE</small>\n                </div>\n                <span class=\"date-indicator\"></span>\n                <div class=\"d-flex justify-content-between\">\n                  <div class=\"mr-5\">\n                    <p class=\"mb-0 pane-title\">Designs</p>\n                    <small class=\"\">No issues</small>\n                  </div>\n                  <div class=\"text-left\">\n                    <p class=\"mb-0 d-block\">Total hours: <span>8</span></p>\n                    <small class=\"text-muted\">as of 6:45 PM</small>\n                  </div>\n                </div>\n              </div>\n            </button>\n          </ng-template>\n\n          <ng-template ngbPanelContent>\n            <div class=\"report-table\">\n              <table id=\"doneTable\">\n                <thead>\n                  <tr>\n                    <th width=\"80%\">Worked on</th>\n                    <th width=\"10%\">Link</th>\n                    <th width=\"10%\">Hours</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Creating the service to connect to flask\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                  \n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Succesfully connecting to aws cognito for login\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Transferring the bootstrap to node modules using npm\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                      <p>2</p>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"todoTable\">\n                <thead>\n                  <tr>\n                    <th width=\"80%\">To do</th>\n                    <th width=\"10%\">Link</th>\n                    <th width=\"10%\">&nbsp;</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <p class=\"report-name\">\n                        Creating an endpoint to change the user's password. (This is needed so we could use the token that is passed to us)\n                      </p>\n                    </td>\n                    <td>\n                      <a href=\"\">\n                        <i class=\"fal fa-external-link\"></i>\n                      </a>\n                    </td>\n                    <td>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table id=\"issuesTable\">\n                \n                <tbody>\n                  <tr>\n                    <p class=\"text-muted\">No Issues</p>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </ng-template>\n        </ngb-panel>\n        </ngb-accordion>\n      </div>\n      <!-- <div id=\"reportStream\" class=\"accordion\">\n\n        <div class=\"report-stream-item item-collapse\" data-toggle=\"collapse\" data-target=\"#report1\" aria-expadend=\"true\" aria-controls=\"report1\">\n          <div class=\"d-flex align-items-center\">\n            <div class=\"report-stream-date text-center\">\n              <p class=\"text-primary mb-0\">23</p>\n              <small class=\"text-muted\">TUE</small>\n            </div>\n            <span class=\"date-indicator \"></span>\n            <div class=\"d-flex justify-content-between\">\n              <div class=\"mr-5\">\n                <p class=\"mb-0 pane-title\">Designs</p>\n                <small class=\"\">No issues</small>\n              </div>\n              <div class=\"text-left\">\n                <p class=\"mb-0 d-block\">Total hours: <span>8</span></p>\n                <small class=\"text-muted\">as of 6:45 PM</small>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"report-table collapse show\" id=\"report1\" class=\"collapse show\" data-parent=\"#reportStream\">\n            <table id=\"doneTable\">\n              <thead>\n                <tr>\n                  <th width=\"80%\">Worked on</th>\n                  <th width=\"10%\">Link</th>\n                  <th width=\"10%\">Hours</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>\n                    <p class=\"report-name\">\n                      Creating the service to connect to flask\n                    </p>\n                  </td>\n                  <td>\n                    <a href=\"\">\n                      <i class=\"fal fa-external-link\"></i>\n                    </a>\n                  </td>\n                  <td>\n                    <p>2</p>\n                  </td>\n                </tr>\n                \n                <tr>\n                  <td>\n                    <p class=\"report-name\">\n                      Succesfully connecting to aws cognito for login\n                    </p>\n                  </td>\n                  <td>\n                    <a href=\"\">\n                      <i class=\"fal fa-external-link\"></i>\n                    </a>\n                  </td>\n                  <td>\n                    <p>2</p>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <p class=\"report-name\">\n                      Transferring the bootstrap to node modules using npm\n                    </p>\n                  </td>\n                  <td>\n                    <a href=\"\">\n                      <i class=\"fal fa-external-link\"></i>\n                    </a>\n                  </td>\n                  <td>\n                    <p>2</p>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            <table id=\"todoTable\">\n              <thead>\n                <tr>\n                  <th width=\"80%\">To do</th>\n                  <th width=\"10%\">Link</th>\n                  <th width=\"10%\">&nbsp;</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>\n                    <p class=\"report-name\">\n                      Creating an endpoint to change the user's password. (This is needed so we could use the token that is passed to us)\n                    </p>\n                  </td>\n                  <td>\n                    <a href=\"\">\n                      <i class=\"fal fa-external-link\"></i>\n                    </a>\n                  </td>\n                  <td>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            <table id=\"issuesTable\">\n              \n              <tbody>\n                <tr>\n                  <p class=\"text-muted\">No Issues</p>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n\n        <div class=\"report-stream-item\" data-toggle=\"collapse\" data-target=\"#report2\" aria-expadend=\"true\" aria-controls=\"report2\">\n          <div class=\"d-flex align-items-center\">\n            <div class=\"report-stream-date text-center\">\n              <p class=\"text-primary mb-0\">23</p>\n              <small class=\"text-muted\">TUE</small>\n            </div>\n            <span class=\"date-indicator \"></span>\n            <div class=\"d-flex justify-content-between\">\n              <div class=\"mr-5\">\n                <p class=\"mb-0 pane-title\">Designs</p>\n                <small class=\"text-danger\">1 Pending Issue</small>\n              </div>\n              <div class=\"text-left\">\n                <p class=\"mb-0 d-block\">Total hours: <span>8</span></p>\n                <small class=\"text-muted\">as of 6:45 PM</small>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"report-table collapse\" id=\"report2\" class=\"collapse show\" data-parent=\"#reportStream\">\n            <table id=\"doneTable\">\n              <thead>\n                <tr>\n                  <th width=\"80%\">Worked on</th>\n                  <th width=\"10%\">Link</th>\n                  <th width=\"10%\">Hours</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>\n                    <p class=\"report-name\">\n                      Adding error handling for login page\n                    </p>\n                  </td>\n                  <td>\n                    <a href=\"\">\n                      <i class=\"fal fa-external-link\"></i>\n                    </a>\n                  </td>\n                  <td>\n                    <p>2</p>\n                  </td>\n                </tr>\n                \n                <tr>\n                  <td>\n                    <p class=\"report-name\">\n                      Making the data from angular dynamic on login page\n                    </p>\n                  </td>\n                  <td>\n                    <a href=\"\">\n                      <i class=\"fal fa-external-link\"></i>\n                    </a>\n                  </td>\n                  <td>\n                    <p>2</p>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <p class=\"report-name\">\n                      Trying to find a workaround to app.run\n                    </p>\n                  </td>\n                  <td>\n                    <a href=\"\">\n                      <i class=\"fal fa-external-link\"></i>\n                    </a>\n                  </td>\n                  <td>\n                    <p>2</p>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            <table id=\"todoTable\">\n              <thead>\n                <tr>\n                  <th width=\"80%\">To do</th>\n                  <th width=\"10%\">Link</th>\n                  <th width=\"10%\">&nbsp;</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>\n                    <p class=\"report-name\">\n                      Creating an endpoint to change the user's password. (This is needed so we could use the token that is passed to us)\n                    </p>\n                  </td>\n                  <td>\n                    <a href=\"\">\n                      <i class=\"fal fa-external-link\"></i>\n                    </a>\n                  </td>\n                  <td>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <p class=\"report-name\">\n                      Find a workaround on app.run\n                    </p>\n                  </td>\n                  <td>\n                    <a href=\"\">\n                      <i class=\"fal fa-external-link\"></i>\n                    </a>\n                  </td>\n                  <td>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            <table id=\"issuesTable\">\n              <thead>\n                <tr>\n                  <th width=\"80%\">Issues</th>\n                  <th width=\"10%\">Link</th>\n                  <th width=\"10%\">Status</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>\n                    <p class=\"report-name\">\n                      Finding out why the updated server always returns 404 (the aws lambda won't execute the function run specifically the app.run.)\n                    </p>\n                  </td>\n                  <td>\n                    <a href=\"\">\n                      <i class=\"fal fa-external-link\"></i>\n                    </a>\n                  </td>\n                  <td>\n                    <span class=\"issue-status-mark unresolved\"></span>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"report-stream-item\" data-toggle=\"collapse\" data-target=\"#report3\" aria-expadend=\"true\" aria-controls=\"report3\">\n          <div class=\"d-flex align-items-center\">\n            <div class=\"report-stream-date text-center\">\n              <p class=\"text-primary mb-0\">23</p>\n              <small class=\"text-muted\">TUE</small>\n            </div>\n            <span class=\"date-indicator \"></span>\n            <div class=\"d-flex justify-content-between\">\n              <div class=\"mr-5\">\n                <p class=\"mb-0 pane-title\">Designs</p>\n                <small class=\"\">No Issues</small>\n              </div>\n              <div class=\"text-left\">\n                <p class=\"mb-0 d-block\">Total hours: <span>8</span></p>\n                <small class=\"text-muted\">as of 6:45 PM</small>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"report-table collapse\" id=\"report3\" class=\"collapse show\" data-parent=\"#reportStream\">\n            <table id=\"doneTable\">\n              <thead>\n                <tr>\n                  <th width=\"80%\">Worked on</th>\n                  <th width=\"10%\">Link</th>\n                  <th width=\"10%\">Hours</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>\n                    <p class=\"report-name\">\n                      Fixing the app.run\n                    </p>\n                  </td>\n                  <td>\n                    <a href=\"\">\n                      <i class=\"fal fa-external-link\"></i>\n                    </a>\n                  </td>\n                  <td>\n                    <p>2</p>\n                  </td>\n                </tr>\n                \n                <tr>\n                  <td>\n                    <p class=\"report-name\">\n                      Updating the server, it should prompt if the user or password is wrong (https://u56haxzvke.execute-api.uswest-2.amazonaws.com/dev)\n                    </p>\n                  </td>\n                  <td>\n                    <a href=\"\">\n                      <i class=\"fal fa-external-link\"></i>\n                    </a>\n                  </td>\n                  <td>\n                    <p>2</p>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <p class=\"report-name\">\n                      Making two test endpoints for dynamodb, post and get\n                    </p>\n                  </td>\n                  <td>\n                    <a href=\"\">\n                      <i class=\"fal fa-external-link\"></i>\n                    </a>\n                  </td>\n                  <td>\n                    <p>2</p>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <p class=\"report-name\">\n                      Adding error handling for photo and fields on user validation.\n                    </p>\n                  </td>\n                  <td>\n                    <a href=\"\">\n                      <i class=\"fal fa-external-link\"></i>\n                    </a>\n                  </td>\n                  <td>\n                    <p>2</p>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            <table id=\"todoTable\">\n              <thead>\n                <tr>\n                  <th width=\"80%\">To do</th>\n                  <th width=\"10%\">Link</th>\n                  <th width=\"10%\">&nbsp;</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>\n                    <p class=\"report-name\">\n                      Responding to another challenge that the aws cognito gave us. (\"MFA_SETUP\")\n                    </p>\n                  </td>\n                  <td>\n                    <a href=\"\">\n                      <i class=\"fal fa-external-link\"></i>\n                    </a>\n                  </td>\n                  <td>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <p class=\"report-name\">\n                      Redirecting the user validation to login page when refreshed.\n                    </p>\n                  </td>\n                  <td>\n                    <a href=\"\">\n                      <i class=\"fal fa-external-link\"></i>\n                    </a>\n                  </td>\n                  <td>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            <table id=\"issuesTable\">\n              \n              <tbody>\n                <tr>\n                  <p class=\"text-muted\">No Issues</p>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div> -->\n      \n    </div>\n  </aside>\n</div>"

/***/ }),

/***/ "./src/app/components/projects/projects/projects.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/projects/projects/projects.component.ts ***!
  \********************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/components/projects/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/components/projects/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/public/login/login.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/public/login/login.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/public/login/login.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/public/login/login.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form.form\" (ngSubmit)=\"onSubmit(form.form)\">\n    <span [hidden]=\"!form.err\">Invalid Email/Password. Please try again.</span>\n    <div>\n        <label>Email:</label>\n        <input formControlName=\"email\" type=\"text\">\n        <span [hidden]=\"form.valid('email')\">Invalid email format.</span>\n    </div>\n    <div>\n        <label>Password:</label>\n        <input formControlName=\"password\" type=\"password\">\n        <span [hidden]=\"form.valid('password')\">Password is required.</span>\n    </div>\n    <button type=\"submit\">Login</button>\n</form>\n\n<a href=\"{{ slack.config.authorize_url }}\">Login via Slack</a>"

/***/ }),

/***/ "./src/app/components/public/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/public/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _commons_models_login_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commons/models/login.models */ "./src/app/commons/models/login.models.ts");
/* harmony import */ var _commons_forms_login_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../commons/forms/login.forms */ "./src/app/commons/forms/login.forms.ts");
/* harmony import */ var _commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../commons/services/auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
/* harmony import */ var _commons_services_auth_slack_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../commons/services/auth/slack.service */ "./src/app/commons/services/auth/slack.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, state, slack) {
        this.auth = auth;
        this.state = state;
        this.slack = slack;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // load slack config
        this.slack.getConfig();
        // initialize the form.
        this.form = new _commons_forms_login_forms__WEBPACK_IMPORTED_MODULE_3__["LoginForm"](new _commons_models_login_models__WEBPACK_IMPORTED_MODULE_2__["Login"]);
        console.log(this.slack.config);
    };
    LoginComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        // send the form data to the backend if the value
        // format are valid.
        if (valid) {
            this.auth.login(value)
                .then(function (resp) {
                _this.state.go('dashboard');
            })
                .catch(function (err) {
                _this.form.err = err;
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/public/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/public/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__["StateService"],
            _commons_services_auth_slack_service__WEBPACK_IMPORTED_MODULE_5__["SlackService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/public/public.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/public/public.module.ts ***!
  \****************************************************/
/*! exports provided: PublicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicModule", function() { return PublicModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/public/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PublicModule = /** @class */ (function () {
    function PublicModule() {
    }
    PublicModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__["UIRouterModule"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]]
        })
    ], PublicModule);
    return PublicModule;
}());



/***/ }),

/***/ "./src/app/components/public/public.states.ts":
/*!****************************************************!*\
  !*** ./src/app/components/public/public.states.ts ***!
  \****************************************************/
/*! exports provided: PUBLIC_STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUBLIC_STATES", function() { return PUBLIC_STATES; });
/* harmony import */ var _commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../commons/utils/layout.utils */ "./src/app/commons/utils/layout.utils.ts");
/* harmony import */ var _commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commons/utils/security.utils */ "./src/app/commons/utils/security.utils.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/public/login/login.component.ts");



var PUBLIC_STATES = [
    {
        name: 'login',
        url: '/login/',
        views: Object(_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["ContentOnly"])(_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"])
    },
    {
        name: 'logout',
        url: '/logout/',
        onEnter: _commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__["Disconnect"]
    },
    {
        name: 'slackauthredirect',
        url: '/auth/slack/redirect/:token/',
        onEnter: _commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__["SlackAuthRedirect"]
    }
];


/***/ }),

/***/ "./src/app/components/users/dashboard/dashboard.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/users/dashboard/dashboard.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/users/dashboard/dashboard.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/users/dashboard/dashboard.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center-section feed-container\">\n  <section class=\"feed-section\" *ngIf=\"feed.q\" (scroll)=\"scrollfeed($event)\">\n    <!-- FEED CARDS -->\n    <div class=\"feed-card card\" [ngClass]=\"{'announcement-card': item.instance_type === 'event'}\" *ngFor=\"let item of feed.q\">\n\n      <div *ngIf=\"item.instance_type === 'standup'\">\n        <div class=\"d-flex justify-content-between align-items-center\">\n          <div class=\"d-flex\">\n            <div class=\"avatar-sm\" [ngStyle]=\"{'background-image': 'url(' + item.instance.user.image + ')'}\" data-rjs=\"3\">\n            </div>\n            <div class=\"profile-info\">\n              <div class=\"d-flex align-items-center\">\n                <a href=\"\" class=\"mr-2\">{{ item.instance.user.full_name }}</a>\n                <span class=\"timestamp\">{{ item.instance.date_created | date: \"MMM d, h:mm a\" }}</span>\n              </div>\n              <span *ngIf=\"item.instance.blockers.length === 0\">No Issues</span>\n              <span *ngIf=\"item.instance.blockers.length > 0\" class=\"text-danger\">{{ item.instance.pending_issues }} pending issue{{ item.instance.pending_issues > 1 ? 's': '' }}</span>\n            </div>\n          </div>\n          <div class=\"d-flex align-items-start\">\n            <div class=\"feed-summary\">\n              <a href=\"\">#{{ item.instance.project.channel_name }}</a>\n              <p>{{ item.instance.total_hours }} hours</p>\n            </div>\n            <a uiSref=\"dashboard-report\" [uiParams]=\"{id: item.instance.id}\" class=\"ml-2 expand-card\"><i class=\"fas fa-expand-alt\"></i></a>\n          </div>\n        </div>\n        <div *ngIf=\"item.instance.blockers.length > 0\" class=\"details pt-4\">\n          <div class=\"d-flex justify-content-between\">\n            <small><strong>Blockers</strong></small>\n            \n          </div>\n          <ol class=\"pl-3 details-list\">\n            <li class=\"issue-details\" [ngClass]=\"{'resolved': b.is_fixed, 'unresolved': !b.is_fixed}\" *ngFor=\"let b of item.instance.blockers\">\n              <p>{{ b.content }}</p>\n              <a href=\"{{ b.reference }}\"><small>{{ b.reference }}</small></a>\n            </li>\n          </ol>\n        </div>\n      </div>\n\n      <div *ngIf=\"item.instance_type === 'event'\">\n        <div class=\"d-flex justify-content-between align-items-center mb-3\">\n          <h5 class=\"card-title mb-0\">{{ item.instance.title }}</h5>\n          <button class=\"btn btn-cta-primary\">\n            <i class=\"far fa-calendar mr-1\"></i>\n            Add to Calendar\n          </button>\n        </div>\n        <p>{{ item.instance.content }}</p>\n        <div class=\"d-flex\">\n          <div class=\"mr-4\">\n            <label class=\"mb-0\">\n              <small class=\"text-muted\">Mentions:</small>\n            </label>\n            <p class=\"text-strong\">Everyone</p>\n          </div>\n          <div class=\"mr-4\">\n            <label class=\"mb-0\">\n              <small class=\"text-muted\">Schedule:</small>\n            </label>\n            <p class=\"text-strong\">{{ item.instance.event_date | date: \"EEE, MMM d\" }} | {{ item.instance.start_time | date: \"h:mm a\" }} - {{ item.instance.end_time | date: \"h:mm a\" }}</p>\n          </div>\n          <div class=\"mr-4\">\n            <label class=\"mb-0\">\n              <small class=\"text-muted\">Posted by:</small>\n            </label>\n            <div class=\"avatar-xs\" [ngStyle]=\"{'background-image': 'url(' + item.instance.organizer.image + ')'}\" data-rjs=\"3\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- FEED CARDS -->\n  </section>\n\n  <aside class=\"stat-pane\">\n    <div class=\"calendar\">\n      <div class=\"event-container\">\n        <div class=\"d-flex align-items-center\">\n          <span class=\"date\">{{ server.now | date: \"d\" }}</span>\n          <div>\n            <div class=\"d-flex\">\n              <div class=\"month\">{{ server.now | date: \"MMM\" }}</div>\n              <div class=\"year\">{{ server.now | date: \"y\" }}</div>\n            </div>\n            <div class=\"day\">{{ server.now | date: \"EEEE\" }}</div>\n          </div>\n          \n        </div>\n        \n        <div class=\"notifications\">\n          <div class=\"d-flex align-items-center justify-content-between w-100\">\n            <!-- <div>\n              <p class=\"mb-0 text-muted\">\n                <i class=\"fas fa-bolt\"></i>\n                Hooray! no notifications for today!\n              </p>\n            </div> -->\n            <a href=\"\">\n              <i class=\"fal fa-plus\"></i>\n            </a>\n          </div>\n\n          <div class=\"stat-pane-item\" *ngFor=\"let i of feed.nEvents\">\n            <div class=\"stat-section-title\">\n              <a href=\"\">\n                <i class=\"far fa-bell\"></i>\n                <span>{{ i.title }}</span>\n              </a>\n              <small class=\"text-muted\">TODAY, {{ i.start_time | date: \"hh:mm a\" }}</small>\n            </div>\n            <div class=\"stat-section-details\">\n              <p>{{ i.content }}</p>\n            </div>\n          </div>\n\n\n          <div class=\"stat-pane-item\" *ngIf=\"feed.pendingIssues\">\n            <div class=\"stat-section-title\">\n              <a href=\"\">\n                <i class=\"far fa-times-hexagon\"></i>\n                <span>You have {{ feed.getIssueCount() }} pending issues</span>\n              </a>\n              <small class=\"text-muted\">3 days ago</small>\n            </div>\n            <div class=\"stat-section-details\" *ngFor=\"let i of feed.pendingIssues\">\n              <div  class=\"mb-2\">\n                <a href=\"\">#{{ i.project.channel_name }}</a>\n              </div>\n              <p *ngFor=\"let issue of i.blockers; let count=index\">{{ count + 1 }}. {{ issue.content }}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      \n      <div class=\"monthly-calendar\">\n        <h6 class=\"mb-2\">Calendar</h6>\n        <div class=\"calendar-header\">\n          <span>S</span>\n          <span>M</span>\n          <span>T</span>\n          <span>W</span>\n          <span>T</span>\n          <span>F</span>\n          <span>S</span>\n        </div>\n        <div class=\"currentMonth\" id=\"datesAccordion\">\n          <div class=\"weekview\" id=\"currentWeek\">\n            <span>1</span>\n            <span class=\"today\">2</span>\n            <span>3</span>\n            <span>4</span>\n            <span>5</span>\n            <span>6</span>\n            <span>7</span>\n          </div>\n          <div class=\"wholeMonth collapse\" id=\"wholeMonth\" aria-lablledby=\"currentWeek\" data-parent=\"#datesAccordion\">\n            <div class=\"weekview\">\n              <span>8</span>\n              <span>9</span>\n              <span>10</span>\n              <span>11</span>\n              <span>12</span>\n              <span>13</span>\n              <span>14</span>\n            </div>\n            <div class=\"weekview\">\n              <span>15</span>\n              <span>16</span>\n              <span>17</span>\n              <span>18</span>\n              <span>19</span>\n              <span>20</span>\n              <span>21</span>\n            </div>\n            <div class=\"weekview\">\n              <span>22</span>\n              <span>23</span>\n              <span>24</span>\n              <span>25</span>\n              <span>26</span>\n              <span>27</span>\n              <span>28</span>\n            </div>\n            <div class=\"weekview\">\n              <span>29</span>\n              <span>30</span>\n              <span>31</span>\n              <span class=\"idleDay\">1</span>\n              <span class=\"idleDay\">2</span>\n              <span class=\"idleDay\">3</span>\n              <span class=\"idleDay\">4</span>\n            </div>\n          </div>\n          <a href=\"\" class=\"calendar-expander\" data-toggle=\"collapse\" data-target=\"#wholeMonth\" aria-expanded=\"true\" aria-controls=\"wholeMonth\"><i class=\"fal fa-angle-double-down\"></i></a>\n        </div>\n      </div>\n      <div class=\"statistics\">\n        <h6 class=\"mb-4\">Weekly hours</h6>\n        <div class=\"graph\">\n          <div class=\"scale\">\n            <div class=\"value\">8</div>\n            <div class=\"value\">6</div>\n            <div class=\"value\">4</div>\n            <div class=\"value\">2</div>\n            <div class=\"value\">0</div>\n          </div>\n          <div class=\"bars\">\n            <div class=\"bar\" style=\"height:0%\"></div>\n            <div class=\"bar short\" style=\"height:10%\"></div>\n            <div class=\"bar\" style=\"height:100%\"></div>\n            <div class=\"bar\" style=\"height:80%\"></div>\n            <div class=\"bar\" style=\"height:100%\"></div>\n            <div class=\"bar\" style=\"height:100%\"></div>\n            <div class=\"bar\" style=\"height:0%\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"statistics pt-0\">\n        <div class=\"d-flex justify-content-between mb-2\">\n          <h6>Login History</h6>\n          <div class=\"legend\">\n            <div class=\"am\">AM</div>\n            <div class=\"pm\">PM</div>\n          </div>\n        </div>\n        <div class=\"graph\">\n          <div class=\"log-data\">\n            <div class=\"date-label\">\n              <span>Sun</span>\n              <span>Mon</span>\n              <span>Tue</span>\n              <span>Wed</span>\n              <span>Thu</span>\n              <span>Fri</span>\n              <span>Sat</span>\n            </div>\n            <div class=\"time-in time-data\">\n               <span class=\"time\">- -</span>\n               <span class=\"time\">9:00 <i class=\"am\"></i></span>\n               <span class=\"time\">9:00 <i class=\"am\"></i></span>\n               <span class=\"time\">- - <i class=\"am\"></i></span>\n               <span class=\"time\">9:00 <i class=\"am\"></i></span>\n               <span class=\"time\">9:00 <i class=\"am\"></i></span>\n               <span class=\"time\">- -</span>\n            </div>\n            <div class=\"time-out time-data\">\n               <span class=\"time\">- -</span>\n               <span class=\"time\">9:00 <i class=\"pm\"></i></span>\n               <span class=\"time\">9:00 <i class=\"pm\"></i></span>\n               <span class=\"time\">9:00 <i class=\"pm\"></i></span>\n               <span class=\"time\">9:00 <i class=\"pm\"></i></span>\n               <span class=\"time\">9:00 <i class=\"pm\"></i></span>\n               <span class=\"time\">- -</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"other-sections\">\n        <div class=\"stat-section-title\">\n          <a href=\"\">\n            <i class=\"far fa-anchor\"></i>\n            <span>You have 2 on going projects</span>\n          </a>\n          \n        </div>\n        <div class=\"stat-pane-item d-flex justify-content-between align-items-center\">\n          <div class=\"stat-section-details mb-2\">\n            <a href=\"\" class=\"\">#cl-Helpdesk</a>\n          </div>\n          <small class=\"text-muted\">456 hours total</small>\n        </div>\n        <div class=\"stat-pane-item d-flex justify-content-between align-items-center\">\n          <div class=\"stat-section-details mb-2\">\n            <a href=\"\" class=\"\">#cl-Design</a>\n          </div>\n          <small class=\"text-muted\">45 hours total</small>\n        </div>\n      </div>\n\n    </div>\n  </aside>\n</div>"

/***/ }),

/***/ "./src/app/components/users/dashboard/dashboard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/users/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _commons_services_utils_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commons/services/utils/nav.service */ "./src/app/commons/services/utils/nav.service.ts");
/* harmony import */ var _commons_services_utils_feed_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../commons/services/utils/feed.service */ "./src/app/commons/services/utils/feed.service.ts");
/* harmony import */ var _commons_services_auth_server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../commons/services/auth/server.service */ "./src/app/commons/services/auth/server.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(nav, feed, state, server, ref) {
        this.nav = nav;
        this.feed = feed;
        this.state = state;
        this.server = server;
        this.ref = ref;
        this.now = new Date();
        // nav configuration
        // TODO: this sucks!. find a better solution
        this.nav.setNav('Dashboard');
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // reload the feed item list except on
        // dashboard-report.
        if (!this.feed.noreload && this.state.$current.name !== 'dashboard-report') {
            this.feed.getFeed();
        }
        else {
            this.feed.noreload = false;
        }
        // load the notification events data.
        this.feed.getNotificationEvents();
        // load the notification pending issues data.
        this.feed.getNotificationPendingIssues();
    };
    DashboardComponent.prototype.scrollfeed = function (event) {
        // captures the scroll event on the feed-section.
        // it handles the call to the backend when the scroll
        // reach its max height.
        var cHeight = event.target.scrollHeight;
        var scrollHeight = event.target.scrollTop;
        // offset height. this is the sum of the margin/interval
        // of each element inside the `cHeight`. can change based
        // on the design template.
        // margin-height: 708, spacing-height: 100 # spacer so that this
        // sends a call to the backend before the user reach the last item.
        var maxHeight = cHeight - (708 + 100);
        if (scrollHeight >= maxHeight) {
            this.feed.loadMoreFeed();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DashboardComponent.prototype, "scrollfeed", null);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/users/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/users/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_commons_services_utils_nav_service__WEBPACK_IMPORTED_MODULE_2__["NavService"],
            _commons_services_utils_feed_service__WEBPACK_IMPORTED_MODULE_3__["FeedService"],
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__["StateService"],
            _commons_services_auth_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/users/dashboard/side-report/side-report.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/users/dashboard/side-report/side-report.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/users/dashboard/side-report/side-report.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/users/dashboard/side-report/side-report.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"side-modal\" [ngClass]=\"{'open': open}\">\n  <a class=\"closeModal\">\n    <i class=\"fal fa-times\"></i>\n  </a>\n  <div class=\"report-feed\">\n    <div class=\"mb-4\">\n      <div class=\"mb-4 d-flex justify-content-between align-items-center\">\n        <div>\n          <h5 class=\"pane-title mb-0\">{{ report.date_created | date: \"EEEE\" }}</h5>\n          <label class=\"text-muted\"><small>{{ report.date_created | date: \"MMMM dd, y\" }}</small></label>\n        </div>\n        <a href=\"#\" class=\"\">View report summary <i class=\"fal fa-long-arrow-right ml-2\"></i></a>\n      </div>\n      <div class=\"d-flex\">\n        <div class=\"mr-5\">\n          <h6 class=\"mb-0 pane-title\">#{{ report.project.channel_name }}</h6>\n          <label *ngIf=\"report.blockers.length === 0\"><small>No Issues</small></label>\n          <label *ngIf=\"report.blockers.length > 0\" class=\"text-danger\"><small>{{ report.pending_issues }} Pending Issue{{ report.pending_issues > 1 ? 's': '' }}</small></label>\n        </div>\n        <div class=\"text-left\">\n          <h6 class=\"mb-0 d-block pane-title\">Hours:  <span>{{ report.total_hours }}</span></h6>\n          <label class=\" text-muted\"><small>as of {{ report.date_created | date: \"h:mm a\" }}</small></label>\n        </div>\n      </div>\n    </div>\n    <div class=\"report-table\">\n      <table id=\"doneTable\">\n        <thead>\n          <tr>\n            <th width=\"80%\">Worked on</th>\n            <th width=\"10%\">Reference</th>\n            <th width=\"10%\">Hours</th>\n          </tr>\n        </thead>\n        <tbody>\n\n          <tr *ngFor=\"let i of report.done\">\n            <td>\n              <p class=\"report-name\">\n                {{ i.content }} \n              </p>\n            </td>\n            <td>\n              <a [href]=\"i.reference | sanitizeurl\">\n                <i class=\"fal fa-external-link\"></i>\n              </a>\n            </td>\n            <td>\n              <p>{{ i.hours }}</p>\n            </td>\n          </tr>\n\n        </tbody>\n      </table>\n\n      <table id=\"todoTable\">\n        <thead>\n          <tr>\n            <th width=\"80%\">To do</th>\n            <th width=\"10%\">Reference</th>\n            <th width=\"10%\">&nbsp;</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let i of report.todo\">\n            <td>\n              <p class=\"report-name\">\n                {{ i.content }}\n              </p>\n            </td>\n            <td>\n              <a [href]=\"i.reference | sanitizeurl\">\n                <i class=\"fal fa-external-link\"></i>\n              </a>\n            </td>\n            <td>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n      <table id=\"issuesTable\">\n        <thead>\n          <tr>\n            <th width=\"80%\">Issues</th>\n            <th width=\"10%\">Reference</th>\n            <th width=\"10%\">Status</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let i of report.blockers\">\n            <td>\n              <p class=\"report-name\">\n                {{ i.content }}\n              </p>\n            </td>\n            <td>\n              <a [href]=\"i.reference | sanitizeurl\">\n                <i class=\"fal fa-external-link\"></i>\n              </a>\n            </td>\n            <td>\n              <span class=\"issue-status-mark\" [ngClass]=\"{'unresolved': !report.is_fixed, 'resolved': report.is_fixed}\"></span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</aside>"

/***/ }),

/***/ "./src/app/components/users/dashboard/side-report/side-report.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/users/dashboard/side-report/side-report.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SideReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideReportComponent", function() { return SideReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _commons_services_utils_feed_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../commons/services/utils/feed.service */ "./src/app/commons/services/utils/feed.service.ts");
/* harmony import */ var _commons_services_history_standup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../commons/services/history/standup.service */ "./src/app/commons/services/history/standup.service.ts");
/* harmony import */ var _commons_models_history_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../commons/models/history.models */ "./src/app/commons/models/history.models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SideReportComponent = /** @class */ (function () {
    function SideReportComponent(state, feed, history) {
        this.state = state;
        this.feed = feed;
        this.history = history;
        this.open = false;
        this.report = new _commons_models_history_models__WEBPACK_IMPORTED_MODULE_4__["Standup"];
    }
    SideReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        // setTimout is only used for the animation effect.
        // this idea is not the best but it works.
        // IMPORTANT: `this.open` should be set to true otherwise
        // redirecting to this page will not work
        setTimeout(function () { _this.open = true; }, 20);
        // enable `FeedService.noreload` so that the feedlist
        // will not reload when this popup is closed.
        this.feed.noreload = true;
        this.history.getReport(this.state.params.id)
            .subscribe(function (resp) {
            _this.report = new _commons_models_history_models__WEBPACK_IMPORTED_MODULE_4__["Standup"](resp);
        });
    };
    SideReportComponent.prototype.close = function (event) {
        var _this = this;
        // close the side report detail if the mouse
        // click captured is outside the section.
        var el = event.target, container = document.querySelector('.side-modal');
        // note: `this.open` serves as an indicator that the click
        // event happens after the page is initialize.
        if (!container.contains(el) && this.open) {
            this.open = false;
            // setTimout is only used for the animation effect.
            // this idea is not the best but it works.
            setTimeout(function () { _this.state.go('dashboard'); }, 300);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SideReportComponent.prototype, "close", null);
    SideReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-report',
            template: __webpack_require__(/*! ./side-report.component.html */ "./src/app/components/users/dashboard/side-report/side-report.component.html"),
            styles: [__webpack_require__(/*! ./side-report.component.css */ "./src/app/components/users/dashboard/side-report/side-report.component.css")]
        }),
        __metadata("design:paramtypes", [_uirouter_angular__WEBPACK_IMPORTED_MODULE_1__["StateService"],
            _commons_services_utils_feed_service__WEBPACK_IMPORTED_MODULE_2__["FeedService"],
            _commons_services_history_standup_service__WEBPACK_IMPORTED_MODULE_3__["StandupService"]])
    ], SideReportComponent);
    return SideReportComponent;
}());



/***/ }),

/***/ "./src/app/components/users/setting/setting.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/users/setting/setting.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/users/setting/setting.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/users/setting/setting.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\n  <form [formGroup]=\"form.form\" (ngSubmit)=\"onSubmit(form.form)\">\n    \n    <div>\n      <label>First Name:</label>\n      <input type=\"text\" formControlName=\"first_name\">\n      <span [hidden]=\"form.valid('first_name')\">This field is required.</span>\n    </div>\n\n    <div>\n      <label>Last Name:</label>\n      <input type=\"text\" formControlName=\"last_name\">\n      <span [hidden]=\"form.valid('last_name')\">This field is required.</span>\n    </div>\n\n    <div>\n      <label>Email:</label>\n      <input type=\"text\" formControlName=\"email\">\n      <span [hidden]=\"form.valid('email')\">This field is required.</span>\n    </div>\n\n    <div>\n      <label>Birthdate:</label>\n      <input type=\"date\" formControlName=\"birthdate\">\n      <span [hidden]=\"form.valid('birthdate')\">This field is required.</span>\n    </div>\n\n    <div>\n      <label>Position:</label>\n      <input type=\"text\" formControlName=\"position\">\n      <span [hidden]=\"form.valid('position')\">This field is required.</span>\n    </div>\n\n    <div>\n      <label>Date Started:</label>\n      <input type=\"date\" formControlName=\"date_started\">\n      <span [hidden]=\"form.valid('date_started')\">This field is required.</span>\n    </div>\n\n    <button type=\"submit\">Save Changes</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/users/setting/setting.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/users/setting/setting.component.ts ***!
  \***************************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _commons_forms_user_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commons/forms/user.forms */ "./src/app/commons/forms/user.forms.ts");
/* harmony import */ var _commons_models_user_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../commons/models/user.models */ "./src/app/commons/models/user.models.ts");
/* harmony import */ var _commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../commons/services/auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
/* harmony import */ var _commons_services_auth_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../commons/services/auth/user.service */ "./src/app/commons/services/auth/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};






var SettingComponent = /** @class */ (function () {
    function SettingComponent(auth, state, userservice) {
        this.auth = auth;
        this.state = state;
        this.userservice = userservice;
    }
    SettingComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // initialize the form.
                        this.form = new _commons_forms_user_forms__WEBPACK_IMPORTED_MODULE_2__["UserForm"](new _commons_models_user_models__WEBPACK_IMPORTED_MODULE_3__["User"]);
                        if (!(this.auth.user.id == null)) return [3 /*break*/, 2];
                        // get user information from the backend. (sync)
                        return [4 /*yield*/, this.auth.setuser()];
                    case 1:
                        // get user information from the backend. (sync)
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.form.defaultValue(this.auth.user);
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        // initiate submission of form.
        this.form.submitted = true;
        // send the form data to the backend if the value
        // format are valid.
        if (valid) {
            this.userservice.update(value)
                .then(function (resp) { _this.state.go('user-settings'); })
                .catch(function (err) { console.log(err); });
        }
    };
    SettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! ./setting.component.html */ "./src/app/components/users/setting/setting.component.html"),
            styles: [__webpack_require__(/*! ./setting.component.css */ "./src/app/components/users/setting/setting.component.css")]
        }),
        __metadata("design:paramtypes", [_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__["StateService"],
            _commons_services_auth_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/users/users.module.ts ***!
  \**************************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _commons_directives_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../commons/directives/directives.module */ "./src/app/commons/directives/directives.module.ts");
/* harmony import */ var _commons_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../commons/pipes/pipes.module */ "./src/app/commons/pipes/pipes.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/components/users/dashboard/dashboard.component.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/components/users/setting/setting.component.ts");
/* harmony import */ var _dashboard_side_report_side_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/side-report/side-report.component */ "./src/app/components/users/dashboard/side-report/side-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__["UIRouterModule"],
                _commons_directives_directives_module__WEBPACK_IMPORTED_MODULE_4__["DirectivesModule"],
                _commons_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]
            ],
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _setting_setting_component__WEBPACK_IMPORTED_MODULE_7__["SettingComponent"], _dashboard_side_report_side_report_component__WEBPACK_IMPORTED_MODULE_8__["SideReportComponent"]]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/app/components/users/users.states.ts":
/*!**************************************************!*\
  !*** ./src/app/components/users/users.states.ts ***!
  \**************************************************/
/*! exports provided: USER_STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_STATES", function() { return USER_STATES; });
/* harmony import */ var _commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../commons/utils/layout.utils */ "./src/app/commons/utils/layout.utils.ts");
/* harmony import */ var _commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commons/utils/security.utils */ "./src/app/commons/utils/security.utils.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/components/users/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_side_report_side_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/side-report/side-report.component */ "./src/app/components/users/dashboard/side-report/side-report.component.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/components/users/setting/setting.component.ts");





var USER_STATES = [
    {
        name: 'dashboard',
        url: '/dashboard/',
        views: Object(_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["NavContent"])(_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]),
        onEnter: _commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__["LoginRequired"]
    },
    {
        name: 'dashboard-report',
        url: '/dashboard/report/:id/',
        views: Object(_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["NavSideOpenContent"])(_dashboard_side_report_side_report_component__WEBPACK_IMPORTED_MODULE_3__["SideReportComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]),
        onEnter: _commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__["LoginRequired"]
    },
    {
        name: 'user-settings',
        url: '/users/settings/',
        views: Object(_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["NavContent"])(_setting_setting_component__WEBPACK_IMPORTED_MODULE_4__["SettingComponent"]),
        onEnter: _commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__["LoginRequired"]
    }
];


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/earvingemenez/Platforms/swiftkind/console/env/core/assets/scripts/fe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map