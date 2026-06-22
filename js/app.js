const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("Click", () => {
    menu.classList.toggle("active");
});