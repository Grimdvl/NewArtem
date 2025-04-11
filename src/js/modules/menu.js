import skills from './skills';
import { loadingSkillsCards } from './cards';

const navigationMenu = (activeClass, menuSelector, navigationSelector, modeSelector, colorSelector) => {
    const menu = document.querySelector(menuSelector),
          nav = document.querySelector(navigationSelector),
          mode = document.querySelector(modeSelector),
          color = document.querySelector(colorSelector),
          root = document.documentElement;

    let hasSkillsLoaded = false;

    const applyDarkTheme = () => {
        root.style.setProperty('--main-color', '#2ea6ff');
        root.style.setProperty('--color-black', '#fff');
        root.style.setProperty('--color-white', '#000');
    }

    const applyLightTheme = () => {
        root.style.setProperty('--main-color', '#FFA501');
        root.style.setProperty('--color-black', '#000');
        root.style.setProperty('--color-white', '#fff');
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

    menu.addEventListener('click', () => {
        nav.classList.toggle(activeClass);
    });

    const clearing = () => {
        const blocks = document.querySelectorAll('.skills__card-front-icon .block');
        const counters = document.querySelectorAll('.counter');
        const width = document.querySelectorAll('.skills__ratings-line span');
        const countersSecond = document.querySelectorAll('.skills__ratings-counter');

        countersSecond.forEach((counterSecond) => {
            counterSecond.textContent = '';
        });
        width.forEach((item) => {
            item.style.width = 0;
        });
        blocks.forEach((block) => {
            block.remove();
        });
        counters.forEach((counter) => {
            counter.textContent = '';
        });
    }

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

        if (document.querySelector('.skills').classList.contains('animated') && !hasSkillsLoaded) {
            hasSkillsLoaded = true;
            clearing();
            setTimeout(() => {
                loadingSkillsCards('.skills__card-front-icon', '.counter');
                skills('.skills__ratings-counter', '.skills__ratings-line span');
                hasSkillsLoaded = false;
            }, 500);
        }
    });
}

export default navigationMenu;
