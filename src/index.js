import "./assets/css/common/reset.css";
import "./assets/css/common/navbar.css";
import "./assets/css/common/utility.css";
import "./assets/css/index/hero.css";
import "./assets/css/index/main.css";
import "./assets/css/index/about.css";
import "./assets/css/index/case.css";
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
