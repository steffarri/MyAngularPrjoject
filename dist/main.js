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

/***/ "./src/about/about.component.html":
/*!****************************************!*\
  !*** ./src/about/about.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n   <div class=\"row\">\r\n     \r\n           <div class=\"col-sm-6 pull-left about-div-picture\" >\r\n               <img [src]=\"imagepath\" class=\"about-picture\"/>\r\n           </div>\r\n           <div class=\"col-sm-6 about\"><br/><br/>\r\n               Thank you for visiting my site! This was for practice and learning new\r\n               technology skills. I've used throughout this process was Angular 5 and typescript, webpack,\r\n               SASS, Bootstrap, SQL, Visual Studio with Cors connection to Visual \r\n               Code using a WebAPI using C# .Net, Creating mapping for login, hashing with salt, \r\n               Google Maps API for Angular and learning parallax. \r\n<br/><br/><br/>\r\n                If you have any questions or advice for my website, you can contact me at\r\n                <a href=\"mailto:stgulizia@gmail.com?Subject=Website%20Review\" target=\"_top\">stgulizia@gmail.com</a> <br/>\r\n\r\n           </div>\r\n       \r\n       </div>\r\n</div>\r\n<br/><br/><br/><br/><br/><br/>\r\n<div class=\"extradiv\"><br/>\r\n    Thanks for stopping by!\r\n    <Br/><br/>\r\n</div>\r\n<br/><br/><br/><br/><br/><br/>\r\n<div class=\"extradiv\"><br/>\r\n        :)\r\n        <br/><br/>\r\n    </div>\r\n    <br/><br/><br/><br/>"

/***/ }),

/***/ "./src/about/about.component.scss":
/*!****************************************!*\
  !*** ./src/about/about.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about {\n  color: white;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  padding-right: 90px; }\n\n.about-picture {\n  width: 600px;\n  height: 500px;\n  border-radius: 10px;\n  max-width: 100%;\n  padding: none; }\n\n.about-div-picture {\n  padding-left: 40px; }\n\n.extradiv {\n  background-color: rgba(255, 255, 255, 0.5);\n  color: black;\n  text-align: center;\n  font-weight: bolder;\n  font-size: 22px; }\n\n@media only screen and (min-width: 768px) and (max-width: 1024px) {\n  .about-picture {\n    width: 350px;\n    height: 390px; }\n  .about-div-picture {\n    padding-top: 30px; }\n  .about {\n    font-size: 16px; } }\n\n@media only screen and (min-width: 375px) and (max-width: 812px) {\n  .about-picture {\n    width: 280px;\n    height: 300px; }\n  .about-div-picture {\n    padding-left: 60px; }\n  .about {\n    padding-left: 50px;\n    font-size: 14px; } }\n\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .about {\n    padding-left: 20px; }\n  .about-div-picture {\n    padding-left: 65px; } }\n\n@media only screen and (min-width: 375px) and (max-width: 667px) {\n  .about-div-picture {\n    padding-left: 45px; }\n  .about {\n    padding-left: 10px; } }\n"

/***/ }),

/***/ "./src/about/about.component.ts":
/*!**************************************!*\
  !*** ./src/about/about.component.ts ***!
  \**************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(router) {
        this.router = router;
        this.imagepath = "/assets/travel2.jpg";
    }
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parallex\">\r\n<div class=\"flex-container\">\r\n  <div class=\"row\">\r\n  <div class=\"jumbotron vertical-center\">\r\n    <h1>Destinations 101</h1>\r\n    <p>Find places and reviews for recommended areas to Travel in the US.</p>\r\n  </div>\r\n\r\n</div>\r\n<navigation class=\"navigation\"></navigation>\r\n</div>\r\n<br/><br/><br/><br/><br/>\r\n<router-outlet></router-outlet>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\n  justify-content: center;\n  text-align: center; }\n\n.jumbotron {\n  background-color: rgba(255, 255, 255, 0.5);\n  font-family: \"Arial Black\", Gadget, sans-serif;\n  text-align: center;\n  width: 100%;\n  margin: 0 auto; }\n\n.navigation {\n  padding-bottom: 20px;\n  margin: 0 auto; }\n\n@media only screen and (min-width: 375px) and (max-width: 812px) {\n  h1 {\n    font-size: 20px; }\n  p {\n    font-size: 16px; } }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _app_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
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
    //loggedInn : boolean = false;
    function AppComponent(service, router) {
        this.service = service;
        this.router = router;
        if (service.isLoggedIn == false)
            this.router.navigate(['']);
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/home.component */ "./src/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/login.component */ "./src/login/login.component.ts");
/* harmony import */ var _loginform_loginform_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loginform/loginform.component */ "./src/loginform/loginform.component.ts");
/* harmony import */ var _newuserform_newuserform_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../newuserform/newuserform.component */ "./src/newuserform/newuserform.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../navigation/navigation.component */ "./src/navigation/navigation.component.ts");
/* harmony import */ var _app_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/login.service */ "./src/app/login.service.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../about/about.component */ "./src/about/about.component.ts");
/* harmony import */ var _destinations_destinations_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../destinations/destinations.component */ "./src/destinations/destinations.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _destinations_markersinfo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../destinations/markersinfo */ "./src/destinations/markersinfo.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _ngmaterial_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ngmaterial.module */ "./src/app/ngmaterial.module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var allRoutes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'login', component: _loginform_loginform_component__WEBPACK_IMPORTED_MODULE_7__["LoginFormComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'newuser', component: _newuserform_newuserform_component__WEBPACK_IMPORTED_MODULE_8__["NewUserFormComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"] },
    { path: 'destinations', component: _destinations_destinations_component__WEBPACK_IMPORTED_MODULE_12__["DestinationsComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _loginform_loginform_component__WEBPACK_IMPORTED_MODULE_7__["LoginFormComponent"],
                _newuserform_newuserform_component__WEBPACK_IMPORTED_MODULE_8__["NewUserFormComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _destinations_destinations_component__WEBPACK_IMPORTED_MODULE_12__["DestinationsComponent"],
                _destinations_markersinfo__WEBPACK_IMPORTED_MODULE_15__["MarkersInfoComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(allRoutes, { enableTracing: true }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_18__["HttpModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _ngmaterial_module__WEBPACK_IMPORTED_MODULE_17__["MaterialAppModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDgn91x_6QI4Ui5ER8olgGHguHlL82FHVY'
                })
            ],
            providers: [_app_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"], _destinations_markersinfo__WEBPACK_IMPORTED_MODULE_15__["MarkersInfoComponent"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(http, gethttp) {
        this.http = http;
        this.gethttp = gethttp;
        this.success = false;
        this.smallernav = false;
        this.rooturl = "http://angularwebapifordestinations.azurewebsites.net/";
        this.isLoggedIn = false;
        this.visible = false;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
    }
    LoginService.prototype.registerUser = function (user) {
        var body = {
            UserName: user.UserName,
            Password: user.Password,
            Email: user.Email,
            FirstName: user.FirstName,
            LastName: user.LastName
        };
        return this.http.post(this.rooturl + 'api/User/Register', body);
    };
    LoginService.prototype.getUser = function (user) {
        var body = {
            UserName: user.UserName,
            Password: user.Password,
            Email: '',
            FirstName: '',
            LastName: ''
        };
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('username', body.UserName.toString());
        return this.http.post(this.rooturl + 'api/User/GetUser', body);
    };
    LoginService.prototype.hide = function () {
        this.visible = false;
    };
    LoginService.prototype.show = function () {
        this.visible = true;
    };
    LoginService.prototype.toggle = function () {
        this.visible = !this.visible;
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/ngmaterial.module.ts":
/*!**************************************!*\
  !*** ./src/app/ngmaterial.module.ts ***!
  \**************************************/
/*! exports provided: MaterialAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialAppModule", function() { return MaterialAppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaterialAppModule = /** @class */ (function () {
    function MaterialAppModule() {
    }
    MaterialAppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"]]
        })
    ], MaterialAppModule);
    return MaterialAppModule;
}());



/***/ }),

