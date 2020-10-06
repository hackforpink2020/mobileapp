(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title style=\"color: #800000;\">\n       Mary\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-slides #slides autoplay=\"true\" loop=\"true\" pager=\"false\" scrollbar=\"true\" [options]=\"slideOpts\"\n  (ionSlideDidChange)=\"ionSlideDidChange($event)\" (ionSlideDoubleTap)=\"ionSlideDoubleTap($event)\"\n  (ionSlideDrag)=\"ionSlideDrag($event)\" (ionSlideNextEnd)=\"ionSlideNextEnd($event)\"\n  (ionSlideReachEnd)=\"ionSlideReachEnd($event)\">\n  <ion-slide class=\"bg-2\">\n    <section class=\"wrapper\">\n    <ion-card style=\"color: #755139ff;height: 100%;\">\n      <ion-item>\n        <ion-label style=\"font:bold;\">About Mary</ion-label>\n      </ion-item>\n      <ion-card-content style=\"color: #755139ff;\">\n        Mary is an AI powered chatbot who understands and responds to the breast cancer related queries. She besides an app can also be connected by phone. In the real world, users instead of surfing internet for answers, doctors and other details can directly connect with this trusted friendly bot for advices.\n      </ion-card-content>\n    </ion-card>\n    </section>\n  </ion-slide>\n  \n  <ion-slide class=\"bg-2\">\n    <section class=\"wrapper\">\n      <ion-card style=\"color: #755139ff;height: 100%;\">\n        <ion-item>\n          <ion-label style=\"font:bold;\">Mary: Features & Capabilities</ion-label>\n        </ion-item>\n        <ion-card-content style=\"color: #755139ff;\">\n          <ul>\n            <li>Chat bot for human like conversations using chat or voice</li>\n            <li><b>Multi channel</b>-Mobile App, Website, and Phone </li>\n            <li>Get curated information from reliable sources in Q&A format\n            <li>Clinics Near you</li>\n            <li>Appointment booking</li>\n          </ul>\n        </ion-card-content>\n      </ion-card>\n      </section>\n  </ion-slide>\n  <ion-slide class=\"bg-2\">\n    <section class=\"wrapper\">\n      <ion-card style=\"color: #755139ff;height: 100%;\">\n        <ion-item>\n          <ion-label style=\"font:bold;\">Mary : Tech Stack</ion-label>\n        </ion-item>\n        <ion-card-content style=\"color: #755139ff;\">\n          <ul>\n            <li>Angular 10,ionic 5,cordova</li>\n            <li>Dialog Flow</li>\n            <li>Spring Boot</li>\n            <li>SQL DB</li>\n          </ul>\n        </ion-card-content>\n      </ion-card>\n      </section>\n  </ion-slide>\n</ion-slides>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 100%;\n}\n\n.bg-1 {\n  background-color: #ffff;\n  background-size: cover;\n  border-radius: 10px;\n}\n\n.bg-2 {\n  background-color: white;\n  background-size: cover;\n}\n\n.bg-3 {\n  background-color: #e1c699;\n  background-size: cover;\n}\n\nion-slide.swiper-slide {\n  align-items: flex-start;\n}\n\nion-content .wrapper {\n  min-height: 100%;\n  --ion-background-color: rgb(225, 198, 153) !important;\n}\n\nul {\n  margin-top: 5px;\n}\n\nul li {\n  text-align: left;\n  list-style: disc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFRTtFQUNHLHVCQUFBO0VBRUQsc0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdFO0VBRUUsdUJBQUE7RUFFQSxzQkFBQTtBQUZKOztBQU1FO0VBRUUseUJBQUE7RUFFQSxzQkFBQTtBQUxKOztBQVFFO0VBQ0UsdUJBQUE7QUFMSjs7QUFTQTtFQUNFLGdCQUFBO0VBR0YscURBQUE7QUFSQTs7QUFhRTtFQUNFLGVBQUE7QUFWSjs7QUFZRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFUSiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmJnLTEge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvMS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICB9XHJcbiAgLmJnLTIge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZiYzAyZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC8vICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvMi5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG4gICBcclxuICB9XHJcbiAgLmJnLTMge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzdjYjM0MjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjUsIDE5OCwgMTUzKTtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvMy5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG5cclxuICBpb24tc2xpZGUuc3dpcGVyLXNsaWRlIHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG5cclxuaW9uLWNvbnRlbnQgLndyYXBwZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAvL2JhY2tncm91bmQ6ICNiNjk5OTk7XHJcbi8vICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEzLCAyMTgsIDIxNCkgIWltcG9ydGFudDtcclxuLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgMTk4LCAxNTMpICFpbXBvcnRhbnQ7XHJcbi8vICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzLzMuanBnJyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgdWwge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuICB1bCBsaSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGlzdC1zdHlsZTogZGlzYztcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let Tab1Page = class Tab1Page {
    // @ViewChild('slides', { read: ElementRef, static: true }) slides: IonSlides
    constructor(router) {
        this.router = router;
        this.slideOpts = {
            on: {
                beforeInit() {
                    const swiper = this;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
                    swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                    const overwriteParams = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        spaceBetween: 0,
                        virtualTranslate: true,
                    };
                    swiper.params = Object.assign(swiper.params, overwriteParams);
                    swiper.originalParams = Object.assign(swiper.originalParams, overwriteParams);
                },
                setTranslate() {
                    const swiper = this;
                    const { $, slides, rtlTranslate: rtl } = swiper;
                    for (let i = 0; i < slides.length; i += 1) {
                        const $slideEl = slides.eq(i);
                        let progress = $slideEl[0].progress;
                        if (swiper.params.flipEffect.limitRotation) {
                            progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                        }
                        const offset$$1 = $slideEl[0].swiperSlideOffset;
                        const rotate = -180 * progress;
                        let rotateY = rotate;
                        let rotateX = 0;
                        let tx = -offset$$1;
                        let ty = 0;
                        if (!swiper.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                            rotateX = -rotateY;
                            rotateY = 0;
                        }
                        else if (rtl) {
                            rotateY = -rotateY;
                        }
                        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
                        if (swiper.params.flipEffect.slideShadows) {
                            // Set shadows
                            let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                            let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`);
                                $slideEl.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`);
                                $slideEl.append(shadowAfter);
                            }
                            if (shadowBefore.length)
                                shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length)
                                shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
                        $slideEl
                            .transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
                    }
                },
                setTransition(duration) {
                    const swiper = this;
                    const { slides, activeIndex, $wrapperEl } = swiper;
                    slides
                        .transition(duration)
                        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                        .transition(duration);
                    if (swiper.params.virtualTranslate && duration !== 0) {
                        let eventTriggered = false;
                        // eslint-disable-next-line
                        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
                            if (eventTriggered)
                                return;
                            if (!swiper || swiper.destroyed)
                                return;
                            eventTriggered = true;
                            swiper.animating = false;
                            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                            for (let i = 0; i < triggerEvents.length; i += 1) {
                                $wrapperEl.trigger(triggerEvents[i]);
                            }
                        });
                    }
                }
            }
        };
        this.skip = "Skip";
    }
    ngOnInit() {
        //  this.slides.startAutoplay()
    }
    // ionSlideDidChange
    ionSlideDidChange(event) {
        console.log("ionSlideDidChange", event);
        this.slides.getActiveIndex().then((index) => {
            console.log(index);
            index == 2 ? this.skip = "Go To Dashboard >>" : this.skip = "Skip";
        });
        //  this.slides.startAutoplay()
    }
    // ionSlideDoubleTap
    ionSlideDoubleTap(event) {
        // console.log("ionSlideDoubleTap", event)
    }
    // ionSlideDrag
    ionSlideDrag(event) {
        // console.log("ionSlideDrag", event)
    }
    // ionSlideNextEnd
    ionSlideNextEnd(event) {
        // console.log("ionSlideNextEnd", event)
    }
    // ionSlideReachEnd
    ionSlideReachEnd(event) {
        // console.log("ionSlideReachEnd", event)
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
Tab1Page.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['slides', { static: true },] }]
};
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map