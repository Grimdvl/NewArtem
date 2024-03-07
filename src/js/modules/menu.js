const navigationMenu = (activeClass, menuSelector, navigationSelector, ) => {
    const menu = document.querySelector(menuSelector),
          nav = document.querySelector(navigationSelector);

    menu.addEventListener('click', () => {
        nav.classList.toggle(activeClass);
    });
}

export default navigationMenu;