function promo(linkSelector, aboutSelector, activeClass) {
    
    const btnLink = document.querySelector(linkSelector),
          btnAbout = document.querySelector(aboutSelector);

    function btnAboutActive() {
        btnAbout.classList.add(activeClass);
        btnLink.classList.remove(activeClass);
    }

    function btnLinkActive() {
        btnLink.classList.add(activeClass);
        btnAbout.classList.remove(activeClass);
    }

    btnAbout.addEventListener('click', btnAboutActive);
    btnLink.addEventListener('click', btnLinkActive);
}

export default promo;