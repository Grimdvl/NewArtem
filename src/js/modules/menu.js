const navigationMenu = (activeClass, menuSelector, navigationSelector, modeSelector) => {
    const menu = document.querySelector(menuSelector),
          nav = document.querySelector(navigationSelector),
          mode = document.querySelector(modeSelector);

    menu.addEventListener('click', () => {
        nav.classList.toggle(activeClass);
    });


    mode.addEventListener('click', () => {
        mode.classList.toggle(activeClass);
        document.documentElement.classList.toggle(activeClass);
    });
}

export default navigationMenu; 