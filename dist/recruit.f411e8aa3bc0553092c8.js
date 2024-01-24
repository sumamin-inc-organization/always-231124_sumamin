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

/***/ "./src/assets/css/index/contact.css":
/*!******************************************!*\
  !*** ./src/assets/css/index/contact.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/under/recruit.css":
/*!******************************************!*\
  !*** ./src/assets/css/under/recruit.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "./src/recruit.js":
/*!************************!*\
  !*** ./src/recruit.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_common_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/common/reset.css */ "./src/assets/css/common/reset.css");
/* harmony import */ var _assets_css_common_navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/common/navbar.css */ "./src/assets/css/common/navbar.css");
/* harmony import */ var _assets_css_common_footer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/css/common/footer.css */ "./src/assets/css/common/footer.css");
/* harmony import */ var _assets_css_common_typography_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/css/common/typography.css */ "./src/assets/css/common/typography.css");
/* harmony import */ var _assets_css_common_utility_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/css/common/utility.css */ "./src/assets/css/common/utility.css");
/* harmony import */ var _assets_css_common_animation_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/css/common/animation.css */ "./src/assets/css/common/animation.css");
/* harmony import */ var _assets_css_common_under_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/css/common/under.css */ "./src/assets/css/common/under.css");
/* harmony import */ var _assets_css_index_contact_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/css/index/contact.css */ "./src/assets/css/index/contact.css");
/* harmony import */ var _assets_css_under_recruit_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/css/under/recruit.css */ "./src/assets/css/under/recruit.css");
/* harmony import */ var _assets_css_common_translation_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/css/common/translation.css */ "./src/assets/css/common/translation.css");
/* harmony import */ var _assets_jsfunctions_mobileNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/jsfunctions/mobileNav */ "./src/assets/jsfunctions/mobileNav.js");
/* harmony import */ var _assets_jsfunctions_mobileNavOpen__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/jsfunctions/mobileNavOpen */ "./src/assets/jsfunctions/mobileNavOpen.js");
/* harmony import */ var _assets_jsfunctions_getStorage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/jsfunctions/getStorage */ "./src/assets/jsfunctions/getStorage.js");
/* harmony import */ var _assets_jsfunctions_setStorage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/jsfunctions/setStorage */ "./src/assets/jsfunctions/setStorage.js");
/* harmony import */ var _assets_jsfunctions_setHtmlAttribute__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/jsfunctions/setHtmlAttribute */ "./src/assets/jsfunctions/setHtmlAttribute.js");
/* harmony import */ var _assets_jsfunctions_setActiveClassOnload__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/jsfunctions/setActiveClassOnload */ "./src/assets/jsfunctions/setActiveClassOnload.js");
/* harmony import */ var _assets_jsfunctions_hideElements__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/jsfunctions/hideElements */ "./src/assets/jsfunctions/hideElements.js");
/* harmony import */ var _assets_jsfunctions_setLangBtnClass__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/jsfunctions/setLangBtnClass */ "./src/assets/jsfunctions/setLangBtnClass.js");













//-----------JAVASCRIPT----------- //










/*----------------------------
  HAMBURGER MENU ANIMATIONS
  ハンバーガーメニューのアニメーション
----------------------------*/

(0,_assets_jsfunctions_mobileNav__WEBPACK_IMPORTED_MODULE_10__["default"])();
/*----------------------------
  TOGGLE MOBILE NAV
  モバイルナビゲーションの切り替え機能
----------------------------*/

(0,_assets_jsfunctions_mobileNavOpen__WEBPACK_IMPORTED_MODULE_11__["default"])();


/*-----------------------------------
  MULTI LANGUAGE SITE RELATED SCRIPTS
 マルチ言語サイトに関連するスクリプト
--------------------------------------*/

const LOCAL_STORAGE_LANGUAGE_KEY = "always.lang" ; //the key to the local storage language
let currentLang = (0,_assets_jsfunctions_getStorage__WEBPACK_IMPORTED_MODULE_12__["default"])(LOCAL_STORAGE_LANGUAGE_KEY) || "jp"; //checks whether theres a language preffred by  a user who has visited before. if not it will default to "jp"
const langBtns = document.querySelectorAll(".lang-btn-text");


