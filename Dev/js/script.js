$(function(){

// Repetition des animations
  var $body = $('body');
  var $box = $('.box');
 for (var i = 0; i < 20; i++) {
 $box.clone().appendTo($body);
   }

// Helper function for add element box list in WOW
WOW.prototype.addBox = function(element) {
this.boxes.push(element);
};

// Init WOW.js and get instance
var wow = new WOW();
wow.init();

// Attach scrollSpy to .wow elements for detect view exit events,
// then reset elements and add again for animation
$('.wow').on('scrollSpy:exit', function() {
$(this).css({
'visibility': 'hidden',
'animation-name': 'none'
}).removeClass('animated');
wow.addBox(this);
}).scrollSpy();

wow = new WOW(
    {
     boxClass:     'wow',      // default
     animateClass: 'animated', // default
     offset:       0,          // default
    mobile:       true,       // default
     live:         true        // default
    }
)
wow.init();
//fin de la repetition des animations

});