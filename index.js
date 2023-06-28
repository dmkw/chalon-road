let button = document.getElementById("header__burger");
let menu = document.getElementById("burger-menu");
let isOpen = false;

button.onclick = function() {
    if(!isOpen) {
        menu.setAttribute("style", "display: block");
        isOpen = !isOpen;
    }
    else {
        menu.setAttribute("style", "display: none");
        isOpen = !isOpen;
    }
}