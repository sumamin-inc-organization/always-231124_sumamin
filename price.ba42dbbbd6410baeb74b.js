/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/price.js ***!
  \**********************/
// import "./assets/css/common/reset.css";
// import "./assets/css/common/navbar.css";
// import "./assets/css/common/utility.css";
// import "./assets/css/index/hero.css";
// import "./assets/css/index/main.css";
// import "./assets/css/index/about.css";
// import "./assets/css/index/case.css";
// import "./assets/css/index/reasons.css";
// import "./assets/css/index/flow.css";
// import "./assets/css/index/blog.css";
// import "./assets/css/index/contact.css";
// import "./assets/css/common/footer.css";
// import "./assets/css/common/typography.css";


// import "./assets/css/common/animation.css";


// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import barba from '@barba/core';
// import activateSmoothScroll from "./smoothscroll";


// /*-------------------------------------------------------
//   CASE SECTION PARALLAX ANIMATION
//   ケースセクションのデコレーションに対するパララックスアニメーション
// ---------------------------------------------------------*/
// gsap.registerPlugin(ScrollTrigger);

// // let images = gsap.utils.toArray(".case-decor");

// // images.forEach((image) => {
// //   gsap.to(image, {
// //     yPercent: -100 * image.dataset.speed,
// //     ease: "none",
// //     scrollTrigger: {
// //       scrub: image.dataset.speed,
// //     },
// //   });
// // });

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
// /*----------------------------
//  SLIDER
//  スライダー
// ----------------------------*/

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

// /*----------------------------
//   SLIDER INDICATOR
//   スライダーのインジケーター
// ----------------------------*/

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

// /*----------------------------
//   SMOOTH SCROLL TO TOP
//   トップへスムーススクロール
// ----------------------------*/
// activateSmoothScroll();



// //transitopn 


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
//           },

