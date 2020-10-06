$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        dotsClass: "carousel-pagination",
        dotClass: "carousel-pagination__item",
        autoplay: true,
        autoplayTimeout: 10000,
        smartSpeed: 1000
    })
})