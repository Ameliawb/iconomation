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
        $(".box").animate({
            height: '150px',
            width: '150px'
        });
    }); 
        $(".button5").click(function() {
            var h = $(window).height();
            var w = $(window).width();
            $('.box').each(function() {
                var originalOffset = $(this).position(),
                    $this = $(this),
                    tLeft = w - Math.floor(Math.random() * 900),
                    tTop = h - Math.floor(Math.random() * 900);

                $(this).animate({
                    "left": tLeft,
                    "top": tTop
                }, 5000, function() {
                    $this.animate({
                        "left": originalOffset.left,
                        "top": originalOffset.top
                    }, 5000);
                });
            });
        });
    });


