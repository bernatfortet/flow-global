(function() {
  var checkPasswordAndGo, getHeight, init, onExpand, parllax;

  $(document).ready(function() {
    $('.more-button').on('click', onExpand);
    $('.password form').on('submit', function(event) {
      var password;
      password = $(event.target).find('input').val();
      checkPasswordAndGo(password);
      return event.preventDefault();
    });
    $('.password .button').on('click', function(event) {
      var password;
      password = $(event.target).parent().find('input').val();
      checkPasswordAndGo(password);
      return event.preventDefault();
    });
    return setTimeout(function() {
      if (window.location.origin === "http://localhost:9000" || window.location.hash === '#pass') {
        return init();
      }
    }, 5500);
  });

  checkPasswordAndGo = function(password) {
    if (password === '123flow' || password === '456arc') {
      return init();
    }
  };

  init = function() {
    $('.password').fadeOut(400);
    $('body').removeClass('protected');
    parllax();
    return jQuery(window).trigger('resize').trigger('scroll');
  };

  onExpand = function() {
    var moreButton, moreSection;
    moreButton = $(this);
    moreSection = $(this).parent().find('.more');
    if (moreSection.height() === 0) {
      moreButton.addClass('expanded');
      moreSection.css('height', 'auto');
      $('html, body').animate({
        scrollTop: moreSection.offset().top
      }, 300);
      $(this).html('Less');
      return jQuery(window).trigger('resize').trigger('scroll');
    } else {
      $('html, body').animate({
        scrollTop: $(this).parent().offset().top - $(window).outerHeight() / 2
      }, 600, function() {
        return moreSection.animate({
          'height': 0
        }, 150, function() {
          return jQuery(window).trigger('resize').trigger('scroll');
        });
      });
      moreButton.removeClass('expanded');
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
