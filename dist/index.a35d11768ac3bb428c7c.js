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

/***/ "./src/assets/css/common/translation.css":
/*!***********************************************!*\
  !*** ./src/assets/css/common/translation.css ***!
  \***********************************************/
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

/***/ "./src/assets/jsfunctions/changeLogo.js":
/*!**********************************************!*\
  !*** ./src/assets/jsfunctions/changeLogo.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ changeLogo)
/* harmony export */ });
/* harmony import */ var _images_navbar_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/navbar/logo.svg */ "./src/assets/images/navbar/logo.svg");
/* harmony import */ var _images_navbar_logo_cn_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/navbar/logo-cn.svg */ "./src/assets/images/navbar/logo-cn.svg");



const NAVLOGO = document.querySelector('[data-logo-change]');

function changeLogo(language){
    if(language === "jp"){
        NAVLOGO.src =_images_navbar_logo_svg__WEBPACK_IMPORTED_MODULE_0__;
    }
    else if (language === "cn"){
        NAVLOGO.src =_images_navbar_logo_cn_svg__WEBPACK_IMPORTED_MODULE_1__;
    }
    
}

/***/ }),

/***/ "./src/assets/jsfunctions/changeTextLang.js":
/*!**************************************************!*\
  !*** ./src/assets/jsfunctions/changeTextLang.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _json_language_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../json/language.json */ "./src/assets/json/language.json");
/* harmony import */ var _hideElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hideElements */ "./src/assets/jsfunctions/hideElements.js");



// function HideElements(){
//     const toChange = document.querySelectorAll('[data-main-language]');
//     toChange.forEach(element =>{
//         element.style.cssText = 'display:none'; 
//     })
// }

// export default function changeText(lang){
//     hideElements(lang);
//     // console.log(lang);
//     // const elements = document.querySelectorAll(`[data-main-lang=${lang}]`)
//     // elements.forEach(element => {
//     //     element.style.cssText = 'display:block'; 
//     // })
// }

/***/ }),

/***/ "./src/assets/jsfunctions/getStorage.js":
/*!**********************************************!*\
  !*** ./src/assets/jsfunctions/getStorage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetStorageItems)
/* harmony export */ });
//get items from a storage and parse it
// ストレージからアイテムを取得し、解析します

function GetStorageItems(key){
    return JSON.parse(localStorage.getItem(key))
 }


/***/ }),

/***/ "./src/assets/jsfunctions/hideElements.js":
/*!************************************************!*\
  !*** ./src/assets/jsfunctions/hideElements.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hideElements)
/* harmony export */ });
// export default function hideElements(current){
//     if (!current){
//         const toChange = document.querySelectorAll('[data-main-language]');
//         toChange.forEach(element =>{
//             element.style.cssText = 'display:none'; 
//         })
//     }
//     else{
//         const toChange = document.querySelectorAll(`[data-main-language = ${current}]`);
//         const notCurrent = document.querySelectorAll('[data-main-language]');

//         notCurrent.forEach(element => {
//             if(element.dataset.mainLanguage === `${current}`){
//                 element.style.cssText = 'display:block'; 
//             }
//             else{
//                 element.style.cssText ='display:none';
//             }
//         })

        
//     }

// }

// export default function hideElements(current){
//     const toChange = document.querySelectorAll('[data-main-language]');
//     console.log(toChange)
//     toChange.classList.remove('hidden');
//     if (current === "jp"){
//         toChange.forEach(element => {
//             if(element.dataset.currentLang === "cn"){
//                 element.classList.add('hidden');
//             }
//         })
//     }
//     else if(current === "cn"){
//         toChange.forEach(element => {
//             if(element.dataset.currentLang === "jp"){
//                 element.classList.add('hidden');
//             }
//         })
        
//     }

// }

function hideElements(current) {
    const toChange = document.querySelectorAll('[data-main-lang]');
    
    toChange.forEach(element => {
        element.classList.remove('hidden'); // Remove 'hidden' class from all elements
        
        if (current === "jp" && element.dataset.mainLang === "cn") {
            element.classList.add('hidden'); // Add 'hidden' class to elements with lang "cn" if current is "jp"
        } else if (current === "cn" && element.dataset.mainLang === "jp") {
            element.classList.add('hidden'); // Add 'hidden' class to elements with lang "jp" if current is "cn"
        }
    });
}


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

/***/ "./src/assets/jsfunctions/setActiveClassOnload.js":
/*!********************************************************!*\
  !*** ./src/assets/jsfunctions/setActiveClassOnload.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setActiveClassOnload)
/* harmony export */ });
const langBtns = document.querySelectorAll(".lang-btn-text");

function removeActiveClass(){
    langBtns.forEach(btn =>{
        btn.classList.remove('active-lang');
    })
}


function setActiveClassOnload(language){
    const btns = document.querySelectorAll('.lang-btn-text');
    removeActiveClass()
    btns.forEach(btn => {
        if(btn.dataset.btnLang === "jp" && language === "jp"){
            btn.classList.add('active-lang');
        }
        else if(btn.dataset.btnLang === "cn" && language === "cn"){
                btn.classList.add('active-lang');
        }
    })
   
}

/***/ }),

/***/ "./src/assets/jsfunctions/setHtmlAttribute.js":
/*!****************************************************!*\
  !*** ./src/assets/jsfunctions/setHtmlAttribute.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setHtmlAttribute)
/* harmony export */ });
function setHtmlAttribute(language){
    if(language === "jp"){
        document.documentElement.lang = 'jp';
    }
    else if (language === "cn"){
        document.documentElement.lang = 'zh';
    }
}

/***/ }),

/***/ "./src/assets/jsfunctions/setLangBtnClass.js":
/*!***************************************************!*\
  !*** ./src/assets/jsfunctions/setLangBtnClass.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetActiveLangBtnClass)
/* harmony export */ });

const langBtns = document.querySelectorAll(".lang-btn-text");


//removes the active class from both btns
// 両方のボタンから active クラスを削除します


function removeActiveClass(){
    langBtns.forEach(btn =>{
        btn.classList.remove('active-lang');
    })
}

