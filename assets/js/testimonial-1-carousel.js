$(document).ready(function() {
 "use strict";
  $(".testimonial-1").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 2000,
      paginationSpeed : 400,
      items : 2,
      pagination:true,
      itemsDesktopSmall : true,
      autoPlay:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

