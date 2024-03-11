const navigationMenu = (activeClass, menuSelector, navigationSelector, modeSelector, colorSelector) => {
    const menu = document.querySelector(menuSelector),
          nav = document.querySelector(navigationSelector),
          mode = document.querySelector(modeSelector),
          color = document.querySelector(colorSelector);

    menu.addEventListener('click', () => {
        nav.classList.toggle(activeClass);
    });


    mode.addEventListener('click', () => {
        mode.classList.toggle(activeClass);
        document.documentElement.classList.toggle(activeClass);
        color.classList.toggle(activeClass);
    });
}

export default navigationMenu; 