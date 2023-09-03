function hamburger(menuSelector, hamburgerSelector, activeClass) {
    
    const menu = document.querySelector(menuSelector),
          hamburger = document.querySelector(hamburgerSelector);

    hamburger.addEventListener('click', () => {
        menu.classList.toggle(activeClass);
    });
}

// module.exports = hamburger;
export default hamburger;