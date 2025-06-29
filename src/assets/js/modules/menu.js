import particles from './particles';

const menu = (activeClass, menuSelector, navigationSelector, modeSelector, colorSelector) => {
    const menu = document.querySelector(menuSelector),
          nav = document.querySelector(navigationSelector),
          mode = document.querySelector(modeSelector),
          color = document.querySelector(colorSelector),
          root = document.documentElement,
          resumneIcon = document.querySelectorAll('.resume__item-icon img'),
          portfolioIcon = document.querySelectorAll('.descr__links a box-icon');

    root.classList.add('no-transition');

    const applyDarkTheme = () => {
        root.style.setProperty('--main-color', '#2ea6ff');
        root.style.setProperty('--color-black', '#fff');
        root.style.setProperty('--color-white', '#000');
        root.style.setProperty('--bg-color', '#18222c');
        root.style.setProperty('--cards-bg', 'rgba(24, 34, 44, .75)');
        resumneIcon.forEach((item) => {
            item.style.filter = 'invert(1)';
        });
        portfolioIcon.forEach((item) => {
            item.setAttribute("color", "#000000");
        });
    }

    const applyLightTheme = () => {
        root.style.setProperty('--main-color', '#FFA501');
        root.style.setProperty('--color-black', '#000');
        root.style.setProperty('--color-white', '#fff');
        root.style.setProperty('--bg-color', '#fff');
        root.style.setProperty('--cards-bg', 'rgba(255, 255, 255, .75)');
        resumneIcon.forEach((item) => {
            item.style.filter = 'invert(0)';
        });
        portfolioIcon.forEach((item) => {
            item.setAttribute("color", "#ffffff");
        });
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        root.classList.add(activeClass);
        mode.classList.add(activeClass);
        color.classList.add(activeClass);
        applyDarkTheme();
    } else {
        applyLightTheme();
    }

    setTimeout(() => {
        if (window.pJSDom?.[0]) {
            window.pJSDom[0].pJS.fn.vendors.destroypJS();
            window.pJSDom = [];
        }
        particles();
    }, 50);

    setTimeout(() => {
        root.classList.remove('no-transition');
    }, 0);

    menu.addEventListener('click', () => {
        nav.classList.toggle(activeClass);
    });

    mode.addEventListener('click', () => {
        mode.classList.toggle(activeClass);
        root.classList.toggle(activeClass);
        color.classList.toggle(activeClass);

        const isDark = root.classList.contains(activeClass);
        if (isDark) {
            applyDarkTheme();
            localStorage.setItem('theme', 'dark');
        } else {
            applyLightTheme();
            localStorage.setItem('theme', 'light');
        }

        setTimeout(() => {
            if (window.pJSDom?.[0]) {
                window.pJSDom[0].pJS.fn.vendors.destroypJS();
                window.pJSDom = [];
            }
            particles();
        }, 50);
    });
}

export default menu;
