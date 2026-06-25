document.addEventListener("DOMContentLoaded", function() {
    const swiperShop = new Swiper(".slider-productos2", {
        direction: "horizontal",
        slidesPerView: 2.5, 
        slidesPerGroup: 1,
        spaceBetween: 16,
        loop: false,
        centeredSlides: false,
        mousewheel: {
            forceToAxis: true
        },
        speed: 300,
        navigation: {
            nextEl: ".flecha-slider.flecha-der", 
            prevEl: ".flecha-slider.flecha-izq"  
        },
        breakpoints: {
            480: { slidesPerView: 2.5 },
            768: { slidesPerView: 2.5 },
            992: { slidesPerView: 2.5 },
            1300: { slidesPerView: 2.5 }, 
            1600: { slidesPerView: 2.5 }
        },
        on: {
            init: function () {
                controlarFlechaIzquierda(this);
            },
            slideChange: function () {
                controlarFlechaIzquierda(this);
            }
        }
    });

    function controlarFlechaIzquierda(swiper) {
        const flechaIzq = document.querySelector(".flecha-slider.flecha-izq");
        if (flechaIzq) {
            if (swiper.isBeginning) {
                flechaIzq.style.display = "none";
            } else {
                flechaIzq.style.display = "block";
            }
        }
    }
});
