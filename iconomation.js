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