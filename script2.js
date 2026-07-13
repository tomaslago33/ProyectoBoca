const carousel = document.getElementById("carousel");

let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mouseleave", () => {
  isDown = false;
});

carousel.addEventListener("mouseup", () => {
  isDown = false;
});

carousel.addEventListener("mousemove", (e) => {

  if (!isDown) return;

  e.preventDefault();

  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 1.5;

  carousel.scrollLeft = scrollLeft - walk;


  const maxScroll =
    carousel.scrollWidth / 2;

  if (carousel.scrollLeft <= 0) {
    carousel.scrollLeft = maxScroll;
  }

  if (carousel.scrollLeft >= maxScroll) {
    carousel.scrollLeft = 0;
  }

});
carousel.scrollLeft = 1;

const progressBar = document.querySelector('.scroll-bar');

window.addEventListener('scroll', () => {

    const scrollTop = window.scrollY;

    const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollTop / scrollHeight;

    progressBar.style.transform = `scaleX(${progress})`;

});

document.addEventListener("DOMContentLoaded", function () {

    const swiperObras = new Swiper(".slider-obras",{

        slidesPerView:1.2,
        spaceBetween:20,
        speed:400,

        navigation:{
            nextEl:".slider-obras .flecha-slider-obras.flecha-der",
            prevEl:".slider-obras .flecha-slider-obras.flecha-izq"
        },

        breakpoints:{
    640: {
        slidesPerView: 2.2
    },
    992: {
        slidesPerView: 3.2
    },
    1200: {
        slidesPerView: 3.5
    },
    1600: {
        slidesPerView: 5.5
    }
        },

        on:{
            init:function(){

                actualizarEstadoObras(this);

            },

            slideChange:function(){

                actualizarEstadoObras(this);

            }

        }

    });

});

function actualizarEstadoObras(swiper){

    const flechaIzq = document.querySelector(".slider-obras .flecha-izq");
    const flechaDer = document.querySelector(".slider-obras .flecha-der");

    const degradado = document.querySelector(".slider-degradado-obras");

    flechaIzq.style.display = swiper.isBeginning ? "none" : "block";

    flechaDer.style.display = swiper.isEnd ? "none" : "block";

    degradado.classList.toggle("inicio", swiper.isBeginning);

    degradado.classList.toggle("fin", swiper.isEnd);

}
