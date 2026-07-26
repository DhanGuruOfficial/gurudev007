// =========================
// SMOOTH NAVBAR
// =========================

window.addEventListener("scroll", function () {

const nav = document.querySelector("nav");

if (window.scrollY > 80) {
    nav.classList.add("sticky");
} else {
    nav.classList.remove("sticky");
}

});


// =========================
// ACTIVE MENU
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 120;

if (pageYOffset >= sectionTop) {
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {
link.classList.add("active");
}

});

});
