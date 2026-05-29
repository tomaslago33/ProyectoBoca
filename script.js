const track = document.getElementById('track');
let diapositivas = document.querySelectorAll('.diapositiva');
let indiceActual = 0;

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;

// 1. EVENTOS DE MOUSE
// click (Mano abierta -> Mano cerrada)
track.addEventListener('mousedown', dragStart);
// sueltar el click
track.addEventListener('mouseup', dragEnd);
//  movimiento de mouse
track.addEventListener('mousemove', dragAction);
//  el mouse sale del carrusel
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
    
    const desplazamientoManual = (indiceActual * -window.innerWidth) + diff;
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

// 2. FUNCIÓN PARA ACTUALIZAR EL MOVIMIENTO 
function actualizarPosicion() { 
    const anchoDiapositiva = diapositivas[0].getBoundingClientRect().width;
    const desplazamiento = indiceActual * -anchoDiapositiva;
    track.style.transition = `transform 0.8s cubic-bezier(0.45, 0, 0.55, 1)`;
    track.style.transform = `translateX(${desplazamiento}px)`;
}

window.addEventListener(`resize` , ()=>{
    track.style.transition= 'none';
    actualizarPosicion();
});

setInterval(moverAutomaticamente, 5000);


// 3. MOVIMIENTO AUTOMÁTICO 
  function moverAutomaticamente() {
    if (!isDragging) { 
        indiceActual++;
        if (indiceActual >= diapositivas.length) {
            indiceActual = 0;
        }
        actualizarPosicion();
    }
}

// movimiento cada 5 segundos
setInterval(moverAutomaticamente, 5000);

document.addEventListener("DOMContentLoaded", function() {
    const swiperShop = new Swiper(".slider-productos", {
        direction: "horizontal",
        slidesPerView: 1.1,
        slidesPerGroup: 1,
        spaceBetween: 16,
        loop: false,
        centeredSlides: false,
        mousewheel: {
            forceToAxis: true
        },
        speed: 300,
        navigation: {
            nextEl: ".flecha-der", 
            prevEl: ".flecha-izq"  
        },
        breakpoints: {
            480: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1300: { slidesPerView: 4.2 },
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
        const flechaIzq = document.querySelector(".flecha-izq");
        if (flechaIzq) {
            if (swiper.isBeginning) {
                flechaIzq.style.display = "none";
            } else {
                flechaIzq.style.display = "block";
            }
        }
    }
});