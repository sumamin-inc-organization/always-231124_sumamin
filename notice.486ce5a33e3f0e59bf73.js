/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/notice.js ***!
  \***********************/
// import "./assets/css/common/reset.css";
// import "./assets/css/common/navbar.css";
// import "./assets/css/common/footer.css";
// import "./assets/css/common/typography.css";
// import "./assets/css/common/utility.css";
// import "./assets/css/common/animation.css";
// import "./assets/css/common/under.css";
// import "./assets/css/under/notice.css";

var moreNum = 10;
$('.news_items:nth-child(n + ' + (moreNum + 1) + ')').addClass('is-hidden');
$('.section_btn').on('click', function() {
    $('.news_items.is-hidden').slice(0, moreNum).removeClass('is-hidden');
    if ($('.news_items.is-hidden').length == 0) {
        $('.section_btn').fadeOut();
    } 
});
$(function() {
    var list = $(".news_content .news_items").length;  
    if (list < moreNum) {
        $('.section_btn').addClass('is-btn-hidden');
    }
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLjQ4NmNlNWEzM2UzZjBlNTliZjczLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWx3YXlzLTIzMTEyNF9zdW1hbWluLy4vc3JjL25vdGljZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3Jlc2V0LmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9uYXZiYXIuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL2Zvb3Rlci5jc3NcIjtcbi8vIGltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdHlwb2dyYXBoeS5jc3NcIjtcbi8vIGltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vdXRpbGl0eS5jc3NcIjtcbi8vIGltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vYW5pbWF0aW9uLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi91bmRlci5jc3NcIjtcbi8vIGltcG9ydCBcIi4vYXNzZXRzL2Nzcy91bmRlci9ub3RpY2UuY3NzXCI7XG5cbnZhciBtb3JlTnVtID0gMTA7XG4kKCcubmV3c19pdGVtczpudGgtY2hpbGQobiArICcgKyAobW9yZU51bSArIDEpICsgJyknKS5hZGRDbGFzcygnaXMtaGlkZGVuJyk7XG4kKCcuc2VjdGlvbl9idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKCcubmV3c19pdGVtcy5pcy1oaWRkZW4nKS5zbGljZSgwLCBtb3JlTnVtKS5yZW1vdmVDbGFzcygnaXMtaGlkZGVuJyk7XG4gICAgaWYgKCQoJy5uZXdzX2l0ZW1zLmlzLWhpZGRlbicpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICQoJy5zZWN0aW9uX2J0bicpLmZhZGVPdXQoKTtcbiAgICB9IFxufSk7XG4kKGZ1bmN0aW9uKCkge1xuICAgIHZhciBsaXN0ID0gJChcIi5uZXdzX2NvbnRlbnQgLm5ld3NfaXRlbXNcIikubGVuZ3RoOyAgXG4gICAgaWYgKGxpc3QgPCBtb3JlTnVtKSB7XG4gICAgICAgICQoJy5zZWN0aW9uX2J0bicpLmFkZENsYXNzKCdpcy1idG4taGlkZGVuJyk7XG4gICAgfVxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9