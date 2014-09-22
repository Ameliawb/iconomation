// add icons
$('.playspace').append('<i class="em em-fountain"></i>');
$('.playspace').append('<i class="em em-goat"></i>');


// set the initial positions

$('.em-fountain').css({
  top: 100,
  left: 300
});

$('.em-goat').css({
  top: 110,
  left: 100
});


// play!

$('.em-fountain').animate({
  left: 70
}, 1000);

// after 660ms...
setTimeout(function() {
  // ...move the ball
  $('.em-goat').animate({
    right: 200
  }, 800, 'easeOutQuart');
}, 1000);
