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

/***/ "./src/assets/css/under/contact.css":
/*!******************************************!*\
  !*** ./src/assets/css/under/contact.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
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
/* harmony import */ var _assets_css_under_contact_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/css/under/contact.css */ "./src/assets/css/under/contact.css");
/* harmony import */ var _assets_css_common_translation_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/css/common/translation.css */ "./src/assets/css/common/translation.css");
/* harmony import */ var _assets_jsfunctions_mobileNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/jsfunctions/mobileNav */ "./src/assets/jsfunctions/mobileNav.js");
/* harmony import */ var _assets_jsfunctions_mobileNavOpen__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/jsfunctions/mobileNavOpen */ "./src/assets/jsfunctions/mobileNavOpen.js");
/* harmony import */ var _assets_jsfunctions_setStorage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/jsfunctions/setStorage */ "./src/assets/jsfunctions/setStorage.js");
/* harmony import */ var _assets_jsfunctions_setHtmlAttribute__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/jsfunctions/setHtmlAttribute */ "./src/assets/jsfunctions/setHtmlAttribute.js");
/* harmony import */ var _assets_jsfunctions_setActiveClassOnload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/jsfunctions/setActiveClassOnload */ "./src/assets/jsfunctions/setActiveClassOnload.js");
/* harmony import */ var _assets_jsfunctions_hideElements__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/jsfunctions/hideElements */ "./src/assets/jsfunctions/hideElements.js");
/* harmony import */ var _assets_jsfunctions_setLangBtnClass__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/jsfunctions/setLangBtnClass */ "./src/assets/jsfunctions/setLangBtnClass.js");











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
let currentLang = GetStorageItems(LOCAL_STORAGE_LANGUAGE_KEY) || "jp"; //checks whether theres a language preffred by  a user who has visited before. if not it will default to "jp"
const langBtns = document.querySelectorAll(".lang-btn-text");


(0,_assets_jsfunctions_setStorage__WEBPACK_IMPORTED_MODULE_12__["default"])(LOCAL_STORAGE_LANGUAGE_KEY,currentLang);
(0,_assets_jsfunctions_setHtmlAttribute__WEBPACK_IMPORTED_MODULE_13__["default"])(currentLang);
(0,_assets_jsfunctions_setActiveClassOnload__WEBPACK_IMPORTED_MODULE_14__["default"])(currentLang);



