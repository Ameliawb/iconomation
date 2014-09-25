$(document).ready(function() {
        $("#button").click(function() {
            $(".box").animate({
                height: "300px"
            });
        });
        $("#button2").click(function() {
            $(".box").animate({
                height: "100px"
            });
        });