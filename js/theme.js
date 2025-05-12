let theme = document.querySelector("link#theme");
let themebtn = document.querySelector("ul.user-toggle li.btn")


if (localStorage.getItem("theme") != null) {
    theme.setAttribute("href", localStorage.getItem("theme") === "light" ? "../../css/light-global.css" : "../../css/dark-global.css")
}

themebtn.onclick = function () {
    theme.setAttribute("href", theme.getAttribute("href") === "../../css/light-global.css" ? "../../css/dark-global.css" : "../../css/light-global.css") 

    theme.getAttribute("href") === "../../css/dark-global.css" ? theme.setAttribute("data-theme", "dark") : theme.setAttribute("data-theme", "light")
    
    themebtn.querySelector(".inner").classList.toggle("dark-btn");
    
    window.localStorage.setItem("theme", theme.getAttribute("data-theme"))
}