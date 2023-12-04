/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/notice.js ***!
  \***********************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLmU3NDUxMGI1N2M5ZGQ3ZTZiNzU0LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsUUFBUTtBQUNSLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaURBQWlEO0FBQ2pELGtEQUFrRDs7QUFFbEQsOEJBQThCOztBQUU5QjtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsNkNBQTZDLE9BQU87QUFDcEQsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQSxNQUFNO0FBQ04sSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047OztBQUdBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixvREFBb0Q7QUFDbEYsMkJBQTJCLHFFQUFxRTtBQUNoRyw2QkFBNkIsV0FBVztBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjOztBQUVkO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLElBQUksQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9ub3RpY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9yZXNldC5jc3NcIjtcbi8vIGltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vbmF2YmFyLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi91dGlsaXR5LmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9hc3NldHMvY3NzL2luZGV4L2hlcm8uY3NzXCI7XG4vLyBpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaW5kZXgvbWFpbi5jc3NcIjtcbi8vIGltcG9ydCBcIi4vYXNzZXRzL2Nzcy9pbmRleC9hYm91dC5jc3NcIjtcbi8vIGltcG9ydCBcIi4vYXNzZXRzL2Nzcy9pbmRleC9jYXNlLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9hc3NldHMvY3NzL2luZGV4L3JlYXNvbnMuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvaW5kZXgvZmxvdy5jc3NcIjtcbi8vIGltcG9ydCBcIi4vYXNzZXRzL2Nzcy9pbmRleC9ibG9nLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9hc3NldHMvY3NzL2luZGV4L2NvbnRhY3QuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL2Zvb3Rlci5jc3NcIjtcbi8vIGltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdHlwb2dyYXBoeS5jc3NcIjtcblxuXG4vLyBpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL2FuaW1hdGlvbi5jc3NcIjtcblxuXG4vLyBpbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbi8vIGltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG4vLyBpbXBvcnQgYmFyYmEgZnJvbSAnQGJhcmJhL2NvcmUnO1xuLy8gaW1wb3J0IGFjdGl2YXRlU21vb3RoU2Nyb2xsIGZyb20gXCIuL3Ntb290aHNjcm9sbFwiO1xuXG5cbi8vIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICBDQVNFIFNFQ1RJT04gUEFSQUxMQVggQU5JTUFUSU9OXG4vLyAgIOOCseODvOOCueOCu+OCr+OCt+ODp+ODs+OBruODh+OCs+ODrOODvOOCt+ODp+ODs+OBq+WvvuOBmeOCi+ODkeODqeODqeODg+OCr+OCueOCouODi+ODoeODvOOCt+ODp+ODs1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8vIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbi8vIC8vIGxldCBpbWFnZXMgPSBnc2FwLnV0aWxzLnRvQXJyYXkoXCIuY2FzZS1kZWNvclwiKTtcblxuLy8gLy8gaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4vLyAvLyAgIGdzYXAudG8oaW1hZ2UsIHtcbi8vIC8vICAgICB5UGVyY2VudDogLTEwMCAqIGltYWdlLmRhdGFzZXQuc3BlZWQsXG4vLyAvLyAgICAgZWFzZTogXCJub25lXCIsXG4vLyAvLyAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuLy8gLy8gICAgICAgc2NydWI6IGltYWdlLmRhdGFzZXQuc3BlZWQsXG4vLyAvLyAgICAgfSxcbi8vIC8vICAgfSk7XG4vLyAvLyB9KTtcblxuLy8gZnVuY3Rpb24gY29udGVudEFuaW1hdGlvbigpe1xuLy8gICBsZXQgaW1hZ2VzID0gZ3NhcC51dGlscy50b0FycmF5KFwiLmNhc2UtZGVjb3JcIik7XG5cbi8vICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4vLyAgICAgZ3NhcC50byhpbWFnZSwge1xuLy8gICAgICAgeVBlcmNlbnQ6IC0xMDAgKiBpbWFnZS5kYXRhc2V0LnNwZWVkLFxuLy8gICAgICAgZWFzZTogXCJub25lXCIsXG4vLyAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4vLyAgICAgICAgIHNjcnViOiBpbWFnZS5kYXRhc2V0LnNwZWVkLFxuLy8gICAgICAgfSxcbi8vICAgICB9KTtcbi8vICAgfSk7XG4vLyB9XG4vLyAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICBTTElERVJcbi8vICDjgrnjg6njgqTjg4Djg7xcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vLyBjb25zdCBzbGlkZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJhY2tcIik7XG4vLyBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlclwiKTtcbi8vIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZy1jYXJkXCIpO1xuLy8gY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dF9idG5cIik7XG4vLyBjb25zdCBwcmV2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmV2aW91c19idG5cIik7XG5cbi8vIGNvbnN0IGZpcnN0Q2xvbmUgPSBzbGlkZXNbMF0uY2xvbmVOb2RlKHRydWUpOyAvL25vdCB3b3JraW5nIHJuXG4vLyBjb25zdCBzZWNvbmRDbG9uZSA9IHNsaWRlc1sxXS5jbG9uZU5vZGUodHJ1ZSk7IC8vbm90IHdvcmtpbmcgcm5cblxuLy8gc2xpZGVyLmFwcGVuZChmaXJzdENsb25lKTsgLy9ub3Qgd29ya2luZyByblxuXG4vLyBsZXQgaW5kZXggPSAwO1xuLy8gY29uc3Qgc2xpZGVXaWR0aCA9IHNsaWRlc1tpbmRleF0uY2xpZW50V2lkdGg7XG5cbi8vIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgaW5kZXgrKzsgLy9pbmNyZWFzZXMgdGhlIGluZGV4IGJ5IDFcbi8vICAgaWYgKGluZGV4ID09PSA1KSB7XG4vLyAgICAgaW5kZXggPSAwOyAvL2lmIGl0cyBpbiB0aGUgNXRoIHNsaWRlIGl0IHdpbGwgcmVzZXQgdG8gemVybyBzbyB0aGF0IHRoZSBmaXJzdCBzbGlkZSBpcyBzaG93blxuLy8gICB9XG4vLyAgIHVwZGF0ZVNsaWRlUG9zaXRpb24oKTtcbi8vIH0pO1xuXG4vLyBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgIGlmIChpbmRleCA9PT0gMCkge1xuLy8gICAgIGluZGV4ID0gNDsgLy9pZiBpdHMgY3VycmVudGx5IGluIHRoZSBmaXJzdCBzbGlkZSBpdCB3aWxsIGp1bXAgdG8gdGhlIGxhc3Rcbi8vICAgICB1cGRhdGVTbGlkZVBvc2l0aW9uKCk7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgaW5kZXgtLTtcbi8vICAgICBpZiAoaW5kZXggPCAwKSB7XG4vLyAgICAgICBpbmRleCA9IHNsaWRlcy5sZW5ndGggLSAxO1xuLy8gICAgIH1cbi8vICAgICB1cGRhdGVTbGlkZVBvc2l0aW9uKCk7XG4vLyAgIH1cbi8vIH0pO1xuXG4vLyBmdW5jdGlvbiB1cGRhdGVTbGlkZVBvc2l0aW9uKCkge1xuLy8gICBjb25zdCBvZmZzZXQgPSA0NDAgKiBpbmRleDsgLy9vZmYgc2V0IGlzIGNhbGN1bGF0ZWQgd2l0aCB0aGUgY2FyZCBzaXplIGFuZCB0aGUgZ2FwICg0MDBweCArIDQwKVxuLy8gICBzZXRJbmRpY2F0b3IoKTtcbi8vICAgc2xpZGVzLmZvckVhY2goKHNsaWRlLCBpKSA9PiB7XG4vLyAgICAgc2xpZGUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtvZmZzZXR9cHgpYDtcbi8vICAgfSk7XG4vLyB9XG5cbi8vIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICBTTElERVIgSU5ESUNBVE9SXG4vLyAgIOOCueODqeOCpOODgOODvOOBruOCpOODs+OCuOOCseODvOOCv+ODvFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8vIGNvbnN0IGluZGljYXRvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmluZGljYXRvclwiKTtcblxuLy8gY29uc3Qgc2V0SW5kaWNhdG9yID0gKCkgPT4ge1xuLy8gICBpbmRpY2F0b3JzLmZvckVhY2goKGluZGljYXRvcikgPT4ge1xuLy8gICAgIGluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpOyAvL3JlbW92ZSB0aGUgYWN0aXZlIGNsYXNzXG4vLyAgICAgY29uc3QgaW5kaWNhdG9yTnVtYmVyID0gK2luZGljYXRvci5kYXRhc2V0LmluZGljYXRvcjtcbi8vICAgICBpZiAoaW5kaWNhdG9yTnVtYmVyID09PSBpbmRleCkge1xuLy8gICAgICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7IC8vYWRkIGFjdGl2ZSBjbGFzcyB0byB0aGUgY2xpY2tlZCBpbmRpY2F0b3Jcbi8vICAgICB9XG4vLyAgIH0pO1xuLy8gfTtcblxuLy8gaW5kaWNhdG9ycy5mb3JFYWNoKChpbmRpY2F0b3IpID0+IHtcbi8vICAgaW5kaWNhdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuLy8gICAgIGNvbnN0IGNsaWNrZWRJbmRpY2F0b3IgPSBlLnRhcmdldDtcbi8vICAgICBpbmRleCA9IHBhcnNlSW50KGNsaWNrZWRJbmRpY2F0b3IuZGF0YXNldC5pbmRpY2F0b3IpOyAvL21ha2UgdGhlIGluZGV4IHRoZSBzYW1lIGFzIHRoZSBjb3JlZXNwb25kaW5nIGluZGljYXRvclxuLy8gICAgIHVwZGF0ZVNsaWRlUG9zaXRpb24oKTtcbi8vICAgfSk7XG4vLyB9KTtcblxuLy8gLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgIFNNT09USCBTQ1JPTEwgVE8gVE9QXG4vLyAgIOODiOODg+ODl+OBuOOCueODoOODvOOCueOCueOCr+ODreODvOODq1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vLyBhY3RpdmF0ZVNtb290aFNjcm9sbCgpO1xuXG5cblxuLy8gLy90cmFuc2l0b3BuIFxuXG5cbi8vIGZ1bmN0aW9uIGRlbGF5KG4pIHtcbi8vICAgbiA9IG4gfHwgMjAwMFxuICBcbi8vICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuLy8gICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbilcbi8vICAgfSlcbi8vIH1cblxuXG4vLyBjb25zdCBsb2FkaW5nU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYW5zaXRpb24nKTtcbi8vIGZ1bmN0aW9uIHBhZ2VUcmFuc2l0aW9uSW4oKXtcbi8vICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSgpO1xuLy8gICAgIHRsLnRvKGxvYWRpbmdTY3JlZW4sIHsgZHVyYXRpb246IDAuNywgeDogMCwgdHJhbnNmb3JtT3JpZ2luOiAnYm90dG9tIGxlZnQnfSlcbi8vICAgIC50byhsb2FkaW5nU2NyZWVuLCB7IGR1cmF0aW9uOiAwLjcsIHg6XCItMTAwJVwiLCB0cmFuc2Zvcm1PcmlnaW46ICdib3R0b20gbGVmdCcsIGRlbGF5OiAwLjN9KVxuLy8gICAgLnNldChsb2FkaW5nU2NyZWVuLCB7ICB4OiAgXCIxMDAlXCJ9KVxuICAgICAgXG4vLyB9XG5cbi8vIGJhcmJhLmluaXQoe1xuLy8gICBzeW5jOnRydWUsXG4vLyAgIHRyYW5zaXRpb25zOltcbi8vICAgICAgIHtcbi8vICAgICAgICAgICBhc3luYyBsZWF2ZShkYXRhKXtcbi8vICAgICAgICAgICAgICAgY29uc3QgZG9uZSA9IHRoaXMuYXN5bmMoKTtcbi8vICAgICAgICAgICAgICAgcGFnZVRyYW5zaXRpb25JbigpO1xuICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgYXdhaXQgZGVsYXkoMTAwMCk7XG4vLyAgICAgICAgICAgICAgIGRvbmUoKTtcbi8vICAgICAgICAgICB9LFxuLy8gICAgICAgICAgIGFzeW5jIGVudGVyKGRhdGEpe1xuLy8gICAgICAgICAgICAgY29udGVudEFuaW1hdGlvbigpXG4vLyAgICAgICAgICAgfSxcblxuLy8gICAgICAgICAgIGFzeW5jIG9uY2UoZGF0YSkge1xuLy8gICAgICAgICAgICAgY29udGVudEFuaW1hdGlvbigpO1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgfVxuLy8gICBdXG4vLyB9KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==