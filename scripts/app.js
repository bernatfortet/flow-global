(function() {
  var getHeight, onExpand, onPassword, parllax;

  $(document).ready(function() {
    parllax();
    $('.more-button').on('click', onExpand);
    return $('.password form').on('submit', onPassword);
  });

  onPassword = function(event) {
    var password;
    console.log($(event.target));
    password = $(event.target).find('input').val();
    if (password === 'flow123') {
      $('.password').fadeOut(400);
    }
    return event.preventDefault();
  };

  onExpand = function() {
    var more;
    more = $(this).parent().find('.more');
    if (more.height() === 0) {
      more.css('height', 'auto');
      $('html, body').animate({
        scrollTop: more.offset().top
      }, 300);
      $(this).html('Less');
      return jQuery(window).trigger('resize').trigger('scroll');
    } else {
      $('html, body').animate({
        scrollTop: $(this).parent().offset().top - $(window).outerHeight() / 2
      }, 600, function() {
        return more.animate({
          'height': 0
        }, 150, function() {
          return jQuery(window).trigger('resize').trigger('scroll');
        });
      });
      return $(this).html('More');
    }
  };

  parllax = function() {
    var i, j, results;
    $('.parallax-window').css('height', getHeight());
    results = [];
    for (i = j = 1; j <= 4; i = ++j) {
      console.log($(".parallax-window.r" + i));
      results.push($(".parallax-window.r" + i).parallax({
        imageSrc: "./images/row_" + i + ".jpg",
        naturalWidth: 3096,
        naturalHeight: 1000,
        speed: 0.8,
        bleed: 5,
        positonY: 0,
        zIndex: 20
      }));
    }
    return results;
  };

  getHeight = function() {
    var isMobile;
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) {
      return $(window).outerHeight() / 1.8;
    } else {
      return $(window).outerHeight() / 4;
    }
  };

}).call(this);
