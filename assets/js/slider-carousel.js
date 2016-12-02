$(document).ready(function() {
 "use strict";
  $(".slider1").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 3000,
      paginationSpeed : 400,
      singleItem:true,
      pagination:true,
      autoPlay:true,
    navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    addClassActive: true,
    afterMove: previousslide,
    beforeMove: nextslide
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});




// First Slide
$(".owl-item.active .slider-caption").addClass('animated slideInRight');
 
// Other Slides
function previousslide() {
    $(".owl-item.active .slider-caption").addClass('animated slideInRight');
}
function nextslide() {
     $(".owl-item .slider-caption").removeClass('animated slideInRight');
}