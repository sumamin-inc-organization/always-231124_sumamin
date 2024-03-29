import "./assets/css/common/reset.css";
import "./assets/css/common/navbar.css";
import "./assets/css/common/footer.css";
import "./assets/css/common/typography.css";
import "./assets/css/common/utility.css";
import "./assets/css/common/animation.css";
import "./assets/css/common/under.css";
import "./assets/css/under/blog.css";
import "./assets/css/common/translation.css";


//-----------JAVASCRIPT----------- //
import animateHamburgerMenu from "./assets/jsfunctions/mobileNav";
import toggleNav from "./assets/jsfunctions/mobileNavOpen";
import GetStorageItems from "./assets/jsfunctions/getStorage";
import setStorageItem from "./assets/jsfunctions/setStorage";
import setHtmlAttribute from "./assets/jsfunctions/setHtmlAttribute";
import setActiveClassOnload from "./assets/jsfunctions/setActiveClassOnload";
import hideElements from "./assets/jsfunctions/hideElements";
import SetActiveLangBtnClass from "./assets/jsfunctions/setLangBtnClass";
import changeLogo from "./assets/jsfunctions/changeLogo";
import setBottomLogo from "./assets/jsfunctions/changeBottomLogo";


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
setBottomLogo(currentLang,"blog");

langBtns.forEach(btn =>{
  btn.addEventListener("click",(e)=>{
    SetActiveLangBtnClass(btn) 
    const currentLang = btn.dataset.btnLang; //set the current langaue to the language of the btn
    setStorageItem(LOCAL_STORAGE_LANGUAGE_KEY,currentLang); //save the newly selected langaue in the local storage
    hideElements(currentLang);
    changeLogo(currentLang);
    setBottomLogo(currentLang,"blog");
    setHtmlAttribute(currentLang);
  })
})
