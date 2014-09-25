$(document).ready(function() {
    $(".button").click(function() {
        $("#green").animate({
            height: "200px"
        });
        $("#blue").animate({
            height: "300px"
        });
        $("#red").animate({
            height: "400px"
        });
    });
        $(".button2").click(function() {
        $(".box").animate({
            height: '50px',
            width: '200px'
        });
    });

    $(".button3").click(function() {
        $("#green").animate({
            width: "400px"
        });
        $("#blue").animate({
            width: "500px"
        });
        $("#red").animate({
            width: "600px"
        });
    });
    $(".button4").click(function() {
        $(".box").animate({
            height: '200px',
            width: '50px'
        });
    });
    $(".button6").click(function() {
        $('.box').removeAttr('style'); 
    }); 
        $(".button5").click(function() {
            $(".box").css({ opacity: 0.7 });
            var h = $(window).height()-100;
            var w = $(window).width()-100;
            $('.box').each(function() {
                var originalOffset = $(this).position(),
                    $this = $(this),
                    tLeft = w - Math.floor(Math.random() * 900),
                    tTop = h - Math.floor(Math.random() * 900);

                $(this).animate({
                    "left": tLeft,
                    "top": tTop
                }, 3500, function() {
                    $this.animate({
                        "left": originalOffset.left,
                        "top": originalOffset.top
                    }, 2000);
                });
            });
        });
    });


