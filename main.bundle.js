webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Loading the Portfolio';
        var path = localStorage.getItem('path');
        if (path) {
            localStorage.removeItem('path');
            if (path.includes('projects/remotable')) {
                var remotablePath = location.protocol + "//" + document.location.hostname + '/projects/remotable';
                window.location.assign(remotablePath);
            }
            else {
                this.router.navigate([path]);
            }
        }
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Nika D/Documents/Software Development Projects/Portfolio/src/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_header_header_component__ = __webpack_require__("./src/app/header/header-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_main_screen_main_screen_component__ = __webpack_require__("./src/app/main-screen/main-screen-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_portfolio_portfolio_component__ = __webpack_require__("./src/app/portfolio/portfolio-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_resume_resume_component__ = __webpack_require__("./src/app/resume/resume-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_footer_footer_component__ = __webpack_require__("./src/app/footer/footer-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_contact_me_contact_me_component__ = __webpack_require__("./src/app/contact-me/contact-me-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_project_project_component__ = __webpack_require__("./src/app/project/project-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_portfolio_pipes_portfolio_pipe__ = __webpack_require__("./src/app/portfolio/pipes/portfolio-pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_skills_skills_component__ = __webpack_require__("./src/app/skills/skills-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_scroll_to__ = __webpack_require__("./node_modules/ng2-scroll-to/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_scroll_to___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_scroll_to__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7_app_main_screen_main_screen_component__["a" /* MainScreenComponent */], pathMatch: 'full' },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_12_app_project_project_component__["a" /* ProjectComponent */] },
    { path: '**', redirectTo: '' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6_app_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7_app_main_screen_main_screen_component__["a" /* MainScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_8_app_portfolio_portfolio_component__["a" /* PortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_9_app_resume_resume_component__["a" /* ResumeComponent */],
                __WEBPACK_IMPORTED_MODULE_11_app_contact_me_contact_me_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_10_app_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12_app_project_project_component__["a" /* ProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_13_app_portfolio_pipes_portfolio_pipe__["a" /* PortfolioPipe */],
                __WEBPACK_IMPORTED_MODULE_14_app_skills_skills_component__["a" /* SkillsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_15_ng2_scroll_to__["ScrollToModule"].forRoot(),
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Nika D/Documents/Software Development Projects/Portfolio/src/app.module.js.map

/***/ }),

/***/ "./src/app/contact-me/contact-me-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent(http) {
        this.http = http;
        this.baseURL = "https://docs.google.com/forms/d/e/1FAIpQLScBm_9eC3QVjwj5CUdPvfmX5iD7vGPohDZobIWxtFo9BVf0IQ/formResponse?";
        this.name_google = "entry.889281906";
        this.email_google = "entry.278553536";
        this.message_google = "entry.865624051";
        this.success = false;
    }
    ContactComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var submitURL = (this.baseURL + this.name_google + "=" + f.value.name + "&" + this.email_google + "=" + f.value.email + "&" + this.message_google + "=" + f.value.message) + "&submit=Submit";
        console.log(submitURL);
        this.http.post(submitURL, "").subscribe(function (data) {
            _this.success = true;
        });
        f.reset();
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'contacts',
            template: __webpack_require__("./src/app/contact-me/contact-me.html"),
            styles: [__webpack_require__("./src/app/contact-me/contact-me.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], ContactComponent);
    return ContactComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Nika D/Documents/Software Development Projects/Portfolio/src/contact-me-component.js.map

/***/ }),

/***/ "./src/app/contact-me/contact-me.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contacts\" id=\"contacts\">\r\n    <div class=\"container\">\r\n        <h2 class=\"section-title\">Contact me</h2>\r\n        <p class=\"overview\">Looking forward to hearing from you!</p>\r\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleInputEmail1\">Your Name</label>\r\n                        <input type=\"text\" class=\"form-control\" [ngModel]=\"name\" required name=\"name\" placeholder=\"Your Name\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleInputEmail1\">Email address</label>\r\n                        <input type=\"email\" class=\"form-control\" aria-describedby=\"emailHelp\" placeholder=\"Your email\" name=\"email\" [ngModel]=\"email\" required>\r\n                        <small id=\"emailHelp\" class=\"form-text text-muted\">I'll never share your email with anyone else.</small>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleInputEmail1\">Message</label>\r\n                        <textarea class=\"form-control\" name=\"message\" placeholder=\"Type your message here\" [ngModel]=\"message\" required></textarea>\r\n                    </div>\r\n                    <button type=\"submit\" class=\"hvr-back-pulse\" id=\"form-submit\">Send message</button>\r\n                    <p class=\"thankyou\" *ngIf=\"success\">Thank you for your message. I'll contact you shortly</p>\r\n                </div>\r\n                <div class=\"col-md-6 text-center\">\r\n                    <img class=\"poster\" src=\"../assets/email.png\" alt=\"work hard\">\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/contact-me/contact-me.scss":
/***/ (function(module, exports) {

module.exports = ".contacts {\n  color: #000;\n  padding: 50px 0 80px 0; }\n\np {\n  width: 46%;\n  font-size: 16px;\n  margin: 0px 0 30px 0; }\n\nform {\n  margin-top: 30px; }\n\ntextarea {\n  max-width: 100%;\n  min-height: 80px; }\n\nbutton {\n  background: #ffd400;\n  color: #000;\n  font-size: 16px;\n  border: none;\n  padding: 10px 25px;\n  border-radius: 5px;\n  cursor: pointer; }\n\n.poster {\n  width: 75%; }\n\n.thankyou {\n  margin-top: 15px;\n  width: 100%; }\n\n@media screen and (max-width: 991px) {\n  .poster {\n    margin: 20px 0;\n    width: 100%; } }\n\n@media screen and (max-width: 767px) {\n  p {\n    width: 100%; } }\n"

/***/ }),

/***/ "./src/app/footer/footer-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer',
            template: __webpack_require__("./src/app/footer/footer.html"),
            styles: [__webpack_require__("./src/app/footer/footer.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Users/Nika D/Documents/Software Development Projects/Portfolio/src/footer-component.js.map

/***/ }),

/***/ "./src/app/footer/footer.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer clearfix\">\r\n    <div class=\"container\">\r\n        <p class=\"credentials\">© 2020 / Designed and Developed by Veronika Dmytryk / Hosted using <a href=\"https://pages.github.com/\">GitHub Pages</a></p>\r\n        <div class=\"social-links\">\r\n            <ul class=\"social-links\">\r\n                <li><a href=\"mailto:veronika.dmytryk@gmail.com\"><i class=\"fa fa-envelope\"></i></a></li>\r\n                <li><a href=\"https://github.com/VeronikaDmytryk\" target=\"_blank\"><i class=\"fa fa-github-square\"></i></a></li>\r\n                <li><a href=\"https://www.linkedin.com/in/veronika-dmytryk/\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.scss":
/***/ (function(module, exports) {

module.exports = ".footer {\n  padding: 15px 0;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 80px auto 0 auto; }\n\n.social-links {\n  float: right;\n  padding: 0; }\n\n.social-links li {\n    cursor: pointer;\n    display: inline-block; }\n\n.social-links li a {\n      padding: 0 15px;\n      color: #000;\n      -webkit-transition: all 0.4s ease;\n      transition: all 0.4s ease; }\n\n.social-links li a:hover, .social-links li a:active {\n      color: #000;\n      color: #ffd400; }\n\n.credentials {\n  display: inline-block;\n  margin: 0; }\n\n@media screen and (max-width: 480px) {\n  .footer {\n    text-align: center; }\n  .social-links {\n    margin-top: 5px;\n    display: inline-block;\n    float: none; } }\n"

/***/ }),

/***/ "./src/app/header/header-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.path = this.activatedRoute.snapshot.url[0];
        this.resumeLink = "http://veronikadmytryk.net/files/Resume%20-%20Veronika%20Dmytryk.pdf";
    }
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header',
            template: __webpack_require__("./src/app/header/header.html"),
            styles: [__webpack_require__("./src/app/header/header.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nika D/Documents/Software Development Projects/Portfolio/src/header-component.js.map

/***/ }),

/***/ "./src/app/header/header.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'header-light': !path, 'header-dark': path}\" >\r\n    <div class=\"container\">\r\n        <a [routerLink]=\"['']\" class=\"name\">Veronika\r\n            <span>Dmytryk</span>\r\n        </a>\r\n        <div class=\"left-menu\">\r\n            <ul class=\"left-menu_links\">\r\n                <li class=\"hvr-underline-from-center\"><a scrollTo [routerLink]=\"''\" fragment=\"portfolio\">Portfolio</a></li>\r\n                <li class=\"hvr-underline-from-center\"><a scrollTo [routerLink]=\"''\" fragment=\"skills\">Skills</a></li>\r\n                <li class=\"hvr-underline-from-center\"><a scrollTo [routerLink]=\"''\" fragment=\"resume\">Resume</a></li>\r\n            </ul>\r\n           <a scrollTo [routerLink]=\"''\" fragment=\"contacts\"><button class=\"hvr-back-pulse\">Contact Me</button></a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/header/header.scss":
/***/ (function(module, exports) {

module.exports = ".header-light {\n  padding: 22px 0;\n  color: #fff; }\n  .header-light .left-menu_links {\n    padding-top: 10px; }\n  .header-light .left-menu_links li {\n      font-size: 16px;\n      margin-right: 30px;\n      cursor: pointer; }\n  .header-light .left-menu_links li a,\n      .header-light .left-menu_links li a:hover,\n      .header-light .left-menu_links li a:visited,\n      .header-light .left-menu_links li a:active {\n        padding: 0;\n        color: #fff; }\n  .header-light a.name {\n    font-size: 18px;\n    display: inline-block;\n    font-weight: 300;\n    margin: 10px 0 0 0;\n    color: #fff;\n    text-decoration: none; }\n  .header-light a.name span {\n      font-weight: 700; }\n  .header-dark {\n  padding: 22px 0;\n  color: #000; }\n  .header-dark .left-menu_links {\n    padding-top: 10px; }\n  .header-dark .left-menu_links li {\n      font-size: 16px;\n      margin-right: 30px;\n      padding: 0;\n      cursor: pointer; }\n  .header-dark .left-menu_links li a,\n      .header-dark .left-menu_links li a:hover,\n      .header-dark .left-menu_links li a:visited,\n      .header-dark .left-menu_links li a:active {\n        padding: 0;\n        color: #000; }\n  .header-dark .left-menu_links li:hover,\n    .header-dark .left-menu_links li:active,\n    .header-dark .left-menu_links li:focus {\n      background: unset; }\n  .header-dark a.name {\n    font-size: 18px;\n    display: inline-block;\n    font-weight: light;\n    margin: 10px 0 0 0;\n    color: #000;\n    text-decoration: none; }\n  .header-dark a.name span {\n      font-weight: bold; }\n  .left-menu {\n  float: right; }\n  .left-menu .left-menu_links {\n    float: left; }\n  button {\n  background: #ffd400;\n  color: #000;\n  font-size: 16px;\n  border: none;\n  padding: 10px 25px;\n  border-radius: 5px; }\n  @media screen and (max-width: 640px) {\n  .left-menu_links {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/main-screen/main-screen-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainScreenComponent = (function () {
    function MainScreenComponent() {
    }
    MainScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'main-screen',
            template: __webpack_require__("./src/app/main-screen/main-screen.html"),
            styles: [__webpack_require__("./src/app/main-screen/main-screen.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], MainScreenComponent);
    return MainScreenComponent;
}());
//# sourceMappingURL=C:/Users/Nika D/Documents/Software Development Projects/Portfolio/src/main-screen-component.js.map

/***/ }),

/***/ "./src/app/main-screen/main-screen.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-screen\">\r\n        <header></header>\r\n        <div class=\"container\">\r\n                <h1 class=\"position\">Software Engineer</h1>\r\n                <p class=\"overview\">I am a student at Bellevue College pursuing \r\n                        Computer Science Bachelor's Degree with a background in aerospace engineering.\r\n                        Passionate about learning new technologies and solving challenging problems.\r\n                        Self-motivated, willing to put in the time and energy to achieve my goals.</p>\r\n        </div>\r\n</div>\r\n<portfolio></portfolio>\r\n<skills></skills>\r\n<resume></resume>\r\n<contacts></contacts>\r\n<footer></footer>"

/***/ }),

