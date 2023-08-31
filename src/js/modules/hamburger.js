function hamburger(hamburgerSelector, menuSelector, menuCloseSelector, activeClass) {
    
    const hamburger = document.querySelector(hamburgerSelector),
          menu = document.querySelector(menuSelector),
          menuClose = menu.querySelector(menuCloseSelector);

    hamburger.addEventListener('click', () => {
        menu.classList.add(activeClass);
    });

    menuClose.addEventListener('click', () => {
        menu.classList.remove(activeClass);
    });
}

// module.exports = hamburger;
export default hamburger;