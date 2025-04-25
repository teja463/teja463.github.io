const mode = localStorage.getItem("mode") || "light";
const themeToggle = document.querySelector(".themeToggle");
const body = document.querySelector("body");

document.body.className = mode;

themeToggle.addEventListener("click", () => {
    localStorage.setItem("mode", mode === "light"? "": "light")
    body.classList.toggle("light");
})