/***/ "./src/app/main-screen/main-screen.scss":
/***/ (function(module, exports) {

module.exports = ".main-screen {\n  background: url('main-screen.7d3d8ac9764e28a8c206.jpg') center no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  color: #fff;\n  min-height: 100vh; }\n\nh1 {\n  margin-top: 22vh;\n  font-size: 35px;\n  font-weight: 600; }\n\np {\n  width: 46%;\n  font-size: 130%;\n  padding-bottom: 200px; }\n\n@media screen and (max-width: 767px) {\n  .main-screen {\n    min-height: 500px; }\n  h1 {\n    margin-top: 10%; }\n  p {\n    width: 90%; } }\n\n@media screen and (max-width: 480px) {\n  .main-screen {\n    height: 100vh; }\n  h1 {\n    margin-top: 18vh; } }\n"

/***/ }),

/***/ "./src/app/portfolio/pipes/portfolio-pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioPipe = (function () {
    function PortfolioPipe() {
    }
    PortfolioPipe.prototype.transform = function (projects, arg) {
        if (!arg) {
            return projects;
        }
        if (typeof projects === 'object') {
            var arrayOfProjects = projects;
            return arrayOfProjects.filter(function (project) { return project.type == arg; });
        }
        else {
            return null;
        }
    };
    PortfolioPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: "portfolioPipe",
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], PortfolioPipe);
    return PortfolioPipe;
}());
//# sourceMappingURL=C:/Users/Nika D/Documents/Software Development Projects/Portfolio/src/portfolio-pipe.js.map

