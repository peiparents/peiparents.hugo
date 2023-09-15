$(document).ready(function() {
  "use strict";
  // Scroll to top
  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  // Smooth scroll
  $('a.scroll-to').on('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 700);
    event.preventDefault();
  });

  $('.site-opinion-item').on('mouseenter', function(){
    $('.site-opinion-item').addClass('inactive');
    $(this).removeClass('inactive').addClass('active');
  });
  $('.site-opinion-item').on('mouseleave', function(){
    $('.site-opinion-item').removeClass('inactive');
    $('.site-opinion-item').removeClass('active');
  });
});

$(window).on('scroll', function () {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 100) {
    $('.site-navigation').addClass('nav-bg');
  } else {
    $('.site-navigation').removeClass('nav-bg');
  }
});
