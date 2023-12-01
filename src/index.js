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

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

const slideContainer = document.querySelector(".track");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".blog-card");
const nextBtn = document.getElementById("next_btn");
const prevBtn = document.getElementById("previous_btn");

const firstClone = slides[0].cloneNode(true); //not working rn
const secondClone = slides[1].cloneNode(true); //not working rn

slider.append(firstClone); //not working rn

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

//slider indicator

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
