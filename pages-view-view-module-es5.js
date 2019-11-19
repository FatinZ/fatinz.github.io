(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-view-view-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/view/view.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/view/view.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{data.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-card>\n        <ion-card-content>\n          <ion-row>\n            <ion-col size=\"8\">\n              <ion-card-title>{{data.title}}</ion-card-title>\n              <ion-card-subtitle>{{data.description}}</ion-card-subtitle>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img src=\"../../assets/{{data.image}}\" />\n            </ion-col>\n          </ion-row>\n          <br>\n          <h1>RM {{data.price}}</h1>\n        </ion-card-content>\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/view/view-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/view/view-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPageRoutingModule", function() { return ViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view.page */ "./src/app/pages/view/view.page.ts");




var routes = [
    {
        path: '',
        component: _view_page__WEBPACK_IMPORTED_MODULE_3__["ViewPage"]
    }
];
var ViewPageRoutingModule = /** @class */ (function () {
    function ViewPageRoutingModule() {
    }
    ViewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ViewPageRoutingModule);
    return ViewPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/view/view.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/view/view.module.ts ***!
  \*******************************************/
/*! exports provided: ViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPageModule", function() { return ViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-routing.module */ "./src/app/pages/view/view-routing.module.ts");
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view.page */ "./src/app/pages/view/view.page.ts");







var ViewPageModule = /** @class */ (function () {
    function ViewPageModule() {
    }
    ViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _view_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewPageRoutingModule"]
            ],
            declarations: [_view_page__WEBPACK_IMPORTED_MODULE_6__["ViewPage"]]
        })
    ], ViewPageModule);
    return ViewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/view/view.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/view/view.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXcvdmlldy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/view/view.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/view/view.page.ts ***!
  \*****************************************/
/*! exports provided: ViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPage", function() { return ViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ViewPage = /** @class */ (function () {
    function ViewPage(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.data = [];
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.data = _this.router.getCurrentNavigation().extras.state.data;
                console.log("Data is ", _this.data);
            }
        });
    }
    ViewPage.prototype.ngOnInit = function () {
    };
    ViewPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! raw-loader!./view.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/view/view.page.html"),
            styles: [__webpack_require__(/*! ./view.page.scss */ "./src/app/pages/view/view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewPage);
    return ViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-view-view-module-es5.js.map