(0,_assets_jsfunctions_hideElements__WEBPACK_IMPORTED_MODULE_15__["default"])(currentLang);
langBtns.forEach(btn =>{
  btn.addEventListener("click",(e)=>{
    (0,_assets_jsfunctions_setLangBtnClass__WEBPACK_IMPORTED_MODULE_16__["default"])(btn) 
    const currentLang = btn.dataset.btnLang; //set the current langaue to the language of the btn
    (0,_assets_jsfunctions_setStorage__WEBPACK_IMPORTED_MODULE_12__["default"])(LOCAL_STORAGE_LANGUAGE_KEY,currentLang); //save the newly selected langaue in the local storage
    (0,_assets_jsfunctions_hideElements__WEBPACK_IMPORTED_MODULE_15__["default"])(currentLang);
    (0,_assets_jsfunctions_setHtmlAttribute__WEBPACK_IMPORTED_MODULE_13__["default"])(currentLang);
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
/******/ 			"contact": 0,
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_assets_css_common_animation_css-src_assets_css_common_footer_css-src_assets_css_common_na-eb5503"], () => (__webpack_require__("./src/contact.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC42YzgxYTQ0YjliODk0OWQwY2JkZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSwrRUFBK0UsUUFBUTtBQUN2Rjs7QUFFQTtBQUNBLHNEQUFzRCxRQUFRO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOztBQUVaO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsVUFBVTtBQUNWLDZDQUE2QztBQUM3QztBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBOzs7QUFHQTs7QUFFQSxFQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdlO0FBQ2Y7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWdUM7QUFDQztBQUNBO0FBQ0k7QUFDSDtBQUNFO0FBQ0o7QUFDQztBQUNBO0FBQ0s7O0FBRTdDO0FBQ2tFO0FBQ1A7QUFDRTtBQUNRO0FBQ1E7QUFDaEI7QUFDWTs7O0FBR3pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBFQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4RUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQ7QUFDbkQsdUVBQXVFO0FBQ3ZFOzs7QUFHQSwyRUFBYztBQUNkLGlGQUFnQjtBQUNoQixxRkFBb0I7Ozs7QUFJcEIsNkVBQVk7QUFDWjtBQUNBO0FBQ0EsSUFBSSxnRkFBcUI7QUFDekIsNkNBQTZDO0FBQzdDLElBQUksMkVBQWMsMENBQTBDO0FBQzVELElBQUksNkVBQVk7QUFDaEIsSUFBSSxpRkFBZ0I7QUFDcEIsR0FBRztBQUNILENBQUM7Ozs7OztVQzNERDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL2FuaW1hdGlvbi5jc3M/NmY5ZCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vZm9vdGVyLmNzcz8wZTNjIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9uYXZiYXIuY3NzPzhiMzYiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3Jlc2V0LmNzcz9iN2ZiIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvY3NzL2NvbW1vbi90cmFuc2xhdGlvbi5jc3M/MTMwNiIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdHlwb2dyYXBoeS5jc3M/NGI3ZCIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdW5kZXIuY3NzP2EyMDAiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3V0aWxpdHkuY3NzP2M4ZTIiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2Fzc2V0cy9jc3MvaW5kZXgvY29udGFjdC5jc3M/ZTVkZSIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2Nzcy91bmRlci9jb250YWN0LmNzcz8wNTFjIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvanNmdW5jdGlvbnMvaGlkZUVsZW1lbnRzLmpzIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvanNmdW5jdGlvbnMvbW9iaWxlTmF2LmpzIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvanNmdW5jdGlvbnMvbW9iaWxlTmF2T3Blbi5qcyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2pzZnVuY3Rpb25zL3NldEFjdGl2ZUNsYXNzT25sb2FkLmpzIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9hc3NldHMvanNmdW5jdGlvbnMvc2V0SHRtbEF0dHJpYnV0ZS5qcyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2pzZnVuY3Rpb25zL3NldExhbmdCdG5DbGFzcy5qcyIsIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvYXNzZXRzL2pzZnVuY3Rpb25zL3NldFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoaWRlRWxlbWVudHMoY3VycmVudCl7XG4vLyAgICAgaWYgKCFjdXJyZW50KXtcbi8vICAgICAgICAgY29uc3QgdG9DaGFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tYWluLWxhbmd1YWdlXScpO1xuLy8gICAgICAgICB0b0NoYW5nZS5mb3JFYWNoKGVsZW1lbnQgPT57XG4vLyAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSAnZGlzcGxheTpub25lJzsgXG4vLyAgICAgICAgIH0pXG4vLyAgICAgfVxuLy8gICAgIGVsc2V7XG4vLyAgICAgICAgIGNvbnN0IHRvQ2hhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtbWFpbi1sYW5ndWFnZSA9ICR7Y3VycmVudH1dYCk7XG4vLyAgICAgICAgIGNvbnN0IG5vdEN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tYWluLWxhbmd1YWdlXScpO1xuXG4vLyAgICAgICAgIG5vdEN1cnJlbnQuZm9yRWFjaChlbGVtZW50ID0+IHtcbi8vICAgICAgICAgICAgIGlmKGVsZW1lbnQuZGF0YXNldC5tYWluTGFuZ3VhZ2UgPT09IGAke2N1cnJlbnR9YCl7XG4vLyAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6YmxvY2snOyBcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGVsc2V7XG4vLyAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0nZGlzcGxheTpub25lJztcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSlcblxuICAgICAgICBcbi8vICAgICB9XG5cbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGlkZUVsZW1lbnRzKGN1cnJlbnQpe1xuLy8gICAgIGNvbnN0IHRvQ2hhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbWFpbi1sYW5ndWFnZV0nKTtcbi8vICAgICBjb25zb2xlLmxvZyh0b0NoYW5nZSlcbi8vICAgICB0b0NoYW5nZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbi8vICAgICBpZiAoY3VycmVudCA9PT0gXCJqcFwiKXtcbi8vICAgICAgICAgdG9DaGFuZ2UuZm9yRWFjaChlbGVtZW50ID0+IHtcbi8vICAgICAgICAgICAgIGlmKGVsZW1lbnQuZGF0YXNldC5jdXJyZW50TGFuZyA9PT0gXCJjblwiKXtcbi8vICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9KVxuLy8gICAgIH1cbi8vICAgICBlbHNlIGlmKGN1cnJlbnQgPT09IFwiY25cIil7XG4vLyAgICAgICAgIHRvQ2hhbmdlLmZvckVhY2goZWxlbWVudCA9PiB7XG4vLyAgICAgICAgICAgICBpZihlbGVtZW50LmRhdGFzZXQuY3VycmVudExhbmcgPT09IFwianBcIil7XG4vLyAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSlcbiAgICAgICAgXG4vLyAgICAgfVxuXG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhpZGVFbGVtZW50cyhjdXJyZW50KSB7XG4gICAgY29uc3QgdG9DaGFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tYWluLWxhbmddJyk7XG4gICAgXG4gICAgdG9DaGFuZ2UuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTsgLy8gUmVtb3ZlICdoaWRkZW4nIGNsYXNzIGZyb20gYWxsIGVsZW1lbnRzXG4gICAgICAgIFxuICAgICAgICBpZiAoY3VycmVudCA9PT0gXCJqcFwiICYmIGVsZW1lbnQuZGF0YXNldC5tYWluTGFuZyA9PT0gXCJjblwiKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpOyAvLyBBZGQgJ2hpZGRlbicgY2xhc3MgdG8gZWxlbWVudHMgd2l0aCBsYW5nIFwiY25cIiBpZiBjdXJyZW50IGlzIFwianBcIlxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnQgPT09IFwiY25cIiAmJiBlbGVtZW50LmRhdGFzZXQubWFpbkxhbmcgPT09IFwianBcIikge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTsgLy8gQWRkICdoaWRkZW4nIGNsYXNzIHRvIGVsZW1lbnRzIHdpdGggbGFuZyBcImpwXCIgaWYgY3VycmVudCBpcyBcImNuXCJcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tb25lXCIpO1xuXG5cbiBcblxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbmltYXRlSGFtYnVyZ2VyTWVudSgpe1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiKTtcbiAgICBcbiAgICAgICAgaWYgKCFjdXJyZW50U3RhdGUgfHwgY3VycmVudFN0YXRlID09PSBcImNsb3NlZFwiKSB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgXCJvcGVuZWRcIik7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFwiY2xvc2VkXCIpO1xuICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9IiwiY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tb25lXCIpO1xuY29uc3QgcHJpbWFyeU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmltYXJ5LW5hdicpO1xuXG5cblxuZnVuY3Rpb24gY2xlYXJDbGFzcygpe1xuICAgIHByaW1hcnlOYXYuY2xhc3NMaXN0LnJlbW92ZSgncHJpbWFyeS1uYXZfY2xvc2VkJyk7XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKCl7XG4gICAgcHJpbWFyeU5hdi5jbGFzc0xpc3QuYWRkKCdwcmltYXJ5LW5hdl9jbG9zZWQnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlTmF2KCl7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIik7XG5jb25zb2xlLmxvZyhjdXJyZW50U3RhdGUpXG4gICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IFwiY2xvc2VkXCIpIHtcbiAgICAgICAgICAgIC8vIGNsZWFyQ2xhc3MoKVxuICAgICAgICAgICAgYWRkQ2xhc3MoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYWRkQ2xhc3MoKTtcbiAgICAgICAgICAgIGNsZWFyQ2xhc3MoKVxuICAgICAgICAgIH1cbiAgICB9KVxufVxuXG4iLCJjb25zdCBsYW5nQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFuZy1idG4tdGV4dFwiKTtcblxuZnVuY3Rpb24gcmVtb3ZlQWN0aXZlQ2xhc3MoKXtcbiAgICBsYW5nQnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1sYW5nJyk7XG4gICAgfSlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRBY3RpdmVDbGFzc09ubG9hZChsYW5ndWFnZSl7XG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYW5nLWJ0bi10ZXh0Jyk7XG4gICAgcmVtb3ZlQWN0aXZlQ2xhc3MoKVxuICAgIGJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBpZihidG4uZGF0YXNldC5idG5MYW5nID09PSBcImpwXCIgJiYgbGFuZ3VhZ2UgPT09IFwianBcIil7XG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxhbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGJ0bi5kYXRhc2V0LmJ0bkxhbmcgPT09IFwiY25cIiAmJiBsYW5ndWFnZSA9PT0gXCJjblwiKXtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxhbmcnKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICBcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRIdG1sQXR0cmlidXRlKGxhbmd1YWdlKXtcbiAgICBpZihsYW5ndWFnZSA9PT0gXCJqcFwiKXtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSAnanAnO1xuICAgIH1cbiAgICBlbHNlIGlmIChsYW5ndWFnZSA9PT0gXCJjblwiKXtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSAnemgnO1xuICAgIH1cbn0iLCJcbmNvbnN0IGxhbmdCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYW5nLWJ0bi10ZXh0XCIpO1xuXG5cbi8vcmVtb3ZlcyB0aGUgYWN0aXZlIGNsYXNzIGZyb20gYm90aCBidG5zXG4vLyDkuKHmlrnjga7jg5zjgr/jg7PjgYvjgokgYWN0aXZlIOOCr+ODqeOCueOCkuWJiumZpOOBl+OBvuOBmVxuXG5cbmZ1bmN0aW9uIHJlbW92ZUFjdGl2ZUNsYXNzKCl7XG4gICAgbGFuZ0J0bnMuZm9yRWFjaChidG4gPT57XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtbGFuZycpO1xuICAgIH0pXG59XG5cbi8vYWRkcyB0aGUgYWN0aXZlIGNsYXNzIHRvIHRoZSBzZWxlY3RlZCBidG5cbi8vIOmBuOaKnuOBl+OBn+ODnOOCv+ODs+OBqyBhY3RpdmUg44Kv44Op44K544KS6L+95Yqg44GX44G+44GZXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldEFjdGl2ZUxhbmdCdG5DbGFzcyhidG4pe1xuICAgIHJlbW92ZUFjdGl2ZUNsYXNzKCk7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1sYW5nJyk7XG59IiwiLy9zYXZlIG9iamVjdHMgaW4gdGhlIHN0b3JhZ2UgYXMgc3RyaW5nc1xuLy8g44Kq44OW44K444Kn44Kv44OI44KS5paH5a2X5YiX44Go44GX44Gm44K544OI44Os44O844K444Gr5L+d5a2Y44GX44G+44GZXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U3RvcmFnZUl0ZW0oa2V5LCB2YWx1ZSkge1xuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc3RvcmUgaXRlbSBpbiBsb2NhbFN0b3JhZ2U6XCIsIGVycm9yKTtcbiAgICB9XG4gIH0iLCJpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9uYXZiYXIuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL2Zvb3Rlci5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdHlwb2dyYXBoeS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdXRpbGl0eS5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vYW5pbWF0aW9uLmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi91bmRlci5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9pbmRleC9jb250YWN0LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHMvY3NzL3VuZGVyL2NvbnRhY3QuY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3RyYW5zbGF0aW9uLmNzc1wiO1xuXG4vLy0tLS0tLS0tLS0tSkFWQVNDUklQVC0tLS0tLS0tLS0tIC8vXG5pbXBvcnQgYW5pbWF0ZUhhbWJ1cmdlck1lbnUgZnJvbSBcIi4vYXNzZXRzL2pzZnVuY3Rpb25zL21vYmlsZU5hdlwiO1xuaW1wb3J0IHRvZ2dsZU5hdiBmcm9tIFwiLi9hc3NldHMvanNmdW5jdGlvbnMvbW9iaWxlTmF2T3BlblwiO1xuaW1wb3J0IHNldFN0b3JhZ2VJdGVtIGZyb20gXCIuL2Fzc2V0cy9qc2Z1bmN0aW9ucy9zZXRTdG9yYWdlXCI7XG5pbXBvcnQgc2V0SHRtbEF0dHJpYnV0ZSBmcm9tIFwiLi9hc3NldHMvanNmdW5jdGlvbnMvc2V0SHRtbEF0dHJpYnV0ZVwiO1xuaW1wb3J0IHNldEFjdGl2ZUNsYXNzT25sb2FkIGZyb20gXCIuL2Fzc2V0cy9qc2Z1bmN0aW9ucy9zZXRBY3RpdmVDbGFzc09ubG9hZFwiO1xuaW1wb3J0IGhpZGVFbGVtZW50cyBmcm9tIFwiLi9hc3NldHMvanNmdW5jdGlvbnMvaGlkZUVsZW1lbnRzXCI7XG5pbXBvcnQgU2V0QWN0aXZlTGFuZ0J0bkNsYXNzIGZyb20gXCIuL2Fzc2V0cy9qc2Z1bmN0aW9ucy9zZXRMYW5nQnRuQ2xhc3NcIjtcblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgSEFNQlVSR0VSIE1FTlUgQU5JTUFUSU9OU1xuICDjg4/jg7Pjg5Djg7zjgqzjg7zjg6Hjg4vjg6Xjg7zjga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5hbmltYXRlSGFtYnVyZ2VyTWVudSgpO1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFRPR0dMRSBNT0JJTEUgTkFWXG4gIOODouODkOOCpOODq+ODiuODk+OCsuODvOOCt+ODp+ODs+OBruWIh+OCiuabv+OBiOapn+iDvVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbnRvZ2dsZU5hdigpO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIE1VTFRJIExBTkdVQUdFIFNJVEUgUkVMQVRFRCBTQ1JJUFRTXG4g44Oe44Or44OB6KiA6Kqe44K144Kk44OI44Gr6Zai6YCj44GZ44KL44K544Kv44Oq44OX44OIXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmNvbnN0IExPQ0FMX1NUT1JBR0VfTEFOR1VBR0VfS0VZID0gXCJhbHdheXMubGFuZ1wiIDsgLy90aGUga2V5IHRvIHRoZSBsb2NhbCBzdG9yYWdlIGxhbmd1YWdlXG5sZXQgY3VycmVudExhbmcgPSBHZXRTdG9yYWdlSXRlbXMoTE9DQUxfU1RPUkFHRV9MQU5HVUFHRV9LRVkpIHx8IFwianBcIjsgLy9jaGVja3Mgd2hldGhlciB0aGVyZXMgYSBsYW5ndWFnZSBwcmVmZnJlZCBieSAgYSB1c2VyIHdobyBoYXMgdmlzaXRlZCBiZWZvcmUuIGlmIG5vdCBpdCB3aWxsIGRlZmF1bHQgdG8gXCJqcFwiXG5jb25zdCBsYW5nQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFuZy1idG4tdGV4dFwiKTtcblxuXG5zZXRTdG9yYWdlSXRlbShMT0NBTF9TVE9SQUdFX0xBTkdVQUdFX0tFWSxjdXJyZW50TGFuZyk7XG5zZXRIdG1sQXR0cmlidXRlKGN1cnJlbnRMYW5nKTtcbnNldEFjdGl2ZUNsYXNzT25sb2FkKGN1cnJlbnRMYW5nKTtcblxuXG5cbmhpZGVFbGVtZW50cyhjdXJyZW50TGFuZyk7XG5sYW5nQnRucy5mb3JFYWNoKGJ0biA9PntcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKT0+e1xuICAgIFNldEFjdGl2ZUxhbmdCdG5DbGFzcyhidG4pIFxuICAgIGNvbnN0IGN1cnJlbnRMYW5nID0gYnRuLmRhdGFzZXQuYnRuTGFuZzsgLy9zZXQgdGhlIGN1cnJlbnQgbGFuZ2F1ZSB0byB0aGUgbGFuZ3VhZ2Ugb2YgdGhlIGJ0blxuICAgIHNldFN0b3JhZ2VJdGVtKExPQ0FMX1NUT1JBR0VfTEFOR1VBR0VfS0VZLGN1cnJlbnRMYW5nKTsgLy9zYXZlIHRoZSBuZXdseSBzZWxlY3RlZCBsYW5nYXVlIGluIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgaGlkZUVsZW1lbnRzKGN1cnJlbnRMYW5nKTtcbiAgICBzZXRIdG1sQXR0cmlidXRlKGN1cnJlbnRMYW5nKTtcbiAgfSlcbn0pIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiY29udGFjdFwiOiAwLFxuXHRcInNyY19hc3NldHNfY3NzX2NvbW1vbl9hbmltYXRpb25fY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9mb290ZXJfY3NzLXNyY19hc3NldHNfY3NzX2NvbW1vbl9uYS1lYjU1MDNcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rYWx3YXlzXzIzMTEyNF9zdW1hbWluXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2Fsd2F5c18yMzExMjRfc3VtYW1pblwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wic3JjX2Fzc2V0c19jc3NfY29tbW9uX2FuaW1hdGlvbl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX2Zvb3Rlcl9jc3Mtc3JjX2Fzc2V0c19jc3NfY29tbW9uX25hLWViNTUwM1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9jb250YWN0LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=