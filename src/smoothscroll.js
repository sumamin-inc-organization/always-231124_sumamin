export default function activateSmoothScroll(){
    document.addEventListener('DOMContentLoaded', function() {
        var links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                
                var speed = 500;
                var href = this.getAttribute('href');
                var target = document.querySelector(href === '#' || href === '' ? 'html' : href);
                
                if (!target) return;
                
                var startPosition = window.scrollY;
                var targetPosition = target.getBoundingClientRect().top + window.scrollY;
                var distance = targetPosition - startPosition;
                var startTime = null;
      
                function animation(currentTime) {
                    if (startTime === null) startTime = currentTime;
                    var timeElapsed = currentTime - startTime;
                    var run = ease(timeElapsed, startPosition, distance, speed);
                    window.scrollTo(0, run);
                    if (timeElapsed < speed) requestAnimationFrame(animation);
                }
      
                function ease(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                }
      
                requestAnimationFrame(animation);
            });
        });
      });
      
      
}