//           async once(data) {
//             contentAnimation();
//         },
//       }
//   ]
// })
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2UuYmE0MmRiYmJkNjQxMGJhZWI3NGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBLFlBQVksT0FBTztBQUNuQixZQUFZLGdCQUFnQjtBQUM1QjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixRQUFRO0FBQ1IsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpREFBaUQ7QUFDakQsa0RBQWtEOztBQUVsRCw4QkFBOEI7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSw2Q0FBNkMsT0FBTztBQUNwRCxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBLE1BQU07QUFDTixJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9EQUFvRDtBQUNsRiwyQkFBMkIscUVBQXFFO0FBQ2hHLDZCQUE2QixXQUFXO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7O0FBRWQ7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsSUFBSSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL3ByaWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vcmVzZXQuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL25hdmJhci5jc3NcIjtcbi8vIGltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdXRpbGl0eS5jc3NcIjtcbi8vIGltcG9ydCBcIi4vYXNzZXRzL2Nzcy9pbmRleC9oZXJvLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9hc3NldHMvY3NzL2luZGV4L21haW4uY3NzXCI7XG4vLyBpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaW5kZXgvYWJvdXQuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaW5kZXgvY2FzZS5jc3NcIjtcbi8vIGltcG9ydCBcIi4vYXNzZXRzL2Nzcy9pbmRleC9yZWFzb25zLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9hc3NldHMvY3NzL2luZGV4L2Zsb3cuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaW5kZXgvYmxvZy5jc3NcIjtcbi8vIGltcG9ydCBcIi4vYXNzZXRzL2Nzcy9pbmRleC9jb250YWN0LmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9mb290ZXIuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3R5cG9ncmFwaHkuY3NzXCI7XG5cblxuLy8gaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9hbmltYXRpb24uY3NzXCI7XG5cblxuLy8gaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG4vLyBpbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuLy8gaW1wb3J0IGJhcmJhIGZyb20gJ0BiYXJiYS9jb3JlJztcbi8vIGltcG9ydCBhY3RpdmF0ZVNtb290aFNjcm9sbCBmcm9tIFwiLi9zbW9vdGhzY3JvbGxcIjtcblxuXG4vLyAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgQ0FTRSBTRUNUSU9OIFBBUkFMTEFYIEFOSU1BVElPTlxuLy8gICDjgrHjg7zjgrnjgrvjgq/jgrfjg6fjg7Pjga7jg4fjgrPjg6zjg7zjgrfjg6fjg7Pjgavlr77jgZnjgovjg5Hjg6njg6njg4Pjgq/jgrnjgqLjg4vjg6Hjg7zjgrfjg6fjg7Ncbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vLyBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG4vLyAvLyBsZXQgaW1hZ2VzID0gZ3NhcC51dGlscy50b0FycmF5KFwiLmNhc2UtZGVjb3JcIik7XG5cbi8vIC8vIGltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4ge1xuLy8gLy8gICBnc2FwLnRvKGltYWdlLCB7XG4vLyAvLyAgICAgeVBlcmNlbnQ6IC0xMDAgKiBpbWFnZS5kYXRhc2V0LnNwZWVkLFxuLy8gLy8gICAgIGVhc2U6IFwibm9uZVwiLFxuLy8gLy8gICAgIHNjcm9sbFRyaWdnZXI6IHtcbi8vIC8vICAgICAgIHNjcnViOiBpbWFnZS5kYXRhc2V0LnNwZWVkLFxuLy8gLy8gICAgIH0sXG4vLyAvLyAgIH0pO1xuLy8gLy8gfSk7XG5cbi8vIGZ1bmN0aW9uIGNvbnRlbnRBbmltYXRpb24oKXtcbi8vICAgbGV0IGltYWdlcyA9IGdzYXAudXRpbHMudG9BcnJheShcIi5jYXNlLWRlY29yXCIpO1xuXG4vLyAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4ge1xuLy8gICAgIGdzYXAudG8oaW1hZ2UsIHtcbi8vICAgICAgIHlQZXJjZW50OiAtMTAwICogaW1hZ2UuZGF0YXNldC5zcGVlZCxcbi8vICAgICAgIGVhc2U6IFwibm9uZVwiLFxuLy8gICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuLy8gICAgICAgICBzY3J1YjogaW1hZ2UuZGF0YXNldC5zcGVlZCxcbi8vICAgICAgIH0sXG4vLyAgICAgfSk7XG4vLyAgIH0pO1xuLy8gfVxuLy8gLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgU0xJREVSXG4vLyAg44K544Op44Kk44OA44O8XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLy8gY29uc3Qgc2xpZGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyYWNrXCIpO1xuLy8gY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJcIik7XG4vLyBjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2ctY2FyZFwiKTtcbi8vIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRfYnRuXCIpO1xuLy8gY29uc3QgcHJldkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJldmlvdXNfYnRuXCIpO1xuXG4vLyBjb25zdCBmaXJzdENsb25lID0gc2xpZGVzWzBdLmNsb25lTm9kZSh0cnVlKTsgLy9ub3Qgd29ya2luZyByblxuLy8gY29uc3Qgc2Vjb25kQ2xvbmUgPSBzbGlkZXNbMV0uY2xvbmVOb2RlKHRydWUpOyAvL25vdCB3b3JraW5nIHJuXG5cbi8vIHNsaWRlci5hcHBlbmQoZmlyc3RDbG9uZSk7IC8vbm90IHdvcmtpbmcgcm5cblxuLy8gbGV0IGluZGV4ID0gMDtcbi8vIGNvbnN0IHNsaWRlV2lkdGggPSBzbGlkZXNbaW5kZXhdLmNsaWVudFdpZHRoO1xuXG4vLyBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgIGluZGV4Kys7IC8vaW5jcmVhc2VzIHRoZSBpbmRleCBieSAxXG4vLyAgIGlmIChpbmRleCA9PT0gNSkge1xuLy8gICAgIGluZGV4ID0gMDsgLy9pZiBpdHMgaW4gdGhlIDV0aCBzbGlkZSBpdCB3aWxsIHJlc2V0IHRvIHplcm8gc28gdGhhdCB0aGUgZmlyc3Qgc2xpZGUgaXMgc2hvd25cbi8vICAgfVxuLy8gICB1cGRhdGVTbGlkZVBvc2l0aW9uKCk7XG4vLyB9KTtcblxuLy8gcHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICBpZiAoaW5kZXggPT09IDApIHtcbi8vICAgICBpbmRleCA9IDQ7IC8vaWYgaXRzIGN1cnJlbnRseSBpbiB0aGUgZmlyc3Qgc2xpZGUgaXQgd2lsbCBqdW1wIHRvIHRoZSBsYXN0XG4vLyAgICAgdXBkYXRlU2xpZGVQb3NpdGlvbigpO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIGluZGV4LS07XG4vLyAgICAgaWYgKGluZGV4IDwgMCkge1xuLy8gICAgICAgaW5kZXggPSBzbGlkZXMubGVuZ3RoIC0gMTtcbi8vICAgICB9XG4vLyAgICAgdXBkYXRlU2xpZGVQb3NpdGlvbigpO1xuLy8gICB9XG4vLyB9KTtcblxuLy8gZnVuY3Rpb24gdXBkYXRlU2xpZGVQb3NpdGlvbigpIHtcbi8vICAgY29uc3Qgb2Zmc2V0ID0gNDQwICogaW5kZXg7IC8vb2ZmIHNldCBpcyBjYWxjdWxhdGVkIHdpdGggdGhlIGNhcmQgc2l6ZSBhbmQgdGhlIGdhcCAoNDAwcHggKyA0MClcbi8vICAgc2V0SW5kaWNhdG9yKCk7XG4vLyAgIHNsaWRlcy5mb3JFYWNoKChzbGlkZSwgaSkgPT4ge1xuLy8gICAgIHNsaWRlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7b2Zmc2V0fXB4KWA7XG4vLyAgIH0pO1xuLy8gfVxuXG4vLyAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgU0xJREVSIElORElDQVRPUlxuLy8gICDjgrnjg6njgqTjg4Djg7zjga7jgqTjg7PjgrjjgrHjg7zjgr/jg7xcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vLyBjb25zdCBpbmRpY2F0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbmRpY2F0b3JcIik7XG5cbi8vIGNvbnN0IHNldEluZGljYXRvciA9ICgpID0+IHtcbi8vICAgaW5kaWNhdG9ycy5mb3JFYWNoKChpbmRpY2F0b3IpID0+IHtcbi8vICAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTsgLy9yZW1vdmUgdGhlIGFjdGl2ZSBjbGFzc1xuLy8gICAgIGNvbnN0IGluZGljYXRvck51bWJlciA9ICtpbmRpY2F0b3IuZGF0YXNldC5pbmRpY2F0b3I7XG4vLyAgICAgaWYgKGluZGljYXRvck51bWJlciA9PT0gaW5kZXgpIHtcbi8vICAgICAgIGluZGljYXRvci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpOyAvL2FkZCBhY3RpdmUgY2xhc3MgdG8gdGhlIGNsaWNrZWQgaW5kaWNhdG9yXG4vLyAgICAgfVxuLy8gICB9KTtcbi8vIH07XG5cbi8vIGluZGljYXRvcnMuZm9yRWFjaCgoaW5kaWNhdG9yKSA9PiB7XG4vLyAgIGluZGljYXRvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbi8vICAgICBjb25zdCBjbGlja2VkSW5kaWNhdG9yID0gZS50YXJnZXQ7XG4vLyAgICAgaW5kZXggPSBwYXJzZUludChjbGlja2VkSW5kaWNhdG9yLmRhdGFzZXQuaW5kaWNhdG9yKTsgLy9tYWtlIHRoZSBpbmRleCB0aGUgc2FtZSBhcyB0aGUgY29yZWVzcG9uZGluZyBpbmRpY2F0b3Jcbi8vICAgICB1cGRhdGVTbGlkZVBvc2l0aW9uKCk7XG4vLyAgIH0pO1xuLy8gfSk7XG5cbi8vIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICBTTU9PVEggU0NST0xMIFRPIFRPUFxuLy8gICDjg4jjg4Pjg5fjgbjjgrnjg6Djg7zjgrnjgrnjgq/jg63jg7zjg6tcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLy8gYWN0aXZhdGVTbW9vdGhTY3JvbGwoKTtcblxuXG5cbi8vIC8vdHJhbnNpdG9wbiBcblxuXG4vLyBmdW5jdGlvbiBkZWxheShuKSB7XG4vLyAgIG4gPSBuIHx8IDIwMDBcbiAgXG4vLyAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbi8vICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIG4pXG4vLyAgIH0pXG4vLyB9XG5cblxuLy8gY29uc3QgbG9hZGluZ1NjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFuc2l0aW9uJyk7XG4vLyBmdW5jdGlvbiBwYWdlVHJhbnNpdGlvbkluKCl7XG4vLyAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoKTtcbi8vICAgICB0bC50byhsb2FkaW5nU2NyZWVuLCB7IGR1cmF0aW9uOiAwLjcsIHg6IDAsIHRyYW5zZm9ybU9yaWdpbjogJ2JvdHRvbSBsZWZ0J30pXG4vLyAgICAudG8obG9hZGluZ1NjcmVlbiwgeyBkdXJhdGlvbjogMC43LCB4OlwiLTEwMCVcIiwgdHJhbnNmb3JtT3JpZ2luOiAnYm90dG9tIGxlZnQnLCBkZWxheTogMC4zfSlcbi8vICAgIC5zZXQobG9hZGluZ1NjcmVlbiwgeyAgeDogIFwiMTAwJVwifSlcbiAgICAgIFxuLy8gfVxuXG4vLyBiYXJiYS5pbml0KHtcbi8vICAgc3luYzp0cnVlLFxuLy8gICB0cmFuc2l0aW9uczpbXG4vLyAgICAgICB7XG4vLyAgICAgICAgICAgYXN5bmMgbGVhdmUoZGF0YSl7XG4vLyAgICAgICAgICAgICAgIGNvbnN0IGRvbmUgPSB0aGlzLmFzeW5jKCk7XG4vLyAgICAgICAgICAgICAgIHBhZ2VUcmFuc2l0aW9uSW4oKTtcbiAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgIGF3YWl0IGRlbGF5KDEwMDApO1xuLy8gICAgICAgICAgICAgICBkb25lKCk7XG4vLyAgICAgICAgICAgfSxcbi8vICAgICAgICAgICBhc3luYyBlbnRlcihkYXRhKXtcbi8vICAgICAgICAgICAgIGNvbnRlbnRBbmltYXRpb24oKVxuLy8gICAgICAgICAgIH0sXG5cbi8vICAgICAgICAgICBhc3luYyBvbmNlKGRhdGEpIHtcbi8vICAgICAgICAgICAgIGNvbnRlbnRBbmltYXRpb24oKTtcbi8vICAgICAgICAgfSxcbi8vICAgICAgIH1cbi8vICAgXVxuLy8gfSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=