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
                controlarDegradado(this);
            },
            slideChange: function () {
                controlarFlechaIzquierda(this);
                controlarDegradado(this);
            }
        }
    });

    function controlarFlechaIzquierda(swiper) {
        const flechaIzq = swiper.navigation.prevEl;
        if (flechaIzq) {
            if (swiper.isBeginning) {
                flechaIzq.style.display = "none";
            } else {
                flechaIzq.style.display = "block";
            }
        }
    }
});

function controlarDegradado(swiper) {
    const degradado = swiper.el.querySelector(".sliderdegradado2");

    if (!degradado) return;

    degradado.style.setProperty(
        "--opacidad-izq",
        swiper.isBeginning ? "0" : "1"
    );
}

