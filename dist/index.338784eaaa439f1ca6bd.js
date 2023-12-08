/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/css/common/animation.css":
/*!*********************************************!*\
  !*** ./src/assets/css/common/animation.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/common/footer.css":
/*!******************************************!*\
  !*** ./src/assets/css/common/footer.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/common/navbar.css":
/*!******************************************!*\
  !*** ./src/assets/css/common/navbar.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/common/reset.css":
/*!*****************************************!*\
  !*** ./src/assets/css/common/reset.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/common/typography.css":
/*!**********************************************!*\
  !*** ./src/assets/css/common/typography.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/common/utility.css":
/*!*******************************************!*\
  !*** ./src/assets/css/common/utility.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/index/about.css":
/*!****************************************!*\
  !*** ./src/assets/css/index/about.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/index/blog.css":
/*!***************************************!*\
  !*** ./src/assets/css/index/blog.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/index/case.css":
/*!***************************************!*\
  !*** ./src/assets/css/index/case.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/index/contact.css":
/*!******************************************!*\
  !*** ./src/assets/css/index/contact.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/index/flow.css":
/*!***************************************!*\
  !*** ./src/assets/css/index/flow.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/index/hero.css":
/*!***************************************!*\
  !*** ./src/assets/css/index/hero.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/index/main.css":
/*!***************************************!*\
  !*** ./src/assets/css/index/main.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/index/reasons.css":
/*!******************************************!*\
  !*** ./src/assets/css/index/reasons.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/jsfunctions/mobileNav.js":
/*!*********************************************!*\
  !*** ./src/assets/jsfunctions/mobileNav.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ animateHamburgerMenu)
/* harmony export */ });
const button = document.querySelector(".button-one");


 

  function animateHamburgerMenu(){
    button.addEventListener("click", () => {
        const currentState = button.getAttribute("data-state");
    
        if (!currentState || currentState === "closed") {
          button.setAttribute("data-state", "opened");
          button.setAttribute("aria-expanded", "true");
        } else {
          button.setAttribute("data-state", "closed");
          button.setAttribute("aria-expanded", "false");
        }
      });
  }

/***/ }),

/***/ "./src/assets/jsfunctions/mobileNavOpen.js":
/*!*************************************************!*\
  !*** ./src/assets/jsfunctions/mobileNavOpen.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toggleNav)
/* harmony export */ });
const button = document.querySelector(".button-one");
const primaryNav = document.querySelector('.primary-nav');



function clearClass(){
    primaryNav.classList.remove('primary-nav_closed');
}

function addClass(){
    primaryNav.classList.add('primary-nav_closed');
}

function toggleNav(){
    button.addEventListener('click',(e)=>{
        const currentState = button.getAttribute("data-state");
console.log(currentState)
        if (currentState === "closed") {
            // clearClass()
            addClass();
          } else {
            // addClass();
            clearClass()
          }
    })
}



/***/ }),

/***/ "./src/assets/jsfunctions/slider.js":
/*!******************************************!*\
  !*** ./src/assets/jsfunctions/slider.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ activateSlider)
/* harmony export */ });


function activateSlider(){

    const slideContainer = document.querySelector('.case-card-carousel'); //スライド / カルーセルのコンテナ
    const slide = document.querySelector('.case-card-carousel_list'); //カルーセルのトラック
    const slides = document.querySelectorAll('.case-card-mobile');   //スライド / カード
    
    // 「次へ」ボタンと「前へ」ボタン
    const nextBtn = document.getElementById('case-next');
    const prevBtn = document.getElementById('case-prev');
    
    let slider_index = 1;
    
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides-length -1].cloneNode(true);
    
    firstClone.id = "first-clone";
    lastClone.id = "last-clone";
    
    slide.append(firstClone);
    slide.prepend(lastClone);

    const slidesWidth =slides[index].clientWidth ;
    console.log(slidesWidth)

}

/***/ }),

