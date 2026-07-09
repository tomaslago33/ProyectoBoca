document.addEventListener("DOMContentLoaded", function() {
    const swiperShop = new Swiper(".slider-productos2", {
        direction: "horizontal",
        slidesPerView: 3.5, 
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

document.addEventListener("DOMContentLoaded", function () {

    new Swiper(".slider-liga", {
        slidesPerView: 4.5,
        spaceBetween: 16,
    });

    new Swiper(".slider-sudaca", {
        slidesPerView: 4.5,
        spaceBetween: 16,
    });

    new Swiper(".slider-argentina", {
        slidesPerView: 4.5,
        spaceBetween: 16,
    });

    // CAMBIO DE TORNEOS

    const links = document.querySelectorAll(".links-torneo a");
    const torneos = document.querySelectorAll(".torneo");

    links.forEach(link => {

        link.addEventListener("click", function(e){

            e.preventDefault();

            const torneoSeleccionado = this.dataset.torneo;

            // sacar activo de todos los links
            links.forEach(l => l.classList.remove("activo"));

            // sacar activo de todos los torneos
            torneos.forEach(t => t.classList.remove("activo"));

            // activar link clickeado
            this.classList.add("activo");

            // mostrar torneo correspondiente
            document
                .getElementById(torneoSeleccionado)
                .classList.add("activo");

        });

    });

});