import "./assets/css/common/reset.css";
import "./assets/css/common/navbar.css";
import "./assets/css/common/footer.css";
import "./assets/css/common/typography.css";
import "./assets/css/common/utility.css";
import "./assets/css/common/animation.css";
import "./assets/css/common/under.css";
import "./assets/css/under/blog.css";

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