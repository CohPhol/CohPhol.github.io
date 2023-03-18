
$(document).ready(function() {
    $('.next-image').click(function() {
        var currentImg = $(this).siblings('.project-images').find('img.active');
        var nextImg = currentImg.next();
        if(nextImg.length) {
            currentImg.removeClass('active');
            nextImg.addClass('active');
        }
    });
  
    $('.prev-image').click(function() {
        var currentImg = $(this).siblings('.project-images').find('img.active');
        var prevImg = currentImg.prev();
        if (prevImg.length) {
            currentImg.removeClass('active');
            prevImg.addClass('active');
        }
    });
});