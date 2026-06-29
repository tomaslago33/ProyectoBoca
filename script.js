// --- 1. SELECCIÓN DE ELEMENTOS (CARRUSEL PRINCIPAL) ---
const track = document.getElementById('track');
let diapositivas = document.querySelectorAll('.diapositiva');
let indiceActual = 0;
let isDragging = false;
let startPos = 0;

// --- 2. EVENTOS DE ARRASTRE (DRAG) ---
track.addEventListener('mousedown', dragStart);
track.addEventListener('mouseup', dragEnd);
track.addEventListener('mousemove', dragAction);
track.addEventListener('mouseleave', dragEnd);

function dragStart(event) {
    isDragging = true;
    startPos = event.clientX;
    track.style.transition = 'none';
}

function dragAction(event) {
    if (!isDragging) return;
    
    const currentPosition = event.clientX;
    const diff = currentPosition - startPos;
    
    const anchoDiapositiva = diapositivas[0].getBoundingClientRect().width;
    const desplazamientoManual = (indiceActual * -anchoDiapositiva) + diff;
    
    track.style.transform = `translateX(${desplazamientoManual}px)`;
}

function dragEnd(event) {
    if (!isDragging) return;
    isDragging = false;
    
    const endPos = event.clientX;
    const movedBy = endPos - startPos;

   
    if (movedBy < -100 && indiceActual < diapositivas.length - 1) {
        indiceActual++;
    } else if (movedBy > 100 && indiceActual > 0) {
        indiceActual--;
    }
    actualizarPosicion();
}

// --- 3. FUNCIÓN DE ACTUALIZACIÓN  ---
function actualizarPosicion() { 
    const anchoDiapositiva = diapositivas[0].getBoundingClientRect().width;
    const desplazamiento = indiceActual * -anchoDiapositiva;
    track.style.transition = 'transform 0.8s cubic-bezier(0.45, 0, 0.55, 1)';
    track.style.transform = `translateX(${desplazamiento}px)`;
}


window.addEventListener('resize', () => {
    track.style.transition = 'none';
    actualizarPosicion();
});

// --- 4. MOVIMIENTO AUTOMÁTICO  ---
function moverAutomaticamente() {
    if (!isDragging) { 
        indiceActual++;
        if (indiceActual >= diapositivas.length) {
            indiceActual = 0;
        }
        actualizarPosicion();
    }
}
// 
setInterval(moverAutomaticamente, 5000);

// --- 5. INICIALIZACIÓN DE BOCA SHOP (SWIPER.JS) ---
document.addEventListener("DOMContentLoaded", function() {
    const swiperShop = new Swiper(".slider-productos", {
        direction: "horizontal",
        slidesPerView: 1.3, 
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
            480: { slidesPerView: 1.8 },
            768: { slidesPerView: 2.5 },
            992: { slidesPerView: 3.5 },
            1300: { slidesPerView: 4.5 }, 
            1600: { slidesPerView: 5.5 }
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

const swiperCopas = new Swiper('.slider-copas', {
    slidesPerView: 'auto', 
    spaceBetween: 16,      
    loop: false, 
    grabCursor: true,
    navigation: {
        nextEl: '.slider-copas .flecha-der',
        prevEl: '.slider-copas .flecha-izq',
    }
});