//adds the active class to the selected btn
// 選択したボタンに active クラスを追加します

function SetActiveLangBtnClass(btn){
    removeActiveClass();
    btn.classList.add('active-lang');
}

/***/ }),

/***/ "./src/assets/jsfunctions/setStorage.js":
/*!**********************************************!*\
  !*** ./src/assets/jsfunctions/setStorage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setStorageItem)
/* harmony export */ });
//save objects in the storage as strings
// オブジェクトを文字列としてストレージに保存します


function setStorageItem(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Failed to store item in localStorage:", error);
    }
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
/* harmony import */ var _assets_css_common_translation_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/css/common/translation.css */ "./src/assets/css/common/translation.css");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @barba/core */ "./node_modules/@barba/core/dist/barba.umd.js");
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_barba_core__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_jsfunctions_smoothscroll__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/jsfunctions/smoothscroll */ "./src/assets/jsfunctions/smoothscroll.js");
/* harmony import */ var _assets_jsfunctions_mobileNav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/jsfunctions/mobileNav */ "./src/assets/jsfunctions/mobileNav.js");
/* harmony import */ var _assets_jsfunctions_mobileNavOpen__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/jsfunctions/mobileNavOpen */ "./src/assets/jsfunctions/mobileNavOpen.js");
/* harmony import */ var _assets_jsfunctions_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/jsfunctions/slider */ "./src/assets/jsfunctions/slider.js");
/* harmony import */ var _assets_jsfunctions_setStorage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/jsfunctions/setStorage */ "./src/assets/jsfunctions/setStorage.js");
/* harmony import */ var _assets_jsfunctions_getStorage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/jsfunctions/getStorage */ "./src/assets/jsfunctions/getStorage.js");
/* harmony import */ var _assets_jsfunctions_setLangBtnClass__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/jsfunctions/setLangBtnClass */ "./src/assets/jsfunctions/setLangBtnClass.js");
/* harmony import */ var _assets_jsfunctions_changeTextLang__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/jsfunctions/changeTextLang */ "./src/assets/jsfunctions/changeTextLang.js");
/* harmony import */ var _assets_jsfunctions_hideElements__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assets/jsfunctions/hideElements */ "./src/assets/jsfunctions/hideElements.js");
/* harmony import */ var _assets_jsfunctions_setHtmlAttribute__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./assets/jsfunctions/setHtmlAttribute */ "./src/assets/jsfunctions/setHtmlAttribute.js");
/* harmony import */ var _assets_jsfunctions_setActiveClassOnload__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./assets/jsfunctions/setActiveClassOnload */ "./src/assets/jsfunctions/setActiveClassOnload.js");
/* harmony import */ var _assets_jsfunctions_changeLogo__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./assets/jsfunctions/changeLogo */ "./src/assets/jsfunctions/changeLogo.js");

















// import langData from './assets/json/language.json';
//-----------JAVASCRIPT----------- //


















/*-------------------------------------------------------
  CASE SECTION PARALLAX ANIMATION
  ケースセクションのデコレーションに対するパララックスアニメーション
---------------------------------------------------------*/
gsap__WEBPACK_IMPORTED_MODULE_29__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_30__.ScrollTrigger);

let images = gsap__WEBPACK_IMPORTED_MODULE_29__.gsap.utils.toArray(".parallax");

images.forEach((image) => {
  gsap__WEBPACK_IMPORTED_MODULE_29__.gsap.to(image, {
    yPercent: -100 * image.dataset.speed,
    ease: "none",
    scrollTrigger: {
      scrub: image.dataset.speed,
    },
  });
});


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
(0,_assets_jsfunctions_smoothscroll__WEBPACK_IMPORTED_MODULE_17__["default"])();

/*----------------------------
  HAMBURGER MENU ANIMATIONS
  ハンバーガーメニューのアニメーション
----------------------------*/

(0,_assets_jsfunctions_mobileNav__WEBPACK_IMPORTED_MODULE_18__["default"])();
/*----------------------------
  TOGGLE MOBILE NAV
  モバイルナビゲーションの切り替え機能
----------------------------*/

(0,_assets_jsfunctions_mobileNavOpen__WEBPACK_IMPORTED_MODULE_19__["default"])();


/*-----------------------------------
  MULTI LANGUAGE SITE RELATED SCRIPTS
 マルチ言語サイトに関連するスクリプト
--------------------------------------*/

const LOCAL_STORAGE_LANGUAGE_KEY = "always.lang" ; //the key to the local storage language
let currentLang = (0,_assets_jsfunctions_getStorage__WEBPACK_IMPORTED_MODULE_22__["default"])(LOCAL_STORAGE_LANGUAGE_KEY) || "jp"; //checks whether theres a language preffred by  a user who has visited before. if not it will default to "jp"
const langBtns = document.querySelectorAll(".lang-btn-text");


(0,_assets_jsfunctions_setStorage__WEBPACK_IMPORTED_MODULE_21__["default"])(LOCAL_STORAGE_LANGUAGE_KEY,currentLang);
(0,_assets_jsfunctions_setHtmlAttribute__WEBPACK_IMPORTED_MODULE_26__["default"])(currentLang);
(0,_assets_jsfunctions_setActiveClassOnload__WEBPACK_IMPORTED_MODULE_27__["default"])(currentLang);


// console.log(temp.dataset.btnLang);
(0,_assets_jsfunctions_hideElements__WEBPACK_IMPORTED_MODULE_25__["default"])(currentLang);
(0,_assets_jsfunctions_changeLogo__WEBPACK_IMPORTED_MODULE_28__["default"])(currentLang);
langBtns.forEach(btn =>{
  btn.addEventListener("click",(e)=>{
    (0,_assets_jsfunctions_setLangBtnClass__WEBPACK_IMPORTED_MODULE_23__["default"])(btn) 
    const currentLang = btn.dataset.btnLang; //set the current langaue to the language of the btn
    (0,_assets_jsfunctions_setStorage__WEBPACK_IMPORTED_MODULE_21__["default"])(LOCAL_STORAGE_LANGUAGE_KEY,currentLang); //save the newly selected langaue in the local storage
    (0,_assets_jsfunctions_hideElements__WEBPACK_IMPORTED_MODULE_25__["default"])(currentLang);
    (0,_assets_jsfunctions_changeLogo__WEBPACK_IMPORTED_MODULE_28__["default"])(currentLang);
    (0,_assets_jsfunctions_setHtmlAttribute__WEBPACK_IMPORTED_MODULE_26__["default"])(currentLang);
  })
})



