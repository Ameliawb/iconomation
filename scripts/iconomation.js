// add icons
$('.playspace').append('<i class="em em-fountain"></i>');
$('.playspace').append('<i class="fa fa-futbol-o"></i>');


// set the initial positions

$('.em-fountain').css({
  top: 200,
  left: 300
});

$('.fa-futbol-o').css({
  top: 210,
  left: 100
});


// play!

$('.em-fountain').animate({
  left: 50
}, 1000);

// after 660ms...
setTimeout(function() {
  // ...move the ball
  $('.fa-futbol-o').animate({
    left: 0
  }, 800, 'easeOutQuart');
}, 660);
