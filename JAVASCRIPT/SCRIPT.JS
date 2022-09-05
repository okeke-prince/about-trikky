const nav = document.querySelector(".head");
let lastscrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastscrollY < window.scrollY) {
        nav.classList.add("nav--hidden");
        console.log("we are going down");
    } else {
        nav.classList.remove("nav--hidden");
        console.log("we are going up");
    }
    lastscrollY = window.scrollY;
});