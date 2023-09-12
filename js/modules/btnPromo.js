function btnPromo(linkSelector, aboutSelector, buttonSelector) {
    
    const btnLink = document.querySelector(linkSelector),
          btnAbout = document.querySelector(aboutSelector);

    btnAbout.addEventListener('click', () => {
        btnAbout.classList.add(buttonSelector);
        btnLink.classList.remove(buttonSelector);
    });

    btnLink.addEventListener('click', () => {
        btnLink.classList.add(buttonSelector);
        btnAbout.classList.remove(buttonSelector);
    });
}

export default btnPromo;