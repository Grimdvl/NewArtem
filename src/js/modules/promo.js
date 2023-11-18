function promo(linkSelector, aboutSelector, activeClass) {
    
    const btnLink = document.querySelector(linkSelector),
          btnAbout = document.querySelector(aboutSelector);

    function btnActive() {
        btnAbout.classList.toggle(activeClass);
        btnLink.classList.toggle(activeClass);
    }

    btnAbout.addEventListener('click', btnActive);
    btnLink.addEventListener('click', btnActive);
}

export default promo;