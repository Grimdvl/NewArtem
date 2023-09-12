function hamburger(hamburgerSelector, menuSelector, menuCloseSelector, activeClass) {
    
    const hamburger = document.querySelector(hamburgerSelector),
          menu = document.querySelector(menuSelector);

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle(activeClass);
    });
}

// module.exports = hamburger;
export default hamburger;