/***/ }),

/***/ "./src/app/portfolio/portfolio-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PortfolioComponent = (function () {
    function PortfolioComponent(route) {
        this.route = route;
        this.projectsList = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["b" /* projects */];
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.fragment.subscribe(function (fragment) { _this.fragment = fragment; });
    };
    PortfolioComponent.prototype.onSelect = function (project) {
        this.selectedProject = project;
    };
    PortfolioComponent.prototype.changeValue = function (value) {
        this.value = value;
    };
    PortfolioComponent.prototype.ngAfterViewInit = function () {
        try {
            document.querySelector('#' + this.fragment).scrollIntoView();
        }
        catch (e) { }
    };
    PortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'portfolio',
            template: __webpack_require__("./src/app/portfolio/portfolio.html"),
            styles: [__webpack_require__("./src/app/portfolio/portfolio.scss")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[ngStyle]' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], PortfolioComponent);
    return PortfolioComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Nika D/Documents/Software Development Projects/Portfolio/src/portfolio-component.js.map

/***/ }),

/***/ "./src/app/portfolio/portfolio.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"portfolio\" id=\"portfolio\">\r\n    <div class=\"container\">\r\n        <h2 class=\"section-title\">My works</h2>\r\n        <ul class=\"portfolio-menu nav\">\r\n            <li (click)=\"changeValue('')\" class=\"hvr-underline-from-center\" [ngClass]=\"{ 'active': !value}\">All</li>\r\n            <li (click)=\"changeValue('cs')\" class=\"hvr-underline-from-center\" [ngClass]=\"{'active': value == 'cs'}\">Software Development</li>\r\n            <li (click)=\"changeValue('web')\" class=\"hvr-underline-from-center\" [ngClass]=\"{'active': value == 'web'}\">Web Development</li>\r\n            <li (click)=\"changeValue('design')\" class=\"hvr-underline-from-center\" [ngClass]=\"{'active': value == 'design'}\">Design</li>\r\n        </ul>\r\n        <div class=\"portfolio-previews\">\r\n            <div class=\"row\">\r\n                <div *ngFor=\"let project of projectsList | portfolioPipe: value\" [class.selected]=\"project === selectedProject\" (click)=\"onSelect(project)\" class=\"col-md-4 col-sm-6\">\r\n                    <a [routerLink]=\"['', project.id]\">\r\n                        <div class=\"one-project\" [ngStyle]=\"{'background': 'url(' + project.previewImage + ')', 'background-size': 'cover'}\">\r\n                            <div class=\"project-info hvr-trim\">\r\n                                {{project.name}}\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/portfolio/portfolio.scss":
/***/ (function(module, exports) {

module.exports = ".portfolio {\n  margin-top: -180px;\n  color: #fff;\n  padding-top: 30px; }\n\n.portfolio-menu {\n  display: inline-block;\n  margin: 0 0 20px 0; }\n\n.portfolio-menu li {\n    font-size: 18px;\n    margin-right: 30px;\n    float: left;\n    cursor: pointer; }\n\n.one-project {\n  width: 100%;\n  padding-bottom: 100%;\n  margin-bottom: 30px;\n  margin-top: 0;\n  position: relative;\n  text-align: center; }\n\n.project-info {\n  position: absolute;\n  padding: 30%;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  font-size: 22px;\n  font-weight: 600;\n  color: #fff;\n  -webkit-filter: blur();\n          filter: blur();\n  background: rgba(0, 0, 0, 0.65);\n  width: 100%;\n  height: 100%; }\n\n.active {\n  color: #ffd400; }\n\n@media screen and (max-width: 991px) {\n  .portfolio {\n    margin-top: 30px;\n    color: #000; } }\n"

/***/ }),

