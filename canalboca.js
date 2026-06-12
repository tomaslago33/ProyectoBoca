const links = document.querySelectorAll(".linkcanal");
links.forEach(link => {
    link.addEventListener("mouseenter",() => {
        link.classList.remove("hover-in","hover-out");
        void link.offsetWidth;
        link.classList.add("hover-in")
    });
link.addEventListener("mouseleave", () => {
    link.classList.remove("hover-in","hover-out");
    void link.offsetWidth;
    link.classList.add("hover-out");   
    });
})