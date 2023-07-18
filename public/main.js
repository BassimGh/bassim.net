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