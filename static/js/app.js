const mode = localStorage.getItem("mode") || "";
const toggle = document.querySelector(".themeToggle");
const body = document.querySelector("body");

document.body.className = mode;

toggle.addEventListener("click", () => {
    localStorage.setItem("mode", mode === "light"? "": "light")
    body.classList.toggle("light");
})