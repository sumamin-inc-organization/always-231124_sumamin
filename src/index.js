import "./assets/css/common/reset.css";
import "./assets/css/common/navbar.css";
import "./assets/css/index/hero.css";
import "./assets/css/index/main.css";
import "./assets/css/index/about.css";
import "./assets/css/index/blog.css";
import "./assets/css/index/case.css";
import "./assets/css/index/reasons.css";
import "./assets/css/index/flow.css";
import "./assets/css/index/contact.css";
import "./assets/css/index/indexContact.css";
import "./assets/css/common/footer.css";
import "./assets/css/common/typography.css";
import "./assets/css/common/utility.css";
import "./assets/css/common/animation.css";
import "./assets/css/common/translation.css";

// import langData from './assets/json/language.json';
//-----------JAVASCRIPT----------- //

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import barba from '@barba/core';
import activateSmoothScroll from "./assets/jsfunctions/smoothscroll";
import animateHamburgerMenu from "./assets/jsfunctions/mobileNav";
import toggleNav from "./assets/jsfunctions/mobileNavOpen";
import activateSlider from "./assets/jsfunctions/slider";
import setStorageItem from "./assets/jsfunctions/setStorage";
import GetStorageItems from "./assets/jsfunctions/getStorage";
import SetActiveLangBtnClass from "./assets/jsfunctions/setLangBtnClass";
import changeText from "./assets/jsfunctions/changeTextLang";
import hideElements from "./assets/jsfunctions/hideElements";
import setHtmlAttribute from "./assets/jsfunctions/setHtmlAttribute";
import setActiveClassOnload from "./assets/jsfunctions/setActiveClassOnload";
import changeLogo from "./assets/jsfunctions/changeLogo";
import setBottomLogo from "./assets/jsfunctions/changeBottomLogo";


/*-------------------------------------------------------
  CASE SECTION PARALLAX ANIMATION
  ケースセクションのデコレーションに対するパララックスアニメーション
---------------------------------------------------------*/
gsap.registerPlugin(ScrollTrigger);

let images = gsap.utils.toArray(".parallax");

images.forEach((image) => {
  gsap.to(image, {
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
activateSmoothScroll();

/*----------------------------
  HAMBURGER MENU ANIMATIONS
  ハンバーガーメニューのアニメーション
----------------------------*/

animateHamburgerMenu();
/*----------------------------
  TOGGLE MOBILE NAV
  モバイルナビゲーションの切り替え機能
----------------------------*/

toggleNav();


/*-----------------------------------
  MULTI LANGUAGE SITE RELATED SCRIPTS
 マルチ言語サイトに関連するスクリプト
--------------------------------------*/

const LOCAL_STORAGE_LANGUAGE_KEY = "always.lang" ; //the key to the local storage language
let currentLang = GetStorageItems(LOCAL_STORAGE_LANGUAGE_KEY) || "jp"; //checks whether theres a language preffred by  a user who has visited before. if not it will default to "jp"
const langBtns = document.querySelectorAll(".lang-btn-text");


setStorageItem(LOCAL_STORAGE_LANGUAGE_KEY,currentLang);
setHtmlAttribute(currentLang);
setActiveClassOnload(currentLang);


// console.log(temp.dataset.btnLang);
hideElements(currentLang);
changeLogo(currentLang);
setBottomLogo(currentLang,"index")
langBtns.forEach(btn =>{
  btn.addEventListener("click",(e)=>{
    SetActiveLangBtnClass(btn) 
    const currentLang = btn.dataset.btnLang; //set the current langaue to the language of the btn
    setStorageItem(LOCAL_STORAGE_LANGUAGE_KEY,currentLang); //save the newly selected langaue in the local storage
    hideElements(currentLang);
    changeLogo(currentLang);
    setBottomLogo(currentLang,"index")
    setHtmlAttribute(currentLang);
  })
})



document.addEventListener("DOMContentLoaded",()=>{

})