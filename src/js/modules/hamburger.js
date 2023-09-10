function hamburger(navigationSelector, hamburgerSelector, activeClass) {
    
    const navigation = document.querySelector(navigationSelector),
          hamburger = document.querySelector(hamburgerSelector);

    hamburger.addEventListener('click', () => {
        navigation.classList.toggle(activeClass);
    });
}

// module.exports = hamburger;
export default hamburger;