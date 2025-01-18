/*global $, document, window*/


$(function () {
    "use strict";
    //header----------------------------- 
    var myHeader = $(".header");
    var slider = $(".slider");
    
    myHeader.height($(window).height());
    slider.height($(window).height());
    
    $(window).resize(function () {
        myHeader.height($(window).height());
        slider.height($(window).height());
    });
    
    //links-------------------------------
    $('.links li a').on("click", function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    
    //bx slider--------------------------
    $(".slider").bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: false,
        mode: 'fade',
        captions: true
    });
    
     //smooth scroll to div-------------------
    $('.links li a').on("click", function () {
        $("html, body").animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
        
    });
    
    // my slider--------------------------
    (function mySlider() {
        $(".my-slider .active").each(function () {
            if (!$(this).is(":last-child")) {
                $(this).delay(2000).fadeOut(1000, function () {
                    $(this).removeClass("active").next().addClass("active").fadeIn();
                    mySlider();
                });
            } else {
                $(this).delay(2000).fadeOut(1000, function () {
                    $(this).removeClass("active");
                    $(".my-slider div").eq(0).addClass('active').fadeIn();
                    mySlider();
                });
            }
        });
    }());
    
    
    //project---------------------------------
    $('.our-projects li').on("click", function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    
    
    //mixitup-------------------------------------
    mixitup('#shuffle');
    
    
    //scroll tregger--------------------------------
    $("body").niceScroll({
        cursorcolor: "rgb(26, 188, 156)",
        cursorwidth: "10px",
        background: "rgba(20,20,20,0.1)",
        cursorborder: "none",
        cursorborderradius: 10
    });
    
});


$(document).ready(function () {
    "use strict";
    $('.slider').bxSlider();
    
});












