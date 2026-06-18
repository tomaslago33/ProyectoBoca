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