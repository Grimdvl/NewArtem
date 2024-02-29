function hamburger(navigationSelector, hamburgerSelector, activeClass, overlaySelector) {
    
    const navigation = document.querySelector(navigationSelector),
          hamburger = document.querySelector(hamburgerSelector),
          overlay = document.querySelector(overlaySelector);

    hamburger.addEventListener('click', () => {
        navigation.classList.toggle(activeClass);
        overlay.classList.toggle(activeClass);
        if (document.body.style.overflow == '') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
}

// module.exports = hamburger;
// export default hamburger;