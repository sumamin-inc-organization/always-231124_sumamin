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

/***/ "./src/assets/css/common/under.css":
/*!*****************************************!*\
  !*** ./src/assets/css/common/under.css ***!
  \*****************************************/
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

/***/ "./src/assets/css/under/blog.css":
/*!***************************************!*\
  !*** ./src/assets/css/under/blog.css ***!
  \***************************************/
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

/***/ "./src/blog.js":
/*!*********************!*\
  !*** ./src/blog.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_common_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/common/reset.css */ "./src/assets/css/common/reset.css");
/* harmony import */ var _assets_css_common_navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/common/navbar.css */ "./src/assets/css/common/navbar.css");
/* harmony import */ var _assets_css_common_footer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/css/common/footer.css */ "./src/assets/css/common/footer.css");
/* harmony import */ var _assets_css_common_typography_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/css/common/typography.css */ "./src/assets/css/common/typography.css");
/* harmony import */ var _assets_css_common_utility_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/css/common/utility.css */ "./src/assets/css/common/utility.css");
/* harmony import */ var _assets_css_common_animation_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/css/common/animation.css */ "./src/assets/css/common/animation.css");
/* harmony import */ var _assets_css_common_under_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/css/common/under.css */ "./src/assets/css/common/under.css");
/* harmony import */ var _assets_css_under_blog_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/css/under/blog.css */ "./src/assets/css/under/blog.css");
/* harmony import */ var _assets_css_common_translation_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/css/common/translation.css */ "./src/assets/css/common/translation.css");
/* harmony import */ var _assets_jsfunctions_mobileNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/jsfunctions/mobileNav */ "./src/assets/jsfunctions/mobileNav.js");
/* harmony import */ var _assets_jsfunctions_mobileNavOpen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/jsfunctions/mobileNavOpen */ "./src/assets/jsfunctions/mobileNavOpen.js");
/* harmony import */ var _assets_jsfunctions_getStorage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/jsfunctions/getStorage */ "./src/assets/jsfunctions/getStorage.js");
/* harmony import */ var _assets_jsfunctions_setStorage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/jsfunctions/setStorage */ "./src/assets/jsfunctions/setStorage.js");
/* harmony import */ var _assets_jsfunctions_setHtmlAttribute__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/jsfunctions/setHtmlAttribute */ "./src/assets/jsfunctions/setHtmlAttribute.js");
/* harmony import */ var _assets_jsfunctions_setActiveClassOnload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/jsfunctions/setActiveClassOnload */ "./src/assets/jsfunctions/setActiveClassOnload.js");
/* harmony import */ var _assets_jsfunctions_hideElements__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/jsfunctions/hideElements */ "./src/assets/jsfunctions/hideElements.js");
/* harmony import */ var _assets_jsfunctions_setLangBtnClass__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/jsfunctions/setLangBtnClass */ "./src/assets/jsfunctions/setLangBtnClass.js");
/* harmony import */ var _assets_jsfunctions_changeLogo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/jsfunctions/changeLogo */ "./src/assets/jsfunctions/changeLogo.js");











//-----------JAVASCRIPT----------- //











var moreNum = 6;
$('.blog_content:nth-child(n + ' + (moreNum + 1) + ')').addClass('is-hidden');
$('.section_btn').on('click', function() {
    $('.blog_content.is-hidden').slice(0, moreNum).removeClass('is-hidden');
    if ($('.blog_content.is-hidden').length == 0) {
        $('.section_btn').fadeOut();
    } 
});
$(function() {
    var list = $(".blog_inner .blog_content").length;  
    if (list < moreNum) {
        $('.section_btn').addClass('is-btn-hidden');
    }
});

/*----------------------------
  HAMBURGER MENU ANIMATIONS
  ハンバーガーメニューのアニメーション
----------------------------*/

(0,_assets_jsfunctions_mobileNav__WEBPACK_IMPORTED_MODULE_9__["default"])();
/*----------------------------
  TOGGLE MOBILE NAV
  モバイルナビゲーションの切り替え機能
----------------------------*/

