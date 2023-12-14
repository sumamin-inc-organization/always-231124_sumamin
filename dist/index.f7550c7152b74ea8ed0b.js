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

/***/ "./src/assets/css/index/indexContact.css":
/*!***********************************************!*\
  !*** ./src/assets/css/index/indexContact.css ***!
  \***********************************************/
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
/* harmony import */ var _assets_css_index_indexContact_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/css/index/indexContact.css */ "./src/assets/css/index/indexContact.css");
/* harmony import */ var _assets_css_common_footer_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/css/common/footer.css */ "./src/assets/css/common/footer.css");
/* harmony import */ var _assets_css_common_typography_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/css/common/typography.css */ "./src/assets/css/common/typography.css");
/* harmony import */ var _assets_css_common_utility_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/css/common/utility.css */ "./src/assets/css/common/utility.css");
/* harmony import */ var _assets_css_common_animation_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/css/common/animation.css */ "./src/assets/css/common/animation.css");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @barba/core */ "./node_modules/@barba/core/dist/barba.umd.js");
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_barba_core__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_jsfunctions_smoothscroll__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/jsfunctions/smoothscroll */ "./src/assets/jsfunctions/smoothscroll.js");
/* harmony import */ var _assets_jsfunctions_mobileNav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/jsfunctions/mobileNav */ "./src/assets/jsfunctions/mobileNav.js");
/* harmony import */ var _assets_jsfunctions_mobileNavOpen__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/jsfunctions/mobileNavOpen */ "./src/assets/jsfunctions/mobileNavOpen.js");
/* harmony import */ var _assets_jsfunctions_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/jsfunctions/slider */ "./src/assets/jsfunctions/slider.js");

















//-----------JAVASCRIPT----------- //










/*-------------------------------------------------------
  CASE SECTION PARALLAX ANIMATION
  ケースセクションのデコレーションに対するパララックスアニメーション
---------------------------------------------------------*/
gsap__WEBPACK_IMPORTED_MODULE_20__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_21__.ScrollTrigger);

let images = gsap__WEBPACK_IMPORTED_MODULE_20__.gsap.utils.toArray(".parallax");

