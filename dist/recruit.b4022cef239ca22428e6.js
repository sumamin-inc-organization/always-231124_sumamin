/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/recruit.js ***!
  \************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjcnVpdC5iNDAyMmNlZjIzOWNhMjI0MjhlNi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksZ0JBQWdCO0FBQzVCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFFBQVE7QUFDUixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlEQUFpRDtBQUNqRCxrREFBa0Q7O0FBRWxELDhCQUE4Qjs7QUFFOUI7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLDZDQUE2QyxPQUFPO0FBQ3BELE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0EsTUFBTTtBQUNOLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsb0RBQW9EO0FBQ2xGLDJCQUEyQixxRUFBcUU7QUFDaEcsNkJBQTZCLFdBQVc7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxJQUFJLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbHdheXMtMjMxMTI0X3N1bWFtaW4vLi9zcmMvcmVjcnVpdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3Jlc2V0LmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9uYXZiYXIuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3V0aWxpdHkuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaW5kZXgvaGVyby5jc3NcIjtcbi8vIGltcG9ydCBcIi4vYXNzZXRzL2Nzcy9pbmRleC9tYWluLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9hc3NldHMvY3NzL2luZGV4L2Fib3V0LmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9hc3NldHMvY3NzL2luZGV4L2Nhc2UuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaW5kZXgvcmVhc29ucy5jc3NcIjtcbi8vIGltcG9ydCBcIi4vYXNzZXRzL2Nzcy9pbmRleC9mbG93LmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9hc3NldHMvY3NzL2luZGV4L2Jsb2cuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaW5kZXgvY29udGFjdC5jc3NcIjtcbi8vIGltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vZm9vdGVyLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi90eXBvZ3JhcGh5LmNzc1wiO1xuXG5cbi8vIGltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vYW5pbWF0aW9uLmNzc1wiO1xuXG5cbi8vIGltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuLy8gaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbi8vIGltcG9ydCBiYXJiYSBmcm9tICdAYmFyYmEvY29yZSc7XG4vLyBpbXBvcnQgYWN0aXZhdGVTbW9vdGhTY3JvbGwgZnJvbSBcIi4vc21vb3Roc2Nyb2xsXCI7XG5cblxuLy8gLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgIENBU0UgU0VDVElPTiBQQVJBTExBWCBBTklNQVRJT05cbi8vICAg44Kx44O844K544K744Kv44K344On44Oz44Gu44OH44Kz44Os44O844K344On44Oz44Gr5a++44GZ44KL44OR44Op44Op44OD44Kv44K544Ki44OL44Oh44O844K344On44OzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLy8gZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuLy8gLy8gbGV0IGltYWdlcyA9IGdzYXAudXRpbHMudG9BcnJheShcIi5jYXNlLWRlY29yXCIpO1xuXG4vLyAvLyBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbi8vIC8vICAgZ3NhcC50byhpbWFnZSwge1xuLy8gLy8gICAgIHlQZXJjZW50OiAtMTAwICogaW1hZ2UuZGF0YXNldC5zcGVlZCxcbi8vIC8vICAgICBlYXNlOiBcIm5vbmVcIixcbi8vIC8vICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4vLyAvLyAgICAgICBzY3J1YjogaW1hZ2UuZGF0YXNldC5zcGVlZCxcbi8vIC8vICAgICB9LFxuLy8gLy8gICB9KTtcbi8vIC8vIH0pO1xuXG4vLyBmdW5jdGlvbiBjb250ZW50QW5pbWF0aW9uKCl7XG4vLyAgIGxldCBpbWFnZXMgPSBnc2FwLnV0aWxzLnRvQXJyYXkoXCIuY2FzZS1kZWNvclwiKTtcblxuLy8gICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbi8vICAgICBnc2FwLnRvKGltYWdlLCB7XG4vLyAgICAgICB5UGVyY2VudDogLTEwMCAqIGltYWdlLmRhdGFzZXQuc3BlZWQsXG4vLyAgICAgICBlYXNlOiBcIm5vbmVcIixcbi8vICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbi8vICAgICAgICAgc2NydWI6IGltYWdlLmRhdGFzZXQuc3BlZWQsXG4vLyAgICAgICB9LFxuLy8gICAgIH0pO1xuLy8gICB9KTtcbi8vIH1cbi8vIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIFNMSURFUlxuLy8gIOOCueODqeOCpOODgOODvFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8vIGNvbnN0IHNsaWRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmFja1wiKTtcbi8vIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyXCIpO1xuLy8gY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9nLWNhcmRcIik7XG4vLyBjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0X2J0blwiKTtcbi8vIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZpb3VzX2J0blwiKTtcblxuLy8gY29uc3QgZmlyc3RDbG9uZSA9IHNsaWRlc1swXS5jbG9uZU5vZGUodHJ1ZSk7IC8vbm90IHdvcmtpbmcgcm5cbi8vIGNvbnN0IHNlY29uZENsb25lID0gc2xpZGVzWzFdLmNsb25lTm9kZSh0cnVlKTsgLy9ub3Qgd29ya2luZyByblxuXG4vLyBzbGlkZXIuYXBwZW5kKGZpcnN0Q2xvbmUpOyAvL25vdCB3b3JraW5nIHJuXG5cbi8vIGxldCBpbmRleCA9IDA7XG4vLyBjb25zdCBzbGlkZVdpZHRoID0gc2xpZGVzW2luZGV4XS5jbGllbnRXaWR0aDtcblxuLy8gbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICBpbmRleCsrOyAvL2luY3JlYXNlcyB0aGUgaW5kZXggYnkgMVxuLy8gICBpZiAoaW5kZXggPT09IDUpIHtcbi8vICAgICBpbmRleCA9IDA7IC8vaWYgaXRzIGluIHRoZSA1dGggc2xpZGUgaXQgd2lsbCByZXNldCB0byB6ZXJvIHNvIHRoYXQgdGhlIGZpcnN0IHNsaWRlIGlzIHNob3duXG4vLyAgIH1cbi8vICAgdXBkYXRlU2xpZGVQb3NpdGlvbigpO1xuLy8gfSk7XG5cbi8vIHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgaWYgKGluZGV4ID09PSAwKSB7XG4vLyAgICAgaW5kZXggPSA0OyAvL2lmIGl0cyBjdXJyZW50bHkgaW4gdGhlIGZpcnN0IHNsaWRlIGl0IHdpbGwganVtcCB0byB0aGUgbGFzdFxuLy8gICAgIHVwZGF0ZVNsaWRlUG9zaXRpb24oKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICBpbmRleC0tO1xuLy8gICAgIGlmIChpbmRleCA8IDApIHtcbi8vICAgICAgIGluZGV4ID0gc2xpZGVzLmxlbmd0aCAtIDE7XG4vLyAgICAgfVxuLy8gICAgIHVwZGF0ZVNsaWRlUG9zaXRpb24oKTtcbi8vICAgfVxuLy8gfSk7XG5cbi8vIGZ1bmN0aW9uIHVwZGF0ZVNsaWRlUG9zaXRpb24oKSB7XG4vLyAgIGNvbnN0IG9mZnNldCA9IDQ0MCAqIGluZGV4OyAvL29mZiBzZXQgaXMgY2FsY3VsYXRlZCB3aXRoIHRoZSBjYXJkIHNpemUgYW5kIHRoZSBnYXAgKDQwMHB4ICsgNDApXG4vLyAgIHNldEluZGljYXRvcigpO1xuLy8gICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUsIGkpID0+IHtcbi8vICAgICBzbGlkZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke29mZnNldH1weClgO1xuLy8gICB9KTtcbi8vIH1cblxuLy8gLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgIFNMSURFUiBJTkRJQ0FUT1Jcbi8vICAg44K544Op44Kk44OA44O844Gu44Kk44Oz44K444Kx44O844K/44O8XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLy8gY29uc3QgaW5kaWNhdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5kaWNhdG9yXCIpO1xuXG4vLyBjb25zdCBzZXRJbmRpY2F0b3IgPSAoKSA9PiB7XG4vLyAgIGluZGljYXRvcnMuZm9yRWFjaCgoaW5kaWNhdG9yKSA9PiB7XG4vLyAgICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7IC8vcmVtb3ZlIHRoZSBhY3RpdmUgY2xhc3Ncbi8vICAgICBjb25zdCBpbmRpY2F0b3JOdW1iZXIgPSAraW5kaWNhdG9yLmRhdGFzZXQuaW5kaWNhdG9yO1xuLy8gICAgIGlmIChpbmRpY2F0b3JOdW1iZXIgPT09IGluZGV4KSB7XG4vLyAgICAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTsgLy9hZGQgYWN0aXZlIGNsYXNzIHRvIHRoZSBjbGlja2VkIGluZGljYXRvclxuLy8gICAgIH1cbi8vICAgfSk7XG4vLyB9O1xuXG4vLyBpbmRpY2F0b3JzLmZvckVhY2goKGluZGljYXRvcikgPT4ge1xuLy8gICBpbmRpY2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4vLyAgICAgY29uc3QgY2xpY2tlZEluZGljYXRvciA9IGUudGFyZ2V0O1xuLy8gICAgIGluZGV4ID0gcGFyc2VJbnQoY2xpY2tlZEluZGljYXRvci5kYXRhc2V0LmluZGljYXRvcik7IC8vbWFrZSB0aGUgaW5kZXggdGhlIHNhbWUgYXMgdGhlIGNvcmVlc3BvbmRpbmcgaW5kaWNhdG9yXG4vLyAgICAgdXBkYXRlU2xpZGVQb3NpdGlvbigpO1xuLy8gICB9KTtcbi8vIH0pO1xuXG4vLyAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgU01PT1RIIFNDUk9MTCBUTyBUT1Bcbi8vICAg44OI44OD44OX44G444K544Og44O844K544K544Kv44Ot44O844OrXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8vIGFjdGl2YXRlU21vb3RoU2Nyb2xsKCk7XG5cblxuXG4vLyAvL3RyYW5zaXRvcG4gXG5cblxuLy8gZnVuY3Rpb24gZGVsYXkobikge1xuLy8gICBuID0gbiB8fCAyMDAwXG4gIFxuLy8gICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4vLyAgICAgc2V0VGltZW91dChyZXNvbHZlLCBuKVxuLy8gICB9KVxuLy8gfVxuXG5cbi8vIGNvbnN0IGxvYWRpbmdTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhbnNpdGlvbicpO1xuLy8gZnVuY3Rpb24gcGFnZVRyYW5zaXRpb25Jbigpe1xuLy8gICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XG4vLyAgICAgdGwudG8obG9hZGluZ1NjcmVlbiwgeyBkdXJhdGlvbjogMC43LCB4OiAwLCB0cmFuc2Zvcm1PcmlnaW46ICdib3R0b20gbGVmdCd9KVxuLy8gICAgLnRvKGxvYWRpbmdTY3JlZW4sIHsgZHVyYXRpb246IDAuNywgeDpcIi0xMDAlXCIsIHRyYW5zZm9ybU9yaWdpbjogJ2JvdHRvbSBsZWZ0JywgZGVsYXk6IDAuM30pXG4vLyAgICAuc2V0KGxvYWRpbmdTY3JlZW4sIHsgIHg6ICBcIjEwMCVcIn0pXG4gICAgICBcbi8vIH1cblxuLy8gYmFyYmEuaW5pdCh7XG4vLyAgIHN5bmM6dHJ1ZSxcbi8vICAgdHJhbnNpdGlvbnM6W1xuLy8gICAgICAge1xuLy8gICAgICAgICAgIGFzeW5jIGxlYXZlKGRhdGEpe1xuLy8gICAgICAgICAgICAgICBjb25zdCBkb25lID0gdGhpcy5hc3luYygpO1xuLy8gICAgICAgICAgICAgICBwYWdlVHJhbnNpdGlvbkluKCk7XG4gICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICBhd2FpdCBkZWxheSgxMDAwKTtcbi8vICAgICAgICAgICAgICAgZG9uZSgpO1xuLy8gICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgYXN5bmMgZW50ZXIoZGF0YSl7XG4vLyAgICAgICAgICAgICBjb250ZW50QW5pbWF0aW9uKClcbi8vICAgICAgICAgICB9LFxuXG4vLyAgICAgICAgICAgYXN5bmMgb25jZShkYXRhKSB7XG4vLyAgICAgICAgICAgICBjb250ZW50QW5pbWF0aW9uKCk7XG4vLyAgICAgICAgIH0sXG4vLyAgICAgICB9XG4vLyAgIF1cbi8vIH0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9