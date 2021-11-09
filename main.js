const navBarBtn = document.querySelector(".nav-bar-btn");
const listOverlay = document.querySelector(".overlay");

navBarBtn.addEventListener("click", () => {
    if (navBarBtn.classList.contains("toggle")) {
        navBarBtn.classList.remove("toggle");
        listOverlay.classList.remove("open");
    } else {
        navBarBtn.classList.add("toggle");
        listOverlay.classList.add("open");
    }
});
