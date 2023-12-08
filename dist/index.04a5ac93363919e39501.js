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
/* harmony import */ var _assets_css_index_blog_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/css/index/blog.css */ "./src/assets/css/index/blog.css");
/* harmony import */ var _assets_css_index_case_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/css/index/case.css */ "./src/assets/css/index/case.css");
/* harmony import */ var _assets_css_index_reasons_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/css/index/reasons.css */ "./src/assets/css/index/reasons.css");
/* harmony import */ var _assets_css_index_flow_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/css/index/flow.css */ "./src/assets/css/index/flow.css");
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
let caseSlides = document.querySelectorAll('.case-card-mobile');   //スライド / カード

// 「次へ」ボタンと「前へ」ボタン
const caseNextBtn = document.getElementById('case-next');
const casePrevBtn = document.getElementById('case-prev');

let sliderIndex = 1;

// console.log(slideWidth)

const nextSlide = () => {
  caseSlides = document.querySelectorAll('.case-card-mobile');
  if (sliderIndex >= caseSlides.length - 1) {
    return;
  } else {
    sliderIndex++;
    caseSlides.forEach((slide) => {
      const slidesWidth = slide.clientWidth; // Use slide.clientWidth directly
      slide.style.transform = `translateX(${-slidesWidth * sliderIndex}px)`;
      slide.style.transition = '0.7s';
    });
  }
};

const prevSlide = () => {
  caseSlides = document.querySelectorAll('.case-card-mobile');
  if (sliderIndex === 0) {
    return;
  } else {
    sliderIndex--;
    caseSlides.forEach((slide) => {
      const slidesWidth = slide.clientWidth; // Use slide.clientWidth directly
      slide.style.transform = `translateX(${-slidesWidth * sliderIndex}px)`;
      slide.style.transition = '0.7s';
    });
  }
};


// slide.style.transition ='0.7s';
caseNextBtn.addEventListener('click',(e)=>{
nextSlide()
})

console.log(sliderIndex);

