const mode = localStorage.getItem("mode") || "";
const themeToggle = document.querySelector(".themeToggle");
const body = document.querySelector("body");

document.body.className = mode;

themeToggle.addEventListener("click", () => {
    localStorage.setItem("mode", mode === "dark"? "": "dark")
    body.classList.toggle("dark");
})