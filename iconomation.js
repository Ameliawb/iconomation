$(document).ready(function() {
$(".button").click(function() {
    $(".green").animate({
        height: "200px"
    });
    $(".blue").animate({
        height: "300px"
    });
    $(".red").animate({
        height: "400px"
    });
});
$(".button2").click(function() {
    $("div").animate({
        width: "100px"
    });
    $("div").animate({
        height: "100px"
    });
});

$(".button3").click(function() {
    $(".green").animate({
        width: "400px"
    });
    $(".blue").animate({
        width: "500px"
    });
    $(".red").animate({
        width: "600px"
    });
});
$(".button4").click(function() {
    $("div").animate({
        height: '150px',
        width: '150px'
    });
});
$(".button5").click(function() {
    $("div").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });
    $(".green").animate({
        left: '650px',
    });
     $(".red").animate({
        left: '150px',
    });
     $(".blue").animate({
        right: '150px',
    });
    $(".button6").click(function() {
    $("div").animate({
        left: '0px',
        opacity: '1',
        height: '100px',
        width: '100px'
    });
    
});
    });
});


function moveDiv() {
    var $div = $("#random");
    
    $div.fadeOut(1000, function() {
        var maxLeft = $(window).width() - $div.width();
        var maxTop = $(window).height() - $div.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1))
     
        $div.css({ left: leftPos, top: topPos }).fadeIn(1000);
    });
};

moveDiv();
setInterval(moveDiv, 5000);