images.forEach((image) => {
  gsap__WEBPACK_IMPORTED_MODULE_20__.gsap.to(image, {
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
let slides = document.querySelectorAll(".blog-card");
const nextBtn = document.getElementById("next_btn");
const prevBtn = document.getElementById("previous_btn");

// const firstClone = slides[0].cloneNode(true); //not working rn
// const secondClone = slides[1].cloneNode(true); //not working rn

// slider.append(firstClone); //not working rn
// slides.forEach(slide =>{
//   slide.style.transform = `translateX(-400px)`;
// })
let index = 0;
// const slideWidth = slides[index].clientWidth;

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
  slides = document.querySelectorAll(".blog-card");
  const slideWidth = slides[index].clientWidth;
  const offset = 440 * index; //off set is calculated with the card size and the gap (400px + 40)
  const gap =  40 * index; //adjust the gap as the index
  const slidew = slideWidth * index; //adjust the offeset based on the slidewidth
  const offset2 = slidew + gap;
  setIndicator();
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${offset2}px)`;
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
(0,_assets_jsfunctions_smoothscroll__WEBPACK_IMPORTED_MODULE_16__["default"])();



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



/*----------------------------
  HAMBURGER MENU ANIMATIONS
  ハンバーガーメニューのアニメーション
----------------------------*/

(0,_assets_jsfunctions_mobileNav__WEBPACK_IMPORTED_MODULE_17__["default"])();
/*----------------------------
  TOGGLE MOBILE NAV
  モバイルナビゲーションの切り替え機能
----------------------------*/

(0,_assets_jsfunctions_mobileNavOpen__WEBPACK_IMPORTED_MODULE_18__["default"])();

//case slider

const caseSlideContainer= document.querySelector('.case-card-carousel'); //スライド / カルーセルのコンテナ
const caseSlide = document.querySelector('.case-card-carousel_list'); //カルーセルのトラック
let caseSlides = document.querySelectorAll('.case-card-mobile');   //スライド / カード

// 「次へ」ボタンと「前へ」ボタン
const caseNextBtn = document.getElementById('case-next');
const casePrevBtn = document.getElementById('case-prev');

let sliderIndex = 0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZjc1NTBjNzE1MmI3NGVhOGVkMGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7O0FBR0E7O0FBRUEsRUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QmU7O0FBRWYsMEVBQTBFO0FBQzFFLHNFQUFzRTtBQUN0RSxxRUFBcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDMUJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFh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QUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVqREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9hbmltYXRpb24uY3NzPzZmOWQiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL2Zvb3Rlci5jc3M/MGUzYyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vbmF2YmFyLmNzcz84YjM2Iiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9yZXNldC5jc3M/YjdmYiIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdHlwb2dyYXBoeS5jc3M/NGI3ZCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdXRpbGl0eS5jc3M/YzhlMiIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9pbmRleC9hYm91dC5jc3M/ODZjNCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9pbmRleC9ibG9nLmNzcz9lMTkwIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2luZGV4L2Nhc2UuY3NzP2M1MzYiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvaW5kZXgvY29udGFjdC5jc3M/ZTVkZSIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9pbmRleC9mbG93LmNzcz83NjUyIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2luZGV4L2hlcm8uY3NzPzgwYzgiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvaW5kZXgvaW5kZXhDb250YWN0LmNzcz8yZmNlIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2luZGV4L21haW4uY3NzP2Y3OTAiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvaW5kZXgvcmVhc29ucy5jc3M/MjU4NiIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2pzZnVuY3Rpb25zL21vYmlsZU5hdi5qcyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2pzZnVuY3Rpb25zL21vYmlsZU5hdk9wZW4uanMiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9qc2Z1bmN0aW9ucy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9qc2Z1bmN0aW9ucy9zbW9vdGhzY3JvbGwuanMiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLW9uZVwiKTtcblxuXG4gXG5cbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYW5pbWF0ZUhhbWJ1cmdlck1lbnUoKXtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIik7XG4gICAgXG4gICAgICAgIGlmICghY3VycmVudFN0YXRlIHx8IGN1cnJlbnRTdGF0ZSA9PT0gXCJjbG9zZWRcIikge1xuICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFwib3BlbmVkXCIpO1xuICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiLCBcImNsb3NlZFwiKTtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSIsImNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLW9uZVwiKTtcbmNvbnN0IHByaW1hcnlOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpbWFyeS1uYXYnKTtcblxuXG5cbmZ1bmN0aW9uIGNsZWFyQ2xhc3MoKXtcbiAgICBwcmltYXJ5TmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW1hcnktbmF2X2Nsb3NlZCcpO1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzcygpe1xuICAgIHByaW1hcnlOYXYuY2xhc3NMaXN0LmFkZCgncHJpbWFyeS1uYXZfY2xvc2VkJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZ2dsZU5hdigpe1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIpO1xuY29uc29sZS5sb2coY3VycmVudFN0YXRlKVxuICAgICAgICBpZiAoY3VycmVudFN0YXRlID09PSBcImNsb3NlZFwiKSB7XG4gICAgICAgICAgICAvLyBjbGVhckNsYXNzKClcbiAgICAgICAgICAgIGFkZENsYXNzKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGFkZENsYXNzKCk7XG4gICAgICAgICAgICBjbGVhckNsYXNzKClcbiAgICAgICAgICB9XG4gICAgfSlcbn1cblxuIiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjdGl2YXRlU2xpZGVyKCl7XG5cbiAgICBjb25zdCBzbGlkZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXNlLWNhcmQtY2Fyb3VzZWwnKTsgLy/jgrnjg6njgqTjg4kgLyDjgqvjg6vjg7zjgrvjg6vjga7jgrPjg7Pjg4bjg4pcbiAgICBjb25zdCBzbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXNlLWNhcmQtY2Fyb3VzZWxfbGlzdCcpOyAvL+OCq+ODq+ODvOOCu+ODq+OBruODiOODqeODg+OCr1xuICAgIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXNlLWNhcmQtbW9iaWxlJyk7ICAgLy/jgrnjg6njgqTjg4kgLyDjgqvjg7zjg4lcbiAgICBcbiAgICAvLyDjgIzmrKHjgbjjgI3jg5zjgr/jg7PjgajjgIzliY3jgbjjgI3jg5zjgr/jg7NcbiAgICBjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhc2UtbmV4dCcpO1xuICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FzZS1wcmV2Jyk7XG4gICAgXG4gICAgbGV0IHNsaWRlcl9pbmRleCA9IDE7XG4gICAgXG4gICAgY29uc3QgZmlyc3RDbG9uZSA9IHNsaWRlc1swXS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY29uc3QgbGFzdENsb25lID0gc2xpZGVzW3NsaWRlcy1sZW5ndGggLTFdLmNsb25lTm9kZSh0cnVlKTtcbiAgICBcbiAgICBmaXJzdENsb25lLmlkID0gXCJmaXJzdC1jbG9uZVwiO1xuICAgIGxhc3RDbG9uZS5pZCA9IFwibGFzdC1jbG9uZVwiO1xuICAgIFxuICAgIHNsaWRlLmFwcGVuZChmaXJzdENsb25lKTtcbiAgICBzbGlkZS5wcmVwZW5kKGxhc3RDbG9uZSk7XG5cbiAgICBjb25zdCBzbGlkZXNXaWR0aCA9c2xpZGVzW2luZGV4XS5jbGllbnRXaWR0aCA7XG4gICAgY29uc29sZS5sb2coc2xpZGVzV2lkdGgpXG5cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY3RpdmF0ZVNtb290aFNjcm9sbCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCJdJyk7XG4gICAgICAgIFxuICAgICAgICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gNTAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZiA9PT0gJyMnIHx8IGhyZWYgPT09ICcnID8gJ2h0bWwnIDogaHJlZik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnNjcm9sbFk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0YXJnZXRQb3NpdGlvbiAtIHN0YXJ0UG9zaXRpb247XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0VGltZSA9IG51bGw7XG4gICAgICBcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBhbmltYXRpb24oY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkgc3RhcnRUaW1lID0gY3VycmVudFRpbWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVFbGFwc2VkID0gY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJ1biA9IGVhc2UodGltZUVsYXBzZWQsIHN0YXJ0UG9zaXRpb24sIGRpc3RhbmNlLCBzcGVlZCk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBydW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGltZUVsYXBzZWQgPCBzcGVlZCkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZWFzZSh0LCBiLCBjLCBkKSB7XG4gICAgICAgICAgICAgICAgICAgIHQgLz0gZCAvIDI7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0IDwgMSkgcmV0dXJuIGMgLyAyICogdCAqIHQgKyBiO1xuICAgICAgICAgICAgICAgICAgICB0LS07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtYyAvIDIgKiAodCAqICh0IC0gMikgLSAxKSArIGI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9uYXZiYXIuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaW5kZXgvaGVyby5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9pbmRleC9tYWluLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2luZGV4L2Fib3V0LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2luZGV4L2Jsb2cuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaW5kZXgvY2FzZS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9pbmRleC9yZWFzb25zLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2luZGV4L2Zsb3cuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaW5kZXgvY29udGFjdC5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9pbmRleC9pbmRleENvbnRhY3QuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL2Zvb3Rlci5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdHlwb2dyYXBoeS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdXRpbGl0eS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vYW5pbWF0aW9uLmNzc1wiO1xuXG5cbi8vLS0tLS0tLS0tLS1KQVZBU0NSSVBULS0tLS0tLS0tLS0gLy9cblxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuaW1wb3J0IGJhcmJhIGZyb20gJ0BiYXJiYS9jb3JlJztcbmltcG9ydCBhY3RpdmF0ZVNtb290aFNjcm9sbCBmcm9tIFwiLi9hc3NldHMvanNmdW5jdGlvbnMvc21vb3Roc2Nyb2xsXCI7XG5pbXBvcnQgYW5pbWF0ZUhhbWJ1cmdlck1lbnUgZnJvbSBcIi4vYXNzZXRzL2pzZnVuY3Rpb25zL21vYmlsZU5hdlwiO1xuaW1wb3J0IHRvZ2dsZU5hdiBmcm9tIFwiLi9hc3NldHMvanNmdW5jdGlvbnMvbW9iaWxlTmF2T3BlblwiO1xuaW1wb3J0IGFjdGl2YXRlU2xpZGVyIGZyb20gXCIuL2Fzc2V0cy9qc2Z1bmN0aW9ucy9zbGlkZXJcIjtcblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgQ0FTRSBTRUNUSU9OIFBBUkFMTEFYIEFOSU1BVElPTlxuICDjgrHjg7zjgrnjgrvjgq/jgrfjg6fjg7Pjga7jg4fjgrPjg6zjg7zjgrfjg6fjg7Pjgavlr77jgZnjgovjg5Hjg6njg6njg4Pjgq/jgrnjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5sZXQgaW1hZ2VzID0gZ3NhcC51dGlscy50b0FycmF5KFwiLnBhcmFsbGF4XCIpO1xuXG5pbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbiAgZ3NhcC50byhpbWFnZSwge1xuICAgIHlQZXJjZW50OiAtMTAwICogaW1hZ2UuZGF0YXNldC5zcGVlZCxcbiAgICBlYXNlOiBcIm5vbmVcIixcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICBzY3J1YjogaW1hZ2UuZGF0YXNldC5zcGVlZCxcbiAgICB9LFxuICB9KTtcbn0pO1xuXG4vLyBmdW5jdGlvbiBjb250ZW50QW5pbWF0aW9uKCl7XG4vLyAgIGxldCBpbWFnZXMgPSBnc2FwLnV0aWxzLnRvQXJyYXkoXCIuY2FzZS1kZWNvclwiKTtcblxuLy8gICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbi8vICAgICBnc2FwLnRvKGltYWdlLCB7XG4vLyAgICAgICB5UGVyY2VudDogLTEwMCAqIGltYWdlLmRhdGFzZXQuc3BlZWQsXG4vLyAgICAgICBlYXNlOiBcIm5vbmVcIixcbi8vICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbi8vICAgICAgICAgc2NydWI6IGltYWdlLmRhdGFzZXQuc3BlZWQsXG4vLyAgICAgICB9LFxuLy8gICAgIH0pO1xuLy8gICB9KTtcbi8vIH1cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIFNMSURFUlxuIOOCueODqeOCpOODgOODvFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmNvbnN0IHNsaWRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmFja1wiKTtcbmNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyXCIpO1xubGV0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZy1jYXJkXCIpO1xuY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dF9idG5cIik7XG5jb25zdCBwcmV2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmV2aW91c19idG5cIik7XG5cbi8vIGNvbnN0IGZpcnN0Q2xvbmUgPSBzbGlkZXNbMF0uY2xvbmVOb2RlKHRydWUpOyAvL25vdCB3b3JraW5nIHJuXG4vLyBjb25zdCBzZWNvbmRDbG9uZSA9IHNsaWRlc1sxXS5jbG9uZU5vZGUodHJ1ZSk7IC8vbm90IHdvcmtpbmcgcm5cblxuLy8gc2xpZGVyLmFwcGVuZChmaXJzdENsb25lKTsgLy9ub3Qgd29ya2luZyByblxuLy8gc2xpZGVzLmZvckVhY2goc2xpZGUgPT57XG4vLyAgIHNsaWRlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC00MDBweClgO1xuLy8gfSlcbmxldCBpbmRleCA9IDA7XG4vLyBjb25zdCBzbGlkZVdpZHRoID0gc2xpZGVzW2luZGV4XS5jbGllbnRXaWR0aDtcblxubmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpbmRleCsrOyAvL2luY3JlYXNlcyB0aGUgaW5kZXggYnkgMVxuICBpZiAoaW5kZXggPT09IDUpIHtcbiAgICBpbmRleCA9IDA7IC8vaWYgaXRzIGluIHRoZSA1dGggc2xpZGUgaXQgd2lsbCByZXNldCB0byB6ZXJvIHNvIHRoYXQgdGhlIGZpcnN0IHNsaWRlIGlzIHNob3duXG4gIH1cbiAgdXBkYXRlU2xpZGVQb3NpdGlvbigpO1xufSk7XG5cbnByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgaW5kZXggPSA0OyAvL2lmIGl0cyBjdXJyZW50bHkgaW4gdGhlIGZpcnN0IHNsaWRlIGl0IHdpbGwganVtcCB0byB0aGUgbGFzdFxuICAgIHVwZGF0ZVNsaWRlUG9zaXRpb24oKTtcbiAgfSBlbHNlIHtcbiAgICBpbmRleC0tO1xuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIGluZGV4ID0gc2xpZGVzLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIHVwZGF0ZVNsaWRlUG9zaXRpb24oKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHVwZGF0ZVNsaWRlUG9zaXRpb24oKSB7XG4gIHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZy1jYXJkXCIpO1xuICBjb25zdCBzbGlkZVdpZHRoID0gc2xpZGVzW2luZGV4XS5jbGllbnRXaWR0aDtcbiAgY29uc3Qgb2Zmc2V0ID0gNDQwICogaW5kZXg7IC8vb2ZmIHNldCBpcyBjYWxjdWxhdGVkIHdpdGggdGhlIGNhcmQgc2l6ZSBhbmQgdGhlIGdhcCAoNDAwcHggKyA0MClcbiAgY29uc3QgZ2FwID0gIDQwICogaW5kZXg7IC8vYWRqdXN0IHRoZSBnYXAgYXMgdGhlIGluZGV4XG4gIGNvbnN0IHNsaWRldyA9IHNsaWRlV2lkdGggKiBpbmRleDsgLy9hZGp1c3QgdGhlIG9mZmVzZXQgYmFzZWQgb24gdGhlIHNsaWRld2lkdGhcbiAgY29uc3Qgb2Zmc2V0MiA9IHNsaWRldyArIGdhcDtcbiAgc2V0SW5kaWNhdG9yKCk7XG4gIHNsaWRlcy5mb3JFYWNoKChzbGlkZSwgaSkgPT4ge1xuICAgIHNsaWRlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7b2Zmc2V0Mn1weClgO1xuICB9KTtcbn1cblxuLy8gZnVuY3Rpb24gc2xpZGVyKCl7XG5cbi8vIGNvbnN0IHNsaWRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmFja1wiKTtcbi8vIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyXCIpO1xuLy8gY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9nLWNhcmRcIik7XG4vLyBjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0X2J0blwiKTtcbi8vIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZpb3VzX2J0blwiKTtcblxuLy8gY29uc3QgZmlyc3RDbG9uZSA9IHNsaWRlc1swXS5jbG9uZU5vZGUodHJ1ZSk7IC8vbm90IHdvcmtpbmcgcm5cbi8vIGNvbnN0IHNlY29uZENsb25lID0gc2xpZGVzWzFdLmNsb25lTm9kZSh0cnVlKTsgLy9ub3Qgd29ya2luZyByblxuXG4vLyBzbGlkZXIuYXBwZW5kKGZpcnN0Q2xvbmUpOyAvL25vdCB3b3JraW5nIHJuXG5cbi8vIGxldCBpbmRleCA9IDA7XG4vLyBjb25zdCBzbGlkZVdpZHRoID0gc2xpZGVzW2luZGV4XS5jbGllbnRXaWR0aDtcblxuLy8gbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICBpbmRleCsrOyAvL2luY3JlYXNlcyB0aGUgaW5kZXggYnkgMVxuLy8gICBpZiAoaW5kZXggPT09IDUpIHtcbi8vICAgICBpbmRleCA9IDA7IC8vaWYgaXRzIGluIHRoZSA1dGggc2xpZGUgaXQgd2lsbCByZXNldCB0byB6ZXJvIHNvIHRoYXQgdGhlIGZpcnN0IHNsaWRlIGlzIHNob3duXG4vLyAgIH1cbi8vICAgdXBkYXRlU2xpZGVQb3NpdGlvbigpO1xuLy8gfSk7XG5cbi8vIHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgaWYgKGluZGV4ID09PSAwKSB7XG4vLyAgICAgaW5kZXggPSA0OyAvL2lmIGl0cyBjdXJyZW50bHkgaW4gdGhlIGZpcnN0IHNsaWRlIGl0IHdpbGwganVtcCB0byB0aGUgbGFzdFxuLy8gICAgIHVwZGF0ZVNsaWRlUG9zaXRpb24oKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICBpbmRleC0tO1xuLy8gICAgIGlmIChpbmRleCA8IDApIHtcbi8vICAgICAgIGluZGV4ID0gc2xpZGVzLmxlbmd0aCAtIDE7XG4vLyAgICAgfVxuLy8gICAgIHVwZGF0ZVNsaWRlUG9zaXRpb24oKTtcbi8vICAgfVxuLy8gfSk7XG5cbi8vIGZ1bmN0aW9uIHVwZGF0ZVNsaWRlUG9zaXRpb24oKSB7XG4vLyAgIGNvbnN0IG9mZnNldCA9IDQ0MCAqIGluZGV4OyAvL29mZiBzZXQgaXMgY2FsY3VsYXRlZCB3aXRoIHRoZSBjYXJkIHNpemUgYW5kIHRoZSBnYXAgKDQwMHB4ICsgNDApXG4vLyAgIHNldEluZGljYXRvcigpO1xuLy8gICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUsIGkpID0+IHtcbi8vICAgICBzbGlkZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke29mZnNldH1weClgO1xuLy8gICB9KTtcbi8vIH1cbi8vIGNvbnN0IGluZGljYXRvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmluZGljYXRvclwiKTtcblxuLy8gY29uc3Qgc2V0SW5kaWNhdG9yID0gKCkgPT4ge1xuLy8gICBpbmRpY2F0b3JzLmZvckVhY2goKGluZGljYXRvcikgPT4ge1xuLy8gICAgIGluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpOyAvL3JlbW92ZSB0aGUgYWN0aXZlIGNsYXNzXG4vLyAgICAgY29uc3QgaW5kaWNhdG9yTnVtYmVyID0gK2luZGljYXRvci5kYXRhc2V0LmluZGljYXRvcjtcbi8vICAgICBpZiAoaW5kaWNhdG9yTnVtYmVyID09PSBpbmRleCkge1xuLy8gICAgICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7IC8vYWRkIGFjdGl2ZSBjbGFzcyB0byB0aGUgY2xpY2tlZCBpbmRpY2F0b3Jcbi8vICAgICB9XG4vLyAgIH0pO1xuLy8gfTtcblxuLy8gaW5kaWNhdG9ycy5mb3JFYWNoKChpbmRpY2F0b3IpID0+IHtcbi8vICAgaW5kaWNhdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuLy8gICAgIGNvbnN0IGNsaWNrZWRJbmRpY2F0b3IgPSBlLnRhcmdldDtcbi8vICAgICBpbmRleCA9IHBhcnNlSW50KGNsaWNrZWRJbmRpY2F0b3IuZGF0YXNldC5pbmRpY2F0b3IpOyAvL21ha2UgdGhlIGluZGV4IHRoZSBzYW1lIGFzIHRoZSBjb3JlZXNwb25kaW5nIGluZGljYXRvclxuLy8gICAgIHVwZGF0ZVNsaWRlUG9zaXRpb24oKTtcbi8vICAgfSk7XG4vLyB9KTtcbi8vIH1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFNMSURFUiBJTkRJQ0FUT1JcbiAg44K544Op44Kk44OA44O844Gu44Kk44Oz44K444Kx44O844K/44O8XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuY29uc3QgaW5kaWNhdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5kaWNhdG9yXCIpO1xuXG5jb25zdCBzZXRJbmRpY2F0b3IgPSAoKSA9PiB7XG4gIGluZGljYXRvcnMuZm9yRWFjaCgoaW5kaWNhdG9yKSA9PiB7XG4gICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7IC8vcmVtb3ZlIHRoZSBhY3RpdmUgY2xhc3NcbiAgICBjb25zdCBpbmRpY2F0b3JOdW1iZXIgPSAraW5kaWNhdG9yLmRhdGFzZXQuaW5kaWNhdG9yO1xuICAgIGlmIChpbmRpY2F0b3JOdW1iZXIgPT09IGluZGV4KSB7XG4gICAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTsgLy9hZGQgYWN0aXZlIGNsYXNzIHRvIHRoZSBjbGlja2VkIGluZGljYXRvclxuICAgIH1cbiAgfSk7XG59O1xuXG5pbmRpY2F0b3JzLmZvckVhY2goKGluZGljYXRvcikgPT4ge1xuICBpbmRpY2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgY2xpY2tlZEluZGljYXRvciA9IGUudGFyZ2V0O1xuICAgIGluZGV4ID0gcGFyc2VJbnQoY2xpY2tlZEluZGljYXRvci5kYXRhc2V0LmluZGljYXRvcik7IC8vbWFrZSB0aGUgaW5kZXggdGhlIHNhbWUgYXMgdGhlIGNvcmVlc3BvbmRpbmcgaW5kaWNhdG9yXG4gICAgdXBkYXRlU2xpZGVQb3NpdGlvbigpO1xuICB9KTtcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgU01PT1RIIFNDUk9MTCBUTyBUT1BcbiAg44OI44OD44OX44G444K544Og44O844K544K544Kv44Ot44O844OrXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmFjdGl2YXRlU21vb3RoU2Nyb2xsKCk7XG5cblxuXG4vL3RyYW5zaXRvcG4gXG5cblxuLy8gZnVuY3Rpb24gZGVsYXkobikge1xuLy8gICBuID0gbiB8fCAyMDAwXG4gIFxuLy8gICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4vLyAgICAgc2V0VGltZW91dChyZXNvbHZlLCBuKVxuLy8gICB9KVxuLy8gfVxuXG5cbi8vIGNvbnN0IGxvYWRpbmdTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhbnNpdGlvbicpO1xuLy8gZnVuY3Rpb24gcGFnZVRyYW5zaXRpb25Jbigpe1xuLy8gICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XG4vLyAgICAgdGwudG8obG9hZGluZ1NjcmVlbiwgeyBkdXJhdGlvbjogMC43LCB4OiAwLCB0cmFuc2Zvcm1PcmlnaW46ICdib3R0b20gbGVmdCd9KVxuLy8gICAgLnRvKGxvYWRpbmdTY3JlZW4sIHsgZHVyYXRpb246IDAuNywgeDpcIi0xMDAlXCIsIHRyYW5zZm9ybU9yaWdpbjogJ2JvdHRvbSBsZWZ0JywgZGVsYXk6IDAuM30pXG4vLyAgICAuc2V0KGxvYWRpbmdTY3JlZW4sIHsgIHg6ICBcIjEwMCVcIn0pXG4gICAgICBcbi8vIH1cblxuLy8gYmFyYmEuaW5pdCh7XG4vLyAgIHN5bmM6dHJ1ZSxcbi8vICAgdHJhbnNpdGlvbnM6W1xuLy8gICAgICAge1xuLy8gICAgICAgICAgIGFzeW5jIGxlYXZlKGRhdGEpe1xuLy8gICAgICAgICAgICAgICBjb25zdCBkb25lID0gdGhpcy5hc3luYygpO1xuLy8gICAgICAgICAgICAgICBwYWdlVHJhbnNpdGlvbkluKCk7XG4gICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICBhd2FpdCBkZWxheSgxMDAwKTtcbi8vICAgICAgICAgICAgICAgZG9uZSgpO1xuLy8gICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgYXN5bmMgZW50ZXIoZGF0YSl7XG4vLyAgICAgICAgICAgICBjb250ZW50QW5pbWF0aW9uKClcbi8vICAgICAgICAgICAgIHNsaWRlcigpO1xuLy8gICAgICAgICAgIH0sXG5cbi8vICAgICAgICAgICBhc3luYyBvbmNlKGRhdGEpIHtcbi8vICAgICAgICAgICAgIGNvbnRlbnRBbmltYXRpb24oKTtcbi8vICAgICAgICAgICAgIHNsaWRlcigpO1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgfVxuLy8gICBdXG4vLyB9KVxuXG5cbi8vIGFuaW1hdGlvbiB0ZXN0XG5cbi8vIGdzYXAuZnJvbSgnLmt2X3N1YnRpdGxlJyx7b3BhY2l0eTowLHg6MTAwLGR1cmF0aW9uOjMsfSlcblxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBIQU1CVVJHRVIgTUVOVSBBTklNQVRJT05TXG4gIOODj+ODs+ODkOODvOOCrOODvOODoeODi+ODpeODvOOBruOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmFuaW1hdGVIYW1idXJnZXJNZW51KCk7XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgVE9HR0xFIE1PQklMRSBOQVZcbiAg44Oi44OQ44Kk44Or44OK44OT44Ky44O844K344On44Oz44Gu5YiH44KK5pu/44GI5qmf6IO9XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxudG9nZ2xlTmF2KCk7XG5cbi8vY2FzZSBzbGlkZXJcblxuY29uc3QgY2FzZVNsaWRlQ29udGFpbmVyPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FzZS1jYXJkLWNhcm91c2VsJyk7IC8v44K544Op44Kk44OJIC8g44Kr44Or44O844K744Or44Gu44Kz44Oz44OG44OKXG5jb25zdCBjYXNlU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FzZS1jYXJkLWNhcm91c2VsX2xpc3QnKTsgLy/jgqvjg6vjg7zjgrvjg6vjga7jg4jjg6njg4Pjgq9cbmxldCBjYXNlU2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhc2UtY2FyZC1tb2JpbGUnKTsgICAvL+OCueODqeOCpOODiSAvIOOCq+ODvOODiVxuXG4vLyDjgIzmrKHjgbjjgI3jg5zjgr/jg7PjgajjgIzliY3jgbjjgI3jg5zjgr/jg7NcbmNvbnN0IGNhc2VOZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhc2UtbmV4dCcpO1xuY29uc3QgY2FzZVByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FzZS1wcmV2Jyk7XG5cbmxldCBzbGlkZXJJbmRleCA9IDA7XG5cbi8vIGNvbnNvbGUubG9nKHNsaWRlV2lkdGgpXG5cbmNvbnN0IG5leHRTbGlkZSA9ICgpID0+IHtcbiAgY2FzZVNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXNlLWNhcmQtbW9iaWxlJyk7XG4gIGlmIChzbGlkZXJJbmRleCA+PSBjYXNlU2xpZGVzLmxlbmd0aCAtIDEpIHtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgc2xpZGVySW5kZXgrKztcbiAgICBjYXNlU2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiB7XG4gICAgICBjb25zdCBzbGlkZXNXaWR0aCA9IHNsaWRlLmNsaWVudFdpZHRoOyAvLyBVc2Ugc2xpZGUuY2xpZW50V2lkdGggZGlyZWN0bHlcbiAgICAgIHNsaWRlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7LXNsaWRlc1dpZHRoICogc2xpZGVySW5kZXh9cHgpYDtcbiAgICAgIHNsaWRlLnN0eWxlLnRyYW5zaXRpb24gPSAnMC43cyc7XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcbiAgY2FzZVNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXNlLWNhcmQtbW9iaWxlJyk7XG4gIGlmIChzbGlkZXJJbmRleCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBzbGlkZXJJbmRleC0tO1xuICAgIGNhc2VTbGlkZXMuZm9yRWFjaCgoc2xpZGUpID0+IHtcbiAgICAgIGNvbnN0IHNsaWRlc1dpZHRoID0gc2xpZGUuY2xpZW50V2lkdGg7IC8vIFVzZSBzbGlkZS5jbGllbnRXaWR0aCBkaXJlY3RseVxuICAgICAgc2xpZGUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHstc2xpZGVzV2lkdGggKiBzbGlkZXJJbmRleH1weClgO1xuICAgICAgc2xpZGUuc3R5bGUudHJhbnNpdGlvbiA9ICcwLjdzJztcbiAgICB9KTtcbiAgfVxufTtcblxuXG4vLyBzbGlkZS5zdHlsZS50cmFuc2l0aW9uID0nMC43cyc7XG5jYXNlTmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG5uZXh0U2xpZGUoKVxufSlcblxuY29uc29sZS5sb2coc2xpZGVySW5kZXgpO1xuXG5jYXNlUHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gcHJldlNsaWRlKCk7XG59KSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMCxcblx0XCJzcmNfYXNzZXRzX2Nzc19jb21tb25fYW5pbWF0aW9uX2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fZm9vdGVyX2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fbmEtYWQyM2Q3XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2Fsd2F5c18yMzExMjRfc3VtYW1pblwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthbHdheXNfMjMxMTI0X3N1bWFtaW5cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2JhcmJhX2NvcmVfZGlzdF9iYXJiYV91bWRfanMtbm9kZV9tb2R1bGVzX2dzYXBfU2Nyb2xsVHJpZ2dlcl9qcy1ub2RlX21vZC0xMjQwODZcIixcInNyY19hc3NldHNfY3NzX2NvbW1vbl9hbmltYXRpb25fY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9mb290ZXJfY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9uYS1hZDIzZDdcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==