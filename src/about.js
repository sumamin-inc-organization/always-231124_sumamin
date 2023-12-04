
import "./assets/css/common/reset.css";
import "./assets/css/common/navbar.css";
import "./assets/css/common/utility.css";
import "./assets/css/index/hero.css";
import "./assets/css/index/main.css";
import "./assets/css/index/about.css";
import "./assets/css/index/case.css";
import "./assets/css/index/reasons.css";
import "./assets/css/index/flow.css";
import "./assets/css/index/blog.css";
import "./assets/css/index/contact.css";
import "./assets/css/common/typography.css";
import "./assets/css/common/animation.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import barba from '@barba/core';
//parallax animations for the decor in the case section
//ケースセクションのデコレーションに対するパララックスアニメーション

gsap.registerPlugin(ScrollTrigger);

let images = gsap.utils.toArray(".case-decor");

images.forEach((image) => {
  gsap.to(image, {
    yPercent: -100 * image.dataset.speed,
    ease: "none",
    scrollTrigger: {
      scrub: image.dataset.speed,
    },
  });
});


//slider


// startSlide();

const slideContainer = document.querySelector('.track');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.blog-card');
const nextBtn = document.getElementById('next_btn');
const prevBtn = document.getElementById('previous_btn');

const firstClone = slides[0].cloneNode(true);
const secondClone = slides[1].cloneNode(true);


slider.append(firstClone);



let index = 0;
const slideWidth = slides[index].clientWidth;

nextBtn.addEventListener('click', () => {
  index++;
  console.log(index)
  if (index === 5) {
    index = 0;
  }
  updateSlidePosition();
});


prevBtn.addEventListener('click', () => {
  if(index === 0){
    index = 4;
    updateSlidePosition();
  }else{
    index--;
    console.log(index)
    if (index < 0) {
      index = slides.length - 1;
    }
    updateSlidePosition();
  }
});

function updateSlidePosition() {
  const offset = 440 * index;
  setIndicator();
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${offset}px)`;
  });
}

//slider indicator

const indicators = document.querySelectorAll('.indicator');

const setIndicator = ()=>{
  indicators.forEach((indicator)=>{
    indicator.classList.remove('active');
    const indicatorNumber = +(indicator.dataset.indicator);
    if (indicatorNumber === index){
      indicator.classList.add('active');
    }
    
  })
}


indicators.forEach((indicator)=>{
  indicator.addEventListener('click',(e)=>{
    const clickedIndicator = e.target;
    index = parseInt(clickedIndicator.dataset.indicator);
    updateSlidePosition();

  })
})


function delay(n) {
  n = n || 2000
  // Keep official documentation wording, done -> resolve
  // and make it more concise
  return new Promise(resolve => {
    setTimeout(resolve, n)
  })
}


const loadingScreen = document.querySelector('.transition');
function pageTransitionIn(){
  return gsap
  .to(loadingScreen, { duration: .5, x: 0, transformOrigin: 'bottom left'})
  
    
}
function pageTransitionOut(){
  return gsap
  .to(loadingScreen, { duration: .5, x: "-100%", transformOrigin: 'bottom left'})
}
function resetAni(){
  return gsap.set(loadingScreen, { duration: .5,x: "100%"})
}
barba.init({
  sync:true,
  transitions:[
      {
          async leave(data){
              const done = this.async();
              pageTransitionIn();
              // temp();
              await delay(1000);
              done();
          },
          async enter(data){
            pageTransitionOut()
              //  contentAnimation();
          }
      }
  ]
})