/***/ "./src/destinations/destinations.component.html":
/*!******************************************************!*\
  !*** ./src/destinations/destinations.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n<h1>{{ title }}</h1>\r\n<br/><br/>\r\n<div class=\"col-sm-12 description\" id=\"description\">\r\n    <br/>\r\n    These are all the places I have visited and that I have great reviews on! I loved visiting every place and continue\r\n    to travel to new places and have more reviews coming shortly. Each marker on this map will share the location and a\r\n    description of each place if you click it. I hope you enjoy!\r\n    <br/><br/>\r\n</div>\r\n<br/><br/>\r\n<div class=\"div-sm-12\">\r\n        <div class=\"row\">\r\n<div class=\"col-sm-6 map\">\r\n   \r\n   \r\n<agm-map  [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" (mapClick)=\"mappedClick($event)\" (zoomChange)=\"zoomChange(z)\">\r\n  <agm-marker *ngFor=\"let m of markers; let i = index\"  [latitude]=\"m.lat\"\r\n   [longitude]=\"m.lng\" [markerDraggable]=\"m.draggable\" (markerClick)=\"markerClick(infoWindow, m.info, m.label)\">\r\n  <agm-info-window #infoWindow><strong></strong>{{m.label}}</agm-info-window>\r\n</agm-marker>\r\n</agm-map>\r\n</div>\r\n<div class=\"col-sm-6 info\">\r\n    <Br/>\r\n  <p id=\"biglabel\" class=\"biglabel\"> {{label}}</p>\r\n    <br/><br/>\r\n  <p id=\"infotext\"> {{info}} </p> \r\n  <br/><br/>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/destinations/destinations.component.scss":
/*!******************************************************!*\
  !*** ./src/destinations/destinations.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  padding-left: 80px; }\n\nagm-map {\n  padding-left: 150px;\n  height: 500px;\n  width: 600px;\n  max-width: 100%; }\n\nh1 {\n  color: white;\n  text-align: center;\n  justify-content: center; }\n\n.info {\n  color: white;\n  font-size: 20px;\n  font-weight: bold;\n  padding-right: 60px; }\n\n.description {\n  background-color: rgba(255, 255, 255, 0.5);\n  color: black;\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center;\n  font-weight: bold; }\n\n#biglabel {\n  font-size: 32px;\n  text-align: center;\n  justify-content: center; }\n\n#infotext {\n  justify-content: left;\n  text-align: center; }\n\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .map {\n    padding-left: 70px; } }\n\n@media only screen and (max-width: 1366px) and (min-width: 768px) {\n  agm-map {\n    width: 600px; } }\n\n@media only screen and (max-width: 600px) {\n  agm-map {\n    width: 300px;\n    height: 300px;\n    text-align: center;\n    zoom: 0; } }\n\n@media only screen and (min-width: 768px) and (max-width: 1024px) {\n  agm-map {\n    width: 300px;\n    height: 300px;\n    text-align: center;\n    zoom: 0; }\n  .description {\n    font-size: 16px; }\n  #infotext {\n    font-size: 15px; } }\n\n@media only screen and (min-width: 1024px) and (max-width: 1366px) {\n  agm-map {\n    width: 400px;\n    height: 400px;\n    text-align: center;\n    zoom: 0; }\n  .description {\n    font-size: 16px; } }\n\n@media only screen and (min-width: 375px) and (max-width: 812px) {\n  h1 {\n    font-size: 30px; }\n  #description {\n    font-size: 14px; }\n  .map {\n    margin-right: 80px;\n    padding-left: 53px; }\n  .biglabel {\n    font-size: 18px; }\n  .info {\n    margin-left: 45px; }\n  #infotext {\n    margin-bottom: 60px;\n    font-size: 16px; } }\n\n@media only screen and (max-width: 1366px) and (min-width: 768px) {\n  agm-map {\n    width: 600px; } }\n"

/***/ }),

/***/ "./src/destinations/destinations.component.ts":
/*!****************************************************!*\
  !*** ./src/destinations/destinations.component.ts ***!
  \****************************************************/
/*! exports provided: DestinationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationsComponent", function() { return DestinationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _destinations_markersinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../destinations/markersinfo */ "./src/destinations/markersinfo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DestinationsComponent = /** @class */ (function () {
    function DestinationsComponent(router, markerinfo) {
        this.router = router;
        this.markerinfo = markerinfo;
        this.infoWindowOpen = null;
        this.zoom = 4;
        this.lat = 37.09024;
        this.lng = -98.712891;
        this.info = "Marker information...";
        this.label = "Click the Markers!";
        this.title = "Destination List";
        this.markers = [
            {
                lat: 34.152177,
                lng: -118.336445,
                label: "Warner Brothers Studio Tour",
                draggable: false,
                info: this.markerinfo.WarnerBroInfo
            },
            {
                lat: 33.979620,
                lng: -118.466684,
                label: "Venice Beach",
                draggable: false,
                info: this.markerinfo.VeniceBeachInfo
            },
            {
                lat: 47.614249,
                lng: -122.328225,
                label: "Seattle",
                draggable: false,
                info: this.markerinfo.Seattle
            },
            {
                lat: 39.286550,
                lng: -76.608241,
                label: "Baltimore",
                draggable: false,
                info: this.markerinfo.Baltimore
            },
            {
                lat: 25.789810,
                lng: -80.129897,
                label: "Miami",
                draggable: false,
                info: this.markerinfo.Miami
            },
            {
                lat: 37.820081,
                lng: -122.478244,
                label: "Golden Gate Bridge",
                draggable: false,
                info: this.markerinfo.GoldenGateBridge
            },
            {
                lat: 27.777484,
                lng: -82.637663,
                label: "St. Petersburg",
                draggable: false,
                info: this.markerinfo.SaintPete
            },
            {
                lat: 36.043615,
                lng: -112.148310,
                label: "Grand Canyon",
                draggable: false,
                info: this.markerinfo.GrandCanyon
            },
            {
                lat: 33.508963,
                lng: -112.031981,
                label: "Arizona",
                draggable: false,
                info: this.markerinfo.Arizona
            },
            {
                lat: 28.525750,
                lng: -81.379059,
                label: "Orlando",
                draggable: false,
                info: this.markerinfo.Orlando
            },
            {
                lat: 37.827172,
                lng: -122.422977,
                label: "Alcatraz",
                draggable: false,
                info: this.markerinfo.Alcatraz
            },
            {
                lat: 38.888766,
                lng: -77.015608,
                label: "Washington D.C.",
                draggable: false,
                info: this.markerinfo.WashingtonDC
            },
            {
                lat: 37.750893,
                lng: -122.442065,
                label: "San Francisco",
                draggable: false,
                info: this.markerinfo.SanFrancisco
            },
            {
                lat: 34.093319,
                lng: -118.332830,
                label: "Hollywood",
                draggable: false,
                info: this.markerinfo.Hollywood
            },
            {
                lat: 24.554540,
                lng: -81.801482,
                label: "Key West",
                draggable: false,
                info: this.markerinfo.KeyWest
            }, {
                lat: 40.457958,
                lng: -106.804533,
                label: "Colorado",
                draggable: false,
                info: this.markerinfo.Colorado
            }, {
                lat: 38.415120,
                lng: -79.997256,
                label: "West Virginia",
                draggable: false,
                info: this.markerinfo.WestVirginia
            },
            {
                lat: 36.195749,
                lng: -81.881817,
                label: "North Carolina",
                draggable: false,
                info: this.markerinfo.NorthCarolina
            },
            {
                lat: 34.415719,
                lng: -119.745918,
                label: "Santa Barbara",
                draggable: false,
                info: this.markerinfo.SantaBarbara
            },
            {
                lat: 34.595213,
                lng: -120.141364,
                label: "Solvang",
                draggable: false,
                info: this.markerinfo.Solvang
            },
            {
                lat: 34.010049,
                lng: -118.497149,
                label: "Santa Monica",
                draggable: false,
                info: this.markerinfo.SantaMonica
            },
            {
                lat: 32.743656,
                lng: -117.225715,
                label: "San Diego",
                draggable: false,
                info: this.markerinfo.SanDiego
            },
        ];
    }
    DestinationsComponent.prototype.ngOnInit = function () {
    };
    DestinationsComponent.prototype.onWindowResize = function () {
        this.myMap.triggerResize();
    };
    DestinationsComponent.prototype.recenterMap = function (lat, lng) {
        this.lat = lat;
        this.lng = lng;
    };
    DestinationsComponent.prototype.mappedClick = function (event) {
    };
    DestinationsComponent.prototype.markerClick = function (infoWindow, info, label) {
        //this.zoom = 8;
        if (this.infoWindowOpen === infoWindow)
            return;
        if (this.infoWindowOpen !== null)
            this.infoWindowOpen.close();
        this.infoWindowOpen = infoWindow;
        this.info = info;
        this.label = label;
    };
    DestinationsComponent.prototype.zoomChange = function (z) {
        this.zoom = z;
        this.zoom = 4;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMap"]),
        __metadata("design:type", _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMap"])
    ], DestinationsComponent.prototype, "myMap", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Object)
    ], DestinationsComponent.prototype, "infoWindowOpen", void 0);
    DestinationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'destinations',
            template: __webpack_require__(/*! ./destinations.component.html */ "./src/destinations/destinations.component.html"),
            styles: [__webpack_require__(/*! ./destinations.component.scss */ "./src/destinations/destinations.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _destinations_markersinfo__WEBPACK_IMPORTED_MODULE_3__["MarkersInfoComponent"]])
    ], DestinationsComponent);
    return DestinationsComponent;
}());



