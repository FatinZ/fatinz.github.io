(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tab2/tab2.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tab2/tab2.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>List Controller</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      List of Bags\n    </ion-list-header>\n    <ion-item *ngFor=\"let item of data\" (click)=\"presentToast(item.title)\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../assets/{{item.image}}\" />\n      </ion-avatar>\n      <ion-label>\n        <h2>{{item.title}}</h2>\n        <h3>{{item.price}}</h3>\n        <p>{{item.description}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/tab2/tab2-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tab2/tab2-routing.module.ts ***!
  \***************************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "./src/app/pages/tab2/tab2.page.ts");




var routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"]
    }
];
var Tab2PageRoutingModule = /** @class */ (function () {
    function Tab2PageRoutingModule() {
    }
    Tab2PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], Tab2PageRoutingModule);
    return Tab2PageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/tab2/tab2.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tab2/tab2.module.ts ***!
  \*******************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2-routing.module */ "./src/app/pages/tab2/tab2-routing.module.ts");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/pages/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _tab2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab2PageRoutingModule"]
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/pages/tab2/tab2.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/tab2/tab2.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.ts ***!
  \*****************************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var Tab2Page = /** @class */ (function () {
    function Tab2Page(toast) {
        this.toast = toast;
        this.data = [
            {
                title: "Handwoven Handbag",
                description: "Be hippy and support local craftworks at the same time!",
                price: "20",
                image: "Bag1.jpg"
            },
            {
                title: "Geometric Tote Bag",
                description: "Flaunt your love for geometry like the nerd you are!",
                price: "45",
                image: "Bag2.jpg"
            },
            {
                title: "Chic Backpack",
                description: "Wanna be girly but want to carry many things with you? This bag is for you!",
                price: "80",
                image: "Bag3.jpg"
            }
        ];
    }
    Tab2Page.prototype.ngOnInit = function () {
    };
    Tab2Page.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: message,
                            duration: 2000,
                            position: 'top',
                            color: 'dark'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab2Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/pages/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tab2-tab2-module-es5.js.map