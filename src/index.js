import "./assets/css/common/reset.css";
import "./assets/css/common/navbar.css";
// import "./assets/css/common/utility.css";
import "./assets/css/index/hero.css";
import "./assets/css/index/main.css";
import "./assets/css/index/about.css";
import "./assets/css/index/case.css";
import "./assets/css/index/reasons.css";
import "./assets/css/index/flow.css";
import "./assets/css/index/blog.css";
import "./assets/css/index/contact.css";
import "./assets/css/common/footer.css";
import "./assets/css/common/typography.css";
import "./assets/css/common/utility.css";

import "./assets/css/common/animation.css";


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import barba from '@barba/core';
import activateSmoothScroll from "./assets/jsfunctions/smoothscroll";
import animateHamburgerMenu from "./assets/jsfunctions/mobileNav";
import toggleNav from "./assets/jsfunctions/mobileNavOpen";
import activateSlider from "./assets/jsfunctions/slider";


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
activateSmoothScroll();



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

animateHamburgerMenu();

toggleNav();

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