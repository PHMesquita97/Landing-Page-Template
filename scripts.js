function toggleMenu() {
    var menu = document.getElementById("menu");

    if (menu.style.left === "0px") {
        menu.style.left = "-500px"; // Fecha o menu
    } else {
        menu.style.left = "0px"; // Abre o menu
    }
}

function clickArrow(button) {
    var menuToShow = button.parentNode.nextElementSibling;

    if (window.getComputedStyle(menuToShow).display === 'flex') {
        menuToShow.style.display = 'none';
    } else {
        menuToShow.style.display = 'flex';
    }

}

function toggleAnswer(button) {
    var answer = button.parentNode.nextElementSibling;

    if (window.getComputedStyle(answer).display === 'none') {
        answer.style.display = 'block';
        button.src = "./assets/icons/Minus.svg";
    } else {
        answer.style.display = 'none';
        button.src = "./assets/icons/Plus.svg";
    }
}