/***/ }),

/***/ "./src/destinations/markersinfo.ts":
/*!*****************************************!*\
  !*** ./src/destinations/markersinfo.ts ***!
  \*****************************************/
/*! exports provided: MarkersInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkersInfoComponent", function() { return MarkersInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MarkersInfoComponent = /** @class */ (function () {
    function MarkersInfoComponent() {
        this.WarnerBroInfo = "This is a great tour if you can get out in the LA Area!" +
            " You will go behind the scenes on some of the studios and get a history of the show" +
            " you can see and how everything works. You are able to see all the props and how it" +
            " works and is actually used in other movies and shows. You get to see where the outside" +
            " of the show Friends was places, and Jurassic Park, also a huge neighborhood of houses." +
            " It's in numerous shows and movies. It's interesting to see tons of houses that look"
            + " enormous, but are actually only 5 feet wide! ";
        this.VeniceBeachInfo = "This was the basic beach scene in all the California movies, and" +
            " the cool place to be. Their is such a scenery from mountains to the beach, roller skaters, " +
            "dancers, shops, small random street shows, lots of fried foods, skate park, and you can't forget" +
            " muscle beach for the outside gym! This place is worth checking out.";
        this.Seattle = "They have a famous Starbucks Roastery here and aslo you can check out the needle, and shops, " +
            "and if you go further you'll be able to see some amazing mountains and do some hiking.";
        this.Hollywood = "This is one of the most popular areas you here about, when it comes to stars. Their" +
            " is one long street with stars, which are fascinating to see, but very downgraded around. Many bums, trash, and" +
            " tons of tourists. Their is numerous things to do and shows to attend though, but get back to LA soon :)";
        this.WashingtonDC = "A great place to sight see and walk around the city. Their is always something going on" +
            " and you can walk by the White House, Monuments, and many other activities.";
        this.Baltimore = "Well if you're a floridian, this place is about the opposite. It was a great place for the" +
            " famous crab cakes. They have an amazing aquarium in the city and a thing called the subway :o";
        this.Miami = "You need to visit South Beach! The water was so clear, don't forget a snorkle and goggles too." +
            " This is place that I recommend to go out too!";
        this.Orlando = "Where do I start? Disney, Shopping, Univeral.  ";
        this.SaintPete = "My Home Town! Not sure where to start but the beach is the #1 place I absolutelty love," +
            "and yes you can see the whole sunset on this coast! Downtown St.Pete is absolutelty georgous as well!";
        this.Arizona = "So much sand everywhere! I was shocked to not see grass at first, but it is a desert..." +
            " I loved exploring here and so many cities to drive to and mountains to climb :)";
        this.GrandCanyon = "This is a MUST SEE, this place its absolutely beautiful and you need to visit all the areas." +
            " You may spot some Elk and even snow! Be prepared to bring a jacket if you go during the winter. ";
        this.GoldenGateBridge = "Just like the pictures, incredible. It's fascinating to learn about the history here," +
            " and you can do a few hikes up the mountains if you want one of the best pictures";
        this.Alcatraz = "This is a little island right in San Francisco that you have to take a ferry too. This place has" +
            " so much history from being a fort to a prison and you can get a tour and even audio stories of everything";
        this.SanFrancisco = "If you ar wondering if you want to visit this place, you really should. Their is Sea Lions," +
            "Ghiradelli Factory, China Town, Golden Gate Bridge, Alcatraz, Apple and Google Corporations, and so much more!";
        this.KeyWest = "Bring your goggles, snorkle, and energy. If you go down duval street, which is the main street of " +
            "all the main bars, rent a bicycle! You can go everywhere from the beach to the bars to your hotel. Watch out for the " +
            "chickens crossing the road though!";
        this.WestVirginia = "This is a great place to go snowboarding and have a great view of the mountains. The resort I went " +
            "to is called SnowShoe and goes from blue, to green the even black diamond slopes!";
        this.NorthCarolina = "If you want to get a feel for what snowboarding or skiing is like, this is a good start." +
            " You can even get lessons and go to the bunny slope to learn. They're numerous terrain trais to go down as well!";
        this.Colorado = "This is one of the best ski resort I have been to and I highly recommend it. Tons of snow is always" +
            "here and so many trails to go down! They have multiple places to rent gear easily and you can even get a cabin right " +
            "on the slope, it's a great experience.";
        this.SantaBarbara = "So many wine tastings and mountains you can check out. They are famous for their Wine and even have " +
            " great breweries all around the town. Tons of mountains to hike and even have a ostrich farm, where you can feed the ostrich." +
            "Also, don't forget to check out State Street, where their is tons of shops and events going on in this area.";
        this.Solvang = "The smallest city ever, but is famous for their Danish treats. If you go through here, you can't leave without " +
            "a danish.";
        this.SanDiego = "This town has a little of everything. Including Hiking, mountains, ocean and surfing, the city, and more. I " +
            "highly recommend to hike the Iron Mountain.";
        this.SantaMonica = "If you are here, check out the pier and rides. They have tons of shops and events going on around the " +
            "pier as well, including some surf.";
    }
    MarkersInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'markersinfo',
        })
    ], MarkersInfoComponent);
    return MarkersInfoComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/home/home.component.html":
