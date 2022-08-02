(function ($) {
    "use strict"

    //navbar on scrolling
    $(window).scroll(function (){
        if ($(this).scrollTop() > 200){
            $('.navbar').fadein('slow').css('display','flex');
        }else{
            $('.navbar').fadeout('slow').css('display,none');
        }
    });


    //typed initiate
    if ($('.typed-text-output').lenght == 1){
        var typed_strings = $('.typed-text').text();
        var typed = new typed('.typed-texxt-output', {
            strings:typed_strings.split('; '),
            typeSpeed:100,
            backSpeed:20,
            smartBackspace:false,
            loop: true
        
        });

    }
})(jQuery)