import "./assets/css/common/reset.css";
import "./assets/css/common/navbar.css";
import "./assets/css/common/footer.css";
import "./assets/css/common/typography.css";
import "./assets/css/common/utility.css";
import "./assets/css/common/animation.css";
import "./assets/css/common/under.css";
import "./assets/css/under/about.css";
import "./assets/css/common/translation.css";

//-----------JAVASCRIPT----------- //
import animateHamburgerMenu from "./assets/jsfunctions/mobileNav";
import toggleNav from "./assets/jsfunctions/mobileNavOpen";
import setStorageItem from "./assets/jsfunctions/setStorage";
import setHtmlAttribute from "./assets/jsfunctions/setHtmlAttribute";
import setActiveClassOnload from "./assets/jsfunctions/setActiveClassOnload";
import hideElements from "./assets/jsfunctions/hideElements";
import SetActiveLangBtnClass from "./assets/jsfunctions/setLangBtnClass";
import GetStorageItems from "./assets/jsfunctions/getStorage";


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


/*----------------------------
 ABOUT CAROUSEL 
 Aboutカルーセル
----------------------------*/

const caseSlideContainer= document.querySelector('.case-card-carousel'); //スライド / カルーセルのコンテナ
const caseSlide = document.querySelector('.about-card-carousel_list'); //カルーセルのトラック
let caseSlides = document.querySelectorAll('.about-card-mobile');   //スライド / カード

// 「次へ」ボタンと「前へ」ボタン
const caseNextBtn = document.getElementById('about-next');
const casePrevBtn = document.getElementById('about-prev');

let sliderIndex = 0;
console.log(caseNextBtn)

// console.log(slideWidth)

const nextSlide = () => {
  caseSlides = document.querySelectorAll('.about-card-mobile');
  if (sliderIndex >= caseSlides.length - 1) {
    return;
  } else {
    sliderIndex++;
    caseSlides.forEach((slide) => {
      const slidesWidth = slide.clientWidth; // Use slide.clientWidth directly
      const gap = 60;
      const offset = slidesWidth + gap ;
      slide.style.transform = `translateX(${-offset * sliderIndex}px)`;
      slide.style.transition = '0.7s';
    });
  }
};

const prevSlide = () => {
  caseSlides = document.querySelectorAll('.about-card-mobile');
  if (sliderIndex === 0) {
    return;
  } else {
    sliderIndex--;
    caseSlides.forEach((slide) => {
      const slidesWidth = slide.clientWidth; // Use slide.clientWidth directly
      const gap = 60;
      const offset = slidesWidth + gap ;
      slide.style.transform = `translateX(${-offset * sliderIndex}px)`;
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



hideElements(currentLang);
langBtns.forEach(btn =>{
  btn.addEventListener("click",(e)=>{
    SetActiveLangBtnClass(btn) 
    const currentLang = btn.dataset.btnLang; //set the current langaue to the language of the btn
    setStorageItem(LOCAL_STORAGE_LANGUAGE_KEY,currentLang); //save the newly selected langaue in the local storage
    hideElements(currentLang);
    setHtmlAttribute(currentLang);
  })
})


