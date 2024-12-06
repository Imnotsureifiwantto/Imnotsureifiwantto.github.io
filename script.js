document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.style.padding = window.scrollY > 50 ? "0.5rem 0" : "1rem 0";
});
