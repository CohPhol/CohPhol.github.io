
$(document).ready(function(){
    // Image start
    $('.next-image').click(function(){
        var currentImg = $(this).siblings('.project-images').find('img.active');
        var nextImg = currentImg.next();
        if(nextImg.length){
            currentImg.removeClass('active');
            nextImg.addClass('active');
        }
    });
  
    $('.prev-image').click(function(){
        var currentImg = $(this).siblings('.project-images').find('img.active');
        var prevImg = currentImg.prev();
        if(prevImg.length){
            currentImg.removeClass('active');
            prevImg.addClass('active');
        }
    });
    // Image end

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