/*!**************************************!*\
  !*** ./src/home/home.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\"><br/>\r\n        <h2>Task List</h2><br/>\r\n        <div class=\"content\">\r\n        <input type=\"text\" placeholder=\"Add Task Here...\" class=\"task\" [(ngModel)]=\"theTask\" (keyup.enter)=\"addingTask(i)\"><button mat-button class=\"button\" (click)=\"addingTask(i)\">Add</button>\r\n        <br/><br/>\r\n    </div>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"col-sm-12 styleAlert\">\r\n        <div class=\"alert alert-danger\" *ngIf=\"alertOn\"><strong>Warning: </strong>Sorry, No task was added. Please Try Again.</div>\r\n    </div>\r\n    </div>\r\n        \r\n        \r\n        <div class=\"col-sm-12\">\r\n            <div class=\"col-sm-12 content\"  *ngFor=\"let itemTask of getTask;let i = index\">\r\n                <div class=\"row\">\r\n        <mat-checkbox class=\"checkbox col-sm-1\" [checked]=\"false\" [(ngModel)]=\"itemTask.completed\"></mat-checkbox>\r\n        <div class=\"col-sm-6 allTasks\" id=\"theTask\" [ngClass]=\"{'strike' : itemTask.completed}\">Task {{i + 1}} : {{itemTask.theTask}}</div>\r\n        <mat-icon class=\"col-sm-1 remove\" (click)=\"removeTask(i)\">delete_sweep</mat-icon>\r\n        <hr class=\"hrLine\" width=\"100%\">\r\n    </div>\r\n           \r\n</div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/home/home.component.scss":
/*!**************************************!*\
  !*** ./src/home/home.component.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 56px;letter-spacing:-.05em}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.02em}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.005em}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card-title{font-size:24px;font-weight:400}.mat-card-content,.mat-card-header .mat-card-title,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:13px;line-height:18px}.mat-chip .mat-chip-remove.mat-icon{font-size:18px}.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell{font-size:14px}.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.4375em 0;border-top:.84375em solid transparent}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.28125em}.mat-form-field-underline{bottom:1.25em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.54167em;top:calc(100% - 1.66667em)}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset{font-size:14px;padding-top:9px;padding-bottom:9px}.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{font-size:16px}.mat-list .mat-list-item .mat-line,.mat-nav-list .mat-list-item .mat-line,.mat-selection-list .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{font-size:16px}.mat-list .mat-list-option .mat-line,.mat-nav-list .mat-list-option .mat-line,.mat-selection-list .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-list[dense] .mat-list-item,.mat-nav-list[dense] .mat-list-item,.mat-selection-list[dense] .mat-list-item{font-size:12px}.mat-list[dense] .mat-list-item .mat-line,.mat-nav-list[dense] .mat-list-item .mat-line,.mat-selection-list[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-list-option,.mat-nav-list[dense] .mat-list-option,.mat-selection-list[dense] .mat-list-option{font-size:12px}.mat-list[dense] .mat-list-option .mat-line,.mat-nav-list[dense] .mat-list-option .mat-line,.mat-selection-list[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-subheader,.mat-nav-list[dense] .mat-subheader,.mat-selection-list[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-ripple{overflow:hidden}@media screen and (-ms-high-contrast:active){.mat-ripple{display:none}}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.288)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-option{color:rgba(0,0,0,.87)}.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#3f51b5}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ff4081}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}.mat-optgroup-label{color:rgba(0,0,0,.54)}.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox::after{color:#fafafa}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ff4081}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#3f51b5}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-button,.mat-icon-button,.mat-stroked-button{background:0 0}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:rgba(63,81,181,.12)}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:rgba(255,64,129,.12)}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:rgba(244,67,54,.12)}.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#3f51b5}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ff4081}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-fab,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-fab.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff}.mat-fab.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:#fff}.mat-fab.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-fab.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#3f51b5}.mat-fab.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ff4081}.mat-fab.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-fab.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.2)}.mat-fab.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(255,255,255,.2)}.mat-fab.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.2)}.mat-button.mat-primary .mat-ripple-element{background-color:rgba(63,81,181,.1)}.mat-button.mat-accent .mat-ripple-element{background-color:rgba(255,64,129,.1)}.mat-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.1)}.mat-flat-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-flat-button.mat-primary{color:#fff}.mat-flat-button.mat-accent{color:#fff}.mat-flat-button.mat-warn{color:#fff}.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-flat-button.mat-primary{background-color:#3f51b5}.mat-flat-button.mat-accent{background-color:#ff4081}.mat-flat-button.mat-warn{background-color:#f44336}.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-flat-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.2)}.mat-flat-button.mat-accent .mat-ripple-element{background-color:rgba(255,255,255,.2)}.mat-flat-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.2)}.mat-icon-button.mat-primary .mat-ripple-element{background-color:rgba(63,81,181,.2)}.mat-icon-button.mat-accent .mat-ripple-element{background-color:rgba(255,64,129,.2)}.mat-icon-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.2)}.mat-button-toggle{color:rgba(0,0,0,.38)}.mat-button-toggle.cdk-focused .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-disabled{background-color:#eee;color:rgba(0,0,0,.26)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-card{background:#fff;color:rgba(0,0,0,.87)}.mat-card-subtitle{color:rgba(0,0,0,.54)}.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#3f51b5}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ff4081}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:#b0b0b0}.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(63,81,181,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(255,64,129,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-chip:not(.mat-basic-chip){background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip:not(.mat-basic-chip) .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip:not(.mat-basic-chip) .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff}.mat-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-chip-selected.mat-accent{background-color:#ff4081;color:#fff}.mat-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover{opacity:.54}.mat-table{background:#fff}.mat-header-row,.mat-row{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell{color:rgba(0,0,0,.54)}.mat-cell{color:rgba(0,0,0,.87)}.mat-datepicker-content{background-color:#fff;color:rgba(0,0,0,.87)}.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}.mat-calendar-next-button,.mat-calendar-previous-button{color:rgba(0,0,0,.54)}.mat-calendar-table-header{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-selected{background-color:#3f51b5;color:#fff}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(63,81,181,.4)}.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-datepicker-toggle-active{color:#3f51b5}.mat-dialog-container{background:#fff;color:rgba(0,0,0,.87)}.mat-divider{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-action-row{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}.mat-form-field-label{color:rgba(0,0,0,.54)}.mat-hint{color:rgba(0,0,0,.54)}.mat-focused .mat-form-field-label{color:#3f51b5}.mat-focused .mat-form-field-label.mat-accent{color:#ff4081}.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#ff4081}.mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 1px;background-repeat:repeat-x}.mat-form-field-ripple{background-color:#3f51b5}.mat-form-field-ripple.mat-accent{background-color:#ff4081}.mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field-invalid .mat-form-field-label{color:#f44336}.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}.mat-form-field-invalid .mat-form-field-ripple{background-color:#f44336}.mat-error{color:#f44336}.mat-icon.mat-primary{color:#3f51b5}.mat-icon.mat-accent{color:#ff4081}.mat-icon.mat-warn{color:#f44336}.mat-input-element:disabled{color:rgba(0,0,0,.38)}.mat-input-element{caret-color:#3f51b5}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent .mat-input-element{caret-color:#ff4081}.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{color:rgba(0,0,0,.87)}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{color:rgba(0,0,0,.87)}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{color:rgba(0,0,0,.54)}.mat-list-item-disabled{background-color:#eee}.mat-nav-list .mat-list-item{outline:0}.mat-nav-list .mat-list-item.mat-list-item-focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}.mat-list-option{outline:0}.mat-list-option.mat-list-item-focus,.mat-list-option:hover{background:rgba(0,0,0,.04)}.mat-menu-panel{background:#fff}.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}.mat-menu-item[disabled]{color:rgba(0,0,0,.38)}.mat-menu-item .mat-icon:not([color]),.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background{fill:#c5cae9}.mat-progress-bar-buffer{background-color:#c5cae9}.mat-progress-bar-fill::after{background-color:#3f51b5}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ff80ab}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ff80ab}.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ff4081}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#3f51b5}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ff4081}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}.mat-radio-disabled .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#3f51b5}.mat-radio-button.mat-primary .mat-radio-inner-circle{background-color:#3f51b5}.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element{background-color:rgba(63,81,181,.26)}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ff4081}.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#ff4081}.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:rgba(255,64,129,.26)}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle{background-color:#f44336}.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-select-content,.mat-select-panel-done-animating{background:#fff}.mat-select-value{color:rgba(0,0,0,.87)}.mat-select-placeholder{color:rgba(0,0,0,.42)}.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}.mat-select-arrow{color:rgba(0,0,0,.54)}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#3f51b5}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ff4081}.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#e91e63}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(233,30,99,.5)}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle .mat-ripple-element{background-color:rgba(233,30,99,.12)}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#3f51b5}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(63,81,181,.5)}.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-primary .mat-ripple-element{background-color:rgba(63,81,181,.12)}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(244,67,54,.5)}.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.12)}.mat-disabled .mat-slide-toggle-thumb{background-color:#bdbdbd}.mat-disabled .mat-slide-toggle-bar{background-color:rgba(0,0,0,.1)}.mat-slide-toggle-thumb{background-color:#fafafa}.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#3f51b5}.mat-primary .mat-slider-thumb-label-text{color:#fff}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ff4081}.mat-accent .mat-slider-thumb-label-text{color:#fff}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-slider-focus-ring{background-color:rgba(255,64,129,.2)}.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.38)}.mat-step-header .mat-step-icon{background-color:#3f51b5;color:#fff}.mat-step-header .mat-step-icon-not-touched{background-color:rgba(0,0,0,.38);color:#fff}.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(197,202,233,.3)}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#3f51b5}.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,128,171,.3)}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ff4081}.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(197,202,233,.3)}.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#3f51b5}.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,128,171,.3)}.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ff4081}.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:#fff}.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary{background:#3f51b5;color:#fff}.mat-toolbar.mat-accent{background:#ff4081;color:#fff}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-tooltip{background:rgba(97,97,97,.9)}.mat-snack-bar-container{background:#323232;color:#fff}.mat-simple-snackbar-action{color:#ff4081}p {\n  color: pink; }.task {\n  width: 300px; }.container {\n  background-color: white; }.button {\n  background-color: #e0186b;\n  margin-left: 20px;\n  border-radius: 10px; }.alert {\n  text-align: center;\n  color: black;\n  width: 100%;\n  -webkit-animation: shake 0.5s;\n          animation: shake 0.5s;\n  -webkit-animation-iteration-count: 1s;\n          animation-iteration-count: 1s; }.alert:hover {\n    -webkit-animation: shake 0.5s;\n            animation: shake 0.5s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite; }.strike {\n  text-decoration: line-through; }@-webkit-keyframes shake {\n  0% {\n    -webkit-transform: translate(1px, 1px) rotate(0deg);\n            transform: translate(1px, 1px) rotate(0deg); }\n  10% {\n    -webkit-transform: translate(-1px, -2px) rotate(-1deg);\n            transform: translate(-1px, -2px) rotate(-1deg); }\n  20% {\n    -webkit-transform: translate(-3px, 0px) rotate(1deg);\n            transform: translate(-3px, 0px) rotate(1deg); }\n  30% {\n    -webkit-transform: translate(3px, 2px) rotate(0deg);\n            transform: translate(3px, 2px) rotate(0deg); }\n  40% {\n    -webkit-transform: translate(1px, -1px) rotate(1deg);\n            transform: translate(1px, -1px) rotate(1deg); }\n  50% {\n    -webkit-transform: translate(-1px, 2px) rotate(-1deg);\n            transform: translate(-1px, 2px) rotate(-1deg); }\n  60% {\n    -webkit-transform: translate(-3px, 1px) rotate(0deg);\n            transform: translate(-3px, 1px) rotate(0deg); }\n  70% {\n    -webkit-transform: translate(3px, 1px) rotate(-1deg);\n            transform: translate(3px, 1px) rotate(-1deg); }\n  80% {\n    -webkit-transform: translate(-1px, -1px) rotate(1deg);\n            transform: translate(-1px, -1px) rotate(1deg); }\n  90% {\n    -webkit-transform: translate(1px, 2px) rotate(0deg);\n            transform: translate(1px, 2px) rotate(0deg); }\n  100% {\n    -webkit-transform: translate(1px, -2px) rotate(-1deg);\n            transform: translate(1px, -2px) rotate(-1deg); } }@keyframes shake {\n  0% {\n    -webkit-transform: translate(1px, 1px) rotate(0deg);\n            transform: translate(1px, 1px) rotate(0deg); }\n  10% {\n    -webkit-transform: translate(-1px, -2px) rotate(-1deg);\n            transform: translate(-1px, -2px) rotate(-1deg); }\n  20% {\n    -webkit-transform: translate(-3px, 0px) rotate(1deg);\n            transform: translate(-3px, 0px) rotate(1deg); }\n  30% {\n    -webkit-transform: translate(3px, 2px) rotate(0deg);\n            transform: translate(3px, 2px) rotate(0deg); }\n  40% {\n    -webkit-transform: translate(1px, -1px) rotate(1deg);\n            transform: translate(1px, -1px) rotate(1deg); }\n  50% {\n    -webkit-transform: translate(-1px, 2px) rotate(-1deg);\n            transform: translate(-1px, 2px) rotate(-1deg); }\n  60% {\n    -webkit-transform: translate(-3px, 1px) rotate(0deg);\n            transform: translate(-3px, 1px) rotate(0deg); }\n  70% {\n    -webkit-transform: translate(3px, 1px) rotate(-1deg);\n            transform: translate(3px, 1px) rotate(-1deg); }\n  80% {\n    -webkit-transform: translate(-1px, -1px) rotate(1deg);\n            transform: translate(-1px, -1px) rotate(1deg); }\n  90% {\n    -webkit-transform: translate(1px, 2px) rotate(0deg);\n            transform: translate(1px, 2px) rotate(0deg); }\n  100% {\n    -webkit-transform: translate(1px, -2px) rotate(-1deg);\n            transform: translate(1px, -2px) rotate(-1deg); } }.content {\n  text-align: center; }.hrLine {\n  color: #e0186b;\n  background-color: #e0186b; }.allTasks {\n  text-align: left;\n  word-wrap: break-word; }h2 {\n  text-align: center;\n  color: #e0186b;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder; }.remove {\n  color: red;\n  cursor: pointer; }.checkbox {\n  padding-left: 200px; }.done {\n  color: green;\n  margin-left: 20px; }.done:hover {\n    cursor: pointer; }@media only screen and (min-width: 768px) and (max-width: 1024px) {\n  .checkbox {\n    padding-left: 140px; } }@media only screen and (min-width: 375px) and (max-width: 812px) {\n  .checkbox {\n    width: 20px;\n    padding-left: 3px; }\n  .allTasks {\n    width: 250px; } }\n"

/***/ }),

