(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tab1/tab1.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tab1/tab1.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Card Controller\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row *ngFor=\"let item of data; let i=index;\">\n      <ion-card (click) = \"submit(i)\">\n      <!-- <ion-card (click)=\"presentToast(item.title)\"> -->\n        <ion-card-content>\n          <ion-row>\n            <ion-col size=\"8\">\n              <ion-card-title>{{item.title}}</ion-card-title>\n              <ion-card-subtitle>{{item.description}}</ion-card-subtitle>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img src=\"../../assets/{{item.image}}\" />\n            </ion-col>\n          </ion-row>\n          <br>\n          <h1>RM {{item.price}}</h1>\n        </ion-card-content>\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/tab1/tab1-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tab1/tab1-routing.module.ts ***!
  \***************************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/pages/tab1/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tab1/tab1.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.module.ts ***!
  \*******************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/pages/tab1/tab1-routing.module.ts");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/pages/tab1/tab1.page.ts");







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/pages/tab1/tab1.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYjEvdGFiMS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/tab1/tab1.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.ts ***!
  \*****************************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let Tab1Page = class Tab1Page {
    constructor(toast, router) {
        this.toast = toast;
        this.router = router;
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
    ngOnInit() {
    }
    ionViewWillEnter() {
        console.log("Data Bag", this.data);
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: message,
                duration: 2000,
                position: 'top',
                color: 'dark'
            });
            toast.present();
        });
    }
    submit(id) {
        console.log("This data", this.data[id]);
        let NavigationExtras = {
            state: {
                data: this.data[id]
            }
        };
        this.router.navigate(['view'], NavigationExtras);
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/pages/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=pages-tab1-tab1-module-es2015.js.map