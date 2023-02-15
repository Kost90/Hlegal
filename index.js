const settingSlider = {
    dots: true,
    arrows: true,
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

// $(window).on('resize', function () {
//     if ($(window).width() > 320 && !$('.slider').hasClass('slick-initialized')) {
//         $('.slider').slick(settingSlider);
//     }
//     if ($(window).width() >= 1025 && $('.slider').hasClass('slick-initialized')) {
//         $('.slider').slick('unslick');
//     }
// });