/***/ "./src/home/home.component.ts":
/*!************************************!*\
  !*** ./src/home/home.component.ts ***!
  \************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(fm, dialog, el) {
        this.fm = fm;
        this.dialog = dialog;
        this.el = el;
        this.theTask = "";
        this.alertOn = false;
        this.allDone = [];
        this.getTask = [];
        this.theTask = '';
    }
    HomeComponent.prototype.removeTask = function (i) {
        this.getTask.splice(i, 1);
    };
    HomeComponent.prototype.addingTask = function (i) {
        if (this.theTask === "")
            this.alertOn = true;
        else {
            this.taskObject = {
                theTask: this.theTask,
                completed: false
            };
            this.alertOn = false;
            this.getTask.push(this.taskObject);
            this.theTask = "";
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('forEachTask'),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "eachTask", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/login/login.component.html":
/*!****************************************!*\
  !*** ./src/login/login.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12 flex-container\">\r\n        <div class=\"col-sm-6 form\">\r\n        <button type=\"button\" class=\"btn btn-purple\" (click)=\"redirectToLoginForm()\">Login</button><br/>\r\n        <button type=\"button\" class=\"btn btn-purple\" (click)=\"redirectToNewUserForm()\">New User</button>\r\n      </div>\r\n    </div>\r\n\r\n    \r\n    \r\n     "

/***/ }),

/***/ "./src/login/login.component.scss":
/*!****************************************!*\
  !*** ./src/login/login.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\n  display: flex;\n  justify-content: center;\n  text-align: center; }\n\n.form2 {\n  background-color: rgba(255, 255, 255, 0.5); }\n\n.form {\n  padding-top: 45px;\n  position: absolute;\n  border-color: black;\n  border-radius: 5px;\n  border-style: solid;\n  height: 180px;\n  width: 300px;\n  background-color: rgba(255, 255, 255, 0.5);\n  border-radius: 10px; }\n\nbutton {\n  border-radius: 10px;\n  width: 150px;\n  height: 35px;\n  margin-bottom: 20px; }\n\n.btn-purple {\n  background-color: darkblue;\n  color: white; }\n\n.btn-purple:hover {\n  background-color: white;\n  color: darkblue; }\n"

/***/ }),

