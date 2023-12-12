/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/blog.js ***!
  \*********************/
// import "./assets/css/common/reset.css";
// import "./assets/css/common/navbar.css";
// import "./assets/css/common/footer.css";
// import "./assets/css/common/typography.css";
// import "./assets/css/common/utility.css";
// import "./assets/css/common/animation.css";
// import "./assets/css/common/under.css";
// import "./assets/css/under/blog.css";

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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5lZTNmODNjNDcxY2U3YmU0OGJjZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Fsd2F5cy0yMzExMjRfc3VtYW1pbi8uL3NyYy9ibG9nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vcmVzZXQuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL25hdmJhci5jc3NcIjtcbi8vIGltcG9ydCBcIi4vYXNzZXRzL2Nzcy9jb21tb24vZm9vdGVyLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi90eXBvZ3JhcGh5LmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi91dGlsaXR5LmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9hc3NldHMvY3NzL2NvbW1vbi9hbmltYXRpb24uY3NzXCI7XG4vLyBpbXBvcnQgXCIuL2Fzc2V0cy9jc3MvY29tbW9uL3VuZGVyLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9hc3NldHMvY3NzL3VuZGVyL2Jsb2cuY3NzXCI7XG5cbnZhciBtb3JlTnVtID0gNjtcbiQoJy5ibG9nX2NvbnRlbnQ6bnRoLWNoaWxkKG4gKyAnICsgKG1vcmVOdW0gKyAxKSArICcpJykuYWRkQ2xhc3MoJ2lzLWhpZGRlbicpO1xuJCgnLnNlY3Rpb25fYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgJCgnLmJsb2dfY29udGVudC5pcy1oaWRkZW4nKS5zbGljZSgwLCBtb3JlTnVtKS5yZW1vdmVDbGFzcygnaXMtaGlkZGVuJyk7XG4gICAgaWYgKCQoJy5ibG9nX2NvbnRlbnQuaXMtaGlkZGVuJykubGVuZ3RoID09IDApIHtcbiAgICAgICAgJCgnLnNlY3Rpb25fYnRuJykuZmFkZU91dCgpO1xuICAgIH0gXG59KTtcbiQoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxpc3QgPSAkKFwiLmJsb2dfaW5uZXIgLmJsb2dfY29udGVudFwiKS5sZW5ndGg7ICBcbiAgICBpZiAobGlzdCA8IG1vcmVOdW0pIHtcbiAgICAgICAgJCgnLnNlY3Rpb25fYnRuJykuYWRkQ2xhc3MoJ2lzLWJ0bi1oaWRkZW4nKTtcbiAgICB9XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=