
$(document).ready(function(){

  $(".hamburger").click(function() {
    $(this).toggleClass("active");
    $(".nav-menu").toggleClass("active");
  });

  $(".nav-item").click(function() {
    $(".hamburger").removeClass("active");
    $(".nav-menu").removeClass("active");
  });

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