/***/ "./src/login/login.component.ts":
/*!**************************************!*\
  !*** ./src/login/login.component.ts ***!
  \**************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _app_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/login.service */ "./src/app/login.service.ts");
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
    function LoginComponent(router, service) {
        this.router = router;
        this.service = service;
        this.loggedIn = false;
    }
    LoginComponent.prototype.redirectToLoginForm = function () {
        this.router.navigate(['/login']);
    };
    LoginComponent.prototype.redirectToNewUserForm = function () {
        this.router.navigate(['newuser']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/loginform/loginform.component.html":
/*!************************************************!*\
  !*** ./src/loginform/loginform.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12 flex-container\">\r\n  <div class=\"form\">\r\n    \r\n    <form class=\"col s12 colorform\" #userLoginForm=\"ngForm\" (ngSubmit)=\"loginSubmit(userLoginForm)\">\r\n      <div class=\"col-sm-12 align flex-container\">\r\n        <div class=\"col-sm-2 inline\"><span class=\"text\">Username: </span></div>\r\n        <div class=\"col-sm-6 block\"><input type=\"text\" class=\"form-control text\" name=\"UserName\" #UserName=\"ngModel\" [(ngModel)]=\"getUser.UserName\" placeholder=\"Username\"></div>\r\n      </div>\r\n      <br/><br/>\r\n      <div class=\"col-sm-12 flex-container\">\r\n          <div class=\"col-sm-2 inline\"><span class=\"text\">Password: </span></div>\r\n          <div class=\"col-sm-6 block\"><input type=\"password\" class=\"form-control text\" name=\"Password\" #Password=\"ngModel\" [(ngModel)]=\"getUser.Password\" placeholder=\"Password\"></div>\r\n      </div>\r\n      <div *ngIf=\"error\" class=\"errorLine\">Sorry, Incorrect Username or Password</div>\r\n        <br/><br/><br/>\r\n        <button (click)=\"redirectToLogin()\" type=\"button\" class=\"btn\">Back</button>\r\n        <button type=\"submit\" class=\"btn\">Login</button>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/loginform/loginform.component.scss":
/*!************************************************!*\
  !*** ./src/loginform/loginform.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\n  display: flex;\n  justify-content: center;\n  text-align: center; }\n\n.errorLine {\n  color: red;\n  font-weight: bold;\n  -webkit-animation: shake 0.5s;\n          animation: shake 0.5s;\n  background-color: white; }\n\n@-webkit-keyframes shake {\n  0% {\n    -webkit-transform: translate(1px, 1px) rotate(0deg);\n            transform: translate(1px, 1px) rotate(0deg); }\n  10% {\n    -webkit-transform: translate(-1px, -2px) rotate(-1deg);\n            transform: translate(-1px, -2px) rotate(-1deg); }\n  20% {\n    -webkit-transform: translate(-3px, 0px) rotate(1deg);\n            transform: translate(-3px, 0px) rotate(1deg); }\n  30% {\n    -webkit-transform: translate(3px, 2px) rotate(0deg);\n            transform: translate(3px, 2px) rotate(0deg); }\n  40% {\n    -webkit-transform: translate(1px, -1px) rotate(1deg);\n            transform: translate(1px, -1px) rotate(1deg); }\n  50% {\n    -webkit-transform: translate(-1px, 2px) rotate(-1deg);\n            transform: translate(-1px, 2px) rotate(-1deg); }\n  60% {\n    -webkit-transform: translate(-3px, 1px) rotate(0deg);\n            transform: translate(-3px, 1px) rotate(0deg); }\n  70% {\n    -webkit-transform: translate(3px, 1px) rotate(-1deg);\n            transform: translate(3px, 1px) rotate(-1deg); }\n  80% {\n    -webkit-transform: translate(-1px, -1px) rotate(1deg);\n            transform: translate(-1px, -1px) rotate(1deg); }\n  90% {\n    -webkit-transform: translate(1px, 2px) rotate(0deg);\n            transform: translate(1px, 2px) rotate(0deg); }\n  100% {\n    -webkit-transform: translate(1px, -2px) rotate(-1deg);\n            transform: translate(1px, -2px) rotate(-1deg); } }\n\n@keyframes shake {\n  0% {\n    -webkit-transform: translate(1px, 1px) rotate(0deg);\n            transform: translate(1px, 1px) rotate(0deg); }\n  10% {\n    -webkit-transform: translate(-1px, -2px) rotate(-1deg);\n            transform: translate(-1px, -2px) rotate(-1deg); }\n  20% {\n    -webkit-transform: translate(-3px, 0px) rotate(1deg);\n            transform: translate(-3px, 0px) rotate(1deg); }\n  30% {\n    -webkit-transform: translate(3px, 2px) rotate(0deg);\n            transform: translate(3px, 2px) rotate(0deg); }\n  40% {\n    -webkit-transform: translate(1px, -1px) rotate(1deg);\n            transform: translate(1px, -1px) rotate(1deg); }\n  50% {\n    -webkit-transform: translate(-1px, 2px) rotate(-1deg);\n            transform: translate(-1px, 2px) rotate(-1deg); }\n  60% {\n    -webkit-transform: translate(-3px, 1px) rotate(0deg);\n            transform: translate(-3px, 1px) rotate(0deg); }\n  70% {\n    -webkit-transform: translate(3px, 1px) rotate(-1deg);\n            transform: translate(3px, 1px) rotate(-1deg); }\n  80% {\n    -webkit-transform: translate(-1px, -1px) rotate(1deg);\n            transform: translate(-1px, -1px) rotate(1deg); }\n  90% {\n    -webkit-transform: translate(1px, 2px) rotate(0deg);\n            transform: translate(1px, 2px) rotate(0deg); }\n  100% {\n    -webkit-transform: translate(1px, -2px) rotate(-1deg);\n            transform: translate(1px, -2px) rotate(-1deg); } }\n\n.form {\n  padding-top: 45px;\n  position: absolute;\n  border-color: black;\n  border-radius: 5px;\n  border-style: solid;\n  width: 400px;\n  text-align: center;\n  background-color: rgba(255, 255, 255, 0.5);\n  border-radius: 10px; }\n\n.align {\n  text-align: center; }\n\n.block {\n  display: inline-block;\n  padding-left: 40px; }\n\n.text {\n  color: black; }\n\n.align {\n  justify-content: center; }\n\n.btn {\n  background-color: darkblue;\n  color: white;\n  border-radius: 10px;\n  width: 100px;\n  height: 35px;\n  margin-bottom: 20px;\n  cursor: pointer; }\n\n.btn:hover {\n    background-color: white;\n    color: darkblue;\n    cursor: pointer; }\n\n.inline {\n  display: inline;\n  padding-left: 20px;\n  padding-top: 5px; }\n"

/***/ }),

/***/ "./src/loginform/loginform.component.ts":
/*!**********************************************!*\
  !*** ./src/loginform/loginform.component.ts ***!
  \**********************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _app_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/login.service */ "./src/app/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(router, service) {
        this.router = router;
        this.service = service;
        this.error = false;
        this.isLoggedIn = false;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.getUser = {
            UserName: '',
            Password: '',
            Email: '',
            FirstName: '',
            LastName: ''
        };
    };
    LoginFormComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.getUser = {
            UserName: '',
            Password: '',
            Email: '',
            FirstName: '',
            LastName: ''
        };
    };
    LoginFormComponent.prototype.redirectToLogin = function () {
        this.router.navigate(['']);
    };
    LoginFormComponent.prototype.keyDownSubmit = function (event, form) {
        debugger;
        if (event.keyCode == 13) {
            this.loginSubmit(form);
        }
    };
    LoginFormComponent.prototype.loginSubmit = function (form) {
        var _this = this;
        this.service.getUser(form.value)
            .subscribe(function (data) {
            try {
                console.log(data);
                if (data == null) {
                    _this.error = true;
                    return;
                }
                if (data.UserName != null) {
                    _this.resetForm();
                    _this.service.show();
                    _this.isLoggedIn = true;
                    _this.router.navigate(['home']);
                }
                else
                    alert("something went wrong");
            }
            catch (ex) {
                var error = ex.toString();
                console.log(error);
            }
        });
    };
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loginform',
            template: __webpack_require__(/*! ./loginform.component.html */ "./src/loginform/loginform.component.html"),
            styles: [__webpack_require__(/*! ./loginform.component.scss */ "./src/loginform/loginform.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ "./src/navigation/navigation.component.html":
/*!**************************************************!*\
  !*** ./src/navigation/navigation.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n                <mat-toolbar class=\"toolbar\" *ngIf=\"service.visible\" >\r\n                       <span class=\"centertabs\">\r\n                        <span class=\"align\" routerLink=\"/home\"><mat-icon>home</mat-icon> Home </span>\r\n                        <span class=\"align\" routerLink=\"/destinations\"> <mat-icon>commute</mat-icon> Destinations</span>\r\n                        <span class=\"align\" routerLink=\"/about\"><mat-icon>accessibility</mat-icon> About</span>\r\n      \r\n                  </span>\r\n                \r\n                  \r\n                  <mat-button-toggle-group  class=\"toggleButton\">\r\n                        <mat-button-toggle value=\"justify\" [matMenuTriggerFor]=\"menu\">\r\n                              <mat-icon>format_align_justify</mat-icon>\r\n                        </mat-button-toggle>\r\n                    </mat-button-toggle-group>\r\n                  \r\n                                         \r\n                                          <mat-menu #menu=\"matMenu\">\r\n                                            <button mat-menu-item routerLink=\"/home\">\r\n                                            <mat-icon>home</mat-icon>\r\n                                            <span>Home</span>\r\n                                          </button>\r\n                                            <button mat-menu-item routerLink=\"/destinations\">\r\n                                            <mat-icon>commute</mat-icon>\r\n                                            <span>Destinations</span>\r\n                                          </button>\r\n                                            <button mat-menu-item routerLink=\"/about\">\r\n                                                <mat-icon>accessibility</mat-icon>\r\n                                            <span>About</span>\r\n                                          </button>\r\n                                          </mat-menu>\r\n                                       "

/***/ }),

