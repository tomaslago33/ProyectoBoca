const track = document.getElementById('track');
const diapositivas = document.querySelectorAll('.diapositiva');
let indiceActual = 0;

function moverCarrusel() {
    // Incrementamos el índice
    indiceActual++;

    if (indiceActual >= diapositivas.length) {
        indiceActual = 0;
    }

    
    const desplazamiento = indiceActual * -100;
    
    // Aplicamos el movimiento con la propiedad transform
    track.style.transform = `translateX(${desplazamiento}%)`;
}

setInterval(moverCarrusel, 5000);