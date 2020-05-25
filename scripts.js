  jQuery.fn.exists = function() {
      return this.length > 0;
  }

  $(".loaderPage").show();

  $(window).one("load", function() {
      // betöltő képernyő eltüntetése
      $(".loaderPage").hide();
  });


  var currentIndex = 1;
  var lastIndex = 1;

  function slides(index) {
      lastIndex = currentIndex;
      currentIndex += index;
      showSlide(currentIndex);
  }

  function selectSlide(index) {
      lastIndex = currentIndex;
      currentIndex = index;
      showSlide(index);
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
      $(`#thumbImg${lastIndex}`).removeClass("thumbActive");
      $(`#thumbImg${currentIndex}`).addClass("thumbActive");
      slides[index - 1].style.display = "block";
  }