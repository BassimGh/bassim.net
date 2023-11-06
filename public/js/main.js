// Lazy loading
document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
  
    if ("IntersectionObserver" in window) {
      var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(video) {
          if (video.isIntersecting) {
            for (var source in video.target.children) {
              var videoSource = video.target.children[source];
              if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                videoSource.src = videoSource.dataset.src;
              }
            }
  
            video.target.load();
            video.target.classList.remove("lazy");
            lazyVideoObserver.unobserve(video.target);
          }
        });
      });
  
      lazyVideos.forEach(function(lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
  });

$(function () {

    console.log("test");
    $(".navMenu li").hover(function() {
        $(this).find("i").css('transform', 'translateX(3px)');
    }, function() {
        $(this).find("i").css('transform', 'translateX(-3px)');
    }
    );

    $(".navMenu li").click(function() {
        if ($(this).is("#navTools"))
            document.getElementById("tools").scrollIntoView();
        if ($(this).is("#navProjects"))
            document.getElementById("projects").scrollIntoView();
        if ($(this).is("#navExperience"))
            document.getElementById("experience").scrollIntoView();
        if ($(this).is("#navContact"))
            document.getElementById("contact").scrollIntoView();
    });

    scrollAnimations();
    window.addEventListener("scroll", scrollAnimations);
    function scrollAnimations() {
        console.log($('html, body').scrollTop());
        var animationItems = document.querySelectorAll(".holdAnimation");
        for (var i = 0; i < animationItems.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = animationItems[i].getBoundingClientRect().top;
            if (elementTop < windowHeight / 2 + 200) {
                animationItems[i].classList.remove("holdAnimation");
            }
        }
    }
});