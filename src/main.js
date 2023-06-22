$(function () {

    new Typed('.cursor', {
        strings: [""],
        typeSpeed: 5,
        cursorChar: '_',
    });

    let typed;
    let choice;
    $(".sections span").hover(function () {
        if ($(this).is('#projects')) {
            $(this).prev().css('left', "-35px");
            choice = "projects";
        } 
        if ($(this).is('#experience')) {
            $(this).prev().css('left', "-35px");
            choice = "experience";
        } 
        if ($(this).is('#education')) {
            $(this).prev().css('left', "-35px");
            choice = "education";
        } 

        typed = new Typed('.typeText5', {
            strings: [choice, ""],
            typeSpeed: 10,
            backSpeed: 10,
            showCursor: false,
            onStringTyped: (arrayPos, self) => {
                if (arrayPos == 0) typed.stop();
            },
        });
        }, function () {
            typed.start();
            $(".sections i").css('left', '-50px');
        }
    );

    $(".sections span").click(function (e) {
        var container = $('html, body');
        var position;
        
        // if ($(this).is('#projects')) position = $('.projects').offset().top;
        // if ($(this).is('#experience')) position = $('.experience').offset().top;
        // if ($(this).is('#education')) position = $('.education').offset().top;


        if ($(this).is('#projects')) position = 820;
        if ($(this).is('#experience')) position = 2150;
        if ($(this).is('#education')) position = 2540;

        // console.log('scrolling');
        // container.animate({
        //         scrollTop: position
        //     }, 1000, function () { 
        //         container.animate({scrollTop: position}, 500);
        //         console.log('scrollinggg');
        //     });
        // });

        container.animate( {scrollTop: position, }, 1000);
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