jQuery(function () {
  initMobileNav();
  initSlickCarousel();
  initSticky();
  initScrollToTop();
  initScrollToDiv();
  animate();
});

//mobile menu init

function initMobileNav() {
  jQuery(".nav-opener").on("click", function () {
    if (jQuery(window).width() < 767) {
      jQuery(".main-nav").slideToggle("medium");
    }
  });
}

//slick carousel init

function initSlickCarousel() {
  jQuery(".testimonial-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrow: true,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}

//sticky init

function initSticky() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });
}

//scrolltodiv init

function initScrollToDiv() {
  jQuery(window).scroll(function () {
    jQuery("section").each(function () {
      var sectionTop = jQuery(this).offset().top;
      if (jQuery(window).scrollTop() >= sectionTop - 150) {
        sectionID = jQuery(this).attr("id");

        jQuery(".main-nav__nav li").each(function () {
          var navHref = jQuery(this).children("a").attr("href");
          if (navHref === "#" + sectionID) {
            jQuery(".main-nav__nav li").removeClass("active");
            jQuery(this).addClass("active");
          }
        });
      }
    });
  });
}

function animate() {
  // jQuery(window).scroll(function () {
  //   jQuery("section").each(function () {
  //     var sectionTop = jQuery(this).offset().top;
  //     if (jQuery(window).scrollTop() >= sectionTop) {
  //       jQuery(this).addClass("animation");
  //     }
  //   });
  // });

  $(".main-nav__nav li a[href^='#']").on("click", function (e) {
    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top + 80,
      },

      function () {
        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
      }
    );
  });
}

//scrolltotop init

function initScrollToTop() {
  var isWindowsPhone = /Windows Phone/.test(navigator.userAgent);
  var scrollDuration = 1000;
  var scrollElement = jQuery("html, body");
  var animSpeed = 400;
  var doc = jQuery(document);
  var win = jQuery(window);
  jQuery(".go-to-top").each(function () {
    var button = jQuery(this).hide();
    win.on("load scroll orientationchange resize", function () {
      if (win.scrollTop() > 450) {
        button.stop().fadeIn(animSpeed);
      } else {
        button.stop().fadeOut(animSpeed);
      }
    });

    button.on("click", function (e) {
      e.preventDefault();
      var topOffset = 0;

      if (isWindowsPhone) {
        window.scrollTo(window.scrollLeft, topOffset);
      } else {
        scrollElement.stop().animate(
          {
            scrollTop: topOffset,
          },
          scrollDuration
        );
      }
    });
  });
}
