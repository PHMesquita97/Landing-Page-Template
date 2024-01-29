function clickMenu() {
    if (burger.style.display == 'block') {
        burger.style.display = 'none'
    } else {
        burger.style.display = "block"
    }
}

function clickArrow(button) {
    // Encontre o elemento irmão com a classe 'footer_menu_itens_show' do botão clicado
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

