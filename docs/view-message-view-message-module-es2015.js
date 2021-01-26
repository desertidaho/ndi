(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-message-view-message-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-message/view-message.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-message/view-message.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons>\r\n      <ion-back-button [text]=\"getBackButtonText()\" defaultHref=\"/\"></ion-back-button>\r\n      <ion-button href=\"https://commerce.coinbase.com/checkout/14e93c6a-bdd0-4eff-befb-8a869b2d26bf\" target=\"_blank\"\r\n        type=\"button\" id=\"donate\" data-toggle=\"tooltip\" slot=\"end\" data-placement=\"\" title=\"Donate Bitcoin\">Donate\r\n      </ion-button>\r\n      <ion-button href=\"https://www.amazon.com/gp/product/1792611633\" target=\"_blank\" type=\"button\" id=\"donate\"\r\n        data-toggle=\"tooltip\" slot=\"end\" data-placement=\"\" title=\"Donate Bitcoin\">Buy Book\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" *ngIf=\"message\">\r\n  <h1>{{ message.title }}</h1>\r\n  <p [innerHTML]=\"message.poem\"></p>\r\n  <img src=\"assets/images/{{message.img}}\" alt=\" Card image cap\">\r\n</ion-content>");

/***/ }),

/***/ "./src/app/view-message/view-message-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/view-message/view-message-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ViewMessagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMessagePageRoutingModule", function() { return ViewMessagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _view_message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-message.page */ "./src/app/view-message/view-message.page.ts");




const routes = [
    {
        path: '',
        component: _view_message_page__WEBPACK_IMPORTED_MODULE_3__["ViewMessagePage"]
    }
];
let ViewMessagePageRoutingModule = class ViewMessagePageRoutingModule {
};
ViewMessagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewMessagePageRoutingModule);



/***/ }),

/***/ "./src/app/view-message/view-message.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/view-message/view-message.module.ts ***!
  \*****************************************************/
/*! exports provided: ViewMessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMessagePageModule", function() { return ViewMessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _view_message_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-message.page */ "./src/app/view-message/view-message.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _view_message_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-message-routing.module */ "./src/app/view-message/view-message-routing.module.ts");







let ViewMessagePageModule = class ViewMessagePageModule {
};
ViewMessagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _view_message_routing_module__WEBPACK_IMPORTED_MODULE_6__["ViewMessagePageRoutingModule"]
        ],
        declarations: [_view_message_page__WEBPACK_IMPORTED_MODULE_4__["ViewMessagePage"]]
    })
], ViewMessagePageModule);



/***/ }),

/***/ "./src/app/view-message/view-message.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/view-message/view-message.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#donate {\n  background-color: yellow;\n  color: black !important;\n  border: 1px solid black;\n  margin-left: 2vw;\n}\n\nh1 {\n  margin-top: 2rem !important;\n}\n\nh1,\np {\n  margin-left: 5px !important;\n  font-family: \"papyrus\";\n}\n\nion-item {\n  --inner-padding-end: 0;\n  --background: transparent;\n}\n\nion-label {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n\nion-item h2 {\n  font-weight: 600;\n}\n\nion-item ion-note {\n  font-size: 15px;\n  margin-right: 12px;\n  font-weight: normal;\n}\n\nh1 {\n  margin: 0;\n  font-weight: bold;\n  font-size: 22px;\n  margin-bottom: 20px;\n}\n\np {\n  line-height: 1rem;\n  font-size: 0.6rem;\n  white-space: nowrap;\n}\n\nimg {\n  margin-top: 1rem;\n  width: 99vw;\n  height: auto;\n  margin-bottom: 5rem;\n  border-radius: 15px;\n}\n\n@media only screen and (min-width: 768px) {\n  p {\n    font-size: 1.3rem;\n    line-height: 2rem;\n  }\n\n  img {\n    width: 55vw;\n    height: auto;\n    margin-left: 20vw;\n  }\n\n  h1,\np {\n    padding-left: 20vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1tZXNzYWdlL3ZpZXctbWVzc2FnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7QUFDRjs7QUFFQTs7RUFFRSwyQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0MsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0Q7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBRUU7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0VBQUY7O0VBR0E7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNDLGlCQUFBO0VBQUg7O0VBR0E7O0lBRUMsa0JBQUE7RUFBRDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlldy1tZXNzYWdlL3ZpZXctbWVzc2FnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZG9uYXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDJ2dztcclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbi10b3A6IDJyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuaDEsXHJcbnAge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogXCJwYXB5cnVzXCI7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG5pb24taXRlbSBoMiB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuaW9uLWl0ZW0gaW9uLW5vdGUge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxucCB7XHJcbiBsaW5lLWhlaWdodDogMXJlbTtcclxuIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHdpZHRoOiA5OXZ3O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDU1dnc7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDIwdnc7XHJcbiAgfVxyXG5cclxuICBoMSxcclxuICBwIHtcclxuICAgcGFkZGluZy1sZWZ0OiAyMHZ3O1xyXG4gIH1cclxuXHJcblxyXG59Il19 */");

/***/ }),

/***/ "./src/app/view-message/view-message.page.ts":
/*!***************************************************!*\
  !*** ./src/app/view-message/view-message.page.ts ***!
  \***************************************************/
/*! exports provided: ViewMessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMessagePage", function() { return ViewMessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");




let ViewMessagePage = class ViewMessagePage {
    constructor(data, activatedRoute) {
        this.data = data;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.message = this.data.getMessageById(id);
    }
    getBackButtonText() {
        const win = window;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Back' : '';
    }
};
ViewMessagePage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ViewMessagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-message',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view-message.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-message/view-message.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./view-message.page.scss */ "./src/app/view-message/view-message.page.scss")).default]
    })
], ViewMessagePage);



/***/ })

}]);
//# sourceMappingURL=view-message-view-message-module-es2015.js.map