/***/ "./src/navigation/navigation.component.scss":
/*!**************************************************!*\
  !*** ./src/navigation/navigation.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 56px;letter-spacing:-.05em}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.02em}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.005em}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card-title{font-size:24px;font-weight:400}.mat-card-content,.mat-card-header .mat-card-title,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:13px;line-height:18px}.mat-chip .mat-chip-remove.mat-icon{font-size:18px}.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell{font-size:14px}.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.4375em 0;border-top:.84375em solid transparent}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.28125em}.mat-form-field-underline{bottom:1.25em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.54167em;top:calc(100% - 1.66667em)}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset{font-size:14px;padding-top:9px;padding-bottom:9px}.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{font-size:16px}.mat-list .mat-list-item .mat-line,.mat-nav-list .mat-list-item .mat-line,.mat-selection-list .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{font-size:16px}.mat-list .mat-list-option .mat-line,.mat-nav-list .mat-list-option .mat-line,.mat-selection-list .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-list[dense] .mat-list-item,.mat-nav-list[dense] .mat-list-item,.mat-selection-list[dense] .mat-list-item{font-size:12px}.mat-list[dense] .mat-list-item .mat-line,.mat-nav-list[dense] .mat-list-item .mat-line,.mat-selection-list[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-list-option,.mat-nav-list[dense] .mat-list-option,.mat-selection-list[dense] .mat-list-option{font-size:12px}.mat-list[dense] .mat-list-option .mat-line,.mat-nav-list[dense] .mat-list-option .mat-line,.mat-selection-list[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-subheader,.mat-nav-list[dense] .mat-subheader,.mat-selection-list[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-ripple{overflow:hidden}@media screen and (-ms-high-contrast:active){.mat-ripple{display:none}}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.288)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-option{color:rgba(0,0,0,.87)}.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#3f51b5}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ff4081}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}.mat-optgroup-label{color:rgba(0,0,0,.54)}.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox::after{color:#fafafa}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ff4081}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#3f51b5}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-button,.mat-icon-button,.mat-stroked-button{background:0 0}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:rgba(63,81,181,.12)}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:rgba(255,64,129,.12)}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:rgba(244,67,54,.12)}.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#3f51b5}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ff4081}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-fab,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-fab.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff}.mat-fab.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:#fff}.mat-fab.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-fab.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#3f51b5}.mat-fab.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ff4081}.mat-fab.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-fab.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.2)}.mat-fab.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(255,255,255,.2)}.mat-fab.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.2)}.mat-button.mat-primary .mat-ripple-element{background-color:rgba(63,81,181,.1)}.mat-button.mat-accent .mat-ripple-element{background-color:rgba(255,64,129,.1)}.mat-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.1)}.mat-flat-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-flat-button.mat-primary{color:#fff}.mat-flat-button.mat-accent{color:#fff}.mat-flat-button.mat-warn{color:#fff}.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-flat-button.mat-primary{background-color:#3f51b5}.mat-flat-button.mat-accent{background-color:#ff4081}.mat-flat-button.mat-warn{background-color:#f44336}.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-flat-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.2)}.mat-flat-button.mat-accent .mat-ripple-element{background-color:rgba(255,255,255,.2)}.mat-flat-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.2)}.mat-icon-button.mat-primary .mat-ripple-element{background-color:rgba(63,81,181,.2)}.mat-icon-button.mat-accent .mat-ripple-element{background-color:rgba(255,64,129,.2)}.mat-icon-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.2)}.mat-button-toggle{color:rgba(0,0,0,.38)}.mat-button-toggle.cdk-focused .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-disabled{background-color:#eee;color:rgba(0,0,0,.26)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-card{background:#fff;color:rgba(0,0,0,.87)}.mat-card-subtitle{color:rgba(0,0,0,.54)}.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#3f51b5}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ff4081}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:#b0b0b0}.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(63,81,181,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(255,64,129,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-chip:not(.mat-basic-chip){background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip:not(.mat-basic-chip) .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip:not(.mat-basic-chip) .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff}.mat-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-chip-selected.mat-accent{background-color:#ff4081;color:#fff}.mat-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover{opacity:.54}.mat-table{background:#fff}.mat-header-row,.mat-row{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell{color:rgba(0,0,0,.54)}.mat-cell{color:rgba(0,0,0,.87)}.mat-datepicker-content{background-color:#fff;color:rgba(0,0,0,.87)}.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}.mat-calendar-next-button,.mat-calendar-previous-button{color:rgba(0,0,0,.54)}.mat-calendar-table-header{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-selected{background-color:#3f51b5;color:#fff}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(63,81,181,.4)}.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-datepicker-toggle-active{color:#3f51b5}.mat-dialog-container{background:#fff;color:rgba(0,0,0,.87)}.mat-divider{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-action-row{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}.mat-form-field-label{color:rgba(0,0,0,.54)}.mat-hint{color:rgba(0,0,0,.54)}.mat-focused .mat-form-field-label{color:#3f51b5}.mat-focused .mat-form-field-label.mat-accent{color:#ff4081}.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#ff4081}.mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 1px;background-repeat:repeat-x}.mat-form-field-ripple{background-color:#3f51b5}.mat-form-field-ripple.mat-accent{background-color:#ff4081}.mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field-invalid .mat-form-field-label{color:#f44336}.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}.mat-form-field-invalid .mat-form-field-ripple{background-color:#f44336}.mat-error{color:#f44336}.mat-icon.mat-primary{color:#3f51b5}.mat-icon.mat-accent{color:#ff4081}.mat-icon.mat-warn{color:#f44336}.mat-input-element:disabled{color:rgba(0,0,0,.38)}.mat-input-element{caret-color:#3f51b5}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent .mat-input-element{caret-color:#ff4081}.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{color:rgba(0,0,0,.87)}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{color:rgba(0,0,0,.87)}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{color:rgba(0,0,0,.54)}.mat-list-item-disabled{background-color:#eee}.mat-nav-list .mat-list-item{outline:0}.mat-nav-list .mat-list-item.mat-list-item-focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}.mat-list-option{outline:0}.mat-list-option.mat-list-item-focus,.mat-list-option:hover{background:rgba(0,0,0,.04)}.mat-menu-panel{background:#fff}.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}.mat-menu-item[disabled]{color:rgba(0,0,0,.38)}.mat-menu-item .mat-icon:not([color]),.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background{fill:#c5cae9}.mat-progress-bar-buffer{background-color:#c5cae9}.mat-progress-bar-fill::after{background-color:#3f51b5}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ff80ab}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ff80ab}.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ff4081}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#3f51b5}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ff4081}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}.mat-radio-disabled .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#3f51b5}.mat-radio-button.mat-primary .mat-radio-inner-circle{background-color:#3f51b5}.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element{background-color:rgba(63,81,181,.26)}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ff4081}.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#ff4081}.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:rgba(255,64,129,.26)}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle{background-color:#f44336}.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-select-content,.mat-select-panel-done-animating{background:#fff}.mat-select-value{color:rgba(0,0,0,.87)}.mat-select-placeholder{color:rgba(0,0,0,.42)}.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}.mat-select-arrow{color:rgba(0,0,0,.54)}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#3f51b5}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ff4081}.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#e91e63}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(233,30,99,.5)}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle .mat-ripple-element{background-color:rgba(233,30,99,.12)}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#3f51b5}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(63,81,181,.5)}.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-primary .mat-ripple-element{background-color:rgba(63,81,181,.12)}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(244,67,54,.5)}.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.12)}.mat-disabled .mat-slide-toggle-thumb{background-color:#bdbdbd}.mat-disabled .mat-slide-toggle-bar{background-color:rgba(0,0,0,.1)}.mat-slide-toggle-thumb{background-color:#fafafa}.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#3f51b5}.mat-primary .mat-slider-thumb-label-text{color:#fff}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ff4081}.mat-accent .mat-slider-thumb-label-text{color:#fff}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-slider-focus-ring{background-color:rgba(255,64,129,.2)}.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.38)}.mat-step-header .mat-step-icon{background-color:#3f51b5;color:#fff}.mat-step-header .mat-step-icon-not-touched{background-color:rgba(0,0,0,.38);color:#fff}.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(197,202,233,.3)}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#3f51b5}.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,128,171,.3)}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ff4081}.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(197,202,233,.3)}.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#3f51b5}.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,128,171,.3)}.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ff4081}.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:#fff}.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary{background:#3f51b5;color:#fff}.mat-toolbar.mat-accent{background:#ff4081;color:#fff}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-tooltip{background:rgba(97,97,97,.9)}.mat-snack-bar-container{background:#323232;color:#fff}.mat-simple-snackbar-action{color:#ff4081}.navbar {\n  background-color: black;\n  color: white;\n  border-style: solid;\n  border-color: blue; }button {\n  color: white; }.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto; }.align {\n  padding-right: 80px; }.align:hover {\n    color: #ff1d8e; }.align:active {\n    color: green; }.toggleButton {\n  background-color: white; }.centertabs {\n  justify-content: center;\n  flex: 1 1 auto; }.toolbar {\n  background-color: #2E2D88;\n  color: white; }@media only screen and (min-width: 600px) {\n  .toggleButton {\n    display: none; } }@media only screen and (max-width: 600px) {\n  .align {\n    display: none; } }\n"

/***/ }),

