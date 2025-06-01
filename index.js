window.addEventListener("scroll", () => {
    const header = document.querySelector(".hearder");
    header.classList.toggle("sticky", window.scrollY > 0);
});