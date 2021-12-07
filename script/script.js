$(document).ready(function () {
    function slide() {
        $(".slide_wrap").slick({

            autoplay: true,
            autoPlaySpeed: 1000,
            fade: true,
            dots: true,
            dotsClass: 'slick-dots',
            arrows: true,
            pauseOnHover: true,
            prevArrow: "<i class='fas fa-chevron-left'></i>",
            nextArrow: "<i class='fas fa-chevron-right'></i>",
        });
    }
    slide();
});
