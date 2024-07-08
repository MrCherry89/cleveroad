$(document).ready(function () {
  $(".footer-top__title").on("click", function () {
    $(this)
      .closest(".footer-top__links")
      .find(".footer-top__link")
      .toggleClass("show");
    $(this).find("svg").toggleClass("rotate");
  });

  $(".questions__item .questions__item-heading").on("click", function (e) {
    e.preventDefault();
    if ($(this).find(".icon").hasClass("rotate")) {
      $(this).find(".icon").removeClass("rotate");
    } else {
      $(".questions__item span").removeClass("rotate");
      $(this).find("span").addClass("rotate");
    }
    $(".questions__item").removeClass("opened");
    $(".questions__item-body").removeClass("active");
    $(this)
      .closest(".questions__item")
      .find(".questions__item-body")
      .addClass("active");
    $(this).closest(".questions__item").addClass("opened");
    $(".questions__item-body:not(.active)").slideUp();
    $(".questions__item:not(.opened)").removeClass("active");
    $(this)
      .closest(".questions__item")
      .find(".questions__item-body")
      .slideToggle();
    $(this).closest(".questions__item").toggleClass("active");
  });

  $(".ffl-wrapper").floatingFormLabels();

  $(".contacts__slider").slick({
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
  });

  jQuery("ul.tabs").each(function () {
    var $active,
      $content,
      $links = jQuery(this).find("a");
    $active = jQuery(
      $links.filter('[href="' + location.hash + '"]')[0] || $links[0]
    );
    $active.addClass("active");
    $content = $($active[0].hash);
    $links.not($active).each(function () {
      jQuery(this.hash).hide();
    });

    jQuery(this).on("click", "a", function (e) {
      $active.removeClass("active");
      $content.hide();
      $active = jQuery(this);
      $content = jQuery(this.hash);
      $active.addClass("active");
      $content.show();
      e.preventDefault();
    });
  });

  $(".drop-menu").click(function () {
    $(this).toggleClass("is-active");
    $(".header__info").toggleClass("open");
    $("body, html").toggleClass("overflow");
  });
  $(".header__menu li").click(function () {
    $(this).find(".header__menu-hide").toggleClass("open");
    $(this).find("a svg").toggleClass("rotate");
  });
});
