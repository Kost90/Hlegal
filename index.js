const settingSlider = {
    dots: true,
    arrows: false,
    infinite: true,
    lazyLoad: 'ondemand',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    focusOnSelect: true,
    autoplaySpeed: 2000,
    mobileFirst: true,
    responsive:[
        {
            breakpoint:600,
            settings: {
                slidesToShow: 1,
            }
        },

        // {
        //     breakpoint: 1200,
        //     settings: 'unslick'
        // }
    ]
}

$(document).ready(function(){
    $('.slider').slick(settingSlider);
});

    $(".arrow").on("click", function (event) {
    event.preventDefault();
    const id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});


    $(function () {
    $(".tabs").tabs();
});


// $(window).on('resize', function () {
//     if ($(window).width() > 320 && !$('.slider').hasClass('slick-initialized')) {
//         $('.slider').slick(settingSlider);
//     }
//     if ($(window).width() >= 1025 && $('.slider').hasClass('slick-initialized')) {
//         $('.slider').slick('unslick');
//     }
// });