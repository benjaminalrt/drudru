! function ($) {
  $(document).ready(function () {
    (function () {

      var mainnav = $('.site-header');
      if (mainnav.length) {
        var elmHeight = $('.site-header').outerHeight(true) / 2;
        $(window).scroll(function () {

          var scrolltop = $(window).scrollTop();
          if (scrolltop > elmHeight) {
            if (!mainnav.hasClass('site-header-shrink')) {
              mainnav.addClass('site-header-shrink');
            }

          } else {
            mainnav.removeClass('site-header-shrink');
          }
        })
      }
    })();
  })
}(jQuery);