/***/ "./src/assets/jsfunctions/smoothscroll.js":
/*!************************************************!*\
  !*** ./src/assets/jsfunctions/smoothscroll.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ activateSmoothScroll)
/* harmony export */ });
function activateSmoothScroll() {
    document.addEventListener('DOMContentLoaded', () => {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
                
                const speed = 500;
                const href = link.getAttribute('href');
                const target = document.querySelector(href === '#' || href === '' ? 'html' : href);
                
                if (!target) return;
                
                const startPosition = window.scrollY;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY;
                const distance = targetPosition - startPosition;
                let startTime = null;
      
                function animation(currentTime) {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const run = ease(timeElapsed, startPosition, distance, speed);
                    window.scrollTo(0, run);
                    if (timeElapsed < speed) requestAnimationFrame(animation);
                }
      
                function ease(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                }
      
                requestAnimationFrame(animation);
            });
        });
    });
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_common_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/common/reset.css */ "./src/assets/css/common/reset.css");
/* harmony import */ var _assets_css_common_navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/common/navbar.css */ "./src/assets/css/common/navbar.css");
/* harmony import */ var _assets_css_index_hero_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/css/index/hero.css */ "./src/assets/css/index/hero.css");
/* harmony import */ var _assets_css_index_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/css/index/main.css */ "./src/assets/css/index/main.css");
/* harmony import */ var _assets_css_index_about_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/css/index/about.css */ "./src/assets/css/index/about.css");
/* harmony import */ var _assets_css_index_case_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/css/index/case.css */ "./src/assets/css/index/case.css");
/* harmony import */ var _assets_css_index_reasons_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/css/index/reasons.css */ "./src/assets/css/index/reasons.css");
/* harmony import */ var _assets_css_index_flow_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/css/index/flow.css */ "./src/assets/css/index/flow.css");
/* harmony import */ var _assets_css_index_blog_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/css/index/blog.css */ "./src/assets/css/index/blog.css");
/* harmony import */ var _assets_css_index_contact_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/css/index/contact.css */ "./src/assets/css/index/contact.css");
/* harmony import */ var _assets_css_common_footer_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/css/common/footer.css */ "./src/assets/css/common/footer.css");
/* harmony import */ var _assets_css_common_typography_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/css/common/typography.css */ "./src/assets/css/common/typography.css");
/* harmony import */ var _assets_css_common_utility_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/css/common/utility.css */ "./src/assets/css/common/utility.css");
/* harmony import */ var _assets_css_common_animation_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/css/common/animation.css */ "./src/assets/css/common/animation.css");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @barba/core */ "./node_modules/@barba/core/dist/barba.umd.js");
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_barba_core__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_jsfunctions_smoothscroll__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/jsfunctions/smoothscroll */ "./src/assets/jsfunctions/smoothscroll.js");
/* harmony import */ var _assets_jsfunctions_mobileNav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/jsfunctions/mobileNav */ "./src/assets/jsfunctions/mobileNav.js");
/* harmony import */ var _assets_jsfunctions_mobileNavOpen__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/jsfunctions/mobileNavOpen */ "./src/assets/jsfunctions/mobileNavOpen.js");
/* harmony import */ var _assets_jsfunctions_slider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/jsfunctions/slider */ "./src/assets/jsfunctions/slider.js");


// import "./assets/css/common/utility.css";
























/*-------------------------------------------------------
  CASE SECTION PARALLAX ANIMATION
  ケースセクションのデコレーションに対するパララックスアニメーション
---------------------------------------------------------*/
gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_20__.ScrollTrigger);

let images = gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.utils.toArray(".parallax");

images.forEach((image) => {
  gsap__WEBPACK_IMPORTED_MODULE_19__.gsap.to(image, {
    yPercent: -100 * image.dataset.speed,
    ease: "none",
    scrollTrigger: {
      scrub: image.dataset.speed,
    },
  });
});

// function contentAnimation(){
//   let images = gsap.utils.toArray(".case-decor");

//   images.forEach((image) => {
//     gsap.to(image, {
//       yPercent: -100 * image.dataset.speed,
//       ease: "none",
//       scrollTrigger: {
//         scrub: image.dataset.speed,
//       },
//     });
//   });
// }
/*----------------------------
 SLIDER
 スライダー
----------------------------*/

const slideContainer = document.querySelector(".track");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".blog-card");
const nextBtn = document.getElementById("next_btn");
const prevBtn = document.getElementById("previous_btn");

// const firstClone = slides[0].cloneNode(true); //not working rn
// const secondClone = slides[1].cloneNode(true); //not working rn

// slider.append(firstClone); //not working rn

let index = 0;
const slideWidth = slides[index].clientWidth;

nextBtn.addEventListener("click", () => {
  index++; //increases the index by 1
  if (index === 5) {
    index = 0; //if its in the 5th slide it will reset to zero so that the first slide is shown
  }
  updateSlidePosition();
});

prevBtn.addEventListener("click", () => {
  if (index === 0) {
    index = 4; //if its currently in the first slide it will jump to the last
    updateSlidePosition();
  } else {
    index--;
    if (index < 0) {
      index = slides.length - 1;
    }
    updateSlidePosition();
  }
});

