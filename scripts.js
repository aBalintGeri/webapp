  jQuery.fn.exists = function() {
    return this.length > 0;
  }
  
  $(".loaderPage").show();

  $(window).one("load", function() {
    // betöltő képernyő eltüntetése
    $(".loaderPage").hide();
  });