document.addEventListener("DOMContentLoaded",()=>{

})

/***/ }),

/***/ "./src/assets/images/navbar/logo-cn.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/navbar/logo-cn.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/logo-cn.svg";

/***/ }),

/***/ "./src/assets/images/navbar/logo.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/navbar/logo.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/logo.svg";

/***/ }),

/***/ "./src/assets/json/language.json":
/*!***************************************!*\
  !*** ./src/assets/json/language.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"index":{"jp":{"kv-title":["オールウェイズ 日中通訳サービス"],"kv_subtitle":["経験と知識で","臨機応変な対応","寄り添い型","の日中通訳"],"about-main_title":["オールウェイズ","日中通訳サービスについて"],"about-main_description":["私たちは、日本における中国人の皆様との円滑な","コミュニケーションをサポートし、","お客様のニーズにいつも応えるパートナーとして在り続けます。","私たちは常にそこにいて、","お客様が成功するお手伝いをすることを誇りに思います。"],"about-btn":"詳しくはこちら","case_subtitle":["様々なお客様に","ご利用いただいております"],"case-card-1":{"case_number":"1","case-card_title":"中国企業の国際イベント","case-card_description":["日本国内のイベントにおいて、","中国企業とイベント制作会社の間で通訳を提供。プレゼンテーション、交渉、および詳細なイベントの進行においてコミュニケーションを円滑化。"]},"case-card-2":{"case_number":"2","case-card_title":["日本のSEチームの","トレーニングセミナー"],"case-card_description":["日本のSEが中国のSEに技術トレーニングを行うオンラインセミナーにおいて通訳を提供。技術用語とプロセスの説明を助け、双方のチーム間のスムーズな情報共有を支援。"]},"case-card-3":{"case_number":"3","case-card_title":["海外の外資系企業の","健康診断プログラム"],"case-card_description":["外資系企業の健康診断プログラムを日本で実施する際、通訳を提供。医療専門用語や診断プロセスの説明を通じて、患者と医師との効果的なコミュニケーションを確保。"]},"case-card-4":{"case_number":"4","case-card_title":["国際的な結婚式"],"case-card_description":["結婚式の司会者や親とのコミュニケーションを通訳。誓いの交換、スピーチ、お祝いの瞬間などで文化的な違いを理解し、感動的な結婚式を演出。"]},"case-card-5":{"case_number":"5","case-card_title":["不動産取引"],"case-card_description":["中国からの不動産購入者と現地の不動産エージェントとの間で通訳を提供。物件の説明、価格交渉、契約の詳細を明確に伝え、スムーズな取引をサポート。"]},"case-card-6":{"case_number":"6","case-card_title":["ゴルフツアー"],"case-card_description":["ゴルフツアー中の通訳を提供。プレイ中や食事の際、参加者間のコミュニケーションを円滑化し、楽しいゴルフ体験を確保。"]},"case-card-7":{"case_number":"7","case-card_title":["ボランティア団体"],"case-card_description":["ボランティアの通訳として、異なる言語を話すボランティアと地域住民とのコミュニケーションを支援。地域コミュニティの協力と理解を促進。"]},"case-card-8":{"case_number":"8","case-card_title":["国内ツアー"],"case-card_description":["具体的な事例"]},"case-banner_text":["その他のお悩みも、お気軽に","オールウェイズ日中通訳サービスにご相談ください！"]},"ch":{"kv-title":["关于我们的","中日文双语口译服务"],"kv_subtitle":["丰富的知识和经验","灵活机动的协调对应能力","为客户着想的日中口译服务"],"about-main_title":["关于我们的","中日文双语口译服务"],"about-main_description":["我们在日本拥有非常优秀的双语口译人才，为客户提供专业的口译服务和其他完善的配套服务。针对顾客的要求量身定制，为您的商务成功提供最好的后援和支持,"],"about-btn":"欲了解更多信息。","case_subtitle":["我们的口译服务领域广泛，","涉及到各行各业"],"case-card-1":{"case_number":"1","case-card_title":["中国企业在日本国内举行的各种商务活动"],"case-card_description":["为中国企业和策划活动的日本制作方提供口译服务。在推广、交涉等各种细节方面进行协调，为活动顺利展开提供口译交流服务。"]},"case-card-2":{"case_number":"2","case-card_title":["日本SE团队的培训活动"],"case-card_description":["提供日本SE团队对中国国内SE团队进行网上培训的口译服务。我们的口译人员掌握了专业的技术用语，为双方团队的丝滑交流提供支援"]},"case-card-3":{"case_number":"3","case-card_title":["海外的外资企业员工赴日体检"],"case-card_description":["为外资企业员工赴日体检提供口译服务。拥有医疗口译资格的专业人员，会给客户进行详细的诊断说明，确保客户和医生间的意向交流"]},"case-card-4":{"case_number":"4","case-card_title":["国际结婚"],"case-card_description":["对前来日本参加婚礼的中国家属进行全程口译，包括新人誓言交换，亲朋好友各种发言和祝福等等。加深双方对互相文化的理解，演绎出完美感人的婚礼。"]},"case-card-5":{"case_number":"5","case-card_title":["不动产交易"],"case-card_description":["介于赴日购买不动产的中国客人和日本的不动产中介公司之间进行口译服务。正确说明物件内容以及价格交涉和签约的各种详情，为顺利购置日本不动产提供后援。"]},"case-card-6":{"case_number":"6","case-card_title":["高尔夫旅行团"],"case-card_description":["定制属于您专用的日本高尔夫旅行，在旅行途中提供口译服务。包括预约各地名门球场，根据客人要求安排交通住宿等等。让您更好的享受到在日本打高尔夫的至上愉悦。"]},"case-card-7":{"case_number":"7","case-card_title":["志愿者组织"],"case-card_description":["为志愿者组织做口译，以协助志愿者和地域住民的沟通理解，更好地促进地域文化交流"]},"case-card-8":{"case_number":"8","case-card_title":["日本国内旅行"],"case-card_description":["定制少人数旅行以及提供旅行途中的口译服务，根据客人要求定身制作，最大限度满足客人的喜好要求"]},"case-banner_text":["如有其他需求，敬请与我们联络"]}},"about":{"jp":{},"ch":{}},"price":{"jp":{},"ch":{}},"notice":{"jp":{},"ch":{}},"recruit":{"jp":{},"ch":{}},"contact":{"jp":{},"ch":{}}}');

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 			"src_assets_css_common_animation_css-src_assets_css_common_footer_css-src_assets_css_common_na-eb5503": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_barba_core_dist_barba_umd_js-node_modules_gsap_ScrollTrigger_js-node_mod-124086","src_assets_css_common_animation_css-src_assets_css_common_footer_css-src_assets_css_common_na-eb5503"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYTM1ZDExNzY4YWMzYmI0MjhjN2MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZ0Q7QUFDRzs7QUFFbkQ7O0FBRWU7QUFDZjtBQUNBLHFCQUFxQixvREFBTztBQUM1QjtBQUNBO0FBQ0EscUJBQXFCLHVEQUFPO0FBQzVCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2I2QztBQUNIOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsS0FBSztBQUM3RTtBQUNBO0FBQ0EsV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsK0VBQStFLFFBQVE7QUFDdkY7O0FBRUE7QUFDQSxzREFBc0QsUUFBUTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNB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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vYW5pbWF0aW9uLmNzcz82ZjlkIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9mb290ZXIuY3NzPzBlM2MiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL25hdmJhci5jc3M/OGIzNiIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vcmVzZXQuY3NzP2I3ZmIiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3RyYW5zbGF0aW9uLmNzcz8xMzA2Iiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi90eXBvZ3JhcGh5LmNzcz80YjdkIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi91dGlsaXR5LmNzcz9jOGUyIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2luZGV4L2Fib3V0LmNzcz84NmM0Iiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2luZGV4L2Jsb2cuY3NzP2UxOTAiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvaW5kZXgvY2FzZS5jc3M/YzUzNiIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9pbmRleC9jb250YWN0LmNzcz9lNWRlIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2luZGV4L2Zsb3cuY3NzPzc2NTIiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvaW5kZXgvaGVyby5jc3M/ODBjOCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9pbmRleC9pbmRleENvbnRhY3QuY3NzPzJmY2UiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvaW5kZXgvbWFpbi5jc3M/Zjc5MCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9pbmRleC9yZWFzb25zLmNzcz8yNTg2Iiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvanNmdW5jdGlvbnMvY2hhbmdlTG9nby5qcyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2pzZnVuY3Rpb25zL2NoYW5nZVRleHRMYW5nLmpzIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvanNmdW5jdGlvbnMvZ2V0U3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2pzZnVuY3Rpb25zL2hpZGVFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2pzZnVuY3Rpb25zL21vYmlsZU5hdi5qcyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2pzZnVuY3Rpb25zL21vYmlsZU5hdk9wZW4uanMiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9qc2Z1bmN0aW9ucy9zZXRBY3RpdmVDbGFzc09ubG9hZC5qcyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2pzZnVuY3Rpb25zL3NldEh0bWxBdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9qc2Z1bmN0aW9ucy9zZXRMYW5nQnRuQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9qc2Z1bmN0aW9ucy9zZXRTdG9yYWdlLmpzIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvanNmdW5jdGlvbnMvc2xpZGVyLmpzIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvanNmdW5jdGlvbnMvc21vb3Roc2Nyb2xsLmpzIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IExPR09fSlAgZnJvbSBcIi4uL2ltYWdlcy9uYXZiYXIvbG9nby5zdmdcIjtcbmltcG9ydCBMT0dPX0NOIGZyb20gXCIuLi9pbWFnZXMvbmF2YmFyL2xvZ28tY24uc3ZnXCI7XG5cbmNvbnN0IE5BVkxPR08gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1sb2dvLWNoYW5nZV0nKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhbmdlTG9nbyhsYW5ndWFnZSl7XG4gICAgaWYobGFuZ3VhZ2UgPT09IFwianBcIil7XG4gICAgICAgIE5BVkxPR08uc3JjID1MT0dPX0pQO1xuICAgIH1cbiAgICBlbHNlIGlmIChsYW5ndWFnZSA9PT0gXCJjblwiKXtcbiAgICAgICAgTkFWTE9HTy5zcmMgPUxPR09fQ047XG4gICAgfVxuICAgIFxufSIsImltcG9ydCBsYW5nRGF0YSBmcm9tICcuLi9qc29uL2xhbmd1YWdlLmpzb24nO1xuaW1wb3J0IGhpZGVFbGVtZW50cyBmcm9tICcuL2hpZGVFbGVtZW50cyc7XG5cbi8vIGZ1bmN0aW9uIEhpZGVFbGVtZW50cygpe1xuLy8gICAgIGNvbnN0IHRvQ2hhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbWFpbi1sYW5ndWFnZV0nKTtcbi8vICAgICB0b0NoYW5nZS5mb3JFYWNoKGVsZW1lbnQgPT57XG4vLyAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9ICdkaXNwbGF5Om5vbmUnOyBcbi8vICAgICB9KVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFuZ2VUZXh0KGxhbmcpe1xuLy8gICAgIGhpZGVFbGVtZW50cyhsYW5nKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhsYW5nKTtcbi8vICAgICAvLyBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLW1haW4tbGFuZz0ke2xhbmd9XWApXG4vLyAgICAgLy8gZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbi8vICAgICAvLyAgICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6YmxvY2snOyBcbi8vICAgICAvLyB9KVxuLy8gfSIsIi8vZ2V0IGl0ZW1zIGZyb20gYSBzdG9yYWdlIGFuZCBwYXJzZSBpdFxuLy8g44K544OI44Os44O844K444GL44KJ44Ki44Kk44OG44Og44KS5Y+W5b6X44GX44CB6Kej5p6Q44GX44G+44GZXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdldFN0b3JhZ2VJdGVtcyhrZXkpe1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXG4gfVxuIiwiLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGlkZUVsZW1lbnRzKGN1cnJlbnQpe1xuLy8gICAgIGlmICghY3VycmVudCl7XG4vLyAgICAgICAgIGNvbnN0IHRvQ2hhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbWFpbi1sYW5ndWFnZV0nKTtcbi8vICAgICAgICAgdG9DaGFuZ2UuZm9yRWFjaChlbGVtZW50ID0+e1xuLy8gICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6bm9uZSc7IFxuLy8gICAgICAgICB9KVxuLy8gICAgIH1cbi8vICAgICBlbHNle1xuLy8gICAgICAgICBjb25zdCB0b0NoYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLW1haW4tbGFuZ3VhZ2UgPSAke2N1cnJlbnR9XWApO1xuLy8gICAgICAgICBjb25zdCBub3RDdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbWFpbi1sYW5ndWFnZV0nKTtcblxuLy8gICAgICAgICBub3RDdXJyZW50LmZvckVhY2goZWxlbWVudCA9PiB7XG4vLyAgICAgICAgICAgICBpZihlbGVtZW50LmRhdGFzZXQubWFpbkxhbmd1YWdlID09PSBgJHtjdXJyZW50fWApe1xuLy8gICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9ICdkaXNwbGF5OmJsb2NrJzsgXG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBlbHNle1xuLy8gICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9J2Rpc3BsYXk6bm9uZSc7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pXG5cbiAgICAgICAgXG4vLyAgICAgfVxuXG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhpZGVFbGVtZW50cyhjdXJyZW50KXtcbi8vICAgICBjb25zdCB0b0NoYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1haW4tbGFuZ3VhZ2VdJyk7XG4vLyAgICAgY29uc29sZS5sb2codG9DaGFuZ2UpXG4vLyAgICAgdG9DaGFuZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4vLyAgICAgaWYgKGN1cnJlbnQgPT09IFwianBcIil7XG4vLyAgICAgICAgIHRvQ2hhbmdlLmZvckVhY2goZWxlbWVudCA9PiB7XG4vLyAgICAgICAgICAgICBpZihlbGVtZW50LmRhdGFzZXQuY3VycmVudExhbmcgPT09IFwiY25cIil7XG4vLyAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSlcbi8vICAgICB9XG4vLyAgICAgZWxzZSBpZihjdXJyZW50ID09PSBcImNuXCIpe1xuLy8gICAgICAgICB0b0NoYW5nZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuLy8gICAgICAgICAgICAgaWYoZWxlbWVudC5kYXRhc2V0LmN1cnJlbnRMYW5nID09PSBcImpwXCIpe1xuLy8gICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pXG4gICAgICAgIFxuLy8gICAgIH1cblxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoaWRlRWxlbWVudHMoY3VycmVudCkge1xuICAgIGNvbnN0IHRvQ2hhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbWFpbi1sYW5nXScpO1xuICAgIFxuICAgIHRvQ2hhbmdlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7IC8vIFJlbW92ZSAnaGlkZGVuJyBjbGFzcyBmcm9tIGFsbCBlbGVtZW50c1xuICAgICAgICBcbiAgICAgICAgaWYgKGN1cnJlbnQgPT09IFwianBcIiAmJiBlbGVtZW50LmRhdGFzZXQubWFpbkxhbmcgPT09IFwiY25cIikge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTsgLy8gQWRkICdoaWRkZW4nIGNsYXNzIHRvIGVsZW1lbnRzIHdpdGggbGFuZyBcImNuXCIgaWYgY3VycmVudCBpcyBcImpwXCJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50ID09PSBcImNuXCIgJiYgZWxlbWVudC5kYXRhc2V0Lm1haW5MYW5nID09PSBcImpwXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7IC8vIEFkZCAnaGlkZGVuJyBjbGFzcyB0byBlbGVtZW50cyB3aXRoIGxhbmcgXCJqcFwiIGlmIGN1cnJlbnQgaXMgXCJjblwiXG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLW9uZVwiKTtcblxuXG4gXG5cbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYW5pbWF0ZUhhbWJ1cmdlck1lbnUoKXtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIik7XG4gICAgXG4gICAgICAgIGlmICghY3VycmVudFN0YXRlIHx8IGN1cnJlbnRTdGF0ZSA9PT0gXCJjbG9zZWRcIikge1xuICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFwib3BlbmVkXCIpO1xuICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiLCBcImNsb3NlZFwiKTtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSIsImNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLW9uZVwiKTtcbmNvbnN0IHByaW1hcnlOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpbWFyeS1uYXYnKTtcblxuXG5cbmZ1bmN0aW9uIGNsZWFyQ2xhc3MoKXtcbiAgICBwcmltYXJ5TmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW1hcnktbmF2X2Nsb3NlZCcpO1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzcygpe1xuICAgIHByaW1hcnlOYXYuY2xhc3NMaXN0LmFkZCgncHJpbWFyeS1uYXZfY2xvc2VkJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZ2dsZU5hdigpe1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIpO1xuY29uc29sZS5sb2coY3VycmVudFN0YXRlKVxuICAgICAgICBpZiAoY3VycmVudFN0YXRlID09PSBcImNsb3NlZFwiKSB7XG4gICAgICAgICAgICAvLyBjbGVhckNsYXNzKClcbiAgICAgICAgICAgIGFkZENsYXNzKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGFkZENsYXNzKCk7XG4gICAgICAgICAgICBjbGVhckNsYXNzKClcbiAgICAgICAgICB9XG4gICAgfSlcbn1cblxuIiwiY29uc3QgbGFuZ0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhbmctYnRuLXRleHRcIik7XG5cbmZ1bmN0aW9uIHJlbW92ZUFjdGl2ZUNsYXNzKCl7XG4gICAgbGFuZ0J0bnMuZm9yRWFjaChidG4gPT57XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtbGFuZycpO1xuICAgIH0pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0QWN0aXZlQ2xhc3NPbmxvYWQobGFuZ3VhZ2Upe1xuICAgIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGFuZy1idG4tdGV4dCcpO1xuICAgIHJlbW92ZUFjdGl2ZUNsYXNzKClcbiAgICBidG5zLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgaWYoYnRuLmRhdGFzZXQuYnRuTGFuZyA9PT0gXCJqcFwiICYmIGxhbmd1YWdlID09PSBcImpwXCIpe1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1sYW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihidG4uZGF0YXNldC5idG5MYW5nID09PSBcImNuXCIgJiYgbGFuZ3VhZ2UgPT09IFwiY25cIil7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1sYW5nJyk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0SHRtbEF0dHJpYnV0ZShsYW5ndWFnZSl7XG4gICAgaWYobGFuZ3VhZ2UgPT09IFwianBcIil7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gJ2pwJztcbiAgICB9XG4gICAgZWxzZSBpZiAobGFuZ3VhZ2UgPT09IFwiY25cIil7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gJ3poJztcbiAgICB9XG59IiwiXG5jb25zdCBsYW5nQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFuZy1idG4tdGV4dFwiKTtcblxuXG4vL3JlbW92ZXMgdGhlIGFjdGl2ZSBjbGFzcyBmcm9tIGJvdGggYnRuc1xuLy8g5Lih5pa544Gu44Oc44K/44Oz44GL44KJIGFjdGl2ZSDjgq/jg6njgrnjgpLliYrpmaTjgZfjgb7jgZlcblxuXG5mdW5jdGlvbiByZW1vdmVBY3RpdmVDbGFzcygpe1xuICAgIGxhbmdCdG5zLmZvckVhY2goYnRuID0+e1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWxhbmcnKTtcbiAgICB9KVxufVxuXG4vL2FkZHMgdGhlIGFjdGl2ZSBjbGFzcyB0byB0aGUgc2VsZWN0ZWQgYnRuXG4vLyDpgbjmip7jgZfjgZ/jg5zjgr/jg7PjgasgYWN0aXZlIOOCr+ODqeOCueOCkui/veWKoOOBl+OBvuOBmVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXRBY3RpdmVMYW5nQnRuQ2xhc3MoYnRuKXtcbiAgICByZW1vdmVBY3RpdmVDbGFzcygpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtbGFuZycpO1xufSIsIi8vc2F2ZSBvYmplY3RzIGluIHRoZSBzdG9yYWdlIGFzIHN0cmluZ3Ncbi8vIOOCquODluOCuOOCp+OCr+ODiOOCkuaWh+Wtl+WIl+OBqOOBl+OBpuOCueODiOODrOODvOOCuOOBq+S/neWtmOOBl+OBvuOBmVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFN0b3JhZ2VJdGVtKGtleSwgdmFsdWUpIHtcbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHN0b3JlIGl0ZW0gaW4gbG9jYWxTdG9yYWdlOlwiLCBlcnJvcik7XG4gICAgfVxuICB9IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjdGl2YXRlU2xpZGVyKCl7XG5cbiAgICBjb25zdCBzbGlkZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXNlLWNhcmQtY2Fyb3VzZWwnKTsgLy/jgrnjg6njgqTjg4kgLyDjgqvjg6vjg7zjgrvjg6vjga7jgrPjg7Pjg4bjg4pcbiAgICBjb25zdCBzbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXNlLWNhcmQtY2Fyb3VzZWxfbGlzdCcpOyAvL+OCq+ODq+ODvOOCu+ODq+OBruODiOODqeODg+OCr1xuICAgIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXNlLWNhcmQtbW9iaWxlJyk7ICAgLy/jgrnjg6njgqTjg4kgLyDjgqvjg7zjg4lcbiAgICBcbiAgICAvLyDjgIzmrKHjgbjjgI3jg5zjgr/jg7PjgajjgIzliY3jgbjjgI3jg5zjgr/jg7NcbiAgICBjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhc2UtbmV4dCcpO1xuICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FzZS1wcmV2Jyk7XG4gICAgXG4gICAgbGV0IHNsaWRlcl9pbmRleCA9IDE7XG4gICAgXG4gICAgY29uc3QgZmlyc3RDbG9uZSA9IHNsaWRlc1swXS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY29uc3QgbGFzdENsb25lID0gc2xpZGVzW3NsaWRlcy1sZW5ndGggLTFdLmNsb25lTm9kZSh0cnVlKTtcbiAgICBcbiAgICBmaXJzdENsb25lLmlkID0gXCJmaXJzdC1jbG9uZVwiO1xuICAgIGxhc3RDbG9uZS5pZCA9IFwibGFzdC1jbG9uZVwiO1xuICAgIFxuICAgIHNsaWRlLmFwcGVuZChmaXJzdENsb25lKTtcbiAgICBzbGlkZS5wcmVwZW5kKGxhc3RDbG9uZSk7XG5cbiAgICBjb25zdCBzbGlkZXNXaWR0aCA9c2xpZGVzW2luZGV4XS5jbGllbnRXaWR0aCA7XG4gICAgY29uc29sZS5sb2coc2xpZGVzV2lkdGgpXG5cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY3RpdmF0ZVNtb290aFNjcm9sbCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCJdJyk7XG4gICAgICAgIFxuICAgICAgICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gNTAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZiA9PT0gJyMnIHx8IGhyZWYgPT09ICcnID8gJ2h0bWwnIDogaHJlZik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnNjcm9sbFk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0YXJnZXRQb3NpdGlvbiAtIHN0YXJ0UG9zaXRpb247XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0VGltZSA9IG51bGw7XG4gICAgICBcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBhbmltYXRpb24oY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkgc3RhcnRUaW1lID0gY3VycmVudFRpbWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVFbGFwc2VkID0gY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJ1biA9IGVhc2UodGltZUVsYXBzZWQsIHN0YXJ0UG9zaXRpb24sIGRpc3RhbmNlLCBzcGVlZCk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBydW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGltZUVsYXBzZWQgPCBzcGVlZCkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZWFzZSh0LCBiLCBjLCBkKSB7XG4gICAgICAgICAgICAgICAgICAgIHQgLz0gZCAvIDI7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0IDwgMSkgcmV0dXJuIGMgLyAyICogdCAqIHQgKyBiO1xuICAgICAgICAgICAgICAgICAgICB0LS07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtYyAvIDIgKiAodCAqICh0IC0gMikgLSAxKSArIGI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9uYXZiYXIuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaW5kZXgvaGVyby5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9pbmRleC9tYWluLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2luZGV4L2Fib3V0LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2luZGV4L2Jsb2cuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaW5kZXgvY2FzZS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9pbmRleC9yZWFzb25zLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2luZGV4L2Zsb3cuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaW5kZXgvY29udGFjdC5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9pbmRleC9pbmRleENvbnRhY3QuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL2Zvb3Rlci5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdHlwb2dyYXBoeS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdXRpbGl0eS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vYW5pbWF0aW9uLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi90cmFuc2xhdGlvbi5jc3NcIjtcblxuLy8gaW1wb3J0IGxhbmdEYXRhIGZyb20gJy4vYXNzZXRzL2pzb24vbGFuZ3VhZ2UuanNvbic7XG4vLy0tLS0tLS0tLS0tSkFWQVNDUklQVC0tLS0tLS0tLS0tIC8vXG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmltcG9ydCBiYXJiYSBmcm9tICdAYmFyYmEvY29yZSc7XG5pbXBvcnQgYWN0aXZhdGVTbW9vdGhTY3JvbGwgZnJvbSBcIi4vYXNzZXRzL2pzZnVuY3Rpb25zL3Ntb290aHNjcm9sbFwiO1xuaW1wb3J0IGFuaW1hdGVIYW1idXJnZXJNZW51IGZyb20gXCIuL2Fzc2V0cy9qc2Z1bmN0aW9ucy9tb2JpbGVOYXZcIjtcbmltcG9ydCB0b2dnbGVOYXYgZnJvbSBcIi4vYXNzZXRzL2pzZnVuY3Rpb25zL21vYmlsZU5hdk9wZW5cIjtcbmltcG9ydCBhY3RpdmF0ZVNsaWRlciBmcm9tIFwiLi9hc3NldHMvanNmdW5jdGlvbnMvc2xpZGVyXCI7XG5pbXBvcnQgc2V0U3RvcmFnZUl0ZW0gZnJvbSBcIi4vYXNzZXRzL2pzZnVuY3Rpb25zL3NldFN0b3JhZ2VcIjtcbmltcG9ydCBHZXRTdG9yYWdlSXRlbXMgZnJvbSBcIi4vYXNzZXRzL2pzZnVuY3Rpb25zL2dldFN0b3JhZ2VcIjtcbmltcG9ydCBTZXRBY3RpdmVMYW5nQnRuQ2xhc3MgZnJvbSBcIi4vYXNzZXRzL2pzZnVuY3Rpb25zL3NldExhbmdCdG5DbGFzc1wiO1xuaW1wb3J0IGNoYW5nZVRleHQgZnJvbSBcIi4vYXNzZXRzL2pzZnVuY3Rpb25zL2NoYW5nZVRleHRMYW5nXCI7XG5pbXBvcnQgaGlkZUVsZW1lbnRzIGZyb20gXCIuL2Fzc2V0cy9qc2Z1bmN0aW9ucy9oaWRlRWxlbWVudHNcIjtcbmltcG9ydCBzZXRIdG1sQXR0cmlidXRlIGZyb20gXCIuL2Fzc2V0cy9qc2Z1bmN0aW9ucy9zZXRIdG1sQXR0cmlidXRlXCI7XG5pbXBvcnQgc2V0QWN0aXZlQ2xhc3NPbmxvYWQgZnJvbSBcIi4vYXNzZXRzL2pzZnVuY3Rpb25zL3NldEFjdGl2ZUNsYXNzT25sb2FkXCI7XG5pbXBvcnQgY2hhbmdlTG9nbyBmcm9tIFwiLi9hc3NldHMvanNmdW5jdGlvbnMvY2hhbmdlTG9nb1wiO1xuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBDQVNFIFNFQ1RJT04gUEFSQUxMQVggQU5JTUFUSU9OXG4gIOOCseODvOOCueOCu+OCr+OCt+ODp+ODs+OBruODh+OCs+ODrOODvOOCt+ODp+ODs+OBq+WvvuOBmeOCi+ODkeODqeODqeODg+OCr+OCueOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmxldCBpbWFnZXMgPSBnc2FwLnV0aWxzLnRvQXJyYXkoXCIucGFyYWxsYXhcIik7XG5cbmltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4ge1xuICBnc2FwLnRvKGltYWdlLCB7XG4gICAgeVBlcmNlbnQ6IC0xMDAgKiBpbWFnZS5kYXRhc2V0LnNwZWVkLFxuICAgIGVhc2U6IFwibm9uZVwiLFxuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHNjcnViOiBpbWFnZS5kYXRhc2V0LnNwZWVkLFxuICAgIH0sXG4gIH0pO1xufSk7XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFNMSURFUiBJTkRJQ0FUT1JcbiAg44K544Op44Kk44OA44O844Gu44Kk44Oz44K444Kx44O844K/44O8XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuY29uc3QgaW5kaWNhdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5kaWNhdG9yXCIpO1xuXG5jb25zdCBzZXRJbmRpY2F0b3IgPSAoKSA9PiB7XG4gIGluZGljYXRvcnMuZm9yRWFjaCgoaW5kaWNhdG9yKSA9PiB7XG4gICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7IC8vcmVtb3ZlIHRoZSBhY3RpdmUgY2xhc3NcbiAgICBjb25zdCBpbmRpY2F0b3JOdW1iZXIgPSAraW5kaWNhdG9yLmRhdGFzZXQuaW5kaWNhdG9yO1xuICAgIGlmIChpbmRpY2F0b3JOdW1iZXIgPT09IGluZGV4KSB7XG4gICAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTsgLy9hZGQgYWN0aXZlIGNsYXNzIHRvIHRoZSBjbGlja2VkIGluZGljYXRvclxuICAgIH1cbiAgfSk7XG59O1xuXG5pbmRpY2F0b3JzLmZvckVhY2goKGluZGljYXRvcikgPT4ge1xuICBpbmRpY2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgY2xpY2tlZEluZGljYXRvciA9IGUudGFyZ2V0O1xuICAgIGluZGV4ID0gcGFyc2VJbnQoY2xpY2tlZEluZGljYXRvci5kYXRhc2V0LmluZGljYXRvcik7IC8vbWFrZSB0aGUgaW5kZXggdGhlIHNhbWUgYXMgdGhlIGNvcmVlc3BvbmRpbmcgaW5kaWNhdG9yXG4gICAgdXBkYXRlU2xpZGVQb3NpdGlvbigpO1xuICB9KTtcbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgU01PT1RIIFNDUk9MTCBUTyBUT1BcbiAg44OI44OD44OX44G444K544Og44O844K544K544Kv44Ot44O844OrXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmFjdGl2YXRlU21vb3RoU2Nyb2xsKCk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBIQU1CVVJHRVIgTUVOVSBBTklNQVRJT05TXG4gIOODj+ODs+ODkOODvOOCrOODvOODoeODi+ODpeODvOOBruOCouODi+ODoeODvOOCt+ODp+ODs1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmFuaW1hdGVIYW1idXJnZXJNZW51KCk7XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgVE9HR0xFIE1PQklMRSBOQVZcbiAg44Oi44OQ44Kk44Or44OK44OT44Ky44O844K344On44Oz44Gu5YiH44KK5pu/44GI5qmf6IO9XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxudG9nZ2xlTmF2KCk7XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBNVUxUSSBMQU5HVUFHRSBTSVRFIFJFTEFURUQgU0NSSVBUU1xuIOODnuODq+ODgeiogOiqnuOCteOCpOODiOOBq+mWoumAo+OBmeOCi+OCueOCr+ODquODl+ODiFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5jb25zdCBMT0NBTF9TVE9SQUdFX0xBTkdVQUdFX0tFWSA9IFwiYWx3YXlzLmxhbmdcIiA7IC8vdGhlIGtleSB0byB0aGUgbG9jYWwgc3RvcmFnZSBsYW5ndWFnZVxubGV0IGN1cnJlbnRMYW5nID0gR2V0U3RvcmFnZUl0ZW1zKExPQ0FMX1NUT1JBR0VfTEFOR1VBR0VfS0VZKSB8fCBcImpwXCI7IC8vY2hlY2tzIHdoZXRoZXIgdGhlcmVzIGEgbGFuZ3VhZ2UgcHJlZmZyZWQgYnkgIGEgdXNlciB3aG8gaGFzIHZpc2l0ZWQgYmVmb3JlLiBpZiBub3QgaXQgd2lsbCBkZWZhdWx0IHRvIFwianBcIlxuY29uc3QgbGFuZ0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhbmctYnRuLXRleHRcIik7XG5cblxuc2V0U3RvcmFnZUl0ZW0oTE9DQUxfU1RPUkFHRV9MQU5HVUFHRV9LRVksY3VycmVudExhbmcpO1xuc2V0SHRtbEF0dHJpYnV0ZShjdXJyZW50TGFuZyk7XG5zZXRBY3RpdmVDbGFzc09ubG9hZChjdXJyZW50TGFuZyk7XG5cblxuLy8gY29uc29sZS5sb2codGVtcC5kYXRhc2V0LmJ0bkxhbmcpO1xuaGlkZUVsZW1lbnRzKGN1cnJlbnRMYW5nKTtcbmNoYW5nZUxvZ28oY3VycmVudExhbmcpO1xubGFuZ0J0bnMuZm9yRWFjaChidG4gPT57XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSk9PntcbiAgICBTZXRBY3RpdmVMYW5nQnRuQ2xhc3MoYnRuKSBcbiAgICBjb25zdCBjdXJyZW50TGFuZyA9IGJ0bi5kYXRhc2V0LmJ0bkxhbmc7IC8vc2V0IHRoZSBjdXJyZW50IGxhbmdhdWUgdG8gdGhlIGxhbmd1YWdlIG9mIHRoZSBidG5cbiAgICBzZXRTdG9yYWdlSXRlbShMT0NBTF9TVE9SQUdFX0xBTkdVQUdFX0tFWSxjdXJyZW50TGFuZyk7IC8vc2F2ZSB0aGUgbmV3bHkgc2VsZWN0ZWQgbGFuZ2F1ZSBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuICAgIGhpZGVFbGVtZW50cyhjdXJyZW50TGFuZyk7XG4gICAgY2hhbmdlTG9nbyhjdXJyZW50TGFuZyk7XG4gICAgc2V0SHRtbEF0dHJpYnV0ZShjdXJyZW50TGFuZyk7XG4gIH0pXG59KVxuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwoKT0+e1xuXG59KSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwLFxuXHRcInNyY19hc3NldHNfY3NzX2NvbW1vbl9hbmltYXRpb25fY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9mb290ZXJfY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9uYS1lYjU1MDNcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rYWx3YXlzXzIzMTEyNF9zdW1hbWluXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2Fsd2F5c18yMzExMjRfc3VtYW1pblwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYmFyYmFfY29yZV9kaXN0X2JhcmJhX3VtZF9qcy1ub2RlX21vZHVsZXNfZ3NhcF9TY3JvbGxUcmlnZ2VyX2pzLW5vZGVfbW9kLTEyNDA4NlwiLFwic3JjX2Fzc2V0c19jc3NfY29tbW9uX2FuaW1hdGlvbl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX2Zvb3Rlcl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX25hLWViNTUwM1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9