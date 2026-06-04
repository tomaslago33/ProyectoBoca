document.querySelectorAll(".linknoticias").forEach(link => {
    function runAnimation(className){
        link.classList.remove("hover-in","hover-out");
        void link.offsetWidth;
        link.classList.add(className);
    }
    link.addEventListener("mouseenter", () => {
        runAnimation("hover-in");
    });
    link.addEventListener("mouseleave", () => {
        runAnimation("hover-out");
    });
});