casePrevBtn.addEventListener('click',(e)=>{
 prevSlide();
})

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMDRhNWFjOTMzNjM5MTllMzk1MDEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7QUFHQTs7QUFFQSxFQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCZTs7QUFFZiwwRUFBMEU7QUFDMUUsc0VBQXNFO0FBQ3RFLHFFQUFxRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUMxQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Qs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azovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9hbmltYXRpb24uY3NzPzZmOWQiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL2Zvb3Rlci5jc3M/MGUzYyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vbmF2YmFyLmNzcz84YjM2Iiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9yZXNldC5jc3M/YjdmYiIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdHlwb2dyYXBoeS5jc3M/NGI3ZCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdXRpbGl0eS5jc3M/YzhlMiIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9pbmRleC9hYm91dC5jc3M/ODZjNCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9pbmRleC9ibG9nLmNzcz9lMTkwIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2luZGV4L2Nhc2UuY3NzP2M1MzYiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvaW5kZXgvY29udGFjdC5jc3M/ZTVkZSIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9pbmRleC9mbG93LmNzcz83NjUyIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2luZGV4L2hlcm8uY3NzPzgwYzgiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvaW5kZXgvbWFpbi5jc3M/Zjc5MCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9pbmRleC9yZWFzb25zLmNzcz8yNTg2Iiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvanNmdW5jdGlvbnMvbW9iaWxlTmF2LmpzIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvanNmdW5jdGlvbnMvbW9iaWxlTmF2T3Blbi5qcyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2pzZnVuY3Rpb25zL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2pzZnVuY3Rpb25zL3Ntb290aHNjcm9sbC5qcyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tb25lXCIpO1xuXG5cbiBcblxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbmltYXRlSGFtYnVyZ2VyTWVudSgpe1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiKTtcbiAgICBcbiAgICAgICAgaWYgKCFjdXJyZW50U3RhdGUgfHwgY3VycmVudFN0YXRlID09PSBcImNsb3NlZFwiKSB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgXCJvcGVuZWRcIik7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFwiY2xvc2VkXCIpO1xuICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9IiwiY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tb25lXCIpO1xuY29uc3QgcHJpbWFyeU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmltYXJ5LW5hdicpO1xuXG5cblxuZnVuY3Rpb24gY2xlYXJDbGFzcygpe1xuICAgIHByaW1hcnlOYXYuY2xhc3NMaXN0LnJlbW92ZSgncHJpbWFyeS1uYXZfY2xvc2VkJyk7XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKCl7XG4gICAgcHJpbWFyeU5hdi5jbGFzc0xpc3QuYWRkKCdwcmltYXJ5LW5hdl9jbG9zZWQnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlTmF2KCl7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIik7XG5jb25zb2xlLmxvZyhjdXJyZW50U3RhdGUpXG4gICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IFwiY2xvc2VkXCIpIHtcbiAgICAgICAgICAgIC8vIGNsZWFyQ2xhc3MoKVxuICAgICAgICAgICAgYWRkQ2xhc3MoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYWRkQ2xhc3MoKTtcbiAgICAgICAgICAgIGNsZWFyQ2xhc3MoKVxuICAgICAgICAgIH1cbiAgICB9KVxufVxuXG4iLCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWN0aXZhdGVTbGlkZXIoKXtcblxuICAgIGNvbnN0IHNsaWRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhc2UtY2FyZC1jYXJvdXNlbCcpOyAvL+OCueODqeOCpOODiSAvIOOCq+ODq+ODvOOCu+ODq+OBruOCs+ODs+ODhuODilxuICAgIGNvbnN0IHNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhc2UtY2FyZC1jYXJvdXNlbF9saXN0Jyk7IC8v44Kr44Or44O844K744Or44Gu44OI44Op44OD44KvXG4gICAgY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhc2UtY2FyZC1tb2JpbGUnKTsgICAvL+OCueODqeOCpOODiSAvIOOCq+ODvOODiVxuICAgIFxuICAgIC8vIOOAjOasoeOBuOOAjeODnOOCv+ODs+OBqOOAjOWJjeOBuOOAjeODnOOCv+ODs1xuICAgIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FzZS1uZXh0Jyk7XG4gICAgY29uc3QgcHJldkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXNlLXByZXYnKTtcbiAgICBcbiAgICBsZXQgc2xpZGVyX2luZGV4ID0gMTtcbiAgICBcbiAgICBjb25zdCBmaXJzdENsb25lID0gc2xpZGVzWzBdLmNsb25lTm9kZSh0cnVlKTtcbiAgICBjb25zdCBsYXN0Q2xvbmUgPSBzbGlkZXNbc2xpZGVzLWxlbmd0aCAtMV0uY2xvbmVOb2RlKHRydWUpO1xuICAgIFxuICAgIGZpcnN0Q2xvbmUuaWQgPSBcImZpcnN0LWNsb25lXCI7XG4gICAgbGFzdENsb25lLmlkID0gXCJsYXN0LWNsb25lXCI7XG4gICAgXG4gICAgc2xpZGUuYXBwZW5kKGZpcnN0Q2xvbmUpO1xuICAgIHNsaWRlLnByZXBlbmQobGFzdENsb25lKTtcblxuICAgIGNvbnN0IHNsaWRlc1dpZHRoID1zbGlkZXNbaW5kZXhdLmNsaWVudFdpZHRoIDtcbiAgICBjb25zb2xlLmxvZyhzbGlkZXNXaWR0aClcblxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjdGl2YXRlU21vb3RoU2Nyb2xsKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIiNcIl0nKTtcbiAgICAgICAgXG4gICAgICAgIGxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSA1MDA7XG4gICAgICAgICAgICAgICAgY29uc3QgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihocmVmID09PSAnIycgfHwgaHJlZiA9PT0gJycgPyAnaHRtbCcgOiBocmVmKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRhcmdldFBvc2l0aW9uIC0gc3RhcnRQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRUaW1lID0gbnVsbDtcbiAgICAgIFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGFuaW1hdGlvbihjdXJyZW50VGltZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnRUaW1lID09PSBudWxsKSBzdGFydFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZUVsYXBzZWQgPSBjdXJyZW50VGltZSAtIHN0YXJ0VGltZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcnVuID0gZWFzZSh0aW1lRWxhcHNlZCwgc3RhcnRQb3NpdGlvbiwgZGlzdGFuY2UsIHNwZWVkKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHJ1bik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aW1lRWxhcHNlZCA8IHNwZWVkKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBlYXNlKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdCAvPSBkIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgPCAxKSByZXR1cm4gYyAvIDIgKiB0ICogdCArIGI7XG4gICAgICAgICAgICAgICAgICAgIHQtLTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC1jIC8gMiAqICh0ICogKHQgLSAyKSAtIDEpICsgYjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL25hdmJhci5jc3NcIjtcbi8vIGltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdXRpbGl0eS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9pbmRleC9oZXJvLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2luZGV4L21haW4uY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaW5kZXgvYWJvdXQuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaW5kZXgvYmxvZy5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9pbmRleC9jYXNlLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2luZGV4L3JlYXNvbnMuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaW5kZXgvZmxvdy5jc3NcIjtcblxuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2luZGV4L2NvbnRhY3QuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL2Zvb3Rlci5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdHlwb2dyYXBoeS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdXRpbGl0eS5jc3NcIjtcblxuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9hbmltYXRpb24uY3NzXCI7XG5cblxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuaW1wb3J0IGJhcmJhIGZyb20gJ0BiYXJiYS9jb3JlJztcbmltcG9ydCBhY3RpdmF0ZVNtb290aFNjcm9sbCBmcm9tIFwiLi9hc3NldHMvanNmdW5jdGlvbnMvc21vb3Roc2Nyb2xsXCI7XG5pbXBvcnQgYW5pbWF0ZUhhbWJ1cmdlck1lbnUgZnJvbSBcIi4vYXNzZXRzL2pzZnVuY3Rpb25zL21vYmlsZU5hdlwiO1xuaW1wb3J0IHRvZ2dsZU5hdiBmcm9tIFwiLi9hc3NldHMvanNmdW5jdGlvbnMvbW9iaWxlTmF2T3BlblwiO1xuaW1wb3J0IGFjdGl2YXRlU2xpZGVyIGZyb20gXCIuL2Fzc2V0cy9qc2Z1bmN0aW9ucy9zbGlkZXJcIjtcblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgQ0FTRSBTRUNUSU9OIFBBUkFMTEFYIEFOSU1BVElPTlxuICDjgrHjg7zjgrnjgrvjgq/jgrfjg6fjg7Pjga7jg4fjgrPjg6zjg7zjgrfjg6fjg7Pjgavlr77jgZnjgovjg5Hjg6njg6njg4Pjgq/jgrnjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5sZXQgaW1hZ2VzID0gZ3NhcC51dGlscy50b0FycmF5KFwiLnBhcmFsbGF4XCIpO1xuXG5pbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbiAgZ3NhcC50byhpbWFnZSwge1xuICAgIHlQZXJjZW50OiAtMTAwICogaW1hZ2UuZGF0YXNldC5zcGVlZCxcbiAgICBlYXNlOiBcIm5vbmVcIixcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICBzY3J1YjogaW1hZ2UuZGF0YXNldC5zcGVlZCxcbiAgICB9LFxuICB9KTtcbn0pO1xuXG4vLyBmdW5jdGlvbiBjb250ZW50QW5pbWF0aW9uKCl7XG4vLyAgIGxldCBpbWFnZXMgPSBnc2FwLnV0aWxzLnRvQXJyYXkoXCIuY2FzZS1kZWNvclwiKTtcblxuLy8gICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbi8vICAgICBnc2FwLnRvKGltYWdlLCB7XG4vLyAgICAgICB5UGVyY2VudDogLTEwMCAqIGltYWdlLmRhdGFzZXQuc3BlZWQsXG4vLyAgICAgICBlYXNlOiBcIm5vbmVcIixcbi8vICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbi8vICAgICAgICAgc2NydWI6IGltYWdlLmRhdGFzZXQuc3BlZWQsXG4vLyAgICAgICB9LFxuLy8gICAgIH0pO1xuLy8gICB9KTtcbi8vIH1cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIFNMSURFUlxuIOOCueODqeOCpOODgOODvFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmNvbnN0IHNsaWRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmFja1wiKTtcbmNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyXCIpO1xuY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9nLWNhcmRcIik7XG5jb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0X2J0blwiKTtcbmNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZpb3VzX2J0blwiKTtcblxuLy8gY29uc3QgZmlyc3RDbG9uZSA9IHNsaWRlc1swXS5jbG9uZU5vZGUodHJ1ZSk7IC8vbm90IHdvcmtpbmcgcm5cbi8vIGNvbnN0IHNlY29uZENsb25lID0gc2xpZGVzWzFdLmNsb25lTm9kZSh0cnVlKTsgLy9ub3Qgd29ya2luZyByblxuXG4vLyBzbGlkZXIuYXBwZW5kKGZpcnN0Q2xvbmUpOyAvL25vdCB3b3JraW5nIHJuXG5cbmxldCBpbmRleCA9IDA7XG5jb25zdCBzbGlkZVdpZHRoID0gc2xpZGVzW2luZGV4XS5jbGllbnRXaWR0aDtcblxubmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpbmRleCsrOyAvL2luY3JlYXNlcyB0aGUgaW5kZXggYnkgMVxuICBpZiAoaW5kZXggPT09IDUpIHtcbiAgICBpbmRleCA9IDA7IC8vaWYgaXRzIGluIHRoZSA1dGggc2xpZGUgaXQgd2lsbCByZXNldCB0byB6ZXJvIHNvIHRoYXQgdGhlIGZpcnN0IHNsaWRlIGlzIHNob3duXG4gIH1cbiAgdXBkYXRlU2xpZGVQb3NpdGlvbigpO1xufSk7XG5cbnByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgaW5kZXggPSA0OyAvL2lmIGl0cyBjdXJyZW50bHkgaW4gdGhlIGZpcnN0IHNsaWRlIGl0IHdpbGwganVtcCB0byB0aGUgbGFzdFxuICAgIHVwZGF0ZVNsaWRlUG9zaXRpb24oKTtcbiAgfSBlbHNlIHtcbiAgICBpbmRleC0tO1xuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIGluZGV4ID0gc2xpZGVzLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIHVwZGF0ZVNsaWRlUG9zaXRpb24oKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHVwZGF0ZVNsaWRlUG9zaXRpb24oKSB7XG4gIGNvbnN0IG9mZnNldCA9IDQ0MCAqIGluZGV4OyAvL29mZiBzZXQgaXMgY2FsY3VsYXRlZCB3aXRoIHRoZSBjYXJkIHNpemUgYW5kIHRoZSBnYXAgKDQwMHB4ICsgNDApXG4gIHNldEluZGljYXRvcigpO1xuICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUsIGkpID0+IHtcbiAgICBzbGlkZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke29mZnNldH1weClgO1xuICB9KTtcbn1cblxuLy8gZnVuY3Rpb24gc2xpZGVyKCl7XG5cbi8vIGNvbnN0IHNsaWRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmFja1wiKTtcbi8vIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyXCIpO1xuLy8gY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9nLWNhcmRcIik7XG4vLyBjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0X2J0blwiKTtcbi8vIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZpb3VzX2J0blwiKTtcblxuLy8gY29uc3QgZmlyc3RDbG9uZSA9IHNsaWRlc1swXS5jbG9uZU5vZGUodHJ1ZSk7IC8vbm90IHdvcmtpbmcgcm5cbi8vIGNvbnN0IHNlY29uZENsb25lID0gc2xpZGVzWzFdLmNsb25lTm9kZSh0cnVlKTsgLy9ub3Qgd29ya2luZyByblxuXG4vLyBzbGlkZXIuYXBwZW5kKGZpcnN0Q2xvbmUpOyAvL25vdCB3b3JraW5nIHJuXG5cbi8vIGxldCBpbmRleCA9IDA7XG4vLyBjb25zdCBzbGlkZVdpZHRoID0gc2xpZGVzW2luZGV4XS5jbGllbnRXaWR0aDtcblxuLy8gbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICBpbmRleCsrOyAvL2luY3JlYXNlcyB0aGUgaW5kZXggYnkgMVxuLy8gICBpZiAoaW5kZXggPT09IDUpIHtcbi8vICAgICBpbmRleCA9IDA7IC8vaWYgaXRzIGluIHRoZSA1dGggc2xpZGUgaXQgd2lsbCByZXNldCB0byB6ZXJvIHNvIHRoYXQgdGhlIGZpcnN0IHNsaWRlIGlzIHNob3duXG4vLyAgIH1cbi8vICAgdXBkYXRlU2xpZGVQb3NpdGlvbigpO1xuLy8gfSk7XG5cbi8vIHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgaWYgKGluZGV4ID09PSAwKSB7XG4vLyAgICAgaW5kZXggPSA0OyAvL2lmIGl0cyBjdXJyZW50bHkgaW4gdGhlIGZpcnN0IHNsaWRlIGl0IHdpbGwganVtcCB0byB0aGUgbGFzdFxuLy8gICAgIHVwZGF0ZVNsaWRlUG9zaXRpb24oKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICBpbmRleC0tO1xuLy8gICAgIGlmIChpbmRleCA8IDApIHtcbi8vICAgICAgIGluZGV4ID0gc2xpZGVzLmxlbmd0aCAtIDE7XG4vLyAgICAgfVxuLy8gICAgIHVwZGF0ZVNsaWRlUG9zaXRpb24oKTtcbi8vICAgfVxuLy8gfSk7XG5cbi8vIGZ1bmN0aW9uIHVwZGF0ZVNsaWRlUG9zaXRpb24oKSB7XG4vLyAgIGNvbnN0IG9mZnNldCA9IDQ0MCAqIGluZGV4OyAvL29mZiBzZXQgaXMgY2FsY3VsYXRlZCB3aXRoIHRoZSBjYXJkIHNpemUgYW5kIHRoZSBnYXAgKDQwMHB4ICsgNDApXG4vLyAgIHNldEluZGljYXRvcigpO1xuLy8gICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUsIGkpID0+IHtcbi8vICAgICBzbGlkZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke29mZnNldH1weClgO1xuLy8gICB9KTtcbi8vIH1cbi8vIGNvbnN0IGluZGljYXRvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmluZGljYXRvclwiKTtcblxuLy8gY29uc3Qgc2V0SW5kaWNhdG9yID0gKCkgPT4ge1xuLy8gICBpbmRpY2F0b3JzLmZvckVhY2goKGluZGljYXRvcikgPT4ge1xuLy8gICAgIGluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpOyAvL3JlbW92ZSB0aGUgYWN0aXZlIGNsYXNzXG4vLyAgICAgY29uc3QgaW5kaWNhdG9yTnVtYmVyID0gK2luZGljYXRvci5kYXRhc2V0LmluZGljYXRvcjtcbi8vICAgICBpZiAoaW5kaWNhdG9yTnVtYmVyID09PSBpbmRleCkge1xuLy8gICAgICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7IC8vYWRkIGFjdGl2ZSBjbGFzcyB0byB0aGUgY2xpY2tlZCBpbmRpY2F0b3Jcbi8vICAgICB9XG4vLyAgIH0pO1xuLy8gfTtcblxuLy8gaW5kaWNhdG9ycy5mb3JFYWNoKChpbmRpY2F0b3IpID0+IHtcbi8vICAgaW5kaWNhdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuLy8gICAgIGNvbnN0IGNsaWNrZWRJbmRpY2F0b3IgPSBlLnRhcmdldDtcbi8vICAgICBpbmRleCA9IHBhcnNlSW50KGNsaWNrZWRJbmRpY2F0b3IuZGF0YXNldC5pbmRpY2F0b3IpOyAvL21ha2UgdGhlIGluZGV4IHRoZSBzYW1lIGFzIHRoZSBjb3JlZXNwb25kaW5nIGluZGljYXRvclxuLy8gICAgIHVwZGF0ZVNsaWRlUG9zaXRpb24oKTtcbi8vICAgfSk7XG4vLyB9KTtcbi8vIH1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFNMSURFUiBJTkRJQ0FUT1JcbiAg44K544Op44Kk44OA44O844Gu44Kk44Oz44K444Kx44O844K/44O8XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuY29uc3QgaW5kaWNhdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5kaWNhdG9yXCIpO1xuXG5jb25zdCBzZXRJbmRpY2F0b3IgPSAoKSA9PiB7XG4gIGluZGljYXRvcnMuZm9yRWFjaCgoaW5kaWNhdG9yKSA9PiB7XG4gICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7IC8vcmVtb3ZlIHRoZSBhY3RpdmUgY2xhc3NcbiAgICBjb25zdCBpbmRpY2F0b3JOdW1iZXIgPSAraW5kaWNhdG9yLmRhdGFzZXQuaW5kaWNhdG9yO1xuICAgIGlmIChpbmRpY2F0b3JOdW1iZXIgPT09IGluZGV4KSB7XG4gICAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTsgLy9hZGQgYWN0aXZlIGNsYXNzIHRvIHRoZSBjbGlja2VkIGluZGljYXRvclxuICAgIH1cbiAgfSk7XG59O1xuXG5pbmRpY2F0b3JzLmZvckVhY2goKGluZGljYXRvcikgPT4ge1xuICBpbmRpY2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgY2xpY2tlZEluZGljYXRvciA9IGUudGFyZ2V0O1xuICAgIGluZGV4ID0gcGFyc2VJbnQoY2xpY2tlZEluZGljYXRvci5kYXRhc2V0LmluZGljYXRvcik7IC8vbWFrZSB0aGUgaW5kZXggdGhlIHNhbWUgYXMgdGhlIGNvcmVlc3BvbmRpbmcgaW5kaWNhdG9yXG4gICAgdXBkYXRlU2xpZGVQb3NpdGlvbigpO1xuICB9KTtcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgU01PT1RIIFNDUk9MTCBUTyBUT1BcbiAg44OI44OD44OX44G444K544Og44O844K544K544Kv44Ot44O844OrXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmFjdGl2YXRlU21vb3RoU2Nyb2xsKCk7XG5cblxuXG4vL3RyYW5zaXRvcG4gXG5cblxuLy8gZnVuY3Rpb24gZGVsYXkobikge1xuLy8gICBuID0gbiB8fCAyMDAwXG4gIFxuLy8gICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4vLyAgICAgc2V0VGltZW91dChyZXNvbHZlLCBuKVxuLy8gICB9KVxuLy8gfVxuXG5cbi8vIGNvbnN0IGxvYWRpbmdTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhbnNpdGlvbicpO1xuLy8gZnVuY3Rpb24gcGFnZVRyYW5zaXRpb25Jbigpe1xuLy8gICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XG4vLyAgICAgdGwudG8obG9hZGluZ1NjcmVlbiwgeyBkdXJhdGlvbjogMC43LCB4OiAwLCB0cmFuc2Zvcm1PcmlnaW46ICdib3R0b20gbGVmdCd9KVxuLy8gICAgLnRvKGxvYWRpbmdTY3JlZW4sIHsgZHVyYXRpb246IDAuNywgeDpcIi0xMDAlXCIsIHRyYW5zZm9ybU9yaWdpbjogJ2JvdHRvbSBsZWZ0JywgZGVsYXk6IDAuM30pXG4vLyAgICAuc2V0KGxvYWRpbmdTY3JlZW4sIHsgIHg6ICBcIjEwMCVcIn0pXG4gICAgICBcbi8vIH1cblxuLy8gYmFyYmEuaW5pdCh7XG4vLyAgIHN5bmM6dHJ1ZSxcbi8vICAgdHJhbnNpdGlvbnM6W1xuLy8gICAgICAge1xuLy8gICAgICAgICAgIGFzeW5jIGxlYXZlKGRhdGEpe1xuLy8gICAgICAgICAgICAgICBjb25zdCBkb25lID0gdGhpcy5hc3luYygpO1xuLy8gICAgICAgICAgICAgICBwYWdlVHJhbnNpdGlvbkluKCk7XG4gICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICBhd2FpdCBkZWxheSgxMDAwKTtcbi8vICAgICAgICAgICAgICAgZG9uZSgpO1xuLy8gICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgYXN5bmMgZW50ZXIoZGF0YSl7XG4vLyAgICAgICAgICAgICBjb250ZW50QW5pbWF0aW9uKClcbi8vICAgICAgICAgICAgIHNsaWRlcigpO1xuLy8gICAgICAgICAgIH0sXG5cbi8vICAgICAgICAgICBhc3luYyBvbmNlKGRhdGEpIHtcbi8vICAgICAgICAgICAgIGNvbnRlbnRBbmltYXRpb24oKTtcbi8vICAgICAgICAgICAgIHNsaWRlcigpO1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgfVxuLy8gICBdXG4vLyB9KVxuXG5cbi8vIGFuaW1hdGlvbiB0ZXN0XG5cbi8vIGdzYXAuZnJvbSgnLmt2X3N1YnRpdGxlJyx7b3BhY2l0eTowLHg6MTAwLGR1cmF0aW9uOjMsfSlcblxuXG4vL2hhbWJ1cmdlciBtZW51XG5cbmFuaW1hdGVIYW1idXJnZXJNZW51KCk7XG5cbnRvZ2dsZU5hdigpO1xuXG4vL2Nhc2Ugc2xpZGVyXG5cbmNvbnN0IGNhc2VTbGlkZUNvbnRhaW5lcj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhc2UtY2FyZC1jYXJvdXNlbCcpOyAvL+OCueODqeOCpOODiSAvIOOCq+ODq+ODvOOCu+ODq+OBruOCs+ODs+ODhuODilxuY29uc3QgY2FzZVNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhc2UtY2FyZC1jYXJvdXNlbF9saXN0Jyk7IC8v44Kr44Or44O844K744Or44Gu44OI44Op44OD44KvXG5sZXQgY2FzZVNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXNlLWNhcmQtbW9iaWxlJyk7ICAgLy/jgrnjg6njgqTjg4kgLyDjgqvjg7zjg4lcblxuLy8g44CM5qyh44G444CN44Oc44K/44Oz44Go44CM5YmN44G444CN44Oc44K/44OzXG5jb25zdCBjYXNlTmV4dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXNlLW5leHQnKTtcbmNvbnN0IGNhc2VQcmV2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhc2UtcHJldicpO1xuXG5sZXQgc2xpZGVySW5kZXggPSAxO1xuXG4vLyBjb25zb2xlLmxvZyhzbGlkZVdpZHRoKVxuXG5jb25zdCBuZXh0U2xpZGUgPSAoKSA9PiB7XG4gIGNhc2VTbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FzZS1jYXJkLW1vYmlsZScpO1xuICBpZiAoc2xpZGVySW5kZXggPj0gY2FzZVNsaWRlcy5sZW5ndGggLSAxKSB7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIHNsaWRlckluZGV4Kys7XG4gICAgY2FzZVNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgY29uc3Qgc2xpZGVzV2lkdGggPSBzbGlkZS5jbGllbnRXaWR0aDsgLy8gVXNlIHNsaWRlLmNsaWVudFdpZHRoIGRpcmVjdGx5XG4gICAgICBzbGlkZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkey1zbGlkZXNXaWR0aCAqIHNsaWRlckluZGV4fXB4KWA7XG4gICAgICBzbGlkZS5zdHlsZS50cmFuc2l0aW9uID0gJzAuN3MnO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBwcmV2U2xpZGUgPSAoKSA9PiB7XG4gIGNhc2VTbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FzZS1jYXJkLW1vYmlsZScpO1xuICBpZiAoc2xpZGVySW5kZXggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgc2xpZGVySW5kZXgtLTtcbiAgICBjYXNlU2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiB7XG4gICAgICBjb25zdCBzbGlkZXNXaWR0aCA9IHNsaWRlLmNsaWVudFdpZHRoOyAvLyBVc2Ugc2xpZGUuY2xpZW50V2lkdGggZGlyZWN0bHlcbiAgICAgIHNsaWRlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7LXNsaWRlc1dpZHRoICogc2xpZGVySW5kZXh9cHgpYDtcbiAgICAgIHNsaWRlLnN0eWxlLnRyYW5zaXRpb24gPSAnMC43cyc7XG4gICAgfSk7XG4gIH1cbn07XG5cblxuLy8gc2xpZGUuc3R5bGUudHJhbnNpdGlvbiA9JzAuN3MnO1xuY2FzZU5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xubmV4dFNsaWRlKClcbn0pXG5cbmNvbnNvbGUubG9nKHNsaWRlckluZGV4KTtcblxuY2FzZVByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuIHByZXZTbGlkZSgpO1xufSkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDAsXG5cdFwic3JjX2Fzc2V0c19jc3NfY29tbW9uX2FuaW1hdGlvbl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX2Zvb3Rlcl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX25hLWFkMjNkN1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthbHdheXNfMjMxMTI0X3N1bWFtaW5cIl0gPSBzZWxmW1wid2VicGFja0NodW5rYWx3YXlzXzIzMTEyNF9zdW1hbWluXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19iYXJiYV9jb3JlX2Rpc3RfYmFyYmFfdW1kX2pzLW5vZGVfbW9kdWxlc19nc2FwX1Njcm9sbFRyaWdnZXJfanMtbm9kZV9tb2QtMTI0MDg2XCIsXCJzcmNfYXNzZXRzX2Nzc19jb21tb25fYW5pbWF0aW9uX2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fZm9vdGVyX2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fbmEtYWQyM2Q3XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=