function updateSlidePosition() {
  const offset = 440 * index; //off set is calculated with the card size and the gap (400px + 40)
  setIndicator();
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${offset}px)`;
  });
}

// function slider(){

// const slideContainer = document.querySelector(".track");
// const slider = document.querySelector(".slider");
// const slides = document.querySelectorAll(".blog-card");
// const nextBtn = document.getElementById("next_btn");
// const prevBtn = document.getElementById("previous_btn");

// const firstClone = slides[0].cloneNode(true); //not working rn
// const secondClone = slides[1].cloneNode(true); //not working rn

// slider.append(firstClone); //not working rn

// let index = 0;
// const slideWidth = slides[index].clientWidth;

// nextBtn.addEventListener("click", () => {
//   index++; //increases the index by 1
//   if (index === 5) {
//     index = 0; //if its in the 5th slide it will reset to zero so that the first slide is shown
//   }
//   updateSlidePosition();
// });

// prevBtn.addEventListener("click", () => {
//   if (index === 0) {
//     index = 4; //if its currently in the first slide it will jump to the last
//     updateSlidePosition();
//   } else {
//     index--;
//     if (index < 0) {
//       index = slides.length - 1;
//     }
//     updateSlidePosition();
//   }
// });

// function updateSlidePosition() {
//   const offset = 440 * index; //off set is calculated with the card size and the gap (400px + 40)
//   setIndicator();
//   slides.forEach((slide, i) => {
//     slide.style.transform = `translateX(${offset}px)`;
//   });
// }
// const indicators = document.querySelectorAll(".indicator");

// const setIndicator = () => {
//   indicators.forEach((indicator) => {
//     indicator.classList.remove("active"); //remove the active class
//     const indicatorNumber = +indicator.dataset.indicator;
//     if (indicatorNumber === index) {
//       indicator.classList.add("active"); //add active class to the clicked indicator
//     }
//   });
// };

// indicators.forEach((indicator) => {
//   indicator.addEventListener("click", (e) => {
//     const clickedIndicator = e.target;
//     index = parseInt(clickedIndicator.dataset.indicator); //make the index the same as the coreesponding indicator
//     updateSlidePosition();
//   });
// });
// }

/*----------------------------
  SLIDER INDICATOR
  スライダーのインジケーター
----------------------------*/

const indicators = document.querySelectorAll(".indicator");

const setIndicator = () => {
  indicators.forEach((indicator) => {
    indicator.classList.remove("active"); //remove the active class
    const indicatorNumber = +indicator.dataset.indicator;
    if (indicatorNumber === index) {
      indicator.classList.add("active"); //add active class to the clicked indicator
    }
  });
};

indicators.forEach((indicator) => {
  indicator.addEventListener("click", (e) => {
    const clickedIndicator = e.target;
    index = parseInt(clickedIndicator.dataset.indicator); //make the index the same as the coreesponding indicator
    updateSlidePosition();
  });
});

/*----------------------------
  SMOOTH SCROLL TO TOP
  トップへスムーススクロール
----------------------------*/
(0,_assets_jsfunctions_smoothscroll__WEBPACK_IMPORTED_MODULE_15__["default"])();



//transitopn 


// function delay(n) {
//   n = n || 2000
  
//   return new Promise(resolve => {
//     setTimeout(resolve, n)
//   })
// }


// const loadingScreen = document.querySelector('.transition');
// function pageTransitionIn(){
//   let tl = gsap.timeline();
//     tl.to(loadingScreen, { duration: 0.7, x: 0, transformOrigin: 'bottom left'})
//    .to(loadingScreen, { duration: 0.7, x:"-100%", transformOrigin: 'bottom left', delay: 0.3})
//    .set(loadingScreen, {  x:  "100%"})
      
// }

// barba.init({
//   sync:true,
//   transitions:[
//       {
//           async leave(data){
//               const done = this.async();
//               pageTransitionIn();
              
//               await delay(1000);
//               done();
//           },
//           async enter(data){
//             contentAnimation()
//             slider();
//           },

//           async once(data) {
//             contentAnimation();
//             slider();
//         },
//       }
//   ]
// })


// animation test

// gsap.from('.kv_subtitle',{opacity:0,x:100,duration:3,})


//hamburger menu

(0,_assets_jsfunctions_mobileNav__WEBPACK_IMPORTED_MODULE_16__["default"])();

(0,_assets_jsfunctions_mobileNavOpen__WEBPACK_IMPORTED_MODULE_17__["default"])();

//case slider

const caseSlideContainer= document.querySelector('.case-card-carousel'); //スライド / カルーセルのコンテナ
const caseSlide = document.querySelector('.case-card-carousel_list'); //カルーセルのトラック
const caseSlides = document.querySelectorAll('.case-card-mobile');   //スライド / カード

// 「次へ」ボタンと「前へ」ボタン
const caseNextBtn = document.getElementById('case-next');
const casePrevBtn = document.getElementById('case-prev');

let slider_index = 1;

const firstClone =  caseSlides[0].cloneNode(true);
const lastClone =  caseSlides[ caseSlides.length -1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

// caseSlide.append(firstClone);
// caseSlide.prepend(lastClone);

const slidesWidth =slides[index].clientWidth ;
console.log(slidesWidth)

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"src_assets_css_common_animation_css-src_assets_css_common_footer_css-src_assets_css_common_na-ad23d7": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkalways_231124_sumamin"] = self["webpackChunkalways_231124_sumamin"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_barba_core_dist_barba_umd_js-node_modules_gsap_ScrollTrigger_js-node_mod-124086","src_assets_css_common_animation_css-src_assets_css_common_footer_css-src_assets_css_common_na-ad23d7"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMzM4Nzg0ZWFhYTQzOWYxY2E2YmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7QUFHQTs7QUFFQSxFQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCZTs7QUFFZiwwRUFBMEU7QUFDMUUsc0VBQXNFO0FBQ3RFLHFFQUFxRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUMxQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEN1QztBQUNDO0FBQ3hDO0FBQ3FDO0FBQ0E7QUFDQztBQUNEO0FBQ0c7QUFDSDtBQUNBO0FBQ0c7QUFDQTtBQUNJO0FBQ0g7O0FBRUU7OztBQUdmO0FBQ3VCO0FBQ25CO0FBQ3FDO0FBQ0g7QUFDUDtBQUNGOzs7QUFHekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBSSxnQkFBZ0IsOERBQWE7O0FBRWpDLGFBQWEsdUNBQUk7O0FBRWpCO0FBQ0EsRUFBRSx1Q0FBSTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFFBQVE7QUFDUixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlEQUFpRDtBQUNqRCxrREFBa0Q7O0FBRWxELDhCQUE4Qjs7QUFFOUI7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLDBDQUEwQyxPQUFPO0FBQ2pELEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlEQUFpRDtBQUNqRCxrREFBa0Q7O0FBRWxELDhCQUE4Qjs7QUFFOUI7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLDZDQUE2QyxPQUFPO0FBQ3BELE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQSxNQUFNO0FBQ04sSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUFvQjs7OztBQUlwQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9EQUFvRDtBQUNsRiwyQkFBMkIscUVBQXFFO0FBQ2hHLDZCQUE2QixXQUFXO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLElBQUk7OztBQUdKOztBQUVBLDZCQUE2Qiw0QkFBNEI7OztBQUd6RDs7QUFFQSwwRUFBb0I7O0FBRXBCLDhFQUFTOztBQUVUOztBQUVBLHlFQUF5RTtBQUN6RSxzRUFBc0U7QUFDdEUscUVBQXFFOztBQUVyRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7O1VDM1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vYW5pbWF0aW9uLmNzcz82ZjlkIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9mb290ZXIuY3NzPzBlM2MiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL25hdmJhci5jc3M/OGIzNiIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vcmVzZXQuY3NzP2I3ZmIiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3R5cG9ncmFwaHkuY3NzPzRiN2QiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3V0aWxpdHkuY3NzP2M4ZTIiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvaW5kZXgvYWJvdXQuY3NzPzg2YzQiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvaW5kZXgvYmxvZy5jc3M/ZTE5MCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9pbmRleC9jYXNlLmNzcz9jNTM2Iiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2luZGV4L2NvbnRhY3QuY3NzP2U1ZGUiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvaW5kZXgvZmxvdy5jc3M/NzY1MiIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9pbmRleC9oZXJvLmNzcz84MGM4Iiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2luZGV4L21haW4uY3NzP2Y3OTAiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvaW5kZXgvcmVhc29ucy5jc3M/MjU4NiIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2pzZnVuY3Rpb25zL21vYmlsZU5hdi5qcyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2pzZnVuY3Rpb25zL21vYmlsZU5hdk9wZW4uanMiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9qc2Z1bmN0aW9ucy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9qc2Z1bmN0aW9ucy9zbW9vdGhzY3JvbGwuanMiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLW9uZVwiKTtcblxuXG4gXG5cbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYW5pbWF0ZUhhbWJ1cmdlck1lbnUoKXtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIik7XG4gICAgXG4gICAgICAgIGlmICghY3VycmVudFN0YXRlIHx8IGN1cnJlbnRTdGF0ZSA9PT0gXCJjbG9zZWRcIikge1xuICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFwib3BlbmVkXCIpO1xuICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiLCBcImNsb3NlZFwiKTtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSIsImNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLW9uZVwiKTtcbmNvbnN0IHByaW1hcnlOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpbWFyeS1uYXYnKTtcblxuXG5cbmZ1bmN0aW9uIGNsZWFyQ2xhc3MoKXtcbiAgICBwcmltYXJ5TmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW1hcnktbmF2X2Nsb3NlZCcpO1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzcygpe1xuICAgIHByaW1hcnlOYXYuY2xhc3NMaXN0LmFkZCgncHJpbWFyeS1uYXZfY2xvc2VkJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZ2dsZU5hdigpe1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIpO1xuY29uc29sZS5sb2coY3VycmVudFN0YXRlKVxuICAgICAgICBpZiAoY3VycmVudFN0YXRlID09PSBcImNsb3NlZFwiKSB7XG4gICAgICAgICAgICAvLyBjbGVhckNsYXNzKClcbiAgICAgICAgICAgIGFkZENsYXNzKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGFkZENsYXNzKCk7XG4gICAgICAgICAgICBjbGVhckNsYXNzKClcbiAgICAgICAgICB9XG4gICAgfSlcbn1cblxuIiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjdGl2YXRlU2xpZGVyKCl7XG5cbiAgICBjb25zdCBzbGlkZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXNlLWNhcmQtY2Fyb3VzZWwnKTsgLy/jgrnjg6njgqTjg4kgLyDjgqvjg6vjg7zjgrvjg6vjga7jgrPjg7Pjg4bjg4pcbiAgICBjb25zdCBzbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXNlLWNhcmQtY2Fyb3VzZWxfbGlzdCcpOyAvL+OCq+ODq+ODvOOCu+ODq+OBruODiOODqeODg+OCr1xuICAgIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXNlLWNhcmQtbW9iaWxlJyk7ICAgLy/jgrnjg6njgqTjg4kgLyDjgqvjg7zjg4lcbiAgICBcbiAgICAvLyDjgIzmrKHjgbjjgI3jg5zjgr/jg7PjgajjgIzliY3jgbjjgI3jg5zjgr/jg7NcbiAgICBjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhc2UtbmV4dCcpO1xuICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FzZS1wcmV2Jyk7XG4gICAgXG4gICAgbGV0IHNsaWRlcl9pbmRleCA9IDE7XG4gICAgXG4gICAgY29uc3QgZmlyc3RDbG9uZSA9IHNsaWRlc1swXS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY29uc3QgbGFzdENsb25lID0gc2xpZGVzW3NsaWRlcy1sZW5ndGggLTFdLmNsb25lTm9kZSh0cnVlKTtcbiAgICBcbiAgICBmaXJzdENsb25lLmlkID0gXCJmaXJzdC1jbG9uZVwiO1xuICAgIGxhc3RDbG9uZS5pZCA9IFwibGFzdC1jbG9uZVwiO1xuICAgIFxuICAgIHNsaWRlLmFwcGVuZChmaXJzdENsb25lKTtcbiAgICBzbGlkZS5wcmVwZW5kKGxhc3RDbG9uZSk7XG5cbiAgICBjb25zdCBzbGlkZXNXaWR0aCA9c2xpZGVzW2luZGV4XS5jbGllbnRXaWR0aCA7XG4gICAgY29uc29sZS5sb2coc2xpZGVzV2lkdGgpXG5cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY3RpdmF0ZVNtb290aFNjcm9sbCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCJdJyk7XG4gICAgICAgIFxuICAgICAgICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gNTAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZiA9PT0gJyMnIHx8IGhyZWYgPT09ICcnID8gJ2h0bWwnIDogaHJlZik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnNjcm9sbFk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0YXJnZXRQb3NpdGlvbiAtIHN0YXJ0UG9zaXRpb247XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0VGltZSA9IG51bGw7XG4gICAgICBcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBhbmltYXRpb24oY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkgc3RhcnRUaW1lID0gY3VycmVudFRpbWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVFbGFwc2VkID0gY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJ1biA9IGVhc2UodGltZUVsYXBzZWQsIHN0YXJ0UG9zaXRpb24sIGRpc3RhbmNlLCBzcGVlZCk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBydW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGltZUVsYXBzZWQgPCBzcGVlZCkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZWFzZSh0LCBiLCBjLCBkKSB7XG4gICAgICAgICAgICAgICAgICAgIHQgLz0gZCAvIDI7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0IDwgMSkgcmV0dXJuIGMgLyAyICogdCAqIHQgKyBiO1xuICAgICAgICAgICAgICAgICAgICB0LS07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtYyAvIDIgKiAodCAqICh0IC0gMikgLSAxKSArIGI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9uYXZiYXIuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3V0aWxpdHkuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaW5kZXgvaGVyby5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9pbmRleC9tYWluLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2luZGV4L2Fib3V0LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2luZGV4L2Nhc2UuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaW5kZXgvcmVhc29ucy5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9pbmRleC9mbG93LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2luZGV4L2Jsb2cuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaW5kZXgvY29udGFjdC5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vZm9vdGVyLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi90eXBvZ3JhcGh5LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi91dGlsaXR5LmNzc1wiO1xuXG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL2FuaW1hdGlvbi5jc3NcIjtcblxuXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5pbXBvcnQgYmFyYmEgZnJvbSAnQGJhcmJhL2NvcmUnO1xuaW1wb3J0IGFjdGl2YXRlU21vb3RoU2Nyb2xsIGZyb20gXCIuL2Fzc2V0cy9qc2Z1bmN0aW9ucy9zbW9vdGhzY3JvbGxcIjtcbmltcG9ydCBhbmltYXRlSGFtYnVyZ2VyTWVudSBmcm9tIFwiLi9hc3NldHMvanNmdW5jdGlvbnMvbW9iaWxlTmF2XCI7XG5pbXBvcnQgdG9nZ2xlTmF2IGZyb20gXCIuL2Fzc2V0cy9qc2Z1bmN0aW9ucy9tb2JpbGVOYXZPcGVuXCI7XG5pbXBvcnQgYWN0aXZhdGVTbGlkZXIgZnJvbSBcIi4vYXNzZXRzL2pzZnVuY3Rpb25zL3NsaWRlclwiO1xuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBDQVNFIFNFQ1RJT04gUEFSQUxMQVggQU5JTUFUSU9OXG4gIOOCseODvOOCueOCu+OCr+OCt+ODp+ODs+OBruODh+OCs+ODrOODvOOCt+ODp+ODs+OBq+WvvuOBmeOCi+ODkeODqeODqeODg+OCr+OCueOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmxldCBpbWFnZXMgPSBnc2FwLnV0aWxzLnRvQXJyYXkoXCIucGFyYWxsYXhcIik7XG5cbmltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4ge1xuICBnc2FwLnRvKGltYWdlLCB7XG4gICAgeVBlcmNlbnQ6IC0xMDAgKiBpbWFnZS5kYXRhc2V0LnNwZWVkLFxuICAgIGVhc2U6IFwibm9uZVwiLFxuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHNjcnViOiBpbWFnZS5kYXRhc2V0LnNwZWVkLFxuICAgIH0sXG4gIH0pO1xufSk7XG5cbi8vIGZ1bmN0aW9uIGNvbnRlbnRBbmltYXRpb24oKXtcbi8vICAgbGV0IGltYWdlcyA9IGdzYXAudXRpbHMudG9BcnJheShcIi5jYXNlLWRlY29yXCIpO1xuXG4vLyAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4ge1xuLy8gICAgIGdzYXAudG8oaW1hZ2UsIHtcbi8vICAgICAgIHlQZXJjZW50OiAtMTAwICogaW1hZ2UuZGF0YXNldC5zcGVlZCxcbi8vICAgICAgIGVhc2U6IFwibm9uZVwiLFxuLy8gICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuLy8gICAgICAgICBzY3J1YjogaW1hZ2UuZGF0YXNldC5zcGVlZCxcbi8vICAgICAgIH0sXG4vLyAgICAgfSk7XG4vLyAgIH0pO1xuLy8gfVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gU0xJREVSXG4g44K544Op44Kk44OA44O8XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuY29uc3Qgc2xpZGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyYWNrXCIpO1xuY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJcIik7XG5jb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2ctY2FyZFwiKTtcbmNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRfYnRuXCIpO1xuY29uc3QgcHJldkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJldmlvdXNfYnRuXCIpO1xuXG4vLyBjb25zdCBmaXJzdENsb25lID0gc2xpZGVzWzBdLmNsb25lTm9kZSh0cnVlKTsgLy9ub3Qgd29ya2luZyByblxuLy8gY29uc3Qgc2Vjb25kQ2xvbmUgPSBzbGlkZXNbMV0uY2xvbmVOb2RlKHRydWUpOyAvL25vdCB3b3JraW5nIHJuXG5cbi8vIHNsaWRlci5hcHBlbmQoZmlyc3RDbG9uZSk7IC8vbm90IHdvcmtpbmcgcm5cblxubGV0IGluZGV4ID0gMDtcbmNvbnN0IHNsaWRlV2lkdGggPSBzbGlkZXNbaW5kZXhdLmNsaWVudFdpZHRoO1xuXG5uZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGluZGV4Kys7IC8vaW5jcmVhc2VzIHRoZSBpbmRleCBieSAxXG4gIGlmIChpbmRleCA9PT0gNSkge1xuICAgIGluZGV4ID0gMDsgLy9pZiBpdHMgaW4gdGhlIDV0aCBzbGlkZSBpdCB3aWxsIHJlc2V0IHRvIHplcm8gc28gdGhhdCB0aGUgZmlyc3Qgc2xpZGUgaXMgc2hvd25cbiAgfVxuICB1cGRhdGVTbGlkZVBvc2l0aW9uKCk7XG59KTtcblxucHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoaW5kZXggPT09IDApIHtcbiAgICBpbmRleCA9IDQ7IC8vaWYgaXRzIGN1cnJlbnRseSBpbiB0aGUgZmlyc3Qgc2xpZGUgaXQgd2lsbCBqdW1wIHRvIHRoZSBsYXN0XG4gICAgdXBkYXRlU2xpZGVQb3NpdGlvbigpO1xuICB9IGVsc2Uge1xuICAgIGluZGV4LS07XG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgaW5kZXggPSBzbGlkZXMubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgdXBkYXRlU2xpZGVQb3NpdGlvbigpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdXBkYXRlU2xpZGVQb3NpdGlvbigpIHtcbiAgY29uc3Qgb2Zmc2V0ID0gNDQwICogaW5kZXg7IC8vb2ZmIHNldCBpcyBjYWxjdWxhdGVkIHdpdGggdGhlIGNhcmQgc2l6ZSBhbmQgdGhlIGdhcCAoNDAwcHggKyA0MClcbiAgc2V0SW5kaWNhdG9yKCk7XG4gIHNsaWRlcy5mb3JFYWNoKChzbGlkZSwgaSkgPT4ge1xuICAgIHNsaWRlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7b2Zmc2V0fXB4KWA7XG4gIH0pO1xufVxuXG4vLyBmdW5jdGlvbiBzbGlkZXIoKXtcblxuLy8gY29uc3Qgc2xpZGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyYWNrXCIpO1xuLy8gY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJcIik7XG4vLyBjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2ctY2FyZFwiKTtcbi8vIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRfYnRuXCIpO1xuLy8gY29uc3QgcHJldkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJldmlvdXNfYnRuXCIpO1xuXG4vLyBjb25zdCBmaXJzdENsb25lID0gc2xpZGVzWzBdLmNsb25lTm9kZSh0cnVlKTsgLy9ub3Qgd29ya2luZyByblxuLy8gY29uc3Qgc2Vjb25kQ2xvbmUgPSBzbGlkZXNbMV0uY2xvbmVOb2RlKHRydWUpOyAvL25vdCB3b3JraW5nIHJuXG5cbi8vIHNsaWRlci5hcHBlbmQoZmlyc3RDbG9uZSk7IC8vbm90IHdvcmtpbmcgcm5cblxuLy8gbGV0IGluZGV4ID0gMDtcbi8vIGNvbnN0IHNsaWRlV2lkdGggPSBzbGlkZXNbaW5kZXhdLmNsaWVudFdpZHRoO1xuXG4vLyBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgIGluZGV4Kys7IC8vaW5jcmVhc2VzIHRoZSBpbmRleCBieSAxXG4vLyAgIGlmIChpbmRleCA9PT0gNSkge1xuLy8gICAgIGluZGV4ID0gMDsgLy9pZiBpdHMgaW4gdGhlIDV0aCBzbGlkZSBpdCB3aWxsIHJlc2V0IHRvIHplcm8gc28gdGhhdCB0aGUgZmlyc3Qgc2xpZGUgaXMgc2hvd25cbi8vICAgfVxuLy8gICB1cGRhdGVTbGlkZVBvc2l0aW9uKCk7XG4vLyB9KTtcblxuLy8gcHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICBpZiAoaW5kZXggPT09IDApIHtcbi8vICAgICBpbmRleCA9IDQ7IC8vaWYgaXRzIGN1cnJlbnRseSBpbiB0aGUgZmlyc3Qgc2xpZGUgaXQgd2lsbCBqdW1wIHRvIHRoZSBsYXN0XG4vLyAgICAgdXBkYXRlU2xpZGVQb3NpdGlvbigpO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIGluZGV4LS07XG4vLyAgICAgaWYgKGluZGV4IDwgMCkge1xuLy8gICAgICAgaW5kZXggPSBzbGlkZXMubGVuZ3RoIC0gMTtcbi8vICAgICB9XG4vLyAgICAgdXBkYXRlU2xpZGVQb3NpdGlvbigpO1xuLy8gICB9XG4vLyB9KTtcblxuLy8gZnVuY3Rpb24gdXBkYXRlU2xpZGVQb3NpdGlvbigpIHtcbi8vICAgY29uc3Qgb2Zmc2V0ID0gNDQwICogaW5kZXg7IC8vb2ZmIHNldCBpcyBjYWxjdWxhdGVkIHdpdGggdGhlIGNhcmQgc2l6ZSBhbmQgdGhlIGdhcCAoNDAwcHggKyA0MClcbi8vICAgc2V0SW5kaWNhdG9yKCk7XG4vLyAgIHNsaWRlcy5mb3JFYWNoKChzbGlkZSwgaSkgPT4ge1xuLy8gICAgIHNsaWRlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7b2Zmc2V0fXB4KWA7XG4vLyAgIH0pO1xuLy8gfVxuLy8gY29uc3QgaW5kaWNhdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5kaWNhdG9yXCIpO1xuXG4vLyBjb25zdCBzZXRJbmRpY2F0b3IgPSAoKSA9PiB7XG4vLyAgIGluZGljYXRvcnMuZm9yRWFjaCgoaW5kaWNhdG9yKSA9PiB7XG4vLyAgICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7IC8vcmVtb3ZlIHRoZSBhY3RpdmUgY2xhc3Ncbi8vICAgICBjb25zdCBpbmRpY2F0b3JOdW1iZXIgPSAraW5kaWNhdG9yLmRhdGFzZXQuaW5kaWNhdG9yO1xuLy8gICAgIGlmIChpbmRpY2F0b3JOdW1iZXIgPT09IGluZGV4KSB7XG4vLyAgICAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTsgLy9hZGQgYWN0aXZlIGNsYXNzIHRvIHRoZSBjbGlja2VkIGluZGljYXRvclxuLy8gICAgIH1cbi8vICAgfSk7XG4vLyB9O1xuXG4vLyBpbmRpY2F0b3JzLmZvckVhY2goKGluZGljYXRvcikgPT4ge1xuLy8gICBpbmRpY2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4vLyAgICAgY29uc3QgY2xpY2tlZEluZGljYXRvciA9IGUudGFyZ2V0O1xuLy8gICAgIGluZGV4ID0gcGFyc2VJbnQoY2xpY2tlZEluZGljYXRvci5kYXRhc2V0LmluZGljYXRvcik7IC8vbWFrZSB0aGUgaW5kZXggdGhlIHNhbWUgYXMgdGhlIGNvcmVlc3BvbmRpbmcgaW5kaWNhdG9yXG4vLyAgICAgdXBkYXRlU2xpZGVQb3NpdGlvbigpO1xuLy8gICB9KTtcbi8vIH0pO1xuLy8gfVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgU0xJREVSIElORElDQVRPUlxuICDjgrnjg6njgqTjg4Djg7zjga7jgqTjg7PjgrjjgrHjg7zjgr/jg7xcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5jb25zdCBpbmRpY2F0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbmRpY2F0b3JcIik7XG5cbmNvbnN0IHNldEluZGljYXRvciA9ICgpID0+IHtcbiAgaW5kaWNhdG9ycy5mb3JFYWNoKChpbmRpY2F0b3IpID0+IHtcbiAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTsgLy9yZW1vdmUgdGhlIGFjdGl2ZSBjbGFzc1xuICAgIGNvbnN0IGluZGljYXRvck51bWJlciA9ICtpbmRpY2F0b3IuZGF0YXNldC5pbmRpY2F0b3I7XG4gICAgaWYgKGluZGljYXRvck51bWJlciA9PT0gaW5kZXgpIHtcbiAgICAgIGluZGljYXRvci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpOyAvL2FkZCBhY3RpdmUgY2xhc3MgdG8gdGhlIGNsaWNrZWQgaW5kaWNhdG9yXG4gICAgfVxuICB9KTtcbn07XG5cbmluZGljYXRvcnMuZm9yRWFjaCgoaW5kaWNhdG9yKSA9PiB7XG4gIGluZGljYXRvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCBjbGlja2VkSW5kaWNhdG9yID0gZS50YXJnZXQ7XG4gICAgaW5kZXggPSBwYXJzZUludChjbGlja2VkSW5kaWNhdG9yLmRhdGFzZXQuaW5kaWNhdG9yKTsgLy9tYWtlIHRoZSBpbmRleCB0aGUgc2FtZSBhcyB0aGUgY29yZWVzcG9uZGluZyBpbmRpY2F0b3JcbiAgICB1cGRhdGVTbGlkZVBvc2l0aW9uKCk7XG4gIH0pO1xufSk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBTTU9PVEggU0NST0xMIFRPIFRPUFxuICDjg4jjg4Pjg5fjgbjjgrnjg6Djg7zjgrnjgrnjgq/jg63jg7zjg6tcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuYWN0aXZhdGVTbW9vdGhTY3JvbGwoKTtcblxuXG5cbi8vdHJhbnNpdG9wbiBcblxuXG4vLyBmdW5jdGlvbiBkZWxheShuKSB7XG4vLyAgIG4gPSBuIHx8IDIwMDBcbiAgXG4vLyAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbi8vICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIG4pXG4vLyAgIH0pXG4vLyB9XG5cblxuLy8gY29uc3QgbG9hZGluZ1NjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFuc2l0aW9uJyk7XG4vLyBmdW5jdGlvbiBwYWdlVHJhbnNpdGlvbkluKCl7XG4vLyAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoKTtcbi8vICAgICB0bC50byhsb2FkaW5nU2NyZWVuLCB7IGR1cmF0aW9uOiAwLjcsIHg6IDAsIHRyYW5zZm9ybU9yaWdpbjogJ2JvdHRvbSBsZWZ0J30pXG4vLyAgICAudG8obG9hZGluZ1NjcmVlbiwgeyBkdXJhdGlvbjogMC43LCB4OlwiLTEwMCVcIiwgdHJhbnNmb3JtT3JpZ2luOiAnYm90dG9tIGxlZnQnLCBkZWxheTogMC4zfSlcbi8vICAgIC5zZXQobG9hZGluZ1NjcmVlbiwgeyAgeDogIFwiMTAwJVwifSlcbiAgICAgIFxuLy8gfVxuXG4vLyBiYXJiYS5pbml0KHtcbi8vICAgc3luYzp0cnVlLFxuLy8gICB0cmFuc2l0aW9uczpbXG4vLyAgICAgICB7XG4vLyAgICAgICAgICAgYXN5bmMgbGVhdmUoZGF0YSl7XG4vLyAgICAgICAgICAgICAgIGNvbnN0IGRvbmUgPSB0aGlzLmFzeW5jKCk7XG4vLyAgICAgICAgICAgICAgIHBhZ2VUcmFuc2l0aW9uSW4oKTtcbiAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgIGF3YWl0IGRlbGF5KDEwMDApO1xuLy8gICAgICAgICAgICAgICBkb25lKCk7XG4vLyAgICAgICAgICAgfSxcbi8vICAgICAgICAgICBhc3luYyBlbnRlcihkYXRhKXtcbi8vICAgICAgICAgICAgIGNvbnRlbnRBbmltYXRpb24oKVxuLy8gICAgICAgICAgICAgc2xpZGVyKCk7XG4vLyAgICAgICAgICAgfSxcblxuLy8gICAgICAgICAgIGFzeW5jIG9uY2UoZGF0YSkge1xuLy8gICAgICAgICAgICAgY29udGVudEFuaW1hdGlvbigpO1xuLy8gICAgICAgICAgICAgc2xpZGVyKCk7XG4vLyAgICAgICAgIH0sXG4vLyAgICAgICB9XG4vLyAgIF1cbi8vIH0pXG5cblxuLy8gYW5pbWF0aW9uIHRlc3RcblxuLy8gZ3NhcC5mcm9tKCcua3Zfc3VidGl0bGUnLHtvcGFjaXR5OjAseDoxMDAsZHVyYXRpb246Myx9KVxuXG5cbi8vaGFtYnVyZ2VyIG1lbnVcblxuYW5pbWF0ZUhhbWJ1cmdlck1lbnUoKTtcblxudG9nZ2xlTmF2KCk7XG5cbi8vY2FzZSBzbGlkZXJcblxuY29uc3QgY2FzZVNsaWRlQ29udGFpbmVyPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FzZS1jYXJkLWNhcm91c2VsJyk7IC8v44K544Op44Kk44OJIC8g44Kr44Or44O844K744Or44Gu44Kz44Oz44OG44OKXG5jb25zdCBjYXNlU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FzZS1jYXJkLWNhcm91c2VsX2xpc3QnKTsgLy/jgqvjg6vjg7zjgrvjg6vjga7jg4jjg6njg4Pjgq9cbmNvbnN0IGNhc2VTbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FzZS1jYXJkLW1vYmlsZScpOyAgIC8v44K544Op44Kk44OJIC8g44Kr44O844OJXG5cbi8vIOOAjOasoeOBuOOAjeODnOOCv+ODs+OBqOOAjOWJjeOBuOOAjeODnOOCv+ODs1xuY29uc3QgY2FzZU5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FzZS1uZXh0Jyk7XG5jb25zdCBjYXNlUHJldkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXNlLXByZXYnKTtcblxubGV0IHNsaWRlcl9pbmRleCA9IDE7XG5cbmNvbnN0IGZpcnN0Q2xvbmUgPSAgY2FzZVNsaWRlc1swXS5jbG9uZU5vZGUodHJ1ZSk7XG5jb25zdCBsYXN0Q2xvbmUgPSAgY2FzZVNsaWRlc1sgY2FzZVNsaWRlcy5sZW5ndGggLTFdLmNsb25lTm9kZSh0cnVlKTtcblxuZmlyc3RDbG9uZS5pZCA9IFwiZmlyc3QtY2xvbmVcIjtcbmxhc3RDbG9uZS5pZCA9IFwibGFzdC1jbG9uZVwiO1xuXG4vLyBjYXNlU2xpZGUuYXBwZW5kKGZpcnN0Q2xvbmUpO1xuLy8gY2FzZVNsaWRlLnByZXBlbmQobGFzdENsb25lKTtcblxuY29uc3Qgc2xpZGVzV2lkdGggPXNsaWRlc1tpbmRleF0uY2xpZW50V2lkdGggO1xuY29uc29sZS5sb2coc2xpZGVzV2lkdGgpIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwLFxuXHRcInNyY19hc3NldHNfY3NzX2NvbW1vbl9hbmltYXRpb25fY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9mb290ZXJfY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9uYS1hZDIzZDdcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rYWx3YXlzXzIzMTEyNF9zdW1hbWluXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2Fsd2F5c18yMzExMjRfc3VtYW1pblwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYmFyYmFfY29yZV9kaXN0X2JhcmJhX3VtZF9qcy1ub2RlX21vZHVsZXNfZ3NhcF9TY3JvbGxUcmlnZ2VyX2pzLW5vZGVfbW9kLTEyNDA4NlwiLFwic3JjX2Fzc2V0c19jc3NfY29tbW9uX2FuaW1hdGlvbl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX2Zvb3Rlcl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX25hLWFkMjNkN1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9