(0,_assets_jsfunctions_setStorage__WEBPACK_IMPORTED_MODULE_13__["default"])(LOCAL_STORAGE_LANGUAGE_KEY,currentLang);
(0,_assets_jsfunctions_setHtmlAttribute__WEBPACK_IMPORTED_MODULE_14__["default"])(currentLang);
(0,_assets_jsfunctions_setActiveClassOnload__WEBPACK_IMPORTED_MODULE_15__["default"])(currentLang);



(0,_assets_jsfunctions_hideElements__WEBPACK_IMPORTED_MODULE_16__["default"])(currentLang);
langBtns.forEach(btn =>{
  btn.addEventListener("click",(e)=>{
    (0,_assets_jsfunctions_setLangBtnClass__WEBPACK_IMPORTED_MODULE_17__["default"])(btn) 
    const currentLang = btn.dataset.btnLang; //set the current langaue to the language of the btn
    (0,_assets_jsfunctions_setStorage__WEBPACK_IMPORTED_MODULE_13__["default"])(LOCAL_STORAGE_LANGUAGE_KEY,currentLang); //save the newly selected langaue in the local storage
    (0,_assets_jsfunctions_hideElements__WEBPACK_IMPORTED_MODULE_16__["default"])(currentLang);
    (0,_assets_jsfunctions_setHtmlAttribute__WEBPACK_IMPORTED_MODULE_14__["default"])(currentLang);
  })
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
/******/ 			"recruit": 0,
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_assets_css_common_animation_css-src_assets_css_common_footer_css-src_assets_css_common_na-eb5503"], () => (__webpack_require__("./src/recruit.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjcnVpdC5mNDExZThhYTNiYzA1NTMwOTJjOC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsK0VBQStFLFFBQVE7QUFDdkY7O0FBRUE7QUFDQSxzREFBc0QsUUFBUTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDLFVBQVU7QUFDViw2Q0FBNkM7QUFDN0M7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTs7O0FBR0E7O0FBRUEsRUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHZTtBQUNmO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUdUM7QUFDQztBQUNBO0FBQ0k7QUFDSDtBQUNFO0FBQ0o7QUFDQztBQUNBO0FBQ0s7OztBQUc3QztBQUNrRTtBQUNQO0FBQ0c7QUFDRDtBQUNRO0FBQ1E7QUFDaEI7QUFDWTs7O0FBR3pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBFQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4RUFBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbURBQW1EO0FBQ25ELGtCQUFrQiwyRUFBZSxzQ0FBc0M7QUFDdkU7OztBQUdBLDJFQUFjO0FBQ2QsaUZBQWdCO0FBQ2hCLHFGQUFvQjs7OztBQUlwQiw2RUFBWTtBQUNaO0FBQ0E7QUFDQSxJQUFJLGdGQUFxQjtBQUN6Qiw2Q0FBNkM7QUFDN0MsSUFBSSwyRUFBYywwQ0FBMEM7QUFDNUQsSUFBSSw2RUFBWTtBQUNoQixJQUFJLGlGQUFnQjtBQUNwQixHQUFHO0FBQ0gsQ0FBQzs7Ozs7O1VDL0REO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vYW5pbWF0aW9uLmNzcz82ZjlkIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9mb290ZXIuY3NzPzBlM2MiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL25hdmJhci5jc3M/OGIzNiIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vcmVzZXQuY3NzP2I3ZmIiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3RyYW5zbGF0aW9uLmNzcz8xMzA2Iiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi90eXBvZ3JhcGh5LmNzcz80YjdkIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi91bmRlci5jc3M/YTIwMCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdXRpbGl0eS5jc3M/YzhlMiIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9pbmRleC9jb250YWN0LmNzcz9lNWRlIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL3VuZGVyL3JlY3J1aXQuY3NzP2Q0NjUiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9qc2Z1bmN0aW9ucy9nZXRTdG9yYWdlLmpzIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvanNmdW5jdGlvbnMvaGlkZUVsZW1lbnRzLmpzIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvanNmdW5jdGlvbnMvbW9iaWxlTmF2LmpzIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvanNmdW5jdGlvbnMvbW9iaWxlTmF2T3Blbi5qcyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2pzZnVuY3Rpb25zL3NldEFjdGl2ZUNsYXNzT25sb2FkLmpzIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvanNmdW5jdGlvbnMvc2V0SHRtbEF0dHJpYnV0ZS5qcyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2pzZnVuY3Rpb25zL3NldExhbmdCdG5DbGFzcy5qcyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2pzZnVuY3Rpb25zL3NldFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL3JlY3J1aXQuanMiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvL2dldCBpdGVtcyBmcm9tIGEgc3RvcmFnZSBhbmQgcGFyc2UgaXRcbi8vIOOCueODiOODrOODvOOCuOOBi+OCieOCouOCpOODhuODoOOCkuWPluW+l+OBl+OAgeino+aekOOBl+OBvuOBmVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZXRTdG9yYWdlSXRlbXMoa2V5KXtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxuIH1cbiIsIi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhpZGVFbGVtZW50cyhjdXJyZW50KXtcbi8vICAgICBpZiAoIWN1cnJlbnQpe1xuLy8gICAgICAgICBjb25zdCB0b0NoYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1haW4tbGFuZ3VhZ2VdJyk7XG4vLyAgICAgICAgIHRvQ2hhbmdlLmZvckVhY2goZWxlbWVudCA9Pntcbi8vICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9ICdkaXNwbGF5Om5vbmUnOyBcbi8vICAgICAgICAgfSlcbi8vICAgICB9XG4vLyAgICAgZWxzZXtcbi8vICAgICAgICAgY29uc3QgdG9DaGFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1tYWluLWxhbmd1YWdlID0gJHtjdXJyZW50fV1gKTtcbi8vICAgICAgICAgY29uc3Qgbm90Q3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1haW4tbGFuZ3VhZ2VdJyk7XG5cbi8vICAgICAgICAgbm90Q3VycmVudC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuLy8gICAgICAgICAgICAgaWYoZWxlbWVudC5kYXRhc2V0Lm1haW5MYW5ndWFnZSA9PT0gYCR7Y3VycmVudH1gKXtcbi8vICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSAnZGlzcGxheTpibG9jayc7IFxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgZWxzZXtcbi8vICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSdkaXNwbGF5Om5vbmUnO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9KVxuXG4gICAgICAgIFxuLy8gICAgIH1cblxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoaWRlRWxlbWVudHMoY3VycmVudCl7XG4vLyAgICAgY29uc3QgdG9DaGFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tYWluLWxhbmd1YWdlXScpO1xuLy8gICAgIGNvbnNvbGUubG9nKHRvQ2hhbmdlKVxuLy8gICAgIHRvQ2hhbmdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuLy8gICAgIGlmIChjdXJyZW50ID09PSBcImpwXCIpe1xuLy8gICAgICAgICB0b0NoYW5nZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuLy8gICAgICAgICAgICAgaWYoZWxlbWVudC5kYXRhc2V0LmN1cnJlbnRMYW5nID09PSBcImNuXCIpe1xuLy8gICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pXG4vLyAgICAgfVxuLy8gICAgIGVsc2UgaWYoY3VycmVudCA9PT0gXCJjblwiKXtcbi8vICAgICAgICAgdG9DaGFuZ2UuZm9yRWFjaChlbGVtZW50ID0+IHtcbi8vICAgICAgICAgICAgIGlmKGVsZW1lbnQuZGF0YXNldC5jdXJyZW50TGFuZyA9PT0gXCJqcFwiKXtcbi8vICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9KVxuICAgICAgICBcbi8vICAgICB9XG5cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGlkZUVsZW1lbnRzKGN1cnJlbnQpIHtcbiAgICBjb25zdCB0b0NoYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1haW4tbGFuZ10nKTtcbiAgICBcbiAgICB0b0NoYW5nZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpOyAvLyBSZW1vdmUgJ2hpZGRlbicgY2xhc3MgZnJvbSBhbGwgZWxlbWVudHNcbiAgICAgICAgXG4gICAgICAgIGlmIChjdXJyZW50ID09PSBcImpwXCIgJiYgZWxlbWVudC5kYXRhc2V0Lm1haW5MYW5nID09PSBcImNuXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7IC8vIEFkZCAnaGlkZGVuJyBjbGFzcyB0byBlbGVtZW50cyB3aXRoIGxhbmcgXCJjblwiIGlmIGN1cnJlbnQgaXMgXCJqcFwiXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudCA9PT0gXCJjblwiICYmIGVsZW1lbnQuZGF0YXNldC5tYWluTGFuZyA9PT0gXCJqcFwiKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpOyAvLyBBZGQgJ2hpZGRlbicgY2xhc3MgdG8gZWxlbWVudHMgd2l0aCBsYW5nIFwianBcIiBpZiBjdXJyZW50IGlzIFwiY25cIlxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1vbmVcIik7XG5cblxuIFxuXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFuaW1hdGVIYW1idXJnZXJNZW51KCl7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIpO1xuICAgIFxuICAgICAgICBpZiAoIWN1cnJlbnRTdGF0ZSB8fCBjdXJyZW50U3RhdGUgPT09IFwiY2xvc2VkXCIpIHtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiLCBcIm9wZW5lZFwiKTtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcInRydWVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgXCJjbG9zZWRcIik7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0iLCJjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1vbmVcIik7XG5jb25zdCBwcmltYXJ5TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW1hcnktbmF2Jyk7XG5cblxuXG5mdW5jdGlvbiBjbGVhckNsYXNzKCl7XG4gICAgcHJpbWFyeU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdwcmltYXJ5LW5hdl9jbG9zZWQnKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoKXtcbiAgICBwcmltYXJ5TmF2LmNsYXNzTGlzdC5hZGQoJ3ByaW1hcnktbmF2X2Nsb3NlZCcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGVOYXYoKXtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiKTtcbmNvbnNvbGUubG9nKGN1cnJlbnRTdGF0ZSlcbiAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gXCJjbG9zZWRcIikge1xuICAgICAgICAgICAgLy8gY2xlYXJDbGFzcygpXG4gICAgICAgICAgICBhZGRDbGFzcygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhZGRDbGFzcygpO1xuICAgICAgICAgICAgY2xlYXJDbGFzcygpXG4gICAgICAgICAgfVxuICAgIH0pXG59XG5cbiIsImNvbnN0IGxhbmdCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYW5nLWJ0bi10ZXh0XCIpO1xuXG5mdW5jdGlvbiByZW1vdmVBY3RpdmVDbGFzcygpe1xuICAgIGxhbmdCdG5zLmZvckVhY2goYnRuID0+e1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWxhbmcnKTtcbiAgICB9KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldEFjdGl2ZUNsYXNzT25sb2FkKGxhbmd1YWdlKXtcbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhbmctYnRuLXRleHQnKTtcbiAgICByZW1vdmVBY3RpdmVDbGFzcygpXG4gICAgYnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGlmKGJ0bi5kYXRhc2V0LmJ0bkxhbmcgPT09IFwianBcIiAmJiBsYW5ndWFnZSA9PT0gXCJqcFwiKXtcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtbGFuZycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoYnRuLmRhdGFzZXQuYnRuTGFuZyA9PT0gXCJjblwiICYmIGxhbmd1YWdlID09PSBcImNuXCIpe1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtbGFuZycpO1xuICAgICAgICB9XG4gICAgfSlcbiAgIFxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldEh0bWxBdHRyaWJ1dGUobGFuZ3VhZ2Upe1xuICAgIGlmKGxhbmd1YWdlID09PSBcImpwXCIpe1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9ICdqcCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxhbmd1YWdlID09PSBcImNuXCIpe1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9ICd6aCc7XG4gICAgfVxufSIsIlxuY29uc3QgbGFuZ0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhbmctYnRuLXRleHRcIik7XG5cblxuLy9yZW1vdmVzIHRoZSBhY3RpdmUgY2xhc3MgZnJvbSBib3RoIGJ0bnNcbi8vIOS4oeaWueOBruODnOOCv+ODs+OBi+OCiSBhY3RpdmUg44Kv44Op44K544KS5YmK6Zmk44GX44G+44GZXG5cblxuZnVuY3Rpb24gcmVtb3ZlQWN0aXZlQ2xhc3MoKXtcbiAgICBsYW5nQnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1sYW5nJyk7XG4gICAgfSlcbn1cblxuLy9hZGRzIHRoZSBhY3RpdmUgY2xhc3MgdG8gdGhlIHNlbGVjdGVkIGJ0blxuLy8g6YG45oqe44GX44Gf44Oc44K/44Oz44GrIGFjdGl2ZSDjgq/jg6njgrnjgpLov73liqDjgZfjgb7jgZlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0QWN0aXZlTGFuZ0J0bkNsYXNzKGJ0bil7XG4gICAgcmVtb3ZlQWN0aXZlQ2xhc3MoKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxhbmcnKTtcbn0iLCIvL3NhdmUgb2JqZWN0cyBpbiB0aGUgc3RvcmFnZSBhcyBzdHJpbmdzXG4vLyDjgqrjg5bjgrjjgqfjgq/jg4jjgpLmloflrZfliJfjgajjgZfjgabjgrnjg4jjg6zjg7zjgrjjgavkv53lrZjjgZfjgb7jgZlcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdG9yYWdlSXRlbShrZXksIHZhbHVlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzdG9yZSBpdGVtIGluIGxvY2FsU3RvcmFnZTpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfSIsIlxuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vbmF2YmFyLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9mb290ZXIuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3R5cG9ncmFwaHkuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3V0aWxpdHkuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL2FuaW1hdGlvbi5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdW5kZXIuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaW5kZXgvY29udGFjdC5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy91bmRlci9yZWNydWl0LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi90cmFuc2xhdGlvbi5jc3NcIjtcblxuXG4vLy0tLS0tLS0tLS0tSkFWQVNDUklQVC0tLS0tLS0tLS0tIC8vXG5pbXBvcnQgYW5pbWF0ZUhhbWJ1cmdlck1lbnUgZnJvbSBcIi4vYXNzZXRzL2pzZnVuY3Rpb25zL21vYmlsZU5hdlwiO1xuaW1wb3J0IHRvZ2dsZU5hdiBmcm9tIFwiLi9hc3NldHMvanNmdW5jdGlvbnMvbW9iaWxlTmF2T3BlblwiO1xuaW1wb3J0IEdldFN0b3JhZ2VJdGVtcyBmcm9tIFwiLi9hc3NldHMvanNmdW5jdGlvbnMvZ2V0U3RvcmFnZVwiO1xuaW1wb3J0IHNldFN0b3JhZ2VJdGVtIGZyb20gXCIuL2Fzc2V0cy9qc2Z1bmN0aW9ucy9zZXRTdG9yYWdlXCI7XG5pbXBvcnQgc2V0SHRtbEF0dHJpYnV0ZSBmcm9tIFwiLi9hc3NldHMvanNmdW5jdGlvbnMvc2V0SHRtbEF0dHJpYnV0ZVwiO1xuaW1wb3J0IHNldEFjdGl2ZUNsYXNzT25sb2FkIGZyb20gXCIuL2Fzc2V0cy9qc2Z1bmN0aW9ucy9zZXRBY3RpdmVDbGFzc09ubG9hZFwiO1xuaW1wb3J0IGhpZGVFbGVtZW50cyBmcm9tIFwiLi9hc3NldHMvanNmdW5jdGlvbnMvaGlkZUVsZW1lbnRzXCI7XG5pbXBvcnQgU2V0QWN0aXZlTGFuZ0J0bkNsYXNzIGZyb20gXCIuL2Fzc2V0cy9qc2Z1bmN0aW9ucy9zZXRMYW5nQnRuQ2xhc3NcIjtcblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgSEFNQlVSR0VSIE1FTlUgQU5JTUFUSU9OU1xuICDjg4/jg7Pjg5Djg7zjgqzjg7zjg6Hjg4vjg6Xjg7zjga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5hbmltYXRlSGFtYnVyZ2VyTWVudSgpO1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFRPR0dMRSBNT0JJTEUgTkFWXG4gIOODouODkOOCpOODq+ODiuODk+OCsuODvOOCt+ODp+ODs+OBruWIh+OCiuabv+OBiOapn+iDvVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbnRvZ2dsZU5hdigpO1xuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgTVVMVEkgTEFOR1VBR0UgU0lURSBSRUxBVEVEIFNDUklQVFNcbiDjg57jg6vjg4HoqIDoqp7jgrXjgqTjg4jjgavplqLpgKPjgZnjgovjgrnjgq/jg6rjg5fjg4hcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuY29uc3QgTE9DQUxfU1RPUkFHRV9MQU5HVUFHRV9LRVkgPSBcImFsd2F5cy5sYW5nXCIgOyAvL3RoZSBrZXkgdG8gdGhlIGxvY2FsIHN0b3JhZ2UgbGFuZ3VhZ2VcbmxldCBjdXJyZW50TGFuZyA9IEdldFN0b3JhZ2VJdGVtcyhMT0NBTF9TVE9SQUdFX0xBTkdVQUdFX0tFWSkgfHwgXCJqcFwiOyAvL2NoZWNrcyB3aGV0aGVyIHRoZXJlcyBhIGxhbmd1YWdlIHByZWZmcmVkIGJ5ICBhIHVzZXIgd2hvIGhhcyB2aXNpdGVkIGJlZm9yZS4gaWYgbm90IGl0IHdpbGwgZGVmYXVsdCB0byBcImpwXCJcbmNvbnN0IGxhbmdCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYW5nLWJ0bi10ZXh0XCIpO1xuXG5cbnNldFN0b3JhZ2VJdGVtKExPQ0FMX1NUT1JBR0VfTEFOR1VBR0VfS0VZLGN1cnJlbnRMYW5nKTtcbnNldEh0bWxBdHRyaWJ1dGUoY3VycmVudExhbmcpO1xuc2V0QWN0aXZlQ2xhc3NPbmxvYWQoY3VycmVudExhbmcpO1xuXG5cblxuaGlkZUVsZW1lbnRzKGN1cnJlbnRMYW5nKTtcbmxhbmdCdG5zLmZvckVhY2goYnRuID0+e1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpPT57XG4gICAgU2V0QWN0aXZlTGFuZ0J0bkNsYXNzKGJ0bikgXG4gICAgY29uc3QgY3VycmVudExhbmcgPSBidG4uZGF0YXNldC5idG5MYW5nOyAvL3NldCB0aGUgY3VycmVudCBsYW5nYXVlIHRvIHRoZSBsYW5ndWFnZSBvZiB0aGUgYnRuXG4gICAgc2V0U3RvcmFnZUl0ZW0oTE9DQUxfU1RPUkFHRV9MQU5HVUFHRV9LRVksY3VycmVudExhbmcpOyAvL3NhdmUgdGhlIG5ld2x5IHNlbGVjdGVkIGxhbmdhdWUgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICBoaWRlRWxlbWVudHMoY3VycmVudExhbmcpO1xuICAgIHNldEh0bWxBdHRyaWJ1dGUoY3VycmVudExhbmcpO1xuICB9KVxufSkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJyZWNydWl0XCI6IDAsXG5cdFwic3JjX2Fzc2V0c19jc3NfY29tbW9uX2FuaW1hdGlvbl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX2Zvb3Rlcl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX25hLWViNTUwM1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthbHdheXNfMjMxMTI0X3N1bWFtaW5cIl0gPSBzZWxmW1wid2VicGFja0NodW5rYWx3YXlzXzIzMTEyNF9zdW1hbWluXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJzcmNfYXNzZXRzX2Nzc19jb21tb25fYW5pbWF0aW9uX2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fZm9vdGVyX2Nzcy1zcmNfYXNzZXRzX2Nzc19jb21tb25fbmEtZWI1NTAzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3JlY3J1aXQuanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==