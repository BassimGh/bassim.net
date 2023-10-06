var x1 = new Typed('#typeText1', {
    strings: [
        "",
        "cd /Users/bassim <br>"
    ],
    typeSpeed: 5,
    cursorChar: '_',
    showCursor: false,
    
    onComplete: (self) => {
        (function ($) {
            $("#textLine2").show();
        }(jQuery))
        var x2 = new Typed('#typeText2', {
            strings: [
                "",
                "whoami <br>"
            ],
            typeSpeed: 10,
            showCursor: false,
            
            onComplete: (self) => {
                (function ($) {
                    $("#textLine3").show();
                    $("#textLine4").show();
                }(jQuery))
                var x3 = new Typed('#typeText3', {
                    strings: [
                        "",
                        "ls <br>"
                    ],
                    typeSpeed: 10,
                    showCursor: false,
                    onComplete: (self) => {
                        (function ($) {
                            $("#textLine5").show();
                            $("#textLine7").show();
                            $("#termimalText div").removeClass("hidden")
                        }(jQuery))
                    }
                });
            }
        });
    },
});