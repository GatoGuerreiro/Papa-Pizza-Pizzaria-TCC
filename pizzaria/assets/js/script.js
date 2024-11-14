let carrinho = document.querySelector(".carrinho");

document.querySelector("#cart").onclick = () => {
    carrinho.classList.toggle('active');
    menuResponsivo.classList.remove('active');
    login.classList.remove('active');
}

let login = document.querySelector('.login-form');

document.querySelector("#login").onclick = () => {
    login.classList.toggle('active');
    menuResponsivo.classList.remove('active');
    carrinho.classList.remove('active');
}

let menuResponsivo = document.querySelector('.menu-site');
document.querySelector('#menu').onclick = () => {
    menuResponsivo.classList.toggle('active');

    login.classList.remove('active');

    carrinho.classList.remove('active');
}

window.onscroll = () => {
    carrinho.classList.remove('active');
    login.classList.remove('active');
    menuResponsivo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {

    autoplay:{
        delay: 2500,
        disableOnInteraction: false,
    },
    grapCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

let verModalCorpo = document.querySelector(".menu-modal-container");
let verModalBox = verModalCorpo.querySelector(".menu-modal");

document.querySelectorAll(".menu .box").forEach(menu => {
    menu.onclick = () => {
        verModalCorpo.style.display = 'flex';
        let nome = nome.getAttribute('data-name');
        verModalBox.forEach(visualizar =>{
            let chamada = visualizar.getAttribute('data-target');
            if (nome == chamada){
                visualizar.classList.add('active');
            }
        })
    };
});

verModalCorpo.querySelector('#fechar').onclick = () => {
    verModalCorpo.style.display = 'none';
    verModalBox.forEach(fechar => {
        fechar.classList.remove('active');
    });
};