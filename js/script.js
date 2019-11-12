$(function () {
    
    var menuoffset = $('.menu-part').offset().top;


    $(window).on('scroll', function () {

        var scrol = $(window).scrollTop();

        if (scrol > 0 ) {

            $(".menu-part").addClass('menufix');
        } else {
            $(".menu-part").removeClass('menufix');
        }



        if (scrol > 200) {

            $(".backtop").fadeIn(1000);
        } else {
            $(".backtop").fadeOut(1000);
        }


    });

    $(".backtop").on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });



    $(".menu-list ul li a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    //lightbok js 
    $('.venobox').venobox({
        spinner: 'three-bounce',
        spinColor: '#fcdc00',
    });

    //banner js 
    $('#banner-part, #banner-slider').slick({
        dots: true,
        dotsClass: "banner_dots",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        prevArrow: '<i class="fas btn-left fa-angle-left"></i>',
        nextArrow: '<i class="fas btn-right fa-angle-right"></i>',
        
    });
    
    //wow js 
    new WOW().init();

});










