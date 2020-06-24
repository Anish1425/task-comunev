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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_route_gaurd_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-route-gaurd.service */ "./src/app/login-route-gaurd.service.ts");
/* harmony import */ var _route_gaurd_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./route-gaurd.service */ "./src/app/route-gaurd.service.ts");







var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], canActivate: [_login_route_gaurd_service__WEBPACK_IMPORTED_MODULE_5__["LoginRouteGaurdService"]] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], canActivate: [_route_gaurd_service__WEBPACK_IMPORTED_MODULE_6__["RouteGaurdService"]] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '*', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_login_route_gaurd_service__WEBPACK_IMPORTED_MODULE_5__["LoginRouteGaurdService"], _route_gaurd_service__WEBPACK_IMPORTED_MODULE_6__["RouteGaurdService"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li:hover{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <nav class=\"navbar navbar-default shadow navbar-fixed-top navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\">\n      <img src=\"../favicon.ico\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n      Assignment</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse pull-right\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n\n        <li *ngIf=\"isLogged==='true'\" (click)=\"logout()\" class=\"nav-item active\">\n          <a class=\"nav-link\">Logout</a>\n        </li>\n        <li *ngIf = \"isLogged!=='true'\" class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['login']\">Singup Here</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <router-outlet></router-outlet>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, toaster) {
        this.router = router;
        this.toaster = toaster;
    }
    AppComponent.prototype.ngDoCheck = function () {
        this.isLogged = localStorage.getItem('isLogged');
    };
    AppComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
        this.toaster.success('Success', 'Logged Out Successfully');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    margin-top: 4vmin;\n}\n\nli{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.buttons{\n    margin: 1vmin;\n    border-radius: 60%;\n}\n\nli:hover{\n    cursor: pointer;\n}\n\n.button{\n    display: block;\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 2vmin;\n    margin-bottom: 2vmin;\n}\n\n.add-user-form{\n    margin-bottom: 4vmin;\n}\n\ninput{\n    margin: 1vmin;\n}\n\n.invalid-feedback{\n    text-align: center;\n}\n\n.form{\n    margin-top: 20vmin;\n}\n\n.heading{\n    color: #ffffff;\n    font-family: 'Bahinia', cursive;\n    font-size: 8vmin;\n    text-align: center;\n    margin-bottom: 4vmin;\n}\n\n.button1{\n    width: 50%;\n    display: block;\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 2vmin;\n    margin-bottom: 2vmin;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0Isb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHFCQUFxQjtDQUN4Qjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0NBQ3hCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiA0dm1pbjtcbn1cblxubGl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYnV0dG9uc3tcbiAgICBtYXJnaW46IDF2bWluO1xuICAgIGJvcmRlci1yYWRpdXM6IDYwJTtcbn1cblxubGk6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnV0dG9ue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAydm1pbjtcbiAgICBtYXJnaW4tYm90dG9tOiAydm1pbjtcbn1cblxuLmFkZC11c2VyLWZvcm17XG4gICAgbWFyZ2luLWJvdHRvbTogNHZtaW47XG59XG5cbmlucHV0e1xuICAgIG1hcmdpbjogMXZtaW47XG59XG5cbi5pbnZhbGlkLWZlZWRiYWNre1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvcm17XG4gICAgbWFyZ2luLXRvcDogMjB2bWluO1xufVxuXG4uaGVhZGluZ3tcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LWZhbWlseTogJ0JhaGluaWEnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogOHZtaW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDR2bWluO1xufVxuXG4uYnV0dG9uMXtcbiAgICB3aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAydm1pbjtcbiAgICBtYXJnaW4tYm90dG9tOiAydm1pbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"value===false && showuser===false\" class=\"col-md-6 container\">\n    <ul *ngFor=\"let user of userDetails; let i=index;\" class=\"list-group\">\n        <li (click)=\"showUser(i)\" class=\"list-group-item\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Click to view more\">\n            <div class=\"user-name\">{{user.username}}</div>\n            <div class=\"buttons\">\n              <button (click)=\"editUser(i)\" type=\"button\" class=\"btn btn-success\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Edit User\">\n                <i class=\"fas fa-pencil-alt\"></i>\n            </button>\n            <button (click)= \"deleteUser(i)\" type=\"button\" class=\"btn btn-danger\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete User\">\n              <i class=\"fas fa-trash-alt\"></i>\n          </button>\n            </div>\n            \n        </li>\n    </ul>\n</div>\n\n<div *ngIf= \"value===false && showuser===false\" class=\"col-md-6 container\">\n  <button (click)=\"toggle()\" class=\"button1 btn btn-success\">Add User</button>\n</div>\n\n<div *ngIf= \"value===true && showuser===false\" class=\"form col-md-4 add-user-form container\">\n    <h1 class=\"heading\">Create User</h1>\n    <form [formGroup]= \"addUser\" (submit)=\"adduser()\">\n        <input [ngClass]=\"{'is-invalid':\n        (addUser.get('username').touched || addUser.get('username').dirty) && addUser.get('username').invalid}\" formControlName=\"username\" class=\"form-control\" type=\"text\" placeholder=\"Enter name\">\n        <div class=\"invalid-feedback\">\n            Please enter name.\n        </div>\n        <input [ngClass]=\"{'is-invalid':\n        (addUser.get('password').touched || addUser.get('password').dirty) && addUser.get('password').invalid}\" formControlName=\"password\" class=\"form-control\" type=\"password\" placeholder=\"Enter password\">\n        <div class=\"invalid-feedback\">\n            Please enter password.\n        </div>\n        <input [ngClass]=\"{'is-invalid':\n        (addUser.get('email').touched || addUser.get('email').dirty) && addUser.get('email').invalid}\" formControlName=\"email\" class=\"form-control\" type=\"text\" placeholder=\"Enter email\">\n        <div class=\"invalid-feedback\">\n            Please enter email.\n        </div>\n        <input [ngClass]=\"{'is-invalid':\n        (addUser.get('phone_no').touched || addUser.get('phone_no').dirty) && addUser.get('phone_no').invalid}\" formControlName=\"phone_no\" class=\"form-control\" type=\"text\" placeholder=\"Enter phone\">\n        <div class=\"invalid-feedback\">\n            Please enter phone.\n        </div>\n        <input *ngIf=\"isEditable===false\" [ngClass]=\"{'disabled':addUser.invalid}\" [disabled]=\"addUser.invalid\" type=\"submit\" class=\"button btn btn-success\" value=\"Add User\">\n        <button *ngIf=\"isEditable===true\" (click)=\"editIt()\" [ngClass]=\"{'disabled':addUser.invalid}\" [disabled]=\"addUser.invalid\" class=\"button btn btn-success\" >Edit User</button>\n    </form>\n\n    <button (click)=\"back()\" class=\"button btn btn-danger\">Back</button>\n</div>\n\n<div *ngIf=\"showuser===true\" class=\"col-md-4 container\">\n    <div class=\"card\">\n        <div class=\"card-body\">\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\">Username:&nbsp;&nbsp;{{userInfo.username}}</li>\n            <li class=\"list-group-item\">Email:&nbsp;&nbsp;{{userInfo.email}}</li>\n            <li class=\"list-group-item\">Phone:&nbsp;&nbsp;{{userInfo.phone_no}}</li>\n            <li class=\"list-group-item\">Created At:&nbsp;&nbsp;{{userInfo.created_at}}</li>\n          </ul>\n        </div>\n      </div>\n\n      <button (click)=\"back()\" class=\"button btn btn-danger\">Back</button>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.value = false;
        this.isEditable = false;
        this.showuser = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addUser = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone_no: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.service.getAllUser().subscribe(function (data) {
            _this.userDetails = data;
        });
    };
    DashboardComponent.prototype.toggle = function () {
        this.value = true;
    };
    DashboardComponent.prototype.showUser = function (index) {
        this.showuser = true;
        this.userInfo = this.userDetails[index];
    };
    DashboardComponent.prototype.adduser = function () {
        var data = this.addUser.value;
        data.created_at = Date.now();
        console.log(data);
        this.userDetails.push(data);
        this.value = false;
        this.addUser.reset();
        this.isEditable = false;
    };
    DashboardComponent.prototype.editIt = function () {
        var data = this.addUser.value;
        data.created_at = Date.now();
        this.userDetails[this.index] = data;
        this.value = false;
        this.addUser.reset();
        this.isEditable = false;
    };
    DashboardComponent.prototype.deleteUser = function (index) {
        this.userDetails.splice(index, 1);
    };
    DashboardComponent.prototype.editUser = function (index) {
        this.index = index;
        var user = this.userDetails[index];
        this.addUser = this.fb.group({
            username: [user.username, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: [user.password, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone_no: [user.phone_no, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.value = true;
        this.isEditable = true;
    };
    DashboardComponent.prototype.back = function () {
        this.value = false;
        this.addUser.reset();
        this.isEditable = false;
        this.showuser = false;
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(http) {
        var _this = this;
        this.http = http;
        this.baseUrl = './assets/DATA.json';
        this.getAllUser = function () {
            return _this.http.get(_this.baseUrl);
        };
    }
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/login-route-gaurd.service.ts":
/*!**********************************************!*\
  !*** ./src/app/login-route-gaurd.service.ts ***!
  \**********************************************/
/*! exports provided: LoginRouteGaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRouteGaurdService", function() { return LoginRouteGaurdService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginRouteGaurdService = /** @class */ (function () {
    function LoginRouteGaurdService(router) {
        this.router = router;
    }
    LoginRouteGaurdService.prototype.canActivate = function (route) {
        if (localStorage.getItem('isLogged') === undefined || localStorage.getItem('isLogged') === "" || localStorage.getItem('isLogged') === null) {
            return true;
        }
        else {
            this.router.navigate(['/dashboard']);
            return false;
        }
    };
    LoginRouteGaurdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginRouteGaurdService);
    return LoginRouteGaurdService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n    padding: 4vmin 4vmin;\n    margin-right: 1em;\n    margin-top: 1em;\n}\n\nlabel{\n    color: black;\n    \n}\n\nsection {\n\n}\n\n.login-box{\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    \n\n   \n\n}\n\n.image{\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 2vmin;\n}\n\n.heading{\n    color: black;\n    font-family: 'Bahinia', cursive;\n    font-size: 8vmin;\n    text-align: center;\n    margin-bottom: 4vmin;\n}\n\n.text-box{\n    display: flex;\n    flex-direction: row;\n    border: 1px solid #039be5;\n    border-radius: 50px;\n    background: #f5f5f5;\n    padding: 1vmin;\n    margin: 2vmin;\n    text-align: center;\n}\n\n.text-box i{\n    text-align: center;\n    padding-left: 2vmin;\n    display: block;\n    margin-top: auto;\n    margin-bottom: auto;\n    color: #474747;\n}\n\n.text-box input{\n    display: block;\n    margin-right: auto;\n    margin-left: auto;\n    border: none;\n    outline: none;\n    text-align: center;\n    background: #f5f5f5;\n    padding-right: 2vmin;\n}\n\n.button{\n    width: 40%;\n    background-color: #00b894;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 4vmin;\n    border: 2px solid #ffffff;  \n    border-radius: 50px;\n    padding: 5px;\n    color: black;\n    outline: none;\n}\n\n.button:hover{\n    cursor: pointer;\n}\n\n.login-footer{\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    margin-top: 2vmin;\n}\n\n.login-footer a{\n    text-decoration: none;\n    color: #ffffff;\n}\n\n.invalid {\n    border: 1px solid #e50303;\n}\n\n.invalid ::-webkit-input-placeholder{\n    color: #e50303;\n}\n\n.invalid ::-ms-input-placeholder{\n    color: #e50303;\n}\n\n.invalid ::placeholder{\n    color: #e50303;\n}\n\n.invalid i{\n    color: #e50303;\n}\n\n.invalidError{\n    font-size: 8pt;\n    color: #e50303;\n    text-align: center;\n    margin-top: 0;\n}\n\n.disabled{\n    border: 2px solid rgb(194, 194, 194);\n    color: rgb(194, 194, 194);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksYUFBYTs7Q0FFaEI7O0FBQ0Q7O0NBRUM7O0FBQ0Q7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjs7Ozs7Q0FLdEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIscUJBQXFCO0NBQ3hCOztBQUVEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZUFBZTtDQUNsQjs7QUFDRDtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0lBQ2IsY0FBYztDQUNqQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFGRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRkQ7SUFDSSxlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxxQ0FBcUM7SUFDckMsMEJBQTBCO0NBQzdCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICAgIHBhZGRpbmc6IDR2bWluIDR2bWluO1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbn1cblxubGFiZWx7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIFxufVxuc2VjdGlvbiB7XG5cbn1cbi5sb2dpbi1ib3h7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIFxuXG4gICBcblxufVxuXG4uaW1hZ2V7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDJ2bWluO1xufVxuXG4uaGVhZGluZ3tcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6ICdCYWhpbmlhJywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDh2bWluO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA0dm1pbjtcbn1cblxuLnRleHQtYm94e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDM5YmU1O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICBwYWRkaW5nOiAxdm1pbjtcbiAgICBtYXJnaW46IDJ2bWluO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtYm94IGl7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMnZtaW47XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgIGNvbG9yOiAjNDc0NzQ3O1xufVxuLnRleHQtYm94IGlucHV0e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAydm1pbjtcbn1cblxuLmJ1dHRvbntcbiAgICB3aWR0aDogNDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGI4OTQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDR2bWluO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7ICBcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ1dHRvbjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2dpbi1mb290ZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAydm1pbjtcbn1cblxuLmxvZ2luLWZvb3RlciBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmludmFsaWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNTAzMDM7XG59XG5cbi5pbnZhbGlkIDo6cGxhY2Vob2xkZXJ7XG4gICAgY29sb3I6ICNlNTAzMDM7XG59XG5cbi5pbnZhbGlkIGl7XG4gICAgY29sb3I6ICNlNTAzMDM7XG59XG5cbi5pbnZhbGlkRXJyb3J7XG4gICAgZm9udC1zaXplOiA4cHQ7XG4gICAgY29sb3I6ICNlNTAzMDM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi5kaXNhYmxlZHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTk0LCAxOTQsIDE5NCk7XG4gICAgY29sb3I6IHJnYigxOTQsIDE5NCwgMTk0KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<section>\n\n<div class=\"login-box col-md-4\">\n  <h1 class=\"heading\">SINGUP</h1>\n  <form [formGroup]=\"loginForm\" (submit)=\"login()\">\n\n\n\n\n    <div class=\"text-box\" [ngClass]=\"{'invalid':\n        (loginForm.get('firstname').touched || loginForm.get('firstname').dirty) && loginForm.get('firstname').invalid}\">\n      <i class=\"fas fa-na\"></i>\n      <input formControlName=\"firstname\" type=\"text\" placeholder=\"Enter Firstname\">\n    </div>\n     <div *ngIf=\"(loginForm.get('firstname').touched || loginForm.get('firstname').dirty) && loginForm.get('firstname').invalid\" class=\"invalidError\">Please enter a\n      valid name</div>\n\n\n\n      <div class=\"text-box\" [ngClass]=\"{'invalid':\n        (loginForm.get('lastname').touched || loginForm.get('lastname').dirty) && loginForm.get('lastname').invalid}\">\n      <i class=\"fas fa-na\"></i>\n      <input formControlName=\"lastname\" type=\"text\" placeholder=\"Enter Lastname\">\n    </div>\n     <div *ngIf=\"(loginForm.get('lastname').touched || loginForm.get('lastname').dirty) && loginForm.get('lastname').invalid\" class=\"invalidError\">Please enter a\n      valid name</div>\n\n    <div class=\"text-box\" [ngClass]=\"{'invalid':\n        (loginForm.get('email').touched || loginForm.get('email').dirty) && loginForm.get('email').invalid}\">\n      <i class=\"fas fa-at\"></i>\n      <input formControlName=\"email\" type=\"text\" placeholder=\"Enter username\">\n    </div>\n      \n      <div *ngIf=\"(loginForm.get('email').touched || loginForm.get('email').dirty) && loginForm.get('email').invalid\" class=\"invalidError\">Please enter a\n      valid username</div>\n\n    <div class=\"text-box\" [ngClass]=\"{'invalid':\n        (loginForm.get('password').touched || loginForm.get('password').dirty) && loginForm.get('password').invalid}\">\n      <i class=\"fas fa-unlock-alt\"></i>\n      <input formControlName=\"password\" type=\"password\" placeholder=\"Enter Password\">\n    </div>\n\n\n\n\n    <div *ngIf=\"(loginForm.get('password').touched || loginForm.get('password').dirty) && loginForm.get('password').invalid\" class=\"invalidError\">Please\n      enter password</div>\n\n<div class=\"text-box\" [ngClass]=\"{'invalid':\n        (loginForm.get('dateofbirth').touched || loginForm.get('dateofbirth').dirty) && loginForm.get('dateofbirth').invalid}\">\n      <label> DOB</label>\n      <input formControlName=\"dateofbirth\" type=\"date\" placeholder=\"Enter DOB\">\n    </div>\n\n     <div *ngIf=\"(loginForm.get('dateofbirth').touched || loginForm.get('dateofbirth').dirty) && loginForm.get('dateofbirth').invalid\" class=\"invalidError\">Please enter a\n      valid DOB</div>\n\n<div class=\"\" [ngClass]=\"{'invalid':\n        (loginForm.get('dateofbirth').touched || loginForm.get('dateofbirth').dirty) && loginForm.get('dateofbirth').invalid}\">\n      <i class=\"\"></i>\n     \n      <select class=\"text-capitalize text-center\" id=\"country\" style=\"border-radius: 8px;  margin-left: 140px;\">\n        \n    <option>select country</option>\n    <option>india</option>\n     <option>USA</option>\n          <option>canada</option>\n     <option>russia</option>\n      <option>UK</option>\n       <option>other</option>\n      </select>\n    </div>\n\n\n\n     <div *ngIf=\"(loginForm.get('dateofbirth').touched || loginForm.get('dateofbirth').dirty) && loginForm.get('dateofbirth').invalid\" class=\"invalidError\">Please enter a\n      valid name</div>\n\n\n\n\n\n\n    <input [ngClass]=\"{'disabled':loginForm.invalid}\" [disabled]=\"loginForm.invalid\" type=\"submit\" class=\"button shadow\" value=\"SINGUP\">\n  </form>\n</div>\n</section>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, service, router, toasterService) {
        this.fb = fb;
        this.service = service;
        this.router = router;
        this.toasterService = toasterService;
        this.emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.emailRegex)
                ])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])]
        });
        this.service.getAllUser().subscribe(function (data) {
            _this.userDetails = data;
        });
    };
    LoginComponent.prototype.login = function () {
        var formValue = this.loginForm.value;
        var i = 1;
        console.log(this.userDetails);
        for (var _i = 0, _a = this.userDetails; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.email === formValue.email) {
                if (user.password === formValue.password) {
                    this.toasterService.success('Success', 'Successfully Logged in');
                    localStorage.setItem('isLogged', 'true');
                    this.router.navigate(['dashboard']);
                }
            }
            else if (i === this.userDetails.length) {
                this.toasterService.error('Error', 'Wrong Credential');
            }
            else {
                i++;
            }
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-singup',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/route-gaurd.service.ts":
/*!****************************************!*\
  !*** ./src/app/route-gaurd.service.ts ***!
  \****************************************/
/*! exports provided: RouteGaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGaurdService", function() { return RouteGaurdService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var RouteGaurdService = /** @class */ (function () {
    function RouteGaurdService(router) {
        this.router = router;
    }
    RouteGaurdService.prototype.canActivate = function (route) {
        if (localStorage.getItem('isLogged') === undefined || localStorage.getItem('isLogged') === "" || localStorage.getItem('isLogged') === null) {
            this.router.navigate(['/login']);
            return false;
        }
        else {
            return true;
        }
    };
    RouteGaurdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RouteGaurdService);
    return RouteGaurdService;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angularfive\somu\anish\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map