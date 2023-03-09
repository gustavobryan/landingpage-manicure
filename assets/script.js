const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav__menu');
const imgs = document.getElementById('img');
const img = document.querySelectorAll('#img img');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
});

let idx = 0;

function carrossel () {
    idx++;

    if(idx > img.length -2) {
        idx = 0;
    }

      imgs.style.transform = `translateX(${-idx * 350}px)`;
}

setInterval(carrossel, 1800);