/***/ "./src/navigation/navigation.component.ts":
/*!************************************************!*\
  !*** ./src/navigation/navigation.component.ts ***!
  \************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var app_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/login.service */ "./src/app/login.service.ts");
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
    function NavigationComponent(router, service) {
        this.router = router;
        this.service = service;
        this.success = true;
        this.loggedIn = false;
    }
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], app_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/newuserform/newuserform.component.html":
/*!****************************************************!*\
  !*** ./src/newuserform/newuserform.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"col-sm-12 flex-container\">\r\n    <div class=\"col-sm-12 form\">\r\n      <div class=\"row\">\r\n          <div>\r\n              <div>\r\n                  <div class=\"sm-jumbotron\">\r\n                      <h2>User Registration</h2>\r\n                  </div>\r\n                  <form class=\"col s12 colorform\" #userRegistrationForm=\"ngForm\" (ngSubmit)=\"OnSubmit(userRegistrationForm)\">\r\n                      <div class=\"row\">\r\n                          <div class=\"input-field\">\r\n                              <mat-form-field>\r\n                                    <mat-label for=\"username\">Username</mat-label>\r\n                            <input matInput id=\"username\" class=\"validate\" type=\"text\" pattern=\"[a-zA-Z ]*\" ngModel  name=\"UserName\" #UserName=\"ngModel\" [(ngModel)]=\"user.UserName\" placeholder=\"Username\" required>\r\n                            <mat-error *ngIf=\"user.UserName == ''\">Required Field</mat-error>\r\n                            <div class=\"errorformat\" *ngIf=\"usernameError\">Username already exists</div>\r\n                            \r\n                        </mat-form-field>\r\n                       \r\n                          </div>\r\n                          \r\n                          <div class=\"input-field\">\r\n                                <mat-form-field>\r\n                                        <mat-label for=\"Password\" [attr.data.error]=\"Password.errors!=null?(Password.errors.required?'Required field!':'Minimum 3 characters needed'):''\">Password</mat-label>\r\n                                <input matInput class=\"validate\" type=\"password\" name=\"Password\" #Password=\"ngModel\" [(ngModel)]=\"user.Password\" placeholder=\"Password\" required minlength=\"3\">\r\n                                <mat-error *ngIf=\"user.Password == ''\">Required Field!</mat-error>\r\n                                <mat-error *ngIf=\"user.Password?.length < 3 && user.Password != ''\">Minimum 3 Characters</mat-error>\r\n                                </mat-form-field>\r\n                            </div>\r\n                      </div>\r\n                      <div class=\"row row-email\">\r\n                            <div class=\"input-field\">\r\n                                <mat-form-field>\r\n                               <mat-label data-error=\"Invalid Email!\">Email</mat-label>\r\n                              <input matInput class=\"validate\" type=\"text\" name=\"Email\" #Email=\"ngModel\" [(ngModel)]=\"user.Email\" placeholder=\"Email\" email required>\r\n                             <mat-error>Invalid Email!</mat-error>\r\n                            </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                      <div class=\"row\">\r\n                            <div class=\"input-field\">\r\n                                <mat-form-field>\r\n                                        <mat-label>First Name</mat-label>\r\n                              <input matInput type=\"text\" name=\"FirstName\" #FirstName=\"ngModel\" placeholder=\"First Name\" [(ngModel)]=\"user.FirstName\">\r\n\r\n                            </mat-form-field>\r\n                            </div>\r\n                            <div class=\"input-field\">\r\n                                    <mat-form-field>\r\n                                  <mat-label>Last Name</mat-label>\r\n                                  <input  matInput type=\"text\" name=\"LastName\" #LastName=\"ngModel\" [(ngModel)]=\"user.LastName\" placeholder=\"Last Name\">\r\n                                    </mat-form-field>\r\n                              </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                                <div class=\"col-sm-12 buttons\">\r\n                                    <button class=\"col-sm-4 btn\" type=\"button\" (click)=\"redirectToLogin()\">Back</button>\r\n                                    <button  class=\"col-sm-4 btn\" type=\"submit\" >Submit</button>\r\n                                </div>\r\n                            </div>\r\n                  </form>\r\n              </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    </div>"

/***/ }),

/***/ "./src/newuserform/newuserform.component.scss":
/*!****************************************************!*\
  !*** ./src/newuserform/newuserform.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container, .sm-jumbotron, .row-email {\n  display: flex;\n  justify-content: center;\n  text-align: center; }\n\n.form {\n  padding-top: 45px;\n  position: absolute;\n  border-color: black;\n  border-radius: 5px;\n  border-style: solid;\n  background-color: rgba(255, 255, 255, 0.5);\n  border-radius: 10px;\n  width: 435px;\n  padding-left: 50px; }\n\nmat-error {\n  background-color: white; }\n\n.errorformat {\n  background-color: white;\n  color: red;\n  font-size: 16px; }\n\n.colorform {\n  color: black; }\n\nmat-label {\n  color: black;\n  font-weight: bolder; }\n\n.btn {\n  background-color: darkblue;\n  color: white;\n  border-radius: 10px;\n  width: 100%;\n  cursor: pointer; }\n\n.btn:hover {\n    background-color: white;\n    color: darkblue;\n    cursor: pointer; }\n\n.mat-error {\n  font-size: 16px; }\n\nh2 {\n  text-decoration: underline;\n  color: darkblue; }\n\n@media only screen and (max-width: 640px) {\n  .form {\n    width: 280px; } }\n\n@media only screen and (max-width: 800px) and (min-width: 641px) {\n  .form {\n    width: 400px;\n    position: relative; } }\n\n@media only screen and (max-width: 800px) and (min-width: 768px) {\n  .form {\n    width: 700px; } }\n\n@media only screen and (max-width: 812px) and (min-width: 375px) {\n  .flex-container {\n    display: flex;\n    text-align: left; }\n  .row-email {\n    justify-content: left; }\n  .buttons {\n    padding-right: 70px; }\n  .sm-jumbotron {\n    justify-content: left;\n    text-align: left; } }\n\n@media only screen and (max-width: 1024px) and (min-width: 768px) {\n  .flex-container {\n    width: 600px; }\n  .form {\n    margin-left: 160px;\n    padding-left: 120px; }\n  h2 {\n    justify-content: left; }\n  .row-email {\n    justify-content: center; }\n  .buttons, h2 {\n    justify-content: center;\n    margin-left: 80px; } }\n\n@media only screen and (max-width: 739px) and (min-width: 400px) {\n  .flex-container {\n    display: flex;\n    text-align: left; }\n  .row-email {\n    justify-content: left; }\n  .buttons {\n    padding-right: 70px; }\n  .sm-jumbotron {\n    justify-content: left;\n    text-align: left; } }\n\n@media only screen and (max-width: 1366px) and (min-width: 1024px) {\n  .form {\n    width: 800px;\n    margin-left: 220px; }\n  .buttons, h2 {\n    padding: 0;\n    margin: 0; } }\n\n@media only screen and (max-width: 568px) and (min-width: 320px) {\n  .row-email, .sm-jumbotron {\n    justify-content: left; }\n  .sm-jumbotron {\n    text-align: left; }\n  .buttons {\n    width: 70%; } }\n\n@media only screen and (max-width: 812px) and (min-width: 375px) {\n  .buttons {\n    margin: 0 auto; } }\n\n@media only screen and (max-width: 1366px) and (min-width: 768px) {\n  .form {\n    margin: 0 auto;\n    padding: 0;\n    width: 580px; }\n  .colorform {\n    padding-left: 145px; }\n  .sm-jumbotron {\n    justify-content: center;\n    margin-left: 90px;\n    padding-top: 10px;\n    padding-bottom: 20px; } }\n"

/***/ }),

/***/ "./src/newuserform/newuserform.component.ts":
/*!**************************************************!*\
  !*** ./src/newuserform/newuserform.component.ts ***!
  \**************************************************/
/*! exports provided: NewUserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserFormComponent", function() { return NewUserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _app_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/login.service */ "./src/app/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewUserFormComponent = /** @class */ (function () {
    function NewUserFormComponent(router, service) {
        this.router = router;
        this.service = service;
        this.usernameError = false;
        this.regexPattern = '^[a-zA-Z0-9._-]+$';
    }
    NewUserFormComponent.prototype.ngOnInit = function () {
        this.user = {
            UserName: '',
            Password: '',
            Email: '',
            FirstName: '',
            LastName: ''
        };
    };
    NewUserFormComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.user = {
            UserName: '',
            Password: '',
            Email: '',
            FirstName: '',
            LastName: ''
        };
    };
    NewUserFormComponent.prototype.redirectToLogin = function () {
        this.router.navigate(['']);
    };
    NewUserFormComponent.prototype.OnSubmit = function (form) {
        var _this = this;
        this.service.registerUser(form.value)
            .subscribe(function (data) {
            try {
                if (data.Succeeded == true) {
                    _this.resetForm();
                    _this.service.show();
                    _this.router.navigate(['home']);
                }
            }
            catch (ex) {
                if (_this.user.UserName != '')
                    _this.usernameError = true;
            }
        });
    };
    NewUserFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'newuserform',
            template: __webpack_require__(/*! ./newuserform.component.html */ "./src/newuserform/newuserform.component.html"),
            styles: [__webpack_require__(/*! ./newuserform.component.scss */ "./src/newuserform/newuserform.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], NewUserFormComponent);
    return NewUserFormComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sgulizia\Desktop\Project_\MyAngularPrjoject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map