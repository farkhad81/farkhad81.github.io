$(document).ready(function() {
 "use strict";
  $(".testimonial").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 2000,
      paginationSpeed : 400,
      items : 1,
      pagination:false,
      itemsDesktopSmall : true,
      navigationText : ["<i class='icon icon-size-x icon-left-arrow-on-circle'></i>","<i class='icon icon-size-x icon-right-arrow-on-circle'></i>"],
      autoPlay:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

