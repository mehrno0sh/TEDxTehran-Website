"use strict";

//Scroll to
$('a[href^="#"]').click(function(){

var the_id = $(this).attr("href");

    $('html, body').animate({
        scrollTop:$(the_id).offset().top
    }, 'slow');

return false;});

//Typed
  $(function(){
      $(".typed").typed({
        strings: ["Welcome to Cascadia", "Multi-Purpose HTML5 Template"],
        typeSpeed: 30
      });
  });