/***/ "./src/app/project/project-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectComponent = (function () {
    function ProjectComponent(route, router) {
        this.route = route;
        this.router = router;
        this.currentSlide = 0;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var project = _this.getProjectById(params['id']);
            console.log(project);
            if (project) {
                _this.project = _this.getProjectById(params['id']);
            }
            else {
                _this.project = null;
                localStorage.removeItem('path');
                _this.router.navigate(['']);
            }
        });
    };
    ProjectComponent.prototype.getProjectById = function (id) {
        return __WEBPACK_IMPORTED_MODULE_2__environments_environment__["b" /* projects */].find(function (p) { return p.id === id; });
    };
    ProjectComponent.prototype.changeSlide = function (int) {
        if (int > 0) {
            if (this.project.images[this.currentSlide + 1] != undefined) {
                this.currentSlide = this.currentSlide + 1;
            }
            else {
                this.currentSlide = 0;
            }
        }
        else {
            if (this.project.images[this.currentSlide - 1] != undefined) {
                this.currentSlide--;
            }
            else {
                this.currentSlide = this.project.images.length - 1;
            }
        }
    };
    ProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project',
            template: __webpack_require__("./src/app/project/project.html"),
            styles: [__webpack_require__("./src/app/project/project.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProjectComponent);
    return ProjectComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Nika D/Documents/Software Development Projects/Portfolio/src/project-component.js.map

/***/ }),