(0,_assets_jsfunctions_mobileNavOpen__WEBPACK_IMPORTED_MODULE_10__["default"])();


/*-----------------------------------
  MULTI LANGUAGE SITE RELATED SCRIPTS
 マルチ言語サイトに関連するスクリプト
--------------------------------------*/

const LOCAL_STORAGE_LANGUAGE_KEY = "always.lang" ; //the key to the local storage language
let currentLang = (0,_assets_jsfunctions_getStorage__WEBPACK_IMPORTED_MODULE_11__["default"])(LOCAL_STORAGE_LANGUAGE_KEY) || "jp"; //checks whether theres a language preffred by  a user who has visited before. if not it will default to "jp"
const langBtns = document.querySelectorAll(".lang-btn-text");


(0,_assets_jsfunctions_setStorage__WEBPACK_IMPORTED_MODULE_12__["default"])(LOCAL_STORAGE_LANGUAGE_KEY,currentLang);
(0,_assets_jsfunctions_setHtmlAttribute__WEBPACK_IMPORTED_MODULE_13__["default"])(currentLang);
(0,_assets_jsfunctions_setActiveClassOnload__WEBPACK_IMPORTED_MODULE_14__["default"])(currentLang);


// console.log(temp.dataset.btnLang);
(0,_assets_jsfunctions_hideElements__WEBPACK_IMPORTED_MODULE_15__["default"])(currentLang);
(0,_assets_jsfunctions_changeLogo__WEBPACK_IMPORTED_MODULE_17__["default"])(currentLang);
langBtns.forEach(btn =>{
  btn.addEventListener("click",(e)=>{
    (0,_assets_jsfunctions_setLangBtnClass__WEBPACK_IMPORTED_MODULE_16__["default"])(btn) 
    const currentLang = btn.dataset.btnLang; //set the current langaue to the language of the btn
    (0,_assets_jsfunctions_setStorage__WEBPACK_IMPORTED_MODULE_12__["default"])(LOCAL_STORAGE_LANGUAGE_KEY,currentLang); //save the newly selected langaue in the local storage
    (0,_assets_jsfunctions_hideElements__WEBPACK_IMPORTED_MODULE_15__["default"])(currentLang);
    (0,_assets_jsfunctions_changeLogo__WEBPACK_IMPORTED_MODULE_17__["default"])(currentLang);
    (0,_assets_jsfunctions_setHtmlAttribute__WEBPACK_IMPORTED_MODULE_13__["default"])(currentLang);
  })
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 			"blog": 0,
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_assets_css_common_animation_css-src_assets_css_common_footer_css-src_assets_css_common_na-eb5503"], () => (__webpack_require__("./src/blog.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5hODk3NDQzOWM0ZTg5NGZkNTE4Yi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWdEO0FBQ0c7O0FBRW5EOztBQUVlO0FBQ2Y7QUFDQSxxQkFBcUIsb0RBQU87QUFDNUI7QUFDQTtBQUNBLHFCQUFxQix1REFBTztBQUM1QjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLCtFQUErRSxRQUFRO0FBQ3ZGOztBQUVBO0FBQ0Esc0RBQXNELFFBQVE7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLDZDQUE2QztBQUM3QyxVQUFVO0FBQ1YsNkNBQTZDO0FBQzdDO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7QUMzREE7OztBQUdBOztBQUVBLEVBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ05BOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR2U7QUFDZjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWdUM7QUFDQztBQUNBO0FBQ0k7QUFDSDtBQUNFO0FBQ0o7QUFDRjtBQUNROzs7QUFHN0M7QUFDa0U7QUFDUDtBQUNHO0FBQ0Q7QUFDUTtBQUNRO0FBQ2hCO0FBQ1k7QUFDaEI7OztBQUd6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5RUFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEVBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1EQUFtRDtBQUNuRCxrQkFBa0IsMkVBQWUsc0NBQXNDO0FBQ3ZFOzs7QUFHQSwyRUFBYztBQUNkLGlGQUFnQjtBQUNoQixxRkFBb0I7OztBQUdwQjtBQUNBLDZFQUFZO0FBQ1osMkVBQVU7QUFDVjtBQUNBO0FBQ0EsSUFBSSxnRkFBcUI7QUFDekIsNkNBQTZDO0FBQzdDLElBQUksMkVBQWMsMENBQTBDO0FBQzVELElBQUksNkVBQVk7QUFDaEIsSUFBSSwyRUFBVTtBQUNkLElBQUksaUZBQWdCO0FBQ3BCLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvRUQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vYW5pbWF0aW9uLmNzcz82ZjlkIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9mb290ZXIuY3NzPzBlM2MiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL25hdmJhci5jc3M/OGIzNiIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vcmVzZXQuY3NzP2I3ZmIiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3RyYW5zbGF0aW9uLmNzcz8xMzA2Iiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi90eXBvZ3JhcGh5LmNzcz80YjdkIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi91bmRlci5jc3M/YTIwMCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdXRpbGl0eS5jc3M/YzhlMiIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy91bmRlci9ibG9nLmNzcz85MTI5Iiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvanNmdW5jdGlvbnMvY2hhbmdlTG9nby5qcyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2pzZnVuY3Rpb25zL2dldFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9qc2Z1bmN0aW9ucy9oaWRlRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9qc2Z1bmN0aW9ucy9tb2JpbGVOYXYuanMiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9qc2Z1bmN0aW9ucy9tb2JpbGVOYXZPcGVuLmpzIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvanNmdW5jdGlvbnMvc2V0QWN0aXZlQ2xhc3NPbmxvYWQuanMiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9qc2Z1bmN0aW9ucy9zZXRIdG1sQXR0cmlidXRlLmpzIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvanNmdW5jdGlvbnMvc2V0TGFuZ0J0bkNsYXNzLmpzIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvanNmdW5jdGlvbnMvc2V0U3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYmxvZy5qcyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgTE9HT19KUCBmcm9tIFwiLi4vaW1hZ2VzL25hdmJhci9sb2dvLnN2Z1wiO1xuaW1wb3J0IExPR09fQ04gZnJvbSBcIi4uL2ltYWdlcy9uYXZiYXIvbG9nby1jbi5zdmdcIjtcblxuY29uc3QgTkFWTE9HTyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxvZ28tY2hhbmdlXScpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFuZ2VMb2dvKGxhbmd1YWdlKXtcbiAgICBpZihsYW5ndWFnZSA9PT0gXCJqcFwiKXtcbiAgICAgICAgTkFWTE9HTy5zcmMgPUxPR09fSlA7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxhbmd1YWdlID09PSBcImNuXCIpe1xuICAgICAgICBOQVZMT0dPLnNyYyA9TE9HT19DTjtcbiAgICB9XG4gICAgXG59IiwiLy9nZXQgaXRlbXMgZnJvbSBhIHN0b3JhZ2UgYW5kIHBhcnNlIGl0XG4vLyDjgrnjg4jjg6zjg7zjgrjjgYvjgonjgqLjgqTjg4bjg6DjgpLlj5blvpfjgZfjgIHop6PmnpDjgZfjgb7jgZlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2V0U3RvcmFnZUl0ZW1zKGtleSl7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSlcbiB9XG4iLCIvLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoaWRlRWxlbWVudHMoY3VycmVudCl7XG4vLyAgICAgaWYgKCFjdXJyZW50KXtcbi8vICAgICAgICAgY29uc3QgdG9DaGFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tYWluLWxhbmd1YWdlXScpO1xuLy8gICAgICAgICB0b0NoYW5nZS5mb3JFYWNoKGVsZW1lbnQgPT57XG4vLyAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSAnZGlzcGxheTpub25lJzsgXG4vLyAgICAgICAgIH0pXG4vLyAgICAgfVxuLy8gICAgIGVsc2V7XG4vLyAgICAgICAgIGNvbnN0IHRvQ2hhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtbWFpbi1sYW5ndWFnZSA9ICR7Y3VycmVudH1dYCk7XG4vLyAgICAgICAgIGNvbnN0IG5vdEN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tYWluLWxhbmd1YWdlXScpO1xuXG4vLyAgICAgICAgIG5vdEN1cnJlbnQuZm9yRWFjaChlbGVtZW50ID0+IHtcbi8vICAgICAgICAgICAgIGlmKGVsZW1lbnQuZGF0YXNldC5tYWluTGFuZ3VhZ2UgPT09IGAke2N1cnJlbnR9YCl7XG4vLyAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6YmxvY2snOyBcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGVsc2V7XG4vLyAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0nZGlzcGxheTpub25lJztcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSlcblxuICAgICAgICBcbi8vICAgICB9XG5cbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGlkZUVsZW1lbnRzKGN1cnJlbnQpe1xuLy8gICAgIGNvbnN0IHRvQ2hhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbWFpbi1sYW5ndWFnZV0nKTtcbi8vICAgICBjb25zb2xlLmxvZyh0b0NoYW5nZSlcbi8vICAgICB0b0NoYW5nZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbi8vICAgICBpZiAoY3VycmVudCA9PT0gXCJqcFwiKXtcbi8vICAgICAgICAgdG9DaGFuZ2UuZm9yRWFjaChlbGVtZW50ID0+IHtcbi8vICAgICAgICAgICAgIGlmKGVsZW1lbnQuZGF0YXNldC5jdXJyZW50TGFuZyA9PT0gXCJjblwiKXtcbi8vICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9KVxuLy8gICAgIH1cbi8vICAgICBlbHNlIGlmKGN1cnJlbnQgPT09IFwiY25cIil7XG4vLyAgICAgICAgIHRvQ2hhbmdlLmZvckVhY2goZWxlbWVudCA9PiB7XG4vLyAgICAgICAgICAgICBpZihlbGVtZW50LmRhdGFzZXQuY3VycmVudExhbmcgPT09IFwianBcIil7XG4vLyAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSlcbiAgICAgICAgXG4vLyAgICAgfVxuXG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhpZGVFbGVtZW50cyhjdXJyZW50KSB7XG4gICAgY29uc3QgdG9DaGFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tYWluLWxhbmddJyk7XG4gICAgXG4gICAgdG9DaGFuZ2UuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTsgLy8gUmVtb3ZlICdoaWRkZW4nIGNsYXNzIGZyb20gYWxsIGVsZW1lbnRzXG4gICAgICAgIFxuICAgICAgICBpZiAoY3VycmVudCA9PT0gXCJqcFwiICYmIGVsZW1lbnQuZGF0YXNldC5tYWluTGFuZyA9PT0gXCJjblwiKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpOyAvLyBBZGQgJ2hpZGRlbicgY2xhc3MgdG8gZWxlbWVudHMgd2l0aCBsYW5nIFwiY25cIiBpZiBjdXJyZW50IGlzIFwianBcIlxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnQgPT09IFwiY25cIiAmJiBlbGVtZW50LmRhdGFzZXQubWFpbkxhbmcgPT09IFwianBcIikge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTsgLy8gQWRkICdoaWRkZW4nIGNsYXNzIHRvIGVsZW1lbnRzIHdpdGggbGFuZyBcImpwXCIgaWYgY3VycmVudCBpcyBcImNuXCJcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tb25lXCIpO1xuXG5cbiBcblxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbmltYXRlSGFtYnVyZ2VyTWVudSgpe1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiKTtcbiAgICBcbiAgICAgICAgaWYgKCFjdXJyZW50U3RhdGUgfHwgY3VycmVudFN0YXRlID09PSBcImNsb3NlZFwiKSB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgXCJvcGVuZWRcIik7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFwiY2xvc2VkXCIpO1xuICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9IiwiY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tb25lXCIpO1xuY29uc3QgcHJpbWFyeU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmltYXJ5LW5hdicpO1xuXG5cblxuZnVuY3Rpb24gY2xlYXJDbGFzcygpe1xuICAgIHByaW1hcnlOYXYuY2xhc3NMaXN0LnJlbW92ZSgncHJpbWFyeS1uYXZfY2xvc2VkJyk7XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKCl7XG4gICAgcHJpbWFyeU5hdi5jbGFzc0xpc3QuYWRkKCdwcmltYXJ5LW5hdl9jbG9zZWQnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlTmF2KCl7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIik7XG5jb25zb2xlLmxvZyhjdXJyZW50U3RhdGUpXG4gICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IFwiY2xvc2VkXCIpIHtcbiAgICAgICAgICAgIC8vIGNsZWFyQ2xhc3MoKVxuICAgICAgICAgICAgYWRkQ2xhc3MoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYWRkQ2xhc3MoKTtcbiAgICAgICAgICAgIGNsZWFyQ2xhc3MoKVxuICAgICAgICAgIH1cbiAgICB9KVxufVxuXG4iLCJjb25zdCBsYW5nQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFuZy1idG4tdGV4dFwiKTtcblxuZnVuY3Rpb24gcmVtb3ZlQWN0aXZlQ2xhc3MoKXtcbiAgICBsYW5nQnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1sYW5nJyk7XG4gICAgfSlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRBY3RpdmVDbGFzc09ubG9hZChsYW5ndWFnZSl7XG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYW5nLWJ0bi10ZXh0Jyk7XG4gICAgcmVtb3ZlQWN0aXZlQ2xhc3MoKVxuICAgIGJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBpZihidG4uZGF0YXNldC5idG5MYW5nID09PSBcImpwXCIgJiYgbGFuZ3VhZ2UgPT09IFwianBcIil7XG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxhbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGJ0bi5kYXRhc2V0LmJ0bkxhbmcgPT09IFwiY25cIiAmJiBsYW5ndWFnZSA9PT0gXCJjblwiKXtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxhbmcnKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICBcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRIdG1sQXR0cmlidXRlKGxhbmd1YWdlKXtcbiAgICBpZihsYW5ndWFnZSA9PT0gXCJqcFwiKXtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSAnanAnO1xuICAgIH1cbiAgICBlbHNlIGlmIChsYW5ndWFnZSA9PT0gXCJjblwiKXtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSAnemgnO1xuICAgIH1cbn0iLCJcbmNvbnN0IGxhbmdCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYW5nLWJ0bi10ZXh0XCIpO1xuXG5cbi8vcmVtb3ZlcyB0aGUgYWN0aXZlIGNsYXNzIGZyb20gYm90aCBidG5zXG4vLyDkuKHmlrnjga7jg5zjgr/jg7PjgYvjgokgYWN0aXZlIOOCr+ODqeOCueOCkuWJiumZpOOBl+OBvuOBmVxuXG5cbmZ1bmN0aW9uIHJlbW92ZUFjdGl2ZUNsYXNzKCl7XG4gICAgbGFuZ0J0bnMuZm9yRWFjaChidG4gPT57XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtbGFuZycpO1xuICAgIH0pXG59XG5cbi8vYWRkcyB0aGUgYWN0aXZlIGNsYXNzIHRvIHRoZSBzZWxlY3RlZCBidG5cbi8vIOmBuOaKnuOBl+OBn+ODnOOCv+ODs+OBqyBhY3RpdmUg44Kv44Op44K544KS6L+95Yqg44GX44G+44GZXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldEFjdGl2ZUxhbmdCdG5DbGFzcyhidG4pe1xuICAgIHJlbW92ZUFjdGl2ZUNsYXNzKCk7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1sYW5nJyk7XG59IiwiLy9zYXZlIG9iamVjdHMgaW4gdGhlIHN0b3JhZ2UgYXMgc3RyaW5nc1xuLy8g44Kq44OW44K444Kn44Kv44OI44KS5paH5a2X5YiX44Go44GX44Gm44K544OI44Os44O844K444Gr5L+d5a2Y44GX44G+44GZXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U3RvcmFnZUl0ZW0oa2V5LCB2YWx1ZSkge1xuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc3RvcmUgaXRlbSBpbiBsb2NhbFN0b3JhZ2U6XCIsIGVycm9yKTtcbiAgICB9XG4gIH0iLCJpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9uYXZiYXIuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL2Zvb3Rlci5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdHlwb2dyYXBoeS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdXRpbGl0eS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vYW5pbWF0aW9uLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi91bmRlci5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy91bmRlci9ibG9nLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi90cmFuc2xhdGlvbi5jc3NcIjtcblxuXG4vLy0tLS0tLS0tLS0tSkFWQVNDUklQVC0tLS0tLS0tLS0tIC8vXG5pbXBvcnQgYW5pbWF0ZUhhbWJ1cmdlck1lbnUgZnJvbSBcIi4vYXNzZXRzL2pzZnVuY3Rpb25zL21vYmlsZU5hdlwiO1xuaW1wb3J0IHRvZ2dsZU5hdiBmcm9tIFwiLi9hc3NldHMvanNmdW5jdGlvbnMvbW9iaWxlTmF2T3BlblwiO1xuaW1wb3J0IEdldFN0b3JhZ2VJdGVtcyBmcm9tIFwiLi9hc3NldHMvanNmdW5jdGlvbnMvZ2V0U3RvcmFnZVwiO1xuaW1wb3J0IHNldFN0b3JhZ2VJdGVtIGZyb20gXCIuL2Fzc2V0cy9qc2Z1bmN0aW9ucy9zZXRTdG9yYWdlXCI7XG5pbXBvcnQgc2V0SHRtbEF0dHJpYnV0ZSBmcm9tIFwiLi9hc3NldHMvanNmdW5jdGlvbnMvc2V0SHRtbEF0dHJpYnV0ZVwiO1xuaW1wb3J0IHNldEFjdGl2ZUNsYXNzT25sb2FkIGZyb20gXCIuL2Fzc2V0cy9qc2Z1bmN0aW9ucy9zZXRBY3RpdmVDbGFzc09ubG9hZFwiO1xuaW1wb3J0IGhpZGVFbGVtZW50cyBmcm9tIFwiLi9hc3NldHMvanNmdW5jdGlvbnMvaGlkZUVsZW1lbnRzXCI7XG5pbXBvcnQgU2V0QWN0aXZlTGFuZ0J0bkNsYXNzIGZyb20gXCIuL2Fzc2V0cy9qc2Z1bmN0aW9ucy9zZXRMYW5nQnRuQ2xhc3NcIjtcbmltcG9ydCBjaGFuZ2VMb2dvIGZyb20gXCIuL2Fzc2V0cy9qc2Z1bmN0aW9ucy9jaGFuZ2VMb2dvXCI7XG5cblxudmFyIG1vcmVOdW0gPSA2O1xuJCgnLmJsb2dfY29udGVudDpudGgtY2hpbGQobiArICcgKyAobW9yZU51bSArIDEpICsgJyknKS5hZGRDbGFzcygnaXMtaGlkZGVuJyk7XG4kKCcuc2VjdGlvbl9idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKCcuYmxvZ19jb250ZW50LmlzLWhpZGRlbicpLnNsaWNlKDAsIG1vcmVOdW0pLnJlbW92ZUNsYXNzKCdpcy1oaWRkZW4nKTtcbiAgICBpZiAoJCgnLmJsb2dfY29udGVudC5pcy1oaWRkZW4nKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAkKCcuc2VjdGlvbl9idG4nKS5mYWRlT3V0KCk7XG4gICAgfSBcbn0pO1xuJChmdW5jdGlvbigpIHtcbiAgICB2YXIgbGlzdCA9ICQoXCIuYmxvZ19pbm5lciAuYmxvZ19jb250ZW50XCIpLmxlbmd0aDsgIFxuICAgIGlmIChsaXN0IDwgbW9yZU51bSkge1xuICAgICAgICAkKCcuc2VjdGlvbl9idG4nKS5hZGRDbGFzcygnaXMtYnRuLWhpZGRlbicpO1xuICAgIH1cbn0pO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgSEFNQlVSR0VSIE1FTlUgQU5JTUFUSU9OU1xuICDjg4/jg7Pjg5Djg7zjgqzjg7zjg6Hjg4vjg6Xjg7zjga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5hbmltYXRlSGFtYnVyZ2VyTWVudSgpO1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFRPR0dMRSBNT0JJTEUgTkFWXG4gIOODouODkOOCpOODq+ODiuODk+OCsuODvOOCt+ODp+ODs+OBruWIh+OCiuabv+OBiOapn+iDvVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbnRvZ2dsZU5hdigpO1xuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgTVVMVEkgTEFOR1VBR0UgU0lURSBSRUxBVEVEIFNDUklQVFNcbiDjg57jg6vjg4HoqIDoqp7jgrXjgqTjg4jjgavplqLpgKPjgZnjgovjgrnjgq/jg6rjg5fjg4hcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuY29uc3QgTE9DQUxfU1RPUkFHRV9MQU5HVUFHRV9LRVkgPSBcImFsd2F5cy5sYW5nXCIgOyAvL3RoZSBrZXkgdG8gdGhlIGxvY2FsIHN0b3JhZ2UgbGFuZ3VhZ2VcbmxldCBjdXJyZW50TGFuZyA9IEdldFN0b3JhZ2VJdGVtcyhMT0NBTF9TVE9SQUdFX0xBTkdVQUdFX0tFWSkgfHwgXCJqcFwiOyAvL2NoZWNrcyB3aGV0aGVyIHRoZXJlcyBhIGxhbmd1YWdlIHByZWZmcmVkIGJ5ICBhIHVzZXIgd2hvIGhhcyB2aXNpdGVkIGJlZm9yZS4gaWYgbm90IGl0IHdpbGwgZGVmYXVsdCB0byBcImpwXCJcbmNvbnN0IGxhbmdCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYW5nLWJ0bi10ZXh0XCIpO1xuXG5cbnNldFN0b3JhZ2VJdGVtKExPQ0FMX1NUT1JBR0VfTEFOR1VBR0VfS0VZLGN1cnJlbnRMYW5nKTtcbnNldEh0bWxBdHRyaWJ1dGUoY3VycmVudExhbmcpO1xuc2V0QWN0aXZlQ2xhc3NPbmxvYWQoY3VycmVudExhbmcpO1xuXG5cbi8vIGNvbnNvbGUubG9nKHRlbXAuZGF0YXNldC5idG5MYW5nKTtcbmhpZGVFbGVtZW50cyhjdXJyZW50TGFuZyk7XG5jaGFuZ2VMb2dvKGN1cnJlbnRMYW5nKTtcbmxhbmdCdG5zLmZvckVhY2goYnRuID0+e1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpPT57XG4gICAgU2V0QWN0aXZlTGFuZ0J0bkNsYXNzKGJ0bikgXG4gICAgY29uc3QgY3VycmVudExhbmcgPSBidG4uZGF0YXNldC5idG5MYW5nOyAvL3NldCB0aGUgY3VycmVudCBsYW5nYXVlIHRvIHRoZSBsYW5ndWFnZSBvZiB0aGUgYnRuXG4gICAgc2V0U3RvcmFnZUl0ZW0oTE9DQUxfU1RPUkFHRV9MQU5HVUFHRV9LRVksY3VycmVudExhbmcpOyAvL3NhdmUgdGhlIG5ld2x5IHNlbGVjdGVkIGxhbmdhdWUgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICBoaWRlRWxlbWVudHMoY3VycmVudExhbmcpO1xuICAgIGNoYW5nZUxvZ28oY3VycmVudExhbmcpO1xuICAgIHNldEh0bWxBdHRyaWJ1dGUoY3VycmVudExhbmcpO1xuICB9KVxufSlcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYmxvZ1wiOiAwLFxuXHRcInNyY19hc3NldHNfY3NzX2NvbW1vbl9hbmltYXRpb25fY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9mb290ZXJfY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9uYS1lYjU1MDNcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rYWx3YXlzXzIzMTEyNF9zdW1hbWluXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2Fsd2F5c18yMzExMjRfc3VtYW1pblwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wic3JjX2Fzc2V0c19jc3NfY29tbW9uX2FuaW1hdGlvbl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX2Zvb3Rlcl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX25hLWViNTUwM1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9ibG9nLmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=