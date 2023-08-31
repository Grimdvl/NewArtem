function btnPromo() {
    const btnLink = document.querySelector('.promo__link'),
          btnAbout = document.querySelector('.promo__about');

    btnAbout.addEventListener('click', () => {
        btnAbout.classList.add('btn');
        btnLink.classList.remove('btn');
    });

    btnLink.addEventListener('click', () => {
        btnLink.classList.add('btn');
        btnAbout.classList.remove('btn');
    });
}

module.exports = btnPromo;