/***/ "./src/app/project/project.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"project-page\">\r\n    <header></header>\r\n    <div class=\"container\" *ngIf=\"project\">\r\n        <h1>{{project.name}}</h1>\r\n        <hr/>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <p class=\"project-description\">{{project.description}}</p>\r\n                <div class=\"technologies\">\r\n                    <ul>\r\n                        <li *ngFor=\"let item of project.technologies\">{{item}}</li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"buttons\" *ngIf=\"project.type !== 'design'\">\r\n                    <a href={{project.repositoryUrl}} target=\"_blank\" *ngIf=\"project.repositoryUrl\">\r\n                        <button class=\"sourse-code\">See Sourse code</button>\r\n                    </a>\r\n                    <a href={{project.demoUrl}} target=\"_blank\" *ngIf=\"project.demoUrl\">\r\n                        <button class=\"hvr-back-pulse\">See Demo</button>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <div class=\"slider\" style=\"position: relative\">\r\n                    <div class=\"controls\" *ngIf=\"project.images.length != 1\">\r\n                        <div class=\"left\" (click)=\"changeSlide(-1)\">\r\n                            <i class=\"fa fa-angle-left\"></i>\r\n                        </div>\r\n                        <div class=\"right\" (click)=\"changeSlide(1)\">\r\n                            <i class=\"fa fa-angle-right\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"image\">\r\n                        <img src={{project.images[currentSlide]}} class=\"project-photo\" alt=\"main photo\" />\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<footer></footer>"

/***/ }),

/***/ "./src/app/project/project.scss":
/***/ (function(module, exports) {

module.exports = ".project-page {\n  padding-bottom: 80px; }\n\nh1 {\n  display: inline-block;\n  margin: 30px 0 20px 0; }\n\n.project-description {\n  margin-top: 20px;\n  font-size: 16px; }\n\n.buttons {\n  margin: 20px 0; }\n\nbutton {\n  background: #ffd400;\n  border: 2px solid #ffd400;\n  margin-right: 10px;\n  color: #000;\n  font-size: 16px;\n  padding: 10px 25px;\n  border-radius: 5px;\n  cursor: pointer; }\n\nbutton a,\n  button a:hover,\n  button a:visited,\n  button a:active {\n    padding: 0;\n    color: #000; }\n\n.sourse-code {\n  background: unset;\n  border: 2px solid #ffd400;\n  margin-right: 10px;\n  color: #000;\n  top: 2px;\n  position: relative;\n  font-size: 16px;\n  padding: 10px 25px;\n  border-radius: 5px;\n  cursor: pointer; }\n\n.technologies {\n  margin: 20px 0; }\n\n.technologies ul {\n    padding: 0; }\n\n.technologies li {\n    margin-right: 20px;\n    font-weight: 600;\n    padding: 5px 0;\n    display: inline-block; }\n\n.controls {\n  width: 100%;\n  position: absolute;\n  padding-top: 20%;\n  color: #ccc;\n  font-size: 40px; }\n\n.controls .left {\n    float: left; }\n\n.controls .right {\n    float: right; }\n\n.controls i {\n    cursor: pointer;\n    -webkit-transition: all 0.4s ease;\n    transition: all 0.4s ease; }\n\n.controls i:hover,\n  .controls i:active {\n    color: #ffd400; }\n\n.project-photo {\n  width: 90%;\n  display: block;\n  margin: 0 auto;\n  border: 1px solid #cecece; }\n\na,\na:hover,\na:visited,\na:active,\na:focus {\n  padding: 0;\n  color: #000; }\n\n@media screen and (max-width: 640px) {\n  .project-page {\n    padding-bottom: 120px; } }\n"

/***/ }),

/***/ "./src/app/resume/resume-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = (function () {
    function ResumeComponent() {
        this.resumeLink = "../assets/files/Software Engineering Intern - Veronika Dmytryk.pdf";
    }
    ResumeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'resume',
            template: __webpack_require__("./src/app/resume/resume.html"),
            styles: [__webpack_require__("./src/app/resume/resume.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], ResumeComponent);
    return ResumeComponent;
}());
//# sourceMappingURL=C:/Users/Nika D/Documents/Software Development Projects/Portfolio/src/resume-component.js.map

/***/ }),

/***/ "./src/app/resume/resume.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"resume\" id=\"resume\">\r\n    <div class=\"container\">\r\n        <a href={{resumeLink}} download class=\"section-title\"><button class=\"hvr-back-pulse\">Download my resume</button></a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/resume/resume.scss":
/***/ (function(module, exports) {

module.exports = ".resume {\n  margin-top: 30px;\n  color: #000;\n  text-align: center; }\n\nbutton {\n  background: #ffd400;\n  color: #000;\n  font-size: 16px;\n  border: none;\n  padding: 10px 25px;\n  border-radius: 5px;\n  cursor: pointer; }\n\nbutton a {\n    color: #000;\n    font-size: 16px; }\n\nbutton a:hover, button a:visited, button a:active {\n    color: #000;\n    text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/skills/skills-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsComponent = (function () {
    function SkillsComponent() {
        this.skillsList = __WEBPACK_IMPORTED_MODULE_1_environments_environment__["c" /* skills */];
    }
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'skills',
            template: __webpack_require__("./src/app/skills/skills.html"),
            styles: [__webpack_require__("./src/app/skills/skills.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], SkillsComponent);
    return SkillsComponent;
}());
//# sourceMappingURL=C:/Users/Nika D/Documents/Software Development Projects/Portfolio/src/skills-component.js.map

/***/ }),

