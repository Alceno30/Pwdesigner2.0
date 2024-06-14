let espaco;
let velocidade = 10;
let parada = true;
let ultimaposx;
let tempo = 0;
let tempoLimite = 300;
let divs = document.querySelectorAll("div.slide");
let botaomenu = document.querySelector("nav button");
let menurapido = document.querySelector("nav ul:nth-of-type(2)");
if (divs[0] != null) {
    espaco = divs[0].offsetWidth;
}



for (let i = 0; i < divs.length; i++) {
    divs[i].style.left = (espaco * i) + "px";
    if (i == divs.length - 1)
        ultimaposx = espaco * i;
}

function Sliding() {
    for (let i = 0; i < divs.length; i++) {
        if (parada == false) {
            divs[i].style.left = (divs[i].offsetLeft - velocidade) + "px";
        } else {
            if (divs[i].offsetLeft % espaco != 0) {
                divs[i].style.left = (divs[i].offsetLeft - velocidade) + "px";
            }
        }
        if (divs[i].offsetLeft <= (-1 * espaco)) {
            divs[i].style.left = ultimaposx + "px";
            parada = true;
        }
    }
    if (parada) {
        tempo++;
        if (tempo >= tempoLimite) {
            tempo = 0;
            parada = false;
        }
    }
    if (window.innerWidth >= 1150) {
        menurapido.style.display = "none";
    }

    requestAnimationFrame(Sliding);
}




// exibir o menu
let menuaberto = false;


function Showmenu() {
    if (menuaberto) {
        menuaberto = false;
        menurapido.style.display = "none";
    } else {
        menuaberto = true;
        menurapido.style.display = "block";
    }
}



const imagens = document.querySelectorAll('.imagem img');

imagens.forEach(imagem => {
    imagem.addEventListener('click', function() {
        const src = this.src;
        const lightbox = document.querySelector('.lightbox');
        const lightboxImg = document.querySelector('.lightbox img');

        lightbox.style.display = 'block';
        lightboxImg.src = src;

        // Função para fechar a caixa de luz (ex: clique no botão fechar)
        function fecharLightbox() {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
        }
    });
});

function Start() {
    botaomenu.addEventListener('click', Showmenu);
    Sliding();
}
document.addEventListener('DOMContentLoaded', Start);