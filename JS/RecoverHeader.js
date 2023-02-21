"use strict";

function consoleBG() {

    if ($(window).scrollTop() <=$(".skip_banner").offset().top) {
        $('#head').css('background', 'rgba(0,0,0,0)',);
        $('#head').css('border', '0');
        $('.submenu').css('background', 'rgba(0,0,0,0)');
        $('.basket').css("border-left", '0');
        $('.logo').css("opacity", "0.5");
        $('.submenu').css('border', '0');
        $('.submenu>li').css('border', '0');
    } else {
        $('#head').css('background', "#313131");
        $('#head').css('border', '1px solid #707070');
        $('.submenu').css('background', "#313131");
        $('.basket').css("border-left", '1px solid  #707070');
        $('.logo').css("opacity", "1");
        $('.submenu>li').css("border-left", '2px solid  #707070');
        $('.submenu').css('border-top', '1px solid #707070');
        $('.submenu').css('border-bottom', '2px solid #707070');
    }
}
consoleBG();

$(window).scroll(function() {
    consoleBG();
});