/***/ "./src/app/skills/skills.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"skills-section\" id=\"skills\">\r\n    <div class=\"container\">\r\n        <h2 class=\"section-title\">\r\n            My skills\r\n        </h2>\r\n        <ul class=\"skills\">\r\n            <li *ngFor=\"let skill of skillsList\">{{skill}}</li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/skills/skills.scss":
/***/ (function(module, exports) {

module.exports = ".skills-section {\n  padding: 30px 0 0 0; }\n\n.skills {\n  padding: 0; }\n\n.skills li {\n    display: inline-block;\n    border: 1px solid #ffd400;\n    border-radius: 5px;\n    padding: 10px;\n    margin-right: 15px;\n    margin-bottom: 15px; }\n"

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return projects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return skills; });
var environment = {
    production: true
};
var projects = [
    {
        "id": "authentication-controller",
        "name": "User Authentication Controller",
        "description": "User authentification controller have five main functionalities: sign-up, login, logout, change password and delete user. Usernames and passwords are stored in custom hash table, which allows us quick efficient search O(1). The program also keeps users' old passwords and does not allow users to change password to the old one.",
        "type": "cs",
        "technologies": [
            "Java",
            "Eclipse",
            "jUnit"
        ],
        "repositoryUrl": "https://github.com/VeronikaDmytryk/UserAuthentificationController",
        "previewImage": "../assets/projects/authenticationController/thumbnail.jpg",
        "images": [
            "../assets/projects/authenticationController/1.png",
            "../assets/projects/authenticationController/2.png",
            "../assets/projects/authenticationController/3.png"
        ]
    },
    {
        "id": "barcode-scanner",
        "name": "Barcode Scanner",
        "description": "Barcode Scanner application allows a user to provide a custom dataset (an input file) with items with UPC code and description. It stores the data in a binary search tree. using a UPC code allows users to search quickly and efficiently - O(logN)",
        "type": "cs",
        "technologies": [
            "Java",
            "Eclipse",
            "jUnit"
        ],
        "repositoryUrl": "https://github.com/VeronikaDmytryk/BarcodeScanner",
        "previewImage": "../assets/projects/barcodeScanner/thumbnail.jpg",
        "images": [
            "../assets/projects/barcodeScanner/1.png"
        ]
    },
    {
        "id": "interviews",
        "name": "Interview Management System - Angular",
        "description": "Designed and implemented Interview Management System (IMS). IMS stores data of interviews and candidates in a MongoDB. Users can look up interviews data, search and filter interviews, edit interviews, see candidates profiles, see reports and customize them by different categories.",
        "type": "web",
        "technologies": [
            "Angular 5",
            "HTML5",
            "CSS3",
            "SASS",
            "Bootstrap",
            "TypeScript",
            "Node.js",
            "MongoDB",
            "ng2-Charts (Charts.js)"
        ],
        "repositoryUrl": "https://github.com/VeronikaDmytryk/remotable",
        "previewImage": "../assets/projects/remotable/thumbnail.png",
        "images": [
            "../assets/projects/remotable/1.png",
            "../assets/projects/remotable/2.png",
            "../assets/projects/remotable/3.png",
            "../assets/projects/remotable/4.png"
        ],
        "demoUrl": "/projects/remotable/"
    },
    {
        "id": "volvo",
        "name": "Volvo Samara - Responsive Landing Page",
        "description": "Cross-browser landing page with a responsive and adaptive design for a car dealership in Samara, Russia. Includes CSS animations, validations, pop-up windows. Fully responsive layout design.",
        "type": "web",
        "technologies": [
            "HTML5",
            "CSS3",
            "CSS Animations",
            "SASS",
            "jQuery",
            "Animate.css",
            "Bootstrap",
            "Slick Slider",
            "Gulp.js",
            "Bower"
        ],
        "repositoryUrl": null,
        "images": [
            "../assets/projects/volvo/1.png"
        ],
        "previewImage": "../assets/projects/volvo/thumbnail.png",
        "demoUrl": "/webpages/volvo/"
    },
    {
        "id": "tasker",
        "name": "Tasker - React.js",
        "description": "Designed and implemented responsive Task Manager Application (light version of Trello) allows users to add, edit and delete tasks. All tasks will be stored in the user's local storage. A Simple user guide is included in form of pre-defined tasks which explain how to use tasker. Responsive layout allows to use tasker on any platform using your web-browser.",
        "type": "web",
        "technologies": [
            "React.js",
            "CSS3",
            "Bootstrap",
            "HTML5"
        ],
        "repositoryUrl": "https://github.com/VeronikaDmytryk/tasker",
        "previewImage": "../assets/projects/tasker/thumbnail.png",
        "images": [
            "../assets/projects/tasker/1.png"
        ],
        "demoUrl": "/projects/tasker/"
    },
    {
        "id": "calculator",
        "name": "Calculator App - React.js",
        "description": "Designed and implemented simple calculator that supports addition / subtraction / multiplication / division / power. Developed without using JavaScript eval() function. The calculator handles division by zero. Designed under inspiration of Fluent Design System by Microsoft.",
        "type": "web",
        "technologies": [
            "React.js",
            "CSS3",
            "Bootstrap",
            "HTML5"
        ],
        "repositoryUrl": "https://github.com/VeronikaDmytryk/calculator",
        "previewImage": "../assets/projects/calculator/thumbnail.png",
        "images": [
            "../assets/projects/calculator/1.png"
        ],
        "demoUrl": "/projects/calculator/"
    },
    {
        "id": "freelance-show",
        "name": "Freelance Show - Responsive Landing Page",
        "description": "Promotional 5-screens Landing Page for educational project WayUp. Includes animations, validations pop-up windows and custom counter. Fully responsive and adaptive layout design.",
        "type": "web",
        "technologies": [
            "HTML5",
            "CSS3",
            "SASS",
            "jQuery",
            "Animate.css",
            "Bootstrap",
            "Gulp.js",
            "Bower"
        ],
        "repositoryUrl": null,
        "images": [
            "../assets/projects/freelanceshow/1.png"
        ],
        "previewImage": "../assets/projects/freelanceshow/thumbnail.png",
        "demoUrl": "/webpages/freelanceshow/"
    },
    {
        "id": "freelance-design",
        "name": "Freelance Design - Responsive Landing Page",
        "type": "web",
        "description": "Promotional 8-screens Landing Page for educational master classes by WayUp. Custom CSS animations were created for this project. Includes CSS animations, validations, pop-up windows, PHP back-end implementation for capturing submitted forms. Fully responsive and adaptive layout design.",
        "technologies": [
            "HTML5",
            "CSS3",
            "CSS Animations",
            "SASS",
            "jQuery",
            "Animate.css",
            "Bootstrap",
            "Gulp.js",
            "Bower",
            "PHP (forms)"
        ],
        "repositoryUrl": null,
        "demoUrl": "/webpages/freelance-design/",
        "images": [
            "../assets/projects/freelancedesign/1.png"
        ],
        "previewImage": "../assets/projects/freelancedesign/thumbnail.jpg",
    },
    {
        "id": "web-games",
        "name": "Web Games - Responsive Landing Page",
        "description": "Promotional 7-screens Landing Page for educational event by WayUp. Includes CSS animations, validations, pop-up windows, PHP back-end implementation for capturing submitted forms. Fully responsive and adaptive layout design.",
        "type": "web",
        "technologies": [
            "HTML5",
            "CSS3",
            "SASS",
            "jQuery",
            "Animate.css",
            "Bootstrap",
            "Gulp.js",
            "Bower",
            "PHP (forms)"
        ],
        "repositoryUrl": null,
        "images": [
            "../assets/projects/webgames/1.png"
        ],
        "previewImage": "../assets/projects/webgames/thumbnail.png",
        "demoUrl": "/webpages/webgames/"
    },
    {
        "id": "frontend-genius",
        "name": "Frontend Genius - Responsive Landing Page",
        "description": "Cross-browser responsive and adaptive 8-screens Landing Page for educational master class by WayUp. Includes CSS animations, validations, pop-up windows. Fully responsive and adaptive layout design.",
        "type": "web",
        "technologies": [
            "HTML5",
            "CSS3",
            "SASS",
            "jQuery",
            "jQuery Validate",
            "Animate.css",
            "Bootstrap",
            "Gulp.js",
            "Bower"
        ],
        "repositoryUrl": null,
        "images": [
            "../assets/projects/frontendgenius/1.png"
        ],
        "previewImage": "../assets/projects/frontendgenius/thumbnail.png",
        "demoUrl": "/webpages/frontend-genius/"
    },
    {
        "id": "first-pixel",
        "name": "First-Pixel - Responsive Landing Page",
        "description": "Promotional 9-screens Landing Page for online marathon by WayUp. Custom CSS animations were created for this project. Includes CSS animations, validations, pop-up windows, PHP backend implementation for capturing submitted forms. Fully responsive layout design.",
        "type": "web",
        "technologies": [
            "HTML5",
            "CSS3",
            "CSS Animations",
            "SASS",
            "jQuery",
            "Animate.css",
            "Bootstrap",
            "Gulp.js",
            "Bower",
            "PHP (forms)"
        ],
        "repositoryUrl": null,
        "images": [
            "../assets/projects/firstpixel/1.png"
        ],
        "previewImage": "../assets/projects/firstpixel/thumbnail.png",
        "demoUrl": "/webpages/first-pixel/"
    },
    {
        "id": "furry-house",
        "name": "Furry House - Landing Page design",
        "description": "Landing Page design for Pet's Hotel business. Developed logo, page concept, icons and all additional elements. Design was created with deep empathy in mind. Stylish yet simple design elements keeps user focused on the most important parts of the page.",
        "type": "design",
        "images": [
            "../assets/design/furryhouse/1.jpg",
            "../assets/design/furryhouse/2.jpg"
        ],
        "previewImage": "../assets/design/furryhouse/thumbnail.jpg",
        "technologies": [
            "Photoshop",
            "Illustrator"
        ],
    },
    {
        "id": "mixer",
        "name": "Landing Page ideas mixer",
        "description": "4 Landing Page designs for different types of business. Created 1st screen for furniture store, new phone page, windows manufacturing firm, shoes on-line store. All designs tell the user different brand story combined with strong call to action.",
        "type": "design",
        "images": [
            "../assets/design/mixer/1.jpg",
            "../assets/design/mixer/2.jpg",
            "../assets/design/mixer/3.jpg",
            "../assets/design/mixer/4.jpg"
        ],
        "previewImage": "../assets/design/mixer/thumbnail.jpg",
        "technologies": [
            "Photoshop",
            "Illustrator"
        ]
    },
    {
        "id": "zima-leto",
        "name": "Zima-Leto - Landing Page design",
        "description": "Landing Page design for fur studio. Developed logo, page concept, icons and all additional elements.",
        "type": "design",
        "images": [
            "../assets/design/zimaleto/1.jpg",
            "../assets/design/zimaleto/2.jpg"
        ],
        "previewImage": "../assets/design/zimaleto/thumbnail.jpg",
        "technologies": [
            "Photoshop",
            "Illustrator"
        ]
    },
    {
        "id": "tic-tac-toe",
        "name": "Tic Tac Toe - game design",
        "description": "Tic Tac Toe game design inspired by times when kids didn't have mobile phones during school break. Blackboard texture and hand-written chalk fonts bring atmosphere of old school times to your game experience.",
        "type": "design",
        "images": [
            "../assets/design/xo/1.jpg",
            "../assets/design/xo/2.jpg",
            "../assets/design/xo/3.jpg"
        ],
        "previewImage": "../assets/design/xo/thumbnail.jpg",
        "technologies": [
            "Photoshop",
            "Illustrator"
        ]
    },
    {
        "id": "femida-legal",
        "name": "Legal Services - Landing Page design",
        "description": "Landing Page design for Legal Services business. Developed logo, page concept, icons and all additional elements. Design was created with simplicity in mind. Simple yet authentic graphics alows the client to focus on the most important information on the page. UX decisions help the client to easily navigate and find all necessary information.",
        "type": "design",
        "images": [
            "../assets/design/legalservices/1.jpg",
            "../assets/design/legalservices/2.png",
            "../assets/design/legalservices/3.png"
        ],
        "previewImage": "../assets/design/legalservices/thumbnail.jpg",
        "technologies": [
            "Photoshop",
            "Illustrator"
        ]
    },
    {
        "id": "cinema-app",
        "name": "Cinema App - booking experience design",
        "description": "UI/UX experience for booking a ticket to the movie. Developed concept, icons and ux flow. The app allows to book ticket to cinema in 4 simple steps. Clickable progress bar allows user to quickly and easily navigate to any step from any screen. Graphic icons are easy to understand. At the end of booking experience, instant QR code allows user to enter theater right away.",
        "type": "design",
        "images": [
            "../assets/design/cinemaapp/1.png",
            "../assets/design/cinemaapp/2.png",
            "../assets/design/cinemaapp/3.png",
            "../assets/design/cinemaapp/4.png",
            "../assets/design/cinemaapp/5.png"
        ],
        "previewImage": "../assets/design/cinemaapp/thumbnail.png",
        "technologies": [
            "Photoshop",
            "Illustrator"
        ]
    }
];
var skills = [
    "Java",
    "C++",
    "JavaScript",
    "OOP",
    "jQuery",
    "HTML & CSS",
    "SASS",
    "Bootstrap",
    "jQuery",
    "Node.js",
    "Angular",
    "React.js",
    "Git",
    "MongoDB",
    "API integration",
    "Adobe Photoshop",
    "Adobe Illustrator"
];
//# sourceMappingURL=C:/Users/Nika D/Documents/Software Development Projects/Portfolio/src/environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Nika D/Documents/Software Development Projects/Portfolio/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map