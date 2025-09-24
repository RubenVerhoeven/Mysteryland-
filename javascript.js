const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-scherm");
const menuLinks = document.querySelectorAll(".menu-inhoud nav a");

// Hamburger klik: toggle menu
hamburger.addEventListener("click", () => {
    menu.classList.toggle("aan");
    const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
    hamburger.setAttribute("aria-expanded", !expanded);
});

// Klik op menu link: menu sluiten
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("aan");
        hamburger.setAttribute("aria-expanded", "false");
    });
});

// Carousel click: center de afbeelding
document.querySelectorAll('.carousel-track img').forEach(img => {
    img.addEventListener('click', () => {
        img.scrollIntoView({
            behavior: 'smooth',
            inline: 'center'
        });
    });
});
