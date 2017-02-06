/*
 * Author: ArtStyles Brands (ArtTemplate / ArtIcons)
 * URL: http://themeforest.net/user/artstyles
 * Template Name: Cascadia - Multipurpose Business Agency/Personal Portfolio
 * Version: 1.1
*/

"use strict";
(function ($) {
    var $item = $('.main-slider.carousel .item');
    var $wHeight = $(window).height();
    $item.eq(0).addClass('active');
    $item.height($wHeight);
    $item.addClass('image-slider');
    $('.main-slider.carousel img').each(function () {
        var $src = $(this).attr('src'); var $color = $(this).attr('data-color'); $(this).parent().css({ 'background-image': 'url(' + $src + ')', 'background-color': $color }); $(this).remove();
    });
    $(window).on('resize', function () {
        $wHeight = $(window).height(); $item.height($wHeight);
    });
    var autoresizeInit = function () {
        var container = autosize(document.querySelectorAll('textarea'));
    };
    var objectFitInit = function () {
        if ($().objectFitPolyfill) { $(".img-cover").objectFitPolyfill({ fit: "cover" }); };
    };
    var collapseActiveInit = function () {
        if ($().on) { $('.panel-collapse').on('show.bs.collapse', function () { $(this).siblings('.panel-heading').addClass('active'); }); $('.panel-collapse').on('hide.bs.collapse', function () { $(this).siblings('.panel-heading').removeClass('active'); }); };
    };
    var reviewsInit = function () {
        if ($().owlCarousel) { var owl = $("#reviews"); owl.owlCarousel({ itemsCustom: [[0, 1], [1200, 2]], autoPlay: false, stopOnHover: true, navigation: false, pagination: true, dragBeforeAnimFinish: true, mouseDrag: true, touchDrag: true }); };
    };
    var paymentInit = function () {
        if ($().owlCarousel) { var owl = $("#payment"); owl.owlCarousel({ itemsCustom: [[0, 1], [680, 2], [990, 3], [1200, 4]], autoPlay: true, stopOnHover: true, navigation: false, pagination: true, dragBeforeAnimFinish: true, mouseDrag: true, touchDrag: true }); };
    };
    var brandInit = function () {
        if ($().owlCarousel) {
            var owl = $("#brands");
            owl.owlCarousel({ itemsCustom: [[0, 1], [480, 2], [680, 3], [990, 4], [1200, 5]], autoPlay: true, stopOnHover: true, navigation: false, pagination: true, dragBeforeAnimFinish: true, mouseDrag: true, touchDrag: true });
        };
    };
    var masonryInit = function () {
        if ($().masonry) { $('.news-grid').masonry({ itemSelector: '.news-item', isFitWidth: true, gutter: 30 }); };
    };
    var popupInit = function () {
        if ($().magnificPopup) { $('.popup').magnificPopup({ type: 'inline', fixedContentPos: false, fixedBgPos: true, overflowY: 'hidden', closeBtnInside: true, preloader: false, midClick: true, removalDelay: 300, mainClass: 'my-mfp-slide-bottom' }); }
    };
    var progressbarInit = function () {
        $(".progress div").each(function () { var display = $(this), currentValue = parseInt(display.text()), nextValue = $(this).attr("aria-valuenow"), diff = nextValue - currentValue, step = (0 < diff ? 1 : -1); if (nextValue == "0") { $(display).css("padding", "0"); } else { $(display).css("color", "#fff").animate({ "width": nextValue + "%" }, "slow"); } for (var i = 0; i < Math.abs(diff) ; ++i) { setTimeout(function () { currentValue += stepdisplay.html(currentValue + "%"); }, 20 * i); } })
    };
    $("#subscribeForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) { formErrorSub(); submitMSGSub(false, "You have not entered an email"); } else { event.preventDefault(); subscribeForm(); }
    });
    function subscribeForm() {
        var email = $("#email-subscription").val(); $.ajax({ type: "POST", url: "php/form-subscribe.php", data: "&email=" + email, success: function (text) { if (text == "success") { formSuccessSub(); } else { formErrorSub(); submitMSGSub(false, text); } } });
    }
    function formSuccessSub() {
        $("#subscribeForm")[0].reset(); submitMSGSub(true, "Message Submitted!");
    }
    function formErrorSub() {
        $("#subscribeForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () { $(this).removeClass(); });
    }
    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = "style-text-success";
        } else { var msgClasses = "style-text-danger"; } $("#msgSubmitSub").removeClass().addClass(msgClasses).text(msg);
    }
    $("#contactForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) { formError(); submitMSG(false, "Did you fill in the form properly?"); } else { event.preventDefault(); submitForm(); }
    });
    function submitForm() {
        var name = $("#name").val(); var email = $("#email").val(); var message = $("#message").val(); $.ajax({ type: "POST", url: "php/form-contact.php", data: "name=" + name + "&email=" + email + "&message=" + message, success: function (text) { if (text == "success") { formSuccess(); } else { formError(); submitMSG(false, text); } } });
    }
    function formSuccess() {
        $("#contactForm")[0].reset(); submitMSG(true, "Message Submitted!");
    }
    function formError() {
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () { $(this).removeClass(); });
    }
    function submitMSG(valid, msg) {
        if (valid) { var msgClasses = "style-text-success"; } else { var msgClasses = "style-text-danger"; } $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
    var previousScroll = 0;
    $(window).scroll(function () {
        $('.section-stats').each(function () {
            var imagePos = $(this).offset().top; var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 800) {
                $(function () {
                    $(".digit").countimator();
                });
            }
        });
        $(function () {
            var currentScroll = $(this).scrollTop();
            //if ($(this).scrollTop() > 50) {
            if (currentScroll > previousScroll) {
                $('.fixed-header').addClass("sticky");
            }
            else {
                $('.fixed-header').removeClass("sticky");
            }
            previousScroll = currentScroll;
        });
    });
    $('a[href^="!#"]').on('click', function (e) {
        e.preventDefault(); var target = this.hash; var $target = $(target);
        $('html, body').stop().animate({ 'scrollTop': $target.offset().top }, 900, 'swing', function () { window.location.hash = target; });
    });
    $(function () {
        autoresizeInit();
        objectFitInit();
        collapseActiveInit();
        reviewsInit();
        paymentInit();
        brandInit();
        masonryInit();
        popupInit();
        progressbarInit();
    });
})(jQuery);
document.documentElement.className += (("ontouchstart" in document.documentElement) ? ' touch' : ' no-touch');
var s = skrollr.init({ forceHeight: false, mobileCheck: function () { return false; } }); //Scroll
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) { $('#return-to-top').fadeIn(200); } else { $('#return-to-top').fadeOut(200); }
});
$('#return-to-top').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 500);
});