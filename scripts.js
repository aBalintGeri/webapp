  jQuery.fn.exists = function() {
      return this.length > 0;
  }

  $(".loaderPage").show();

  $(window).one("load", function() {
      // betöltő képernyő eltüntetése
      $(".loaderPage").hide();
  });


  var currentIndex = 1;

  function slides(index) {
      // alert("működöm " + index);
      currentIndex += index;
      showSlide(currentIndex);
  }

  function showSlide(index) {
      var slides = $('.imgClass');

      for (var i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }

      if (index < 1) {
          index = 1
      } else if (index > slides.length) {
          index = slides.length;
      }

      currentIndex = index;
      slides[index - 1].style.display = "block";
  }