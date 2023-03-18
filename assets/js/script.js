
$(document).ready(function(){
    const carouselContainer = $(".carousel-container");
    const carouselItems = $(".carousel-item");
    const carouselPrevBtn = $(".carousel-prev");
    const carouselNextBtn = $(".carousel-next");
    const indicators = $(".carousel-indicators button");
    let activeIndex = 0;
    let intervalId;
    // initialize the carousel
    function initCarousel() {
        // show the first item and set the active class
        carouselItems.eq(activeIndex).show().addClass("active");
        // add a click event listener to the indicators
        indicators.on("click", function() {
          // get the index of the clicked indicator
          const clickedIndex = $(this).index();
          // remove the active class from the current item
          carouselItems.eq(activeIndex).removeClass("active").fadeOut(500);
          // add the active class to the clicked item
          carouselItems.eq(clickedIndex).addClass("active").fadeIn(500);

          // update the active index
          activeIndex = clickedIndex;
          // restart the carousel interval
          clearInterval(intervalId);
          intervalId = setInterval(nextSlide, 5000);
        });
      
        // add a click event listener to the prev button
        carouselPrevBtn.on("click", prevSlide);
        // add a click event listener to the next button
        carouselNextBtn.on("click", nextSlide);
        // start the carousel interval
        intervalId = setInterval(nextSlide, 5000);
    }   
    
    //   show the previous slide
    function prevSlide() {
        // remove the active class from the current item
        carouselItems.eq(activeIndex).removeClass("active").fadeOut(500);
        // update the active index
        activeIndex--;
        
        // if the active index is less than 0, set it to the last item
        if (activeIndex < 0) {
          activeIndex = carouselItems.length - 1;
        }
      
        // add the active class to the previous item
        carouselItems.eq(activeIndex).addClass("active").fadeIn(500);
        // update the indicators
        updateIndicators();
    }
  
    // show the next slide
    function nextSlide() {
      // remove the active class from the current item
      carouselItems.eq(activeIndex).removeClass("active").fadeOut(500);
      // update the active index
      activeIndex++;
      // if the active index is greater than or equal to the number of items, set it to 0
      if (activeIndex >= carouselItems.length) {
        activeIndex = 0;
      }
      // add the active class to the next item
      carouselItems.eq(activeIndex).addClass("active").fadeIn(500);
      // update the indicators
      updateIndicators();
    }
  
    // update the indicators
    function updateIndicators() {
      // remove the active class from all indicators
      indicators.removeClass("active");
    
      // add the active class to the indicator for the current item
      indicators.eq(activeIndex).addClass("active");
    }
  
    // initialize the carousel
    initCarousel();


    // Progress bar
    $('.progress-bar').each(function() {
        var $circle = $(this);
        var percentage = parseInt($circle.parent().find('.progress-num').text());
        var radius = $circle.attr('r');
        var circumference = 2 * Math.PI * radius;
        var offset = circumference - percentage / 100 * circumference;
        $circle.css({'stroke-dasharray': circumference + ' ' + circumference, 'stroke-dashoffset': offset});
    });
});